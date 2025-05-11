import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const advantages = [
    {
      title: "PREMIUM QUALITY FERROALLOYS",
      description: "High-grade ferroalloys that enhance steel strength and durability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.05 13.05a7 7 0 1 1 9.9 9.9L3.05 13.05zm9.9-9.9a7 7 0 0 1 9.9 9.9l-9.9-9.9zm-10.6 13.4 7.4 7.4L8 17l-5.65-1.55zm15.8-9.2L11.7 13.7l-3.1-3.1 6.35-6.35 3.2 2.1z" />
          <path d="m13 9 3 3-2 2-3-3 2-2z" />
        </svg>
      )
    },
    {
      title: "STATE-OF-THE-ART MANUFACTURING",
      description: "Advanced production technology ensures precision, efficiency, and consistency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm0 11h7v7h-7v-7zm-4-4v3h-3v7h7v-7h-3v-3h3V3h-7v7h3z" />
        </svg>
      )
    },
    {
      title: "CUSTOMIZATION & FLEXIBILITY",
      description: "Tailored solutions to meet specific industry requirements and compositions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.71 20.29 20.3 21.7 18 19.41l-1.29 1.3a1 1 0 0 1-1.42 0l-6-6a1 1 0 0 1 0-1.42l1.3-1.29L8.3 9.7l2-2-5-5H2v3.3l5 5-2 2 2.29 2.29 1.42-1.42L11 16.17l6 6a1 1 0 0 0 1.42 0l1.29-1.3 2.29 2.29 1.42-1.41-1.71-1.46zM6.17 9 5 7.83l2-2 1.17 1.17-2 2z" />
        </svg>
      )
    },
    {
      title: "RELIABILITY & TIMELY DELIVERY",
      description: "Strong logistics and supply chain management for on-time delivery.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      )
    },
    {
      title: "COMPETITIVE PRICING",
      description: "High-quality products at cost-effective prices, ensuring value for money.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
        </svg>
      )
    },
    {
      title: "SUSTAINABLE & ECO-FRIENDLY",
      description: "Commitment to environmentally responsible production practices.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zm2.44-9.56c.24.23.59.25.85.04a7.904 7.904 0 0 1 3.95-1.69c.08-.46.12-.92.12-1.39 0-4.42-3.58-8-8-8S3.36 5.58 3.36 10c0 1.84.63 3.54 1.67 4.91.31.34.85.35 1.19.05.69-.62 1.33-1.12 2.8-1.12.25 0 .42-.04.63 0 .75.13 1.86.51 2.79 1.43.2.2.39.41.56.65z" />
        </svg>
      )
    },
    {
      title: "EXPERTISE & INDUSTRY EXPERIENCE",
      description: "Backed by years of experience and a skilled workforce.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      )
    },
    {
      title: "CUSTOMER-CENTRIC APPROACH",
      description: "Dedicated support and long-term partnerships with our clients.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 13c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-3.25-.55 2.5-2.5c.29-.29.77-.29 1.06 0l2.5 2.5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L16 11.76l-1.75 1.75c-.15.15-.34.22-.53.22s-.38-.07-.53-.22c-.29-.29-.29-.77 0-1.06zM2 19c0 1.1.9 2 2 2h8c0-.69-.12-1.36-.34-2H4v-6h5.98A7 7 0 0 0 8 19c0-3.87 3.13-7 7-7h1v-2H4V6h12v4h2v-4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13z" />
        </svg>
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
      {/* Floating Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-amber-500/20 text-white hover:text-amber-500 transition-all duration-300 group hover:shadow-amber-500/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-lg font-medium">BACK</span>
      </button>

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
