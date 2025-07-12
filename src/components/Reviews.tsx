import React from 'react';
import { Star, Quote, Heart, ThumbsUp } from 'lucide-react';

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
      comment: "It was good. Price Was awesome for the work!",
      project: 'Thumbnail Design For My friend',
      enabled: true,
      image: "https://cdn.discordapp.com/attachments/1185125884789800960/1362460961113505893/IMG_1309.webp?ex=68027a26&is=680128a6&hm=5c8cc7ba42e3ddd0f02403032dbe1b86617e8e3178b7ff1302bf1e202141ebde&=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "Incredible talent and professionalism. The final result was exactly what I was looking for!",
      project: 'Video Editing',
      enabled: false,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Emma Davis",
      rating: 5,
      comment: "Outstanding service! The creativity and dedication to the project was remarkable.",
      project: 'Thumbnail Design',
      enabled: false,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  return (
    <section id="reviews" className="min-h-screen bg-gradient-to-b from-black/95 via-purple-900/10 to-black/95 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/3 to-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Quote className="text-purple-500 w-8 h-8 animate-bounce" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <span className="text-purple-400 font-medium tracking-wider uppercase text-sm">Testimonials</span>
              <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            </div>
            <Quote className="text-purple-500 w-8 h-8 transform rotate-180 animate-bounce animation-delay-500" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Client Reviews
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-500">
            Don't just take my word for it - discover what my amazing clients have to say about their 
            <span className="text-purple-400 font-semibold"> creative journey</span> with me
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 animate-fade-in animation-delay-1000">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-white font-semibold">100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">5-Star Reviews</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <ThumbsUp className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">Happy Clients</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews
            .filter(review => review.enabled)
            .map((review, index) => (
              <div
                key={review.id}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote decoration */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-12 h-12 text-purple-400" />
                </div>
                
                {/* Client info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover border-3 border-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:animate-pulse"></div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{review.name}</div>
                    <div className="flex items-center gap-1 mb-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse" 
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <div className="text-purple-400 text-sm font-medium">
                      {review.project}
                    </div>
                  </div>
                </div>
                
                {/* Review content */}
                <blockquote className="text-white/90 text-lg leading-relaxed italic group-hover:text-white transition-colors duration-300 relative z-10">
                  "{review.comment}"
                </blockquote>
                
                {/* Bottom decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in animation-delay-1500">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Them?</h3>
            <p className="text-gray-300 mb-6">
              Let's create something amazing together and add your success story to this collection!
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
            >
              <Heart className="w-5 h-5" />
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;