import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = ({ scrollY, currentZoneData, scrollToZone, setSelectedZone }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${currentZoneData.backgroundImage})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
          Explore the Ocean's Depths
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
          Journey through the mysterious layers of our planet's oceans, from sunlit surface waters to the crushing depths of oceanic trenches.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToZone(0)}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            Begin Descent
          </button>
          <button 
            onClick={() => setSelectedZone(0)}
            className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;