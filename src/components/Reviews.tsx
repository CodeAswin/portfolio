import React from 'react';
import { Star, Quote } from 'lucide-react';

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
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing work! The quality and attention to detail exceeded my expectations. Would definitely recommend!",
      project: 'Thumbnail Design',
      enabled: true,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "Incredible talent and professionalism. The final result was exactly what I was looking for!",
      project: 'Video Editing',
      enabled: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Emma Davis",
      rating: 5,
      comment: "Outstanding service! The creativity and dedication to the project was remarkable.",
      project: 'Thumbnail Design',
      enabled: true,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  return (
    <section id="reviews" className="min-h-screen bg-black/95 py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-2 animate-fade-in">
          <Quote className="text-blue-500 w-6 h-6 animate-bounce" />
          <h2 className="text-4xl font-bold text-white text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            Client Reviews
          </h2>
          <Quote className="text-blue-500 w-6 h-6 transform rotate-180 animate-bounce animation-delay-500" />
        </div>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-500">
          Don't just take my word for it - hear what my clients have to say about their experiences working with me.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews
            .filter(review => review.enabled)
            .map((review, index) => (
              <div
                key={review.id}
                className="bg-gradient-to-br from-blue-900/10 to-purple-900/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/30 animate-pulse"
                  />
                  <div>
                    <div className="text-white font-medium">{review.name}</div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 fill-yellow-500 text-yellow-500 animate-pulse" 
                          style={{ animationDelay: `${i * 200}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-white/80 mb-4 italic hover:text-white transition-colors">
                  "{review.comment}"
                </blockquote>
                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                    {review.project}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;