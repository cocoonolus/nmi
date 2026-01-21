import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, Play, Pause, Volume2 } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({ post, onBack }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const renderHeader = () => {
    switch (post.type) {
      case 'VIDEO':
        return (
          <div className="w-full bg-black aspect-video relative">
            <iframe 
              src={`${post.mediaUrl}?autoplay=1`} 
              className="w-full h-full"
              title={post.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute top-4 left-4">
              <button 
                onClick={onBack}
                className="bg-black/50 hover:bg-black/80 text-white px-4 py-2 rounded-full flex items-center backdrop-blur-sm text-sm font-bold transition-all"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </button>
            </div>
          </div>
        );
      
      case 'AUDIO':
        return (
          <div className="relative h-96 w-full bg-slate-900 overflow-hidden flex flex-col justify-end">
            <img src={post.imageUrl} alt={post.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute top-0 left-0 p-6 z-20">
               <button onClick={onBack} className="text-white/80 hover:text-white flex items-center font-bold">
                 <ArrowLeft className="w-5 h-5 mr-2" /> Back
               </button>
            </div>
            
            <div className="relative z-10 p-8 md:p-12 max-w-4xl mx-auto w-full">
              <span className="bg-gold-500 text-slate-900 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                 Podcast Episode
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">{post.title}</h1>
              
              {/* Custom Audio Player UI */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center space-x-6">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center hover:bg-gold-400 transition-colors shadow-lg shrink-0"
                >
                  {isPlaying ? <Pause className="w-6 h-6 text-slate-900 fill-current" /> : <Play className="w-6 h-6 text-slate-900 fill-current ml-1" />}
                </button>
                <div className="flex-1">
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className={`h-full bg-gold-500 rounded-full relative w-1/3`}></div>
                  </div>
                  <div className="flex justify-between text-xs text-white/70 mt-2 font-mono">
                    <span>04:20</span>
                    <span>12:45</span>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <Volume2 className="text-white/70 w-5 h-5" />
                </div>
              </div>
              <p className="text-white/60 text-xs mt-4 text-center">* Demo Player Interface</p>
            </div>
          </div>
        );

      case 'ARTICLE':
      default:
        return (
          <div className="relative h-[60vh] w-full">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-slate-900/30"></div>
            
            <div className="absolute top-0 left-0 p-6 z-20">
               <button 
                 onClick={onBack}
                 className="flex items-center text-white bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full transition-all text-sm font-bold"
               >
                 <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
               </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-4xl mx-auto">
               <span className="bg-gold-500 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4 inline-block shadow-sm">
                 {post.category}
               </span>
               <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-none shadow-sm">
                 {post.title}
               </h1>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {renderHeader()}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-t-3xl p-8 md:p-12 shadow-xl border-x border-t border-slate-100">
          
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-slate-100 pb-8 mb-8">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold mr-3">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{post.author}</p>
                  <p className="text-xs text-slate-500">{post.role}</p>
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div className="flex items-center text-slate-500 text-sm">
                <Calendar className="w-4 h-4 mr-2 text-gold-500" />
                {post.date}
              </div>
              <div className="flex items-center text-slate-500 text-sm">
                <Clock className="w-4 h-4 mr-2 text-gold-500" />
                {post.readTime}
              </div>
            </div>
            
            <button className="flex items-center space-x-2 text-slate-500 hover:text-gold-600 transition-colors">
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-bold">Share</span>
            </button>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-slate max-w-none first-letter:text-5xl first-letter:font-serif first-letter:text-gold-600 first-letter:mr-1 first-letter:float-left">
             <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Author Bio / Footer */}
          <div className="bg-slate-50 rounded-2xl p-8 mt-16 flex items-start space-x-6">
             <div className="w-16 h-16 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center text-2xl font-serif text-slate-400">
               {post.author.charAt(0)}
             </div>
             <div>
               <h4 className="font-bold text-slate-900 text-lg">About {post.author}</h4>
               <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                 {post.role} at Noah Ministries International. Passionate about sharing stories of transformation from the mission field.
               </p>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};