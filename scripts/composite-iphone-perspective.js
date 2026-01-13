#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// =============================================================================
// CONFIGURAÇÃO
// =============================================================================

// Coordenadas dos cantos da TELA ajustadas manualmente para preservar o "chin" (borda inferior)
// e corrigir a inclinação (skew) baseada no topo.
const SCREEN_CORNERS = [
    { x: 33, y: 21 },      // TL
    { x: 409, y: 37 },     // TR
    { x: 430, y: 855 },    // BR (Raised to preserve bottom bezel)
    { x: 8, y: 839 },      // BL (Slanted up ~16px relative to BR to match top slant)
];

// Dimensões "virtuais" da tela para renderização da textura
// Quanto maior, melhor a qualidade, mas mais lento.
const TEXTURE_WIDTH = 500;
const TEXTURE_HEIGHT = 1000; // Aspect ratio aproximado 1:2

// =============================================================================
// LÓGICA DE PERSPECTIVA (MATH)
// =============================================================================

function getHomographyMatrix(srcWidth, srcHeight, dstPoints) {
    const u0 = 0, v0 = 0;
    const u1 = srcWidth, v1 = 0;
    const u2 = srcWidth, v2 = srcHeight;
    const u3 = 0, v3 = srcHeight;

    const x0 = dstPoints[0].x, y0 = dstPoints[0].y;
    const x1 = dstPoints[1].x, y1 = dstPoints[1].y;
    const x2 = dstPoints[2].x, y2 = dstPoints[2].y;
    const x3 = dstPoints[3].x, y3 = dstPoints[3].y;

    return computeH(
        [x0, y0, x1, y1, x2, y2, x3, y3],
        [u0, v0, u1, v1, u2, v2, u3, v3]
    );
}

function computeH(src, dst) {
    let A = [];
    let b = [];

    for (let i = 0; i < 4; i++) {
        let sx = src[i * 2], sy = src[i * 2 + 1];
        let dx = dst[i * 2], dy = dst[i * 2 + 1];

        A.push([sx, sy, 1, 0, 0, 0, -sx * dx, -sy * dx]);
        A.push([0, 0, 0, sx, sy, 1, -sx * dy, -sy * dy]);
        b.push(dx);
        b.push(dy);
    }

    const n = 8;
    for (let i = 0; i < n; i++) {
        let maxEl = Math.abs(A[i][i]);
        let maxRow = i;
        for (let k = i + 1; k < n; k++) {
            if (Math.abs(A[k][i]) > maxEl) {
                maxEl = Math.abs(A[k][i]);
                maxRow = k;
            }
        }

        for (let k = i; k < n; k++) {
            let tmp = A[maxRow][k]; A[maxRow][k] = A[i][k]; A[i][k] = tmp;
        }
        let tmp = b[maxRow]; b[maxRow] = b[i]; b[i] = tmp;

        for (let k = i + 1; k < n; k++) {
            let c = -A[k][i] / A[i][i];
            for (let j = i; j < n; j++) {
                if (i === j) A[k][j] = 0;
                else A[k][j] += c * A[i][j];
            }
            b[k] += c * b[i];
        }
    }

    let x = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        let sum = 0;
        for (let j = i + 1; j < n; j++) {
            sum += A[i][j] * x[j];
        }
        x[i] = (b[i] - sum) / A[i][i];
    }

    return [
        x[0], x[1], x[2],
        x[3], x[4], x[5],
        x[6], x[7], 1
    ];
}

function applyTransform(h, x, y) {
    const dem = h[6] * x + h[7] * y + h[8];
    return {
        x: (h[0] * x + h[1] * y + h[2]) / dem,
        y: (h[3] * x + h[4] * y + h[5]) / dem
    };
}

function isPointInPolygon(p, polygon) {
    let isInside = false;
    let minX = polygon[0].x, maxX = polygon[0].x;
    let minY = polygon[0].y, maxY = polygon[0].y;

    for (let n = 1; n < polygon.length; n++) {
        const q = polygon[n];
        minX = Math.min(q.x, minX);
        maxX = Math.max(q.x, maxX);
        minY = Math.min(q.y, minY);
        maxY = Math.max(q.y, maxY);
    }

    if (p.x < minX || p.x > maxX || p.y < minY || p.y > maxY) {
        return false;
    }

    let i = 0, j = polygon.length - 1;
    for (i, j; i < polygon.length; j = i++) {
        if ((polygon[i].y > p.y) != (polygon[j].y > p.y) &&
            (p.x < (polygon[j].x - polygon[i].x) * (p.y - polygon[i].y) / (polygon[j].y - polygon[i].y) + polygon[i].x)) {
            isInside = !isInside;
        }
    }
    return isInside;
}


