import React, { useEffect, useState } from 'react';
import { CreditCard, Shield, Clock, Award, Zap, CheckCircle, DollarSign, Globe } from 'lucide-react';

const Pricing = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="pricing" className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-gray-900 py-32 relative overflow-hidden">
      {/* 3D Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating 3D shapes that respond to scroll */}
        <div 
          className="absolute top-32 left-20 w-40 h-40 bg-gradient-to-br from-emerald-400/10 to-teal-500/10 rounded-3xl transform rotate-45 shadow-2xl shadow-emerald-500/5"
          style={{
            transform: `translateY(${scrollY * 0.07}px) rotate(${45 + scrollY * 0.03}deg)`,
          }}
        ></div>
        <div 
          className="absolute top-64 right-32 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-2xl transform -rotate-12 shadow-2xl shadow-orange-500/5"
          style={{
            transform: `translateY(${scrollY * -0.09}px) rotate(${-12 - scrollY * 0.04}deg)`,
          }}
        ></div>
        <div 
          className="absolute bottom-40 right-40 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full shadow-2xl shadow-blue-500/5"
          style={{
            transform: `translateY(${scrollY * 0.05}px) scale(${1 + scrollY * 0.0001})`,
          }}
        ></div>
        
        {/* 3D Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: `perspective(1000px) rotateX(${50 + scrollY * 0.01}deg)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-full border border-slate-600/30 mb-12 shadow-2xl">
            <DollarSign className="w-6 h-6 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-lg">Pricing & Services</span>
          </div>
          
          <h2 className="text-7xl md:text-8xl font-black text-slate-100 mb-8 tracking-tight">
            Let's Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">Together</span>
          </h2>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Professional creative services with transparent pricing and secure payment options
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Payment Methods */}
          <div className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-xl rounded-3xl p-16 border border-slate-600/30 mb-16 animate-fade-in animation-delay-500 shadow-2xl">
            <div className="text-center mb-16">
              <h3 className="text-5xl font-bold text-slate-100 mb-6">Payment Methods</h3>
              <p className="text-slate-300 text-xl">Secure and convenient payment options</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group bg-gradient-to-br from-slate-700/40 to-slate-600/40 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 shadow-xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <CreditCard className="text-white w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold text-2xl">PayPal</h4>
                    <p className="text-blue-400 text-lg font-semibold">International Payments</p>
                  </div>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Secure global payments with buyer protection and instant processing for all international clients
                </p>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                  <span className="text-slate-200 font-medium">Worldwide accepted</span>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-slate-700/40 to-slate-600/40 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/30 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-105 shadow-xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Zap className="text-white w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold text-2xl">UPI</h4>
                    <p className="text-emerald-400 text-lg font-semibold">Instant Transfers</p>
                  </div>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Quick and seamless UPI payments for instant project initiation and faster delivery
                </p>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                  <span className="text-slate-200 font-medium">Instant processing</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-slate-700/30 to-slate-600/30 rounded-2xl border border-slate-600/30">
              <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <p className="text-slate-300 text-lg">
                <strong className="text-slate-100">Need other payment options?</strong> Contact me to discuss custom arrangements and alternative payment methods
              </p>
            </div>
          </div>

          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 animate-fade-in animation-delay-1000">
            <div className="group bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/30 text-center hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 shadow-xl">
              <Shield className="w-20 h-20 text-cyan-400 mx-auto mb-8 group-hover:rotate-12 transition-transform" />
              <h4 className="text-slate-100 font-bold text-2xl mb-6">Secure Process</h4>
              <p className="text-slate-300 text-lg leading-relaxed">Protected transactions with confidential project handling and secure file delivery</p>
            </div>
            
            <div className="group bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/30 text-center hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-105 shadow-xl">
              <Clock className="w-20 h-20 text-emerald-400 mx-auto mb-8 group-hover:rotate-12 transition-transform" />
              <h4 className="text-slate-100 font-bold text-2xl mb-6">Fast Delivery</h4>
              <p className="text-slate-300 text-lg leading-relaxed">Quick turnaround times without compromising on quality or attention to detail</p>
            </div>
            
            <div className="group bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-xl rounded-2xl p-10 border border-slate-600/30 text-center hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 shadow-xl">
              <Award className="w-20 h-20 text-purple-400 mx-auto mb-8 group-hover:rotate-12 transition-transform" />
              <h4 className="text-slate-100 font-bold text-2xl mb-6">Quality Assured</h4>
              <p className="text-slate-300 text-lg leading-relaxed">Professional results with revision support until you're completely satisfied</p>
            </div>
          </div>
          
          {/* Get Quote Section */}
          <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-xl rounded-3xl p-16 text-center animate-fade-in animation-delay-1500 border border-slate-600/30 shadow-2xl">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-5xl font-bold text-slate-100 mb-8">Ready to Start Your Project?</h3>
            <p className="text-slate-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Get in touch to discuss your project requirements and receive a personalized quote tailored to your creative needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a
                href="mailto:contact@aswin.dev"
                className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold rounded-2xl transition-all transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-4 text-xl overflow-hidden"
              >
                <CreditCard className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">Get Custom Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              
              <div className="text-slate-400 text-lg font-medium">
                Response within 24 hours
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-12 mt-16 pt-12 border-t border-slate-600/30">
              <div className="flex items-center gap-4 text-slate-300">
                <Shield className="w-6 h-6 text-emerald-400" />
                <span className="font-semibold text-lg">Secure & Professional</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <Clock className="w-6 h-6 text-cyan-400" />
                <span className="font-semibold text-lg">Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <Award className="w-6 h-6 text-purple-400" />
                <span className="font-semibold text-lg">Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;