import React from 'react';
import { Sparkles, Star, Trophy, Code, Palette, Video } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 via-black to-black"></div>
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-500/20 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full animate-bounce"></div>
      </div>
      
      {/* Enhanced animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            <Star
              size={Math.random() * 20 + 6}
              className="text-blue-500/30 animate-pulse"
              style={{ animationDelay: `${Math.random() * 2}s` }}
            />
          </div>
        ))}
      </div>
      
      {/* Enhanced animated blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="relative space-y-8">
          {/* Enhanced main title with better typography */}
          <div className="space-y-4">
            <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] animate-fade-in leading-none">
              Portfolio
            </h1>
            <div className="relative">
              <p className="text-2xl md:text-4xl text-white/90 font-light drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-fade-in animation-delay-500">
                of <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Aswin</span>
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Enhanced subtitle with better styling */}
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-1000">
            Creative Designer & Video Editor specializing in 
            <span className="text-blue-400 font-medium"> stunning thumbnails</span>, 
            <span className="text-purple-400 font-medium"> engaging videos</span>, and 
            <span className="text-cyan-400 font-medium"> digital experiences</span>
          </p>
          
          {/* Enhanced feature badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in animation-delay-1500">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 hover:border-blue-500/30 transition-all group">
              <Trophy size={20} className="text-yellow-400 animate-bounce animation-delay-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-white/90 font-medium">Premium Quality</span>
            </div>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 hover:border-purple-500/30 transition-all group">
              <Sparkles size={20} className="text-purple-400 animate-bounce animation-delay-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-white/90 font-medium">Creative Design</span>
            </div>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse animation-delay-1000"></div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 hover:border-cyan-500/30 transition-all group">
              <Video size={20} className="text-cyan-400 animate-bounce animation-delay-1000 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-white/90 font-medium">Video Editing</span>
            </div>
          </div>

          {/* New call-to-action section */}
          <div className="space-y-6 animate-fade-in animation-delay-2000">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#works"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>
              <a
                href="#pricing"
                className="group px-8 py-4 border-2 border-white/20 rounded-full text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
            
            {/* Scroll indicator */}
            <div className="flex flex-col items-center gap-2 mt-12">
              <span className="text-white/50 text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;