import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const advantages = [
    {
      title: "PREMIUM QUALITY FERROALLOYS",
      description: "High-grade ferroalloys that enhance steel strength and durability.",
      icon: "⚡"
    },
    {
      title: "STATE-OF-THE-ART MANUFACTURING",
      description: "Advanced production technology ensures precision, efficiency, and consistency.",
      icon: "🏭"
    },
    {
      title: "CUSTOMIZATION & FLEXIBILITY",
      description: "Tailored solutions to meet specific industry requirements and compositions.",
      icon: "🔧"
    },
    {
      title: "RELIABILITY & TIMELY DELIVERY",
      description: "Strong logistics and supply chain management for on-time delivery.",
      icon: "🚚"
    },
    {
      title: "COMPETITIVE PRICING",
      description: "High-quality products at cost-effective prices, ensuring value for money.",
      icon: "💰"
    },
    {
      title: "SUSTAINABLE & ECO-FRIENDLY",
      description: "Commitment to environmentally responsible production practices.",
      icon: "🌿"
    },
    {
      title: "EXPERTISE & INDUSTRY EXPERIENCE",
      description: "Backed by years of experience and a skilled workforce.",
      icon: "👥"
    },
    {
      title: "CUSTOMER-CENTRIC APPROACH",
      description: "Dedicated support and long-term partnerships with our clients.",
      icon: "🤝"
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50/30 relative">
      {/* Floating Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-amber-500/20 text-blue-900 hover:text-amber-500 transition-all duration-300 group hover:shadow-amber-500/20"
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
        <span className="text-lg font-medium">Back</span>
      </button>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            WHY CHOOSE US
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
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
