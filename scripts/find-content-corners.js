const sharp = require('sharp');

async function findCornersOfContent() {
    const path = 'iphone-right-content.jpg';
    console.log(`Analyzing content bounds of: ${path}`);

    const image = await sharp(path).raw().toBuffer({ resolveWithObject: true });
    const { width, height } = image.info;

    let points = [];

    // Assuming background is black (0,0,0) or dark.
    // Find all non-black pixels.

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 3; // JPG is 3 channels typically
            const r = image.data[idx];
            const g = image.data[idx + 1];
            const b = image.data[idx + 2];

            if (r > 10 || g > 10 || b > 10) {
                points.push({ x, y });
            }
        }
    }

    if (points.length === 0) {
        console.log('Image is all black?');
        return;
    }

    // Find extreme corners (Convex Hull approximation)
    // TL: min(x+y), TR: max(x-y), etc
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

    console.log('Detected Content Corners:');
    console.log(`TL: { x: ${tl.x}, y: ${tl.y} }`);
    console.log(`TR: { x: ${tr.x}, y: ${tr.y} }`);
    console.log(`BR: { x: ${br.x}, y: ${br.y} }`);
    console.log(`BL: { x: ${bl.x}, y: ${bl.y} }`);
}

findCornersOfContent().catch(console.error);
