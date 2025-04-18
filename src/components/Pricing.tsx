import React from 'react';
import { SignalLow as PaypalLogo, MessageCircle, CreditCard } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="min-h-screen bg-black/90 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Pricing & Payment</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Payment Methods</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <PaypalLogo className="text-white w-8 h-8" />
                <div>
                  <h4 className="text-white font-medium">PayPal</h4>
                  <p className="text-gray-400">Safe and secure international payments</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <CreditCard className="text-white w-8 h-8" />
                <div>
                  <h4 className="text-white font-medium">UPI</h4>
                  <p className="text-gray-400">Quick local payments for Indian clients</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MessageCircle className="text-white w-8 h-8" />
                <div>
                  <h4 className="text-white font-medium">Other Methods</h4>
                  <p className="text-gray-400">Contact me to discuss other payment options</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white text-center">
                For pricing details and to get started, join our Discord server
              </p>
              <a
  href="https://discord.gg/6e2YQTrRyf"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 block text-center w-full bg-[#5865F2] hover:bg-[#4752C4] text-white py-3 px-6 rounded-lg transition"
>
  Join Discord Server
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;