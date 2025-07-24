import React, { useEffect, useState } from 'react';
import { CreditCard, Shield, Clock, Award, Zap, CheckCircle, DollarSign, Globe, Star, Sparkles } from 'lucide-react';

const Pricing = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="payment" className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-black py-32 relative overflow-hidden">
      {/* Enhanced 3D Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Multiple floating 3D shapes with enhanced animations */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/15 to-teal-500/15 rounded-3xl shadow-2xl shadow-emerald-500/10 animate-bounce-3d"
          style={{
            transform: `translateY(${scrollY * 0.08}px) rotate(${45 + scrollY * 0.05}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`,
          }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-orange-400/15 to-red-500/15 rounded-full shadow-2xl shadow-orange-500/10 animate-float-slow"
          style={{
            transform: `translateY(${scrollY * -0.06}px) rotate(${scrollY * 0.03}deg) scale(${1 + Math.cos(scrollY * 0.008) * 0.15})`,
          }}
        ></div>
        <div 
          className="absolute bottom-32 left-1/4 w-36 h-36 bg-gradient-to-br from-blue-400/15 to-indigo-500/15 rounded-2xl shadow-2xl shadow-blue-500/10 animate-pulse-slow"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${-30 - scrollY * 0.04}deg)`,
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-full shadow-2xl shadow-purple-500/10 animate-float-reverse"
          style={{
            transform: `translateY(${scrollY * 0.07}px) rotate(${scrollY * -0.02}deg)`,
          }}
        ></div>
        
        {/* Enhanced 3D Grid Pattern with depth */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px, 120px 120px, 60px 60px',
          transform: `perspective(1000px) rotateX(${45 + scrollY * 0.01}deg) translateZ(${scrollY * 0.1}px)`
        }}></div>
        
        {/* Floating particles with enhanced animation */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-ping animation-delay-500 shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-purple-400 rounded-full animate-ping animation-delay-1000 shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping animation-delay-1500 shadow-lg shadow-emerald-400/50"></div>
        <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-orange-400 rounded-full animate-ping animation-delay-2000 shadow-lg shadow-orange-400/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header with more animations */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-xl rounded-full border border-slate-600/40 mb-12 shadow-2xl animate-shimmer">
            <DollarSign className="w-6 h-6 text-emerald-400 animate-pulse-glow-enhanced" />
            <span className="text-emerald-400 font-semibold text-lg animate-neon-glow-enhanced">Secure Payment Options</span>
          </div>
          
          <h2 className="text-7xl md:text-8xl font-black text-slate-100 mb-8 tracking-tight animate-scale-in">
            Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 animate-gradient">Methods</span>
          </h2>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in animation-delay-500">
            Choose your preferred payment method for seamless transactions and project delivery
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Payment Methods with more animations */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-xl rounded-3xl p-16 border border-slate-600/40 mb-16 animate-fade-in animation-delay-500 shadow-2xl hover-lift">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-8">
                <Star className="w-8 h-8 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
                <h3 className="text-5xl font-bold text-slate-100 animate-slide-in">Trusted Payment Solutions</h3>
                <Star className="w-8 h-8 text-yellow-400 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
              </div>
              <p className="text-slate-300 text-xl animate-fade-in animation-delay-300">Fast, secure, and reliable payment processing worldwide</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group bg-gradient-to-br from-slate-700/50 to-slate-600/50 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/40 hover:border-blue-500/60 transition-all duration-700 transform hover:scale-105 hover:rotate-1 shadow-xl animate-slide-in">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg animate-glow">
                    <CreditCard className="text-white w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold text-2xl animate-fade-in">PayPal</h4>
                    <p className="text-blue-400 text-lg font-semibold animate-shimmer">Global Standard</p>
                  </div>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6 animate-fade-in animation-delay-300">
                  Secure international payments with comprehensive buyer protection and instant processing for clients worldwide
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 animate-slide-in animation-delay-500">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-slate-200 font-medium">Worldwide acceptance</span>
                  </div>
                  <div className="flex items-center gap-3 animate-slide-in animation-delay-600">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-slate-200 font-medium">Buyer protection included</span>
                  </div>
                  <div className="flex items-center gap-3 animate-slide-in animation-delay-900">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-slate-200 font-medium">Multiple currency support</span>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-slate-700/50 to-slate-600/50 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/40 hover:border-emerald-500/60 transition-all duration-700 transform hover:scale-105 hover:-rotate-1 shadow-xl animate-slide-in animation-delay-300">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg animate-glow">
                    <Zap className="text-white w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold text-2xl animate-fade-in">UPI</h4>
                    <p className="text-emerald-400 text-lg font-semibold animate-shimmer">Lightning Fast</p>
                  </div>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6 animate-fade-in animation-delay-300">
                  Instant digital payments for immediate project initiation and seamless transaction experience
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 animate-slide-in animation-delay-500">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-slate-200 font-medium">Instant processing</span>
                  </div>
                  <div className="flex items-center gap-3 animate-slide-in animation-delay-600">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-slate-200 font-medium">Zero transaction fees</span>
                  </div>
                  <div className="flex items-center gap-3 animate-slide-in animation-delay-900">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-slate-200 font-medium">24/7 availability</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-slate-700/40 to-slate-600/40 rounded-2xl border border-slate-600/40 animate-fade-in animation-delay-1000 hover-lift">
              <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4 animate-rotate-3d" />
              <p className="text-slate-300 text-lg animate-shimmer">
                <strong className="text-slate-100">Need alternative payment options?</strong> Message me to discuss custom payment arrangements and find the perfect solution for your project
              </p>
            </div>
          </div>

          {/* Enhanced Service Features with more animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 animate-fade-in animation-delay-1200">
            <div className="group bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/40 text-center hover:border-cyan-500/60 transition-all duration-700 transform hover:scale-105 hover:rotate-1 shadow-xl animate-bounce-3d">
              <Shield className="w-20 h-20 text-cyan-400 mx-auto mb-8 group-hover:rotate-12 transition-transform animate-glow" />
              <h4 className="text-slate-100 font-bold text-2xl mb-6 animate-fade-in">Secure Transactions</h4>
              <p className="text-slate-300 text-lg leading-relaxed animate-shimmer">Protected payments with encrypted processing and confidential project handling for complete peace of mind</p>
            </div>
            
            <div className="group bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/40 text-center hover:border-emerald-500/60 transition-all duration-700 transform hover:scale-105 shadow-xl animate-bounce-3d animation-delay-300">
              <Clock className="w-20 h-20 text-emerald-400 mx-auto mb-8 group-hover:rotate-12 transition-transform animate-glow" />
              <h4 className="text-slate-100 font-bold text-2xl mb-6 animate-fade-in">Quick Processing</h4>
              <p className="text-slate-300 text-lg leading-relaxed animate-shimmer">Fast payment confirmation and immediate project commencement for efficient workflow and timely delivery</p>
            </div>
            
            <div className="group bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/40 text-center hover:border-purple-500/60 transition-all duration-700 transform hover:scale-105 hover:-rotate-1 shadow-xl animate-bounce-3d animation-delay-600">
              <Award className="w-20 h-20 text-purple-400 mx-auto mb-8 group-hover:rotate-12 transition-transform animate-glow" />
              <h4 className="text-slate-100 font-bold text-2xl mb-6 animate-fade-in">Professional Service</h4>
              <p className="text-slate-300 text-lg leading-relaxed animate-shimmer">Premium quality work with dedicated support and revision assistance until complete satisfaction</p>
            </div>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="text-center animate-fade-in animation-delay-1500">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-16 border border-slate-600/40 max-w-4xl mx-auto shadow-2xl hover-lift">
              <div className="flex items-center justify-center gap-4 mb-8">
                <Sparkles className="w-16 h-16 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
                <h3 className="text-5xl font-bold text-slate-100 animate-scale-in">Professional Creative Services</h3>
                <Sparkles className="w-16 h-16 text-purple-400 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
              </div>
              <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto animate-shimmer">
                Delivering exceptional 3D art, compelling thumbnails, and professional video editing that elevates your content and drives engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;