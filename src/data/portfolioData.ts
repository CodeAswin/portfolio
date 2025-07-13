// Portfolio data - Edit this file to add/remove work items
// Only developers can edit this - not visible on website

export interface WorkItem {
  id: number;
  type: '3d' | 'thumbnail' | 'video';
  title: string;
  category: string;
  url: string;
  isYouTubeVideo: boolean; // Set to true if it's a YouTube video
  enabled: boolean; // Set to false to hide from website
}

export const portfolioItems: WorkItem[] = [
  // 3D Art Examples
  {
    id: 1,
    type: '3d',
    title: 'Futuristic Robot Design',
    category: 'Character Design',
    url: 'https://www.youtube.com/shorts/YflVlHYY-uQ',
    isYouTubeVideo: true,
    enabled: true
  },
  {
    id: 2,
    type: '3d',
    title: 'Sci-Fi Environment',
    category: 'Environment Art',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    isYouTubeVideo: false,
    enabled: true
  },

  // Thumbnail Examples
  {
    id: 3,
    type: 'thumbnail',
    title: 'Gaming Thumbnail',
    category: 'YouTube Gaming',
    url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop',
    isYouTubeVideo: false,
    enabled: true
  },
  {
    id: 4,
    type: 'thumbnail',
    title: 'Tech Review Thumbnail',
    category: 'Tech Content',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop',
    isYouTubeVideo: false,
    enabled: true
  },

  // Video Examples
  {
    id: 5,
    type: 'video',
    title: 'Product Showcase',
    category: 'Commercial',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Example YouTube URL
    isYouTubeVideo: true,
    enabled: true
  },
  {
    id: 6,
    type: 'video',
    title: 'Motion Graphics Demo',
    category: 'Animation',
    url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop',
    isYouTubeVideo: false, // This is a video thumbnail, not YouTube embed
    enabled: true
  },

  // Add more items here following the same format
  // To add new work:
  // 1. Copy an existing item
  // 2. Change the id to a unique number
  // 3. Set type to '3d', 'thumbnail', or 'video'
  // 4. Add your title and category
  // 5. Add your image/video URL
  // 6. Set isYouTubeVideo to true if it's a YouTube video
  // 7. Set enabled to true to show on website
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