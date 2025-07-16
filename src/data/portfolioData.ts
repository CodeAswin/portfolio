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
  
  // Example 3D Art (using external image URL)
  {
    id: 1,
    type: '3d',
    url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    name: '3D Robot Design',
    isYouTubeVideo: false,
    enabled: true
  },
  
  // Example Thumbnail (using external image URL)
  {
    id: 2,
    type: 'thumbnail',
    url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    name: 'Gaming Thumbnail',
    isYouTubeVideo: false,
    enabled: true
  },
  
  // Example YouTube Video
  {
    id: 3,
    type: 'video',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    name: 'Sample Video',
    isYouTubeVideo: true,
    enabled: true
  },
  
  // Example Local Video (MP4)
  {
    id: 4,
    type: 'video',
    url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    name: 'Video Edit Sample',
    isYouTubeVideo: false,
    enabled: true
  },

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