import React, { useState } from 'react';
import { Menu, X, Star, Box, MessageCircle, CreditCard } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4 animate-slide-in">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden ring-2 ring-white/20 hover:ring-blue-500/50 transition-all transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=100"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:flex items-center gap-2 animate-fade-in animation-delay-500">
              <Star className="w-4 h-4 text-yellow-500 animate-pulse" />
              <span className="text-white/80 text-sm">Premium Designer</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '#hero', icon: Box, label: 'Home' },
              { href: '#works', icon: Star, label: 'Works' },
              { href: '#reviews', icon: MessageCircle, label: 'Reviews' },
              { href: '#pricing', icon: CreditCard, label: 'Pricing' }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-blue-400 transition flex items-center gap-2 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="relative">
                  {item.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </span>
              </a>
            ))}
          </div>
          
          <div className="md:hidden animate-fade-in">
            <button 
              className="text-white p-2 hover:bg-white/10 rounded-lg transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/10 animate-scale-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { href: '#hero', label: 'Home' },
                { href: '#works', label: 'Works' },
                { href: '#reviews', label: 'Reviews' },
                { href: '#pricing', label: 'Pricing' }
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:bg-white/10 rounded-lg transition animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;