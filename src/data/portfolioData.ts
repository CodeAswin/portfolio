// Portfolio data - Now supports both manual entries and automatic file scanning
import { fileScanner } from '../utils/fileScanner';

export interface WorkItem {
  id: number;
  type: '3d' | 'thumbnail' | 'video';
  url: string;
  isYouTubeVideo: boolean;
  enabled: boolean;
  name?: string;
  isLocalFile?: boolean;
}

// Manual portfolio items (YouTube videos, external URLs, etc.)
export const manualPortfolioItems: WorkItem[] = [
  // YouTube videos and external content
  {
    id: 1,
    type: '3d',
    url: 'https://www.youtube.com/shorts/YflVlHYY-uQ',
    isYouTubeVideo: true,
    enabled: true,
    name: '3D Animation Short'
  },
  {
    id: 2,
    type: 'video',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isYouTubeVideo: true,
    enabled: true,
    name: 'Sample Video'
  },
  // Add more manual items here
];

// Function to get all portfolio items (manual + scanned files)
export const getPortfolioItems = async (): Promise<WorkItem[]> => {
  try {
    // Get manually added items
    const manualItems = manualPortfolioItems.filter(item => item.enabled);
    
    // Scan folders for local files
    const scannedFiles = await fileScanner.scanPortfolioFolders();
    
    // Convert scanned files to WorkItem format
    const fileItems: WorkItem[] = scannedFiles.map((file, index) => ({
      id: 1000 + index, // Use high IDs to avoid conflicts
      type: file.type,
      url: file.url,
      isYouTubeVideo: false,
      enabled: true,
      name: file.name,
      isLocalFile: true
    }));
    
    // Combine manual and file items
    return [...manualItems, ...fileItems];
  } catch (error) {
    console.error('Error loading portfolio items:', error);
    return manualPortfolioItems.filter(item => item.enabled);
  }
};

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

// Function to add files programmatically (for easy management)
export const addPortfolioFile = (fileName: string, folderName: '3d-art' | 'thumbnails' | 'videos') => {
  const fileEntry = fileScanner.createFileEntry(fileName, folderName);
  console.log(`Added file: ${fileName} to ${folderName} section`);
  return fileEntry;
};