#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Script INTELIGENTE v2 para substituir o conteúdo dentro de um frame de iPhone
 * USA O FRAME ORIGINAL - mantém a moldura real do iPhone
 */

// Configurações para diferentes modelos de iPhone
const IPHONE_CONFIGS = {
  'center': {
    frameWidth: 546,
    frameHeight: 1080,
    screenX: 22,           // Borda esquerda
    screenY: 22,           // Topo da tela (a imagem JÁ tem status bar)
    screenWidth: 502,      // 546 - 22*2 = 502
    screenHeight: 1036,    // Altura total da tela (1080 - 22 - 22)
    borderRadius: 58,      // Border radius interno da tela (DEVE COINCIDIR COM O BEZEL!)
    inset: 0,              // Margem interna (0 = pixel-perfect com nova técnica)
  },
  'left': {
    frameWidth: 440,
    frameHeight: 896,
    screenX: 16,
    screenY: 18,
    screenWidth: 408,
    screenHeight: 860,
    borderRadius: 34,
  },
  'right': {
    frameWidth: 438,
    frameHeight: 892,
    screenX: 16,
    screenY: 18,
    screenWidth: 406,
    screenHeight: 856,
    borderRadius: 34,
  }
};

/**
 * Determina se um pixel está fora de um retângulo com bordas arredondadas
 */
function isOutsideRoundedRect(x, y, width, height, radius) {
  // Verifica cada canto separadamente

  // Canto superior esquerdo
  if (x < radius && y < radius) {
    const dx = radius - x;
    const dy = radius - y;
    return (dx * dx + dy * dy) > (radius * radius);
  }

  // Canto superior direito
  if (x >= width - radius && y < radius) {
    const dx = x - (width - radius);
    const dy = radius - y;
    return (dx * dx + dy * dy) > (radius * radius);
  }

  // Canto inferior esquerdo
  if (x < radius && y >= height - radius) {
    const dx = radius - x;
    const dy = y - (height - radius);
    return (dx * dx + dy * dy) > (radius * radius);
  }

  // Canto inferior direito
  if (x >= width - radius && y >= height - radius) {
    const dx = x - (width - radius);
    const dy = y - (height - radius);
    return (dx * dx + dy * dy) > (radius * radius);
  }

  // Pixel não está nos cantos, então está dentro do retângulo
  return false;
}

/**
 * Processa e ajusta a imagem de conteúdo para caber no frame do iPhone
 * IMPORTANTE: Mantém a largura correta e CORTA embaixo (como scroll)
 */
async function processContentImage(contentPath, config) {
  const { screenWidth, screenHeight, borderRadius, inset = 0 } = config;

  // Aplica inset para evitar vazamento nas bordas
  const actualWidth = screenWidth - (inset * 2);
  const actualHeight = screenHeight - (inset * 2);

  const contentImage = sharp(contentPath);
  const metadata = await contentImage.metadata();

  console.log(`📱 Processando imagem de conteúdo: ${path.basename(contentPath)}`);
  console.log(`   Dimensões originais: ${metadata.width}x${metadata.height}`);

  // PASSO 1: Redimensiona para a LARGURA correta (mantém proporção)
  const resized = await contentImage
    .resize(actualWidth, null, {
      fit: 'contain',
      position: 'top'
    })
    .toBuffer();

  const resizedMeta = await sharp(resized).metadata();

  // PASSO 2: Extrai apenas a parte superior (cortando embaixo como scroll)
  let croppedContent = sharp(resized).extract({
    left: 0,
    top: 0,
    width: actualWidth,
    height: Math.min(resizedMeta.height, actualHeight)
  });

  // Se a imagem for menor que a tela, adiciona padding preto embaixo
  if (resizedMeta.height < actualHeight) {
    const paddingHeight = actualHeight - resizedMeta.height;
    const blackPadding = sharp({
      create: {
        width: actualWidth,
        height: paddingHeight,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 255 }
      }
    }).png().toBuffer();

    croppedContent = sharp({
      create: {
        width: actualWidth,
        height: actualHeight,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 255 }
      }
    }).composite([
      { input: await croppedContent.toBuffer(), top: 0, left: 0 },
      { input: await blackPadding, top: resizedMeta.height, left: 0 }
    ]);
  }

  // PASSO 3: Aplica bordas arredondadas usando manipulação de alpha pixel-por-pixel
  const contentBuffer = await croppedContent.png().toBuffer();
  const { data, info } = await sharp(contentBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels; // RGBA = 4

  // Aplica borderRadius cortando os cantos
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * channels;

      // Verifica se o pixel está nos cantos e deve ser transparente
      const shouldBeTransparent = isOutsideRoundedRect(x, y, actualWidth, actualHeight, borderRadius);

      if (shouldBeTransparent) {
        data[idx + 3] = 0; // Torna transparente
      }
    }
  }

  const processedContent = await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: channels
    }
  })
  .png()
  .toBuffer();

  console.log(`   ✓ Redimensionado para largura: ${actualWidth}px (inset: ${inset}px)`);
  console.log(`   ✓ Cortado para altura: ${actualHeight}px (scroll)`);
  console.log(`   ✓ Bordas arredondadas: ${borderRadius}px`);

  return processedContent;
}

