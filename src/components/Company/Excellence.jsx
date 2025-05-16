"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

function Excellence() {
  const navigate = useNavigate();

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

  // Icons with improved SVG implementation
  const icons = {
    environmental: {
      path: "M2.58325 28.4167V25.8333C2.58325 25.8333 9.04158 23.25 15.4999 23.25C21.9583 23.25 28.4166 25.8333 28.4166 25.8333V28.4167H2.58325ZM14.5958 11.7542C13.0458 6.71667 5.16659 7.87917 5.16659 7.87917C5.16659 7.87917 5.42492 17.9542 12.7874 16.4042C12.2708 12.6583 10.3333 11.625 10.3333 11.625C13.9499 11.625 14.2083 16.0167 14.2083 16.0167V21.9583H16.7916V16.5333C16.7916 16.5333 16.7916 11.4958 20.6666 10.2042C20.6666 10.2042 18.0833 14.0792 18.0833 16.6625C27.1249 17.5667 27.1249 5.16667 27.1249 5.16667C27.1249 5.16667 15.6291 3.875 14.5958 11.7542Z"
    },
    production: {
      path: "M9.24995 6.47499C9.24995 6.22966 9.34741 5.99439 9.52088 5.82091C9.69435 5.64744 9.92963 5.54999 10.175 5.54999H15.725C15.9703 5.54999 16.2056 5.64744 16.379 5.82091C16.5525 5.99439 16.65 6.22966 16.65 6.47499V12.025C16.65 12.2703 16.5525 12.5056 16.379 12.6791C16.2056 12.8525 15.9703 12.95 15.725 12.95H10.175C9.92963 12.95 9.69435 12.8525 9.52088 12.6791C9.34741 12.5056 9.24995 12.2703 9.24995 12.025V6.47499ZM21.275 5.54999C21.0296 5.54999 20.7943 5.64744 20.6209 5.82091C20.4474 5.99439 20.35 6.22966 20.35 6.47499V12.025C20.35 12.2703 20.4474 12.5056 20.6209 12.6791C20.7943 12.8525 21.0296 12.95 21.275 12.95H26.825C27.0703 12.95 27.3056 12.8525 27.479 12.6791C27.6525 12.5056 27.75 12.2703 27.75 12.025V6.47499C27.75 6.22966 27.6525 5.99439 27.479 5.82091C27.3056 5.64744 27.0703 5.54999 26.825 5.54999H21.275ZM22.2 11.1V7.39999H25.9V11.1H22.2ZM3.69995 22.2C3.69995 20.2374 4.47959 18.3552 5.86736 16.9674C7.25513 15.5796 9.13735 14.8 11.1 14.8H25.9C27.8626 14.8 29.7448 15.5796 31.1325 16.9674C32.5203 18.3552 33.3 20.2374 33.3 22.2C33.3 24.1626 32.5203 26.0448 31.1325 27.4326C29.7448 28.8203 27.8626 29.6 25.9 29.6H11.1C9.13735 29.6 7.25513 28.8203 5.86736 27.4326C4.47959 26.0448 3.69995 24.1626 3.69995 22.2ZM12.95 22.2C12.95 21.7093 12.755 21.2388 12.4081 20.8918C12.0612 20.5449 11.5906 20.35 11.1 20.35C10.6093 20.35 10.1387 20.5449 9.7918 20.8918C9.44486 21.2388 9.24995 21.7093 9.24995 22.2C9.24995 22.6906 9.44486 23.1612 9.7918 23.5081C10.1387 23.8551 10.6093 24.05 11.1 24.05C11.5906 24.05 12.0612 23.8551 12.4081 23.5081C12.755 23.1612 12.95 22.6906 12.95 22.2ZM20.35 22.2C20.35 21.7093 20.155 21.2388 19.8081 20.8918C19.4612 20.5449 18.9906 20.35 18.5 20.35C18.0093 20.35 17.5387 20.5449 17.1918 20.8918C16.8449 21.2388 16.65 21.7093 16.65 22.2C16.65 22.6906 16.8449 23.1612 17.1918 23.5081C17.5387 23.8551 18.0093 24.05 18.5 24.05C18.9906 24.05 19.4612 23.8551 19.8081 23.5081C20.155 23.1612 20.35 22.6906 20.35 22.2ZM25.9 24.05C26.3906 24.05 26.8612 23.8551 27.2081 23.5081C27.555 23.1612 27.75 22.6906 27.75 22.2C27.75 21.7093 27.555 21.2388 27.2081 20.8918C26.8612 20.5449 26.3906 20.35 25.9 20.35C25.4093 20.35 24.9387 20.5449 24.5918 20.8918C24.2449 21.2388 24.05 21.7093 24.05 22.2C24.05 22.6906 24.2449 23.1612 24.5918 23.5081C24.9387 23.8551 25.4093 24.05 25.9 24.05Z"
    }
  };

  // Internal component for section header with improved styling
  const SectionHeader = ({ title }) => (
    <motion.header 
      className="mb-12 transform transition-all duration-300 hover:scale-[1.01]"
      variants={itemVariants}
    >
      <h2 className="mb-4 text-4xl md:text-6xl font-bold text-white tracking-tight text-center sm:text-left">
        {title}
      </h2>
      <motion.div 
        className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-full h-2 w-48 md:w-64 transition-all duration-300 mx-auto sm:mx-0"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.header>
  );

  // Enhanced icon component
  const IconBadge = ({ icon }) => (
    <motion.div 
      className="relative flex-shrink-0 transform transition-all duration-300 hover:scale-110"
      variants={itemVariants}
    >
      <div className="bg-gradient-to-br from-amber-500 to-amber-400 rounded-xl w-16 h-16 flex items-center justify-center">
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 37 37" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={icon.path} fill="white" />
        </svg>
      </div>
    </motion.div>
  );

  // Enhanced info card component
  const InfoCard = ({ title, icon, children }) => (
    <motion.article 
      className="group bg-transparent rounded-2xl p-5 lg:p-6 transition-all duration-300"
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <IconBadge icon={icon} />
        <div className="flex-1 w-full">
          <h3 className="mb-3 text-lg lg:text-xl font-bold text-amber-500">{title}</h3>
          <div className="mb-4 h-1 bg-amber-500 w-24 transform origin-left transition-all duration-300 group-hover:w-full" />
          {children}
        </div>
      </div>
    </motion.article>
  );

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      <div className="h-screen bg-gray-900 text-white font-['Inter']">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2">
          {/* Left Section with Back button and content */}
          <div className="p-4 sm:p-6 lg:p-8 bg-[#151D28] relative">
            {/* Back button - desktop */}
            <motion.div 
              className="p-0 sm:p-0 hidden sm:block relative z-30"
              variants={itemVariants}
            >
              <motion.button 
                className="group flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-white
                          shadow-lg hover:shadow-amber-500/20 transition-all duration-300
                          hover:scale-105 active:scale-95 cursor-pointer mb-8"
                onClick={() => navigate(-1)}
                whileHover={{ x: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft size={18} className="text-amber-500 group-hover:animate-pulse" />
                <span className="font-medium text-sm">Back</span>
              </motion.button>
            </motion.div>

            {/* Added className with pt-8 for mobile only */}
            <div className="max-w-4xl mx-auto pt-8 sm:pt-0">
              <SectionHeader title="Our Excellence" />
              
              <motion.div 
                className="space-y-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <InfoCard title="Environmental Commitment & R&D" icon={icons.environmental}>
                  <ul className="space-y-3 text-white text-sm lg:text-base">
                    <li className="flex flex-col lg:flex-row gap-2 lg:items-center">
                      <span className="font-semibold text-white lg:min-w-48 xl:min-w-56">Advanced Air Fume System:</span>
                      <span className="text-gray-300 leading-relaxed flex-1">50,000 cubic meters per minute capacity to minimize pollution.</span>
                    </li>
                    <li className="flex flex-col lg:flex-row gap-2 lg:items-center">
                      <span className="font-semibold text-white lg:min-w-48 xl:min-w-56">Advanced Laboratory Equipment:</span>
                      <span className="text-gray-300 leading-relaxed flex-1">R&D: Enhancing product quality. Quality Testing: Maintaining high industry standards.</span>
                    </li>
                  </ul>
                </InfoCard>
                <InfoCard title="Production Capacity & Workforce" icon={icons.production}>
                  <ul className="space-y-3 text-white text-sm lg:text-base">
                    <li className="flex flex-col lg:flex-row gap-2 lg:items-center">
                      <span className="font-semibold text-white lg:min-w-48 xl:min-w-56">Installed capacity:</span>
                      <span className="text-gray-300 leading-relaxed flex-1">400 MT per month</span>
                    </li>
                    <li className="flex flex-col lg:flex-row gap-2 lg:items-center">
                      <span className="font-semibold text-white lg:min-w-48 xl:min-w-56">Regulatory Compliance:</span>
                      <span className="text-gray-300 leading-relaxed flex-1">Fully adheres to all statutory and regulatory requirements.</span>
                    </li>
                    <li className="flex flex-col lg:flex-row gap-2 lg:items-center">
                      <span className="font-semibold text-white lg:min-w-48 xl:min-w-56">Motto:</span>
                      <span className="text-gray-300 leading-relaxed flex-1">Compliance first, complain never.</span>
                    </li>
                    <li className="flex flex-col lg:flex-row gap-2 lg:items-center">
                      <span className="font-semibold text-white lg:min-w-48 xl:min-w-56">Workforce:</span>
                      <span className="text-gray-300 leading-relaxed flex-1">90+ skilled professionals contributing to the company's growth.</span>
                    </li>
                  </ul>
                </InfoCard>
              </motion.div>
            </div>
          </div>

          {/* Right Section with Image - now starts from the top */}
          <motion.div 
            className="relative h-[40vh] lg:h-full hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img
              src="/excellence.png"
              className="object-cover w-full h-full"
              alt="State-of-the-art manufacturing facility showcasing our commitment to excellence"
            />
          </motion.div>
        </div>

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
      </div>
    </>
  );
}

export default Excellence;