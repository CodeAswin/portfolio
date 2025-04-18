import React, { useState, useRef, useEffect } from 'react';
import { useModalStore } from '../store/modalStore';
import { Play } from 'lucide-react';

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
    <section id="works" className="min-h-screen bg-black/95 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 animate-fade-in">
          <h2 className="text-7xl font-bold text-white text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            Works
          </h2>
          <p className="text-gray-400 mt-2 animate-fade-in animation-delay-500">
            i have done in past
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8 animate-fade-in animation-delay-1000">
          <button
            onClick={() => setActiveTab('thumbnails')}
            className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'thumbnails'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                : 'bg-gray-800 text-gray-300'
            }`}
          >
            Thumbnails
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'videos'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                : 'bg-gray-800 text-gray-300'
            }`}
          >
            Videos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works
            .filter((item) => item.enabled && (
              (activeTab === 'thumbnails' && item.type === 'thumbnail') ||
              (activeTab === 'videos' && item.type === 'video')
            ))
            .map((item, index) => (
              <div
                key={item.id}
                onClick={() => openModal({
                  type: item.type,
                  url: item.url,
                  title: item.title,
                })}
                className="group relative overflow-hidden rounded-xl cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  {getThumbnailContent(item)}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue-500/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute inset-x-0 top-0 p-4">
                  <h3 className="text-white text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-blue-400 text-sm">For: {item.client}</p>
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
            <p className="text-gray-400 text-lg">No {activeTab} available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Works;