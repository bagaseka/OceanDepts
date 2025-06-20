import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = ({ scrollY, currentZoneData, scrollToZone, setSelectedZone }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${currentZoneData.backgroundImage})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent leading-tight">
          Explore the Ocean's Depths
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 leading-relaxed px-4">
          Journey through the mysterious layers of our planet's oceans, from sunlit surface waters to the crushing depths of oceanic trenches.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <button 
            onClick={() => scrollToZone(0)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-base sm:text-lg hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 touch-manipulation"
          >
            Begin Descent
          </button>
          <button 
            onClick={() => setSelectedZone(0)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 rounded-full font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 touch-manipulation"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;
