import React from 'react';
import { ChevronRight, Heart } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onPartner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onPartner }) => {
  return (
    <div className="relative bg-slate-900 overflow-hidden min-h-[700px] flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Mission field" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 bg-gold-500/20 border border-gold-500/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold-500 mr-2 animate-pulse"></span>
            <span className="text-gold-400 font-bold text-xs tracking-[0.2em] uppercase">Holistic Ministry • Medical • Evangelism</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-none">
            Transforming Communities <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">Village by Village</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl font-light leading-relaxed">
            We proclaim the Gospel and demonstrate compassion through medical outreach, humanitarian aid, and discipleship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={onExplore}
              className="px-8 py-4 bg-white text-slate-900 rounded-md font-bold text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors flex items-center justify-center group"
            >
              Our Ministries
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onPartner}
              className="px-8 py-4 bg-gold-500 text-white rounded-md font-bold text-sm tracking-widest uppercase hover:bg-gold-600 transition-colors flex items-center justify-center shadow-lg hover:shadow-gold-500/30"
            >
              <Heart className="w-5 h-5 mr-2" />
              Support the Mission
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom stats strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
           <div className="flex justify-center space-x-12 text-sm text-slate-400 font-medium tracking-wider uppercase">
             <span>Est. 2024</span>
             <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-2"></span>Medical Missions</span>
             <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-2"></span>Gospel Crusades</span>
             <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-2"></span>Humanitarian Relief</span>
           </div>
        </div>
      </div>
    </div>
  );
};