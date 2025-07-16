# Portfolio Management Guide

## 🎯 How to Add Your Work

### Step 1: Add Your Files
1. Upload your images/videos to the appropriate folders:
   - **3D Art**: `public/portfolio/3d-art/`
   - **Thumbnails**: `public/portfolio/thumbnails/`
   - **Videos**: `public/portfolio/videos/`

### Step 2: Update the Code
1. Open `src/data/portfolioData.ts`
2. Add your items to the `portfolioItems` array:

```javascript
{
  id: 5, // Use next available number
  type: '3d', // or 'thumbnail' or 'video'
  url: '/portfolio/3d-art/your-file.jpg', // Path to your file
  name: 'Your Artwork Name',
  isYouTubeVideo: false, // true only for YouTube links
  enabled: true // Set to true to show on website
}
```

### Step 3: For YouTube Videos
```javascript
{
  id: 6,
  type: 'video',
  url: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
  name: 'Your Video Title',
  isYouTubeVideo: true,
  enabled: true
}
```

## 📁 Supported File Types
- **Images**: .jpg, .jpeg, .png, .gif, .webp
- **Videos**: .mp4, .webm, .mov
- **YouTube**: Any YouTube URL

## ✅ Quick Example
```javascript
// Add this to portfolioItems array in portfolioData.ts
{
  id: 7,
  type: 'thumbnail',
  url: '/portfolio/thumbnails/awesome-thumb.jpg',
  name: 'Gaming Thumbnail',
  isYouTubeVideo: false,
  enabled: true
}
```

That's it! Your work will appear on the website immediately.