import { useState, useEffect } from 'react';
import { calculateDepth, getCurrentZone } from '../utils/oceanUtils';

export const useScrollTracking = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentDepth, setCurrentDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const depth = calculateDepth(newScrollY, maxScroll);
      setCurrentDepth(depth);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentZoneIndex = getCurrentZone(currentDepth);

  return {
    scrollY,
    currentDepth,
    currentZoneIndex
  };
};