/**
 * Extrai apenas a moldura do frame, tornando a área da tela transparente
 */
async function extractBezel(framePath, config) {
  const { frameWidth, frameHeight, screenX, screenY, screenWidth, screenHeight, borderRadius } = config;

  console.log(`📱 Extraindo moldura do frame original...`);

  // Lê o frame original
  const frameBuffer = await sharp(framePath)
    .ensureAlpha()
    .toBuffer();

  // Cria uma máscara onde a área da tela será TRANSPARENTE (alpha 0) e o resto OPACO
  const maskSvg = `
    <svg width="${frameWidth}" height="${frameHeight}">
      <rect x="0" y="0" width="${frameWidth}" height="${frameHeight}" fill="white"/>
      <rect x="${screenX}" y="${screenY}" width="${screenWidth}" height="${screenHeight}"
            rx="${borderRadius}" ry="${borderRadius}" fill="black"/>
    </svg>
  `;

  const maskBuffer = await sharp(Buffer.from(maskSvg))
    .toFormat('png')
    .toBuffer();

  // Usa a máscara como canal alpha - onde a máscara é preta, fica transparente
  const bezel = await sharp(frameBuffer)
    .composite([{
      input: maskBuffer,
      blend: 'dest-in'
    }])
    .png()
    .toBuffer();

  console.log(`   ✓ Moldura extraída (área da tela agora é transparente)`);

  return bezel;
}

/**
 * Combina o conteúdo com o frame original do iPhone
 */
async function replaceIPhoneContent(framePath, contentPath, outputPath, modelType = 'center') {
  console.log('\n🎨 Iniciando criação do iPhone mockup...\n');

  const config = IPHONE_CONFIGS[modelType];
  if (!config) {
    throw new Error(`Modelo '${modelType}' não encontrado. Disponíveis: ${Object.keys(IPHONE_CONFIGS).join(', ')}`);
  }

  if (!fs.existsSync(framePath)) {
    throw new Error(`Frame não encontrado: ${framePath}`);
  }

  if (!fs.existsSync(contentPath)) {
    throw new Error(`Imagem de conteúdo não encontrada: ${contentPath}`);
  }

  const { frameWidth, frameHeight, screenX, screenY } = config;

  // Processa a imagem de conteúdo
  const processedContent = await processContentImage(contentPath, config);

  // Extrai a moldura do frame original (com centro transparente)
  const bezel = await extractBezel(framePath, config);

  // Cria base com fundo preto
  const background = sharp({
    create: {
      width: frameWidth,
      height: frameHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 255 }
    }
  });

  console.log(`📱 Combinando conteúdo + moldura original do iPhone...`);

  // Combina tudo: fundo preto + conteúdo + moldura original por cima
  const result = await background
    .composite([
      {
        input: processedContent,
        top: screenY,
        left: screenX,
      },
      {
        input: bezel,
        top: 0,
        left: 0,
      }
    ])
    .png()
    .toFile(outputPath);

  console.log(`\n✅ Mockup criado com sucesso!`);
  console.log(`   Arquivo: ${outputPath}`);
  console.log(`   Dimensões: ${frameWidth}x${frameHeight}`);
  console.log(`   Conteúdo: ${config.screenWidth}x${config.screenHeight} em (${screenX}, ${screenY})`);
  console.log(`   Moldura: Frame original do iPhone mantido!\n`);
}

