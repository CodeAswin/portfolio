import React from 'react';
import { ArrowDown, Sparkles, Zap, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent animate-pulse"></div>
      </div>
      
      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 animate-fade-in">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-white/80 font-medium">Creative Designer & Video Editor</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 tracking-tight animate-fade-in animation-delay-300 leading-none">
              ASWIN
            </h1>
            
            <div className="space-y-4 animate-fade-in animation-delay-600">
              <h2 className="text-3xl md:text-5xl font-bold text-white/90">
                Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Solutions</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-900">
            Crafting stunning thumbnails, engaging videos, and memorable digital experiences 
            that captivate audiences and drive results
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap items-center justify-center gap-8 animate-fade-in animation-delay-1200">
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-semibold">Premium Quality</span>
            </div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-semibold">Fast Delivery</span>
            </div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-semibold">Creative Excellence</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in animation-delay-1500">
            <a
              href="#works"
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#pricing"
              className="group relative px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Get Quote</span>
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-4 mt-16 animate-fade-in animation-delay-2000">
            <span className="text-white/50 text-sm font-medium">Explore Portfolio</span>
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
              <ArrowDown className="w-4 h-4 text-white/50 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;