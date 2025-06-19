export const getCurrentZone = (depth) => {
  if (depth < 200) return 0;
  if (depth < 1000) return 1;
  if (depth < 4000) return 2;
  if (depth < 6000) return 3;
  if (depth < 11000) return 4;
  return 5; // Mythical zone
};

export const calculateDepth = (scrollY, maxScroll) => {
  const totalDepth = 15000; // Extended to include mythical zone
  return Math.round((scrollY / maxScroll) * totalDepth);
};

export const getZoneBackgroundStyle = (index) => {
  const backgrounds = [
    'rgba(6, 182, 212, 0.8)', // Sunlight - cyan
    'rgba(59, 130, 246, 0.8)', // Twilight - blue
    'rgba(79, 70, 229, 0.8)', // Midnight - indigo
    'rgba(67, 56, 202, 0.8)', // Abyssal - purple
    'rgba(30, 27, 75, 0.9)', // Hadal - dark
    'rgba(16, 185, 129, 0.8)' // Mythical - emerald
  ];

  return {
    background: `linear-gradient(to bottom, 
      ${backgrounds[index]} 0%, 
      ${index === 4 ? 'rgba(15, 23, 42, 0.95)' : index === 5 ? 'rgba(6, 78, 59, 0.9)' : 'rgba(30, 27, 75, 0.8)'} 100%)`
  };
};