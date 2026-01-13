# Usage Example - iPhone Content Replacement Script

## Real Use Case: Creating Analysis Screen Mockup

### Step 1: Prepare your image

You have an app screenshot: `analysis_view.png` (1320x2868px)
Location: `public/images/analysis_view.png`

### Step 2: Run the script

```bash
npm run replace-iphone analysis_view.png iphone-analysis-final.png center
```

### Step 3: Watch the magic happen

```
🎨 Creating iPhone mockup...

📱 Processing content image: analysis_view.png
   Original dimensions: 1320x2868
   ✓ Resized to width: 502px (inset: 0px)
   ✓ Cropped to height: 1036px (scroll)
   ✓ Rounded borders: 58px
📱 Combining content + bezel...

✅ Mockup created successfully!
   File: /Users/.../public/images/iphone-analysis-final.png
   Dimensions: 546x1080
   Content: 502x1036 at (22, 22)
```

### Result

**BEFORE:**
- Square image: `analysis_view.png`
- No frame
- Not ready for presentation

**AFTER:**
- Professional mockup: `iphone-analysis-final.png`
- Realistic iPhone frame
- Perfect rounded borders
- Status bar with time, battery, signal
- Ready to use in landing pages, presentations, marketing

## What the script does automatically:

1. **Smart Resizing**
   - Detects original dimensions (1320x2868)
   - Calculates ideal iPhone screen proportions
   - Resizes to 502x1036 (fit: contain)
   - Centers content

2. **Rounded Borders**
   - Applies pixel-perfect 58px radius mask
   - Smooth, professional borders
   - No jagged edges or corner leakage

3. **iPhone Frame**
   - Uses original iPhone frame with bezel extraction
   - Maintains realistic borders, buttons, notch
   - Transparent screen area with rounded corners

4. **UI Elements**
   - Original iPhone bezel preserved
   - Status bar from original frame
   - All elements positioned perfectly

5. **Final Composition**
   - Combines content + bezel
   - Maintains transparency in borders
   - Exports high-quality PNG (~175KB)

## Multiple Sizes

### Center Frame (center) - 546x1080px
```bash
npm run replace-iphone analysis_view.png iphone-center.png
```
Best for: Hero sections, main highlights

### Left Frame (left) - 440x896px
```bash
npm run replace-iphone analysis_view.png iphone-left.png left
```
Best for: Compositions with 2-3 iPhones side by side

### Right Frame (right) - 438x892px
```bash
npm run replace-iphone analysis_view.png iphone-right.png right
```
Best for: Asymmetric layouts

## Use Cases in Starwise Project

### 1. Landing Page - Hero Section
```bash
npm run replace-iphone star_analysis_screen.png hero-iphone.png center
```

### 2. Features Section - Multiple Screens
```bash
npm run replace-iphone login_screen.png feature-1.png left
npm run replace-iphone dashboard_screen.png feature-2.png center
npm run replace-iphone results_screen.png feature-3.png right
```

### 3. Testimonials - Screenshots
```bash
npm run replace-iphone user_review.png testimonial-mockup.png center
```

## Professional Tips

### Input Image Quality
- Use high-resolution screenshots (minimum 1080px height)
- Prefer PNG for better quality
- Real app screenshots > generic mockups

### Ideal Proportions
- Vertical images (9:16 or similar) work best
- Square images will be cropped on sides
- Horizontal images are not recommended

### Performance
- Script is fast (~1-2 seconds per image)
- Optimized output files (~150-200KB)
- Can batch process using bash scripts

## Batch Processing

Create multiple mockups at once:

```bash
# Create bash script
cat > create-mockups.sh << 'EOF'
#!/bin/bash

npm run replace-iphone screen1.png iphone-screen1.png center
npm run replace-iphone screen2.png iphone-screen2.png center
npm run replace-iphone screen3.png iphone-screen3.png left
npm run replace-iphone screen4.png iphone-screen4.png right

echo "✅ All mockups created!"
EOF

chmod +x create-mockups.sh
./create-mockups.sh
```

## Programmatic Usage (JavaScript/TypeScript)

```javascript
const { replaceIPhoneContent } = require('./scripts/replace-iphone-content-v2');

async function createMockups() {
  await replaceIPhoneContent(
    'public/images/my-screenshot.png',
    'public/images/iphone-mockup.png',
    'center'
  );

  console.log('Mockup created!');
}

createMockups();
```

## Workflow Integration

### Next.js - Static Assets
1. Run script to create mockups
2. Mockups saved in `public/images/`
3. Use normally in components:

```tsx
<Image
  src="/images/iphone-analysis-final.png"
  alt="App Screenshot"
  width={546}
  height={1080}
/>
```

### CI/CD
Add to pipeline to generate mockups automatically:

```yaml
# .github/workflows/generate-mockups.yml
- name: Generate iPhone Mockups
  run: |
    npm run replace-iphone analysis.png iphone-analysis.png
    git add public/images/iphone-*.png
    git commit -m "chore: update iPhone mockups"
```

---

**Ready to create professional mockups!** 🚀
