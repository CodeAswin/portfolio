// Portfolio data - Add your work here
export interface WorkItem {
  id: number;
  type: '3d' | 'thumbnail' | 'video';
  url: string;
  name: string;
  isYouTubeVideo: boolean;
  enabled: boolean;
}

// Add your portfolio items here
export const portfolioItems: WorkItem[] = [
  // EXAMPLE ITEMS - Replace with your actual work
  // 
  // GOOGLE DRIVE INSTRUCTIONS:
  // 1. Upload your file to Google Drive
  // 2. Right-click the file → "Get link" → "Anyone with the link can view"
  // 3. Copy the share URL (looks like: https://drive.google.com/file/d/FILE_ID/view?usp=sharing)
  // 4. Paste it directly in the url field below - the system will auto-convert it
  //
  // DISCORD INSTRUCTIONS:
  // 1. Upload image to any Discord channel
  // 2. Right-click image → "Copy Link"
  // 3. Paste the Discord CDN URL directly
  
  // Example 3D Art (using external image URL)
  {
    id: 1,
    type: 'thumbnail',
    url: 'https://drive.google.com/file/d/1mzU-97tRPvuDhIJeVeVXnI-9-V_5347-/view?usp=sharing',
    name: '3D Minecraft Thumbnail',
    isYouTubeVideo: false,
    enabled: true
  },
  
  // Example Thumbnail (using external image URL)
  {
    id: 2,
    type: 'thumbnail',
    url: 'https://media.discordapp.net/attachments/1252290999363960897/1395034485828882583/edited.png?ex=6878fa9b&is=6877a91b&hm=99bc9608352953ae8733da6fe2ea387ac7a1cb985b918ddbdc7df8aff8492556&=&format=webp&quality=lossless',
    name: '3D Minecraft Thumbnail',
    isYouTubeVideo: false,
    enabled: true
  },
  
  // Example YouTube Video
  {
    id: 3,
    type: 'thumbnail',
    url: 'https://media.discordapp.net/attachments/1252290999363960897/1395034536508915844/Immotal_Thumbnail.png?ex=6878faa7&is=6877a927&hm=7cb969d497bda2c054c57b0a47b9a1ceb6c48242152c5e026b4767da39efca18&=&format=webp&quality=lossless',
    name: '3D Minecraft Thumbnail',
    isYouTubeVideo: false,
    enabled: true
  },
  
  // Example Local Video (MP4)
  {
    id: 5,
    type: 'thumbnail',
    url: 'https://media.discordapp.net/attachments/1252290999363960897/1395034508142706710/Friver_Thumbnail.png?ex=6878faa1&is=6877a921&hm=ed36362a3c24fd3b97cda6c1fc90585c3e21200d1c39f9326527b43cb125fe11&=&format=webp&quality=lossless&width=1460&height=821',
    name: '3D Minecraft Thumbnail',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 6,
    type: '3d',
    url: 'https://media.discordapp.net/attachments/1252290999363960897/1395034566476955768/Fogedited.png?ex=6878faaf&is=6877a92f&hm=1903695d7ed799dc6502442580b532604137f82466550f85595c2d81434a54c0&=&format=webp&quality=lossless&width=1460&height=821',
    name: '3D Minecraft Foggy Render',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 7,
    type: '3d',
    url: 'https://media.discordapp.net/attachments/1252290999363960897/1395034795444146287/abmweddd.png?ex=6878fae5&is=6877a965&hm=3145604929c8e6bddd0cec9875d99cfa38dec273e36bc36959a9a6e87e95b708&=&format=webp&quality=lossless&width=197&height=350',
    name: 'BMW Render',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 8,
    type: '3d',
    url: 'https://media.discordapp.net/attachments/1252290999363960897/1395034816319197204/abmwed.png?ex=6878faea&is=6877a96a&hm=f422e6616c482dd3a3f4d1d4f3550682476d635097ed967bb8f78f48d13f21ae&=&format=webp&quality=lossless&width=520&height=924',
    name: 'BMW Render',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 9,
    type: '3d',
    url: 'https://media.discordapp.net/attachments/1252290999363960897/1395035253948551179/BMW_after_ed.png?ex=6878fb53&is=6877a9d3&hm=5480ed6f7367c84d43a69ee38577f5c3b33ba8068da87e707cffc53b064fff6e&=&format=webp&quality=lossless&width=197&height=350',
    name: 'BMW Render',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 10,
    type: '3d',
    url: 'https://media.discordapp.net/attachments/1252290999363960897/1395034472059240498/Clear_style_Edited.png?ex=6878fa98&is=6877a918&hm=2f9d60fbe24f509848740ce17faa08164e5d4e75174df2345487831c0ebd6fd2&=&format=webp&quality=lossless&width=925&height=925',
    name: 'Minecraft PFP',
    isYouTubeVideo: false,
    enabled: true
  },

  // Example Google Drive Image (just paste the share URL directly):
  // {
  //   id: 11,
  //   type: '3d',
  //   url: 'https://drive.google.com/file/d/1ABC123DEF456GHI789JKL/view?usp=sharing',
  //   name: 'My Google Drive Image',
  //   isYouTubeVideo: false,
  //   enabled: true
  // },

  
  // ADD YOUR ITEMS BELOW THIS LINE
  // Copy the examples above and change the URLs to your images/videos
  
  // Your 3D Art Example:
  // {
  //   id: 5,
  //   type: '3d',
  //   url: 'https://your-image-url.com/image.jpg', // Use direct image URL
  //   name: 'My 3D Artwork',
  //   isYouTubeVideo: false,
  //   enabled: true
  // },
  
  // Your Thumbnail Example:
  // {
  //   id: 6,
  //   type: 'thumbnail',
  //   url: 'https://your-image-url.com/thumbnail.jpg', // Use direct image URL
  //   name: 'My Thumbnail',
  //   isYouTubeVideo: false,
  //   enabled: true
  // },
  
  // Your YouTube Video Example:
  // {
  //   id: 7,
  //   type: 'video',
  //   url: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
  //   name: 'My YouTube Video',
  //   isYouTubeVideo: true,
  //   enabled: true
  // }
];

// Helper function to get YouTube video ID
export const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Helper function to get YouTube thumbnail
export const getYouTubeThumbnail = (url: string): string | null => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
};

// Helper function to check if URL is a video
export const isVideoUrl = (url: string): boolean => {
  const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv'];
  return videoExtensions.some(ext => url.toLowerCase().includes(ext)) || url.includes('youtube.com') || url.includes('youtu.be');
};