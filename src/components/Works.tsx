import React, { useState } from 'react';
import { useModalStore } from '../store/modalStore';
import { Play, Eye, Grid, Video, Image, ExternalLink } from 'lucide-react';

interface WorkItem {
  id: number;
  type: 'thumbnail' | 'video';
  title: string;
  category: string;
  url: string;
  thumbnailUrl?: string;
  enabled: boolean;
}

const Works = () => {
  const [activeTab, setActiveTab] = useState<'thumbnails' | 'videos'>('thumbnails');
  const { openModal } = useModalStore();

  const works: WorkItem[] = [
    {
      id: 1,
      type: 'thumbnail',
      title: 'Gaming Channel Thumbnail',
      category: 'Gaming',
      url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop',
      enabled: false,
    },
    {
      id: 2,
      type: 'video',
      title: 'Content Creator Intro',
      category: 'Branding',
      url: 'https://www.youtube.com/embed/WicEgKHKT6c?si=1pJLLOTsSQ_FyNnC',
      enabled: false
    },
    {
      id: 3,
      type: 'thumbnail',
      title: 'Tech Review Thumbnail',
      category: 'Technology',
      url: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200&h=800&fit=crop',
      enabled: false
    },
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
    
    return <div className="w-full h-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
      <Video className="w-16 h-16 text-white/60" />
    </div>;
  };

  return (
    <section id="works" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-slate-900 py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-fuchsia-900/20"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(45deg, #fff 25%, transparent 25%), linear-gradient(-45deg, #fff 25%, transparent 25%)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <Grid className="w-5 h-5 text-violet-400" />
            <span className="text-violet-400 font-medium">Featured Work</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Projects</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Showcasing creative excellence through compelling visual designs and engaging video content
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center gap-4 mb-16 animate-fade-in animation-delay-500">
          <button
            onClick={() => setActiveTab('thumbnails')}
            className={`relative px-10 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 font-bold text-lg overflow-hidden ${
              activeTab === 'thumbnails'
                ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-2xl shadow-violet-500/25'
                : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20 backdrop-blur-md'
            }`}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Image className="w-5 h-5" />
              Thumbnails
            </span>
            {activeTab === 'thumbnails' && (
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 animate-pulse"></div>
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('videos')}
            className={`relative px-10 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 font-bold text-lg overflow-hidden ${
              activeTab === 'videos'
                ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-2xl shadow-violet-500/25'
                : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20 backdrop-blur-md'
            }`}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Video className="w-5 h-5" />
              Videos
            </span>
            {activeTab === 'videos' && (
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 animate-pulse"></div>
            )}
          </button>
        </div>

        {/* Works grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works
            .filter((item) => item.enabled && (
              (activeTab === 'thumbnails' && item.type === 'thumbnail') ||
              (activeTab === 'videos' && item.type === 'video')
            ))
            .map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl cursor-pointer animate-fade-in bg-white/5 backdrop-blur-md border border-white/10 hover:border-violet-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => openModal({
                  type: item.type,
                  url: item.url,
                  title: item.title,
                })}
              >
                <div className="aspect-video w-full overflow-hidden rounded-t-3xl relative">
                  {getThumbnailContent(item)}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  
                  {item.type === 'thumbnail' && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-violet-500/20 text-violet-300 text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-violet-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Click to view</span>
                    <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-violet-400 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Empty state */}
        {works.filter(item => 
          item.enabled && 
          ((activeTab === 'thumbnails' && item.type === 'thumbnail') ||
          (activeTab === 'videos' && item.type === 'video'))
        ).length === 0 && (
          <div className="text-center py-24">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full flex items-center justify-center">
              <Eye className="w-12 h-12 text-white/40" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">Portfolio Coming Soon</h3>
            <p className="text-white/60 text-lg max-w-md mx-auto">
              Exciting {activeTab} projects are currently in development. Check back soon for updates!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Works;