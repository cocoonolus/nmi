import React from 'react';
import { Users, HeartPulse, MapPin, Smile } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    { icon: Users, value: "15,000+", label: "Lives Impacted", color: "text-blue-600", bg: "bg-blue-100" },
    { icon: HeartPulse, value: "2,400+", label: "Medical Surgeries", color: "text-red-600", bg: "bg-red-100" },
    { icon: MapPin, value: "42", label: "Villages Reached", color: "text-gold-600", bg: "bg-gold-100" },
    { icon: Smile, value: "850", label: "Children Fed", color: "text-green-600", bg: "bg-green-100" },
  ];

  return (
    <div className="bg-slate-900 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
         <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold-500 blur-3xl"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`mx-auto w-16 h-16 rounded-2xl ${stat.bg} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif tracking-tight">{stat.value}</div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};