# 🚀 Google Drive Setup for Portfolio

## ✅ How to Add Google Drive Images/Videos

### **Step 1: Upload to Google Drive**
1. Go to [Google Drive](https://drive.google.com)
2. Upload your image or video file
3. Wait for upload to complete

### **Step 2: Get Shareable Link**
1. **Right-click** your uploaded file
2. Click **"Get link"** or **"Share"**
3. Change permissions to **"Anyone with the link can view"**
4. **Copy the link** (it looks like this):
   ```
   https://drive.google.com/file/d/1ABC123DEF456GHI789JKL/view?usp=sharing
   ```

### **Step 3: Add to Portfolio**
1. Open `src/data/portfolioData.ts`
2. Add your item like this:

```javascript
{
  id: 11,
  type: '3d', // or 'thumbnail' or 'video'
  url: 'https://drive.google.com/file/d/1ABC123DEF456GHI789JKL/view?usp=sharing',
  name: 'My Google Drive Image',
  isYouTubeVideo: false,
  enabled: true
}
```

## 🎯 **That's It!**

The system will automatically:
- ✅ Convert Google Drive URLs to direct image URLs
- ✅ Show proper previews in your portfolio
- ✅ Handle errors with fallback images
- ✅ Work in modals when clicked

## 📱 **Supported Formats:**

### **Images:**
- JPG, PNG, GIF, WebP
- Any size (auto-resized for display)

### **Videos:**
- MP4, WebM, MOV
- Shows video preview with controls

## 🔧 **Troubleshooting:**

### **Image Not Showing?**
1. Make sure the Google Drive link is **public** (Anyone with link can view)
2. Check that the file is actually an image/video
3. Try re-uploading the file to Google Drive

### **Still Not Working?**
- Use Discord CDN links instead (upload to Discord, copy link)
- Use direct image URLs from other services
- Check browser console for error messages

## 💡 **Pro Tips:**
- **Google Drive** is great for large files and videos
- **Discord CDN** is faster for images
- **YouTube** is best for long videos
- Always test your links before adding them!