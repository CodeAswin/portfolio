// File scanner utility for portfolio management
export interface ScannedFile {
  name: string;
  path: string;
  url: string;
  type: '3d' | 'thumbnail' | 'video';
  isVideo: boolean;
  extension: string;
  size?: number;
  lastModified?: Date;
}

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.avi'];

export class PortfolioFileScanner {
  private basePath = '/portfolio';
  
  private getFileType(extension: string): 'image' | 'video' | 'unknown' {
    if (IMAGE_EXTENSIONS.includes(extension.toLowerCase())) return 'image';
    if (VIDEO_EXTENSIONS.includes(extension.toLowerCase())) return 'video';
    return 'unknown';
  }

  private getPortfolioType(folderName: string): '3d' | 'thumbnail' | 'video' {
    switch (folderName) {
      case '3d-art': return '3d';
      case 'thumbnails': return 'thumbnail';
      case 'videos': return 'video';
      default: return '3d';
    }
  }

  async scanPortfolioFolders(): Promise<ScannedFile[]> {
    const folders = ['3d-art', 'thumbnails', 'videos'];
    const allFiles: ScannedFile[] = [];

    for (const folder of folders) {
      try {
        const folderFiles = await this.scanFolder(folder);
        allFiles.push(...folderFiles);
      } catch (error) {
        console.warn(`Could not scan folder ${folder}:`, error);
      }
    }

    return allFiles;
  }

  private async scanFolder(folderName: string): Promise<ScannedFile[]> {
    const folderPath = `${this.basePath}/${folderName}`;
    const files: ScannedFile[] = [];

    try {
      // In a browser environment, we can't directly scan folders
      // This would need to be implemented server-side or with a file input
      // For now, we'll return example files that you can replace with actual scanning logic
      
      // Example implementation - replace with your actual file scanning
      const exampleFiles = this.getExampleFiles(folderName);
      return exampleFiles;
      
    } catch (error) {
      console.error(`Error scanning folder ${folderPath}:`, error);
      return [];
    }
  }

  private getExampleFiles(folderName: string): ScannedFile[] {
    // This is where you would implement actual file scanning
    // For now, returning empty array - you'll add your files here
    return [];
  }

  // Helper method to add files programmatically
  createFileEntry(fileName: string, folderName: string): ScannedFile {
    const extension = fileName.substring(fileName.lastIndexOf('.'));
    const fileType = this.getFileType(extension);
    const portfolioType = this.getPortfolioType(folderName);
    
    return {
      name: fileName,
      path: `${this.basePath}/${folderName}/${fileName}`,
      url: `/portfolio/${folderName}/${fileName}`,
      type: portfolioType,
      isVideo: fileType === 'video',
      extension,
      lastModified: new Date()
    };
  }
}

export const fileScanner = new PortfolioFileScanner();