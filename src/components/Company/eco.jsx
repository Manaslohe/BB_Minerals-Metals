import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const EcoFriendly = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
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
    <div className="w-full bg-gray-900 text-white">
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

      {/* Header Section */}
      <div className="container mx-auto py-8">
        <motion.h1 
          className="text-3xl font-bold text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          ECO-FRIENDLY & SUSTAINABILITY
          <motion.div 
            className="w-80 h-1 bg-amber-500 mx-auto mt-2"
            initial={{ width: 0 }}
            animate={{ width: 320 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </motion.h1>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-gradient-to-b from-gray-800 to-gray-800/80 rounded-lg p-6 text-center shadow-xl hover:shadow-2xl hover:shadow-amber-900/10 transition-all border border-gray-700/50 hover:border-amber-600/30"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex justify-center mb-4">
              <img 
                src="/icons/tree.png" 
                alt="Tree Icon" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <h2 className="text-xl font-semibold mb-1 tracking-wide text-white">2,000 Trees Planted</h2>
            <h3 className="text-lg mb-2 font-medium text-amber-100/90">Around the Factory</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Contributing to carbon sequestration and improving air quality.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-b from-gray-800 to-gray-800/80 rounded-lg p-6 text-center shadow-xl hover:shadow-2xl hover:shadow-amber-900/10 transition-all border border-gray-700/50 hover:border-amber-600/30"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex justify-center mb-4">
              <img 
                src="/icons/filter.png" 
                alt="Filter Icon" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <h2 className="text-xl font-semibold mb-1 tracking-wide text-white">50,000 CFM Filter</h2>
            <h3 className="text-lg mb-2 font-medium text-amber-100/90">System</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Ensuring effective air purification and maintaining a clean environment.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-b from-gray-800 to-gray-800/80 rounded-lg p-6 text-center shadow-xl hover:shadow-2xl hover:shadow-amber-900/10 transition-all border border-gray-700/50 hover:border-amber-600/30"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex justify-center mb-4">
              <img 
                src="/icons/rain.png" 
                alt="Rain Icon" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <h2 className="text-xl font-semibold mb-1 tracking-wide text-white">Rainwater Harvesting</h2>
            <h3 className="text-lg mb-2 font-medium text-amber-100/90">System</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Collecting and storing rainwater to reduce dependence on external water sources and support sustainable water usage.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Banner Section */}
      <motion.div 
        className="relative h-[400px] mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div 
          className="absolute inset-0 bg-[url('/eco.png')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl font-light text-center">For People. For Planet</h2>
            <h3 className="text-5xl font-semibold text-right ml-40">Forever</h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EcoFriendly;
