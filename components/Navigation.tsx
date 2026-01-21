import React, { useState } from 'react';
import { Menu, X, Heart, Globe, PlayCircle, Layers, Mail, Home } from 'lucide-react';
import { MinistryTab } from '../types';

interface NavigationProps {
  activeTab: MinistryTab;
  setActiveTab: (tab: MinistryTab) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: MinistryTab.HOME, label: 'Home', icon: Home },
    { id: MinistryTab.ABOUT, label: 'About Us', icon: Globe },
    { id: MinistryTab.WORK, label: 'Our Work', icon: Layers },
    { id: MinistryTab.MEDIA, label: 'Media & Stories', icon: PlayCircle }, // Combined
    { id: MinistryTab.CONTACT, label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (tab: MinistryTab) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer shrink-0" onClick={() => handleNavClick(MinistryTab.HOME)}>
            <div className="bg-slate-900 p-2 rounded-lg mr-3">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <div>
              <span className="block text-2xl font-bold font-serif text-slate-900 leading-none">Noah Ministries</span>
              <span className="block text-xs text-gold-600 font-bold tracking-[0.2em] uppercase mt-1">International</span>
            </div>
          </div>

          {/* Desktop Nav Links - Centered */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-6 px-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center text-sm font-bold tracking-wide transition-colors duration-200 uppercase ${
                  activeTab === item.id || (item.id === MinistryTab.MEDIA && activeTab === MinistryTab.MEDIA_DETAIL)
                    ? 'text-gold-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Right Actions (Donate) */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => handleNavClick(MinistryTab.GIVING)}
              className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center"
            >
              <Heart className="w-4 h-4 mr-2" />
              Donate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center w-full px-4 py-4 rounded-lg text-lg font-medium ${
                  activeTab === item.id || (item.id === MinistryTab.MEDIA && activeTab === MinistryTab.MEDIA_DETAIL)
                    ? 'bg-slate-50 text-slate-900 border-l-4 border-gold-500'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-6 h-6 mr-4 text-gold-500" />
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick(MinistryTab.GIVING)}
              className="w-full mt-6 bg-slate-900 text-white px-4 py-4 rounded-lg text-center font-bold text-lg shadow-md uppercase tracking-wide"
            >
              Partner With Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};