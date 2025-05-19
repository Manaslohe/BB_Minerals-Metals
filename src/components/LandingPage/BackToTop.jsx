"use client";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Function to check if any popup is open by looking for common modal indicators
    const checkForPopups = () => {
      // Look for common modal/popup indicators in the DOM
      // Specifically check for ProductDetail component which appears as a modal
      const hasModalOpen = document.body.classList.contains('modal-open') || 
        document.body.hasAttribute('data-modal-open') ||
        document.querySelector('[role="dialog"]') ||
        document.querySelector('.modal.show') ||
        document.querySelector('.popup:not(.hidden)') ||
        document.querySelector('.dialog-open') ||
        document.querySelector('.product-detail-modal') ||
        // Check for the specific product detail component
        document.querySelector('.bg-gray-900.rounded-xl.p-6.sm\\:p-8');
        
      setIsPopupOpen(hasModalOpen);
    };

    // Observer to watch for changes that might indicate a popup opened/closed
    const bodyObserver = new MutationObserver(() => {
      checkForPopups();
    });

    // Start observing document body for class and attribute changes
    bodyObserver.observe(document.body, { 
      attributes: true, 
      childList: true,
      subtree: true
    });

    window.addEventListener("scroll", toggleVisibility);
    
    // Initial check
    checkForPopups();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      bodyObserver.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    const duration = 2000; // 2 seconds duration
    const start = window.pageYOffset;
    const startTime = performance.now();

    // Smoother easing function
    const easeInOutCubic = t => 
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = currentTime => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, start * (1 - easeInOutCubic(progress)));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <AnimatePresence>
      {isVisible && !isPopupOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-amber-500 text-white p-3 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300 z-40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
          title="Scroll back to top of the page"
          role="button"
        >
          <ChevronUp className="h-6 w-6" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
