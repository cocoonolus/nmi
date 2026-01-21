import React, { useState } from 'react';
import { ArrowLeft, Calendar, Share2, Play, Pause, Volume2, AlertCircle, Loader2, Clock, User } from 'lucide-react';
import { MediaItem } from '../types';

interface MediaDetailProps {
  item: MediaItem;
  onBack: () => void;
}

// Reusing the robust VideoPlayer logic
const VideoPlayer = ({ url, title }: { url: string; title: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  if (!url) return (
    <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center text-slate-500">
      <AlertCircle className="w-12 h-12 mb-2 opacity-50" />
      <p>Video source unavailable</p>
    </div>
  );

  const isDirectFile = url.match(/\.(mp4|webm|ogg)$/i);
  const handleLoad = () => setIsLoading(false);
  const handleError = () => { setIsLoading(false); setError(true); };

  if (error) {
     return (
        <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center text-slate-400">
           <AlertCircle className="w-10 h-10 mb-2 text-red-500" />
           <p>Unable to load video</p>
        </div>
     )
  }

  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center group">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Loader2 className="w-10 h-10 text-slate-600 animate-spin" />
        </div>
      )}
      {isDirectFile ? (
        <video className="w-full h-full object-contain relative z-10" controls autoPlay onLoadedData={handleLoad} onError={handleError}>
          <source src={url} />
        </video>
      ) : (
        <iframe
          src={`${url}${url.includes('?') ? '&' : '?'}autoplay=1&rel=0&modestbranding=1`}
          title={title}
          className="w-full h-full relative z-10"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export const MediaDetail: React.FC<MediaDetailProps> = ({ item, onBack }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const renderContentHeader = () => {
    // VIDEO or SERMON
    if (item.type === 'VIDEO' || item.type === 'SERMON') {
      return (
        <div className="w-full bg-black aspect-video relative shadow-2xl">
          <VideoPlayer url={item.url || ''} title={item.title} />
          <div className="absolute top-4 left-4 z-20">
            <button onClick={onBack} className="bg-black/50 hover:bg-black/80 text-white px-4 py-2 rounded-full flex items-center backdrop-blur-sm text-sm font-bold transition-all">
              <ArrowLeft className="w-4 h-4 mr-2" /> Library
            </button>
          </div>
        </div>
      );
    }

    // AUDIO
    if (item.type === 'AUDIO') {
      return (
        <div className="relative h-[500px] w-full bg-slate-900 overflow-hidden flex flex-col justify-end">
           <img src={item.imageUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm scale-110" />
           <div className="absolute top-0 left-0 p-6 z-20">
              <button onClick={onBack} className="text-white/80 hover:text-white flex items-center font-bold px-4 py-2 bg-black/20 rounded-full backdrop-blur-sm">
                <ArrowLeft className="w-4 h-4 mr-2" /> Library
              </button>
           </div>
           
           <div className="relative z-10 p-8 md:p-12 max-w-4xl mx-auto w-full">
             <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-2xl shadow-2xl overflow-hidden shrink-0 border-2 border-white/10 hidden md:block">
                  <img src={item.imageUrl} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4 inline-block">Podcast</span>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">{item.title}</h1>
                  <p className="text-white/70 mb-6 max-w-xl">{item.description}</p>
                  
                  {/* Audio Player UI */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center space-x-4">
                    <button onClick={() => setIsAudioPlaying(!isAudioPlaying)} className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors shadow-lg shrink-0">
                      {isAudioPlaying ? <Pause className="w-5 h-5 text-white fill-current" /> : <Play className="w-5 h-5 text-white fill-current ml-1" />}
                    </button>
                    <div className="flex-1">
                      <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className={`h-full bg-orange-500 rounded-full relative w-1/3`}></div>
                      </div>
                      <div className="flex justify-between text-[10px] text-white/70 mt-1 font-mono uppercase">
                        <span>12:45</span>
                        <span>{item.durationOrReadTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      );
    }

    // ARTICLE (Default)
    return (
      <div className="relative h-[50vh] w-full">
        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="absolute top-0 left-0 p-6 z-20">
           <button onClick={onBack} className="flex items-center text-white bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full transition-all text-sm font-bold">
             <ArrowLeft className="w-4 h-4 mr-2" /> Library
           </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-4xl mx-auto">
           <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4 inline-block shadow-sm">
             {item.category}
           </span>
           <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight shadow-sm">
             {item.title}
           </h1>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen pb-20 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {renderContentHeader()}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-t-3xl p-8 md:p-12 shadow-xl border-x border-t border-slate-100">
          
          {/* Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-slate-100 pb-8 mb-8">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold mr-3">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.author}</p>
                  {item.authorRole && <p className="text-xs text-slate-500">{item.authorRole}</p>}
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div className="flex items-center text-slate-500 text-sm">
                <Calendar className="w-4 h-4 mr-2 text-gold-500" />
                {item.date}
              </div>
              {(item.type === 'ARTICLE' || item.type === 'SERMON') && (
                <div className="flex items-center text-slate-500 text-sm">
                  <Clock className="w-4 h-4 mr-2 text-gold-500" />
                  {item.durationOrReadTime}
                </div>
              )}
            </div>
            
            <button className="flex items-center space-x-2 text-slate-500 hover:text-gold-600 transition-colors">
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-bold">Share</span>
            </button>
          </div>

          {/* Content Body */}
          <div className="prose prose-lg prose-slate max-w-none">
             {/* If it's a sermon or video, description is usually plain text. If article, it's HTML */}
             {item.content ? (
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
             ) : (
                <p className="lead">{item.description}</p>
             )}
          </div>

          {/* Footer Card */}
          <div className="bg-slate-50 rounded-2xl p-8 mt-16 flex items-start space-x-6 border border-slate-100">
             <div className="w-16 h-16 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center text-2xl font-serif text-slate-400">
               {item.author.charAt(0)}
             </div>
             <div>
               <h4 className="font-bold text-slate-900 text-lg">More from {item.author}</h4>
               <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                 Explore other sermons, articles, and updates from this author in our library.
               </p>
               <button onClick={onBack} className="mt-4 text-gold-600 font-bold text-sm hover:underline">View Library</button>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};