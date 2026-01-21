import React, { useState } from 'react';
import { Play, BookOpen, Headphones, Video, Clock, Search, Filter, Calendar, Mic } from 'lucide-react';
import { MediaItem, MediaType } from '../types';

// Consolidated Data Source
export const MEDIA_LIBRARY: MediaItem[] = [
  // --- SERMONS ---
  {
    id: 's1',
    type: 'SERMON',
    title: "Walking in Divine Purpose",
    author: "Rev. Dr. James Sterling",
    date: "Oct 15, 2023",
    description: "Discover how to align your daily walk with the greater plan God has for your life through faith and obedience.",
    content: "Full sermon notes and transcript would go here...",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    durationOrReadTime: "45 mins",
    category: "The Purpose Driven Life"
  },
  {
    id: 's2',
    type: 'SERMON',
    title: "The Power of Forgiveness",
    author: "Pastor Sarah Jenkins",
    date: "Oct 08, 2023",
    description: "Unlocking the chains of the past through the transformative power of forgiveness and grace.",
    imageUrl: "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    durationOrReadTime: "52 mins",
    category: "Freedom in Christ"
  },
  // --- ARTICLES ---
  {
    id: 'a1',
    type: 'ARTICLE',
    title: "The Unseen Harvest: Field Report",
    author: "Rev. Dr. James Sterling",
    authorRole: "Lead Missionary",
    date: "Nov 12, 2023",
    description: "After three days of travel on muddy roads, what we found in the remote village of Tamale North changed our perspective.",
    content: `
      <p class="mb-6 font-serif text-xl text-slate-700 leading-relaxed">It began with a whisper of a need and ended with a shout of praise. The journey to the Northern Region is never easy, but it is always necessary.</p>
      <p class="mb-4">As our 4x4 vehicles navigated the treacherous paths, the anticipation in the team was palpable. We were carrying more than just medical supplies; we were carrying hope.</p>
      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Breaking Ground</h3>
      <p class="mb-4">The first day was dedicated to setting up the mobile clinic. We saw over 200 patients. But the physical healing was just the gateway. That evening, we gathered the community under the large Baobab tree.</p>
      <div class="bg-gold-50 border-l-4 border-gold-500 p-6 my-8 italic text-slate-700">"We thought we were forgotten, but God sent you to remind us that He sees us." - Village Chief</div>
    `,
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    durationOrReadTime: "5 min read",
    category: "Field Report"
  },
  {
    id: 'a2',
    type: 'ARTICLE',
    title: "5 Ways to Pray for Missionaries",
    author: "Pastor Sarah Jenkins",
    authorRole: "Prayer Director",
    date: "Oct 28, 2023",
    description: "Missionaries face unique spiritual and physical battles. Here is a practical guide on how to intercede effectively.",
    content: `
      <p class="mb-4">Prayer is the engine of missions. Without it, our efforts are merely human endeavors. Here are five strategic ways you can pray for us:</p>
      <ol class="list-decimal pl-5 space-y-4 mb-6">
        <li><strong>Protection:</strong> Pray for physical safety against disease, accidents, and hostile forces.</li>
        <li><strong>Boldness:</strong> Pray that we would open our mouths fearlessly (Eph 6:19).</li>
        <li><strong>Clarity:</strong> Pray for wisdom in navigating cross-cultural communication.</li>
      </ol>
    `,
    imageUrl: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    durationOrReadTime: "4 min read",
    category: "Spiritual Growth"
  },
  // --- AUDIO/PODCASTS ---
  {
    id: 'p1',
    type: 'AUDIO',
    title: "Podcast: Finding Peace in Chaos",
    author: "NMI Media Team",
    date: "Nov 10, 2023",
    description: "In this episode, we sit down with Mama Sarah to discuss how to maintain a heart of peace when the world around you is falling apart.",
    imageUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77ac618?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    durationOrReadTime: "25 min listen",
    category: "Devotional"
  },
  // --- DOCUMENTARY/VIDEO ---
  {
    id: 'v1',
    type: 'VIDEO',
    title: "Documentary: Water Project",
    author: "NMI Media Team",
    date: "Nov 05, 2023",
    description: "Witness the moment clean water flowed for the first time in the village of Ada. See the joy, the tears, and the transformation.",
    imageUrl: "https://images.unsplash.com/photo-1541976844346-f6b10f398ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    durationOrReadTime: "12 min watch",
    category: "Project Update"
  }
];

