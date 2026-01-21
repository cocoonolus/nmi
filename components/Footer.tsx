import React from 'react';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { MinistryTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: MinistryTab) => void;
  onCategorySelect: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onCategorySelect }) => {
  const logoUrl = "https://noahministriesinternational.org/wp-content/uploads/2024/02/NMI-LOGO-1.png";

  return (
    <footer className="bg-coffee-900 text-white pt-24 pb-12 border-t border-coffee-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Signup Top Section */}
        <div className="mb-20 pb-20 border-b border-coffee-800/50">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-serif font-bold mb-3">Join Our Prayer Network</h3>
            <p className="text-coffee-200 mb-8 text-lg">Receive monthly field reports, prayer points, and testimonies of what God is doing.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-coffee-800/50 border border-coffee-700 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-primary-500 transition-colors placeholder:text-coffee-400"
              />
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center justify-center uppercase tracking-widest text-sm shadow-lg shadow-primary-500/20">
                Subscribe <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-8 cursor-pointer group" onClick={() => setActiveTab(MinistryTab.HOME)}>
              <img 
                src={logoUrl} 
                alt="NMI Logo" 
                className="h-20 w-auto object-contain brightness-0 invert" 
              />
            </div>
            <p className="text-coffee-200 text-sm leading-relaxed mb-8 font-medium">
              Transforming hearts, healing bodies, and reclaiming territories for the Kingdom of God until every community becomes a testimony of saving grace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-11 h-11 rounded-xl bg-coffee-800 flex items-center justify-center text-coffee-200 hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-sm"><Facebook size={20} /></a>
              <a href="#" className="w-11 h-11 rounded-xl bg-coffee-800 flex items-center justify-center text-coffee-200 hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-sm"><Instagram size={20} /></a>
              <a href="#" className="w-11 h-11 rounded-xl bg-coffee-800 flex items-center justify-center text-coffee-200 hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-sm"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Explore / Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-primary-500 mb-8">Explore</h4>
            <ul className="space-y-5 text-sm font-medium text-coffee-100">
              <li>
                <button onClick={() => setActiveTab(MinistryTab.ABOUT)} className="hover:text-primary-500 transition-colors flex items-center">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab(MinistryTab.WORK)} className="hover:text-primary-500 transition-colors flex items-center">
                  Our Work
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab(MinistryTab.EVENTS)} className="hover:text-primary-500 transition-colors flex items-center group">
                  Upcoming Events
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab(MinistryTab.MEDIA)} className="hover:text-primary-500 transition-colors flex items-center group">
                  Media & Stories
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab(MinistryTab.CAUSES)} className="hover:text-primary-500 transition-colors flex items-center group">
                   All Causes
                </button>
              </li>
            </ul>
          </div>

          {/* Cause Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-primary-500 mb-8">Focus Areas</h4>
            <ul className="space-y-5 text-sm font-medium text-coffee-100">
              <li>
                <button onClick={() => onCategorySelect('Medical')} className="hover:text-primary-500 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-coffee-600 rounded-full mr-3 group-hover:bg-primary-500 transition-colors"></span>
                  Medical Missions
                </button>
              </li>
              <li>
                <button onClick={() => onCategorySelect('Humanitarian')} className="hover:text-primary-500 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-coffee-600 rounded-full mr-3 group-hover:bg-primary-500 transition-colors"></span>
                  Humanitarian Relief
                </button>
              </li>
              <li>
                <button onClick={() => onCategorySelect('Evangelism')} className="hover:text-primary-500 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-coffee-600 rounded-full mr-3 group-hover:bg-primary-500 transition-colors"></span>
                  Evangelism
                </button>
              </li>
              <li>
                <button onClick={() => onCategorySelect('All')} className="hover:text-primary-500 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-coffee-600 rounded-full mr-3 group-hover:bg-primary-500 transition-colors"></span>
                  View All
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-primary-500 mb-8">Contact</h4>
            <ul className="space-y-5 text-sm font-medium text-coffee-100">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 text-primary-500 shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Lagos,Nigeria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors leading-relaxed"
                >
                  Headquarters:<br />Lagos, Nigeria
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-4 text-primary-500 shrink-0" />
                <a href="tel:+2348121694422" className="hover:text-primary-500 transition-colors">
                  +234 812 169 4422
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-4 text-primary-500 shrink-0" />
                <a href="mailto:info@noahministriesinternational.org" className="hover:text-primary-500 transition-colors break-all">
                  info@noahministriesinternational.org
                </a>
              </li>
            </ul>
            <button 
              onClick={() => setActiveTab(MinistryTab.GIVING)}
              className="mt-10 w-full py-4 bg-white/5 border border-white/10 hover:bg-primary-500 hover:border-primary-500 text-white rounded-xl font-bold transition-all uppercase text-[10px] tracking-[0.25em] shadow-sm"
            >
              Partner Now
            </button>
          </div>

        </div>
        
        <div className="border-t border-coffee-800/50 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-coffee-400 text-xs font-medium tracking-wider">
          <p>&copy; {new Date().getFullYear()} Noah Ministries International. All rights reserved.</p>
          <p className="mt-3 md:mt-0">ESTABLISHED FOR THE ADVANCEMENT OF THE GOSPEL.</p>
        </div>
      </div>
    </footer>
  );
};