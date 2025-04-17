import React from 'react';
import { Sparkles, Star, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black"></div>
      
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
              size={Math.random() * 16 + 8}
              className="text-blue-500/20 animate-pulse"
              style={{ animationDelay: `${Math.random() * 2}s` }}
            />
          </div>
        ))}
      </div>
      
      {/* Animated circles */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl animate-blob"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div className="relative space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-fade-in">
            Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] animate-fade-in animation-delay-500">
            of Aswin
          </p>
          
          <div className="flex items-center justify-center gap-6 animate-fade-in animation-delay-1000">
            <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Trophy size={20} className="animate-bounce animation-delay-0" />
              <span className="text-sm">Premium Quality</span>
            </div>
            <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Sparkles size={20} className="animate-bounce animation-delay-500" />
              <span className="text-sm">Professional Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;