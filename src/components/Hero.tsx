import React from 'react';
import { ArrowDown, Sparkles, Zap, Target, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Animated background layers */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-purple-900/20 to-fuchsia-900/30"></div>
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white/90 font-medium">Available for Projects</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 animate-fade-in animation-delay-300">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 leading-none">
            ASWIN
          </span>
        </h1>
        
        <div className="space-y-6 mb-12 animate-fade-in animation-delay-600">
          <h2 className="text-4xl md:text-5xl font-bold text-white/95">
            Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Designer</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in animation-delay-900">
          Creating compelling thumbnails and engaging video content that drives views, 
          builds audiences, and delivers measurable results for content creators
        </p>
        
        {/* Feature highlights */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16 animate-fade-in animation-delay-1200">
          <div className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Target className="w-6 h-6 text-white" />
            </div>
            <span className="text-white/90 font-semibold text-lg">High Converting</span>
          </div>
          
          <div className="w-3 h-3 bg-violet-400/60 rounded-full"></div>
          
          <div className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-white/90 font-semibold text-lg">Fast Turnaround</span>
          </div>
          
          <div className="w-3 h-3 bg-fuchsia-400/60 rounded-full"></div>
          
          <div className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-white/90 font-semibold text-lg">Premium Quality</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in animation-delay-1500">
          <a
            href="#works"
            className="group relative px-12 py-5 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-2xl text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Play className="w-5 h-5" />
              View Portfolio
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="#pricing"
            className="group relative px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/20 hover:border-white/50"
          >
            <span className="relative z-10">Get Quote</span>
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-4 animate-fade-in animation-delay-2000">
          <span className="text-white/60 text-sm font-medium tracking-wide">EXPLORE WORK</span>
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center p-2">
            <ArrowDown className="w-4 h-4 text-white/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;