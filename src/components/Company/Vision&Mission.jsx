import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const VisionMissionPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
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
    <motion.div 
      className="min-h-screen bg-gray-900 text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Mobile-only back button at top */}
      <motion.div 
        className="p-4 pt-5 pb-0 sm:hidden relative z-30"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <motion.button 
          className="group flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-white
                  shadow-lg hover:shadow-amber-500/20 transition-all duration-300
                  active:scale-95 cursor-pointer"
          onClick={() => navigate(-1)}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={18} className="text-amber-500" />
          <span className="font-medium text-sm">Back</span>
        </motion.button>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Vision & Mission Section */}
        <motion.div 
          className="lg:w-1/2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 lg:p-8 flex items-center justify-center relative"
          variants={itemVariants}
        >
          {/* Desktop-only back button - unchanged */}
          <motion.div 
            className="absolute top-4 left-4 sm:top-6 sm:left-6 hidden sm:block z-30"
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
          
          <motion.div 
            className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] p-8 border border-gray-700/50 hover:border-amber-600/30 transition-all duration-500 max-w-2xl w-full"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            variants={itemVariants}
          >
            {/* Vision Section */}
            <motion.div className="mb-8 relative group" variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-3 shadow-lg transition-all duration-300">
                  <img 
                    src="/icons/vision.png" 
                    alt="Vision Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h2 className="text-4xl font-bold text-white tracking-wider group-hover:text-amber-500 transition-colors duration-300">VISION</h2>
              </div>
              <ul className="space-y-3 text-gray-300 text-lg pl-4">
                {/* Vision List Items */}
                <motion.li 
                  className="flex items-start hover:bg-gray-700/50 p-3 rounded-lg transition-all duration-300 hover:translate-x-1"
                  variants={itemVariants}
                >
                  <span className="text-amber-500 text-2xl leading-none mr-3">•</span>
                  <p className="text-lg">Be a <span className="font-semibold text-white hover:text-amber-500 transition-colors duration-300">global leader</span> in high-quality metal products.</p>
                </motion.li>
                <motion.li 
                  className="flex items-start hover:bg-gray-700/50 p-3 rounded-lg transition-all duration-300 hover:translate-x-1"
                  variants={itemVariants}
                >
                  <span className="text-amber-500 text-2xl leading-none mr-3">•</span>
                  <p className="text-lg">Drive <span className="font-semibold text-white hover:text-amber-500 transition-colors duration-300">innovation and sustainability</span> in the metal industry.</p>
                </motion.li>
                <motion.li 
                  className="flex items-start hover:bg-gray-700/50 p-3 rounded-lg transition-all duration-300 hover:translate-x-1"
                  variants={itemVariants}
                >
                  <span className="text-amber-500 text-2xl leading-none mr-3">•</span>
                  <p className="text-lg">Revolutionize the metal sector with <span className="font-semibold text-white hover:text-amber-500 transition-colors duration-300">cutting-edge technology</span>.</p>
                </motion.li>
              </ul>
            </motion.div>

            {/* Enhanced Decorative Divider */}
            <motion.div 
              className="my-6 flex items-center gap-4 group"
              variants={itemVariants}
            >
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent group-hover:via-amber-500/40 transition-all duration-500"></div>
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent group-hover:via-amber-500/40 transition-all duration-500"></div>
            </motion.div>

            {/* Mission Section */}
            <motion.div className="relative group" variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-3 shadow-lg">
                  <img 
                    src="/icons/mission.png" 
                    alt="Mission Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold text-white tracking-wider group-hover:text-amber-500 transition-colors duration-300">MISSION</h2>
              </div>
              <ul className="space-y-3 text-gray-300 text-lg pl-4">
                {/* Mission List Items */}
                <motion.li 
                  className="flex items-start hover:bg-gray-700/50 p-3 rounded-lg transition-all duration-300 hover:translate-x-1" 
                  variants={itemVariants}
                >
                  <span className="text-amber-500 text-2xl leading-none mr-3">•</span>
                  <p className="text-lg">Deliver <span className="font-semibold text-white hover:text-amber-500 transition-colors duration-300">premium metal products</span> with reliability and innovation.</p>
                </motion.li>
                <motion.li 
                  className="flex items-start hover:bg-gray-700/50 p-3 rounded-lg transition-all duration-300 hover:translate-x-1"
                  variants={itemVariants}
                >
                  <span className="text-amber-500 text-2xl leading-none mr-3">•</span>
                  <p className="text-lg">Exceed expectations through <span className="font-semibold text-white hover:text-amber-500 transition-colors duration-300">quality and trust</span>.</p>
                </motion.li>
                <motion.li 
                  className="flex items-start hover:bg-gray-700/50 p-3 rounded-lg transition-all duration-300 hover:translate-x-1"
                  variants={itemVariants}
                >
                  <span className="text-amber-500 text-2xl leading-none mr-3">•</span>
                  <p className="text-lg">Contribute to <span className="font-semibold text-white hover:text-amber-500 transition-colors duration-300">sustainable growth</span> in industries worldwide.</p>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tagline & Image Section */}
        <motion.div 
          className="lg:w-1/2 h-[600px] lg:h-screen relative overflow-hidden"
          variants={itemVariants}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url('/mission.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <motion.div 
                  className="space-y-8 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  {/* Main Title */}
                  <motion.div 
                    className="transform hover:scale-105 transition-all duration-500"
                    variants={itemVariants}
                  >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider">
                      <span className="block mb-4 text-white drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                        INSPIRING
                      </span>
                      <span className="block text-amber-500 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                        TOMORROW
                      </span>
                    </h1>
                  </motion.div>

                  {/* Decorative Elements */}
                  <motion.div 
                    className="flex justify-center space-x-4"
                    variants={itemVariants}
                  >
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent my-auto"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse"></div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 via-amber-500 to-transparent my-auto"></div>
                  </motion.div>

                  {/* Subtitle */}
                  <motion.div 
                    className="transform hover:scale-105 transition-all duration-500"
                    variants={itemVariants}
                  >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-[0.2em]">
                      <span className="block text-white mb-2">DELIVERING</span>
                      <span className="block text-amber-500 text-shadow-lg">EXCELLENCE</span>
                    </h2>
                  </motion.div>

                  {/* Quote Box */}
                  <motion.div 
                    className="mt-12 max-w-lg mx-auto"
                    variants={itemVariants}
                  >
                    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-amber-500/10 transform hover:scale-105 transition-all duration-500 hover:border-amber-500/30">
                      <p className="text-white/90 text-xl font-light italic leading-relaxed">
                        "Crafting tomorrow's solutions with uncompromising excellence and revolutionary innovation"
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VisionMissionPage;