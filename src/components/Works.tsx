import React, { useState } from 'react';
import { useModalStore } from '../store/modalStore';

interface WorkItem {
  id: number;
  type: 'thumbnail' | 'video';
  title: string;
  client: string;
  url: string;
  enabled: boolean;
}

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
      enabled: true,
    },
    {
      id: 2,
      type: 'video',
      title: 'Gameplay Montage',
      client: 'Esports Team',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      enabled: true,
    },
    {
      id: 3,
      type: 'thumbnail',
      title: 'Stream Overlay',
      client: 'Twitch Streamer',
      url: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200&h=800&fit=crop',
      enabled: true,
    },
  ];

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
                className={`aspect-video bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-lg backdrop-blur-sm border border-white/10 p-4 hover:border-blue-500/50 transition-all cursor-pointer group transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-full flex flex-col justify-between">
                  <div className="text-white/80 group-hover:text-white transition-colors">
                    {item.title}
                  </div>
                  <div className="text-white/60 text-sm group-hover:text-blue-400 transition-colors">
                    For: {item.client}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Works;