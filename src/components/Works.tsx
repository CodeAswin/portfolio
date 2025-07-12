import React, { useState, useRef, useEffect } from 'react';
import { useModalStore } from '../store/modalStore';
import { Play, Eye, ExternalLink, Grid, Video } from 'lucide-react';

interface WorkItem {
  id: number;
  type: 'thumbnail' | 'video';
  title: string;
  client: string;
  url: string;
  thumbnailUrl?: string;
  enabled: boolean;
}

const getYouTubeVideoId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const VideoThumbnail = ({ url }: { url: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [thumbnail, setThumbnail] = useState<string>('');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.currentTime = 0;
    };

    const handleTimeUpdate = () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d')?.drawImage(video, 0, 0);
      setThumbnail(canvas.toDataURL());
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [url]);

  return (
    <>
      <video
        ref={videoRef}
        src={url}
        className="hidden"
        preload="metadata"
      />
      {thumbnail && (
        <img
          src={thumbnail}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
      )}
    </>
  );
};

const Works = () => {
  const [activeTab, setActiveTab] = useState<'thumbnails' | 'videos'>('thumbnails');
  const { openModal } = useModalStore();

  const works: WorkItem[] = [
    {
      id: 1,
      type: 'thumbnail',
      title: 'Gaming Thumbnail Design',
      client: 'Gaming Channel',
      url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop',
      enabled: false,
    },
    {
      id: 2,
      type: 'video',
      title: 'Gameplay Montage',
      client: 'Esports Team',
      url: 'https://www.youtube.com/embed/WicEgKHKT6c?si=1pJLLOTsSQ_FyNnC',
      enabled: false
    },
    {
      id: 3,
      type: 'thumbnail',
      title: 'Stream Overlay Design',
      client: 'Content Creator',
      url: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200&h=800&fit=crop',
      enabled: false
    },
  ];

  const getThumbnailContent = (item: WorkItem) => {
    if (item.type !== 'video') return <img src={item.url} alt={item.title} className="w-full h-full object-cover" />;
    
    if (item.thumbnailUrl) {
      return <img src={item.thumbnailUrl} alt={item.title} className="w-full h-full object-cover" />;
    }

    const youtubeId = getYouTubeVideoId(item.url);
    if (youtubeId) {
      return <img src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`} alt={item.title} className="w-full h-full object-cover" />;
    }
    
    return <VideoThumbnail url={item.url} />;
  };

  return (
    <section id="works" className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
      {/* Modern background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(45deg, #fff 25%, transparent 25%), linear-gradient(-45deg, #fff 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #fff 75%), linear-gradient(-45deg, transparent 75%, #fff 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <Grid className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">Featured Work</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Showcasing creative excellence through stunning visual designs and engaging video content
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-12 animate-fade-in animation-delay-500">
          <button
            onClick={() => setActiveTab('thumbnails')}
            className={`relative px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 font-bold text-lg overflow-hidden ${
              activeTab === 'thumbnails'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/25'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Grid className="w-5 h-5" />
              Thumbnails
            </span>
            {activeTab === 'thumbnails' && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-pulse"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`relative px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 font-bold text-lg overflow-hidden ${
              activeTab === 'videos'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/25'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Video className="w-5 h-5" />
              Videos
            </span>
            {activeTab === 'videos' && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-pulse"></div>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works
            .filter((item) => item.enabled && (
              (activeTab === 'thumbnails' && item.type === 'thumbnail') ||
              (activeTab === 'videos' && item.type === 'video')
            ))
            .map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl cursor-pointer animate-fade-in bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
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
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  
                  {item.type === 'thumbnail' && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-slate-400 text-sm">
                      <span className="text-purple-400 font-medium">Client:</span> {item.client}
                    </p>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
        </div>

        {works.filter(item => 
          item.enabled && 
          ((activeTab === 'thumbnails' && item.type === 'thumbnail') ||
          (activeTab === 'videos' && item.type === 'video'))
        ).length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
              <Eye className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Portfolio Coming Soon</h3>
            <p className="text-slate-400 text-lg max-w-md mx-auto">
              Exciting {activeTab} projects are currently in development. Stay tuned for updates!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Works;