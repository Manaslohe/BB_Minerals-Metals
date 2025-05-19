"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimationControls, useMotionValue, animate } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation.js";

function PartnersSection() {
  const { isVisible } = useScrollAnimation("partners-section");
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const controls = useAnimationControls();
  const x = useMotionValue(0);
  const ribbonRef = useRef(null);
  const [ribbonWidth, setRibbonWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const holdTimerRef = useRef(null);

  const animationRef = useRef({
    position: 0,
    speed: 40,
    lastTimestamp: 0,
    pausedPosition: 0,
    touchStartX: 0,
    touchStartTime: 0
  });

  const partners = [
    {
      id: 1,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/a31e7e6809c7b988d1652bc165a6075b0098b8f4",
      name: "SLR Metaliks",
    },
    {
      id: 2,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc3ebf42cc92de675d7f09f4f78beb814827dea5",
      name: "Kalyani",
    },
    {
      id: 3,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/76312ce5ec4a5044bb666fb05d7c2ebe91cc56a7",
      name: "Saarloha",
    },
    {
      id: 4,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/ebcdc8343e1cded83cbcdfe92ae3e97f87fc06a3",
      name: "Tata Steel",
    },
    {
      id: 5,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/0047830f2b4b5f5680422597dbd158bcb8d6fbc6",
      name: "Mukand",
    },
    {
      id: 6,
      url: "./p6.png",
      name: "Sunflag Steel",
    },
  ];

  const ribbonPartners = [...partners, ...partners, ...partners, ...partners];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 
        ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (ribbonRef.current) {
      const updateWidths = () => {
        const ribbon = ribbonRef.current;
        if (ribbon) {
          setRibbonWidth(ribbon.scrollWidth / 2);
          setContainerWidth(ribbon.parentElement.offsetWidth);
        }
      };
      
      updateWidths();
      window.addEventListener('resize', updateWidths);
      return () => window.removeEventListener('resize', updateWidths);
    }
  }, []);

  useEffect(() => {
    let frameId;
    
    const trackPosition = () => {
      animationRef.current.position = x.get();
      frameId = requestAnimationFrame(trackPosition);
    };
    
    if (!isPaused && !isDragging && !isHolding && isVisible) {
      frameId = requestAnimationFrame(trackPosition);
    }
    
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [isPaused, isDragging, isHolding, isVisible, x]);

  useEffect(() => {
    if (ribbonWidth <= 0) return;
    
    if (isPaused || isDragging || isHolding) {
      controls.stop();
      animationRef.current.pausedPosition = x.get();
    } else if (isVisible) {
      const currentPos = x.get();
      
      controls.start({
        x: [currentPos, currentPos - ribbonWidth],
        transition: {
          x: {
            duration: animationRef.current.speed,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }
        }
      });
    }
  }, [isPaused, isDragging, isHolding, isVisible, ribbonWidth, controls, x]);

  const handleAnimationComplete = () => {
    if (!isPaused && isVisible) {
      x.set(0);
      
      controls.start({
        x: [0, -ribbonWidth],
        transition: {
          x: {
            duration: animationRef.current.speed,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }
        }
      });
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      animationRef.current.pausedPosition = x.get();
      setIsPaused(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (!isMobile && !isHolding) {
      setIsPaused(false);
    }
  };
  
  const handleClick = (e) => {
    if (isDragging) return;
    
    if (!isHolding) {
      animationRef.current.pausedPosition = x.get();
      setIsPaused(!isPaused);
    }
  };
  
  const handleTouchStart = (e) => {
    animationRef.current.touchStartX = e.touches[0].clientX;
    animationRef.current.touchStartTime = Date.now();
    animationRef.current.pausedPosition = x.get();
    
    clearTimeout(holdTimerRef.current);
    holdTimerRef.current = setTimeout(() => {
      setIsHolding(true);
      setIsPaused(true);
    }, 200);
  };
  
  const handleTouchEnd = (e) => {
    clearTimeout(holdTimerRef.current);
    
    const touchDuration = Date.now() - animationRef.current.touchStartTime;
    const touchDistance = Math.abs(e.changedTouches[0]?.clientX - animationRef.current.touchStartX);
    
    if (touchDuration < 200 && touchDistance < 10 && !isHolding && !isDragging) {
      setIsPaused(!isPaused);
    }
    
    setIsHolding(false);
  };

  const handleTouchMove = (e) => {
    clearTimeout(holdTimerRef.current);
    const touchDistance = Math.abs(e.touches[0].clientX - animationRef.current.touchStartX);
    
    if (touchDistance > 10) {
      setIsHolding(false);
    }
  };

  const handleDragStart = () => {
    controls.stop();
    setIsDragging(true);
    animationRef.current.pausedPosition = x.get();
  };

  const handleDragEnd = () => {
    setTimeout(() => {
      setIsDragging(false);
      
      animationRef.current.position = x.get();
      
      if (!isPaused && !isHolding) {
        const currentX = x.get();
        
        controls.start({
          x: [currentX, currentX - ribbonWidth],
          transition: {
            x: {
              duration: animationRef.current.speed,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }
          }
        });
      }
    }, 50);
  };

  const dragConstraints = {
    left: -ribbonWidth * 2,
    right: containerWidth
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <motion.section
      id="partners-section"
      className="w-full py-12 md:py-20 bg-gray-900 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Title section */}
      <motion.div 
        className="container mx-auto px-4 pt-10 pb-8"
        variants={itemVariants}
      >
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight">
            OUR PARTNERS
          </h2>
          <p className="text-xl sm:text-2xl text-white/60 font-light">
            Stronger Together, Growing Forever.
          </p>
        </div>
      </motion.div>

      {/* Partners Ribbon */}
      <motion.div 
        className="relative bg-gradient-to-b from-gray-50 to-white py-12 md:py-16"
        variants={itemVariants}
      >
        <div 
          className="relative overflow-hidden touch-pan-x cursor-grab active:cursor-grabbing"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          style={{ touchAction: "pan-x" }}
        >
          <motion.div
            ref={ribbonRef}
            className="flex items-center justify-start gap-16 md:gap-24"
            style={{ x }}
            animate={controls}
            drag="x"
            dragDirectionLock
            dragConstraints={dragConstraints}
            dragElastic={0.05}
            dragMomentum={true}
            dragTransition={{ 
              power: 0.2, 
              timeConstant: 300,
              modifyTarget: t => Math.round(t / 5) * 5
            }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onAnimationComplete={handleAnimationComplete}
            whileDrag={{ 
              cursor: "grabbing",
              scale: isMobile ? 1 : 0.99
            }}
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
                    className="h-16 w-auto sm:h-24 md:h-32 object-contain transition-all duration-300"
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