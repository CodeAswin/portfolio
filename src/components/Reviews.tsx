import React from 'react';
import { Star, Quote, MessageSquare, Users } from 'lucide-react';

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
      comment: "Excellent work quality and great pricing. Very satisfied with the final result!",
      project: 'Thumbnail Design',
      enabled: true,
      image: "https://cdn.discordapp.com/attachments/1185125884789800960/1362460961113505893/IMG_1309.webp?ex=68027a26&is=680128a6&hm=5c8cc7ba42e3ddd0f02403032dbe1b86617e8e3178b7ff1302bf1e202141ebde&=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "Professional service with outstanding results. Highly recommend for video projects.",
      project: 'Video Editing',
      enabled: false,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Emma Davis",
      rating: 5,
      comment: "Creative excellence and attention to detail. Perfect collaboration experience.",
      project: 'Brand Design',
      enabled: false,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  return (
    <section id="reviews" className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 py-20 relative overflow-hidden">
      {/* Modern background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <MessageSquare className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">Client Feedback</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            What Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Say</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real feedback from satisfied clients who trusted me with their creative projects
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 animate-fade-in animation-delay-500">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
              <Star className="w-6 h-6 text-yellow-400" />
              <div className="text-left">
                <div className="text-white font-bold text-lg">5.0</div>
                <div className="text-slate-400 text-sm">Average Rating</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
              <Users className="w-6 h-6 text-green-400" />
              <div className="text-left">
                <div className="text-white font-bold text-lg">100%</div>
                <div className="text-slate-400 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews
            .filter(review => review.enabled)
            .map((review, index) => (
              <div
                key={review.id}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote decoration */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-12 h-12 text-purple-400" />
                </div>
                
                {/* Client info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:animate-pulse"></div>
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
                    <div className="text-purple-400 text-sm font-medium">
                      {review.project}
                    </div>
                  </div>
                </div>
                
                {/* Review content */}
                <blockquote className="text-slate-200 text-lg leading-relaxed group-hover:text-white transition-colors duration-300 relative z-10">
                  "{review.comment}"
                </blockquote>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in animation-delay-1000">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-3xl p-8 backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-slate-300 mb-6 text-lg">
              Join the list of satisfied clients and bring your creative vision to life
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all transform hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;