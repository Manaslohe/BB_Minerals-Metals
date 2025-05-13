"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Product specific data mapping
const productDetailsData = {
  "Low Carbon Ferro Chrome": {
    overview: "Low Carbon Ferro Chrome (LC FeCr) is an essential alloy primarily used in steelmaking and other industrial applications. It is a crucial source of chromium with minimal carbon content, making it ideal for high-quality steel production.",
    applications: [
      { title: "Stainless Steel Production", desc: "– Enhances corrosion resistance and strength." },
      { title: "High-Performance Alloys", desc: "– Used in superalloys for aerospace and industrial applications." },
      { title: "Tool & Die Steel", desc: "– Improves wear resistance and durability." },
      { title: "Welding Electrodes", desc: "– Ensures high-quality welds with minimal impurities." },
      { title: "Foundry & Castings", desc: "– Provides hardness and oxidation resistance in metal casting." }
    ],
    hasTypes: false
  },
  "High Carbon Ferro Chrome": {
    overview: "High Carbon Ferro Chrome (HC FeCr) is a key alloy used in steelmaking, providing essential chromium content along with high carbon levels. It is widely used in industries requiring strong, wear-resistant materials.",
    applications: [
      { title: "Stainless Steel Manufacturing", desc: "– Increases strength, hardness, and corrosion resistance." },
      { title: "Carbon & Alloy Steel Production", desc: "– Enhances durability and wear resistance." },
      { title: "Hardfacing & Welding Electrodes", desc: "– Used in wear-resistant coatings and welding applications." },
      { title: "Refractory Applications", desc: "– Provides stability and heat resistance in high-temperature environments." }
    ],
    hasTypes: true,
    types: [
      { title: "Standard Low Phosphorus HC FeCr", desc: "" },
      { title: "Ultra Low Phosphorus HC FeCr", desc: "" },
      { title: "Low Titanium HC FeCr", desc: "" }
    ]
  },
  "Ferro Molybdenum": {
    overview: "Ferro Molybdenum (FeMo) is an important alloying element used in steel production to enhance strength, hardness, and corrosion resistance. It is primarily composed of molybdenum and iron, making it essential for high-performance applications.",
    applications: [
      { title: "High-Strength Steel Production", desc: "– Improves toughness, wear resistance, and tensile strength." },
      { title: "Stainless Steel & Alloy Steel", desc: "– Enhances corrosion resistance and heat stability." },
      { title: "Automotive & Aerospace Industry", desc: "– Used in high-performance alloys for durability." },
      { title: "Energy & Power Plants", desc: "– Essential in the production of heat-resistant materials." },
      { title: "Castings & Foundry Industry", desc: "– Provides improved strength and oxidation resistance in metal" }
    ],
    hasTypes: false
  },
  "Silicon Metal": {
    overview: "Silicon Metal is an essential industrial material widely used in alloy production, steel manufacturing, and advanced technologies. It enhances strength, durability, and resistance in a variety of applications.",
    applications: [
      { title: "Steel & Alloy Manufacturing", desc: "– Improves strength, hardness, and impact resistance." },
      { title: "Aluminum Alloys", desc: "– Enhances corrosion resistance, lightweight properties, and durability." },
      { title: "Electronics & Semiconductors", desc: "– Silicon is a key component in microchips and solar panels." },
      { title: "Chemical Industry", desc: "– Used in silicones, lubricants, pigments, and industrial chemicals." },
      { title: "Foundry & Casting", desc: "– Provides heat resistance and improves metal fluidity and finish." }
    ],
    hasTypes: false
  },
  "Manganese Flake": {
    overview: "Manganese Flake is a vital industrial element extensively used in steel production, battery manufacturing, and chemical processes. It improves hardness, tensile strength, and corrosion resistance across a wide range of applications.",
    applications: [
      { title: "Battery Production", desc: "– Essential in lithium-ion and dry-cell batteries for energy storage." },
      { title: "Steel Production", desc: "– Improves tensile strength, wear resistance, and deoxidization in steel." },
      { title: "Welding Electrodes", desc: "– Used as an additive in manufacturing electrodes for stronger welds." },
      { title: "Chemical Applications", desc: "– Used in fertilizers, ceramics, and pharmaceutical formulations." },
      { title: "Metal Alloys", desc: "– Adds hardness and resilience to specialty alloys and castings." }
    ],
    hasTypes: false
  }
};

// FloatingAnimation component using Tailwind CSS
const FloatingAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Particles/Dots */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-amber-500/30 
                     animate-float-slow 
                     ${i % 3 === 0 ? 'w-4 h-4 lg:w-6 lg:h-6' : 
                       i % 3 === 1 ? 'w-3 h-3 lg:w-4 lg:h-4' : 'w-2 h-2 lg:w-3 lg:h-3'}`}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            opacity: 0.2 + Math.random() * 0.4,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${7 + Math.random() * 8}s`
          }}
        />
      ))}
      
      {/* Gradient Orb */}
      <div 
        className="absolute -top-32 -left-32 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute -bottom-32 -right-32 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"
        style={{ animationDuration: '10s', animationDelay: '2s' }}
      />
    </div>
  );
};

