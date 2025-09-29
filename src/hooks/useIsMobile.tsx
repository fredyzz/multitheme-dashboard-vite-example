import { useLayoutEffect, useState } from 'react';

// Simple debounce function to avoid lodash dependency
const debounce = <T extends unknown[]>(
  func: (...args: T) => void, 
  delay: number
) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: T) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const debouncedUpdateSize = debounce(updateSize, 250);
    window.addEventListener('resize', debouncedUpdateSize);
    
    // Initial check
    updateSize();
    
    return (): void => window.removeEventListener('resize', debouncedUpdateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
