import React from 'react';
import { Users, HeartPulse, MapPin, Smile } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    { icon: Users, value: "15,000+", label: "Lives Impacted", color: "text-primary-500", bg: "bg-primary-50" },
    { icon: HeartPulse, value: "2,400+", label: "Medical Surgeries", color: "text-coffee-600", bg: "bg-coffee-100" },
    { icon: MapPin, value: "42", label: "Villages Reached", color: "text-primary-500", bg: "bg-primary-50" },
    { icon: Smile, value: "850", label: "Children Fed", color: "text-coffee-600", bg: "bg-coffee-100" },
  ];

  return (
    <div className="bg-coffee-950 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-500 blur-3xl"></div>
         <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary-700 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`mx-auto w-20 h-20 rounded-3xl ${stat.bg} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <stat.icon className={`w-9 h-9 ${stat.color}`} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 font-serif tracking-tight">{stat.value}</div>
              <div className="text-coffee-300 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};