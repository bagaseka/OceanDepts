import React, { useState } from 'react';
import { Gauge, Thermometer, Sun, Waves, Snowflake, Monitor, ChevronDown, ChevronUp } from 'lucide-react';

const DepthIndicator = ({ currentDepth, currentZoneData }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  // Realistic ocean temperature calculation
  const getOceanTemperature = (depth) => {
    if (depth <= 200) return 25 - (depth * 0.05); // Surface: 25°C to 15°C
    if (depth <= 1000) return 15 - ((depth - 200) * 0.0125); // Thermocline: 15°C to 5°C
    if (depth <= 4000) return 5 - ((depth - 1000) * 0.00133); // Deep: 5°C to 1°C
    if (depth <= 11000) return 1 - ((depth - 4000) * 0.00014); // Abyssal: 1°C to 0°C
    return Math.max(-2, 0 - ((depth - 11000) * 0.0005)); // Mythical: 0°C to -2°C
  };

  const currentTemp = getOceanTemperature(currentDepth);
  const maxDepth = 15000;
  const pressureFill = (currentDepth / maxDepth) * 100;
  
  // Get zone-specific colors with temperature influence
  const getZoneColor = (depth, temp) => {
    const baseColor = 
      depth < 200 ? 'text-cyan-400' :
      depth < 1000 ? 'text-blue-400' :
      depth < 4000 ? 'text-indigo-400' :
      depth < 6000 ? 'text-purple-400' :
      depth < 11000 ? 'text-gray-400' :
      'text-emerald-400';
    
    // Add temperature tint
    if (temp < 0) return 'text-blue-100';
    if (temp < 5) return 'text-blue-200';
    return baseColor;
  };

  const getZoneBgColor = (depth, temp) => {
    const baseColor = 
      depth < 200 ? 'bg-cyan-500/20' :
      depth < 1000 ? 'bg-blue-500/20' :
      depth < 4000 ? 'bg-indigo-500/20' :
      depth < 6000 ? 'bg-purple-500/20' :
      depth < 11000 ? 'bg-gray-500/20' :
      'bg-emerald-500/20';
    
    // Add cold effect
    if (temp < 0) return 'bg-blue-100/30';
    if (temp < 5) return 'bg-blue-200/25';
    return baseColor;
  };

  // Temperature status
  const getTemperatureStatus = (temp) => {
    if (temp > 20) return { status: 'Warm', color: 'text-orange-400', icon: '🌡️' };
    if (temp > 15) return { status: 'Cool', color: 'text-yellow-400', icon: '🌡️' };
    if (temp > 10) return { status: 'Cold', color: 'text-blue-400', icon: '❄️' };
    if (temp > 5) return { status: 'Very Cold', color: 'text-blue-300', icon: '❄️' };
    if (temp > 0) return { status: 'Freezing', color: 'text-blue-200', icon: '🧊' };
    return { status: 'Sub-Zero', color: 'text-blue-100', icon: '🧊' };
  };

  const tempStatus = getTemperatureStatus(currentTemp);

  // Pressure calculation (approximately 1 atm per 10m)
  const pressureAtm = Math.round((currentDepth / 10) + 1);

  return (
    <>
      {/* Mobile Layout (Portrait) - Minimizable */}
      <div className={`fixed top-16 right-2 z-40 bg-black/60 backdrop-blur-md rounded-lg border border-white/30 shadow-2xl transition-all duration-300 sm:hidden ${
        isMinimized ? 'w-20' : 'w-36'
      }`}>
        {/* Header with minimize button */}
        <div className="flex items-center justify-between p-2 border-b border-white/20">
          <div className="flex items-center space-x-1">
            <Monitor className={`h-3 w-3 ${getZoneColor(currentDepth, currentTemp)}`} />
            {!isMinimized && <span className="text-xs font-medium text-white">Monitor</span>}
          </div>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white/70 hover:text-white transition-colors touch-manipulation p-1"
          >
            {isMinimized ? <ChevronDown className="h-3 w-3" /> : <ChevronUp className="h-3 w-3" />}
          </button>
        </div>

        {/* Minimized View */}
        {isMinimized && (
          <div className="p-2">
            {/* Compact Depth Display */}
            <div className={`text-xs font-bold ${getZoneColor(currentDepth, currentTemp)} mb-1 text-center`}>
              {currentDepth > 1000 ? `${(currentDepth/1000).toFixed(1)}km` : `${currentDepth}m`}
            </div>
            
            {/* Zone Indicator */}
            <div className={`w-full h-1 rounded ${getZoneBgColor(currentDepth, currentTemp)} mb-1`} />
            
            {/* Temperature Icon */}
            <div className="text-center">
              <span className={`text-sm ${tempStatus.color}`}>{tempStatus.icon}</span>
            </div>
          </div>
        )}

        {/* Expanded View */}
        {!isMinimized && (
          <div className="p-2">
            {/* Compact Depth Display */}
            <div className={`text-sm font-bold ${getZoneColor(currentDepth, currentTemp)} mb-1`}>
              {currentDepth.toLocaleString()}m
            </div>
            
            {/* Compact Zone Name */}
            <div className={`text-xs px-1 py-0.5 rounded ${getZoneBgColor(currentDepth, currentTemp)} ${getZoneColor(currentDepth, currentTemp)} font-medium mb-2 text-center`}>
              {currentZoneData.name.split(' ')[0]}
            </div>

            {/* Compact Temperature */}
            <div className="mb-2 p-1.5 bg-black/30 rounded">
              <div className="flex items-center justify-between mb-1">
                <Thermometer className="h-3 w-3 text-white/70" />
                <span className={`text-xs ${tempStatus.color} font-medium`}>
                  {currentTemp.toFixed(0)}°C
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1">
                <div 
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentTemp > 20 ? 'bg-orange-400' :
                    currentTemp > 15 ? 'bg-yellow-400' :
                    currentTemp > 10 ? 'bg-blue-400' :
                    currentTemp > 5 ? 'bg-blue-300' :
                    currentTemp > 0 ? 'bg-blue-200' : 'bg-blue-100'
                  }`}
                  style={{ width: `${Math.max(0, Math.min(100, ((currentTemp + 2) / 27) * 100))}%` }}
                />
              </div>
            </div>

            {/* Compact Pressure */}
            <div className="mb-2">
              <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                <Gauge className="h-3 w-3" />
                <span>{pressureAtm}atm</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1">
                <div 
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentDepth < 200 ? 'bg-cyan-400' :
                    currentDepth < 1000 ? 'bg-blue-400' :
                    currentDepth < 4000 ? 'bg-indigo-400' :
                    currentDepth < 6000 ? 'bg-purple-400' :
                    currentDepth < 11000 ? 'bg-gray-400' : 'bg-emerald-400'
                  }`}
                  style={{ width: `${pressureFill}%` }}
                />
              </div>
            </div>

            {/* Compact Status Icons */}
            <div className="flex justify-between text-xs">
              <span className={`${getZoneColor(currentDepth, currentTemp)}`}>
                {currentZoneData.light === "No sunlight" ? "🌑" : 
                 currentZoneData.light === "1% sunlight" ? "🌅" : "☀️"}
              </span>
              <span className={tempStatus.color}>{tempStatus.icon}</span>
              <span className="text-white/60">
                {currentTemp < 5 ? "🧊" : "🌊"}
              </span>
            </div>

            {/* Extreme Cold Warning */}
            {currentTemp < 2 && (
              <div className="mt-2 p-1 bg-blue-500/20 border border-blue-400/30 rounded text-center">
                <span className="text-xs font-medium text-blue-200 flex items-center justify-center space-x-1">
                  <Snowflake className="h-3 w-3" />
                  <span>Extreme Cold</span>
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Landscape Layout - Minimizable */}
      <div className={`fixed top-2 right-2 z-40 bg-black/60 backdrop-blur-md rounded-lg border border-white/30 shadow-2xl transition-all duration-300 hidden landscape:block sm:hidden ${
        isMinimized ? 'w-16' : 'w-auto'
      }`}>
        {/* Minimized Landscape View */}
        {isMinimized && (
          <div className="p-2">
            <button
              onClick={() => setIsMinimized(false)}
              className="flex flex-col items-center space-y-1 text-white/70 hover:text-white transition-colors touch-manipulation"
            >
              <Monitor className={`h-4 w-4 ${getZoneColor(currentDepth, currentTemp)}`} />
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>
        )}

        {/* Expanded Landscape View */}
        {!isMinimized && (
          <div className="p-2">
            <div className="flex items-center space-x-4">
              {/* Minimize Button */}
              <button
                onClick={() => setIsMinimized(true)}
                className="text-white/70 hover:text-white transition-colors touch-manipulation"
              >
                <ChevronUp className="h-3 w-3" />
              </button>

              {/* Depth */}
              <div className="text-center">
                <div className={`text-sm font-bold ${getZoneColor(currentDepth, currentTemp)}`}>
                  {currentDepth.toLocaleString()}m
                </div>
                <div className={`text-xs px-1 py-0.5 rounded ${getZoneBgColor(currentDepth, currentTemp)} ${getZoneColor(currentDepth, currentTemp)}`}>
                  {currentZoneData.name.split(' ')[0]}
                </div>
              </div>

              {/* Temperature */}
              <div className="text-center">
                <div className={`text-sm font-bold ${tempStatus.color}`}>
                  {currentTemp.toFixed(0)}°C
                </div>
                <div className="text-xs text-white/60">Temp</div>
              </div>

              {/* Pressure */}
              <div className="text-center">
                <div className="text-sm font-bold text-white">
                  {pressureAtm}
                </div>
                <div className="text-xs text-white/60">atm</div>
              </div>

              {/* Status Icons */}
              <div className="flex space-x-1">
                <span className={getZoneColor(currentDepth, currentTemp)}>
                  {currentZoneData.light === "No sunlight" ? "🌑" : 
                   currentZoneData.light === "1% sunlight" ? "🌅" : "☀️"}
                </span>
                <span className={tempStatus.color}>{tempStatus.icon}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop/Tablet Layout - Always Expanded */}
      <div className="fixed top-16 sm:top-20 right-2 sm:right-4 z-40 bg-black/50 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-4 border border-white/30 shadow-2xl w-48 sm:w-auto hidden sm:block">
        <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-3">
          <Waves className={`h-4 w-4 sm:h-5 sm:w-5 ${getZoneColor(currentDepth, currentTemp)}`} />
          <span className="text-xs sm:text-sm font-medium text-white">Ocean Monitor</span>
        </div>
        
        {/* Depth Display */}
        <div className={`text-lg sm:text-2xl font-bold ${getZoneColor(currentDepth, currentTemp)} mb-1`}>
          {currentDepth.toLocaleString()}m
        </div>
        
        {/* Zone Name */}
        <div className={`text-xs px-2 py-1 rounded-full ${getZoneBgColor(currentDepth, currentTemp)} ${getZoneColor(currentDepth, currentTemp)} font-medium mb-2 sm:mb-3 text-center`}>
          {currentZoneData.name.split(' ')[0]}
        </div>

        {/* Temperature Display */}
        <div className="mb-2 sm:mb-3 p-2 bg-black/30 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-white/70 flex items-center space-x-1">
              <Thermometer className="h-3 w-3" />
              <span className="hidden sm:inline">Temperature</span>
              <span className="sm:hidden">Temp</span>
            </span>
            <span className={`text-xs ${tempStatus.color} font-medium`}>
              {tempStatus.status}
            </span>
          </div>
          <div className={`text-sm sm:text-lg font-bold ${tempStatus.color} flex items-center space-x-1`}>
            <span>{currentTemp.toFixed(1)}°C</span>
            <span>{tempStatus.icon}</span>
          </div>
          
          {/* Temperature bar */}
          <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
            <div 
              className={`h-1 rounded-full transition-all duration-300 ${
                currentTemp > 20 ? 'bg-orange-400' :
                currentTemp > 15 ? 'bg-yellow-400' :
                currentTemp > 10 ? 'bg-blue-400' :
                currentTemp > 5 ? 'bg-blue-300' :
                currentTemp > 0 ? 'bg-blue-200' : 'bg-blue-100'
              }`}
              style={{ width: `${Math.max(0, Math.min(100, ((currentTemp + 2) / 27) * 100))}%` }}
            />
          </div>
        </div>

        {/* Pressure Bar */}
        <div className="mb-3 sm:mb-4">
          <div className="flex items-center justify-between text-xs text-white/60 mb-1">
            <span className="flex items-center space-x-1">
              <Gauge className="h-3 w-3" />
              <span>Pressure</span>
            </span>
            <span>{pressureAtm} atm</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                currentDepth < 200 ? 'bg-cyan-400' :
                currentDepth < 1000 ? 'bg-blue-400' :
                currentDepth < 4000 ? 'bg-indigo-400' :
                currentDepth < 6000 ? 'bg-purple-400' :
                currentDepth < 11000 ? 'bg-gray-400' : 'bg-emerald-400'
              }`}
              style={{ width: `${pressureFill}%` }}
            />
          </div>
        </div>
        
        {/* Environmental Data */}
        <div className="space-y-1 sm:space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="flex items-center space-x-1 text-white/70">
              <Sun className="h-3 w-3" />
              <span>Light:</span>
            </span>
            <span className={`${getZoneColor(currentDepth, currentTemp)} text-xs`}>{currentZoneData.light}</span>
          </div>
          
          {/* Water conditions */}
          <div className="flex items-center justify-between">
            <span className="flex items-center space-x-1 text-white/70">
              {currentTemp < 5 ? <Snowflake className="h-3 w-3" /> : <Waves className="h-3 w-3" />}
              <span>Conditions:</span>
            </span>
            <span className={`${tempStatus.color} text-xs`}>
              {currentTemp < 0 ? 'Sub-zero' :
               currentTemp < 5 ? 'Near freezing' :
               currentTemp < 15 ? 'Cold water' :
               'Temperate'}
            </span>
          </div>
        </div>

        {/* Depth Milestones */}
        <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10">
          <div className="text-xs text-white/50 mb-2">Next Milestone:</div>
          <div className="text-xs text-white/70">
            {currentDepth < 200 && "Thermocline at 200m"}
            {currentDepth >= 200 && currentDepth < 1000 && "Deep Water at 1,000m"}
            {currentDepth >= 1000 && currentDepth < 4000 && "Abyssal Zone at 4,000m"}
            {currentDepth >= 4000 && currentDepth < 6000 && "Hadal Zone at 6,000m"}
            {currentDepth >= 6000 && currentDepth < 11000 && "Mythical Depths at 11,000m"}
            {currentDepth >= 11000 && "Maximum Depth Reached!"}
          </div>
        </div>

        {/* Temperature warning for extreme conditions */}
        {currentTemp < 2 && (
          <div className="mt-2 sm:mt-3 p-2 bg-blue-500/20 border border-blue-400/30 rounded-lg">
            <div className="flex items-center space-x-2">
              <Snowflake className="h-3 w-3 sm:h-4 sm:w-4 text-blue-200" />
              <span className="text-xs font-medium text-blue-200">
                Extreme Cold
              </span>
            </div>
            <p className="text-xs text-blue-100 mt-1">
              Water approaching freezing point
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default DepthIndicator;
