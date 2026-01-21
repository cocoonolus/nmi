import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { MinistryTab } from '../types';

interface NavigationProps {
  activeTab: MinistryTab;
  setActiveTab: (tab: MinistryTab) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: MinistryTab.HOME, label: 'Home' },
    { id: MinistryTab.ABOUT, label: 'About Us' },
    { id: MinistryTab.WORK, label: 'Our Work' },
    { id: MinistryTab.MEDIA, label: 'Media & Stories' },
    { id: MinistryTab.CONTACT, label: 'Contact' },
  ];

  const handleNavClick = (tab: MinistryTab) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  // Using the official logo URL from the organization's website
  const logoUrl = "https://noahministriesinternational.org/wp-content/uploads/2024/02/NMI-LOGO-1.png";

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-coffee-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer shrink-0" onClick={() => handleNavClick(MinistryTab.HOME)}>
            <img 
              src={logoUrl} 
              alt="Noah Ministries International Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav Links - Centered */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-8 px-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 text-sm font-bold tracking-widest transition-all duration-300 uppercase group ${
                  activeTab === item.id || (item.id === MinistryTab.MEDIA && activeTab === MinistryTab.MEDIA_DETAIL)
                    ? 'text-primary-500'
                    : 'text-coffee-700 hover:text-primary-500'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 transform origin-left transition-transform duration-300 ${
                  activeTab === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Desktop Right Actions (Donate) */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => handleNavClick(MinistryTab.GIVING)}
              className="bg-primary-500 hover:bg-primary-900 text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-lg shadow-primary-500/20 flex items-center"
            >
              <Heart className="w-4 h-4 mr-2 fill-current" />
              Partner
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-coffee-800 hover:text-primary-500 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-coffee-100 animate-fade-in-down">
          <div className="px-4 pt-2 pb-8 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center w-full px-6 py-4 rounded-xl text-base font-bold tracking-wider ${
                  activeTab === item.id || (item.id === MinistryTab.MEDIA && activeTab === MinistryTab.MEDIA_DETAIL)
                    ? 'bg-coffee-50 text-primary-500'
                    : 'text-coffee-600 hover:bg-coffee-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-6 pt-4">
              <button
                onClick={() => handleNavClick(MinistryTab.GIVING)}
                className="w-full bg-primary-900 text-white px-4 py-4 rounded-xl text-center font-bold text-sm shadow-md uppercase tracking-[0.2em]"
              >
                Support the Mission
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};