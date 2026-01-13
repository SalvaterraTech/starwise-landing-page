# iPhone Content Replacement Script

Smart script to replace content inside an iPhone frame, keeping the bezel intact and perfectly adjusting any image.

## Features

- Automatically resizes any image to fit iPhone screen
- Applies perfect rounded borders (no overflow!)
- Uses realistic original iPhone frame with bezels
- Supports three frame sizes: center, left, right
- Easy to use via command line
- Pixel-perfect rounded corners with no corner leakage

## Installation

Dependencies are already installed:
```bash
npm install
```

## Usage

### Basic Syntax

```bash
npm run replace-iphone <content-image> <output-image> [model]
```

### Parameters

- **content-image**: Filename in `public/images/` you want to put in the iPhone
- **output-image**: Output filename to be saved in `public/images/`
- **model** _(optional)_: Frame type - `center`, `left` or `right` (default: `center`)

### Examples

#### Example 1: Center Frame
```bash
npm run replace-iphone analysis_view.png iphone-analysis-mockup.png
```

#### Example 2: Left Frame
```bash
npm run replace-iphone my-screenshot.png iphone-left-demo.png left
```

#### Example 3: Right Frame
```bash
npm run replace-iphone dashboard.png iphone-right-showcase.png right
```

## How It Works

1. **Loads the image**: Reads content image from `public/images/`
2. **Smart resizing**: Adjusts image to perfectly fit iPhone screen (using fit: 'contain' + crop)
3. **Applies rounded borders**: Uses pixel-by-pixel alpha manipulation for perfect border radius
4. **Extracts bezel**: Uses original iPhone frame, making screen area transparent with rounded corners
5. **Combines everything**: Merges content + bezel perfectly
6. **Saves result**: Exports final image in high-quality PNG

## Model Configurations

### Center (Default)
- Frame dimensions: 546x1080px
- Screen area: 502x1036px
- Border radius: 58px

### Left
- Frame dimensions: 440x896px
- Screen area: 408x860px
- Border radius: 38px

### Right
- Frame dimensions: 438x892px
- Screen area: 406x856px
- Border radius: 38px

## Image Formats

- **Input**: Any format supported by Sharp (PNG, JPG, WEBP, etc.)
- **Output**: PNG with transparency and maximum quality
- **Recommendation**: Use images with vertical aspect ratio (portrait) for best results

## Tips

- Square images will be cropped on the sides to fit iPhone proportions
- Very wide images will lose content on borders - use 9:16 aspect ratio or similar
- The script applies `fit: 'contain'` and `position: 'top'`, then crops bottom (scroll effect)
- Rounded borders are applied automatically using pixel-perfect technique - no corner leakage!

## Script Files

- `replace-iphone-content-v2.js` - Main script (in use)
- `extract-iphone-bezel.js` - Utility to extract frame bezels
- Other helper scripts for calibration and detection

## Troubleshooting

### "Image not found"
Make sure the file is in `public/images/`

### "Model not found"
Use only: `center`, `left` or `right`

### "Cut borders"
Check if your image has adequate proportions (vertical/portrait)

## Usage Examples in Project

```bash
# Create analysis screen mockup
npm run replace-iphone analysis_view.png iphone-analysis.png

# Create login screen mockup
npm run replace-iphone login_screen.png iphone-login.png

# Create dashboard screen mockup
npm run replace-iphone dashboard.png iphone-dashboard.png left
```

## Result

The script creates professional iPhone mockup images, perfect for:
- Landing pages
- Presentations
- Marketing
- Documentation
- App Store screenshots
- Portfolio

---

**Developed with Sharp** - High-performance Node.js image processing library
