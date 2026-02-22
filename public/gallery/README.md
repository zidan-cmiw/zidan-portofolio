# Gallery Folder Structure

This folder contains all images for the Gallery section of your portfolio.

## Folder Organization

```
gallery/
├── certificates/       # Your certificates (cert1.jpg, cert2.jpg, etc.)
├── achievements/       # Your achievements/awards (achievement1.jpg, etc.)
└── random/            # Random photos/moments (photo1.jpg, photo2.jpg, etc.)
```

## How to Add Images

1. **Certificates**: Add your certificate images to `certificates/` folder
   - Rename them to: `cert1.jpg`, `cert2.jpg`, `cert3.jpg`, etc.

2. **Achievements**: Add your achievement/award images to `achievements/` folder
   - Rename them to: `achievement1.jpg`, `achievement2.jpg`, etc.

3. **Random Photos**: Add your random photos to `random/` folder
   - Rename them to: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.

## Supported Image Formats
- JPG/JPEG (recommended)
- PNG
- WebP

## Recommended Image Sizes
- Width: 800-1200px (will be auto-resized)
- Keep aspect ratio natural (portrait or landscape)
- File size: < 1MB for faster loading

## Update Gallery Data

After adding images, update the `galleryItems` array in `src/app/page.js`:

```javascript
const galleryItems = [
  // Add/edit items here
  { 
    id: 1, 
    category: 'certificates', 
    image: '/gallery/certificates/cert1.jpg', 
    title: 'Your Certificate Title', 
    description: 'Description of the certificate' 
  },
  // ... more items
];
```

## Tips
- Use descriptive titles and descriptions
- Keep image quality high but file size optimized
- You can add as many images as you want
- Images will automatically arrange in Pinterest-style masonry layout
