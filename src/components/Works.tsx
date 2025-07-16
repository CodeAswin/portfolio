import React, { useState, useEffect } from 'react';
import { Play, Eye, Cuboid as Cube, Video, Image, ExternalLink, Layers, Palette, Sparkles, Zap, Star, Award, X, Upload } from 'lucide-react';
import { getPortfolioItems, getYouTubeVideoId, getYouTubeThumbnail, WorkItem } from '../data/portfolioData';

const Works = () => {
  const [activeTab, setActiveTab] = useState<'3d' | 'thumbnails' | 'videos'>('3d');
  const [scrollY, setScrollY] = useState(0);
  const [portfolioItems, setPortfolioItems] = useState<WorkItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalContent, setModalContent] = useState<{
    type: 'image' | 'video';
    url: string;
    isYouTube?: boolean;
  } | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    loadPortfolioItems();
    
    // Set up auto-refresh to check for new files
    const interval = setInterval(loadPortfolioItems, 10000); // Check every 10 seconds
    
    return () => clearInterval(interval);
  }, []);

  const loadPortfolioItems = async () => {
    setLoading(true);
    try {
      const items = await getPortfolioItems();
      setPortfolioItems(items);
    } catch (error) {
      console.error('Error loading portfolio items:', error);
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: '3d', label: '3D Art', icon: Cube, color: 'from-cyan-500 to-blue-500', accent: 'cyan' },
    { id: 'thumbnails', label: 'Thumbnails', icon: Image, color: 'from-purple-500 to-pink-500', accent: 'purple' },
    { id: 'videos', label: 'Videos', icon: Video, color: 'from-emerald-500 to-teal-500', accent: 'emerald' }
  ];

  const handleItemClick = (item: WorkItem) => {
    if (item.isYouTubeVideo) {
      // Open YouTube videos in new tab
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else if (item.type === 'video' && !item.isYouTubeVideo) {
      // Open modal for non-YouTube videos
      setModalContent({
        type: 'video',
        url: item.url,
        isYouTube: false
      });
    } else {
      // Open modal for images
      setModalContent({
        type: 'image',
        url: item.url
      });
    }
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const getThumbnailContent = (item: WorkItem) => {
    if (item.isYouTubeVideo) {
      const thumbnail = getYouTubeThumbnail(item.url);
      if (thumbnail) {
        return <img src={thumbnail} alt="Video thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />;
      }
    }
    
    return <img src={item.url} alt={item.name || "Portfolio item"} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />;
  };

  const getOverlayIcon = (item: WorkItem) => {
    if (item.isYouTubeVideo) {
      return (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500/90 to-red-600/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl animate-pulse-glow">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
      );
    }
    
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-16 h-16 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-md rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl animate-quantum-spin">
          <Eye className="w-8 h-8 text-white" />
        </div>
      </div>
    );
  };

  const filteredWorks = portfolioItems.filter(item => 
    item.enabled && (
      (activeTab === '3d' && item.type === '3d') ||
      (activeTab === 'thumbnails' && item.type === 'thumbnail') ||
      (activeTab === 'videos' && item.type === 'video')
    )
  );

  return (
    <section id="works" className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-gray-900 py-32 relative overflow-hidden">
      {/* Enhanced 3D Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Multiple floating 3D shapes with enhanced animations */}
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
        <div 
          className="absolute top-1/2 right-1/4 w-36 h-36 bg-gradient-to-br from-orange-400/15 to-red-500/15 rounded-2xl shadow-2xl shadow-orange-500/10 animate-data-stream-enhanced"
          style={{
            transform: `translateY(${scrollY * 0.09}px) rotate(${30 + scrollY * -0.04}deg)`,
          }}
        ></div>
        
        {/* Matrix rain effect */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-matrix-rain-enhanced"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-matrix-rain-enhanced animation-delay-1000"></div>
        <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-matrix-rain-enhanced animation-delay-2000"></div>
        
        {/* Enhanced 3D Grid Pattern with depth */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 160px 160px, 160px 160px',
          transform: `perspective(1000px) rotateX(${60 + scrollY * 0.01}deg) translateZ(${scrollY * 0.1}px)`
        }}></div>
        
        {/* Enhanced floating particles */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-neon-glow-enhanced animation-delay-500 shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-purple-400 rounded-full animate-neon-glow-enhanced animation-delay-1000 shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-neon-glow-enhanced animation-delay-1500 shadow-lg shadow-emerald-400/50"></div>
        <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-orange-400 rounded-full animate-neon-glow-enhanced animation-delay-2000 shadow-lg shadow-orange-400/50"></div>
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

          {/* File Management Instructions */}
          <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-xl rounded-2xl p-8 border border-slate-600/40 animate-fade-in animation-delay-500">
            <div className="flex items-center gap-4 mb-6">
              <FolderOpen className="w-8 h-8 text-emerald-400 animate-bounce-3d" />
              <h3 className="text-2xl font-bold text-slate-100">Easy File Management</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-slate-700/30 rounded-xl p-6 border border-cyan-500/30">
                <Cube className="w-8 h-8 text-cyan-400 mb-3" />
                <h4 className="text-slate-100 font-semibold mb-2">3D Art</h4>
                <p className="text-slate-300 text-sm">Drop files in <code className="bg-slate-800 px-2 py-1 rounded">/public/portfolio/3d-art/</code></p>
              </div>
              <div className="bg-slate-700/30 rounded-xl p-6 border border-purple-500/30">
                <Image className="w-8 h-8 text-purple-400 mb-3" />
                <h4 className="text-slate-100 font-semibold mb-2">Thumbnails</h4>
                <p className="text-slate-300 text-sm">Drop files in <code className="bg-slate-800 px-2 py-1 rounded">/public/portfolio/thumbnails/</code></p>
              </div>
              <div className="bg-slate-700/30 rounded-xl p-6 border border-emerald-500/30">
                <Video className="w-8 h-8 text-emerald-400 mb-3" />
                <h4 className="text-slate-100 font-semibold mb-2">Videos</h4>
                <p className="text-slate-300 text-sm">Drop files in <code className="bg-slate-800 px-2 py-1 rounded">/public/portfolio/videos/</code></p>
              </div>
            </div>
            <p className="text-slate-400 text-center mt-6">
              Files are automatically detected and displayed in the correct section!
            </p>
          </div>
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

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-8 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
            <p className="text-slate-300 text-xl">Loading portfolio items...</p>
          </div>
        )}

        {/* Works Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredWorks.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer animate-fade-in bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-xl border border-slate-600/40 hover:border-cyan-500/60 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-quantum-spin-enhanced"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => handleItemClick(item)}
              >
                <div className="w-full aspect-[4/3] overflow-hidden rounded-t-2xl relative">
                  {getThumbnailContent(item)}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-hologram-enhanced"></div>
                  
                  {getOverlayIcon(item)}

                  {/* File type indicator */}
                  {item.isLocalFile && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-500/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                      Local File
                    </div>
                  )}
                </div>

                {/* Item name */}
                {item.name && (
                  <div className="p-4">
                    <h3 className="text-slate-200 font-medium text-sm truncate">{item.name}</h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredWorks.length === 0 && (
          <div className="text-center py-32 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-12 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-full flex items-center justify-center backdrop-blur-xl border border-slate-600/30 shadow-2xl animate-quantum-spin-enhanced">
              <Upload className="w-16 h-16 text-slate-400 animate-hologram-enhanced" />
            </div>
            <h3 className="text-5xl font-bold text-slate-200 mb-8 animate-neon-glow-enhanced">No {activeTab === '3d' ? '3D Art' : activeTab === 'thumbnails' ? 'Thumbnails' : 'Videos'} Yet</h3>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed animate-data-stream-enhanced mb-8">
              Add your {activeTab} files to the <code className="bg-slate-800 px-2 py-1 rounded">/public/portfolio/{activeTab === '3d' ? '3d-art' : activeTab}/ </code> folder and they'll appear here automatically!
            </p>
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 max-w-md mx-auto border border-slate-600/30">
              <p className="text-slate-300 text-sm">
                Supported formats: JPG, PNG, GIF, WebP, MP4, WebM, MOV
              </p>
            </div>
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

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-black/80 rounded-2xl overflow-hidden border border-slate-600/30 shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm border border-slate-600/30"
            >
              <X size={24} />
            </button>
            
            <div className="w-full h-full">
              {modalContent.type === 'video' && !modalContent.isYouTube ? (
                <div className="flex items-center justify-center min-h-[60vh] p-8">
                  <video
                    src={modalContent.url}
                    controls
                    autoPlay
                    className="max-w-full max-h-full rounded-lg shadow-2xl"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="flex items-center justify-center min-h-[60vh] p-8">
                  <img
                    src={modalContent.url}
                    alt="Portfolio item"
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;