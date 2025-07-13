import React, { useEffect, useState } from 'react';
import { Star, Quote, MessageSquare, Users, TrendingUp, Award } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  project: string;
  enabled: boolean;
  image: string;
}

const Reviews = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Toxic Decit",
      rating: 5,
      comment: "Outstanding work quality and professional service. The thumbnails significantly boosted our channel's performance!",
      project: 'Thumbnail Design',
      enabled: true,
      image: "https://cdn.discordapp.com/attachments/1185125884789800960/1362460961113505893/IMG_1309.webp?ex=68027a26&is=680128a6&hm=5c8cc7ba42e3ddd0f02403032dbe1b86617e8e3178b7ff1302bf1e202141ebde&=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Alex Johnson",
      rating: 5,
      comment: "Incredible attention to detail and fast delivery. Highly recommend for any creative project needs.",
      project: '3D Modeling',
      enabled: false,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Sarah Chen",
      rating: 5,
      comment: "Creative excellence that exceeded expectations. Perfect collaboration from start to finish.",
      project: 'Video Editing',
      enabled: false,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  return (
    <section id="reviews" className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black py-32 relative overflow-hidden">
      {/* 3D Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating 3D shapes that respond to scroll */}
        <div 
          className="absolute top-20 right-20 w-36 h-36 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-3xl transform rotate-12 shadow-2xl shadow-purple-500/5"
          style={{
            transform: `translateY(${scrollY * 0.08}px) rotate(${12 + scrollY * 0.04}deg)`,
          }}
        ></div>
        <div 
          className="absolute bottom-32 left-20 w-44 h-44 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full shadow-2xl shadow-cyan-500/5"
          style={{
            transform: `translateY(${scrollY * -0.06}px) scale(${1 + scrollY * 0.0001})`,
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/4 w-28 h-28 bg-gradient-to-br from-emerald-400/10 to-teal-500/10 transform -rotate-45 shadow-2xl shadow-emerald-500/5"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${-45 - scrollY * 0.02}deg)`,
          }}
        ></div>
        
        {/* Subtle 3D grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          transform: `perspective(1000px) rotateX(${45 + scrollY * 0.01}deg)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-full border border-slate-600/30 mb-12 shadow-2xl">
            <MessageSquare className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 font-semibold text-lg">Client Testimonials</span>
          </div>
          
          <h2 className="text-7xl md:text-8xl font-black text-slate-100 mb-8 tracking-tight">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Success</span>
          </h2>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Real feedback from creators who've achieved remarkable results with professional designs
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-in animation-delay-500">
            <div className="group flex items-center gap-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl px-10 py-8 border border-slate-600/30 hover:border-yellow-500/50 transition-all duration-500 transform hover:scale-105 shadow-2xl">
              <Star className="w-10 h-10 text-yellow-400 group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <div className="text-slate-100 font-bold text-3xl">5.0</div>
                <div className="text-slate-400 text-sm font-medium">Average Rating</div>
              </div>
            </div>
            
            <div className="group flex items-center gap-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl px-10 py-8 border border-slate-600/30 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-105 shadow-2xl">
              <Users className="w-10 h-10 text-emerald-400 group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <div className="text-slate-100 font-bold text-3xl">100%</div>
                <div className="text-slate-400 text-sm font-medium">Satisfaction</div>
              </div>
            </div>
            
            <div className="group flex items-center gap-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl px-10 py-8 border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 shadow-2xl">
              <TrendingUp className="w-10 h-10 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <div className="text-slate-100 font-bold text-3xl">+50%</div>
                <div className="text-slate-400 text-sm font-medium">Performance Boost</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {reviews
            .filter(review => review.enabled)
            .map((review, index) => (
              <div
                key={review.id}
                className="group relative bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-xl rounded-3xl p-10 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote decoration */}
                <div className="absolute top-8 right-8 opacity-20">
                  <Quote className="w-16 h-16 text-purple-400 transform group-hover:scale-110 transition-transform" />
                </div>
                
                {/* Client info */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-purple-500/30 group-hover:scale-110 transition-transform duration-500 shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:animate-pulse"></div>
                  </div>
                  <div>
                    <div className="text-slate-100 font-bold text-xl">{review.name}</div>
                    <div className="flex items-center gap-2 mb-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                        />
                      ))}
                    </div>
                    <div className="text-purple-400 text-sm font-semibold px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
                      {review.project}
                    </div>
                  </div>
                </div>
                
                {/* Review content */}
                <blockquote className="text-slate-300 text-lg leading-relaxed group-hover:text-slate-200 transition-colors duration-500 relative z-10">
                  "{review.comment}"
                </blockquote>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
            ))}
        </div>

        {/* Portfolio Summary */}
        <div className="text-center animate-fade-in animation-delay-1000">
          <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-xl rounded-3xl p-16 border border-slate-600/30 max-w-4xl mx-auto shadow-2xl">
            <Award className="w-20 h-20 text-cyan-400 mx-auto mb-8" />
            <h3 className="text-5xl font-bold text-slate-100 mb-8">Professional Creative Services</h3>
            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
              Delivering high-quality 3D art, engaging thumbnails, and professional video editing that helps creators stand out and achieve better results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;