import React, { useState, useEffect } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ImageModal = ({ image, onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.button 
        className="absolute top-6 right-6 p-2 rounded-full bg-gray-800/60 text-white"
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
      >
        <X size={24} className="text-amber-500" />
      </motion.button>
      
      <motion.img 
        src={image} 
        alt="Gallery Image" 
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
};

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);

  // Generate array of image paths, excluding specific images
  const galleryImages = Array.from({ length: 20 }, (_, i) => {
    const imageNumber = i + 1;
    // Skip images 1, 10, 11, and 15
    if (imageNumber === 1 || imageNumber === 10 || imageNumber === 11 || imageNumber === 15) {
      return null;
    }
    return `/gallery/${imageNumber}.jpg`;
  }).filter(Boolean); // Remove null values

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target.dataset.src;
            if (image && !loadedImages.includes(image)) {
              setLoadedImages(prev => [...prev, image]);
            }
          }
        });
      },
      { rootMargin: "100px" }
    );

    document.querySelectorAll(".image-container").forEach(img => {
      observer.observe(img);
    });

    return () => {
      observer.disconnect();
    };
  }, [loadedImages]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="w-full bg-gray-900 text-white min-h-screen">
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
        className="fixed bottom-6 left-6 z-30 sm:hidden"
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

      {/* Header Section */}
      <div className="container mx-auto py-8">
        <motion.h1 
          className="text-4xl sm:text-6xl font-bold text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          GALLERY
          <motion.div 
            className="w-80 h-1 bg-amber-500 mx-auto mt-2"
            initial={{ width: 0 }}
            animate={{ width: 320 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </motion.h1>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 px-2 sm:px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryImages.map((src, index) => (
            <motion.div 
              key={index}
              className="image-container aspect-square rounded-lg overflow-hidden cursor-pointer relative"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              data-src={src}
              onClick={() => setSelectedImage(`/gallery/${index + 1}.jpg`)}
            >
              {loadedImages.includes(src) ? (
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-300 hover:brightness-110"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center animate-pulse">
                  <span className="text-amber-500/40">Loading...</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
