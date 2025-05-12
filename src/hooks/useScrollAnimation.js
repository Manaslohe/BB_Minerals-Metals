import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = (elementId, threshold = 0.15, rootMargin = "-50px") => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element enters viewport, make it visible and record that animation has occurred
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
        }
        // No else clause to remove the "scroll-out" animation
      },
      { threshold, rootMargin }
    );

    // Target the element by ID or use the ref
    const currentElement = elementId ? document.getElementById(elementId) : ref.current;
    
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementId, threshold, rootMargin]);

  return { isVisible, hasAnimated, ref };
};
