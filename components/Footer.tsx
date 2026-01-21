import React from 'react';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { MinistryTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: MinistryTab) => void;
  onCategorySelect: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onCategorySelect }) => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Signup Top Section */}
        <div className="mb-16 pb-16 border-b border-slate-800">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-serif font-bold mb-2">Join Our Prayer Network</h3>
            <p className="text-slate-400 mb-6">Receive monthly field reports, prayer points, and testimonies of what God is doing.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-slate-800 border border-slate-700 text-white px-6 py-3 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-bold transition-colors flex items-center justify-center">
                Subscribe <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-white mb-6 cursor-pointer" onClick={() => setActiveTab(MinistryTab.HOME)}>
              Noah Ministries<br/><span className="text-gold-500 text-base font-sans tracking-wider uppercase">International</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Transforming hearts, healing bodies, and reclaiming territories for the Kingdom of God until every community becomes a testimony of saving grace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-white transition-all"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Explore / Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold-500 mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <button onClick={() => setActiveTab(MinistryTab.ABOUT)} className="hover:text-white transition-colors flex items-center">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab(MinistryTab.WORK)} className="hover:text-white transition-colors flex items-center">
                  Our Work
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab(MinistryTab.EVENTS)} className="hover:text-white transition-colors flex items-center group">
                  Upcoming Events
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab(MinistryTab.MEDIA)} className="hover:text-white transition-colors flex items-center group">
                  Media & Stories
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab(MinistryTab.CAUSES)} className="hover:text-white transition-colors flex items-center group">
                   All Causes
                </button>
              </li>
            </ul>
          </div>

          {/* Cause Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold-500 mb-6">Cause Categories</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <button onClick={() => onCategorySelect('Medical')} className="hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-gold-500 transition-colors"></span>
                  Medical Missions
                </button>
              </li>
              <li>
                <button onClick={() => onCategorySelect('Humanitarian')} className="hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-gold-500 transition-colors"></span>
                  Humanitarian Relief
                </button>
              </li>
              <li>
                <button onClick={() => onCategorySelect('Evangelism')} className="hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-gold-500 transition-colors"></span>
                  Evangelism
                </button>
              </li>
              <li>
                <button onClick={() => onCategorySelect('All')} className="hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-gold-500 transition-colors"></span>
                  View All Categories
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold-500 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-gold-500 shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Lagos,Nigeria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-500 transition-colors"
                >
                  Headquarters:<br />Lagos, Nigeria
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gold-500 shrink-0" />
                <a href="tel:+2348121694422" className="hover:text-gold-500 transition-colors">
                  +234 812 169 4422
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gold-500 shrink-0" />
                <a href="mailto:info@noahministriesinternational.org" className="hover:text-gold-500 transition-colors break-all">
                  info@noahministriesinternational.org
                </a>
              </li>
            </ul>
            <button 
              onClick={() => setActiveTab(MinistryTab.GIVING)}
              className="mt-6 w-full py-3 bg-white/10 border border-white/10 hover:bg-gold-500 hover:border-gold-500 text-white rounded-lg font-bold transition-all uppercase text-xs tracking-widest"
            >
              Donate Now
            </button>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Noah Ministries International. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with Excellence for the Kingdom.</p>
        </div>
      </div>
    </footer>
  );
};