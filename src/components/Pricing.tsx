import React from 'react';
import { CreditCard, MessageCircle, Shield, Zap, Clock, Award } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="min-h-screen bg-gradient-to-b from-black/95 via-blue-900/10 to-black/95 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/3 to-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Investment</span>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-200 mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Pricing & Payment
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-500">
            Transparent pricing with <span className="text-blue-400 font-semibold">flexible payment options</span> to bring your creative vision to life
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Payment methods */}
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in animation-delay-1000">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-white mb-4">Secure Payment Methods</h3>
              <p className="text-gray-300 text-lg">Choose the payment method that works best for you</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CreditCard className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">PayPal</h4>
                    <p className="text-blue-400 text-sm">International</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Safe and secure international payments with buyer protection
                </p>
              </div>
              
              <div className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">UPI</h4>
                    <p className="text-cyan-400 text-sm">India Only</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Quick and instant local payments for Indian clients
                </p>
              </div>
              
              <div className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Custom</h4>
                    <p className="text-green-400 text-sm">Flexible</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Contact me to discuss other payment options that work for you
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in animation-delay-1500">
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 text-center">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">Secure Transactions</h4>
              <p className="text-gray-300 text-sm">All payments are protected and encrypted</p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 text-center">
              <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">Fast Delivery</h4>
              <p className="text-gray-300 text-sm">Quick turnaround times for all projects</p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 text-center">
              <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">Quality Guarantee</h4>
              <p className="text-gray-300 text-sm">100% satisfaction or money back</p>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10 text-center animate-fade-in animation-delay-2000">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join our Discord community to discuss your project, get pricing details, and start your creative journey today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://discord.gg/6e2YQTrRyf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold rounded-full transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Join Discord Server
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              
              <div className="text-gray-400 text-sm">
                or contact me directly for custom quotes
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Secure & Trusted</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Award className="w-4 h-4 text-purple-400" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;