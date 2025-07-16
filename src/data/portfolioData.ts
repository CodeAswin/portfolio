// Portfolio data - Simple file management system
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
  // 3D Art Examples (replace with your files)
  {
    id: 1,
    type: '3d',
    url: '/portfolio/3d-art/example-3d.jpg', // Replace with your actual file
    name: '3D Artwork 1',
    isYouTubeVideo: false,
    enabled: false // Set to true when you add your file
  },
  
  // Thumbnail Examples (replace with your files)
  {
    id: 2,
    type: 'thumbnail',
    url: '/portfolio/thumbnails/example-thumb.jpg', // Replace with your actual file
    name: 'Thumbnail Design 1',
    isYouTubeVideo: false,
    enabled: false // Set to true when you add your file
  },
  
  // Video Examples (replace with your files)
  {
    id: 3,
    type: 'video',
    url: '/portfolio/videos/example-video.mp4', // Replace with your actual file
    name: 'Video Edit 1',
    isYouTubeVideo: false,
    enabled: false // Set to true when you add your file
  },
  
  // YouTube Video Example
  {
    id: 4,
    type: '3d',
    url: 'https://www.youtube.com/shorts/YflVlHYY-uQ',
    name: '3D Animation Short',
    isYouTubeVideo: true,
    enabled: true // This one is enabled as example
  }
];

// Helper function to get YouTube video ID
export const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Helper function to get YouTube thumbnail
export const getYouTubeThumbnail = (url: string): string | null => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
};