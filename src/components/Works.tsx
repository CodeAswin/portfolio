import React, { useState, useEffect } from 'react';
import { Play, Eye, Cuboid as Cube, Video, Image, ExternalLink, Layers, Palette, Sparkles, Zap, Star, Award } from 'lucide-react';
import { portfolioItems, getYouTubeVideoId, getYouTubeThumbnail } from '../data/portfolioData';

const Works = () => {
  const [activeTab, setActiveTab] = useState<'3d' | 'thumbnails' | 'videos'>('3d');
  const [scrollY, setScrollY] = useState(0);

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

  const handleItemClick = (item: any) => {
    if (item.isYouTubeVideo) {
      // Open YouTube video in new tab
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
    // For images, do nothing (just display)
  };

  const getThumbnailContent = (item: any) => {
    if (item.isYouTubeVideo) {
      const thumbnail = getYouTubeThumbnail(item.url);
      if (thumbnail) {
        return <img src={thumbnail} alt="Video thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />;
      }
    }
    
    return <img src={item.url} alt="Portfolio item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />;
  };

  const getOverlayIcon = (item: any) => {
    if (item.isYouTubeVideo) {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl animate-pulse-glow">
            <Play className="w-12 h-12 text-white ml-1" />
          </div>
        </div>
      );
    }
    
    if (item.type === '3d') {
      return (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 backdrop-blur-md rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl animate-quantum-spin">
            <Cube className="w-12 h-12 text-white" />
          </div>
        </div>
      );
    }
    
    if (item.type === 'thumbnail') {
      return (
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-14 h-14 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-md rounded-full flex items-center justify-center animate-hologram">
            <Eye className="w-7 h-7 text-white" />
          </div>
        </div>
      );
    }
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
          className="absolute top-32 left-20 w-40 h-40 bg-gradient-to-br from-cyan-400/15 to-blue-500/15 rounded-3xl transform rotate-45 shadow-2xl shadow-cyan-500/10 animate-quantum-spin"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${45 + scrollY * 0.05}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`,
          }}
        ></div>
        <div 
          className="absolute top-64 right-32 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-2xl transform -rotate-12 shadow-2xl shadow-purple-500/10 animate-hologram"
          style={{
            transform: `translateY(${scrollY * -0.08}px) rotate(${-12 - scrollY * 0.03}deg) scale(${1 + Math.cos(scrollY * 0.008) * 0.15})`,
          }}
        ></div>
        <div 
          className="absolute bottom-40 left-40 w-48 h-48 bg-gradient-to-br from-emerald-400/15 to-teal-500/15 rounded-full shadow-2xl shadow-emerald-500/10 animate-cyber-glitch"
          style={{
            transform: `translateY(${scrollY * 0.06}px) scale(${1 + scrollY * 0.0001}) rotate(${scrollY * 0.02}deg)`,
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/4 w-36 h-36 bg-gradient-to-br from-orange-400/15 to-red-500/15 rounded-2xl shadow-2xl shadow-orange-500/10 animate-data-stream"
          style={{
            transform: `translateY(${scrollY * 0.09}px) rotate(${30 + scrollY * -0.04}deg)`,
          }}
        ></div>
        
        {/* Matrix rain effect */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-matrix-rain"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-matrix-rain animation-delay-1000"></div>
        <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-matrix-rain animation-delay-2000"></div>
        
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
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-neon-glow animation-delay-500 shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-purple-400 rounded-full animate-neon-glow animation-delay-1000 shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-neon-glow animation-delay-1500 shadow-lg shadow-emerald-400/50"></div>
        <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-orange-400 rounded-full animate-neon-glow animation-delay-2000 shadow-lg shadow-orange-400/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-xl rounded-full border border-slate-600/40 mb-12 shadow-2xl animate-hologram">
            <Layers className="w-6 h-6 text-cyan-400 animate-quantum-spin" />
            <span className="text-cyan-400 font-semibold text-lg animate-neon-glow">Featured Portfolio</span>
          </div>
          
          <h2 className="text-7xl md:text-8xl font-black text-slate-100 mb-8 tracking-tight animate-cyber-glitch">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 animate-data-stream">Creative</span> Work
          </h2>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-hologram">
            Showcasing expertise in 3D artistry, thumbnail design, and video editing
          </p>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-20 animate-fade-in animation-delay-500">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`group relative px-10 py-6 rounded-2xl transition-all duration-500 transform hover:scale-105 font-bold text-lg overflow-hidden animate-quantum-spin ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-2xl animate-neon-glow`
                  : 'bg-gradient-to-r from-slate-800/50 to-slate-700/50 text-slate-300 hover:text-white border border-slate-600/30 backdrop-blur-xl'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10 flex items-center gap-4">
                <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'animate-hologram' : 'group-hover:rotate-12'} transition-transform`} />
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-white/10 animate-cyber-glitch"></div>
              )}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredWorks.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer animate-fade-in bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-xl border border-slate-600/40 hover:border-cyan-500/60 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-quantum-spin ${
                !item.isYouTubeVideo ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => handleItemClick(item)}
            >
              <div className={`w-full overflow-hidden rounded-t-3xl relative ${
                item.isYouTubeVideo ? 'aspect-video' : 'aspect-[4/3] lg:aspect-[3/2]'
              }`}>
                {getThumbnailContent(item)}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-hologram"></div>
                
                {getOverlayIcon(item)}
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm font-medium animate-neon-glow">
                    {item.isYouTubeVideo ? 'Click to watch on YouTube' : 'Portfolio Item'}
                  </span>
                  {item.isYouTubeVideo && (
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-red-400 transition-colors transform group-hover:scale-110 animate-cyber-glitch" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <div className="text-center py-32 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-12 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-full flex items-center justify-center backdrop-blur-xl border border-slate-600/30 shadow-2xl animate-quantum-spin">
              <Palette className="w-16 h-16 text-slate-400 animate-hologram" />
            </div>
            <h3 className="text-5xl font-bold text-slate-200 mb-8 animate-neon-glow">No {activeTab === '3d' ? '3D Art' : activeTab === 'thumbnails' ? 'Thumbnails' : 'Videos'} Yet</h3>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed animate-data-stream">
              Check back soon for amazing {activeTab} work!
            </p>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10 animate-fade-in animation-delay-1000">
          <div className="group bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/40 text-center hover:border-cyan-500/60 transition-all duration-700 transform hover:scale-105 hover:rotate-1 shadow-xl animate-quantum-spin">
            <Sparkles className="w-20 h-20 text-cyan-400 mx-auto mb-8 group-hover:rotate-12 transition-transform animate-neon-glow" />
            <h4 className="text-slate-100 font-bold text-2xl mb-6 animate-hologram">Creative Excellence</h4>
            <p className="text-slate-300 text-lg leading-relaxed animate-data-stream">Innovative designs that capture attention and drive engagement across all platforms</p>
          </div>
          
          <div className="group bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/40 text-center hover:border-emerald-500/60 transition-all duration-700 transform hover:scale-105 shadow-xl animate-cyber-glitch animation-delay-300">
            <Zap className="w-20 h-20 text-emerald-400 mx-auto mb-8 group-hover:rotate-12 transition-transform animate-neon-glow" />
            <h4 className="text-slate-100 font-bold text-2xl mb-6 animate-hologram">Fast Delivery</h4>
            <p className="text-slate-300 text-lg leading-relaxed animate-data-stream">Quick turnaround times without compromising on quality or attention to detail</p>
          </div>
          
          <div className="group bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/40 text-center hover:border-purple-500/60 transition-all duration-700 transform hover:scale-105 hover:-rotate-1 shadow-xl animate-hologram animation-delay-600">
            <Award className="w-20 h-20 text-purple-400 mx-auto mb-8 group-hover:rotate-12 transition-transform animate-neon-glow" />
            <h4 className="text-slate-100 font-bold text-2xl mb-6 animate-cyber-glitch">Professional Quality</h4>
            <p className="text-slate-300 text-lg leading-relaxed animate-data-stream">Industry-standard work that meets the highest professional expectations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;