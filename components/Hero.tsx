import React from 'react';
import { ChevronRight, Heart } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onPartner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onPartner }) => {
  return (
    <div className="relative bg-coffee-950 overflow-hidden min-h-[800px] flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Mission field" 
          className="w-full h-full object-cover opacity-20 grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-950 via-coffee-900/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-5 py-2.5 bg-primary-500/10 border border-primary-500/30 rounded-full mb-10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-500 mr-3 animate-pulse"></span>
            <span className="text-primary-100 font-bold text-xs tracking-[0.25em] uppercase">Holistic Ministry • Medical • Evangelism</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-10 leading-[1.1]">
            Transforming <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-coffee-400">Village by Village</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-coffee-100 mb-14 max-w-2xl font-light leading-relaxed">
            We proclaim the Gospel and demonstrate compassion through medical outreach, humanitarian aid, and discipleship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={onExplore}
              className="px-10 py-5 bg-white text-coffee-900 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-coffee-50 transition-all flex items-center justify-center group shadow-xl"
            >
              Our Ministries
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onPartner}
              className="px-10 py-5 bg-primary-500 text-white rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-primary-600 transition-all flex items-center justify-center shadow-xl shadow-primary-500/20"
            >
              <Heart className="w-5 h-5 mr-3 fill-current" />
              Support the Mission
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom stats strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-xl border-t border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
           <div className="flex justify-center space-x-16 text-sm text-coffee-200 font-medium tracking-[0.15em] uppercase">
             <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-primary-500 mr-3"></span>Est. 2024</span>
             <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-primary-500 mr-3"></span>Medical Missions</span>
             <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-primary-500 mr-3"></span>Gospel Crusades</span>
             <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-primary-500 mr-3"></span>Humanitarian Relief</span>
           </div>
        </div>
      </div>
    </div>
  );
};