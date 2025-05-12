"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "MANUFACTURER & TRADER OF FERRO ALLOYS",
      description: "Supplying strength, reliability, and innovation to every sector we serve empowering industries, driving growth, and shaping the future of metallurgy with every alloy we deliver."
    },
    {
      title: "BHARAT'S LARGEST PRODUCER OF FERRO MOLYBDENUM AND LOW CARBON FERRO CHROME",
      description: "DELIVERING STRENGTH, CONSISTENCY, AND PERFORMANCE THAT POWER THE NATION'S INDUSTRIAL GROWTH."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
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
            src="/background.png"
            alt="Factory interior with molten metal"
            className="object-cover w-full h-full"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/1920x1080/111111/333333?text=Factory+Background";
            }}
          />
          
          {/* Dark gradient overlay with right side tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/100 via-black/0 to-black/0"></div>
          {/* Additional overlay for right side */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/100 to-black/0"></div>
        </div>
        
        {/* Text Container Slider - Moved down for better mobile layout */}
        <div className="absolute right-0 top-36 sm:top-40 md:top-52 w-full md:w-1/2 xl:w-2/5 px-4 sm:px-0">
          {/* Slide Indicators - mobile positioning improved */}
          <div className="absolute right-4 sm:right-[10%] md:right-[15%] top-0 flex flex-row space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-amber-500 w-7 sm:w-8" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              className="flex flex-row items-start text-white mt-10 sm:mt-6 md:mt-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Divider Line - Left of Text - adjusted height for mobile */}
              <div className="flex items-start justify-center px-2 sm:px-4 pt-4">
                <div className="h-48 sm:h-48 md:h-56 w-1.5 sm:w-1 bg-amber-500"></div>
              </div>
              
              {/* Text Content - enhanced for mobile */}
              <div className="p-2 sm:p-4 flex-1">
                <motion.h1 
                  className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  className="text-sm sm:text-sm md:text-base lg:text-lg opacity-90"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
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
                className="w-2 h-2 sm:w-1.5 sm:h-1.5 bg-amber-500 rounded-full"
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