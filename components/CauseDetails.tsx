import React from 'react';
import { ArrowLeft, Heart, Share2, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Cause } from '../types';

interface CauseDetailsProps {
  cause: Cause;
  onDonate: () => void;
  onBack: () => void;
}

export const CauseDetails: React.FC<CauseDetailsProps> = ({ cause, onDonate, onBack }) => {
  const percentage = Math.min((cause.raised / cause.goal) * 100, 100);

  return (
    <div className="bg-white min-h-screen pb-20 animate-in slide-in-from-right duration-300">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden group">
        <img 
          src={cause.image} 
          alt={cause.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute top-0 left-0 p-6 z-20">
           <button 
             onClick={onBack}
             className="flex items-center text-white/90 hover:text-white bg-slate-900/50 hover:bg-slate-900/70 backdrop-blur-md px-4 py-2 rounded-full transition-all text-sm font-bold uppercase tracking-wider border border-white/10"
           >
             <ArrowLeft className="w-4 h-4 mr-2" /> Back to Causes
           </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto z-10">
           <span className="bg-gold-500 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4 inline-block shadow-lg">
             {cause.category}
           </span>
           <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight shadow-sm max-w-4xl">
             {cause.title}
           </h1>
           <div className="flex flex-wrap items-center text-white/90 gap-6 text-sm font-medium">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-gold-500" /> Active Campaign</span>
              <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-gold-500" /> Ghana, West Africa</span>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center">
                About this Cause
                <div className="h-px bg-slate-200 flex-grow ml-4"></div>
              </h2>
              
              <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed mb-8 max-w-none">
                <p className="mb-6 font-medium text-slate-800 text-xl italic border-l-4 border-gold-500 pl-4 bg-slate-50 py-2 rounded-r-lg">
                  {cause.description}
                </p>
                
                {cause.content ? (
                  <div dangerouslySetInnerHTML={{ __html: cause.content }} />
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Challenge</h3>
                    <p>
                      In the remote villages we serve, basic necessities that many take for granted are often out of reach. 
                      Families struggle daily with challenges that threaten their health, their future, and their spiritual well-being.
                      This specific project targets a critical gap we have identified during our recent field surveys.
                    </p>
                    
                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Our Solution</h3>
                    <p>
                      Noah Ministries International is committed to a holistic approach. We don't just apply a bandage; we seek to bring healing.
                      By partnering with local leaders and mobilizing our volunteer teams, we ensure that every resource provided is used effectively and sustainably.
                    </p>
                    <ul className="space-y-4 my-6 list-none pl-0">
                       <li className="flex items-start">
                         <CheckCircle className="w-6 h-6 text-gold-500 mr-3 mt-0.5 shrink-0" />
                         <span><strong>Direct Implementation:</strong> Our own teams oversee the project from start to finish.</span>
                       </li>
                       <li className="flex items-start">
                         <CheckCircle className="w-6 h-6 text-gold-500 mr-3 mt-0.5 shrink-0" />
                         <span><strong>Gospel Integration:</strong> Every act of kindness is an opportunity to share the love of Christ.</span>
                       </li>
                       <li className="flex items-start">
                         <CheckCircle className="w-6 h-6 text-gold-500 mr-3 mt-0.5 shrink-0" />
                         <span><strong>Transparency:</strong> We provide reports on how every dollar is utilized.</span>
                       </li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">How You Can Help</h3>
                    <p>
                      Your donation today bridges the gap between despair and hope. It is an investment in a life, a family, and a community.
                      Join us in being the hands and feet of Jesus to these precious people.
                    </p>
                  </>
                )}
              </div>

              <div className="border-t border-slate-100 pt-8 mt-8 flex items-center justify-between">
                <div>
                   <h3 className="font-bold text-slate-900 mb-1">Share this cause</h3>
                   <p className="text-xs text-slate-400">Help us spread the word</p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-3 bg-slate-50 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-200">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Donation Card */}
          <div className="lg:col-span-1">
             <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sticky top-28 ring-1 ring-slate-900/5">
                <div className="mb-8">
                   <div className="flex justify-between items-end mb-2">
                      <div>
                        <span className="text-4xl font-bold text-slate-900 tracking-tight">${cause.raised.toLocaleString()}</span>
                        <span className="text-slate-500 ml-2 font-medium">raised</span>
                      </div>
                   </div>
                   <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden mb-2">
                      <div 
                        className="bg-gold-500 h-3 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                   </div>
                   <div className="flex justify-between text-sm font-bold text-slate-500">
                      <span>{Math.round(percentage)}%</span>
                      <span>Goal: ${cause.goal.toLocaleString()}</span>
                   </div>
                </div>

                <div className="space-y-4">
                   <button 
                     onClick={onDonate}
                     className="w-full py-4 bg-gold-500 text-white font-bold rounded-xl hover:bg-gold-600 transition-all shadow-lg shadow-gold-500/30 flex items-center justify-center text-lg uppercase tracking-wide transform active:scale-95"
                   >
                     <Heart className="w-5 h-5 mr-2 fill-current" />
                     Donate Now
                   </button>
                   <p className="text-center text-sm text-slate-500">
                     <span className="font-bold text-slate-900">142</span> people have donated to this cause.
                   </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 bg-slate-50 -mx-8 -mb-8 p-8 rounded-b-2xl">
                   <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-widest">Recent Donors</h4>
                   <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center">
                           <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                              {['JD', 'MK', 'AS'][i-1]}
                           </div>
                           <div className="ml-3">
                              <p className="text-sm font-bold text-slate-900">Anonymous</p>
                              <p className="text-xs text-slate-500">Donated ${[50, 100, 25][i-1]}</p>
                           </div>
                           <span className="ml-auto text-xs text-slate-400">{i}h ago</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};