import React from 'react';
import { CreditCard, Shield, Clock, Award, Mail, Phone } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900 py-20 relative overflow-hidden">
      {/* Modern background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <CreditCard className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Pricing & Contact</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Together</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Professional creative services with transparent pricing and flexible payment options
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Payment methods */}
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in animation-delay-500">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-white mb-4">Payment Methods</h3>
              <p className="text-slate-300 text-lg">Secure and convenient payment options</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CreditCard className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">PayPal</h4>
                    <p className="text-blue-400 text-sm">Global Payments</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Secure international payments with buyer protection and instant processing
                </p>
              </div>
              
              <div className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Direct Transfer</h4>
                    <p className="text-cyan-400 text-sm">Bank Transfer</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Direct bank transfers for larger projects with flexible payment terms
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in animation-delay-1000">
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 text-center">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">Secure Process</h4>
              <p className="text-slate-300 text-sm">Protected transactions and confidential handling</p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 text-center">
              <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">Quick Delivery</h4>
              <p className="text-slate-300 text-sm">Fast turnaround times without compromising quality</p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 text-center">
              <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">Quality Assured</h4>
              <p className="text-slate-300 text-sm">Professional results with revision support</p>
            </div>
          </div>
          
          {/* Contact section */}
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10 text-center animate-fade-in animation-delay-1500">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Begin?</h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Contact me to discuss your project requirements and receive a personalized quote
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:contact@aswin.dev"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3 text-lg overflow-hidden"
              >
                <Mail className="w-5 h-5" />
                <span className="relative z-10">Send Email</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              
              <div className="text-slate-400 text-sm">
                or reach out through your preferred platform
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Professional Service</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Timely Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Award className="w-4 h-4 text-purple-400" />
                <span>Quality Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;