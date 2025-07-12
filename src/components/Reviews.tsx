import React from 'react';
import { Star, Quote, MessageSquare, Users, TrendingUp } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  project: string;
  enabled: boolean;
  image: string;
}

const Reviews = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Toxic Decit",
      rating: 5,
      comment: "Outstanding work quality and professional service. The thumbnails significantly boosted our channel's click-through rate!",
      project: 'Thumbnail Design',
      enabled: true,
      image: "https://cdn.discordapp.com/attachments/1185125884789800960/1362460961113505893/IMG_1309.webp?ex=68027a26&is=680128a6&hm=5c8cc7ba42e3ddd0f02403032dbe1b86617e8e3178b7ff1302bf1e202141ebde&=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Alex Johnson",
      rating: 5,
      comment: "Incredible attention to detail and fast delivery. Highly recommend for any video editing needs.",
      project: 'Video Editing',
      enabled: false,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Sarah Chen",
      rating: 5,
      comment: "Creative excellence that exceeded expectations. Perfect collaboration from start to finish.",
      project: 'Brand Design',
      enabled: false,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  return (
    <section id="reviews" className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-black py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-fuchsia-900/20"></div>
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <MessageSquare className="w-5 h-5 text-violet-400" />
            <span className="text-violet-400 font-medium">Client Testimonials</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Success</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Real feedback from content creators who've seen measurable growth with our designs
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in animation-delay-500">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20">
              <Star className="w-8 h-8 text-yellow-400" />
              <div className="text-left">
                <div className="text-white font-bold text-2xl">5.0</div>
                <div className="text-white/60 text-sm">Average Rating</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20">
              <Users className="w-8 h-8 text-green-400" />
              <div className="text-left">
                <div className="text-white font-bold text-2xl">100%</div>
                <div className="text-white/60 text-sm">Satisfaction</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <div className="text-left">
                <div className="text-white font-bold text-2xl">+40%</div>
                <div className="text-white/60 text-sm">Avg CTR Boost</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reviews
            .filter(review => review.enabled)
            .map((review, index) => (
              <div
                key={review.id}
                className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-violet-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote decoration */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-12 h-12 text-violet-400" />
                </div>
                
                {/* Client info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-violet-500/30 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 group-hover:animate-pulse"></div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{review.name}</div>
                    <div className="flex items-center gap-1 mb-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                        />
                      ))}
                    </div>
                    <div className="text-violet-400 text-sm font-medium">
                      {review.project}
                    </div>
                  </div>
                </div>
                
                {/* Review content */}
                <blockquote className="text-white/80 text-lg leading-relaxed group-hover:text-white transition-colors duration-300 relative z-10">
                  "{review.comment}"
                </blockquote>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
        </div>

        {/* Call to action */}
        <div className="text-center animate-fade-in animation-delay-1000">
          <div className="bg-gradient-to-r from-violet-900/30 to-fuchsia-900/30 rounded-3xl p-12 backdrop-blur-md border border-white/20 max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">Ready to Boost Your Content?</h3>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              Join successful creators who've transformed their channels with professional designs
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-violet-500/25 transition-all transform hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;