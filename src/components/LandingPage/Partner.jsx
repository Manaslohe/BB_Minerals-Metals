"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimationControls, useMotionValue } from "framer-motion";

// Create a simple scroll animation hook since the import is missing
const useScrollAnimation = (elementId) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById(elementId);
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementId]);

  return { isVisible };
};

function PartnersSection() {
  const { isVisible } = useScrollAnimation("partners-section");
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimationControls();
  const x = useMotionValue(0);
  const ribbonRef = useRef(null);
  const [ribbonWidth, setRibbonWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const animationRef = useRef({
    speed: isMobile ? 15 : 20, // Faster for mobile
    lastPosition: 0,
  });

  const partners = [
    { id: 1, url: "https://cdn.builder.io/api/v1/image/assets/TEMP/a31e7e6809c7b988d1652bc165a6075b0098b8f4", name: "SLR Metaliks" },
    { id: 2, url: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc3ebf42cc92de675d7f09f4f78beb814827dea5", name: "Kalyani" },
    { id: 3, url: "https://cdn.builder.io/api/v1/image/assets/TEMP/76312ce5ec4a5044bb666fb05d7c2ebe91cc56a7", name: "Saarloha" },
    { id: 4, url: "https://cdn.builder.io/api/v1/image/assets/TEMP/ebcdc8343e1cded83cbcdfe92ae3e97f87fc06a3", name: "Tata Steel" },
    { id: 5, url: "https://cdn.builder.io/api/v1/image/assets/TEMP/0047830f2b4b5f5680422597dbd158bcb8d6fbc6", name: "Mukand" },
    { id: 6, url: "./p6.png", name: "Sunflag Steel" },
  ];

  // Duplicate partners more times to create a longer ribbon
  const ribbonPartners = [...partners, ...partners, ...partners, ...partners,...partners,...partners];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const updateWidths = () => {
      if (ribbonRef.current) {
        // Adjust width calculation for better mobile handling
        const fullWidth = ribbonRef.current.scrollWidth;
        setRibbonWidth(fullWidth / (isMobile ? 3 : 4));
      }
    };
    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, [isMobile]);

  useEffect(() => {
    if (ribbonWidth <= 0 || !isVisible) return;

    const animateRibbon = () => {
      if (isPaused || isDragging) {
        controls.stop();
        animationRef.current.lastPosition = x.get();
        return;
      }

      // Use a fixed animation speed regardless of position
      const animationDuration = animationRef.current.speed;
      
      // Start animation from current position
      const currentPos = x.get();
      
      // Determine end position based on current position
      let endPos = currentPos - ribbonWidth;
      
      controls.start({
        x: endPos,
        transition: {
          x: {
            duration: animationDuration,
            ease: "linear",
            repeat: 0,
          },
        },
        onComplete: () => {
          // Seamless loop by resetting position
          if (x.get() <= -ribbonWidth) {
            x.set(0);
          }
          
          // Continue animation if still visible and not paused
          if (isVisible && !isPaused && !isDragging) {
            animateRibbon();
          }
        }
      });
    };

    animateRibbon();
    return () => controls.stop();
  }, [isPaused, isDragging, isVisible, ribbonWidth, controls, x]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsPaused(true);
      controls.stop();
      animationRef.current.lastPosition = x.get();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && !isDragging) {
      setIsPaused(false);
      resumeAnimation();
    }
  };

  const handleTouchStart = (e) => {
    controls.stop();
    setIsDragging(true);
    animationRef.current.lastPosition = x.get();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (!isPaused) {
      resumeAnimation();
    }
  };

  const handleDragStart = () => {
    controls.stop();
    x.stop();
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    
    const currentPosition = x.get();
    // Reset position if needed
    if (currentPosition <= -ribbonWidth * 2) {
      x.set(-ribbonWidth);
    } else if (currentPosition >= ribbonWidth) {
      x.set(0);
    }

    if (!isPaused) {
      resumeAnimation();
    }
  };

  const resumeAnimation = () => {
    if (!isVisible) return;
    
    x.stop();
    controls.stop();
    
    const currentPos = x.get();
    const targetPos = currentPos - ribbonWidth;
    
    controls.start({
      x: targetPos,
      transition: {
        x: {
          duration: animationRef.current.speed,
          ease: "linear",
          repeat: 0,
        },
      },
      onComplete: () => {
        const newPos = x.get();
        if (newPos <= -ribbonWidth) {
          x.set(0);
        }
        
        if (isVisible && !isPaused && !isDragging) {
          requestAnimationFrame(() => resumeAnimation());
        }
      }
    });
  };

  const dragConstraints = {
    left: isMobile ? -ribbonWidth * 4 : -ribbonWidth * 2, // Extended constraints for mobile
    right: ribbonWidth * 2,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
  };

  return (
    <motion.section
      id="partners-section"
      className="w-full bg-gray-900 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div className="container mx-auto px-4 pt-10 pb-8" variants={itemVariants}>
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight">
            OUR PARTNERS
          </h2>
          <p className="text-xl sm:text-2xl text-white/60 font-light">
            Stronger Together, Growing Forever.
          </p>
        </div>
      </motion.div>

      <motion.div className="relative bg-gradient-to-b from-gray-50 to-white py-12 md:py-16" variants={itemVariants}>
        <div
          className="relative overflow-hidden touch-pan-x cursor-grab active:cursor-grabbing"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: "pan-x" }}
        >
          <motion.div
            ref={ribbonRef}
            className="flex items-center justify-start gap-8 md:gap-24"
            style={{ x }}
            animate={controls}
            drag="x"
            dragDirectionLock
            dragConstraints={dragConstraints}
            dragElastic={0.1}
            dragMomentum={true} // Enable momentum for both
            dragTransition={{ 
              power: 0.3,
              timeConstant: 300,
              modifyTarget: null // Remove target modification for smoother dragging
            }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            whileDrag={{ cursor: "grabbing", scale: isMobile ? 1 : 0.995 }} // Subtle scale feedback
          >
            {ribbonPartners.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 group"
                variants={logoVariants}
                whileHover="hover"
                style={{ pointerEvents: "auto" }}
              >
                <div className="relative">
                  <motion.img
                    src={partner.url}
                    alt={partner.name}
                    className={`w-auto object-contain transition-all duration-300 ${
                      isMobile 
                        ? "h-24 sm:h-28" // Further increased height for mobile
                        : "h-16 sm:h-24 md:h-32" // Keep desktop size the same
                    }`}
                    loading="lazy"
                    draggable={false}
                  />
                  <motion.div
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="bg-sky-900/90 text-white px-4 py-2 rounded-lg whitespace-nowrap">
                      <p className="text-sm font-medium">{partner.name}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default PartnersSection;