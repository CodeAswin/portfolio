import React from 'react';
import { CreditCard, Shield, Clock, Award, Mail, Zap, CheckCircle } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-slate-900 py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-fuchsia-900/20"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <CreditCard className="w-5 h-5 text-violet-400" />
            <span className="text-violet-400 font-medium">Pricing & Services</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Let's Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Together</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Professional creative services with transparent pricing and secure payment options
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Payment methods */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 mb-12 animate-fade-in animation-delay-500">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">Payment Methods</h3>
              <p className="text-white/70 text-lg">Secure and convenient payment options worldwide</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-violet-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CreditCard className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">PayPal</h4>
                    <p className="text-blue-400 text-sm font-medium">International Payments</p>
                  </div>
                </div>
                <p className="text-white/70 text-lg leading-relaxed">
                  Secure global payments with buyer protection and instant processing for all international clients
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/80 text-sm">Worldwide accepted</span>
                </div>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-fuchsia-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">UPI</h4>
                    <p className="text-fuchsia-400 text-sm font-medium">Instant Transfers</p>
                  </div>
                </div>
                <p className="text-white/70 text-lg leading-relaxed">
                  Quick and seamless UPI payments for instant project initiation and faster delivery
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/80 text-sm">Instant processing</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-white/60 text-sm">
                <strong className="text-white">Note:</strong> For other payment methods or custom arrangements, please reach out to discuss options
              </p>
            </div>
          </div>

          {/* Service features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in animation-delay-1000">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:border-violet-500/50 transition-all duration-300 transform hover:scale-105">
              <Shield className="w-16 h-16 text-violet-400 mx-auto mb-6" />
              <h4 className="text-white font-bold text-xl mb-4">Secure Process</h4>
              <p className="text-white/70 leading-relaxed">Protected transactions with confidential project handling and secure file delivery</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:border-fuchsia-500/50 transition-all duration-300 transform hover:scale-105">
              <Clock className="w-16 h-16 text-fuchsia-400 mx-auto mb-6" />
              <h4 className="text-white font-bold text-xl mb-4">Fast Delivery</h4>
              <p className="text-white/70 leading-relaxed">Quick turnaround times without compromising on quality or attention to detail</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <Award className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h4 className="text-white font-bold text-xl mb-4">Quality Assured</h4>
              <p className="text-white/70 leading-relaxed">Professional results with revision support until you're completely satisfied</p>
            </div>
          </div>
          
          {/* Contact section */}
          <div className="bg-gradient-to-r from-violet-900/30 to-fuchsia-900/30 rounded-3xl p-12 backdrop-blur-md border border-white/20 text-center animate-fade-in animation-delay-1500">
            <h3 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Get in touch to discuss your project requirements and receive a personalized quote tailored to your needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:contact@aswin.dev"
                className="group relative px-12 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-2xl transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25 flex items-center gap-3 text-lg overflow-hidden"
              >
                <Mail className="w-6 h-6" />
                <span className="relative z-10">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              
              <div className="text-white/60 text-sm">
                Response within 24 hours
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3 text-white/60">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="font-medium">Secure & Professional</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="font-medium">Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Award className="w-5 h-5 text-violet-400" />
                <span className="font-medium">Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;