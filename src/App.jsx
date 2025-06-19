import React, { useState } from 'react';
import { oceanZones } from './data/oceanZones';
import { useScrollTracking } from './hooks/useScrollTracking';
import Navigation from './components/Navigation/Navigation';
import DepthIndicator from './components/DepthIndicator/DepthIndicator';
import ZoneModal from './components/ZoneModal/ZoneModal';
import HeroSection from './components/HeroSection/HeroSection';
import ZoneSection from './components/ZoneSection/ZoneSection';
import Footer from './components/Footer/Footer';
import BackgroundEffects from './components/BackgroundEffects/BackgroundEffects';

function App() {
  const { scrollY, currentDepth, currentZoneIndex } = useScrollTracking();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedZone, setSelectedZone] = useState(null);

  const currentZoneData = oceanZones[currentZoneIndex];

  const scrollToZone = (zoneIndex) => {
    const sections = document.querySelectorAll('section');
    if (sections[zoneIndex + 1]) {
      sections[zoneIndex + 1].scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      {/* Dynamic Background Effects */}
      <BackgroundEffects currentDepth={currentDepth} scrollY={scrollY} />

      {/* Fixed Navigation */}
      <Navigation
        oceanZones={oceanZones}
        currentZoneIndex={currentZoneIndex}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToZone={scrollToZone}
      />

      {/* Depth Indicator */}
      <DepthIndicator
        currentDepth={currentDepth}
        currentZoneData={currentZoneData}
      />

      {/* Zone Detail Modal */}
      <ZoneModal
        selectedZone={selectedZone}
        oceanZones={oceanZones}
        onClose={() => setSelectedZone(null)}
      />

      {/* Hero Section */}
      <HeroSection
        scrollY={scrollY}
        currentZoneData={currentZoneData}
        scrollToZone={scrollToZone}
        setSelectedZone={setSelectedZone}
      />

      {/* Ocean Zones */}
      {oceanZones.map((zone, index) => (
        <ZoneSection
          key={index}
          zone={zone}
          index={index}
          setSelectedZone={setSelectedZone}
        />
      ))}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;