#!/usr/bin/env node

const sharp = require('sharp');
const path = require('path');

/**
 * Script para extrair apenas a moldura (bezel) do iPhone,
 * removendo o conteúdo do centro e deixando-o transparente
 */

/**
 * Determina se um pixel está DENTRO de um retângulo com bordas arredondadas
 */
function isInsideRoundedRect(x, y, offsetX, offsetY, width, height, radius) {
  // Converte para coordenadas relativas ao retângulo
  const relX = x - offsetX;
  const relY = y - offsetY;

  // Fora dos limites retangulares
  if (relX < 0 || relX >= width || relY < 0 || relY >= height) {
    return false;
  }

  // Verifica cada canto separadamente

  // Canto superior esquerdo
  if (relX < radius && relY < radius) {
    const dx = radius - relX;
    const dy = radius - relY;
    return (dx * dx + dy * dy) <= (radius * radius);
  }

  // Canto superior direito
  if (relX >= width - radius && relY < radius) {
    const dx = relX - (width - radius);
    const dy = radius - relY;
    return (dx * dx + dy * dy) <= (radius * radius);
  }

  // Canto inferior esquerdo
  if (relX < radius && relY >= height - radius) {
    const dx = radius - relX;
    const dy = relY - (height - radius);
    return (dx * dx + dy * dy) <= (radius * radius);
  }

  // Canto inferior direito
  if (relX >= width - radius && relY >= height - radius) {
    const dx = relX - (width - radius);
    const dy = relY - (height - radius);
    return (dx * dx + dy * dy) <= (radius * radius);
  }

  // Pixel não está nos cantos, então está dentro do retângulo
  return true;
}

async function extractBezel(inputPath, outputPath, screenArea) {
  console.log('🔧 Extraindo moldura do iPhone...\n');

  const { screenX, screenY, screenWidth, screenHeight, borderRadius } = screenArea;

  // Lê a imagem original
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  console.log(`📱 Frame original: ${metadata.width}x${metadata.height}`);
  console.log(`📐 Área da tela: ${screenWidth}x${screenHeight} em (${screenX}, ${screenY})`);

  // PASSO 1: Cria um retângulo preto para cobrir a área da tela
  const blackScreenSvg = `
    <svg width="${screenWidth}" height="${screenHeight}">
      <rect x="0" y="0" width="${screenWidth}" height="${screenHeight}"
            rx="${borderRadius}" ry="${borderRadius}" fill="black"/>
    </svg>
  `;

  const blackScreen = await sharp(Buffer.from(blackScreenSvg))
    .png()
    .toBuffer();

  // PASSO 2: Sobrepõe o retângulo preto no centro do frame
  const frameWithBlackCenter = await image
    .composite([{
      input: blackScreen,
      top: screenY,
      left: screenX,
      blend: 'over'
    }])
    .png()
    .toBuffer();

  // PASSO 3: Extrai o canal alpha da imagem original
  const { data, info } = await sharp(frameWithBlackCenter)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // PASSO 4: Modifica o canal alpha manualmente - torna o centro transparente COM BORDAS ARREDONDADAS
  const pixelCount = info.width * info.height;
  const channels = info.channels; // RGBA = 4

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * channels;

      // Verifica se o pixel está DENTRO da área da tela com bordas arredondadas
      if (isInsideRoundedRect(x, y, screenX, screenY, screenWidth, screenHeight, borderRadius)) {
        // Torna transparente (alpha = 0)
        data[idx + 3] = 0;
      }
    }
  }

  // PASSO 5: Reconstrói a imagem com o novo canal alpha
  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: channels
    }
  })
  .png()
  .toFile(outputPath);

  console.log(`\n✅ Moldura extraída com sucesso: ${outputPath}`);
  console.log(`   A área da tela agora está transparente!\n`);
}

// Configurações para os diferentes frames
const configs = {
  center: { screenX: 22, screenY: 22, screenWidth: 502, screenHeight: 1036, borderRadius: 58 },
  left: { screenX: 18, screenY: 54, screenWidth: 404, screenHeight: 820, borderRadius: 38 },
  right: { screenX: 18, screenY: 54, screenWidth: 402, screenHeight: 816, borderRadius: 38 }
};

// Execução
if (require.main === module) {
  const publicDir = path.join(process.cwd(), 'public', 'images');

  // Extrai bezels para todos os frames
  Promise.all([
    extractBezel(
      path.join(publicDir, 'iphone-center-frame.png'),
      path.join(publicDir, 'iphone-center-bezel.png'),
      configs.center
    ),
    extractBezel(
      path.join(publicDir, 'iphone-left-frame.png'),
      path.join(publicDir, 'iphone-left-bezel.png'),
      configs.left
    ),
    extractBezel(
      path.join(publicDir, 'iphone-right-frame.png'),
      path.join(publicDir, 'iphone-right-bezel.png'),
      configs.right
    )
  ])
  .then(() => {
    console.log('🎉 Todas as molduras foram extraídas com sucesso!');
  })
  .catch(error => {
    console.error('❌ Erro:', error.message);
    process.exit(1);
  });
}

module.exports = { extractBezel };
