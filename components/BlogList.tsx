import React, { useState } from 'react';
import { BookOpen, Headphones, Video, Clock, ChevronRight, Play } from 'lucide-react';
import { BlogPost, BlogType } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "The Unseen Harvest: Field Report from the Northern Region",
    excerpt: "After three days of travel on muddy roads, what we found in the remote village of Tamale North changed our perspective on faith forever.",
    content: `
      <p class="mb-6 font-serif text-xl text-slate-700 leading-relaxed">It began with a whisper of a need and ended with a shout of praise. The journey to the Northern Region is never easy, but it is always necessary.</p>
      
      <p class="mb-4">As our 4x4 vehicles navigated the treacherous paths, the anticipation in the team was palpable. We were carrying more than just medical supplies; we were carrying hope. When we finally arrived, the village elders greeted us with a mixture of skepticism and desperation. It had been years since any aid organization had visited their community.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Breaking Ground</h3>
      <p class="mb-4">The first day was dedicated to setting up the mobile clinic. We saw over 200 patients, treating everything from malaria to severe infections. But the physical healing was just the gateway. That evening, as the sun dipped below the horizon, painting the sky in hues of orange and purple, we gathered the community under the large Baobab tree.</p>
      
      <p class="mb-4">We shared the story of the Good Samaritan. It resonated deeply. By the end of our three-day mission, not only were bodies healed, but hearts were opened. We are thrilled to report that a new Discovery Bible Study group has started, led by one of the village elders who gave his life to Christ.</p>
      
      <div class="bg-gold-50 border-l-4 border-gold-500 p-6 my-8 italic text-slate-700">
        "We thought we were forgotten, but God sent you to remind us that He sees us." - Village Chief
      </div>
      
      <p>This is why we go. This is the unseen harvest.</p>
    `,
    author: "Rev. Dr. James Sterling",
    role: "Founder & Lead Missionary",
    date: "Nov 12, 2023",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Field Report",
    type: 'ARTICLE'
  },
  {
    id: '2',
    title: "Podcast: Finding Peace in the Midst of Chaos",
    excerpt: "In this episode, we sit down with Mama Sarah to discuss how to maintain a heart of peace when the world around you is falling apart.",
    content: "<p>Listen to this transformative conversation about the peace that surpasses all understanding.</p>",
    author: "NMI Media Team",
    role: "Production",
    date: "Nov 10, 2023",
    readTime: "25 min listen",
    imageUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77ac618?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Devotional",
    type: 'AUDIO',
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Demo audio
  },
  {
    id: '3',
    title: "Video: Water Project Documentary",
    excerpt: "Witness the moment clean water flowed for the first time in the village of Ada. See the joy, the tears, and the transformation.",
    content: "<p>A short documentary capturing the essence of our clean water initiative.</p>",
    author: "NMI Media Team",
    role: "Production",
    date: "Nov 05, 2023",
    readTime: "12 min watch",
    imageUrl: "https://images.unsplash.com/photo-1541976844346-f6b10f398ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Project Update",
    type: 'VIDEO',
    mediaUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Demo video
  },
  {
    id: '4',
    title: "5 Ways to Pray for Missionaries",
    excerpt: "Missionaries face unique spiritual and physical battles. Here is a practical guide on how to intercede effectively for those on the frontlines.",
    content: `
      <p class="mb-4">Prayer is the engine of missions. Without it, our efforts are merely human endeavors. Here are five strategic ways you can pray for us:</p>
      <ol class="list-decimal pl-5 space-y-4 mb-6">
        <li><strong>Protection:</strong> Pray for physical safety against disease, accidents, and hostile forces.</li>
        <li><strong>Boldness:</strong> Pray that we would open our mouths fearlessly to make known the mystery of the Gospel (Eph 6:19).</li>
        <li><strong>Clarity:</strong> Pray for wisdom in navigating cross-cultural communication.</li>
        <li><strong>Health:</strong> Pray for strength and vitality in harsh environments.</li>
        <li><strong>Fruitfulness:</strong> Pray that the seeds sown would fall on good soil.</li>
      </ol>
    `,
    author: "Pastor Sarah Jenkins",
    role: "Prayer Director",
    date: "Oct 28, 2023",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Spiritual Growth",
    type: 'ARTICLE'
  },
  {
    id: '5',
    title: "Audio: The Sound of Worship in Ghana",
    excerpt: "An immersive audio experience recording the vibrant, drum-filled worship service from our recent crusade.",
    content: "<p>Close your eyes and be transported to the vibrant worship grounds of West Africa.</p>",
    author: "NMI Media Team",
    role: "Production",
    date: "Oct 20, 2023",
    readTime: "8 min listen",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Music & Arts",
    type: 'AUDIO',
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  }
];

interface BlogListProps {
  onViewPost: (post: BlogPost) => void;
}

export const BlogList: React.FC<BlogListProps> = ({ onViewPost }) => {
  const [filter, setFilter] = useState<'ALL' | BlogType>('ALL');

  const filteredPosts = filter === 'ALL' ? BLOG_POSTS : BLOG_POSTS.filter(post => post.type === filter);

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold tracking-widest uppercase text-xs">Stories & Insights</span>
          <h2 className="text-4xl font-serif font-bold text-slate-900 mt-2">The Ministry Blog</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Updates from the field, deep dives into scripture, podcast episodes, and video documentaries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setFilter('ALL')}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${filter === 'ALL' ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
          >
            View All
          </button>
          <button 
            onClick={() => setFilter('ARTICLE')}
            className={`flex items-center px-6 py-2 rounded-full font-bold text-sm transition-all ${filter === 'ARTICLE' ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Read Articles
          </button>
          <button 
            onClick={() => setFilter('AUDIO')}
            className={`flex items-center px-6 py-2 rounded-full font-bold text-sm transition-all ${filter === 'AUDIO' ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
          >
            <Headphones className="w-4 h-4 mr-2" />
            Listen (Audio)
          </button>
          <button 
            onClick={() => setFilter('VIDEO')}
            className={`flex items-center px-6 py-2 rounded-full font-bold text-sm transition-all ${filter === 'VIDEO' ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
          >
            <Video className="w-4 h-4 mr-2" />
            Watch (Video)
          </button>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div 
              key={post.id}
              onClick={() => onViewPost(post)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 cursor-pointer group flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  {post.type === 'ARTICLE' && <span className="bg-white/90 backdrop-blur text-slate-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center shadow-sm"><BookOpen className="w-3 h-3 mr-2 text-gold-600" /> Article</span>}
                  {post.type === 'AUDIO' && <span className="bg-slate-900/90 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center shadow-sm"><Headphones className="w-3 h-3 mr-2 text-gold-400" /> Audio</span>}
                  {post.type === 'VIDEO' && <span className="bg-red-600/90 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center shadow-sm"><Video className="w-3 h-3 mr-2" /> Video</span>}
                </div>

                {/* Play Overlay for Video/Audio */}
                {(post.type === 'VIDEO' || post.type === 'AUDIO') && (
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-slate-900 fill-current ml-1" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3 uppercase tracking-wide font-bold">
                  <span className="text-gold-600">{post.category}</span>
                  <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-gold-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                   <div className="flex items-center">
                      <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-500 uppercase">
                         {post.author.charAt(0)}
                      </div>
                      <div className="ml-3">
                         <p className="text-xs font-bold text-slate-900">{post.author}</p>
                         <p className="text-[10px] text-slate-400">{post.date}</p>
                      </div>
                   </div>
                   <span className="text-gold-600 hover:text-gold-700 transition-colors">
                     <ChevronRight className="w-5 h-5" />
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};