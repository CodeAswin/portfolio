import React from 'react';
import { ArrowDown, Sparkles, Cuboid as Cube, Video, Image, Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Animated 3D-style geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl transform rotate-45 animate-float-slow shadow-2xl shadow-cyan-500/10"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-2xl transform -rotate-12 animate-float-reverse shadow-2xl shadow-purple-500/10"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full animate-pulse-slow shadow-2xl shadow-emerald-500/10"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-orange-400/20 to-red-500/20 transform rotate-12 animate-float-slow animation-delay-1000 shadow-2xl shadow-orange-500/10"></div>
        
        {/* 3D Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: 'perspective(1000px) rotateX(60deg)'
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping animation-delay-500"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping animation-delay-1500"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Status Badge */}
        {/* Main Heading with 3D effect */}
        <div className="mb-8 animate-fade-in animation-delay-300">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black mb-4 leading-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 drop-shadow-2xl">
              Aswin
            </span>
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-2xl md:text-3xl font-bold text-slate-300">
            <span className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-cyan-500/30">
              <Cube className="w-8 h-8 text-cyan-400" />
              3D Artist
            </span>
            <span className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30">
              <Image className="w-8 h-8 text-purple-400" />
              Thumbnail Designer
            </span>
            <span className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl backdrop-blur-sm border border-emerald-500/30">
              <Video className="w-8 h-8 text-emerald-400" />
              Video Editor
            </span>
          </div>
        </div>
        
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-red-500/20 rounded-full border border-orange-500/30 mb-12 animate-fade-in animation-delay-600 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 animate-pulse-glow-enhanced group">
          <div className="w-6 h-4 bg-gradient-to-b from-orange-500 via-white to-emerald-500 rounded-sm"></div>
          <span className="text-slate-200 font-medium group-hover:text-white transition-colors animate-neon-glow">Based in India</span>
        </div>
        
        {/* Description */}
        <p className="text-2xl md:text-3xl text-slate-300 font-light max-w-5xl mx-auto leading-relaxed mb-16 animate-fade-in animation-delay-900">
          Creating stunning <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">3D visuals</span>, 
          eye-catching <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold">thumbnails</span>, 
          and engaging <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 font-semibold">video content </span>
          that drives results
        </p>
        
        {/* Feature Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 animate-fade-in animation-delay-1200">
          <div className="group flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-slate-800/50 via-cyan-900/20 to-slate-700/50 backdrop-blur-xl rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/30 animate-glow">
            <Star className="w-8 h-8 text-yellow-400 group-hover:rotate-12 transition-transform" />
            <div className="text-left">
              <div className="text-slate-100 font-bold text-2xl animate-text-glow">Premium</div>
              <div className="text-slate-400 text-sm">Quality Work</div>
            </div>
          </div>
          
          <div className="group flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-slate-800/50 via-purple-900/20 to-slate-700/50 backdrop-blur-xl rounded-2xl border border-slate-600/30 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/30 animate-glow animation-delay-300">
            <Sparkles className="w-8 h-8 text-purple-400 group-hover:rotate-12 transition-transform" />
            <div className="text-left">
              <div className="text-slate-100 font-bold text-2xl animate-text-glow">Fast</div>
              <div className="text-slate-400 text-sm">Delivery</div>
            </div>
          </div>
          
          <div className="group flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-slate-800/50 via-emerald-900/20 to-slate-700/50 backdrop-blur-xl rounded-2xl border border-slate-600/30 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/30 animate-glow animation-delay-600">
            <Cube className="w-8 h-8 text-emerald-400 group-hover:rotate-12 transition-transform" />
            <div className="text-left">
              <div className="text-slate-100 font-bold text-2xl animate-text-glow">3D</div>
              <div className="text-slate-400 text-sm">Expertise</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 animate-fade-in animation-delay-1500">
          <a
            href="#works"
            className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl text-white font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 overflow-hidden animate-pulse-glow-enhanced"
          >
            <span className="relative z-10 flex items-center gap-4">
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="animate-text-glow">View Portfolio</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-6 animate-fade-in animation-delay-2000">
          <span className="text-slate-400 text-sm font-semibold tracking-widest uppercase">Explore My Work</span>
          <div className="w-10 h-16 border-2 border-slate-500/50 rounded-full flex justify-center p-3 hover:border-cyan-500/70 transition-colors">
            <ArrowDown className="w-5 h-5 text-slate-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;