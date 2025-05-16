import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DirectorMessage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set loaded state after component mounts for better animations
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: {
        duration: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const childVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]  // Custom easing
      }
    }
  };
  
  const headerVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const paragraphVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };
  
  // Decorative elements animation
  const decorVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="min-h-screen bg-[#111827] text-white pt-4 pb-16 relative overflow-hidden"
        initial="initial"
        animate={isLoaded ? "animate" : "initial"}
        exit="exit"
        variants={pageVariants}
      >
        {/* Animated background accent */}
        <motion.div
          className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,0 L100,0 L100,20 C70,30 30,10 0,20 Z"
              fill="url(#grad1)"
              variants={decorVariants}
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        {/* Back button - desktop */}
        <motion.div 
          className="p-4 sm:p-6 hidden sm:block relative z-30"
          variants={childVariants}
        >
          <motion.button 
            className="group flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-white
                    shadow-lg hover:shadow-amber-500/20 transition-all duration-300
                    hover:scale-105 active:scale-95 cursor-pointer"
            onClick={() => navigate(-1)}
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={18} className="text-amber-500 group-hover:animate-pulse" />
            <span className="font-medium text-sm">Back</span>
          </motion.button>
        </motion.div>

        {/* Back button - mobile only */}
        <motion.div 
          className="fixed bottom-6 left-6 z-50 sm:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <motion.button 
            className="group flex items-center justify-center p-3 rounded-full bg-gray-800 text-white
                     shadow-lg border border-amber-500/30 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
            onClick={() => navigate(-1)}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft size={20} className="text-amber-500" />
          </motion.button>
        </motion.div>

        {/* Main Content with staggered animations */}
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Enhanced Header Animation */}
          <motion.div 
            className="mb-10 sm:mb-16 relative"
            variants={headerVariants}
          >
            <motion.h1 
              className="text-4xl sm:text-6xl font-bold text-center bg-gradient-to-r from-white to-white/80 bg-clip-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Promoter Message
            </motion.h1>
            
            <motion.div 
              className="mt-2 h-1 w-32 bg-gradient-to-r from-amber-500 to-amber-400 mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "8rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          {/* Message Content with paragraph-by-paragraph reveal */}
          <motion.div 
            className="space-y-6 text-gray-300 text-xl"
            variants={childVariants}
          >
            {[
              "At BB MINERALS AND METALS, we are proud to be a significant player in the ferroalloys industry, where we not only deliver high-quality products but also contribute meaningfully to the communities we serve. Our commitment to excellence in every aspect of our operations is reflected in our efforts to create sustainable solutions that benefit both the environment and the people who depend on us.",
              
              "We understand that the true strength of our business lies in the people behind it. That's why we prioritize providing stable employment opportunities and fostering a culture of growth and innovation. We aim to empower our workforce, offering them not just jobs, but careers built on knowledge, skill, and experience. Through our investments in training, professional development, and safety, we are creating an environment where our employees can thrive and reach their full potential.",
              
              "Our dedication to sustainability is at the heart of everything we do. From responsible sourcing of raw materials to minimizing our environmental footprint, we are continuously seeking new ways to reduce energy consumption and waste in our processes. We recognize the importance of aligning business success with environmental stewardship, ensuring that we are not just meeting today's demands but also securing a better future for generations to come.",
              
              "As we move forward, our focus will remain on driving innovation in ferroalloys production, expanding our reach in global markets, and staying true to our values of integrity, responsibility, and sustainability. We are excited about the future, confident that our growth will continue to bring value to our customers, employees, and the broader community.",
              
              "Thank you for your continued support as we shape a prosperous and sustainable future together."
            ].map((paragraph, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={paragraphVariants}
                className="leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
            
            <motion.div 
              className="pt-4"
              custom={5}
              variants={paragraphVariants}
            >
              <motion.p 
                className="font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                Sincerely,
              </motion.p>
              <motion.p 
                className="font-bold text-amber-500"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7, duration: 0.5 }}
              >
                Shiv Gupta
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9, duration: 0.5 }}
              >
                Director
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DirectorMessage;
