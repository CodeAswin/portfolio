import { useState, useEffect } from 'react';

export interface PortfolioFile {
  id: string;
  name: string;
  url: string;
  type: '3d' | 'thumbnail' | 'video';
  isVideo: boolean;
  extension: string;
}

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov'];

export const usePortfolioFiles = () => {
  const [files, setFiles] = useState<PortfolioFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const scanFolder = async (folderPath: string, type: '3d' | 'thumbnail' | 'video'): Promise<PortfolioFile[]> => {
    try {
      // In a real implementation, this would scan the actual folder
      // For now, we'll simulate with a few example files
      const mockFiles: PortfolioFile[] = [];
      
      // You can add your files here or implement actual folder scanning
      // This is a placeholder that you can replace with actual file scanning logic
      
      return mockFiles;
    } catch (err) {
      console.error(`Error scanning ${folderPath}:`, err);
      return [];
    }
  };

  const loadPortfolioFiles = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const [threeDFiles, thumbnailFiles, videoFiles] = await Promise.all([
        scanFolder('/portfolio/3d-art', '3d'),
        scanFolder('/portfolio/thumbnails', 'thumbnail'),
        scanFolder('/portfolio/videos', 'video')
      ]);

      const allFiles = [...threeDFiles, ...thumbnailFiles, ...videoFiles];
      setFiles(allFiles);
    } catch (err) {
      setError('Failed to load portfolio files');
      console.error('Error loading portfolio files:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPortfolioFiles();
    
    // Set up file watcher (in a real app, you'd use a proper file watcher)
    const interval = setInterval(loadPortfolioFiles, 5000); // Check every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return { files, loading, error, refresh: loadPortfolioFiles };
};