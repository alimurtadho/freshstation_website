# Image Placement Guide for Fresh Station Website

## File Structure
```
/Users/newuser/ali/project/busines/freshstationid/
└── public/
    └── img/
        ├── logo.png                    # Main logo (transparent background)
        ├── logo-white.png             # White logo for dark backgrounds
        ├── hero-avocado.jpg           # Hero section background
        ├── farm-about.jpg             # About section farm image
        ├── premium-hass.jpg           # Premium product image
        ├── bulk-hass.jpg              # Bulk product image
        ├── organic-hass.jpg           # Organic product image
        ├── farm-view.jpg              # Gallery - farm landscape
        ├── fresh-avocados.jpg         # Gallery - fresh avocados
        ├── harvesting.jpg             # Gallery - harvesting process
        ├── packaging.jpg              # Gallery - packaging process
        ├── avocado-trees.jpg          # Gallery - avocado trees
        └── organic-quality.jpg        # Gallery - organic quality
```

## Where Each Image is Used

### 1. **logo.png** 
- **Used in**: Header navigation (desktop & mobile)
- **Size**: 400x200px (2:1 ratio) recommended
- **Background**: Transparent PNG
- **Fallback**: Text "Fresh Station" if image fails to load

### 2. **logo-white.png**
- **Used in**: Footer (dark background)
- **Size**: 400x200px (2:1 ratio) recommended
- **Background**: Transparent PNG with white text/graphics
- **Fallback**: Text "Fresh Station" if image fails to load

### 3. **hero-avocado.jpg**
- **Used in**: Hero section background
- **Size**: 1920x1080px (16:9 ratio) minimum
- **Content**: Beautiful avocado farm or avocado close-up
- **Note**: Dark overlay will be applied, so bright images work best

### 4. **farm-about.jpg**
- **Used in**: About section (right side image)
- **Size**: 1200x800px (3:2 ratio) recommended
- **Content**: Farm overview, farming process, or quality control

### 5. **premium-hass.jpg**
- **Used in**: Products section - Premium product card
- **Size**: 800x600px (4:3 ratio) recommended
- **Content**: High-quality Hass avocados, premium presentation

### 6. **bulk-hass.jpg**
- **Used in**: Products section - Bulk product card
- **Size**: 800x600px (4:3 ratio) recommended
- **Content**: Bulk packaging or wholesale quantities

### 7. **organic-hass.jpg**
- **Used in**: Products section - Organic product card
- **Size**: 800x600px (4:3 ratio) recommended
- **Content**: Organic avocados with organic certification visible

### Gallery Images (8-13)
All gallery images:
- **Size**: 800x600px (4:3 ratio) recommended
- **Used in**: Gallery section with category filtering

- **farm-view.jpg**: Farm landscape view (Category: Farm)
- **fresh-avocados.jpg**: Fresh avocado close-up (Category: Products)
- **harvesting.jpg**: Workers harvesting (Category: Process)
- **packaging.jpg**: Packaging operation (Category: Packaging)
- **avocado-trees.jpg**: Avocado trees growing (Category: Farm)
- **organic-quality.jpg**: Organic quality inspection (Category: Products)

## Image Optimization Tips

1. **File Formats**:
   - Use JPEG for photos with many colors
   - Use PNG for logos and graphics with transparency
   - Consider WebP format for better compression

2. **File Sizes**:
   - Hero image: < 500KB
   - Product images: < 300KB each
   - Gallery images: < 200KB each
   - Logos: < 50KB each

3. **Compression Tools**:
   - TinyPNG (online)
   - ImageOptim (Mac)
   - GIMP (free)
   - Photoshop (paid)

## Getting Started

1. **Place your images** in the `/public/img/` folder with exact filenames listed above
2. **Test locally** by running `npm run dev`
3. **Check each page** to ensure images load correctly
4. **Optimize images** if loading is slow

## Fallback Behavior

- If logo images fail to load, text "Fresh Station" will display instead
- If other images fail to load, broken image icon will appear
- All images have proper alt text for accessibility

## Next Steps

1. Replace placeholder images with your actual farm and product photos
2. Ensure all images follow the recommended sizes
3. Optimize images for web use
4. Test the website thoroughly after image replacement

Your website will automatically use these local images once they're placed in the correct location!
