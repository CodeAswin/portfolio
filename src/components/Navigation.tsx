import React, { useState, useEffect } from 'react';
import { Menu, X, Palette, Eye, Star, CreditCard, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#hero', icon: Palette, label: 'Home', color: 'text-cyan-400' },
    { href: '#works', icon: Eye, label: 'Portfolio', color: 'text-purple-400' },
    { href: '#reviews', icon: Star, label: 'Reviews', color: 'text-emerald-400' },
    { href: '#pricing', icon: CreditCard, label: 'Pricing', color: 'text-orange-400' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex items-center gap-4 animate-slide-in">
            <div className="relative group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-0.5 shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://cdn.discordapp.com/attachments/1261514475685675039/1362683857748492379/websitepfp.png?ex=680349bd&is=6801f83d&hm=35f3c74e8286f4ddbbbe31a4332f5d736193e2ffb458dc6fd55ca1548fa401bb&=80&w=100"
                    alt="Aswin"
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </div>
            
            <div className="hidden md:block animate-fade-in animation-delay-300">
              <div className="text-slate-100 font-bold text-xl tracking-tight">ASWIN</div>
              <div className="text-slate-400 text-sm font-medium">Creative Designer</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-6 py-3 rounded-xl transition-all duration-300 hover:bg-slate-800/50 animate-fade-in"
                style={{ animationDelay: `${index * 100 + 500}ms` }}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-slate-300 group-hover:text-slate-100 font-medium transition-colors">
                    {item.label}
                  </span>
                </div>
                
                {/* Hover indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-8 transition-all duration-300"></div>
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden animate-fade-in animation-delay-500">
            <button 
              className="relative p-3 text-slate-300 hover:text-slate-100 hover:bg-slate-800/50 rounded-xl transition-all duration-300 group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-slate-800/50 backdrop-blur-xl rounded-2xl mt-4 border border-slate-700/50">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-4 px-6 py-4 text-slate-300 hover:text-slate-100 hover:bg-slate-800/50 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="font-medium">{item.label}</span>
                <ChevronDown className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;