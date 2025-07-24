import React, { useState, useEffect, useRef } from 'react';
import { Play, Eye, Cuboid as Cube, Video, Image, ExternalLink, Layers, Palette, Sparkles, Zap, Star, Award, X, Upload } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';

// Helper function to check if URL is a video
const isVideoUrl = (url: string): boolean => {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv', '.m4v'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext)) || url.includes('youtube.com') || url.includes('youtu.be');
};

// Helper function to get YouTube thumbnail
const getYouTubeThumbnail = (url: string): string | null => {
  const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  if (videoIdMatch) {
    return `https://img.youtube.com/vi/${videoIdMatch[1]}/maxresdefault.jpg`;
  }
  return null;
};

// Define WorkItem interface
interface WorkItem {
  id: number;
  name: string;
  url: string;
  type: '3d' | 'thumbnail' | 'video';
  enabled: boolean;
  isYouTubeVideo?: boolean;
}

const Works = () => {
  const [activeTab, setActiveTab] = useState<'3d' | 'thumbnails' | 'videos'>('3d');
  const [scrollY, setScrollY] = useState(0);
  const [modalContent, setModalContent] = useState<{
    type: 'image' | 'video';
    url: string;
    title: string;
    isYouTube?: boolean;
  } | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{[key: string]: {width: number, height: number}}>({});
  // Store aspect ratio for each item
  const [aspectRatios, setAspectRatios] = useState<{[key: number]: string}>({});

  // Helper to calculate aspect ratio class
  const calcAspectClass = (width: number, height: number): string => {
    const aspectRatio = width / height;
    if (aspectRatio > 1.7) return 'aspect-[16/9]'; // Wide
    if (aspectRatio > 1.3) return 'aspect-[4/3]'; // Standard
    if (aspectRatio > 0.9) return 'aspect-square'; // Square
    if (aspectRatio > 0.5) return 'aspect-[3/4]'; // Tall but not phone
    return 'aspect-[9/16]'; // Only for very tall/phone
  };

  // Get aspect ratio for image
  const getImageAspectRatio = (item: WorkItem): string => {
    return aspectRatios[item.id] || 'aspect-[16/9]';
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: '3d', label: '3D Art', icon: Cube, color: 'from-cyan-500 to-blue-500', accent: 'cyan' },
    { id: 'thumbnails', label: 'Thumbnails', icon: Image, color: 'from-purple-500 to-pink-500', accent: 'purple' },
    { id: 'videos', label: 'Videos', icon: Video, color: 'from-emerald-500 to-teal-500', accent: 'emerald' }
  ];

  // Enhanced Google Drive URL converter
  const convertGDriveUrl = (url: string): string => {
    console.log('🔍 Converting URL:', url);
    
    if (url.includes('drive.google.com')) {
      let fileId = null;
      
      // Extract file ID from various Google Drive URL formats
      const patterns = [
        /\/file\/d\/([a-zA-Z0-9_-]+)/,
        /[?&]id=([a-zA-Z0-9_-]+)/,
        /\/d\/([^\/\?]+)/
      ];
      
      for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) {
          fileId = match[1];
          break;
        }
      }
      
      if (fileId) {
        // Use the most reliable format for direct viewing
        const directUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
        console.log('✅ Converted to:', directUrl);
        return directUrl;
      }
    }
    
    return url;
  };

  // Load image dimensions for adaptive sizing
  const loadImageDimensions = (item: WorkItem) => {
    const imageUrl = getDisplayUrl(item);
    const img = document.createElement('img');
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      setImageDimensions(prev => ({
        ...prev,
        [item.id]: { width: img.naturalWidth, height: img.naturalHeight }
      }));
      setAspectRatios(prev => ({
        ...prev,
        [item.id]: calcAspectClass(img.naturalWidth, img.naturalHeight)
      }));
    };
    img.onerror = () => {
      // If image fails, fallback to 16/9
    };
    img.src = imageUrl;
  };

  const handleItemClick = (item: WorkItem) => {
    console.log('🖱️ Item clicked:', item.name);
    const originalUrl = item.url;
    const convertedUrl = convertGDriveUrl(originalUrl);
    
    console.log('📸 Original URL:', originalUrl);
    console.log('🔄 Converted URL:', convertedUrl);
    
    if (item.isYouTubeVideo) {
      window.open(originalUrl, '_blank', 'noopener,noreferrer');
    } else {
      setModalContent({
        type: isVideoUrl(originalUrl) ? 'video' : 'image',
        url: convertedUrl, // Use the converted URL
        title: item.name,
        isYouTube: false
      });
    }
  };

  const closeModal = () => {
    setModalContent(null);
  };

  // Add keyboard event listener for ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalContent) {
        closeModal();
      }
    };

    if (modalContent) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [modalContent]);

  // Helper function to get display URL (for images and video thumbnails)
  const getDisplayUrl = (item: WorkItem): string => {
    if (item.isYouTubeVideo) {
      const thumbnail = getYouTubeThumbnail(item.url);
      return thumbnail || '/portfolio/assets/placeholder.png';
    }
    // If the url starts with /, treat as local asset, else external
    if (item.url.startsWith('/')) {
      return item.url;
    }
    return convertGDriveUrl(item.url);
  };

  const filteredWorks = portfolioItems.filter(item => 
    item.enabled && (
      (activeTab === '3d' && item.type === '3d') ||
      (activeTab === 'thumbnails' && item.type === 'thumbnail') ||
      (activeTab === 'videos' && item.type === 'video')
    )
  );

  // Load dimensions for all filtered works
  useEffect(() => {
    filteredWorks.forEach(item => {
      if (!imageDimensions[item.id]) {
        loadImageDimensions(item);
      }
    });
  }, [filteredWorks]);

  return (
    <section id="works" className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-gray-900 py-32 relative overflow-hidden">
      {/* Enhanced 3D Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-32 left-20 w-40 h-40 bg-gradient-to-br from-cyan-400/15 to-blue-500/15 rounded-3xl transform rotate-45 shadow-2xl shadow-cyan-500/10 animate-quantum-spin-enhanced"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${45 + scrollY * 0.05}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`,
          }}
        ></div>
        <div 
          className="absolute top-64 right-32 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-2xl transform -rotate-12 shadow-2xl shadow-purple-500/10 animate-hologram-enhanced"
          style={{
            transform: `translateY(${scrollY * -0.08}px) rotate(${-12 - scrollY * 0.03}deg) scale(${1 + Math.cos(scrollY * 0.008) * 0.15})`,
          }}
        ></div>
        <div 
          className="absolute bottom-40 left-40 w-48 h-48 bg-gradient-to-br from-emerald-400/15 to-teal-500/15 rounded-full shadow-2xl shadow-emerald-500/10 animate-cyber-glitch-enhanced"
          style={{
            transform: `translateY(${scrollY * 0.06}px) scale(${1 + scrollY * 0.0001}) rotate(${scrollY * 0.02}deg)`,
          }}
        ></div>
        
        {/* Enhanced 3D Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.1) 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 160px 160px',
          transform: `perspective(1000px) rotateX(${60 + scrollY * 0.01}deg) translateZ(${scrollY * 0.1}px)`
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-neon-glow-enhanced animation-delay-500 shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-purple-400 rounded-full animate-neon-glow-enhanced animation-delay-1000 shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-neon-glow-enhanced animation-delay-1500 shadow-lg shadow-emerald-400/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-xl rounded-full border border-slate-600/40 mb-12 shadow-2xl animate-hologram-enhanced">
            <Layers className="w-6 h-6 text-cyan-400 animate-quantum-spin-enhanced" />
            <span className="text-cyan-400 font-semibold text-lg animate-neon-glow-enhanced">Featured Portfolio</span>
          </div>
          
          <h2 className="text-7xl md:text-8xl font-black text-slate-100 mb-8 tracking-tight animate-cyber-glitch-enhanced">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 animate-data-stream-enhanced">Creative</span> Work
          </h2>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-hologram-enhanced">
            Showcasing expertise in 3D artistry, thumbnail design, and video editing
          </p>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-20 animate-fade-in animation-delay-500">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`group relative px-10 py-6 rounded-2xl transition-all duration-500 transform hover:scale-105 font-bold text-lg overflow-hidden animate-quantum-spin-enhanced ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-2xl animate-neon-glow-enhanced`
                  : 'bg-gradient-to-r from-slate-800/50 to-slate-700/50 text-slate-300 hover:text-white border border-slate-600/30 backdrop-blur-xl'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10 flex items-center gap-4">
                <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'animate-hologram-enhanced' : 'group-hover:rotate-12'} transition-transform`} />
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-white/10 animate-cyber-glitch-enhanced"></div>
              )}
            </button>
          ))}
        </div>

        {/* Works Grid - ADAPTIVE SIZING */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
          {filteredWorks.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer animate-fade-in bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-xl border border-slate-600/40 hover:border-cyan-500/60 transition-all duration-700 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/40 break-inside-avoid mb-8 animate-glow animate-gradient shadow-cyan-500/20"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => handleItemClick(item)}
            >
              {/* ADAPTIVE: Image container that adapts to image dimensions */}
              <div className={`w-full max-w-full mx-auto overflow-hidden rounded-t-2xl relative bg-slate-800/50 ${getImageAspectRatio(item)} flex items-center justify-center animate-glow animate-gradient`}>
                <img
                  src={getDisplayUrl(item)}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 shadow-2xl shadow-cyan-500/30 group-hover:shadow-purple-500/50 animate-glow bg-slate-900"
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  ref={el => {
                    if (el && el.naturalWidth && el.naturalHeight && !aspectRatios[item.id]) {
                      setImageDimensions(prev => ({
                        ...prev,
                        [item.id]: { width: el.naturalWidth, height: el.naturalHeight }
                      }));
                      setAspectRatios(prev => ({
                        ...prev,
                        [item.id]: calcAspectClass(el.naturalWidth, el.naturalHeight)
                      }));
                    }
                  }}
                  onLoad={e => {
                    const img = e.currentTarget;
                    setImageDimensions(prev => ({
                      ...prev,
                      [item.id]: { width: img.naturalWidth, height: img.naturalHeight }
                    }));
                    setAspectRatios(prev => ({
                      ...prev,
                      [item.id]: calcAspectClass(img.naturalWidth, img.naturalHeight)
                    }));
                  }}
                  onError={e => {
                    const placeholder = '/portfolio/assets/placeholder.png';
                    if (e.currentTarget.src !== window.location.origin + placeholder && e.currentTarget.src !== placeholder) {
                      e.currentTarget.src = placeholder;
                    }
                  }}
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Play/View overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`w-20 h-20 ${item.isYouTubeVideo ? 'bg-gradient-to-r from-red-500/90 to-red-600/90' : 'bg-gradient-to-r from-cyan-500/80 to-purple-500/80'} backdrop-blur-md rounded-full flex items-center justify-center transform group-hover:scale-150 transition-all duration-500 shadow-2xl animate-glow animate-gradient`}> 
                  {item.isYouTubeVideo ? (
                    <Play className="w-8 h-8 text-white ml-1" />
                  ) : (
                    <Eye className="w-8 h-8 text-white" />
                  )}
                </div>
              </div>

              {/* Type indicators */}
              {item.isYouTubeVideo && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-red-500/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold flex items-center gap-1">
                  <Play className="w-3 h-3" />
                  YouTube
                </div>
              )}

              {isVideoUrl(item.url) && !item.isYouTubeVideo && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold flex items-center gap-1">
                  <Video className="w-3 h-3" />
                  Video
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <div className="text-center py-32 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-12 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-full flex items-center justify-center backdrop-blur-xl border border-slate-600/30 shadow-2xl animate-quantum-spin-enhanced">
              <Upload className="w-16 h-16 text-slate-400 animate-hologram-enhanced" />
            </div>
            <h3 className="text-5xl font-bold text-slate-200 mb-8 animate-neon-glow-enhanced">No {activeTab === '3d' ? '3D Art' : activeTab === 'thumbnails' ? 'Thumbnails' : 'Videos'} Yet</h3>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed animate-data-stream-enhanced mb-8">
              I have not added {activeTab} yet. It will be soon added
            </p>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10 animate-fade-in animation-delay-1000">
          <div className="group bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/40 text-center hover:border-cyan-500/60 transition-all duration-700 transform hover:scale-105 hover:rotate-1 shadow-xl animate-quantum-spin-enhanced">
            <Sparkles className="w-20 h-20 text-cyan-400 mx-auto mb-8 group-hover:rotate-12 transition-transform animate-neon-glow-enhanced" />
            <h4 className="text-slate-100 font-bold text-2xl mb-6 animate-hologram-enhanced">Creative Excellence</h4>
            <p className="text-slate-300 text-lg leading-relaxed animate-data-stream-enhanced">Innovative designs that capture attention and drive engagement across all platforms</p>
          </div>
          
          <div className="group bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/40 text-center hover:border-emerald-500/60 transition-all duration-700 transform hover:scale-105 shadow-xl animate-cyber-glitch-enhanced animation-delay-300">
            <Zap className="w-20 h-20 text-emerald-400 mx-auto mb-8 group-hover:rotate-12 transition-transform animate-neon-glow-enhanced" />
            <h4 className="text-slate-100 font-bold text-2xl mb-6 animate-hologram-enhanced">Fast Delivery</h4>
            <p className="text-slate-300 text-lg leading-relaxed animate-data-stream-enhanced">Quick turnaround times without compromising on quality or attention to detail</p>
          </div>
          
          <div className="group bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/40 text-center hover:border-purple-500/60 transition-all duration-700 transform hover:scale-105 hover:-rotate-1 shadow-xl animate-hologram-enhanced animation-delay-600">
            <Award className="w-20 h-20 text-purple-400 mx-auto mb-8 group-hover:rotate-12 transition-transform animate-neon-glow-enhanced" />
            <h4 className="text-slate-100 font-bold text-2xl mb-6 animate-cyber-glitch-enhanced">Professional Quality</h4>
            <p className="text-slate-300 text-lg leading-relaxed animate-data-stream-enhanced">Industry-standard work that meets the highest professional expectations</p>
          </div>
        </div>
      </div>

      {/* FIXED MODAL - Shows actual images with better error handling */}
      {modalContent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="relative w-full max-w-7xl max-h-[95vh] bg-slate-900/98 rounded-2xl overflow-hidden border border-slate-600/30 shadow-2xl backdrop-blur-xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-12 h-12 bg-slate-800/90 hover:bg-slate-700/90 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm border border-slate-600/30 shadow-lg"
            >
              <X size={24} />
            </button>
            
            <div className="w-full h-full p-6">
              {modalContent.type === 'video' && !modalContent.isYouTube ? (
                <div className="flex items-center justify-center min-h-[70vh]">
                  <video
                    src={modalContent.url}
                    controls
                    autoPlay
                    className="max-w-full max-h-[70vh] rounded-lg shadow-2xl bg-black"
                    onError={(e) => {
                      console.log('❌ Video failed to load:', modalContent.url);
                      const errorDiv = document.createElement('div');
                      errorDiv.className = 'text-white text-center p-8';
                      errorDiv.innerHTML = `<p>Failed to load video: ${modalContent.title}</p>`;
                      e.currentTarget.parentNode?.replaceChild(errorDiv, e.currentTarget);
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="flex items-center justify-center min-h-[70vh]">
                  <img
                    src={modalContent.url}
                    alt={modalContent.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    onLoad={() => {
                      console.log('✅ Modal image loaded successfully:', modalContent.url);
                    }}
                    onError={(e) => {
                      console.log('\u274c Modal image failed to load:', modalContent.url);
                      const currentSrc = e.currentTarget.src;
                      const originalUrl = modalContent.url;
                      const placeholder = '/portfolio/assets/placeholder.png';
                      
                      // Try different Google Drive formats for modal
                      if (originalUrl.includes('drive.google.com')) {
                        const fileIdMatch = originalUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
                        if (fileIdMatch) {
                          const fileId = fileIdMatch[1];
                          if (currentSrc.includes('uc?export=view')) {
                            console.log('🔄 Modal: Trying thumbnail format...');
                            e.currentTarget.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w2000`;
                            return;
                          } else if (currentSrc.includes('thumbnail')) {
                            console.log('🔄 Modal: Trying googleusercontent format...');
                            e.currentTarget.src = `https://lh3.googleusercontent.com/d/${fileId}=w2000`;
                            return;
                          } else if (currentSrc.includes('googleusercontent')) {
                            console.log('🔄 Modal: Trying preview format...');
                            e.currentTarget.src = `https://drive.google.com/file/d/${fileId}/preview`;
                            return;
                          }
                        }
                      }
                      
                      // Final fallback for modal
                      if (!currentSrc.includes('placeholder')) {
                        console.log('\ud83d\udd04 Modal: Using placeholder...');
                        e.currentTarget.src = placeholder;
                      }
                    }}
                  />
                </div>
              )}
              <div className="p-4 border-t border-slate-600/30 bg-slate-800/50 rounded-b-2xl">
                <h3 className="text-white font-medium text-lg">{modalContent.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;