import React, { useState } from 'react';
import { generateSpiritualGuidance } from '../services/geminiService';
import { MessageCircle, Sparkles, Send, Loader2 } from 'lucide-react';

export const MinistryAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);
    try {
      const result = await generateSpiritualGuidance(input);
      setResponse(result);
    } catch (error) {
      setResponse("We encountered a momentary issue. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      <div className="bg-slate-900 p-6 sm:p-8 relative overflow-hidden">
         {/* Decorative circle */}
         <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gold-500 rounded-full opacity-10 blur-3xl"></div>
         
        <div className="relative z-10 flex items-center space-x-4">
          <div className="bg-gold-500/20 p-3 rounded-xl">
             <Sparkles className="text-gold-400 w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-white">Spiritual Guidance Assistant</h2>
            <p className="text-slate-400 text-sm mt-1">Powered by AI to help you find scripture, prayers, and hope.</p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 bg-slate-50/50">
        {!response && !loading && (
          <div className="text-center py-10">
            <MessageCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-700">How can we pray for you today?</h3>
            <p className="text-slate-500 mt-2 max-w-md mx-auto">
              Ask for a prayer, a bible verse for a specific feeling, or an explanation of a spiritual concept.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["Prayer for anxiety", "Verse about hope", "How to forgive?"].map(suggestion => (
                <button 
                  key={suggestion}
                  onClick={() => setInput(suggestion)}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-gold-400 hover:text-gold-600 transition-colors"
                >
                  "{suggestion}"
                </button>
              ))}
            </div>
          </div>
        )}

        {loading && (
          <div className="py-12 flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-10 h-10 text-gold-500 animate-spin" />
            <p className="text-slate-500 text-sm animate-pulse">Seeking wisdom...</p>
          </div>
        )}

        {response && (
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm mb-6 animate-fade-in">
             <div className="prose prose-slate max-w-none">
               <div className="flex items-start">
                  <span className="text-4xl text-gold-500 font-serif mr-4 leading-none">“</span>
                  <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-wrap">{response}</p>
               </div>
               <div className="mt-4 flex justify-end">
                 <button 
                   onClick={() => setResponse(null)} 
                   className="text-sm text-gold-600 hover:text-gold-700 font-medium"
                 >
                   Ask Another Question
                 </button>
               </div>
             </div>
          </div>
        )}

        <form onSubmit={handleAsk} className="relative mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your prayer request or question here..."
            className="w-full pl-6 pr-14 py-4 rounded-xl border-2 border-slate-200 focus:border-gold-500 focus:ring-0 outline-none transition-all shadow-sm text-slate-700 placeholder:text-slate-400"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white p-2.5 rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};