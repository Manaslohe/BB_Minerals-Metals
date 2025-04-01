import { useEffect, useState, useRef } from 'react';

export const useScrollAnimation = (elementId) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    let checkElementInterval;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
    };

    const setupObserver = () => {
      try {
        observerRef.current = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(entry.isIntersecting);
            if (entry.isIntersecting) {
              setHasAnimated(true);
            }
          },
          { 
            threshold: [0.05], // Reduced threshold for quicker detection
            rootMargin: '0px'
          }
        );

        const currentElement = document.getElementById(elementId);
        if (currentElement && observerRef.current) {
          console.log(`Observing element: ${elementId}`);
          observerRef.current.observe(currentElement);
        } else {
          console.warn(`Element ${elementId} not found or observer not initialized`);
        }
      } catch (error) {
        console.error('Error setting up observer:', error);
      }
    };

    // Initial check for element with retry
    checkElementInterval = setInterval(() => {
      const element = document.getElementById(elementId);
      if (element) {
        clearInterval(checkElementInterval);
        setupObserver();
      }
    }, 50); // Reduced from 100ms to 50ms

    // Clear interval after 2 seconds if element is not found
    setTimeout(() => {
      if (checkElementInterval) {
        clearInterval(checkElementInterval);
        console.warn(`Element ${elementId} not found after timeout`);
      }
    }, 2000); // Reduced from 5000ms to 2000ms

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      if (checkElementInterval) clearInterval(checkElementInterval);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementId]);

  return { isVisible, hasAnimated, scrollDirection };
};
