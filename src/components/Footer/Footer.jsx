import React from 'react';
import { Anchor, Compass, AlertTriangle, Skull, Crown, Waves } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-gray-900 to-black border-t border-emerald-500/30 py-16 relative overflow-hidden">
      {/* Mystical background effects */}
      <div className="absolute inset-0">
        {/* Floating mystical particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`mystical-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: 'rgba(16, 185, 129, 0.4)',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)',
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Depth warning lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={`warning-line-${i}`}
              className="absolute animate-pulse"
              style={{
                left: `${10 + i * 20}%`,
                top: '0%',
                width: '1px',
                height: '100%',
                background: 'linear-gradient(to bottom, transparent, rgba(239, 68, 68, 0.3), transparent)',
                animationDuration: `${3 + i}s`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Warning Banner */}
        <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-6 mb-12 backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-400 animate-pulse" />
            <h3 className="text-2xl font-bold text-red-300">END OF HUMAN EXPLORATION</h3>
            <AlertTriangle className="h-8 w-8 text-red-400 animate-pulse" />
          </div>
          <div className="text-center space-y-3">
            <p className="text-red-200 text-lg font-medium">
              🚫 MAXIMUM SAFE DEPTH EXCEEDED 🚫
            </p>
            <p className="text-red-100/80 max-w-4xl mx-auto leading-relaxed">
              Beyond this point, no human technology has ventured and returned. The crushing pressures, 
              sub-zero temperatures, and unknown forces make further exploration impossible with current technology. 
              What lies deeper remains in the realm of legend and imagination.
            </p>
            <div className="flex justify-center items-center space-x-6 mt-4 text-sm">
              <div className="flex items-center space-x-2 text-red-300">
                <Skull className="h-4 w-4" />
                <span>Pressure: 1,100+ atm</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-300">
                <Waves className="h-4 w-4" />
                <span>Temperature: Sub-zero</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-300">
                <Crown className="h-4 w-4" />
                <span>Status: Mythical</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Anchor className="h-10 w-10 text-emerald-400" />
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              Ocean Explorer
            </span>
            <Compass className="h-10 w-10 text-emerald-400" />
          </div>
          
          <p className="text-white/70 mb-8 text-lg max-w-3xl mx-auto leading-relaxed">
            You have journeyed from the sunlit surface to the deepest trenches known to science, 
            and beyond into the realm of legends. From coral reefs to mythical monsters, 
            you've explored the full spectrum of our planet's most mysterious frontier.
          </p>

          {/* Exploration Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-emerald-500/20">
              <div className="text-2xl font-bold text-emerald-400 mb-1">6</div>
              <div className="text-white/60 text-sm">Ocean Zones</div>
              <div className="text-emerald-300 text-xs">Explored</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/20">
              <div className="text-2xl font-bold text-cyan-400 mb-1">15,000m</div>
              <div className="text-white/60 text-sm">Maximum Depth</div>
              <div className="text-cyan-300 text-xs">Reached</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
              <div className="text-2xl font-bold text-blue-400 mb-1">60+</div>
              <div className="text-white/60 text-sm">Marine Species</div>
              <div className="text-blue-300 text-xs">Discovered</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
              <div className="text-2xl font-bold text-purple-400 mb-1">∞</div>
              <div className="text-white/60 text-sm">Mysteries</div>
              <div className="text-purple-300 text-xs">Remaining</div>
            </div>
          </div>

          {/* Journey Summary */}
          <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 rounded-xl p-8 mb-10 border border-emerald-500/30">
            <h4 className="text-xl font-bold text-emerald-300 mb-4 flex items-center justify-center">
              <Compass className="h-5 w-5 mr-2" />
              Your Deep Sea Journey
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <h5 className="font-semibold text-cyan-300">Scientific Zones</h5>
                <ul className="text-white/70 space-y-1">
                  <li>🌊 Sunlight Zone (0-200m)</li>
                  <li>🌅 Twilight Zone (200-1000m)</li>
                  <li>🌑 Midnight Zone (1000-4000m)</li>
                  <li>🕳️ Abyssal Zone (4000-6000m)</li>
                  <li>⚫ Hadal Zone (6000-11000m)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="font-semibold text-emerald-300">Legendary Realm</h5>
                <ul className="text-white/70 space-y-1">
                  <li>🐉 Mythical Zone (Beyond Reality)</li>
                  <li>🦈 Ancient Megalodon</li>
                  <li>🐙 The Legendary Kraken</li>
                  <li>🐋 Prehistoric Leviathans</li>
                  <li>👑 Rulers of Ancient Seas</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="font-semibold text-purple-300">Discoveries Made</h5>
                <ul className="text-white/70 space-y-1">
                  <li>🔬 Bioluminescent Life</li>
                  <li>🌡️ Temperature Gradients</li>
                  <li>💎 Hydrothermal Vents</li>
                  <li>🧊 Sub-zero Depths</li>
                  <li>✨ Mystical Phenomena</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 text-white/50 mb-8">
            <button className="hover:text-emerald-400 transition-colors flex items-center space-x-1">
              <span>🔬</span>
              <span>Research</span>
            </button>
            <button className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
              <span>🌊</span>
              <span>Conservation</span>
            </button>
            <button className="hover:text-blue-400 transition-colors flex items-center space-x-1">
              <span>📚</span>
              <span>Education</span>
            </button>
            <button className="hover:text-purple-400 transition-colors flex items-center space-x-1">
              <span>🗺️</span>
              <span>Exploration</span>
            </button>
          </div>

          {/* Final Message */}
          <div className="border-t border-emerald-500/20 pt-8">
            <p className="text-emerald-300 font-medium text-lg mb-2">
              "The ocean is the last frontier on our own planet"
            </p>
            <p className="text-white/50 text-sm mb-4">
              Thank you for diving deep into Earth's final frontier. The mysteries of the deep continue to call to future explorers.
            </p>
            <div className="text-white/40 text-sm">
              © 2024 Ocean Explorer • Journey Complete • Depths Conquered • Legends Discovered
            </div>
            
            {/* Depth Achievement Badge */}
            <div className="mt-6 inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-cyan-600 px-4 py-2 rounded-full">
              <Crown className="h-4 w-4 text-yellow-300" />
              <span className="text-white font-medium text-sm">Deep Sea Explorer - Maximum Depth Achieved</span>
              <Crown className="h-4 w-4 text-yellow-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom mystical glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;