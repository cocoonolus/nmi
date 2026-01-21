import React from 'react';
import { Quote } from 'lucide-react';

export const ImpactStories: React.FC = () => {
  const stories = [
    {
      id: 1,
      name: "Maame Afua",
      location: "Bono Region",
      quote: "I lived with a hernia for 8 years. I could not farm. NMI came to my village and operated on me for free. Now I can feed my grandchildren.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tag: "Medical Healing"
    },
    {
      id: 2,
      name: "Pastor Emmanuel",
      location: "Northern Region",
      quote: "Our village had no church. After the crusade, 40 people accepted Christ. We now meet under the baobab tree every Sunday.",
      image: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tag: "Spiritual Growth"
    },
    {
      id: 3,
      name: "The Mensah Family",
      location: "Accra Slums",
      quote: "When the floods took our home, we had nothing. Samaritan's Mercy brought us mattresses and food when we thought God had forgotten us.",
      image: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tag: "Humanitarian Relief"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Stories of Change</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Behind every number is a name, a face, and a story of God’s redemptive power.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="group relative bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {story.tag}
                </div>
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-6 left-8 bg-gold-500 text-white p-3 rounded-full shadow-lg">
                  <Quote size={20} fill="currentColor" />
                </div>
                <blockquote className="text-slate-700 italic leading-relaxed mb-6 pt-4">
                  "{story.quote}"
                </blockquote>
                <div className="border-t border-slate-200 pt-4">
                  <h4 className="font-bold text-slate-900">{story.name}</h4>
                  <p className="text-slate-500 text-sm">{story.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};