interface MediaLibraryProps {
  onViewItem: (item: MediaItem) => void;
}

export const MediaLibrary: React.FC<MediaLibraryProps> = ({ onViewItem }) => {
  const [filter, setFilter] = useState<'ALL' | MediaType>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MEDIA_LIBRARY.filter(item => {
    const matchesFilter = filter === 'ALL' || item.type === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getIcon = (type: MediaType) => {
    switch (type) {
      case 'SERMON': return <Mic className="w-4 h-4" />;
      case 'ARTICLE': return <BookOpen className="w-4 h-4" />;
      case 'AUDIO': return <Headphones className="w-4 h-4" />;
      case 'VIDEO': return <Video className="w-4 h-4" />;
    }
  };

  const getLabel = (type: MediaType) => {
    switch (type) {
      case 'SERMON': return 'Sermon';
      case 'ARTICLE': return 'Article';
      case 'AUDIO': return 'Podcast';
      case 'VIDEO': return 'Video';
    }
  };

  const getColor = (type: MediaType) => {
    switch (type) {
      case 'SERMON': return 'bg-purple-100 text-purple-700';
      case 'ARTICLE': return 'bg-blue-100 text-blue-700';
      case 'AUDIO': return 'bg-orange-100 text-orange-700';
      case 'VIDEO': return 'bg-red-100 text-red-700';
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold tracking-widest uppercase text-xs">Library</span>
          <h2 className="text-4xl font-serif font-bold text-slate-900 mt-2">Media & Stories</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
            A unified collection of sermons, field reports, podcasts, and documentaries to inspire and equip you.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'ALL', label: 'All Content' },
              { id: 'SERMON', label: 'Sermons' },
              { id: 'ARTICLE', label: 'Articles' },
              { id: 'AUDIO', label: 'Podcasts' },
              { id: 'VIDEO', label: 'Videos' },
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all border ${
                  filter === tab.id 
                    ? 'bg-slate-900 text-white border-slate-900' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
             <input 
               type="text" 
               placeholder="Search title, speaker, topic..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 focus:border-gold-500 focus:outline-none text-sm"
             />
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => onViewItem(item)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer group flex flex-col h-full"
            >
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Type Badge */}
                <div className={`absolute top-4 left-4 ${getColor(item.type)} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center shadow-sm backdrop-blur-md bg-opacity-90`}>
                  <span className="mr-2">{getIcon(item.type)}</span>
                  {getLabel(item.type)}
                </div>

                {/* Play Overlay (for playable media) */}
                {(item.type === 'VIDEO' || item.type === 'AUDIO' || item.type === 'SERMON') && (
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-slate-900 fill-current ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3 uppercase tracking-wide font-bold">
                  <span className="text-gold-600 line-clamp-1">{item.category}</span>
                  <span className="flex items-center shrink-0"><Clock className="w-3 h-3 mr-1" /> {item.durationOrReadTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm mb-6 line-clamp-2 flex-1">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                   <div className="flex items-center">
                      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold text-slate-500 uppercase">
                         {item.author.charAt(0)}
                      </div>
                      <div className="ml-3">
                         <p className="text-xs font-bold text-slate-900">{item.author}</p>
                         <p className="text-[10px] text-slate-400">{item.date}</p>
                      </div>
                   </div>
                   
                   {/* Contextual Action Icon */}
                   <div className="text-slate-300 group-hover:text-gold-600 transition-colors">
                      {item.type === 'ARTICLE' ? <BookOpen className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-500">
             <Filter className="w-12 h-12 mx-auto text-slate-300 mb-4" />
             <p>No content found matching your filters.</p>
             <button 
               onClick={() => { setFilter('ALL'); setSearchQuery(''); }}
               className="mt-4 text-gold-600 font-bold hover:underline"
             >
               Clear Filters
             </button>
          </div>
        )}
      </div>
    </div>
  );
};