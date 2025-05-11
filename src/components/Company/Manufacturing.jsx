import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Manufacturing = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
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
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const sectionVariants = {
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
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut" 
      }
    }
  };
  
  const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: i => ({ 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: i * 0.07, 
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };

  // Manufacturing unit sections data
  const manufacturingSections = [
    {
      id: "our-manufacturing-unit",
      title: "Our Manufacturing Unit",
      content: "At the core of our operations is a state-of-the-art Ferroalloys manufacturing facility designed for efficiency, scale, and sustainability. Spanning over 64,000+ square feet, the unit reflects our commitment to advanced manufacturing practices and environmental responsibility."
    },
    {
      id: "infrastructure-capacity",
      title: "Infrastructure & Capacity",
      content: "Our facility includes a dedicated warehouse, streamlined for efficient storage and logistics of raw materials and finished goods. With an annual production capacity of 5,000 tonnes, we are equipped to meet high-volume demands while ensuring superior product quality and consistency."
    },
    {
      id: "advanced-technology",
      title: "Advanced Technology & Systems",
      content: "We utilize cutting-edge machinery and process automation to enhance productivity and reduce downtime. An advanced air fume extraction system ensures a safe and healthy working environment by minimizing emissions and airborne contaminants."
    },
    {
      id: "skilled-team",
      title: "Skilled Team & Timely Dispatch",
      content: "Behind every successful operation is a dedicated and hardworking team. Our professionals are committed to operational excellence and play a crucial role in maintaining strict production timelines and ensuring timely dispatch of all products."
    },
    {
      id: "fire-safety",
      title: "Fire Safety & Risk Management",
      content: "Safety is a top priority. The facility is equipped with a modern fire safety system, featuring automated detection and suppression mechanisms that meet or exceed industry standards. This ensures the protection of personnel, infrastructure, and inventory at all times."
    },
    {
      id: "eco-friendly",
      title: "Eco-Friendly & Sustainable Practices",
      content: "We believe in responsible manufacturing. Our unit is built around sustainable practices, including energy-efficient operations, responsible waste management, and reduced emissions. We're dedicated to reducing our environmental footprint while supporting global demand."
    },
    {
      id: "built-for-future",
      title: "Built for the Future",
      content: "Scalable, compliant, and forward-thinking—our facility is built not just for today but for tomorrow. It embodies our mission to deliver quality Ferroalloys while prioritizing safety, sustainability, and long-term growth."
    }
  ];

  // Calculate if we have an odd number of sections
  const hasOddSections = manufacturingSections.length % 2 !== 0;

  return (
    <AnimatePresence>
      <motion.div
        className="min-h-screen bg-gray-900 text-white"
        initial="initial"
        animate={isLoaded ? "animate" : "initial"}
        exit="exit"
        variants={pageVariants}
      >
        {/* Back Button with enhanced animation */}
        <motion.div 
          className="p-4 sm:p-6"
          variants={sectionVariants}
        >
          <motion.button 
            className="group flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-white
                    shadow-lg hover:shadow-amber-500/20 transition-all duration-300
                    hover:scale-105 active:scale-95"
            onClick={() => navigate(-1)}
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={18} className="text-amber-500 group-hover:animate-pulse" />
            <span className="font-medium text-sm">Back</span>
          </motion.button>
        </motion.div>

        {/* Simple Header - Matching the image exactly but with improved animation */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <motion.h1 
            className="text-3xl md:text-5xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Manufacturing Unit
          </motion.h1>
          <motion.div 
            className="w-48 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "12rem", opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        {/* Main content section with improved spacing */}
        <motion.div 
          className="container mx-auto px-4 pb-16 max-w-7xl"
          variants={sectionVariants}
        >
          {/* Precision Manufacturing Section with enhanced animation */}
          <motion.div 
            className="bg-gray-800 rounded-lg p-6 md:p-8 mb-12 relative overflow-hidden shadow-xl"
            style={{ minHeight: "50vh" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 opacity-100"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <img 
                src="/manu.png" 
                alt="Manufacturing process" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="relative z-10 p-2">
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                PRECISION<br/>
                MANUFACTURING<br/>
                POWERFUL<br/>
                RESULTS
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 md:max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Precision in every product, power in every result 
                driving excellence, building the future, and 
                shaping industries with unmatched 
                quality.
              </motion.p>
            </div>
          </motion.div>

          {/* Manufacturing Sections Grid - single column on mobile, multi-column on larger screens */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 md:gap-6 lg:gap-8"
            variants={sectionVariants}
          >
            {manufacturingSections.map((section, index) => (
              <motion.div 
                key={section.id}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-4 md:p-6
                          border border-gray-700/50 shadow-lg hover:shadow-amber-500/5 
                          transition-all duration-300 hover:-translate-y-1
                          ${hasOddSections && index === manufacturingSections.length - 1 ? "sm:col-span-2 sm:max-w-lg mx-auto" : ""}`}
                variants={cardVariants}
                custom={index}
                whileHover={{ boxShadow: "0 8px 30px rgba(245, 158, 11, 0.07)" }}
              >
                <div className="flex items-start mb-3">
                  <div className="w-1.5 h-10 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full mr-3"></div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-amber-400 leading-tight">{section.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed pl-4 sm:pl-5">{section.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Manufacturing;
