# iPhone Mockup Script Structure

## 📁 Created Files

### Main Scripts
```
scripts/
├── replace-iphone-content-v2.js  ⭐ MAIN SCRIPT (in use)
├── extract-iphone-bezel.js       🔧 Utility to extract bezels
├── README.md                      📚 Complete documentation
├── EXAMPLE.md                     💡 Detailed usage example
├── QUICK_START.md                 ⚡ Quick start guide
└── STRUCTURE.md                   📋 This file
```

### Legacy Scripts (not used)
```
scripts/
├── replace-iphone-content.ts     ❌ TypeScript version (discontinued)
└── replace-iphone-content.js     ❌ Version 1 (replaced by V2)
```

## 🎯 Main File

**`replace-iphone-content-v2.js`** is the active script you should use.

## 📊 Frame Configurations

```javascript
IPHONE_CONFIGS = {
  'center': {
    frameWidth: 546,
    frameHeight: 1080,
    screenX: 22,
    screenY: 22,
    screenWidth: 502,
    screenHeight: 1036,
    borderRadius: 58,
  },
  'left': { 440x896px, screen: 408x860 },
  'right': { 438x892px, screen: 406x856 }
}
```

## 🔄 Processing Flow

```
1. Input
   └─→ Original image (any size)

2. Processing
   ├─→ Resizing (fit: contain + crop)
   ├─→ Apply rounded borders (pixel-perfect)
   └─→ Create mask

3. Composition
   ├─→ Black base (screen background)
   ├─→ Processed content (centered)
   └─→ Original iPhone bezel (with rounded transparency)

4. Output
   └─→ Optimized PNG in public/images/
```

## 🛠️ Technologies Used

- **Sharp**: High-performance image processing
- **Pixel-by-pixel alpha manipulation**: Precise rounded corners
- **Node.js**: Runtime for script execution

## 📦 Dependencies

```json
{
  "sharp": "^0.34.5",
  "@types/sharp": "^0.31.1",
  "ts-node": "^10.9.2"
}
```

## 🚀 NPM Command

```json
{
  "scripts": {
    "replace-iphone": "node scripts/replace-iphone-content-v2.js"
  }
}
```

## 📝 Output Examples

### Generated Files (for testing)
```
public/images/
├── iphone-analysis-final.png   (546x1080, ~175KB)
├── iphone-analysis-left.png    (440x896)
└── iphone-analysis-right.png   (438x892)
```

## 🎨 Bezel Elements

The extracted bezel includes:

- ✓ Original iPhone frame borders
- ✓ Physical buttons
- ✓ Notch (top cutout)
- ✓ Front camera
- ✓ Speaker
- ✓ Rounded screen transparency (pixel-perfect)

## 🔍 Masks and Cutouts

Uses pixel-by-pixel alpha channel manipulation for perfect rounded corners:

```javascript
// Check if pixel is outside rounded rectangle
function isOutsideRoundedRect(x, y, width, height, radius) {
  // Distance calculation for each corner
  // If distance > radius: make transparent
}
```

## 📐 Dimension Calculations

```
Total Frame = Bezel + Screen + Margins

center: 546x1080 = 22(L) + 502(screen) + 22(R) x 22(T) + 1036(screen) + 22(B)
left:   440x896  = 16(L) + 408(screen) + 16(R) x 18(T) + 860(screen) + 18(B)
right:  438x892  = 16(L) + 406(screen) + 16(R) x 18(T) + 856(screen) + 18(B)
```

## 🎯 Next Steps

To use the script:

1. Read: `scripts/QUICK_START.md`
2. Execute: `npm run replace-iphone your-image.png result.png`
3. Check result at: `public/images/result.png`

For more details:
- Complete documentation: `scripts/README.md`
- Detailed example: `scripts/EXAMPLE.md`

---

**Production-ready system!** 🎉
