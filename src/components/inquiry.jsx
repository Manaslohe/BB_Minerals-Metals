import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, User, Mail, MessageCircle, ArrowLeft } from 'lucide-react';

const Inquiry = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const titleVariants = {
    initial: { x: -30, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const answerVariants = {
    initial: { y: 0 },
    animate: {
      y: [-2, 2, -2],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const hoverTextVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen relative bg-gray-100 overflow-hidden"
    >
      {/* Back Button */}
      <motion.button
        onClick={() => window.history.back()}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white transition-all duration-300 hover:shadow-lg"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">Back</span>
      </motion.button>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/inquiry.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-amber-500/80"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Section - Text */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 text-white"
          >
            <motion.div
              variants={titleVariants}
              className="relative z-10"
            >
              <div className="absolute -left-4 -top-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              <motion.h2 
                whileHover="hover"
                variants={hoverTextVariants}
                className="text-6xl lg:text-8xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent cursor-default"
              >
                Have <br/> Questions?
              </motion.h2>
              <div className="text-5xl lg:text-7xl font-bold">
                We Have
                <motion.div 
                  variants={answerVariants}
                  animate="animate"
                  whileHover={{ scale: 1.05 }}
                  className="relative inline-block ml-3 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] cursor-default"
                >
                  Answers
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-2 bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl lg:text-2xl mt-12 text-white/90 max-w-xl leading-relaxed font-light"
            >
              Reach out to us with any questions or inquiries. 
              Our team is ready to provide the information you need.
            </motion.p>
            
            <motion.div
              variants={itemVariants} 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              className="mt-8 inline-flex items-center px-6 py-3 space-x-4 bg-white/10 rounded-full backdrop-blur-sm cursor-pointer transition-all duration-300 group hover:shadow-lg"
            >
              <motion.div 
                variants={pulseVariants}
                animate="animate"
                className="w-3 h-3 bg-green-400 rounded-full group-hover:bg-green-300"
              />
              <span className="text-white/90 font-medium tracking-wide group-hover:text-white">24hr Response Time</span>
            </motion.div>
          </motion.div>
          
          {/* Right Section - Form */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 w-full"
          >
            <motion.div 
              variants={itemVariants}
              className="relative backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 rounded-3xl p-8 lg:p-10 border border-white/20 shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]"
              whileHover={{ boxShadow: "0 0 80px -15px rgba(0,0,0,0.4)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Send Us a Message
              </h3>

              <form className="space-y-6 relative">
                <motion.div 
                  variants={itemVariants}
                  className="relative group"
                >
                  <User size={20} className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white transition-colors duration-300 group-hover:text-amber-200" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 pl-14 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:border-transparent transition-all duration-300 text-lg"
                  />
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="relative group"
                >
                  <Mail size={20} className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white transition-colors duration-300 group-hover:text-amber-200" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 pl-14 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:border-transparent transition-all duration-300 text-lg"
                  />
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="relative group"
                >
                  <MessageCircle size={20} className="absolute left-6 top-6 text-white transition-colors duration-300 group-hover:text-amber-200" />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-6 py-4 pl-14 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:border-transparent transition-all duration-300 resize-none text-lg"
                  ></textarea>
                </motion.div>
                
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-amber-500 font-bold py-5 px-6 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:bg-white/90"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Inquiry;