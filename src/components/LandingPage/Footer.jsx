"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";

function FooterSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      ref={ref}
      className="px-0 py-8 text-white bg-blue-900"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="flex px-20 py-0 max-md:flex-col max-md:px-8 max-md:py-0 items-center">
        <motion.div
          variants={logoVariants}
          whileHover={{ scale: 1.03 }}
          className="w-[25%] min-w-[200px] flex justify-center items-center max-md:w-full max-md:mb-8"
        >
          <motion.img
            src="/logow.png"
            alt="BB Minerals & Metals Logo"
            className="w-full h-auto object-contain"
          />
        </motion.div>
        <div className="flex grow justify-between pl-[10%] max-md:pl-0 max-md:py-8 max-sm:flex-col">
          <FooterColumn
            title="ABOUT US"
            links={[
              "Company Profile",
              "Founder's Journey",
              "Corporate Presentation",
              "Brochure",
            ]}
            itemVariants={itemVariants}
          />
          <FooterColumn
            title="LEADERSHIP"
            links={["Vision & Mission", "Why Choose Us"]}
            itemVariants={itemVariants}
          />
          <LocationColumn itemVariants={itemVariants} />
        </div>
      </div>
      <ContactRibbon itemVariants={itemVariants} />
    </motion.footer>
  );
}

function FooterColumn({ title, links, itemVariants }) {
  const navigate = useNavigate();
  return (
    <motion.div 
      className="relative pl-8 mr-16 max-md:mr-8 max-sm:mb-10"
      variants={itemVariants}
    >
      <motion.div 
        className="absolute left-0 w-1.5 bg-yellow-500 rounded h-full max-h-56"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.h2 
        className="mb-5 text-xl font-semibold text-yellow-500"
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      <nav className="flex flex-col gap-3">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href="#"
            className="text-lg hover:text-yellow-300 transition-colors duration-300 inline-block"
            variants={itemVariants}
            whileHover={{ 
              x: 5, 
              transition: { duration: 0.2 },
              textShadow: "0px 0px 8px rgba(255,255,255,0.3)" 
            }}
            onClick={() => {
              if (link === "Vision & Mission") {
                navigate('/company/vision-mission');
              } else if (link === "Why Choose Us") {
                navigate('/company/why-choose-us');
              } else if (link === "Company Profile") {
                navigate('/company/profile');
              } else if (link === "Founder's Journey") {
                navigate('/company/founders-journey');
              }
            }}
          >
            {link}
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
}

function LocationColumn({ itemVariants }) {
  return (
    <motion.div 
      className="relative pl-8 mr-16 max-md:mr-8 max-sm:mb-10"
      variants={itemVariants}
    >
      <motion.div 
        className="absolute left-0 w-1.5 bg-yellow-500 rounded h-full max-h-56"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.h2 
        className="mb-5 text-xl font-semibold text-yellow-500"
        variants={itemVariants}
      >
        LOCATION
      </motion.h2>
      <motion.address 
        className="text-lg leading-relaxed text-white max-w-xs not-italic"
        variants={itemVariants}
      >
        Works: SZ 3, SZ 4 & SZ 5, MIDC, Butibori, Nagpur - 441122 
        <br/>
        <span className="text-yellow-200">GSTIN: 27BKHPG4665F1Z3</span>
        <br/>
        Maharashtra (Code: 27)
      </motion.address>
    </motion.div>
  );
}

const ContactRibbon = () => {
  return (
    <div className="relative w-full mt-4">
      <div className="relative w-[70%] flex items-center max-md:w-full">
        {/* Main ribbon */}
        <div className="flex-1 bg-blue-700 h-12 flex items-center justify-between pl-6 pr-8 
            max-md:min-h-[80px] max-md:h-auto max-md:py-4 max-md:flex-col max-md:items-start max-md:gap-4">
          <Link 
            to="/contact"  // Changed from href to to
            className="font-bold text-yellow-400 text-lg max-md:pl-4 hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
          >
            CONTACT US
          </Link>
          <div className="flex items-center space-x-8 
              max-md:flex-col max-md:space-x-0 max-md:space-y-3 max-md:w-full max-md:pl-4">
            {/* Email section */}
            <div className="flex items-center space-x-2 max-md:w-full">
              <Mail size={24} color="#FAA719" />
              <a href="mailto:contact@bbmam.in" className="text-white hover:text-yellow-200 transition-colors duration-300">
                contact@bbmam.in
              </a>
            </div>
            
            {/* Phone section */}
            <div className="flex items-center space-x-2 max-md:w-full">
              <Phone size={24} color="#FAA719" />
              <a href="tel:+919333884664" className="text-white hover:text-yellow-200 transition-colors duration-300">
                +91 93338 84664
              </a>
            </div>
          </div>
        </div>
        
        {/* Semi-circular right end */}
        <div className="w-6 h-12 bg-blue-700 rounded-r-full max-md:hidden" />
      </div>
    </div>
  );
};

export default FooterSection;