# Quick Start - iPhone Content Replacement

## 3-Step Usage

### 1️⃣ Place your image in `public/images/`
```bash
# Your app screenshot should be here:
public/images/your-image.png
```

### 2️⃣ Run the command
```bash
npm run replace-iphone your-image.png result.png
```

### 3️⃣ Done! ✅
```bash
# Result at:
public/images/result.png
```

## Quick Examples

```bash
# Default frame (center)
npm run replace-iphone analysis_view.png iphone-analysis.png

# Left frame
npm run replace-iphone screen.png iphone-left.png left

# Right frame
npm run replace-iphone screen.png iphone-right.png right
```

## What You Get

- ✅ Realistic iPhone frame
- ✅ Perfect rounded borders
- ✅ Complete status bar (time, battery, signal)
- ✅ Automatic resizing
- ✅ No border overflow
- ✅ High-quality PNG
- ✅ Production-ready

## Useful Commands

```bash
# See full help
npm run replace-iphone

# View documentation
cat scripts/README.md

# View detailed example
cat scripts/EXAMPLE.md
```

## Available Sizes

| Model  | Dimensions  | Recommended Use           |
|--------|-------------|---------------------------|
| center | 546x1080px  | Hero, main highlights     |
| left   | 440x896px   | Side-by-side compositions |
| right  | 438x892px   | Asymmetric layouts        |

## Troubleshooting

❌ **Error: Image not found**
→ Make sure it's in `public/images/`

❌ **Error: Model not found**
→ Use only: `center`, `left` or `right`

❌ **Image cropped too much**
→ Use vertical images (9:16 aspect ratio)

## Example Result

We ran: `npm run replace-iphone analysis_view.png iphone-analysis-final.png`

- **Input**: analysis_view.png (1320x2868px)
- **Output**: iphone-analysis-final.png (546x1080px, 175KB)
- **Result**: Professional mockup with complete iPhone frame

---

**Created with ✨**
