
import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MissionSection } from './components/MissionSection';
import { WhyJapaneseWineSection } from './components/WhyJapaneseWineSection';
import { BusinessActivitiesSection } from './components/BusinessActivitiesSection';
import { FounderTeaserSection } from './components/FounderTeaserSection';
import { FounderSection } from './components/FounderSection';
import { CorporateInfoSection } from './components/CorporateInfoSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton'; // Added

const App: React.FC = () => {
  return (
    <div className={`font-sans bg-bg text-text min-h-screen transition-colors duration-500 overflow-x-hidden`}>
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <WhyJapaneseWineSection />
        <BusinessActivitiesSection />
        <FounderTeaserSection />
        <FounderSection />
        <ContactSection /> 
        <CorporateInfoSection />
      </main>
      <Footer />
      <ScrollToTopButton /> {/* Added */}
    </div>
  );
};

export default App;