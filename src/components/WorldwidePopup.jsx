import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Add CSS to hide scrollbars
const noScrollbarStyles = {
  scrollbarWidth: 'none',           /* Firefox */
  msOverflowStyle: 'none',          /* IE and Edge */
  WebkitOverflowScrolling: 'touch', /* Safari */
};

// Make sure this is defined as a proper function component
const WorldwidePopup = ({ className, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia("(orientation: landscape)").matches
  );

  useEffect(() => {
    // Add a slight delay to trigger the animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setAnimationComplete(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleOrientationChange = (e) => setIsLandscape(e.matches);
    const mediaQuery = window.matchMedia("(orientation: landscape)");
    mediaQuery.addListener(handleOrientationChange);
    return () => mediaQuery.removeListener(handleOrientationChange);
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleAnimationComplete = () => {
    if (isOpen) {
      setAnimationComplete(true);
    } else {
      setAnimationComplete(false);
    }
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const popupVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: 10,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 400,
        duration: 0.4
      } 
    },
    exit: { 
      opacity: 0,
      scale: 0.95,
      y: 10,
      transition: { duration: 0.25, ease: "easeInOut" }
    }
  };

  const closePopup = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleClose();
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Trigger Button */}
      <button 
        onClick={handleOpen}
        className={`sticky top-0 z-[1000] bg-amber-500 text-gray-900 font-semibold py-2.5 px-5 rounded-lg 
                  flex items-center gap-3 hover:bg-amber-400 transform hover:scale-[1.02] 
                  transition-all duration-300 ease-out active:scale-95 shadow-lg shadow-amber-500/20
                  ${isOpen ? 'bg-amber-600 hover:bg-amber-600' : ''}`}
      >
        <motion.img 
          src="/icons/down.png" 
          alt="arrow" 
          className="w-5 h-5"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <span className="font-medium">BBMAM WORLDWIDE</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>       
            {/* Popup Container with framer-motion */}
            <motion.div 
              className={`
                fixed z-[999]
                ${window.innerWidth >= 1024 
                  ? 'fixed right-4 top-20 w-[680px]' 
                  : window.innerWidth >= 768 
                    ? `fixed ${isLandscape ? 'right-4 top-20 w-[70vw]' : 'right-4 top-20 w-[90vw]'} max-w-[680px]`
                    : 'left-4 right-4 top-[50%] -translate-y-1/2 w-auto'
                }
              `}
              style={{
                maxHeight: window.innerWidth >= 768 
                  ? isLandscape 
                    ? 'calc(100vh - 120px)'
                    : 'min(calc(90vh - 180px), 600px)' 
                  : '85vh',
                maxWidth: window.innerWidth >= 768 
                  ? window.innerWidth >= 1024 
                    ? '680px'
                    : isLandscape ? '70vw' : '90vw'
                  : 'calc(100vw - 32px)',
              }}
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onAnimationComplete={handleAnimationComplete}
            >
              {/* Content wrapper div */}
              <div className={`bg-[#0D1117] rounded-xl overflow-hidden shadow-2xl border border-amber-500/20 
                ${isLandscape && window.innerWidth >= 768 ? 'flex flex-col' : ''}`}>
                
                {/* Header section - adjust padding for landscape */}
                <div className={`bg-gradient-to-r from-amber-950 to-amber-900/90 
                  ${isLandscape && window.innerWidth >= 768 ? 'px-6 py-3' : 'px-3 sm:px-4 md:px-6 py-3 sm:py-4'}
                  border-b border-amber-500/20`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-amber-400 tracking-tight">
                      BBMAM WORLDWIDE
                    </h3>
                    <div 
                      onClick={closePopup} 
                      className="cursor-pointer p-1.5 sm:p-2 hover:bg-black/20 rounded-full text-gray-400 hover:text-amber-400 transition-colors duration-200"
                    >
                      <X size={window.innerWidth >= 640 ? 24 : 20} />
                    </div>
                  </div>
                </div>

                {/* Content area with hidden scrollbars */}
                <div 
                  className="relative bg-[#0D1117] overflow-y-auto no-scrollbar" 
                  style={{ 
                    maxHeight: window.innerWidth >= 768 
                      ? 'calc(90vh - 150px)' 
                      : 'calc(85vh - 80px)',
                    ...noScrollbarStyles
                  }}
                >
                  <motion.div 
                    className="relative z-10 p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <div className="bg-[#090C10] p-3 sm:p-4 md:p-6 rounded-lg border border-gray-800">
                      <p className="text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed">
                        At BB MINERALS AND METALS, we are dedicated to excellence, innovation, and customer satisfaction.
                      </p>
                      <div className="space-y-3 sm:space-y-4 text-gray-200 leading-relaxed mt-3 sm:mt-4 text-sm sm:text-base">
                        <p>
                          With a strong global footprint, we have built long-term partnerships in countries such as Japan, Korea, Spain, Russia, Italy, and many more. Our reputation in international markets is founded on strict adherence to quality standards and a strong commitment to timely delivery, ensuring seamless supply chain operations for our clients.
                        </p>
                        <p>
                          We prioritize precision, consistency, and reliability—qualities that make us a trusted supplier in the global Ferroalloys industry.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorldwidePopup;