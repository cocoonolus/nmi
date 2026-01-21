import React, { useState } from 'react';
import { Play, Clock, Calendar, X, Search, Filter, Loader2, AlertCircle } from 'lucide-react';
import { Sermon } from '../types';

const SAMPLE_SERMONS: Sermon[] = [
  {
    id: '1',
    title: "Walking in Divine Purpose",
    speaker: "Rev. Dr. James Sterling",
    date: "Oct 15, 2023",
    description: "Discover how to align your daily walk with the greater plan God has for your life through faith and obedience.",
    thumbnailUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Embed URL
    series: "The Purpose Driven Life"
  },
  {
    id: '2',
    title: "The Power of Forgiveness",
    speaker: "Pastor Sarah Jenkins",
    date: "Oct 08, 2023",
    description: "Unlocking the chains of the past through the transformative power of forgiveness and grace.",
    thumbnailUrl: "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    series: "Freedom in Christ"
  },
  {
    id: '3',
    title: "Faith in the Storm",
    speaker: "Rev. Dr. James Sterling",
    date: "Oct 01, 2023",
    description: "How to maintain your spiritual footing when life's challenges seem to overwhelm you.",
    thumbnailUrl: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    series: "Unshakable"
  },
  {
    id: '4',
    title: "Kingdom Economics",
    speaker: "Bishop Michael Osei",
    date: "Sep 24, 2023",
    description: "Understanding God's principles for financial stewardship and abundance in the Kingdom.",
    thumbnailUrl: "https://images.unsplash.com/photo-1544322434-d309199320e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    series: "Kingdom Life"
  },
  {
    id: '5',
    title: "Healing the Broken Heart",
    speaker: "Pastor Sarah Jenkins",
    date: "Sep 17, 2023",
    description: "God is close to the brokenhearted. A message of restoration for those grieving loss.",
    thumbnailUrl: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    series: "Restoration"
  },
  {
    id: '6',
    title: "The Great Commission",
    speaker: "Rev. Dr. James Sterling",
    date: "Sep 10, 2023",
    description: "Our mandate is clear: Go into all the world. Why missions matters more than ever.",
    thumbnailUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    series: "Mission Focus"
  }
];

