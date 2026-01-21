import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { ALL_CAUSES } from './AllCauses';
import { Cause } from '../types';

interface FeaturedCausesProps {
  onDonate: () => void;
  onViewAll: () => void;
  onViewCause?: (cause: Cause) => void;
}

export const FeaturedCauses: React.FC<FeaturedCausesProps> = ({ onDonate, onViewAll, onViewCause }) => {
  // Use the first 3 causes from the main list as featured
  const featured = ALL_CAUSES.slice(0, 3);

  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-gold-600 font-bold tracking-widest uppercase text-xs">Urgent Needs</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Featured Causes</h2>
            <p className="text-slate-600 mt-4">
              Your contribution creates immediate impact. Support these urgent projects today.
            </p>
          </div>
          <button 
             onClick={onViewAll}
             className="hidden md:flex items-center text-slate-900 font-bold hover:text-gold-600 transition-colors"
          >
            View All Causes <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((cause) => {
            const percentage = Math.min((cause.raised / cause.goal) * 100, 100);
            return (
              <div 
                key={cause.id} 
                onClick={() => onViewCause && onViewCause(cause)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col cursor-pointer"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={cause.image} 
                    alt={cause.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {cause.category}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-gold-600 transition-colors">{cause.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 flex-1">{cause.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span className="text-slate-900">${cause.raised.toLocaleString()} <span className="text-slate-400 font-normal">Raised</span></span>
                      <span className="text-slate-500">${cause.goal.toLocaleString()} <span className="text-slate-400 font-normal">Goal</span></span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gold-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onDonate();
                    }}
                    className="w-full py-3 bg-white border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center uppercase text-sm tracking-wider"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Donate Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button 
             onClick={onViewAll}
             className="inline-flex items-center text-slate-900 font-bold hover:text-gold-600 transition-colors"
          >
            View All Causes <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};