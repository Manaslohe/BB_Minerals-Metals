import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();
  const [toastInfo, setToastInfo] = useState({ visible: false, message: '' });

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastInfo({ 
        visible: true, 
        message: `${type} copied to clipboard!` 
      });
      
      // Hide toast after 3 seconds
      setTimeout(() => {
        setToastInfo({ visible: false, message: '' });
      }, 3000);
    });
  };

  // Contact info data
  const contactInfo = [
    {
      type: 'Email',
      value: 'contact@bbmam.in',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: 'mailto:contact@bbmam.in'
    },
    {
      type: 'Mobile',
      value: '+91 93338 84664',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      href: 'tel:+919333884664'
    },
    {
      type: 'Office',
      value: '0712-2994227',
      subtitle: 'Corporate Office',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      href: 'tel:07122994227'
    }
  ];

  // Toast animation
  const toastVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1319] to-[#1a2433] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastInfo.visible && (
          <motion.div
            className="fixed top-6 right-6 z-50 bg-amber-500 text-[#0f1319] px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">{toastInfo.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

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

      <div className="container mx-auto max-w-7xl relative z-10 px-4 py-16">
        {/* Restructured flex container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch justify-center min-h-[70vh]">
          {/* Left Column - Contact Info (4 columns) */}
          <motion.div 
            className="lg:col-span-5"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/10 h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <motion.h1 
                className="text-3xl md:text-4xl font-bold mb-2"
                variants={itemVariants}
              >
                Let's Connect
              </motion.h1>
              
              <motion.p 
                className="text-amber-300/80 mb-8 text-lg"
                variants={itemVariants}
              >
                Reach out to us through any of these channels
              </motion.p>

              <motion.div 
                className="space-y-5"
                variants={containerVariants}
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="group bg-white/5 hover:bg-white/10 rounded-xl p-5 transition-all duration-300 border border-white/5 hover:border-amber-500/30"
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start justify-between">
                      <div className={`flex items-start gap-4 ${info.href ? 'cursor-pointer' : ''}`} onClick={() => info.href ? window.location.href = info.href : null}>
                        <div className="bg-amber-500/10 text-amber-400 p-3 rounded-lg">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-1">{info.type}</h3>
                          <p className="text-lg font-medium">{info.value}</p>
                          {info.subtitle && <p className="text-sm text-gray-400 mt-1">{info.subtitle}</p>}
                        </div>
                      </div>
                      
                      {/* Copy to clipboard button (for email and phone numbers) */}
                      <button 
                        onClick={() => copyToClipboard(info.value.replace(/\s+/g, ''), info.type)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-white/10 rounded-lg hover:bg-amber-500/20 text-white"
                        title={`Copy ${info.type}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Slogan (8 columns) */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="bg-[#1e252f] backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/10 h-full flex items-center justify-center"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="w-full">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  className="space-y-6 text-center"
                >
                  <div>
                    <motion.h2 
                      className="text-5xl md:text-6xl lg:text-7xl font-bold"
                      variants={textReveal}
                    >
                      LET'S CONNECT
                    </motion.h2>
                    <motion.div
                      className="h-1 w-32 bg-amber-500 mx-auto mt-4 rounded-full"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 128, opacity: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </div>
                  <motion.h2 
                    className="text-5xl md:text-6xl lg:text-7xl font-bold"
                    variants={textReveal}
                  >
                    YOUR <span className="text-amber-500">JOURNEY</span>
                  </motion.h2>
                  <motion.h2 
                    className="text-5xl md:text-6xl lg:text-7xl font-bold"
                    variants={textReveal}
                  >
                    OUR <span className="text-amber-500 text-6xl md:text-7xl lg:text-8xl">PRIORITY</span>
                  </motion.h2>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
