import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function ExpansionSection() {
  const { isVisible, scrollDirection } = useScrollAnimation("expansion-content"); // Add scrollDirection

  const slides = [
    {
      id: 1,
      icon: "/facility.png",
      image: "/explore1.png",
      heading: "EXPANSION INTO MANUFACTURING",
      description: "Recognizing the benefits of backward integration, the promoters incorporated B B FERRO ALLOYS PVT LTD for the manufacturing of specialized ferroalloy products. The company commenced operations in 2020 and, within a span of LESS THAN 1.5 YEARS, SUCCESSFULLY ESTABLISHED itself as a leading name in both the domestic and international markets."
    },
    {
      id: 2,
      icon: "/expansion.png",
      image: "/explore2.png",
      heading: "MANUFACTURING FACILITY",
      description: "Building on domestic success, the company expanded into international markets, establishing strong partnerships across Asia, Europe, and North America. This global presence has enabled sustainable growth and diversification of the customer base."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: scrollDirection === 'down' ? 20 : -20 // Reduced offset
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Reduced from 0.6
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1 // Reduced from 0.2
      }
    },
    exit: {
      opacity: 0,
      y: scrollDirection === 'down' ? -50 : 50,
      transition: {
        duration: 0.4
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileBackgroundVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 0.2,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    })
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 25
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5
      }
    }
  };

  // Add initial loading state
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    // Check if images are loaded
    const preloadImages = async () => {
      try {
        const imagePromises = slides.flatMap(slide => [
          loadImage(slide.icon),
          loadImage(slide.image)
        ]);
        await Promise.all(imagePromises);
        setIsContentReady(true);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  // Add image loading helper
  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };

  if (isLoading || !isContentReady) {
    return (
      <div className="w-full min-h-[600px] bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-amber-500 font-medium">Loading content...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.section 
      id="expansion-content"
      className="w-full min-h-[600px] bg-white relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="exit"
    >
      <div className="w-full h-full px-4 md:px-8 pt-12 relative">
        {/* Title section */}
        <motion.div 
          className="relative mb-8 md:mb-12 flex"
          variants={titleVariants}
        >
          <motion.div 
            className="absolute h-full w-2 bg-amber-500 rounded-none"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.8 }}
          />
          <h2 className="text-4xl md:text-6xl font-semibold text-[#004080] ml-6 leading-tight tracking-tight whitespace-pre-line">
            EXPANSION INTO
            <br />MANUFACTURING AND FACILITY
          </h2>
        </motion.div>

        {/* Navigation dots */}
        <div className="flex items-center gap-2 mb-6 md:mb-8 ml-4 md:ml-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-4 w-4 rounded-full transition-all ${
                index === currentSlide ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          
          <div className="flex gap-2 ml-4">
            <button
              onClick={handlePrev}
              className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              onClick={handleNext}
              className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Next slide"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* Content area */}
        <div className="flex flex-col md:flex-row relative">
          {/* Mobile background image with enhanced animation */}
          <div className="md:hidden absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-white/90" />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`bg-${currentSlide}`}
                className="absolute inset-0"
                variants={mobileBackgroundVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <img
                  src={slides[currentSlide].image}
                  alt="Background"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content with staggered animation */}
          <motion.div 
            className="w-full md:w-1/2 flex gap-4 md:gap-6 z-10 mb-8 md:mb-0"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6, delay: 0.3 }
              }
            }}
          >
            <div className="text-amber-500">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`icon-${currentSlide}`}
                  src={slides[currentSlide].icon}
                  alt={`Icon ${currentSlide + 1}`}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>

            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentSlide}`}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <h3 className="text-2xl md:text-4xl font-semibold text-[#004080] mb-3 md:mb-4">
                    {slides[currentSlide].heading}
                  </h3>
                  <p className="text-sm md:text-base text-gray-800 max-w-xl leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Desktop image with enhanced animation */}
          <motion.div 
            className="hidden md:block absolute right-0 w-[800px] h-[650px] bottom-[-110px] mr-[-90px]"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, delay: 0.4 }
              }
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={`image-${currentSlide}`}
                src={slides[currentSlide].image}
                alt={`Expansion ${currentSlide + 1}`}
                className="w-full h-full object-contain"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-2 md:h-3 bg-amber-500"
        variants={{
          hidden: { scaleX: 0 },
          visible: { 
            scaleX: 1,
            transition: { duration: 1.5, delay: 0.6 }
          }
        }}
        style={{ originX: 0 }}
      />
    </motion.section>
  );
}

export default ExpansionSection;