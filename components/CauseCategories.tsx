import React from 'react';
import { Stethoscope, HandHeart, Users } from 'lucide-react';

interface CauseCategoriesProps {
  onSelectCategory: (category: string) => void;
}

export const CauseCategories: React.FC<CauseCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <span className="text-gold-600 font-bold tracking-widest uppercase text-xs">Where We Work</span>
           <h2 className="text-3xl font-serif font-bold text-slate-900 mt-2">Browse Cause Categories</h2>
           <p className="text-slate-500 mt-2 max-w-2xl mx-auto">Explore the different areas where your support helps us bring holistic transformation to communities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all cursor-pointer group" onClick={() => onSelectCategory('Medical')}>
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Stethoscope className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Medical Missions</h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-4">Providing surgeries, general consultations, and health screenings to underserved rural communities.</p>
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wide group-hover:underline">View Medical Causes</span>
          </div>
          
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all cursor-pointer group" onClick={() => onSelectCategory('Humanitarian')}>
            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <HandHeart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">Humanitarian Relief</h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-4">Humanitarian response providing emergency shelter, food security, and essential supplies to those in crisis.</p>
            <span className="text-sm font-bold text-orange-600 uppercase tracking-wide group-hover:underline">View Relief Causes</span>
          </div>
          
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all cursor-pointer group" onClick={() => onSelectCategory('Evangelism')}>
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">Evangelism & Discipleship</h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-4">Village-to-village crusades and Discovery Bible Studies to raise mature disciples.</p>
            <span className="text-sm font-bold text-green-600 uppercase tracking-wide group-hover:underline">View Outreach Causes</span>
          </div>
        </div>
      </div>
    </div>
  );
};