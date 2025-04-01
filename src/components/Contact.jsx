import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Clipboard, Check, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPage = () => {
  const [copyFeedback, setCopyFeedback] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(`${type} copied to clipboard!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 } 
    }
  };
  
  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-screen bg-gradient-to-br from-amber-50 to-white overflow-hidden font-sans flex flex-col lg:flex-row relative"
    >
      {/* Back Button */}
      <motion.button
        onClick={() => window.history.back()}
        variants={itemVariants}
        className="absolute top-6 left-6 z-50 flex items-center space-x-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Back</span>
      </motion.button>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center space-x-2"
          >
            <Check size={18} />
            <span>{copyFeedback}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Section */}
      <motion.div 
        variants={itemVariants}
        className="w-full lg:w-1/2 bg-gradient-to-br from-amber-500 to-amber-400 p-8 lg:p-12 flex flex-col justify-between h-full relative overflow-hidden"
      >
        <div className="relative z-10">
          <motion.h1 
            variants={itemVariants}
            className="text-5xl lg:text-5xl font-bold text-white mb-8 tracking-tight mt-16 lg:mt-6"
          >
            Let's Connect
          </motion.h1>
          
          <div className="mt-12 space-y-8">
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-between group bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center flex-1">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <Mail className="text-white" size={24} />
                </div>
                <a 
                  href="mailto:contact@bbmam.in" 
                  className="text-lg md:text-xl font-semibold text-white group-hover:translate-x-1 transition-transform duration-300"
                >
                  contact@bbmam.in
                </a>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleCopy('contact@bbmam.in', 'Email')}
                className="ml-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
              >
                <Clipboard className="text-white" size={20} />
              </motion.button>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-between group bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center flex-1">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <Phone className="text-white" size={24} />
                </div>
                <a 
                  href="tel:+919333884664" 
                  className="text-lg md:text-xl font-semibold text-white tracking-wide group-hover:translate-x-1 transition-transform duration-300"
                >
                  +91 9333 888 4664
                </a>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleCopy('+919333884664', 'Phone number')}
                className="ml-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
              >
                <Clipboard className="text-white" size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>
        
        {/* Map Container */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 flex-grow rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5578365673726!2d88.39735911541629!3d22.52691003915845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771346ae015d%3A0xb8d0cb490ed5babe!2sScience%20City%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1649424271945!5m2!1sen!2sin" 
            className="w-full h-full"
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.div>
      
      {/* Right Section */}
      <motion.div 
        variants={itemVariants}
        className="w-full lg:w-1/2 relative h-full bg-gradient-to-br from-gray-900 to-gray-800"
      >
        <div className="absolute inset-0 opacity-60">
          <img 
            src="/contact.png" 
            alt="Support representative" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        
        <motion.div 
          variants={itemVariants}
          className="absolute bottom-4 lg:bottom-12 right-4 lg:right-12 max-w-[85%] lg:max-w-md"
        >
          <div className="bg-white/10 backdrop-blur-md p-4 lg:p-6 rounded-2xl shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Your Success</h3>
            <p className="text-base lg:text-lg text-white/90">Our commitment to excellence ensures your business growth journey is seamless and successful.</p>
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="absolute top-4 lg:top-12 left-4 lg:left-12 max-w-[85%] lg:max-w-sm"
        >
          <div className="bg-white/10 backdrop-blur-md p-4 lg:p-6 rounded-2xl shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
            <h3 className="text-lg lg:text-xl font-semibold text-white flex items-center mb-2 lg:mb-3">
              <MessageSquare size={20} className="mr-2" />
              24/7 Support
            </h3>
            <p className="text-sm lg:text-base text-white/80">
              Our dedicated team is always here to help you succeed. Expect a response within 24 hours on business days.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;