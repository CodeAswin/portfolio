# 🎯 How to Add Your Portfolio Items

## ✅ **WORKING SYSTEM - Easy to Use!**

### **Step 1: Get Your Image/Video URLs**

#### **For Images:**
1. Upload to **Discord** (easiest):
   - Send image in any Discord channel
   - Right-click → "Copy Link"
   - Use that URL

2. Upload to **Imgur**:
   - Go to imgur.com
   - Upload image
   - Copy direct link

3. Use **Unsplash** (free stock photos):
   - Go to unsplash.com
   - Find image → Copy link

#### **For Videos:**
1. **YouTube** (recommended):
   - Upload to YouTube
   - Copy the video URL

2. **Direct video files**:
   - Upload to Google Drive → Get shareable link
   - Or use any video hosting service

### **Step 2: Edit the Code**

Open `src/data/portfolioData.ts` and add your items:

```javascript
// ADD YOUR ITEMS HERE
{
  id: 5, // Use next number
  type: '3d', // or 'thumbnail' or 'video'
  url: 'https://your-image-url.com/image.jpg',
  name: 'My Awesome 3D Art',
  isYouTubeVideo: false, // true only for YouTube
  enabled: true // This makes it show on website
},
```

## 🚀 **Examples:**

### **3D Art Example:**
```javascript
{
  id: 5,
  type: '3d',
  url: 'https://cdn.discordapp.com/attachments/123/456/my-3d-art.jpg',
  name: 'Robot Character Design',
  isYouTubeVideo: false,
  enabled: true
},
```

### **Thumbnail Example:**
```javascript
{
  id: 6,
  type: 'thumbnail',
  url: 'https://i.imgur.com/abc123.jpg',
  name: 'Gaming Thumbnail',
  isYouTubeVideo: false,
  enabled: true
},
```

### **YouTube Video Example:**
```javascript
{
  id: 7,
  type: 'video',
  url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  name: 'My Animation',
  isYouTubeVideo: true,
  enabled: true
},
```

### **Regular Video Example:**
```javascript
{
  id: 8,
  type: 'video',
  url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
  name: 'Video Edit',
  isYouTubeVideo: false,
  enabled: true
},
```

## ⚡ **Quick Tips:**

- **Discord links work great** for images
- **YouTube is best** for videos
- **Set enabled: true** to show on website
- **Set enabled: false** to hide temporarily
- **Use direct image URLs** (ending in .jpg, .png, etc.)

## 🎯 **Result:**
Your portfolio will show all enabled items in the correct sections automatically!

**3D Art** → Shows in 3D Art tab
**Thumbnails** → Shows in Thumbnails tab  
**Videos** → Shows in Videos tab

That's it! Super simple and it actually works! 🚀