// =============================================================================
// FUNÇÕES PRINCIPAIS
// =============================================================================

async function calibrate(framePath) {
    console.log('🔧 Modo de Calibração: Gerando imagem com pontos de referência...');

    if (!fs.existsSync(framePath)) {
        throw new Error(`Frame não encontrado: ${framePath}`);
    }

    const image = sharp(framePath);
    const metadata = await image.metadata();

    let svgOverlay = `<svg width="${metadata.width}" height="${metadata.height}">`;

    SCREEN_CORNERS.forEach((p, idx) => {
        const colors = ['red', 'green', 'blue', 'yellow'];
        svgOverlay += `
            <circle cx="${p.x}" cy="${p.y}" r="5" fill="${colors[idx]}" stroke="white" stroke-width="2"/>
            <text x="${p.x + 10}" y="${p.y}" fill="white" font-size="20" font-weight="bold" style="filter: drop-shadow(0px 0px 2px black);">${idx + 1}</text>
        `;
    });

    svgOverlay += '</svg>';

    await image
        .composite([{ input: Buffer.from(svgOverlay), top: 0, left: 0 }])
        .toFile('calibration_result.png');

    console.log('✅ Arquivo de calibração salvo como: calibration_result.png');
}

async function composite(contentPath, framePath, outputPath) {
    if (!fs.existsSync(contentPath)) throw new Error(`Conteúdo não encontrado: ${contentPath}`);
    if (!fs.existsSync(framePath)) throw new Error(`Frame não encontrado: ${framePath}`);

    console.log('🚀 Iniciando composição com perspectiva...');

    // 1. Carregar/Preparar Frame
    const frameBuffer = await sharp(framePath).toBuffer();
    const frameMeta = await sharp(frameBuffer).metadata();
    const { width: fw, height: fh } = frameMeta;

    // 2. Carregar/Preparar Conteúdo (Textura)
    console.log('   Processando textura...');
    const contentSharp = sharp(contentPath);
    const contentMeta = await contentSharp.metadata();

    const scaleFactor = TEXTURE_WIDTH / contentMeta.width;
    const targetHeight = Math.floor(contentMeta.height * scaleFactor);

    let textureBuffer;

    if (targetHeight >= TEXTURE_HEIGHT) {
        textureBuffer = await contentSharp
            .resize(TEXTURE_WIDTH, targetHeight)
            .extract({ left: 0, top: 0, width: TEXTURE_WIDTH, height: TEXTURE_HEIGHT })
            .ensureAlpha()
            .raw()
            .toBuffer();
    } else {
        textureBuffer = await contentSharp
            .resize(TEXTURE_WIDTH, targetHeight)
            .extend({
                top: 0,
                bottom: TEXTURE_HEIGHT - targetHeight,
                left: 0,
                right: 0,
                background: { r: 0, g: 0, b: 0, alpha: 255 }
            })
            .ensureAlpha()
            .raw()
            .toBuffer();
    }

    // 3. Gerar Imagem Distorcida (Pixel Mapping)
    console.log('   Calculando transformação de perspectiva...');

    const H_inv = getHomographyMatrix(TEXTURE_WIDTH, TEXTURE_HEIGHT, SCREEN_CORNERS);
    const distortedBuffer = Buffer.alloc(fw * fh * 4);

    let minX = fw, maxX = 0, minY = fh, maxY = 0;
    SCREEN_CORNERS.forEach(p => {
        if (p.x < minX) minX = p.x;
        if (p.x > maxX) maxX = p.x;
        if (p.y < minY) minY = p.y;
        if (p.y > maxY) maxY = p.y;
    });

    minX = Math.max(0, Math.floor(minX));
    maxX = Math.min(fw - 1, Math.ceil(maxX));
    minY = Math.max(0, Math.floor(minY));
    maxY = Math.min(fh - 1, Math.ceil(maxY));

    console.log(`   Renderizando pixels na área: [${minX}, ${minY}] a [${maxX}, ${maxY}] (Bilinear)...`);

    for (let y = minY; y <= maxY; y++) {
        for (let x = minX; x <= maxX; x++) {

            if (!isPointInPolygon({ x, y }, SCREEN_CORNERS)) continue;

            const src = applyTransform(H_inv, x, y);

            // Bilinear Interpolation
            const u = src.x;
            const v = src.y;

            if (u >= 0 && u < TEXTURE_WIDTH - 1 && v >= 0 && v < TEXTURE_HEIGHT - 1) { // Bounds check -1 for neighbor access
                const dstIdx = (y * fw + x) * 4;

                const u_floor = Math.floor(u);
                const v_floor = Math.floor(v);
                const u_ratio = u - u_floor;
                const v_ratio = v - v_floor;
                const u_opp = 1 - u_ratio;
                const v_opp = 1 - v_ratio;

                const idx00 = (v_floor * TEXTURE_WIDTH + u_floor) * 4;
                const idx10 = (v_floor * TEXTURE_WIDTH + (u_floor + 1)) * 4;
                const idx01 = ((v_floor + 1) * TEXTURE_WIDTH + u_floor) * 4;
                const idx11 = ((v_floor + 1) * TEXTURE_WIDTH + (u_floor + 1)) * 4;

                // Channel R
                distortedBuffer[dstIdx] = (textureBuffer[idx00] * u_opp + textureBuffer[idx10] * u_ratio) * v_opp +
                    (textureBuffer[idx01] * u_opp + textureBuffer[idx11] * u_ratio) * v_ratio;

                // Channel G
                distortedBuffer[dstIdx + 1] = (textureBuffer[idx00 + 1] * u_opp + textureBuffer[idx10 + 1] * u_ratio) * v_opp +
                    (textureBuffer[idx01 + 1] * u_opp + textureBuffer[idx11 + 1] * u_ratio) * v_ratio;

                // Channel B
                distortedBuffer[dstIdx + 2] = (textureBuffer[idx00 + 2] * u_opp + textureBuffer[idx10 + 2] * u_ratio) * v_opp +
                    (textureBuffer[idx01 + 2] * u_opp + textureBuffer[idx11 + 2] * u_ratio) * v_ratio;

                distortedBuffer[dstIdx + 3] = 255;
            }
        }
    }

    const distortedImage = await sharp(distortedBuffer, {
        raw: {
            width: fw,
            height: fh,
            channels: 4
        }
    }).png().toBuffer();

    // 4. Composição Final

    console.log('   Combinando camadas...');

    // Inset mask slightly to avoid cutting into the rounded bezel corners
    const inset = 6; // Ajuste fino para não cortar botoes/bezel

    const center = SCREEN_CORNERS.reduce((acc, p) => ({ x: acc.x + p.x / 4, y: acc.y + p.y / 4 }), { x: 0, y: 0 });

    const maskPath = SCREEN_CORNERS.map(p => {
        const dx = center.x - p.x;
        const dy = center.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const ratio = (dist - inset) / dist;
        return {
            x: center.x - dx * ratio,
            y: center.y - dy * ratio
        };
    }).map((p, i) => (i === 0 ? 'M' : 'L') + `${p.x},${p.y}`).join(' ') + ' Z';

    // SVG Mask: White Rect (Keep) with Black Hole (Remove)
    // Using simple shapes for max compatibility
    const maskSvg = `
        <svg width="${fw}" height="${fh}">
          <defs>
            <mask id="holeMask">
              <rect x="0" y="0" width="${fw}" height="${fh}" fill="white"/>
              <path d="${maskPath}" fill="black"/>
            </mask>
          </defs>
          <rect x="0" y="0" width="${fw}" height="${fh}" fill="white" mask="url(#holeMask)"/>
        </svg>
    `;

    const maskBuffer = await sharp(Buffer.from(maskSvg))
        .toFormat('png')
        .toBuffer();

    // Create bezel by punching hole in frame
    const bezel = await sharp(frameBuffer)
        .ensureAlpha()
        .composite([{ input: maskBuffer, blend: 'dest-in' }])
        .png()
        .toBuffer();

    // Compose: Transparent bg -> Distorted Content -> Bezel
    await sharp({
        create: {
            width: fw,
            height: fh,
            channels: 4,
            background: { r: 0, g: 0, b: 0, alpha: 0 }
        }
    })
        .composite([
            { input: distortedImage, top: 0, left: 0 },
            { input: bezel, top: 0, left: 0 }
        ])
        .toFile(outputPath);

    console.log(`✅ Sucesso! Imagem salva em: ${outputPath}`);
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
    const args = process.argv.slice(2);

    if (args.includes('--calibrate')) {
        const framePath = args[1] || 'public/images/iphone-right-frame.png';
        try {
            await calibrate(framePath);
        } catch (e) {
            console.error('Erro na calibração:', e.message);
        }
        return;
    }

    if (args.length < 2) {
        console.log(`Uso: node composite-iphone-perspective.js <conteudo> <saida> [frame]`);
        return;
    }

    const contentInput = args[0];
    const outputInput = args[1];
    const frameInput = args[2] || 'public/images/iphone-right-frame.png';

    try {
        await composite(contentInput, frameInput, outputInput);
    } catch (e) {
        console.error('❌ Erro:', e);
    }
}

main();
