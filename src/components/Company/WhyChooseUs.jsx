import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const WhyChooseUs = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const advantages = [
    {
      title: "PREMIUM QUALITY FERROALLOYS",
      description: "High-grade ferroalloys that enhance steel strength and durability.",
      icon: (
        <img
          src="/icons/premium.png"
          alt="Premium Quality"
          className="h-12 w-12 object-contain text-amber-500"
        />
      )
    },
    {
      title: "STATE-OF-THE-ART MANUFACTURING",
      description: "Advanced production technology ensures precision, efficiency, and consistency.",
      icon: (
       <img
          src="/icons/manufacturing.png"
          alt="Manufacturing"
          className="h-12 w-12 object-contain text-amber-500"
        />
      )
    },
    {
      title: "CUSTOMIZATION & FLEXIBILITY",
      description: "Tailored solutions to meet specific industry requirements and compositions.",
      icon: (
      <img
          src="/icons/customize.png"
          alt="Customization"
          className="h-12 w-12 object-contain text-amber-500"
        />
      )
    },
    {
      title: "RELIABILITY & TIMELY DELIVERY",
      description: "Strong logistics and supply chain management for on-time delivery.",
      icon: (
       <img
          src="/icons/delivery.png"
          alt="Delivery"
          className="h-12 w-12 object-contain text-amber-500"
        />
      )
    },
    {
      title: "COMPETITIVE PRICING",
      description: "High-quality products at cost-effective prices, ensuring value for money.",
      icon: (
       <img
          src="/icons/pricing.png"
          alt="Pricing"
          className="h-12 w-12 object-contain text-amber-500"
        />
      )
    },
    {
      title: "SUSTAINABLE & ECO-FRIENDLY",
      description: "Commitment to environmentally responsible production practices.",
      icon: (
      <img
          src="/icons/sustainability.png"
          alt="Sustainability"
          className="h-12 w-12 object-contain text-amber-500"
        />
      )
    },
    {
      title: "EXPERTISE & INDUSTRY EXPERIENCE",
      description: "Backed by years of experience and a skilled workforce.",
      icon: (
      <img
          src="/icons/people.png"
          alt="Expertise"
          className="h-12 w-12 object-contain text-amber-500"
        />
      )
    },
    {
      title: "CUSTOMER-CENTRIC APPROACH",
      description: "Dedicated support and long-term partnerships with our clients.",
      icon: (
   <img
          src="/icons/customer.png"
          alt="Customer Centric"
          className="h-12 w-12 object-contain text-amber-500"
        />
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.6 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: { 
      scale: 1, 
      rotate: 0, 
      transition: { type: "spring", stiffness: 200, delay: 0.2 }
    },
    hover: { 
      scale: 1.15, 
      rotate: 5, 
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      {/* Back button - desktop */}
      <motion.div 
        className="p-4 sm:p-6 hidden sm:block relative z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
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

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            WHY CHOOSE US
          </h1>
          <div className="w-32 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {advantages.slice(0, 6).map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-slate-800 p-6 rounded-xl shadow-lg border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              <motion.div 
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="mb-5 flex justify-center"
              >
                {advantage.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom two advantages in a separate row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6"
        >
          {advantages.slice(6, 8).map((advantage, index) => (
            <motion.div
              key={index + 6}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-slate-800 p-6 rounded-xl shadow-lg border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              <motion.div 
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="mb-5 flex justify-center"
              >
                {advantage.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
