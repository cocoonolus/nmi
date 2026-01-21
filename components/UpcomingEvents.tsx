import React from 'react';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: { day: string; month: string };
  location: string;
  time: string;
  category: string;
}

const EVENTS: Event[] = [
  {
    id: '1',
    title: "Rural Medical Outreach",
    date: { day: "15", month: "NOV" },
    location: "Bono East Region",
    time: "08:00 AM - 04:00 PM",
    category: "Medical"
  },
  {
    id: '2',
    title: "Fire Conference 2024",
    date: { day: "02", month: "DEC" },
    location: "Accra, Main Auditorium",
    time: "06:00 PM - 09:00 PM",
    category: "Conference"
  },
  {
    id: '3',
    title: "Partners Appreciation Dinner",
    date: { day: "18", month: "DEC" },
    location: "Kempinski Hotel, Accra",
    time: "07:00 PM",
    category: "Gala"
  }
];

export const UpcomingEvents: React.FC = () => {
  return (
    <div className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold tracking-widest uppercase text-xs">Join Us</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mt-2">Upcoming Events</h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <div key={event.id} className="group flex bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-gold-500/30 transition-all hover:shadow-lg">
              <div className="mr-6 flex flex-col items-center justify-center bg-white rounded-xl p-4 shadow-sm h-fit min-w-[80px] border border-slate-100 group-hover:border-gold-500 transition-colors">
                <span className="text-3xl font-bold text-slate-900">{event.date.day}</span>
                <span className="text-xs font-bold text-gold-600 uppercase tracking-wider">{event.date.month}</span>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{event.category}</span>
                   <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-gold-500 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-gold-600 transition-colors">{event.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-slate-500">
                    <MapPin className="w-4 h-4 mr-2 text-gold-500" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="w-4 h-4 mr-2 text-gold-500" />
                    {event.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};