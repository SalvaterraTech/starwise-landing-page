const sharp = require('sharp');
const fs = require('fs');

async function findCorners() {
    const filledPath = 'public/images/iphone-analysis-right.png';
    const emptyPath = 'public/images/iphone-right-frame.png';

    console.log(`Analyzing mismatch between:\n 1. ${filledPath}\n 2. ${emptyPath}`);

    // 1. Process files to raw buffers
    const filled = await sharp(filledPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const empty = await sharp(emptyPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

    const { width, height } = filled.info;

    if (width !== empty.info.width || height !== empty.info.height) {
        console.error("Dimensions mismatch!");
        return;
    }

    // 2. Find bounding box of differences
    let minX = width, maxX = 0, minY = height, maxY = 0;
    let points = [];

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;

            // Simple diff sum of RGB
            const rDiff = Math.abs(filled.data[idx] - empty.data[idx]);
            const gDiff = Math.abs(filled.data[idx + 1] - empty.data[idx + 1]);
            const bDiff = Math.abs(filled.data[idx + 2] - empty.data[idx + 2]);

            // Threshold for "difference"
            if (rDiff + gDiff + bDiff > 30) {
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;

                points.push({ x, y });
            }
        }
    }

    console.log(`Bounding Box of screen: [${minX},${minY}] to [${maxX},${maxY}]`);

    // 3. Find corners within the diff cloud
    // We want the extreme TL, TR, BR, BL points.
    // TL: Minimize (x + y)
    // TR: Maximize (x - y)
    // BR: Maximize (x + y)
    // BL: Minimize (x - y)

    let tl = points[0], tr = points[0], br = points[0], bl = points[0];
    let minSum = Infinity, maxSum = -Infinity, minDiff = Infinity, maxDiff = -Infinity;

    points.forEach(p => {
        const sum = p.x + p.y;
        const diff = p.x - p.y;

        if (sum < minSum) { minSum = sum; tl = p; }
        if (sum > maxSum) { maxSum = sum; br = p; }
        if (diff < minDiff) { minDiff = diff; bl = p; }
        if (diff > maxDiff) { maxDiff = diff; tr = p; }
    });

    console.log('Detected Corners:');
    console.log(`TL: { x: ${tl.x}, y: ${tl.y} }`);
    console.log(`TR: { x: ${tr.x}, y: ${tr.y} }`);
    console.log(`BR: { x: ${br.x}, y: ${br.y} }`);
    console.log(`BL: { x: ${bl.x}, y: ${bl.y} }`);
}

findCorners().catch(console.error);
