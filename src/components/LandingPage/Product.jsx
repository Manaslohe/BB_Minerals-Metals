import React from "react";
import { motion } from "framer-motion";
import ProductGrid from "./ProductGrid";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function ProductsSection() {
  const navigate = useNavigate();
  const { isVisible } = useScrollAnimation("products-section");

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
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15 
      }
    }
  };

  return (
    <motion.section 
      id="products-section"
      className="w-full bg-zinc-100"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.img 
        src="/split.png" 
        alt="Decorative split" 
        className="w-full h-28 object-cover -mb-1" // Added negative margin to join with header
        variants={itemVariants}
      />
      <motion.header 
        className="px-4 py-12 w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white bg-amber-500 text-center shadow-lg"
        variants={itemVariants}
      >
        OUR PRODUCTS
      </motion.header>

      <motion.div 
        className="container mx-auto px-4 py-18 sm:py-20"
        variants={itemVariants}
      >
        <ProductGrid />
      </motion.div>

      <motion.div 
        className="flex justify-center pb-12 sm:pb-16"
        variants={itemVariants}
      >
        <motion.button
          onClick={() => navigate('/products')}
          className="px-8 py-3 text-xl sm:text-2xl font-semibold text-white bg-amber-500 rounded-full shadow-lg hover:bg-amber-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          SHOW NOW
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export default ProductsSection;
