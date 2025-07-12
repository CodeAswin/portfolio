import React, { useState, useEffect } from 'react';
import { useModalStore } from '../store/modalStore';
import { Play, Eye, Cube, Video, Image, ExternalLink, Layers, Palette } from 'lucide-react';

interface WorkItem {
  id: number;
  type: '3d' | 'thumbnail' | 'video';
  title: string;
  category: string;
  url: string;
  thumbnailUrl?: string;
  enabled: boolean;
}

const Works = () => {
  const [activeTab, setActiveTab] = useState<'3d' | 'thumbnails' | 'videos'>('3d');
  const [scrollY, setScrollY] = useState(0);
  const { openModal } = useModalStore();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const works: WorkItem[] = [
    {
      id: 1,
      type: '3d',
      title: '3D Product Visualization',
      category: '3D Modeling',
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
      enabled: false,
    },
    {
      id: 2,
      type: 'thumbnail',
      title: 'Gaming Channel Thumbnail',
      category: 'YouTube Design',
      url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop',
      enabled: false,
    },
    {
      id: 3,
      type: 'video',
      title: 'Motion Graphics Intro',
      category: 'Video Editing',
      url: 'https://www.youtube.com/embed/WicEgKHKT6c?si=1pJLLOTsSQ_FyNnC',
      enabled: false
    },
  ];

  const tabs = [
    { id: '3d', label: '3D Art', icon: Cube, color: 'from-cyan-500 to-blue-500' },
    { id: 'thumbnails', label: 'Thumbnails', icon: Image, color: 'from-purple-500 to-pink-500' },
    { id: 'videos', label: 'Videos', icon: Video, color: 'from-emerald-500 to-teal-500' }
  ];

  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const getThumbnailContent = (item: WorkItem) => {
    if (item.type !== 'video') {
      return <img src={item.url} alt={item.title} className="w-full h-full object-cover" />;
    }
    
    const youtubeId = getYouTubeVideoId(item.url);
    if (youtubeId) {
      return <img src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`} alt={item.title} className="w-full h-full object-cover" />;
    }
    
    return <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
      <Video className="w-16 h-16 text-emerald-400" />
    </div>;
  };

  return (
    <section id="works" className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-gray-900 py-32 relative overflow-hidden">
      {/* 3D Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating 3D shapes that respond to scroll */}
        <div 
          className="absolute top-32 left-20 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-3xl transform rotate-45 shadow-2xl shadow-cyan-500/5"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${45 + scrollY * 0.05}deg)`,
          }}
        ></div>
        <div 
          className="absolute top-64 right-32 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-2xl transform -rotate-12 shadow-2xl shadow-purple-500/5"
          style={{
            transform: `translateY(${scrollY * -0.08}px) rotate(${-12 - scrollY * 0.03}deg)`,
          }}
        ></div>
        <div 
          className="absolute bottom-40 left-40 w-48 h-48 bg-gradient-to-br from-emerald-400/10 to-teal-500/10 rounded-full shadow-2xl shadow-emerald-500/5"
          style={{
            transform: `translateY(${scrollY * 0.06}px) scale(${1 + scrollY * 0.0001})`,
          }}
        ></div>
        
        {/* 3D Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          transform: `perspective(1000px) rotateX(${60 + scrollY * 0.01}deg)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-full border border-slate-600/30 mb-12 shadow-2xl">
            <Layers className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-lg">Featured Portfolio</span>
          </div>
          
          <h2 className="text-7xl md:text-8xl font-black text-slate-100 mb-8 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">Creative</span> Work
          </h2>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Showcasing expertise in 3D artistry, thumbnail design, and video editing
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-20 animate-fade-in animation-delay-500">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`group relative px-10 py-6 rounded-2xl transition-all duration-500 transform hover:scale-105 font-bold text-lg overflow-hidden ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-2xl`
                  : 'bg-gradient-to-r from-slate-800/50 to-slate-700/50 text-slate-300 hover:text-white border border-slate-600/30 backdrop-blur-xl'
              }`}
            >
              <span className="relative z-10 flex items-center gap-4">
                <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'animate-pulse' : 'group-hover:rotate-12'} transition-transform`} />
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {works
            .filter((item) => item.enabled && (
              (activeTab === '3d' && item.type === '3d') ||
              (activeTab === 'thumbnails' && item.type === 'thumbnail') ||
              (activeTab === 'videos' && item.type === 'video')
            ))
            .map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl cursor-pointer animate-fade-in bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-xl border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => openModal({
                  type: item.type === '3d' ? 'thumbnail' : item.type,
                  url: item.url,
                  title: item.title,
                })}
              >
                <div className="aspect-video w-full overflow-hidden rounded-t-3xl relative">
                  {getThumbnailContent(item)}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl">
                        <Play className="w-12 h-12 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  
                  {item.type === '3d' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl">
                        <Cube className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  )}
                  
                  {item.type === 'thumbnail' && (
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-md rounded-full flex items-center justify-center">
                        <Eye className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-4 py-2 bg-gradient-to-r ${
                      item.type === '3d' ? 'from-cyan-500/20 to-blue-500/20 text-cyan-300' :
                      item.type === 'thumbnail' ? 'from-purple-500/20 to-pink-500/20 text-purple-300' :
                      'from-emerald-500/20 to-teal-500/20 text-emerald-300'
                    } text-sm font-semibold rounded-full border border-current/30`}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-slate-100 text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm font-medium">Click to view details</span>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors transform group-hover:scale-110" />
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Empty State */}
        {works.filter(item => 
          item.enabled && 
          ((activeTab === '3d' && item.type === '3d') ||
          (activeTab === 'thumbnails' && item.type === 'thumbnail') ||
          (activeTab === 'videos' && item.type === 'video'))
        ).length === 0 && (
          <div className="text-center py-32">
            <div className="w-32 h-32 mx-auto mb-12 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-full flex items-center justify-center backdrop-blur-xl border border-slate-600/30 shadow-2xl">
              <Palette className="w-16 h-16 text-slate-400" />
            </div>
            <h3 className="text-5xl font-bold text-slate-200 mb-8">Portfolio Coming Soon</h3>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Amazing {activeTab === '3d' ? '3D artworks' : activeTab} projects are currently in development. 
              Check back soon for incredible visual content!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Works;