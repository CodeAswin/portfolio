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
  
  // Latest items first (highest IDs at top)
  {
    id: 15,
    type: 'thumbnail',
    url: '/portfolio/assets/newsss.png',
    name: 'Unauthorized use is forbidden',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 14,
    type: 'thumbnail',
    url: '/portfolio/assets/editedversion.png',
    name: 'Unauthorized use is forbidden',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 13,
    type: '3d',
    url: '/portfolio/assets/11.png',
    name: 'Unauthorized use is forbidden',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 12,
    type: 'video',
    url: '/portfolio/assets/12.mkv',
    name: 'Unauthorized use is forbidden',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 11,
    type: '3d',
    url: '/portfolio/assets/3.png',
    name: 'Unauthorized use is forbidden',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 10,
    type: 'thumbnail',
    url: '/portfolio/assets/4.png',
    name: 'Unauthorized use is forbidden',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 9,
    type: '3d',
    url: '/portfolio/assets/10.png',
    name: 'Unauthorized use is forbidden',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 8,
    type: '3d',
    url: '/portfolio/assets/9.png',
    name: 'Unauthorized use is forbidden',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 7,
    type: '3d',
    url: '/portfolio/assets/8.png',
    name: 'Unauthorized use is forbidden',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 6,
    type: '3d',
    url: '/portfolio/assets/7.png',
    name: 'Unauthorized use is forbidden',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 5,
    type: 'thumbnail',
    url: '/portfolio/assets/2.png',
    name: 'Unauthorized use is forbidden',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 4,
    type: 'thumbnail',
    url: '/portfolio/assets/5.png',
    name: 'Unauthorized use is forbidden',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 3,
    type: 'thumbnail',
    url: '/portfolio/assets/6.png',
    name: 'Unauthorized use is forbidden',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 2,
    type: '3d',
    url: '/portfolio/assets/myphoto.png',
    name: 'Unauthorized use is forbidden',
    isYouTubeVideo: false,
    enabled: true
  },

  {
    id: 1,
    type: '3d',
    url: '/portfolio/assets/1.png',
    name: 'Unauthorized use is forbidden',
    isYouTubeVideo: false,
    enabled: true
  },
  // Example Local Video (MP4)
  
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