// Robust Video Player Component
const VideoPlayer = ({ url, title }: { url: string; title: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Check if URL is valid
  if (!url) return (
    <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center text-slate-500">
      <AlertCircle className="w-12 h-12 mb-2 opacity-50" />
      <p>Video source unavailable</p>
    </div>
  );

  // Simple heuristic for direct video files vs embeds
  const isDirectFile = url.match(/\.(mp4|webm|ogg)$/i);

  const handleLoad = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  if (error) {
     return (
        <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center text-slate-400">
           <AlertCircle className="w-10 h-10 mb-2 text-red-500" />
           <p>Unable to load video</p>
        </div>
     )
  }

  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Loader2 className="w-10 h-10 text-slate-600 animate-spin" />
        </div>
      )}

      {isDirectFile ? (
        <video
          className="w-full h-full object-contain relative z-10"
          controls
          autoPlay
          onLoadedData={handleLoad}
          onError={handleError}
        >
          <source src={url} />
          Your browser does not support the video tag.
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

interface SermonsProps {
  isPreview?: boolean;
  onViewAll?: () => void;
}

export const Sermons: React.FC<SermonsProps> = ({ isPreview = false, onViewAll }) => {
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredSermons = SAMPLE_SERMONS.filter(sermon => 
    sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sermon.series.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // If preview, take only first 3. If full page, show all filtered.
  const displaySermons = isPreview ? SAMPLE_SERMONS.slice(0, 3) : filteredSermons;

  return (
    <div className={`bg-slate-50 ${isPreview ? 'py-20' : 'py-12 min-h-screen'}`}>
      
      {/* Video Modal */}
      {selectedSermon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-4 bg-slate-900 border-b border-slate-800 shrink-0">
              <h3 className="text-white font-bold truncate pr-4">{selectedSermon.title}</h3>
              <button 
                onClick={() => setSelectedSermon(null)}
                className="text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="aspect-video w-full bg-black shrink-0">
               <VideoPlayer url={selectedSermon.videoUrl || ''} title={selectedSermon.title} />
            </div>
            
            <div className="p-6 bg-slate-900 text-slate-300 overflow-y-auto">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h4 className="text-gold-500 font-bold uppercase text-xs tracking-wider mb-1">{selectedSermon.series}</h4>
                    <p className="font-bold text-white text-lg">{selectedSermon.speaker}</p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center text-sm text-slate-500">
                    <Calendar className="w-4 h-4 mr-2" /> {selectedSermon.date}
                  </div>
               </div>
               <p className="leading-relaxed">{selectedSermon.description}</p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center ${isPreview ? 'mb-16' : 'mb-12'}`}>
          {!isPreview && (
            <span className="text-gold-600 font-bold tracking-widest uppercase text-xs">Media Library</span>
          )}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">
            {isPreview ? "Latest Messages" : "Sermon Archive"}
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto rounded-full my-6" />
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            {isPreview 
              ? "Dive into our archive of life-changing messages. Listen, watch, and grow in your faith from anywhere in the world." 
              : "Explore our complete collection of teachings. Filter by series, speaker, or topic to find exactly what you need for your spiritual journey."
            }
          </p>
        </div>

        {/* Search Bar (Only for Full Page) */}
        {!isPreview && (
          <div className="max-w-3xl mx-auto mb-16 relative">
            <div className="relative">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
               <input 
                 type="text" 
                 placeholder="Search by title, speaker, or series..." 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 shadow-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
               />
               <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-800 transition-colors">
                 <Filter className="w-4 h-4" />
               </button>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displaySermons.map((sermon) => (
            <div 
              key={sermon.id} 
              onClick={() => setSelectedSermon(sermon)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={sermon.thumbnailUrl} 
                  alt={sermon.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-gold-500 rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                    <Play className="w-6 h-6 text-white fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-slate-900/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded font-bold uppercase tracking-wider">
                    {sermon.series}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-slate-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {sermon.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    45 mins
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-1">
                  {sermon.title}
                </h3>
                <p className="text-sm font-bold text-slate-600 mb-3 uppercase tracking-wide">
                  {sermon.speaker}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                  {sermon.description}
                </p>
                
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center mt-auto">
                   <span className="text-gold-600 font-bold text-sm flex items-center group-hover:underline decoration-2 underline-offset-4">
                     Watch Now
                   </span>
                   <div className="bg-slate-100 p-2 rounded-full group-hover:bg-gold-100 transition-colors">
                      <Play className="w-3 h-3 text-slate-400 group-hover:text-gold-600 fill-current" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State for Search */}
        {!isPreview && displaySermons.length === 0 && (
          <div className="text-center py-20">
             <div className="inline-block p-4 bg-slate-100 rounded-full mb-4">
                <Search className="w-8 h-8 text-slate-400" />
             </div>
             <h3 className="text-lg font-bold text-slate-900">No sermons found</h3>
             <p className="text-slate-500">Try adjusting your search terms.</p>
             <button 
               onClick={() => setSearchQuery('')}
               className="mt-4 text-gold-600 font-bold hover:underline"
             >
               Clear Search
             </button>
          </div>
        )}

        {/* View All Button (Only for Preview) */}
        {isPreview && (
          <div className="text-center mt-12">
            <button 
              onClick={onViewAll}
              className="px-8 py-3 bg-white border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-sm"
            >
              View All Messages
            </button>
          </div>
        )}

        {/* Load More Button (Only for Full Page if items exist) */}
        {!isPreview && displaySermons.length > 0 && (
           <div className="text-center mt-16">
              <button className="px-8 py-3 bg-slate-100 text-slate-500 font-bold rounded-lg hover:bg-slate-200 transition-all text-sm">
                 Load More Archives
              </button>
           </div>
        )}
      </div>
    </div>
  );
};