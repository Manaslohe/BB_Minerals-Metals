"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThreeDViewer from "./ThreeDViewer";

// Product specific data mapping
const productDetailsData = {
  "Low Carbon Ferro Chrome": {
    overview: "Low Carbon Ferro Chrome (LC FeCr) is an essential alloy primarily used in steelmaking and other industrial applications. It is a crucial source of chromium with minimal carbon content, making it ideal for high-quality steel production.",
    uses: [
      { title: "Stainless Steel Production", desc: " – Enhances corrosion resistance and strength." },
      { title: "High-Performance Alloys", desc: " – Used in superalloys for aerospace and industrial applications." },
      { title: "Tool & Die Steel", desc: " – Improves wear resistance and durability." },
      { title: "Welding Electrodes", desc: " – Ensures high-quality welds with minimal impurities." },
      { title: "Foundry & Castings", desc: " – Provides hardness and oxidation resistance in metal casting." }
    ],
    composition: [
      { element: "Chromium (Cr)", value: "60-70%" },
      { element: "Carbon (C)", value: "<0.1-0.2%" },
      { element: "Silicon (Si)", value: "1-3%" },
      { element: "Sulfur (S)", value: "<0.05%" },
      { element: "Phosphorus (P)", value: "<0.05%" }
    ],
    properties: [
      "High purity with minimal carbon content",
      "Excellent corrosion resistance",
      "High melting point and heat resistance"
    ],
    hasTypes: false
  },
  "High Carbon Ferro Chrome": {
    overview: "High Carbon Ferro Chrome (HC FeCr) is a key alloy used in steelmaking, providing essential chromium content along with high carbon levels. It is widely used in industries requiring strong, wear-resistant materials.",
    uses: [
      { title: "Stainless Steel Manufacturing", desc: " – Increases strength, hardness, and corrosion resistance." },
      { title: "Carbon & Alloy Steel Production", desc: " – Enhances durability and wear resistance." },
      { title: "Hardfacing & Welding Electrodes", desc: " – Used in wear-resistant coatings and welding applications." },
      { title: "Refractory Applications", desc: " – Provides stability and heat resistance in high-temperature environments." }
    ],
    composition: [
      { element: "Chromium (Cr)", value: "60-70%" },
      { element: "Carbon (C)", value: "4-10%" },
      { element: "Silicon (Si)", value: "1-4%" },
      { element: "Sulfur (S)", value: "<0.05%" },
      { element: "Phosphorus (P)", value: "<0.050%" }
    ],
    properties: [
      "High hardness and wear resistance",
      "Excellent corrosion resistance",
      "High melting point, making it suitable for steel manufacturing"
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
    uses: [
      { title: "High-Strength Steel Production", desc: "– Improves toughness, wear resistance, and tensile strength." },
      { title: "Stainless Steel & Alloy Steel", desc: "– Enhances corrosion resistance and heat stability." },
      { title: "Automotive & Aerospace Industry", desc: "– Used in high-performance alloys for durability." },
      { title: "Energy & Power Plants", desc: "– Essential in the production of heat-resistant materials." },
      { title: "Castings & Foundry Industry", desc: "– Provides improved strength and oxidation resistance in metal" }
    ],
    composition: [
      { element: "Molybdenum (Mo)", value: "60-75%" },
      { element: "Carbon (C)", value: "<0.1%" },
      { element: "Silicon (Si)", value: "<1.0%" },
      { element: "Sulfur (S)", value: "<0.08%" },
      { element: "Phosphorus (P)", value: "<0.05%" },
      { element: "Copper(CU)", value: "<0.5%" }
    ],
    properties: [
      "Enhances strength, toughness, and hardness of steel",
      "Provides high-temperature resistance",
      "Improves wear resistance and corrosion resistance"
    ],
    hasTypes: false
  },
  "Silicon Metal": {
    overview: "Silicon Metal is an essential industrial material widely used in alloy production, steel manufacturing, and advanced technologies. It enhances strength, durability, and resistance in a variety of applications.",
    uses: [
      { title: "Aluminum Industry", desc: "– Enhances strength and castability in aluminum-silicon alloys for automotive and aerospace." },
      { title: "Chemical Industry", desc: "– Key ingredient in producing silicones for lubricants, sealants, and cosmetics." },
      { title: "Electronics & Solar Industry", desc: "– Used in semiconductors and photovoltaic cells due to its electrical properties." },
      { title: "Steelmaking", desc: "– Acts as a deoxidizer and alloying agent in steel and iron production." }
    ],
    composition: [
      { element: "Silicon (Si)", value: "98.5–99.9%" },
      { element: "Iron (Fe)", value: "≤ 0.5%" },
      { element: "Aluminum (Al)", value: "≤ 0.3%" },
      { element: "Calcium (Ca)", value: "≤ 0.1%" },
      { element: "Carbon (C)", value: "≤ 0.1%" }
    ],
    properties: [
      "Excellent electrical conductivity and thermal stability",
      "High purity and low impurity content for consistent alloying",
      "Increases hardness and strength when alloyed with metals"
    ],
    hasTypes: false,
    gradeSpecifications: [
      { grade: "553", si: "98.5", fe: "0.5", al: "0.5", ca: "0.3" },
      { grade: "441", si: "99.0", fe: "0.4", al: "0.4", ca: "0.1" }
    ]
  },
  "Manganese Flake": {
    overview: "Manganese Flake is a vital industrial element extensively used in steel production, battery manufacturing, and chemical processes. It improves hardness, tensile strength, and corrosion resistance across a wide range of applications.",
    uses: [
      { title: "Steel & Iron Production", desc: "– Acts as a deoxidizer and improves toughness, strength, and wear resistance." },
      { title: "Non-Ferrous Alloys", desc: "– Enhances strength and resistance in alloys used in specialized applications." },
      { title: "Battery Industry", desc: "– Used in manufacturing lithium-ion and dry-cell batteries." },
      { title: "Chemical Industry", desc: "– Serves as a catalyst or reagent in various chemical processes." }
    ],
    composition: [
      { element: "Manganese", value: "99.70%" },
      { element: "Carbon", value: "0.04% Max" },
      { element: "Fe + Si + Se", value: "0.205% Max" },
      { element: "Sulphur", value: "0.05% Max" },
      { element: "Phosphorus", value: "0.005% Max" }
    ],
    properties: [
      "Rapidly dissolves in molten metals, ensuring efficient alloying",
      "Enhances strength, hardness, and wear resistance of steels",
      "Provides excellent deoxidizing capability for cleaner steel production"
    ],
    hasTypes: false
  }
};

// FloatingAnimation component using Tailwind CSS
const FloatingAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
  const [is3DViewerOpen, setIs3DViewerOpen] = useState(false);

  const productName = product?.name?.trim() || "High Carbon Ferro Chrome";
  const productImage = product?.image || "https://cdn.builder.io/api/v1/image/assets/TEMP/b16646be3adda7285fa4a2ab2daa099b61a0a66b";
  const productData = productDetailsData[productName] || productDetailsData["High Carbon Ferro Chrome"];
  
  React.useEffect(() => {
    if (!productDetailsData[productName]) {
      console.warn(`Product data not found for: "${productName}"`);
    }
  }, [productName]);

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
      className="bg-gray-900 rounded-xl p-6 sm:p-8 relative overflow-hidden max-h-[90vh] overflow-y-auto"
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
        <motion.div 
          className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 p-4 md:p-6 pl-6 md:pl-12 bg-gray-800/90 rounded-lg"
          variants={itemVariants}
        >
          <motion.figure 
            className="flex justify-center items-center w-full md:w-auto perspective-1000 relative"
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
            
            <motion.button
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-amber-500 hover:bg-amber-600 
                        text-gray-900 font-bold py-2 px-7 min-w-[150px] rounded-full flex items-center justify-center gap-2 shadow-lg"
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIs3DViewerOpen(true)}
            >
              View in 360°
            </motion.button>
          </motion.figure>

          <div className="flex flex-col gap-8">
            <motion.article 
              className="flex flex-col md:flex-row gap-4 items-start"
              variants={itemVariants}
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
                >
                  Overview
                </motion.h2>
                <motion.p className="text-sm md:text-base leading-6 md:leading-7 text-neutral-300">
                  {productData.overview}
                </motion.p>
              </div>
            </motion.article>

            <motion.article 
              className="flex flex-col md:flex-row gap-4 items-start"
              variants={itemVariants}
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
                >
                  Applications
                </motion.h2>
                <motion.div 
                  className="flex flex-col gap-2"
                  variants={listVariants}
                >
                  {productData.uses.map((item, index) => (
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
            
            {productData.hasTypes && (
              <motion.article 
                className="flex flex-col md:flex-row gap-4 items-start"
                variants={itemVariants}
              >
                <motion.img
                  src="/icons/grade.png"
                  alt="Types icon"
                  className="w-10 h-10"
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div>
                  <motion.h2 
                    className="mb-2 text-2xl font-bold text-white"
                  >
                   Types
                  </motion.h2>
                  <motion.div 
                    className="flex flex-col gap-2"
                    variants={listVariants}
                  >
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

        {/* Two/Three Column Layout below image */}
        <div className={`grid grid-cols-1 ${productName === "Silicon Metal" ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6 mt-8`}>
          {/* Grade Specifications Column - Only for Silicon Metal */}
          {productName === "Silicon Metal" && (
            <motion.article 
              className="bg-gray-800/90 p-6 rounded-lg order-first"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/icons/grade.png" 
                  alt="Grade Specifications Icon" 
                  className="w-7 h-7 object-contain"
                />
                <h3 className="text-xl font-bold text-white">Grade Specifications</h3>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-5 gap-2 text-neutral-300 text-sm font-semibold mb-2">
                  <div>Grade</div>
                  <div>Si(%)</div>
                  <div>Fe(%)</div>
                  <div>Al(%)</div>
                  <div>Ca(%)</div>
                </div>
                {productData.gradeSpecifications?.map((spec, index) => (
                  <div key={index} className="grid grid-cols-5 gap-2 text-neutral-300 text-sm">
                    <div>{spec.grade}</div>
                    <div>{spec.si}</div>
                    <div>{spec.fe}</div>
                    <div>{spec.al}</div>
                    <div>{spec.ca}</div>
                  </div>
                ))}
              </div>
            </motion.article>
          )}

          {/* Composition Column */}
          <motion.article 
            className="bg-gray-800/90 p-6 rounded-lg"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/icons/composition.png" 
                alt="Composition Icon" 
                className="w-7 h-7 object-contain"
              />
              <h3 className="text-xl font-bold text-white">Composition</h3>
            </div>
            <div className="space-y-2">
              {productData.composition.map((item, index) => (
                <div key={index} className="flex justify-between text-neutral-300">
                  <span>{item.element}</span>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.article>

          {/* Properties Column */}
          <motion.article 
            className="bg-gray-800/90 p-6 rounded-lg"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/icons/properties.png" 
                alt="Properties Icon" 
                className="w-7 h-7 object-contain"
              />
              <h3 className="text-xl font-bold text-white">Properties</h3>
            </div>
            <ul className="space-y-2">
              {productData.properties.map((property, index) => (
                <li key={index} className="text-neutral-300 flex items-start gap-2">
                  <span className="min-w-[5px] min-h-[5px] bg-gray-400 rounded-full mt-2"></span>
                  <span>{property}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        <motion.div 
          className="absolute top-0 left-0 w-2 md:w-3 bg-amber-500 h-full z-10 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.section>

      {/* Using the new ThreeDViewer component */}
      <ThreeDViewer 
        isOpen={is3DViewerOpen} 
        onClose={() => setIs3DViewerOpen(false)} 
        productName={productName}
      />
    </motion.div>
  );
}

export default ProductDetail;
