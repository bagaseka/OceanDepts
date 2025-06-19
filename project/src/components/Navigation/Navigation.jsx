import React from 'react';
import { Waves, Menu, X } from 'lucide-react';

const Navigation = ({ 
  oceanZones, 
  currentZoneIndex, 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollToZone 
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold">Ocean Explorer</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {oceanZones.map((zone, index) => (
              <button
                key={index}
                onClick={() => scrollToZone(index)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  currentZoneIndex === index
                    ? 'bg-cyan-500/30 text-cyan-300'
                    : 'hover:bg-white/10 text-white/80 hover:text-white'
                }`}
              >
                {zone.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-2 space-y-1">
            {oceanZones.map((zone, index) => (
              <button
                key={index}
                onClick={() => scrollToZone(index)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  currentZoneIndex === index
                    ? 'bg-cyan-500/30 text-cyan-300'
                    : 'hover:bg-white/10 text-white/80 hover:text-white'
                }`}
              >
                {zone.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;