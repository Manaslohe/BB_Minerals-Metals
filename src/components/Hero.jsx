"use client";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dividerHeight, setDividerHeight] = useState("12rem");
  const [isMobile, setIsMobile] = useState(false);
  const contentRef = useRef(null);
  const prevSlide = useRef(currentSlide);

  const slides = [
    {
      title: "MANUFACTURER &\nTRADER OF FERRO\nALLOYS",
      description: "Supplying strength, reliability, and innovation to every sector we serve empowering industries, driving growth, and shaping the future of metallurgy with every alloy we deliver."
    },
    {
      title: "BHARAT'S LARGEST\nPRODUCER OF\nFERRO\nMOLYBDENUM\nAND LOW CARBON\nFERRO CHROME",
      description: "DELIVERING STRENGTH, CONSISTENCY, AND PERFORMANCE THAT POWER THE NATION'S INDUSTRIAL GROWTH."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.offsetHeight;
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      let finalHeight;
      
      if (currentSlide === 0) {
        if (isMobile) {
          finalHeight = Math.min(height - 40, 180);
        } else if (isTablet) {
          finalHeight = Math.min(height, 220);
        } else {
          finalHeight = Math.min(height + 10, 260);
        }
      } else {
        if (isMobile) {
          finalHeight = Math.min(height + 60, 360);
        } else if (isTablet) {
          finalHeight = Math.min(height + 40, 360);
        } else {
          finalHeight = Math.min(height + 80, 480);
        }
      }
      
      setDividerHeight(`${finalHeight}px`);
    }
  }, [currentSlide]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle smooth scrolling to BBInNumbers section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("bin-numbers-section");
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start" 
      });
    } else {
      console.log("Section not found: bin-numbers-section");
    }
  };

  return (
    <>
      <motion.section 
        className="relative w-full h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <img
            src={isMobile ? "/backgroundmobile.png" : "/background.png"}
            alt="Factory interior with molten metal"
            className="object-cover w-full h-full"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/1920x1080/111111/333333?text=Factory+Background";
            }}
          />
        </div>
        
        {/* Text Container Slider */}
        <div className="absolute right-0 top-25 md:top-52 w-[80%] md:w-1/2 xl:w-2/5 px-0 sm:px-0 md:px-0">
          {/* Slide Indicators */}
          <div className="absolute right-2 sm:right-4 md:right-[15%] top-0 flex flex-row space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              className="flex flex-row items-start text-white mt-6 sm:mt-4 md:mt-0 pr-0 w-full"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-row items-start w-full justify-end">
                <div className="flex flex-row items-start max-w-[95%] sm:max-w-[90%] md:max-w-[85%]">
                  {/* Divider Line - Left of Text */}
                  <div className="flex items-start justify-center  sm:px-3 md:px-4 pt-4">
                    <div 
                      className="w-0.5 sm:w-0.5 bg-white transition-all duration-500 ease-in-out"
                      style={{ 
                        height: dividerHeight,
                        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    ></div>
                  </div>
                  
                  {/* Text Content - now with ref for height measurement */}
                  <div ref={contentRef} className="p-2 sm:p-3 md:p-4 flex-1 pr-2 sm:pr-4">
                    <motion.h1 
                      className="font-inter text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-500 mb-4 md:mb-4 whitespace-pre-line tracking-tight leading-[1.15] sm:leading-[1]"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {slides[currentSlide].title}
                    </motion.h1>
                    <motion.p
                      className="font-inter text-xs sm:text-sm md:text-base lg:text-lg opacity-90 whitespace-normal md:whitespace-normal max-w-[90%] md:max-w-full leading-[1.2] sm:leading-relaxed"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      {slides[currentSlide].description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Scroll Indicator - enlarged for mobile */}
        <motion.div 
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={scrollToNextSection}
          whileHover={{ y: 2 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="flex flex-col items-center gap-2">
            <motion.div 
              className="w-8 h-14 sm:w-7 sm:h-12 rounded-full border-2 border-white/80 flex justify-center items-start p-1"
            >
              <motion.div 
                className="w-2 h-2 sm:w-1.5 sm:h-1.5 bg-white rounded-full"
                animate={{ 
                  y: [2, 16, 2],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                  repeatDelay: 0.5
                }}
              />
            </motion.div>
            <span className="text-white text-xs opacity-80">Scroll Down</span>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Hero;