function ProductDetail({ product, isClosing = false }) {
  // Get product specific data or use default
  const productName = product?.name?.trim() || "High Carbon Ferro Chrome"; // Trim whitespace from product name
  const productImage = product?.image || "https://cdn.builder.io/api/v1/image/assets/TEMP/b16646be3adda7285fa4a2ab2daa099b61a0a66b";
  const productData = productDetailsData[productName] || productDetailsData["High Carbon Ferro Chrome"];
  
  // Debug check - log if we're not finding the product data
  React.useEffect(() => {
    if (!productDetailsData[productName]) {
      console.warn(`Product data not found for: "${productName}"`);
    }
  }, [productName]);

  // Animation variants for staggered elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  // Animation variants for bullet points with staggered delay
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 500, damping: 25 }
    }
  };

  return (
    <motion.div 
      className="bg-gray-900 rounded-xl p-6 sm:p-8 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <FloatingAnimation />

      <motion.h1 
        className="mb-6 text-3xl md:text-4xl font-bold text-white"
        variants={itemVariants}
      >
        {productName}
      </motion.h1>

      <motion.section className="relative" variants={itemVariants}>
        {/* Main content container */}
        <motion.div 
          className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 p-4 md:p-6 pl-6 md:pl-12 bg-gray-800 rounded-lg
                    hover:bg-gray-800/90 transition-colors duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {/* Product Image with Framer Motion effects */}
          <motion.figure 
            className="flex justify-center items-center w-full md:w-auto perspective-1000"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="relative transform-style-3d w-full h-auto"
              whileHover={{ 
                rotateY: [0, 5, -5, 0],
                transition: { 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror"
                }
              }}
            >
              <img
                src={productImage}
                alt={productName}
                className="h-56 md:h-72 lg:h-96 object-contain mx-auto drop-shadow-2xl"
                style={{
                  filter: "drop-shadow(0px 20px 25px rgba(0, 0, 0, 0.6))",
                  transformOrigin: "center center"
                }}
              />
              <div 
                className="absolute inset-0 bg-gradient-radial from-transparent to-gray-800/20 pointer-events-none"
                style={{
                  transform: "translateZ(-70px) rotateX(45deg)",
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  opacity: "0.6"
                }}
              ></div>
            </motion.div>
          </motion.figure>

          <div className="flex flex-col gap-8">
            {/* Overview Section */}
            <motion.article 
              className="flex flex-col md:flex-row gap-4 items-start"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <motion.img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c7b4a5c47fdf0773dee819f17e985a3eb0a9317"
                alt="Overview icon"
                className="w-12 h-12"
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div>
                <motion.h2 
                  className="mb-2 text-2xl font-bold text-white"
                  whileHover={{ color: "#f59e0b", transition: { duration: 0.2 } }}
                >
                  Overview
                </motion.h2>
                <motion.p className="text-sm md:text-base leading-6 md:leading-7 text-neutral-300">
                  {productData.overview}
                </motion.p>
              </div>
            </motion.article>

            {/* Uses & Applications Section */}
            <motion.article 
              className="flex flex-col md:flex-row gap-4 items-start"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <motion.img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2109d836c2fb631d1f6508552cf22a82d41a4441"
                alt="Uses & Applications icon"
                className="w-12 h-12"
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div>
                <motion.h2 
                  className="mb-2 text-2xl font-bold text-white"
                  whileHover={{ color: "#f59e0b", transition: { duration: 0.2 } }}
                >
                  Uses & Applications
                </motion.h2>
                <motion.div 
                  className="flex flex-col gap-2"
                  variants={listVariants}
                >
                  {/* Bullet Points with Framer Motion */}
                  {productData.applications.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex gap-2 items-center"
                      variants={listItemVariants}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <motion.span 
                        className="min-w-[5px] min-h-[5px] bg-gray-400 rounded-full"
                        whileHover={{ backgroundColor: "#f59e0b", scale: 1.5 }}
                      ></motion.span>
                      <p className="text-sm md:text-base text-neutral-300">
                        <strong className="font-bold">{item.title}</strong>
                        <span>{item.desc}</span>
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.article>
            
            {/* Types Section - Only for High Carbon Ferro Chrome */}
            {productData.hasTypes && (
              <motion.article 
                className="flex flex-col md:flex-row gap-4 items-start"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <motion.img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2109d836c2fb631d1f6508552cf22a82d41a4441"
                  alt="Types icon"
                  className="w-12 h-12"
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div>
                  <motion.h2 
                    className="mb-2 text-2xl font-bold text-white"
                    whileHover={{ color: "#f59e0b", transition: { duration: 0.2 } }}
                  >
                    Under High Carbon Ferro Chrome
                  </motion.h2>
                  <motion.div 
                    className="flex flex-col gap-2"
                    variants={listVariants}
                  >
                    {/* Bullet Points */}
                    {productData.types.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex gap-2 items-center"
                        variants={listItemVariants}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        <motion.span 
                          className="min-w-[5px] min-h-[5px] bg-amber-500 rounded-full"
                          whileHover={{ scale: 1.5 }}
                        ></motion.span>
                        <p className="text-sm md:text-base text-neutral-300">
                          <strong className="font-bold">{item.title}</strong>
                          <span>{item.desc}</span>
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.article>
            )}
          </div>
        </motion.div>

        {/* Vertical amber line with proper z-index and positioning */}
        <motion.div 
          className="absolute top-0 left-0 w-2 md:w-3 bg-amber-500 h-full z-10 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.section>
    </motion.div>
  );
}

export default ProductDetail;
