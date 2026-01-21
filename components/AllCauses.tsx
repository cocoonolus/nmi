import React, { useState, useEffect } from 'react';
import { Heart, Search, Filter } from 'lucide-react';
import { Cause } from '../types';

export const ALL_CAUSES: Cause[] = [
  {
    id: '1',
    title: "Clean Water for Northern Region",
    category: "Humanitarian",
    image: "https://images.unsplash.com/photo-1541976844346-f6b10f398ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    raised: 8200,
    goal: 15000,
    description: "Provide safe drinking water to 3 villages currently relying on contaminated stream water.",
    content: `
      <p class="mb-4">Our ministry team identified this cluster of 3 villages during a recent evangelism outreach. The primary water source is a slow-moving stream shared with livestock, leading to alarmingly high rates of typhoid and cholera, especially among children.</p>
      
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">The Solution</h3>
      <p class="mb-4">We plan to drill a deep-well mechanized borehole that will serve over 1,500 people. The project scope includes:</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>Geological survey and drilling of the borehole.</li>
        <li>Installation of a solar-powered submersible pump.</li>
        <li>Construction of overhead storage tanks and multiple fetching points.</li>
        <li>Community training on maintenance to ensure longevity.</li>
      </ul>
      
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Expected Impact</h3>
      <p>Access to clean water will drastically reduce waterborne diseases, allow children to attend school instead of walking miles to fetch water, and provide opportunities for local women to engage in commerce.</p>
    `
  },
  {
    id: '2',
    title: "Emergency Hernia Surgeries",
    category: "Medical",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    raised: 3450,
    goal: 5000,
    description: "Fund life-changing surgeries for 50 farmers unable to work due to severe hernias.",
    content: `
      <p class="mb-4">In the agrarian communities we serve, physical strength is the primary asset. However, untreated hernias are an epidemic, rendering strong men unable to farm and provide for their families.</p>
      <p class="mb-4">Noah Medical Mission is organizing a specialized surgical camp to perform 50 free hernia repairs.</p>
      
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Cost Breakdown</h3>
      <p class="mb-4">The cost per surgery is approximately $100, which covers:</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>Surgical supplies (mesh, sutures, anesthesia).</li>
        <li>Post-operative medication.</li>
        <li>Transportation for patients from remote hamlets.</li>
        <li>Feeding during their recovery stay.</li>
      </ul>
      <p>Your support restores not just health, but dignity and economic independence.</p>
    `
  },
  {
    id: '3',
    title: "Bibles for New Believers",
    category: "Evangelism",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    raised: 1100,
    goal: 2500,
    description: "Supply 500 bibles in local dialects to new converts from our recent village crusades.",
    content: `
      <p class="mb-4">Following our recent 'Operation Northern Light' crusade, over 500 souls surrendered their lives to Christ! Praise God.</p>
      <p class="mb-4">However, discipleship is difficult when new believers do not have access to the Word of God. Most of these converts are literate in their local dialect but cannot afford a Bible.</p>
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">The Project</h3>
      <p>We are partnering with the Bible Society to procure 500 copies of the Bible in the Twi and Dagbani languages. Each Bible costs roughly $5.</p>
    `
  },
  {
    id: '4',
    title: "School Fees for Orphans",
    category: "Humanitarian",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    raised: 4500,
    goal: 12000,
    description: "Sponsor education for 100 orphans in the Ashanti region for the upcoming academic year.",
    content: `
      <p class="mb-4">Education is the key to breaking the cycle of poverty. We have identified 100 brilliant but needy orphans who are at risk of dropping out of school due to lack of funds.</p>
      <p class="mb-4">This scholarship fund covers tuition, uniforms, books, and a daily hot meal for the entire academic year.</p>
    `
  },
  {
    id: '5',
    title: "Mobile Clinic Fuel & Supplies",
    category: "Medical",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    raised: 1200,
    goal: 3000,
    description: "Keep our 4x4 medical van running to reach remote villages with essential medicines."
  },
  {
    id: '6',
    title: "Flood Relief Kits",
    category: "Humanitarian",
    image: "https://images.unsplash.com/photo-1594892226217-11158b732470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    raised: 18000,
    goal: 20000,
    description: "Emergency bedding, mosquito nets, and food packs for families displaced by recent floods."
  },
  {
    id: '7',
    title: "Audio Bibles for the Elderly",
    category: "Evangelism",
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    raised: 800,
    goal: 4000,
    description: "Solar-powered audio bibles for non-literate elderly believers to hear God's word daily."
  },
  {
    id: '8',
    title: "Widows' Mite Fund",
    category: "Humanitarian",
    image: "https://images.unsplash.com/photo-1544322434-d309199320e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    raised: 2100,
    goal: 10000,
    description: "Monthly stipend support for 200 widows to purchase food and basic necessities."
  },
  {
    id: '9',
    title: "Malaria Medicine Stock",
    category: "Medical",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    raised: 5500,
    goal: 8000,
    description: "Restocking life-saving anti-malarial drugs for our upcoming rainy season outreach."
  },
  {
    id: '10',
    title: "Village Church Roofing",
    category: "Evangelism",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    raised: 3200,
    goal: 6500,
    description: "Completing the roof for a newly planted church in the Volta region to protect from rain."
  }
];

interface AllCausesProps {
  onDonate: () => void;
  initialCategory?: string;
  onViewCause: (cause: Cause) => void;
}

export const AllCauses: React.FC<AllCausesProps> = ({ onDonate, initialCategory = 'All', onViewCause }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const categories = ['All', 'Medical', 'Humanitarian', 'Evangelism'];

  const filteredCauses = ALL_CAUSES.filter(cause => {
    const matchesCategory = activeCategory === 'All' || cause.category === activeCategory;
    const matchesSearch = cause.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cause.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold tracking-widest uppercase text-xs">Make a Difference</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Active Causes</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
             Browse our current projects. Every donation acts as a seed for transformation in the lives of those we serve.
          </p>
        </div>

        {/* Filter/Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-12">
           <div className="relative w-full md:w-96 mb-4 md:mb-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search causes..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-gold-500 focus:outline-none"
              />
           </div>
           <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${
                    activeCategory === cat 
                      ? 'bg-slate-900 text-white' 
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {cat === 'All' && <Filter className="w-4 h-4 mr-2" />}
                  {cat === 'All' ? 'All Causes' : cat}
                </button>
              ))}
           </div>
        </div>

        {/* Causes Grid */}
        {filteredCauses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCauses.map((cause) => {
              const percentage = Math.min((cause.raised / cause.goal) * 100, 100);
              return (
                <div 
                  key={cause.id} 
                  onClick={() => onViewCause(cause)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col animate-fade-in cursor-pointer"
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
                    <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-gold-600 transition-colors">{cause.title}</h3>
                    <p className="text-slate-500 text-sm mb-6 flex-1 line-clamp-3">{cause.description}</p>
                    
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
        ) : (
          <div className="text-center py-20 text-slate-500">
            <Heart className="w-12 h-12 mx-auto text-slate-300 mb-4" />
            <p>No causes found matching your criteria.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-4 text-gold-600 font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredCauses.length > 9 && (
          <div className="mt-16 flex justify-center space-x-2">
             <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 text-white font-bold">1</button>
             <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors">2</button>
             <span className="flex items-center text-slate-400 px-2">...</span>
          </div>
        )}
      </div>
    </div>
  );
};