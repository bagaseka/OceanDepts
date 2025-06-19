import React from 'react';
import { Fish, ArrowRight } from 'lucide-react';

const ZoneSection = ({ zone, index, setSelectedZone }) => {
  return (
    <section className="min-h-screen relative flex items-center">
      {/* Zone-specific overlay */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `linear-gradient(135deg, 
            ${index === 0 ? 'rgba(6, 182, 212, 0.1)' :
              index === 1 ? 'rgba(59, 130, 246, 0.1)' :
              index === 2 ? 'rgba(79, 70, 229, 0.1)' :
              index === 3 ? 'rgba(67, 56, 202, 0.1)' :
              index === 4 ? 'rgba(30, 27, 75, 0.1)' :
              'rgba(16, 185, 129, 0.1)'} 0%, 
            transparent 50%, 
            ${index === 0 ? 'rgba(6, 182, 212, 0.05)' :
              index === 1 ? 'rgba(59, 130, 246, 0.05)' :
              index === 2 ? 'rgba(79, 70, 229, 0.05)' :
              index === 3 ? 'rgba(67, 56, 202, 0.05)' :
              index === 4 ? 'rgba(30, 27, 75, 0.05)' :
              'rgba(16, 185, 129, 0.05)'} 100%)`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Zone Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent leading-tight">
                {zone.name}
              </h2>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  index === 0 ? 'bg-cyan-500/20 text-cyan-300' :
                  index === 1 ? 'bg-blue-500/20 text-blue-300' :
                  index === 2 ? 'bg-indigo-500/20 text-indigo-300' :
                  index === 3 ? 'bg-purple-500/20 text-purple-300' :
                  index === 4 ? 'bg-gray-500/20 text-gray-300' :
                  'bg-emerald-500/20 text-emerald-300'
                }`}>
                  {zone.depth}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  index === 0 ? 'bg-cyan-500/20 text-cyan-300' :
                  index === 1 ? 'bg-blue-500/20 text-blue-300' :
                  index === 2 ? 'bg-indigo-500/20 text-indigo-300' :
                  index === 3 ? 'bg-purple-500/20 text-purple-300' :
                  index === 4 ? 'bg-gray-500/20 text-gray-300' :
                  'bg-emerald-500/20 text-emerald-300'
                }`}>
                  {zone.temp}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  index === 0 ? 'bg-cyan-500/20 text-cyan-300' :
                  index === 1 ? 'bg-blue-500/20 text-blue-300' :
                  index === 2 ? 'bg-indigo-500/20 text-indigo-300' :
                  index === 3 ? 'bg-purple-500/20 text-purple-300' :
                  index === 4 ? 'bg-gray-500/20 text-gray-300' :
                  'bg-emerald-500/20 text-emerald-300'
                }`}>
                  {zone.pressure}
                </span>
              </div>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                {zone.description}
              </p>
              
              <button
                onClick={() => setSelectedZone(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg ${
                  index === 0 ? 'bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 hover:shadow-cyan-500/25' :
                  index === 1 ? 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 hover:shadow-blue-500/25' :
                  index === 2 ? 'bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 hover:shadow-indigo-500/25' :
                  index === 3 ? 'bg-gradient-to-r from-purple-600 to-gray-700 hover:from-purple-500 hover:to-gray-600 hover:shadow-purple-500/25' :
                  index === 4 ? 'bg-gradient-to-r from-gray-600 to-slate-700 hover:from-gray-500 hover:to-slate-600 hover:shadow-gray-500/25' :
                  'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 hover:shadow-emerald-500/25'
                }`}
              >
                <span>Explore Zone Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Marine Life Preview */}
          <div className="space-y-6">
            <h3 className={`text-2xl font-semibold mb-6 flex items-center ${
              index === 0 ? 'text-cyan-400' :
              index === 1 ? 'text-blue-400' :
              index === 2 ? 'text-indigo-400' :
              index === 3 ? 'text-purple-400' :
              index === 4 ? 'text-gray-400' :
              'text-emerald-400'
            }`}>
              <Fish className="h-6 w-6 mr-2" />
              Marine Life Preview
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {zone.marineLife.slice(0, 4).map((creature, creatureIndex) => (
                <div 
                  key={creatureIndex}
                  className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 hover:bg-black/40 transition-all duration-300 cursor-pointer group hover:scale-105"
                  onClick={() => setSelectedZone(index)}
                >
                  <img 
                    src={creature.image} 
                    alt={creature.name}
                    className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-3">
                    <h4 className={`text-sm font-semibold mb-1 ${
                      index === 0 ? 'text-cyan-300' :
                      index === 1 ? 'text-blue-300' :
                      index === 2 ? 'text-indigo-300' :
                      index === 3 ? 'text-purple-300' :
                      index === 4 ? 'text-gray-300' :
                      'text-emerald-300'
                    }`}>
                      {creature.name}
                    </h4>
                    <p className="text-xs text-white/60 italic">{creature.scientificName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoneSection;