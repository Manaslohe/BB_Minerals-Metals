import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.8,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

const CompanyProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100vh] bg-gray-900 text-white relative">
      {/* Background image with low opacity */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/profile.jpg')] bg-cover bg-center opacity-45 mix-blend-overlay"
          style={{ backgroundPosition: "center 30%" }}
        ></div>
        <div className="absolute inset-0 bg-gray-900/80"></div>
      </div>
      
      {/* Back button - desktop */}
      <motion.div 
        className="p-4 sm:p-6 hidden sm:block relative z-30"
        variants={itemVariants}
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
      
      <motion.div 
        className="container mx-auto px-6 py-6 sm:py-16 h-full relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 min-h-[60vh]">
          {/* Left column - Company information with interactive elements */}
          <motion.div 
            className="relative pl-8 border-l-4 border-amber-500"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-10 tracking-tight"
              variants={itemVariants}
              whileInView={{ 
                textShadow: ["0px 0px 0px rgba(245,158,11,0)", "0px 0px 8px rgba(245,158,11,0.3)", "0px 0px 0px rgba(245,158,11,0)"],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
            >
              <span className="text-amber-500 inline-block hover:scale-105 transition-transform duration-300">COMPANY</span> PROFILE
            </motion.h1>
            
            <motion.div 
              className="space-y-6 text-gray-300 text-lg leading-relaxed"
              variants={itemVariants}
            >
              <motion.p 
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-md p-5 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-amber-900/10 transition-all border border-gray-700/30 hover:border-amber-600/40 cursor-default"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                B B Minerals and Metals, led by <span className="font-semibold text-amber-500">Mr. Shiv Jagdishchandra Gupta</span>,
                has been a trusted name in the trading of minerals, ferro alloys, and charcoal for over a decade.
              </motion.p>
              
              <motion.p 
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-md p-5 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-amber-900/10 transition-all border border-gray-700/30 hover:border-amber-600/40 cursor-default"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Classified as an SSI unit under the <span className="font-semibold text-amber-500">MSME Act</span>, the company 
                holds a registered trademark and <span className="font-semibold text-amber-500">ISO certification</span>, ensuring
                high-quality standards and regulatory compliance.
              </motion.p>
              
              <motion.p 
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-md p-5 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-amber-900/10 transition-all border border-gray-700/30 hover:border-amber-600/40 cursor-default"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                With a robust supply chain and a growing client network, 
                <span className="font-semibold text-amber-500"> B B Minerals and Metals</span> continues to expand its presence
                in both domestic and international markets.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right column - Branding with enhanced interactivity */}
          <motion.div 
            className="flex items-center justify-center h-full"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-gray-800/60 backdrop-blur-md rounded-2xl md:p-14 p-8 w-full h-full flex items-center justify-center shadow-xl border border-gray-700/30 hover:border-amber-600/40 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.3), 0 0 10px rgba(245, 158, 11, 0.1)",
                transition: { duration: 0.4, type: "spring", stiffness: 200 }
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative w-full flex flex-col items-center md:items-start"
              >
                <span className="absolute md:-top-10 md:-left-10 -top-6 left-0 md:left-auto md:text-8xl text-5xl sm:text-6xl opacity-10 font-bold">"</span>
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-tight text-center md:text-left"
                  whileHover={{ scale: 1.02 }}
                >
                  MINERALS THAT <br/>  
                  <span className="text-5xl sm:text-4xl md:text-7xl">MOVE THE</span> <br/>{" "}
                  <motion.span 
                    className="text-amber-500 inline-block text-7xl sm:text-5xl md:text-8xl"
                    animate={{ 
                      textShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 10px rgba(255,255,255,0.3)", "0px 0px 0px rgba(255,255,255,0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    WORLD
                  </motion.span>
                </motion.h2>
                <motion.div 
                  className="h-1 md:w-80 w-full sm:w-64 max-w-[320px] bg-amber-500 mt-6 md:mt-8 rounded-full self-center md:self-start"
                  initial={{ width: 0 }}
                  animate={{ width: "100%", maxWidth: 320 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ width: "100%", transition: { duration: 0.4 } }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyProfile;