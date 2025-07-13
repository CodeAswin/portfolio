import React, { useState, useEffect } from 'react';
import { useModalStore } from '../store/modalStore';
import { Play, Eye, Cuboid as Cube, Video, Image, ExternalLink, Layers, Palette, Plus, X } from 'lucide-react';

interface WorkItem {
  id: number;
  type: '3d' | 'thumbnail' | 'video';
  title: string;
  category: string;
  url: string;
  thumbnailUrl?: string;
}

const Works = () => {
  const [activeTab, setActiveTab] = useState<'3d' | 'thumbnails' | 'videos'>('3d');
  const [scrollY, setScrollY] = useState(0);
  const [works, setWorks] = useState<WorkItem[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newWork, setNewWork] = useState({
    title: '',
    url: '',
    category: ''
  });
  const { openModal } = useModalStore();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleAddWork = () => {
    if (newWork.title && newWork.url && newWork.category) {
      const workItem: WorkItem = {
        id: Date.now(),
        type: activeTab === '3d' ? '3d' : activeTab === 'thumbnails' ? 'thumbnail' : 'video',
        title: newWork.title,
        category: newWork.category,
        url: newWork.url
      };
      
      setWorks([...works, workItem]);
      setNewWork({ title: '', url: '', category: '' });
      setIsAdding(false);
    }
  };

  const handleRemoveWork = (id: number) => {
    setWorks(works.filter(work => work.id !== id));
  };

  const filteredWorks = works.filter(item => 
    (activeTab === '3d' && item.type === '3d') ||
    (activeTab === 'thumbnails' && item.type === 'thumbnail') ||
    (activeTab === 'videos' && item.type === 'video')
  );

  return (
    <section id="works" className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-gray-900 py-32 relative overflow-hidden">
      {/* Enhanced 3D Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Multiple floating 3D shapes with enhanced animations */}
        <div 
          className="absolute top-32 left-20 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-3xl transform rotate-45 shadow-2xl shadow-cyan-500/5 animate-float-3d"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${45 + scrollY * 0.05}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`,
          }}
        ></div>
        <div 
          className="absolute top-64 right-32 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-2xl transform -rotate-12 shadow-2xl shadow-purple-500/5 animate-bounce-3d"
          style={{
            transform: `translateY(${scrollY * -0.08}px) rotate(${-12 - scrollY * 0.03}deg) scale(${1 + Math.cos(scrollY * 0.008) * 0.15})`,
          }}
        ></div>
        <div 
          className="absolute bottom-40 left-40 w-48 h-48 bg-gradient-to-br from-emerald-400/10 to-teal-500/10 rounded-full shadow-2xl shadow-emerald-500/5 animate-pulse-3d"
          style={{
            transform: `translateY(${scrollY * 0.06}px) scale(${1 + scrollY * 0.0001}) rotate(${scrollY * 0.02}deg)`,
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/4 w-36 h-36 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-2xl shadow-2xl shadow-orange-500/5 animate-wiggle-3d"
          style={{
            transform: `translateY(${scrollY * 0.09}px) rotate(${30 + scrollY * -0.04}deg)`,
          }}
        ></div>
        
        {/* Enhanced 3D Grid Pattern with depth */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
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
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-ping animation-delay-500 shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-purple-400 rounded-full animate-ping animation-delay-1000 shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping animation-delay-1500 shadow-lg shadow-emerald-400/50"></div>
        <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-orange-400 rounded-full animate-ping animation-delay-2000 shadow-lg shadow-orange-400/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-full border border-slate-600/30 mb-12 shadow-2xl animate-shimmer">
            <Layers className="w-6 h-6 text-cyan-400 animate-spin-slow" />
            <span className="text-cyan-400 font-semibold text-lg animate-text-glow">Featured Portfolio</span>
          </div>
          
          <h2 className="text-7xl md:text-8xl font-black text-slate-100 mb-8 tracking-tight animate-scale-bounce">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 animate-gradient-shift">Creative</span> Work
          </h2>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-up">
            Showcasing expertise in 3D artistry, thumbnail design, and video editing
          </p>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-20 animate-fade-in animation-delay-500">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`group relative px-10 py-6 rounded-2xl transition-all duration-500 transform hover:scale-105 font-bold text-lg overflow-hidden animate-slide-up ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-2xl animate-glow-pulse`
                  : 'bg-gradient-to-r from-slate-800/50 to-slate-700/50 text-slate-300 hover:text-white border border-slate-600/30 backdrop-blur-xl'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10 flex items-center gap-4">
                <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'animate-bounce-3d' : 'group-hover:rotate-12'} transition-transform`} />
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-white/10 animate-pulse-fast"></div>
              )}
            </button>
          ))}
        </div>

        {/* Add Work Button */}
        <div className="flex justify-center mb-12 animate-fade-in animation-delay-700">
          <button
            onClick={() => setIsAdding(true)}
            className="group flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl text-white font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 animate-glow-pulse"
          >
            <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
            Add {activeTab === '3d' ? '3D Art' : activeTab === 'thumbnails' ? 'Thumbnail' : 'Video'}
          </button>
        </div>

        {/* Add Work Form */}
        {isAdding && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-600/30 max-w-md w-full shadow-2xl animate-scale-in">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-100">Add New {activeTab === '3d' ? '3D Art' : activeTab === 'thumbnails' ? 'Thumbnail' : 'Video'}</h3>
                <button
                  onClick={() => setIsAdding(false)}
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={newWork.title}
                    onChange={(e) => setNewWork({...newWork, title: e.target.value})}
                    placeholder="Enter work title"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-slate-100 placeholder-slate-400 focus:border-cyan-500/50 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    {activeTab === 'videos' ? 'Video URL (YouTube)' : 'Image URL'}
                  </label>
                  <input
                    type="url"
                    value={newWork.url}
                    onChange={(e) => setNewWork({...newWork, url: e.target.value})}
                    placeholder={activeTab === 'videos' ? 'https://youtube.com/watch?v=...' : 'https://example.com/image.jpg'}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-slate-100 placeholder-slate-400 focus:border-cyan-500/50 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Category</label>
                  <input
                    type="text"
                    value={newWork.category}
                    onChange={(e) => setNewWork({...newWork, category: e.target.value})}
                    placeholder="e.g., Gaming, Product Design, Music Video"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-slate-100 placeholder-slate-400 focus:border-cyan-500/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setIsAdding(false)}
                  className="flex-1 px-6 py-3 bg-slate-600/50 text-slate-300 rounded-xl font-medium hover:bg-slate-600/70 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddWork}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                >
                  Add Work
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredWorks.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl cursor-pointer animate-fade-in bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-xl border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-float-card"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => openModal({
                type: item.type === '3d' ? 'thumbnail' : item.type,
                url: item.url,
                title: item.title,
              })}
            >
              {/* Remove button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveWork(item.id);
                }}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="aspect-video w-full overflow-hidden rounded-t-3xl relative">
                {getThumbnailContent(item)}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl animate-pulse-glow">
                      <Play className="w-12 h-12 text-white ml-1" />
                    </div>
                  </div>
                )}
                
                {item.type === '3d' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl animate-rotate-3d">
                      <Cube className="w-12 h-12 text-white" />
                    </div>
                  </div>
                )}
                
                {item.type === 'thumbnail' && (
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-md rounded-full flex items-center justify-center animate-heartbeat">
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
                  } text-sm font-semibold rounded-full border border-current/30 animate-shimmer`}>
                    {item.category}
                  </span>
                </div>
                <h3 className="text-slate-100 text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors animate-text-glow">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm font-medium">Click to view details</span>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors transform group-hover:scale-110 animate-bounce-subtle" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <div className="text-center py-32 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-12 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-full flex items-center justify-center backdrop-blur-xl border border-slate-600/30 shadow-2xl animate-float-up-down">
              <Palette className="w-16 h-16 text-slate-400 animate-wiggle" />
            </div>
            <h3 className="text-5xl font-bold text-slate-200 mb-8 animate-text-glow">Add Your First {activeTab === '3d' ? '3D Art' : activeTab === 'thumbnails' ? 'Thumbnail' : 'Video'}</h3>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed animate-shimmer">
              Click the "Add {activeTab === '3d' ? '3D Art' : activeTab === 'thumbnails' ? 'Thumbnail' : 'Video'}" button above to showcase your amazing {activeTab} work!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Works;