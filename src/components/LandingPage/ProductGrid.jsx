import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const ProductGrid = () => {
  const { isVisible } = useScrollAnimation("product-grid");
  const [hoveredId, setHoveredId] = useState(null);

  const products = [
    {
      id: 1,
      image: "/product1.png",
      name: "Product 1",
      price: "$299"
    },
    {
      id: 2,
      image: "/product2.png",
      name: "Product 2",
      price: "$399"
    },
    {
      id: 3,
      image: "/product3.png",
      name: "Product 3",
      price: "$499"
    },
    {
      id: 4,
      image: "/product4.png",
      name: "Product 4",
      price: "$599"
    }
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <motion.div 
      id="product-grid"
      className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
      variants={gridVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          variants={cardVariants}
          onHoverStart={() => setHoveredId(product.id)}
          onHoverEnd={() => setHoveredId(null)}
          className="group relative aspect-square bg-white rounded-xl shadow-md overflow-hidden"
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          <div className="relative w-full h-full">
            <motion.img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-contain p-4"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            
            <motion.div
              className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <motion.div
            className="absolute inset-0 rounded-xl ring-2 ring-amber-500/0 group-hover:ring-amber-500/100 transition-all duration-300"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;