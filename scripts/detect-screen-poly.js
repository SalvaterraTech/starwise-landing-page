const sharp = require('sharp');

// Helper to find 4 corners of a point cloud
function findQuadCorners(points) {
    // We want TL, TR, BR, BL.
    // We can use the logic:
    // TL: min(x+y)
    // TR: max(x-y)
    // BR: max(x+y)
    // BL: min(x-y)
    // This assumes the rectangle is not rotated 45 degrees, which holds for phone mocks.

    let tl = points[0], tr = points[0], br = points[0], bl = points[0];
    let minSum = Infinity, maxSum = -Infinity, minDiff = Infinity, maxDiff = -Infinity;

    points.forEach(p => {
        const sum = p.x + p.y;
        const diff = p.x - p.y; // x - y

        if (sum < minSum) { minSum = sum; tl = p; }
        if (sum > maxSum) { maxSum = sum; br = p; }

        if (diff > maxDiff) { maxDiff = diff; tr = p; }
        if (diff < minDiff) { minDiff = diff; bl = p; }
    });

    return [tl, tr, br, bl];
}

async function detectScreen() {
    const framePath = 'public/images/iphone-right-frame.png';
    console.log(`Analyzing ${framePath} to finding black screen area...`);

    const { data, info } = await sharp(framePath)
        .raw()
        .toBuffer({ resolveWithObject: true });

    const width = info.width;
    const height = info.height;
    const channels = info.channels;

    let darkPoints = [];

    // 1. Thresholding: Find dark pixels
    // Assuming screen is blackish
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * channels;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];

            // Allow some lightness (e.g. reflections) but keep it strict
            if (r < 30 && g < 30 && b < 30) {
                darkPoints.push({ x, y });
            }
        }
    }

    if (darkPoints.length < 100) {
        console.error("Could not find enough dark pixels to identify screen.");
        return;
    }

    // 2. Filter outliers (simple noise removal)
    // Not implemented for brevity, assuming main black blob is the screen.

    // 3. Find corners
    const [tl, tr, br, bl] = findQuadCorners(darkPoints);

    console.log('Detected Screen Polygon:');
    console.log(`TL: { x: ${tl.x}, y: ${tl.y} }`);
    console.log(`TR: { x: ${tr.x}, y: ${tr.y} }`);
    console.log(`BR: { x: ${br.x}, y: ${br.y} }`);
    console.log(`BL: { x: ${bl.x}, y: ${bl.y} }`);
}

detectScreen().catch(console.error);
