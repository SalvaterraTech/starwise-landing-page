const sharp = require('sharp');

async function findCornersFromBezel() {
    const bezelPath = 'public/images/iphone-right-bezel.png';
    console.log(`Analyzing alpha channel of: ${bezelPath}`);

    const image = await sharp(bezelPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const { width, height, channels } = image.info; // channels = 4 (RGBA)

    let minX = width, maxX = 0, minY = height, maxY = 0;
    let points = [];

    // Find all Transparent pixels (Alpha < 10, assuming hole is transparent)
    // OR Find all Opaque pixels (Alpha > 240, assuming bezel is opaque)
    // Usually Bezel is Opaque, Screen is Transparent.

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            const alpha = image.data[idx + 3];

            if (alpha < 50) { // Screen hole
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
                points.push({ x, y });
            }
        }
    }

    if (points.length === 0) {
        console.log('No transparent pixels found! checking if screen is black...');
        // If no transparency, maybe screen IS black (0,0,0) and bezel is something else?
        return;
    }

    console.log(`Bounding Box of Hole: [${minX},${minY}] to [${maxX},${maxY}]`);

    // Find corners of the HOLE (The screen)
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

    console.log('Detected Screen Corners (Hole in Bezel):');
    console.log(`TL: { x: ${tl.x}, y: ${tl.y} }`);
    console.log(`TR: { x: ${tr.x}, y: ${tr.y} }`);
    console.log(`BR: { x: ${br.x}, y: ${br.y} }`);
    console.log(`BL: { x: ${bl.x}, y: ${bl.y} }`);
}

findCornersFromBezel().catch(console.error);