/**
 * Versão simplificada que usa bezels pré-gerados
 */
async function quickReplaceWithBezel(contentImageName, outputImageName, modelType = 'center') {
  const publicDir = path.join(process.cwd(), 'public', 'images');
  const config = IPHONE_CONFIGS[modelType];

  console.log('\n🎨 Criando iPhone mockup com bezel pré-gerado...\n');

  const bezelPath = path.join(publicDir, `iphone-${modelType}-bezel.png`);
  const contentPath = path.join(publicDir, contentImageName);
  const outputPath = path.join(publicDir, outputImageName);

  if (!fs.existsSync(bezelPath)) {
    console.log('⚠️  Bezel não encontrado. Gerando...');
    const framePath = path.join(publicDir, `iphone-${modelType}-frame.png`);
    await replaceIPhoneContent(framePath, contentPath, outputPath, modelType);
    return;
  }

  // Processa conteúdo
  const processedContent = await processContentImage(contentPath, config);

  // Carrega o bezel
  const bezel = await sharp(bezelPath).toBuffer();

  // Cria base preta
  const background = sharp({
    create: {
      width: config.frameWidth,
      height: config.frameHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 255 }
    }
  });

  console.log(`📱 Combinando conteúdo + bezel...`);

  // Combina: fundo + conteúdo (com inset) + bezel
  const inset = config.inset || 0;
  await background
    .composite([
      {
        input: processedContent,
        top: config.screenY + inset,
        left: config.screenX + inset,
      },
      {
        input: bezel,
        top: 0,
        left: 0,
      }
    ])
    .png()
    .toFile(outputPath);

  console.log(`\n✅ Mockup criado!`);
  console.log(`   Arquivo: ${outputPath}\n`);
}

/**
 * Função auxiliar para uso rápido
 */
async function quickReplace(contentImageName, outputImageName, modelType = 'center') {
  await quickReplaceWithBezel(contentImageName, outputImageName, modelType);
}

// Execução via linha de comando
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log(`
🎨 Script de Substituição de Conteúdo do iPhone - V2 (Frame Original)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

USO:
  npm run replace-iphone <conteúdo> <saída> [modelo]

PARÂMETROS:
  conteúdo  Nome do arquivo em public/images/
  saída     Nome do arquivo de saída em public/images/
  modelo    Tipo: center, left, right (padrão: center)

EXEMPLOS:
  npm run replace-iphone analysis_view.png iphone-analysis.png
  npm run replace-iphone screenshot.png iphone-left-demo.png left

FEATURES:
  ✓ USA O FRAME ORIGINAL DO IPHONE (bordas reais, botões, etc)
  ✓ Redimensiona qualquer imagem para caber
  ✓ Aplica bordas arredondadas perfeitas
  ✓ Mantém a moldura realista do iPhone
  ✓ Sem bordas sobrando - fit perfeito!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `);
    process.exit(1);
  }

  const [contentImage, outputImage, model = 'center'] = args;

  quickReplace(contentImage, outputImage, model)
    .catch(error => {
      console.error('\n❌ Erro:', error.message);
      console.error(error.stack);
      process.exit(1);
    });
}

module.exports = { replaceIPhoneContent, quickReplace, IPHONE_CONFIGS };
