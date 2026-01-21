import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MinistryAssistant } from './components/MinistryAssistant';
import { Sermons } from './components/Sermons'; // Kept for homepage preview only
import { About } from './components/About';
import { MinistryArms } from './components/MinistryArms';
import { Contact } from './components/Contact';
import { Giving } from './components/Giving';
import { Stats } from './components/Stats';
import { ImpactStories } from './components/ImpactStories';
import { FeaturedCauses } from './components/FeaturedCauses';
import { AllCauses } from './components/AllCauses';
import { CauseDetails } from './components/CauseDetails';
import { UpcomingEvents } from './components/UpcomingEvents';
import { CauseCategories } from './components/CauseCategories';
import { MediaLibrary } from './components/MediaLibrary';
import { MediaDetail } from './components/MediaDetail';
import { MinistryTab, Cause, MediaItem } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MinistryTab>(MinistryTab.HOME);
  const [targetCauseCategory, setTargetCauseCategory] = useState<string>('All');
  const [selectedCause, setSelectedCause] = useState<Cause | null>(null);
  const [selectedMediaItem, setSelectedMediaItem] = useState<MediaItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleViewCause = (cause: Cause) => {
    setSelectedCause(cause);
    setActiveTab(MinistryTab.CAUSE_DETAILS);
  };

  const handleViewMediaItem = (item: MediaItem) => {
    setSelectedMediaItem(item);
    setActiveTab(MinistryTab.MEDIA_DETAIL);
  };

  const renderContent = () => {
    switch (activeTab) {
      case MinistryTab.ABOUT:
        return <About />;
      case MinistryTab.WORK:
        return <MinistryArms />;
      case MinistryTab.CONTACT:
        return <Contact />;
      case MinistryTab.GIVING:
        return <Giving />;
      case MinistryTab.CAUSES:
        return (
          <AllCauses 
            onDonate={() => setActiveTab(MinistryTab.GIVING)} 
            initialCategory={targetCauseCategory} 
            onViewCause={handleViewCause}
          />
        );
      case MinistryTab.CAUSE_DETAILS:
        if (!selectedCause) return <AllCauses onDonate={() => setActiveTab(MinistryTab.GIVING)} onViewCause={handleViewCause} />;
        return (
          <CauseDetails 
            cause={selectedCause}
            onDonate={() => setActiveTab(MinistryTab.GIVING)}
            onBack={() => setActiveTab(MinistryTab.CAUSES)}
          />
        );
      case MinistryTab.EVENTS:
        return (
          <div className="min-h-screen">
             <div className="bg-slate-900 py-20 text-center">
                <h1 className="text-4xl font-serif font-bold text-white">Events Calendar</h1>
                <p className="text-slate-400 mt-2">Join us in the field and at our conferences</p>
             </div>
             <UpcomingEvents />
             <div className="bg-slate-50 py-12 text-center">
                <p className="text-slate-600">Want to volunteer for an event? <button onClick={() => setActiveTab(MinistryTab.CONTACT)} className="text-gold-600 font-bold hover:underline">Contact us</button></p>
             </div>
          </div>
        );
      
      // NEW UNIFIED MEDIA SECTION
      case MinistryTab.MEDIA:
        return <MediaLibrary onViewItem={handleViewMediaItem} />;
      case MinistryTab.MEDIA_DETAIL:
        if (!selectedMediaItem) return <MediaLibrary onViewItem={handleViewMediaItem} />;
        return <MediaDetail item={selectedMediaItem} onBack={() => setActiveTab(MinistryTab.MEDIA)} />;
        
      case MinistryTab.ASSISTANT:
        return (
          <div className="max-w-4xl mx-auto px-4 py-20 min-h-screen">
             <div className="mb-8 text-center">
                <h2 className="text-3xl font-serif font-bold text-slate-900">NMI Prayer Assistant</h2>
                <p className="text-slate-600">Need spiritual encouragement or have questions about our mission?</p>
             </div>
             <MinistryAssistant />
          </div>
        );
      
      case MinistryTab.HOME:
      default:
        return (
          <>
            <Hero 
              onExplore={() => setActiveTab(MinistryTab.WORK)} 
              onPartner={() => setActiveTab(MinistryTab.GIVING)} 
            />
            
            <Stats />

            <FeaturedCauses 
              onDonate={() => setActiveTab(MinistryTab.GIVING)} 
              onViewAll={() => {
                setTargetCauseCategory('All');
                setActiveTab(MinistryTab.CAUSES);
              }}
              onViewCause={handleViewCause}
            />

            {/* Reusing Sermons component for Homepage Preview only */}
            <Sermons 
              isPreview={true} 
              onViewAll={() => setActiveTab(MinistryTab.MEDIA)} 
            />

            <CauseCategories onSelectCategory={(category) => {
              setTargetCauseCategory(category);
              setActiveTab(MinistryTab.CAUSES);
            }} />

            <UpcomingEvents />

            <ImpactStories />

            {/* CTA Strip */}
            <div className="bg-slate-900 py-20">
               <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-8 md:mb-0">
                     <h2 className="text-3xl font-serif font-bold text-white mb-2">Join the Movement</h2>
                     <p className="text-slate-400 max-w-lg">We depend on God's power and your partnership to reach the unreached. Will you stand with us?</p>
                  </div>
                  <div className="flex space-x-4">
                     <button onClick={() => setActiveTab(MinistryTab.ABOUT)} className="px-8 py-4 border border-slate-600 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors uppercase tracking-wider text-sm">Learn More</button>
                     <button onClick={() => setActiveTab(MinistryTab.GIVING)} className="px-8 py-4 bg-gold-500 text-white rounded-lg font-bold hover:bg-gold-600 transition-colors uppercase tracking-wider text-sm shadow-lg shadow-gold-500/20">Donate Now</button>
                  </div>
               </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer 
        setActiveTab={setActiveTab} 
        onCategorySelect={(category) => {
          setTargetCauseCategory(category);
          setActiveTab(MinistryTab.CAUSES);
        }}
      />
    </div>
  );
};

export default App;