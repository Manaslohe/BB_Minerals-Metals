"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function PartnersSection() {
  const { isVisible } = useScrollAnimation("partners-section");

  const partners = [
    {
      id: 1,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/a31e7e6809c7b988d1652bc165a6075b0098b8f4",
      name: "SLR Metaliks",
    },
    {
      id: 2,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc3ebf42cc92de675d7f09f4f78beb814827dea5",
      name: "Kalyani",
    },
    {
      id: 3,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/76312ce5ec4a5044bb666fb05d7c2ebe91cc56a7",
      name: "Saarloha",
    },
    {
      id: 4,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/ebcdc8343e1cded83cbcdfe92ae3e97f87fc06a3",
      name: "Tata Steel",
    },
    {
      id: 5,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/0047830f2b4b5f5680422597dbd158bcb8d6fbc6",
      name: "Mukand",
    },
    {
      id: 6,
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab2154c4c2c091ccaffd35d9c05ba4dab2a79224",
      name: "Sunflag Steel",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4, // Reduced from 0.8
        staggerChildren: 0.1 // Reduced from 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200, // Increased for snappier animation
        damping: 20
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  // Create a longer sequence of partners for smooth infinite scroll
  const ribbonPartners = [...partners, ...partners];

  return (
    <motion.section
      id="partners-section"
      className="w-full py-12 md:py-20 bg-white relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Title section */}
      <motion.div 
        className="container mx-auto px-4 md:px-8 mb-12 md:mb-16"
        variants={itemVariants}
      >
        <div className="relative flex mb-8">
          <motion.div 
            className="absolute h-full w-1.5 md:w-2 bg-amber-500 rounded-none"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.8 }}
          />
          <div className="ml-4 md:ml-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#004080] leading-tight">
              OUR PARTNERS
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mt-2">
              Stronger Together, Growing Forever.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Partners Ribbon */}
      <motion.div 
        className="relative bg-gradient-to-b from-gray-50 to-white py-12 md:py-16"
        variants={itemVariants}
      >
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center justify-start gap-16 md:gap-24"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {ribbonPartners.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 group"
                variants={logoVariants}
                whileHover="hover"
              >
                <div className="relative">
                  <motion.img
                    src={partner.url}
                    alt={partner.name}
                    className="h-16 w-auto sm:h-24 md:h-32 object-contain transition-all duration-300"
                    loading="lazy"
                  />
                  <motion.div
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="bg-sky-900/90 text-white px-4 py-2 rounded-lg whitespace-nowrap">
                      <p className="text-sm font-medium">{partner.name}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default PartnersSection;