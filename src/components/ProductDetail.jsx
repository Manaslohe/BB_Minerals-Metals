import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const navigate = useNavigate();

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const products = [
    { name: "Low Carbon Ferro Chrome", image: "/product1.png" },
    { name: "Ferro Molybdenum", image: "/product2.png" },
    { name: "High Carbon Ferro Chrome", image: "/product3.png" },
    { name: "Silicon and Manganese Metal", image: "/product4.png" }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-zinc-50"
    >
      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-amber-500 rounded-full text-white transition-all duration-300 hover:bg-amber-600 shadow-lg"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">Back</span>
      </motion.button>

      {/* Header */}
      <motion.div 
        variants={itemVariants}
        className="w-full bg-amber-500 text-white py-20 px-4"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
          OUR PRODUCTS
        </h1>
        <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
      </motion.div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-36 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800 text-center">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Other Ferro Alloys */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 inline-block relative">
            All Other Ferro Alloys
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-amber-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
