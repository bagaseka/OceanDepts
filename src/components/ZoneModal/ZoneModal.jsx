import React from 'react';
import { X, Fish, Compass, Calendar, User, Info, Thermometer, Gauge, Sun } from 'lucide-react';

const ZoneModal = ({ selectedZone, oceanZones, onClose }) => {
  if (selectedZone === null) return null;

  const zone = oceanZones[selectedZone];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
      <div className="bg-gray-900 rounded-lg sm:rounded-xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className="p-4 sm:p-6 border-b border-gray-700 sticky top-0 bg-gray-900 z-10">
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{zone.name}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 sm:px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-300 text-xs sm:text-sm">
                  {zone.depth}
                </span>
                <span className="px-2 sm:px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-xs sm:text-sm">
                  {zone.temp}
                </span>
                <span className="px-2 sm:px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-xs sm:text-sm">
                  {zone.pressure}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors touch-manipulation flex-shrink-0"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{zone.description}</p>
          
          {/* Environmental Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg text-center">
              <Thermometer className="h-6 w-6 sm:h-8 sm:w-8 text-red-400 mx-auto mb-2" />
              <h4 className="text-cyan-300 font-semibold mb-1 text-sm sm:text-base">Temperature</h4>
              <p className="text-white text-sm sm:text-lg">{zone.temp}</p>
            </div>
            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg text-center">
              <Gauge className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mx-auto mb-2" />
              <h4 className="text-cyan-300 font-semibold mb-1 text-sm sm:text-base">Pressure</h4>
              <p className="text-white text-sm sm:text-lg">{zone.pressure}</p>
            </div>
            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg text-center">
              <Sun className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 mx-auto mb-2" />
              <h4 className="text-cyan-300 font-semibold mb-1 text-sm sm:text-base">Light</h4>
              <p className="text-white text-sm sm:text-lg">{zone.light}</p>
            </div>
            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg text-center">
              <Fish className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mx-auto mb-2" />
              <h4 className="text-cyan-300 font-semibold mb-1 text-sm sm:text-base">Species</h4>
              <p className="text-white text-sm sm:text-lg">{zone.marineLife.length}+</p>
            </div>
          </div>

          {/* Marine Life */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <Fish className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-cyan-400" />
              Marine Life
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {zone.marineLife.map((creature, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
                  <img 
                    src={creature.image} 
                    alt={creature.name}
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="p-3 sm:p-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-1">{creature.name}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm italic mb-2 sm:mb-3">{creature.scientificName}</p>
                    <p className="text-gray-300 text-sm mb-3 sm:mb-4 leading-relaxed">{creature.description}</p>
                    
                    <div className="space-y-1 sm:space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Size:</span>
                        <span className="text-cyan-300">{creature.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Habitat:</span>
                        <span className="text-cyan-300">{creature.habitat}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-gray-900 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <Info className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-yellow-400 text-xs font-semibold">Fun Fact:</span>
                          <p className="text-gray-300 text-xs mt-1 leading-relaxed">{creature.funFact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <Compass className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-cyan-400" />
              Key Features
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {zone.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-800 p-3 sm:p-4 rounded-lg">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Historical Discoveries */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <Calendar className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-cyan-400" />
              Historical Discoveries
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {zone.history.map((event, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 sm:p-6 border-l-4 border-cyan-400">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3">
                    <span className="text-cyan-300 font-bold text-lg mb-1 sm:mb-0">{event.year}</span>
                    {event.discoverer && (
                      <span className="text-gray-400 text-sm flex items-center">
                        <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {event.discoverer}
                      </span>
                    )}
                  </div>
                  <h4 className="text-white font-semibold text-base sm:text-lg mb-2">{event.event}</h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{event.significance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoneModal;
