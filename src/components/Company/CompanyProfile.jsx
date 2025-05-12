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
    <div className="min-h-[100vh] bg-gradient-to-b from-[#0a1218] to-[#121f29] text-white">
      <motion.div 
        className="container mx-auto px-6 py-16 h-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Back button with enhanced hover effect */}
        <motion.button
          variants={itemVariants}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e2b36]/70 hover:bg-amber-600 text-white text-sm mb-12 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] relative overflow-hidden group"
          onClick={() => navigate(-1)}
          whileTap={{ scale: 0.97 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <ArrowLeft size={16} className="relative z-10 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="relative z-10">BACK</span>
        </motion.button>

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
              className="space-y-6 text-gray-200 text-lg leading-relaxed"
              variants={itemVariants}
            >
              <motion.p 
                className="backdrop-blur-sm bg-[#1a2730]/30 p-5 rounded-lg shadow-md hover:bg-[#1e2e3a]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-2 border-transparent hover:border-amber-500/50 cursor-default"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                B B Minerals and Metals, led by <span className="font-semibold text-amber-400">Mr. Shiv Jagdishchandra Gupta</span>,
                has been a trusted name in the trading of minerals, ferro alloys, and charcoal for over a decade.
              </motion.p>
              
              <motion.p 
                className="backdrop-blur-sm bg-[#1a2730]/30 p-5 rounded-lg shadow-md hover:bg-[#1e2e3a]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-2 border-transparent hover:border-amber-500/50 cursor-default"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Classified as an SSI unit under the <span className="font-semibold text-amber-400">MSME Act</span>, the company 
                holds a registered trademark and <span className="font-semibold text-amber-400">ISO certification</span>, ensuring
                high-quality standards and regulatory compliance.
              </motion.p>
              
              <motion.p 
                className="backdrop-blur-sm bg-[#1a2730]/30 p-5 rounded-lg shadow-md hover:bg-[#1e2e3a]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-2 border-transparent hover:border-amber-500/50 cursor-default"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                With a robust supply chain and a growing client network, 
                <span className="font-semibold text-amber-400"> B B Minerals and Metals</span> continues to expand its presence
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
              className="bg-gradient-to-br from-[#1a2730]/90 to-[#0f1a22]/90 rounded-3xl p-14 w-full h-full flex items-center justify-center shadow-[0_0_45px_-15px_rgba(245,158,11,0.3)] backdrop-blur-md hover:shadow-[0_0_55px_-12px_rgba(245,158,11,0.4)] transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.4, type: "spring", stiffness: 200 }
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative"
              >
                <span className="absolute -top-10 -left-10 text-8xl opacity-10 font-bold">"</span>
                <motion.h2 
                  className="text-5xl md:text-7xl font-bold text-white leading-tight"
                  whileHover={{ scale: 1.02 }}
                >
                  MINERALS <br/> THAT MOVE <br/> THE{" "}
                  <motion.span 
                    className="text-amber-500 inline-block"
                    animate={{ 
                      textShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 10px rgba(255,255,255,0.3)", "0px 0px 0px rgba(255,255,255,0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    WORLD
                  </motion.span>
                </motion.h2>
                <motion.div 
                  className="h-2 w-32 bg-amber-500 mt-8 rounded-full"
                  whileInView={{ 
                    width: ["0%", "32%", "28%"],
                    opacity: [0, 1, 1],
                    transition: { duration: 1.5, ease: "easeOut" }
                  }}
                  whileHover={{ width: "40%", transition: { duration: 0.4 } }}
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