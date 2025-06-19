import React from 'react';

const BackgroundEffects = ({ currentDepth, scrollY }) => {
  // Realistic ocean temperature calculation
  const getOceanTemperature = (depth) => {
    if (depth <= 200) return 25 - (depth * 0.05); // Surface: 25°C to 15°C
    if (depth <= 1000) return 15 - ((depth - 200) * 0.0125); // Thermocline: 15°C to 5°C
    if (depth <= 4000) return 5 - ((depth - 1000) * 0.00133); // Deep: 5°C to 1°C
    if (depth <= 11000) return 1 - ((depth - 4000) * 0.00014); // Abyssal: 1°C to 0°C
    return Math.max(-2, 0 - ((depth - 11000) * 0.0005)); // Mythical: 0°C to -2°C
  };

  const currentTemp = getOceanTemperature(currentDepth);
  
  // Calculate visual effects based on temperature and depth
  const tempRatio = (currentTemp + 2) / 27; // Normalize -2°C to 25°C to 0-1
  const depthRatio = Math.min(1, currentDepth / 11000);

  // Ice crystal effects for very cold water
  const generateIceCrystals = () => {
    if (currentTemp > 2) return null;
    
    const crystals = [];
    const crystalCount = Math.floor((2 - currentTemp) * 10);
    
    for (let i = 0; i < crystalCount; i++) {
      const size = Math.random() * 6 + 2;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const rotation = Math.random() * 360;
      
      crystals.push(
        <div
          key={`crystal-${i}`}
          className="absolute animate-float"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            background: 'linear-gradient(45deg, rgba(200, 230, 255, 0.8), rgba(150, 200, 255, 0.6))',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            transform: `rotate(${rotation}deg)`,
            animationDuration: `${15 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      );
    }
    return crystals;
  };

  // Thermal layers visualization
  const generateThermalLayers = () => {
    const layers = [];
    
    // Thermocline layer (200-1000m)
    if (currentDepth >= 200 && currentDepth <= 1000) {
      const intensity = Math.sin((currentDepth - 200) / 800 * Math.PI) * 0.3;
      layers.push(
        <div
          key="thermocline"
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, 
              rgba(255, 200, 100, ${intensity}) 0%, 
              transparent 20%, 
              rgba(100, 150, 255, ${intensity}) 80%, 
              transparent 100%)`,
            animation: 'pulse 8s ease-in-out infinite'
          }}
        />
      );
    }

    return layers;
  };

  // Pressure distortion effects
  const generatePressureDistortion = () => {
    if (currentDepth < 1000) return null;
    
    const distortionIntensity = Math.min(0.5, (currentDepth - 1000) / 10000);
    
    return (
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, 
            transparent 30%, 
            rgba(0, 0, 0, ${distortionIntensity * 0.3}) 70%, 
            rgba(0, 0, 0, ${distortionIntensity * 0.6}) 100%)`,
          filter: `blur(${distortionIntensity * 2}px)`,
          animation: 'pulse 6s ease-in-out infinite'
        }}
      />
    );
  };

  // Floating particles with temperature-based behavior
  const generateTemperatureParticles = () => {
    const particles = [];
    const particleCount = Math.min(60, Math.floor(currentDepth / 80));
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 4 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const animationDelay = Math.random() * 10;
      
      // Particle speed based on temperature (colder = slower)
      const animationDuration = 15 + (25 - currentTemp) * 2;
      
      // Particle color based on temperature
      let particleColor;
      if (currentTemp > 20) particleColor = 'rgba(255, 220, 100, 0.4)'; // Warm - golden
      else if (currentTemp > 15) particleColor = 'rgba(100, 200, 255, 0.4)'; // Cool - light blue
      else if (currentTemp > 5) particleColor = 'rgba(150, 180, 255, 0.3)'; // Cold - blue
      else if (currentTemp > 0) particleColor = 'rgba(200, 220, 255, 0.3)'; // Very cold - pale blue
      else particleColor = 'rgba(230, 240, 255, 0.4)'; // Freezing - almost white
      
      particles.push(
        <div
          key={`temp-particle-${i}`}
          className="absolute animate-float"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: particleColor,
            borderRadius: '50%',
            animationDelay: `${animationDelay}s`,
            animationDuration: `${animationDuration}s`,
            boxShadow: currentTemp < 5 ? `0 0 ${size * 2}px ${particleColor}` : 'none'
          }}
        />
      );
    }
    return particles;
  };

  // Bioluminescent effects with temperature sensitivity
  const generateColdBioluminescence = () => {
    if (currentDepth < 200) return null;
    
    const glows = [];
    const glowCount = Math.min(25, Math.floor((currentDepth - 200) / 150));
    
    for (let i = 0; i < glowCount; i++) {
      const size = Math.random() * 40 + 15;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const animationDelay = Math.random() * 8;
      
      // Bioluminescence intensity increases in colder water
      const intensity = Math.max(0.2, (25 - currentTemp) / 25);
      
      let glowColor;
      if (currentTemp > 15) glowColor = `rgba(0, 255, 255, ${intensity * 0.3})`;
      else if (currentTemp > 5) glowColor = `rgba(100, 150, 255, ${intensity * 0.4})`;
      else if (currentTemp > 0) glowColor = `rgba(150, 100, 255, ${intensity * 0.4})`;
      else glowColor = `rgba(100, 255, 200, ${intensity * 0.5})`; // Mythical cold glow
      
      glows.push(
        <div
          key={`cold-glow-${i}`}
          className="absolute animate-pulse"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            borderRadius: '50%',
            animationDelay: `${animationDelay}s`,
            animationDuration: `${3 + (25 - currentTemp) * 0.2}s`
          }}
        />
      );
    }
    return glows;
  };

  // Water caustics with temperature effects
  const TemperatureCaustics = () => {
    if (currentDepth > 200) return null;
    
    const warmth = Math.max(0, (currentTemp - 15) / 10);
    
    return (
      <div 
        className="absolute inset-0"
        style={{
          opacity: 0.2 + warmth * 0.3,
          background: `
            radial-gradient(ellipse at 20% 50%, transparent 20%, rgba(255,${200 + warmth * 55},100, 0.1) 21%, rgba(255,${200 + warmth * 55},100, 0.1) 25%, transparent 25.5%),
            radial-gradient(ellipse at 80% 30%, transparent 20%, rgba(255,${200 + warmth * 55},100, 0.1) 21%, rgba(255,${200 + warmth * 55},100, 0.1) 25%, transparent 25.5%)
          `,
          backgroundSize: '120px 80px, 100px 60px',
          animation: `caustics ${8 - warmth * 2}s ease-in-out infinite`
        }}
      />
    );
  };

  // Convection currents for temperature differences
  const generateConvectionCurrents = () => {
    if (currentDepth < 100 || currentDepth > 1000) return null;
    
    const currents = [];
    const currentCount = 3;
    
    for (let i = 0; i < currentCount; i++) {
      currents.push(
        <div
          key={`current-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 30}%`,
            top: '0%',
            width: '2px',
            height: '100%',
            background: `linear-gradient(to bottom, 
              rgba(255, 200, 100, 0.1) 0%, 
              transparent 30%, 
              rgba(100, 150, 255, 0.1) 70%, 
              transparent 100%)`,
            animation: `float ${10 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`
          }}
        />
      );
    }
    return currents;
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Temperature-based gradient backgrounds */}
      <div 
        className="absolute inset-0 transition-all duration-2000"
        style={{
          background: `linear-gradient(to bottom, 
            hsl(${180 + tempRatio * 60}, ${70 + tempRatio * 30}%, ${50 + tempRatio * 30}%), 
            hsl(${200 + tempRatio * 40}, ${60 + tempRatio * 20}%, ${30 + tempRatio * 20}%), 
            hsl(${220 + tempRatio * 20}, ${50 + tempRatio * 10}%, ${10 + tempRatio * 10}%))`
        }}
      />

      {/* Temperature caustics for warm surface water */}
      <TemperatureCaustics />

      {/* Thermal layers */}
      <div className="absolute inset-0">
        {generateThermalLayers()}
      </div>

      {/* Convection currents */}
      <div className="absolute inset-0">
        {generateConvectionCurrents()}
      </div>

      {/* Temperature-sensitive particles */}
      <div className="absolute inset-0">
        {generateTemperatureParticles()}
      </div>

      {/* Cold-enhanced bioluminescence */}
      <div className="absolute inset-0">
        {generateColdBioluminescence()}
      </div>

      {/* Ice crystals for freezing water */}
      <div className="absolute inset-0">
        {generateIceCrystals()}
      </div>

      {/* Pressure distortion effects */}
      {generatePressureDistortion()}

      {/* Deep water darkness overlay */}
      {currentDepth > 200 && (
        <div 
          className="absolute inset-0 transition-opacity duration-2000"
          style={{
            background: `radial-gradient(circle at 50% 0%, 
              transparent 0%, 
              rgba(0, 0, 0, ${Math.min(0.8, depthRatio * 0.9)}) 100%)`,
            opacity: Math.min(1, (currentDepth - 200) / 1000)
          }}
        />
      )}

      {/* Extreme cold effects for mythical zone */}
      {currentTemp < 0 && (
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(200, 230, 255, 0.1) 0%, transparent 50%)',
              animationDuration: '4s'
            }}
          />
          {[...Array(8)].map((_, i) => (
            <div
              key={`frost-${i}`}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: '3px',
                height: '20px',
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.6), transparent)',
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDuration: `${20 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Temperature indicator overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-1 transition-all duration-1000"
        style={{
          background: `linear-gradient(to right, 
            ${currentTemp > 20 ? '#ff6b35' : 
              currentTemp > 15 ? '#ffa500' : 
              currentTemp > 10 ? '#ffff00' : 
              currentTemp > 5 ? '#00bfff' : 
              currentTemp > 0 ? '#4169e1' : '#e6e6fa'} 0%, 
            transparent 100%)`,
          opacity: 0.3
        }}
      />
    </div>
  );
};

export default BackgroundEffects;