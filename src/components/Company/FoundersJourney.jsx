import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, Award, TrendingUp, Shield, Users, Factory } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FoundersJourneyPage = () => {
  const navigate = useNavigate();

  const journeyContent = [
    {
      Icon: Award,
      text: <><span className="font-semibold">Mr. Shiv Jagdishchandra Gupta</span>, originally from Rajasthan, pursued his graduation before stepping into business.</>
    },
    {
      Icon: TrendingUp,
      text: "Started with charcoal trading, building a strong Pan India supply network."
    },
    {
      Icon: Shield,
      text: "Expanded into minerals trading, primarily focusing on ferro Alloys."
    },
    {
      Icon: Users,
      text: "Gained deep market knowledge and built strong client relationships and got well known for the quality and reliability of the products."
    },
    {
      Icon: Factory,
      text: <>Transitioned into manufacturing business by establishing sister concern <span className="font-semibold">M/s B B Ferro Alloys Pvt Ltd</span> which mainly focused on manufacturing of specialized ferro alloys products.</>
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const [displayText, setDisplayText] = useState('');
  const fullText = "JOURNEY OF BBMAM";

  const typeWriter = useCallback(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => {
        if (currentIndex >= fullText.length) {
          clearInterval(interval);
          return prev;
        }
        currentIndex++;
        return fullText.slice(0, currentIndex);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    const timeout = setTimeout(typeWriter, 1200);
    return () => clearTimeout(timeout);
  }, [typeWriter]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Enhanced Back Button */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute top-4 left-4 md:top-8 md:left-8 z-20"
      >
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center justify-center px-4 py-2 bg-white/90 backdrop-blur-sm
                    hover:bg-amber-500 text-blue-900 hover:text-white rounded-lg
                    shadow-md hover:shadow-lg transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:transform group-hover:-translate-x-1 transition-transform" />
          <span className="ml-1 font-semibold text-base">Back</span>
        </button>
      </motion.div>

      {/* Slanting Orange Background with Animation - Desktop Only */}
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ 
          duration: 1,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        className="absolute top-0 right-0 w-4/7 h-full bg-amber-500 hidden md:block"
        style={{ clipPath: 'polygon( 0 0, 100% 0, 100% 100%, 50% 100%)' }}
      >
        {/* Diagonal Text with Optimized Typewriter Effect - Desktop */}
        <div className="absolute inset-0 flex items-center justify-start pr-22">
          <div className="transform -translate-x-24 rotate-58 origin-center whitespace-nowrap">
            <h1 className="text-white text-[5rem] font-bold tracking-wider">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block ml-2"
              >
                |
              </motion.span>
            </h1>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Mobile Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 md:hidden"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-white" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-full h-48 bg-amber-500" 
          style={{ 
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 70%)',
            opacity: 0.9
          }} 
        />
        
        {/* Mobile Journey Text */}
        <div className="absolute inset-0 flex items-start justify-center pt-20">
          <div className="relative">
            <h1 className="text-white text-4xl font-bold tracking-wider text-center drop-shadow-lg">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block ml-2"
              >
                |
              </motion.span>
            </h1>
            <div className="absolute inset-0 blur-2xl opacity-40 bg-amber-500 -z-10" />
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 pt-44 md:pt-20 px-4 md:px-12 pb-12 w-full md:w-3/5 max-w-3xl mx-auto md:mx-0"
      >
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="border-l-4 border-amber-500 pl-4 md:pl-6 mb-6 md:mb-8"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 md:mb-3"
          >
            FOUNDER'S JOURNEY
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl font-semibold text-blue-900/80"
          >
            Mr. Shiv Jagdishchandra Gupta
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3 md:space-y-4"
        >
          {journeyContent.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start group bg-white/80 backdrop-blur-sm md:bg-transparent 
                         hover:bg-white hover:shadow-lg md:hover:shadow-[0_0_10px_rgba(251,191,36,0.1)] 
                         rounded-lg p-4 md:p-3 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="mr-3 md:mr-4 mt-1">
                <item.Icon className="w-5 h-5 md:w-6 md:h-6 text-amber-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1">
                <p className="text-blue-900 text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>       
      </motion.div>
    </div>
  );
};

export default FoundersJourneyPage;