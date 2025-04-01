import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Award, CheckCircle2, Globe } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function CompanyOverview() {
  const { isVisible } = useScrollAnimation("company-overview");
  
  // Add initial loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const controls = useAnimation();

  const slides = [
    {
      image: "src/assets/e1.png",
      title: "ESTABLISHED EXPERTISE",
      description: "B B Minerals and Metals, led by Mr. Shiv Jagdishchandra Gupta, has been a trusted name in the trading of minerals, ferro alloys, and charcoal for over a decade.",
      icon: <Award className="text-amber-500 w-12 h-12" strokeWidth={1.5} />
    },
    {
      image: "src/assets/e2.png",
      title: "QUALITY ASSURANCE",
      description: "We maintain stringent quality standards across our entire product range, ensuring consistent excellence in every delivery.",
      icon: <CheckCircle2 className="text-amber-500 w-12 h-12" strokeWidth={1.5} />
    },
    {
      image: "src/assets/e3.png",
      title: "GLOBAL REACH",
      description: "Our extensive network and strategic partnerships enable us to serve clients across international markets efficiently.",
      icon: <Globe className="text-amber-500 w-12 h-12" strokeWidth={1.5} />
    }
  ];

  // Enhanced auto-play with pause on hover
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    controls.start({ scale: 1.1, transition: { duration: 0.8 } });
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduced y offset
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, // Reduced from 0.8
        ease: "easeOut",
        staggerChildren: 0.1, // Reduced from 0.2
        delayChildren: 0.1 // Reduced from 0.3
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
        stiffness: 200, // Increased for snappier animation
        damping: 20 // Adjusted damping
      }
    }
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-[650px] bg-gradient-to-b from-zinc-100 to-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-amber-500"
        >
          {/* Add your loading indicator here if needed */}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      id="company-overview"
      className="w-full min-h-[650px] bg-gradient-to-b from-zinc-100 to-white overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.header 
        className="px-4 py-10 w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white bg-amber-500 text-center shadow-lg relative overflow-hidden"
        variants={itemVariants}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />
        COMPANY OVERVIEW
      </motion.header>

      <section className="container mx-auto px-4 py-16 md:py-24"> {/* Updated padding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center my-8 md:my-12"> {/* Added margins */}
          <motion.div 
            className="relative w-full h-48 sm:h-64 md:h-72 lg:h-[400px] flex items-center justify-center perspective-1000"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateY(-10deg) rotateX(5deg)",
                }}
              >
                <motion.img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="object-contain w-full h-full rounded-xl shadow-2xl"
                  initial={{ opacity: 0, rotateY: -15, scale: 0.9 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: 15, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.25)",
                  }}
                  whileHover={{
                    boxShadow: "0 35px 60px -15px rgba(251, 191, 36, 0.4)",
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: "linear-gradient(45deg, rgba(251, 191, 36, 0.1), transparent)",
                    mixBlendMode: "overlay",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div 
            className="space-y-8 p-6"
            variants={itemVariants}
          >
            <div className="flex gap-4 justify-center lg:justify-start">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSlideClick(index)}
                  className="rounded-full h-4 w-4 md:h-5 md:w-5 focus:outline-none focus:ring-2 focus:ring-amber-500 relative overflow-hidden"
                  animate={currentSlide === index ? { 
                    scale: 1.2,
                    backgroundColor: "#0c4a6e"
                  } : { 
                    scale: 1,
                    backgroundColor: "#94a3b8"
                  }}
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="flex items-center gap-6"
                  animate={controls}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {slides[currentSlide].icon}
                  </motion.div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-900 leading-tight">
                    {slides[currentSlide].title}
                  </h2>
                </motion.div>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default CompanyOverview;