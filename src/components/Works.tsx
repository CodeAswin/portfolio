import React, { useState, useRef, useEffect } from 'react';
import { useModalStore } from '../store/modalStore';
import { Play, Eye, ExternalLink } from 'lucide-react';

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
      title: 'Gaming Thumbnail 1',
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
      title: 'Stream Overlay',
      client: 'Twitch Streamer',
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
    <section id="works" className="min-h-screen bg-gradient-to-b from-black/95 via-gray-900/50 to-black/95 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Portfolio</span>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            My Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-500">
            Explore my creative journey through <span className="text-blue-400 font-semibold">stunning designs</span> and 
            <span className="text-purple-400 font-semibold"> engaging content</span> crafted for amazing clients
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-12 animate-fade-in animation-delay-1000">
          <button
            onClick={() => setActiveTab('thumbnails')}
            className={`relative px-8 py-4 rounded-full transition-all duration-500 transform hover:scale-105 font-semibold ${
              activeTab === 'thumbnails'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/25'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <span className="relative z-10">Thumbnails</span>
            {activeTab === 'thumbnails' && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`relative px-8 py-4 rounded-full transition-all duration-500 transform hover:scale-105 font-semibold ${
              activeTab === 'videos'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/25'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <span className="relative z-10">Videos</span>
            {activeTab === 'videos' && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
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
                className="group relative overflow-hidden rounded-2xl cursor-pointer animate-fade-in bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => openModal({
                  type: item.type,
                  url: item.url,
                  title: item.title,
                })}
              >
                <div className="aspect-video w-full overflow-hidden rounded-t-2xl relative">
                  {getThumbnailContent(item)}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Play button for videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  
                  {/* View icon for thumbnails */}
                  {item.type === 'thumbnail' && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-sm">
                      <span className="text-blue-400 font-medium">Client:</span> {item.client}
                    </p>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
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
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
              <Eye className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              Amazing {activeTab} are being crafted. Check back soon to see the latest creative works!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Works;