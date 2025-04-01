"use client";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

function Hero() {
  const [isFullImageOpen, setIsFullImageOpen] = useState(false);

  const openFullImage = () => {
    setIsFullImageOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullImage = () => {
    setIsFullImageOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <motion.section 
        className="flex relative flex-col items-end px-0 pb-96 w-full text-6xl font-semibold text-white min-h-[724px] max-md:pb-40 max-md:max-w-full max-md:text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 mt-12 overflow-hidden">
          <img
            src="/background.png"
            alt="Hero background"
            className="object-cover size-full"
          />
          
          {/* Full Image View Button (Mobile Only) */}
          <motion.button
            className="absolute bottom-6 left-6 md:hidden bg-amber-500 p-3 rounded-full shadow-lg"
            onClick={openFullImage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            aria-label="View full image"
          >
            <Maximize2 className="h-6 w-6 text-white" />
          </motion.button>
        </div>
        
        <motion.div 
          className="relative px-16 py-16 mb-0 rounded-bl-[100px] bg-amber-500/80 max-md:px-5 max-md:py-12 max-md:mb-2.5 max-md:text-4xl mt-12"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.span 
            className="block mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            WHERE ACCURACY
          </motion.span>
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            MEETS PERFECTION
          </motion.span>
        </motion.div>
      </motion.section>

      {/* Full Image Viewer Modal */}
      <AnimatePresence>
        {isFullImageOpen && (
          <>
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="absolute top-4 right-4 z-50 bg-amber-500 p-2 rounded-full"
                onClick={closeFullImage}
                whileTap={{ scale: 0.9 }}
                aria-label="Close full image view"
              >
                <X className="h-6 w-6 text-white" />
              </motion.button>
              
              <motion.div
                className="w-full h-full flex items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/background.png"
                  alt="Hero background full view"
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Hero;