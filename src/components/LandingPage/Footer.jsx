import React, { useState } from "react";
import { Mail, Phone, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  // Mobile accordion state
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 12,
        duration: 0.6
      }
    }
  };

  const linkHoverStyle = "group flex items-center gap-2 text-gray-300 hover:text-amber-400 transform transition-all duration-300 ease-out hover:translate-x-1";
  const arrowStyle = "transform transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0";

  // Mobile accordion header style
  const accordionHeaderStyle = "flex justify-between items-center w-full text-amber-500 font-bold text-lg tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-amber-500/30";

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12 sm:py-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        
        {/* Mobile view: Logo centered at top */}
        <motion.div 
          variants={itemVariants} 
          className="block sm:hidden mb-8 flex justify-center"
        >
          <div className="relative w-40 h-28 transition-transform duration-300 hover:scale-105">
            <img 
              src="/logow.png" 
              alt="BB Minerals & Metals Logo" 
              className="w-full h-full object-contain filter brightness-110 drop-shadow-lg"
              loading="lazy"
            />
          </div>
        </motion.div>
        
        {/* Desktop view: Original grid layout */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Logo column with enhanced responsiveness */}
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-1 flex items-start justify-center md:justify-start"
          >
            <div className="relative w-48 sm:w-56 lg:w-64 h-32 sm:h-36 lg:h-40 transition-transform duration-300 hover:scale-105">
              <img 
                src="/logow.png" 
                alt="BB Minerals & Metals Logo" 
                className="w-full h-full object-contain filter brightness-110 drop-shadow-lg"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* About Us column with enhanced hover effects */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-amber-500 font-bold text-lg tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-amber-500/30">
              ABOUT US
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Company Profile", path: "/company/profile" },
                { name: "Our History", path: "/our-history" },
                { name: "Brochure", path: "/brochure" },
                { name: "Eco-Friendly & Sustainability", path: "/eco-friendly-sustainability" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link to={item.path} 
                    className={linkHoverStyle}>
                    {item.name}
                    <ArrowUpRight size={16} className={arrowStyle} />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Leadership column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-amber-500 font-semibold text-lg tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-amber-500/30">
              LEADERSHIP
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Vision & Mission", path: "/company/vision-mission" },
                { name: "Why Choose Us", path: "/company/why-choose-us" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link to={item.path} 
                    className={linkHoverStyle}>
                    {item.name}
                    <ArrowUpRight size={16} className={arrowStyle} />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-amber-500 font-bold text-lg tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-amber-500/30">
              CONTACT US
            </h3>
            <div className="space-y-4">
              <motion.a 
                href="mailto:contact@bbmam.in" 
                className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors group"
                whileHover={{ x: 8 }}
              >
                <Mail className="text-amber-500 group-hover:text-amber-400" size={18} />
                <span className="text-base">contact@bbmam.in</span>
              </motion.a>
              
              <div className="flex items-center space-x-2">
                <Phone color="#F59E0B" size={16} />
                <a href="tel:+919333884664" className="text-sm hover:text-amber-400 transition-colors">
                  +91 93338 84664
                </a>
              </div>
              
              <div>
                <div className="flex items-center space-x-2">
                  <Phone color="#F59E0B" size={16} />
                  <a href="tel:+917122984227" className="text-sm hover:text-amber-400 transition-colors">
                    0712-2984227
                  </a>
                </div>
                <div className="text-gray-400 text-xs pl-6">(Office Number)</div>
              </div>
            </div>
          </motion.div>

          {/* Location column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-amber-500 font-bold text-lg tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-amber-500/30">
              LOCATION
            </h3>
            <div className="space-y-6">
              <div>
                <p className="font-semibold mb-2 text-sm text-amber-500/80">FACTORY LOCATION</p>
                <address className="not-italic text-gray-300 leading-relaxed">
                  SZ 2-5, MIDC, Butibori,<br />
                  Nagpur – 441122,<br />
                  Maharashtra, Bharat
                </address>
              </div>
              
              <div>
                <p className="font-medium mb-1 text-xs">OFFICE LOCATION</p>
                <address className="not-italic text-gray-300 leading-relaxed">
                  C-3 & C-4, Vaishnav<br />
                  Sagar Bungalow, New<br />
                  Manish Nagar,<br />
                  Sambhaji Nagar, Nagpur<br />
                  440015, Bharat
                </address>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Mobile view: Accordion-style layout */}
        <div className="sm:hidden space-y-4 mb-8">
          {/* About Us Section */}
          <motion.div variants={itemVariants}>
            <button 
              onClick={() => toggleSection('about')}
              className={accordionHeaderStyle}
              aria-expanded={openSection === 'about'}
            >
              ABOUT US
              {openSection === 'about' ? 
                <ChevronUp size={18} className="text-amber-500" /> : 
                <ChevronDown size={18} className="text-amber-500" />
              }
            </button>
            
            {openSection === 'about' && (
              <motion.ul 
                className="space-y-3 mt-4 pl-1"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {[
                  { name: "Company Profile", path: "/company/profile" },
                  { name: "Our History", path: "/our-history" },
                  { name: "Brochure", path: "/brochure" },
                  { name: "Eco-Friendly & Sustainability", path: "/eco-friendly-sustainability" }
                ].map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} 
                      className={linkHoverStyle}>
                      {item.name}
                      <ArrowUpRight size={16} className={arrowStyle} />
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.div>
          
          {/* Leadership Section */}
          <motion.div variants={itemVariants}>
            <button 
              onClick={() => toggleSection('leadership')}
              className={accordionHeaderStyle}
              aria-expanded={openSection === 'leadership'}
            >
              LEADERSHIP
              {openSection === 'leadership' ? 
                <ChevronUp size={18} className="text-amber-500" /> : 
                <ChevronDown size={18} className="text-amber-500" />
              }
            </button>
            
            {openSection === 'leadership' && (
              <motion.ul 
                className="space-y-3 mt-4 pl-1"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {[
                  { name: "Vision & Mission", path: "/company/vision-mission" },
                  { name: "Why Choose Us", path: "/company/why-choose-us" }
                ].map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} 
                      className={linkHoverStyle}>
                      {item.name}
                      <ArrowUpRight size={16} className={arrowStyle} />
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.div>
          
          {/* Contact Us Section */}
          <motion.div variants={itemVariants}>
            <button 
              onClick={() => toggleSection('contact')}
              className={accordionHeaderStyle}
              aria-expanded={openSection === 'contact'}
            >
              CONTACT US
              {openSection === 'contact' ? 
                <ChevronUp size={18} className="text-amber-500" /> : 
                <ChevronDown size={18} className="text-amber-500" />
              }
            </button>
            
            {openSection === 'contact' && (
              <motion.div 
                className="space-y-4 mt-4 pl-1"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <a 
                  href="mailto:contact@bbmam.in" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors"
                >
                  <Mail className="text-amber-500" size={18} />
                  <span className="text-base">contact@bbmam.in</span>
                </a>
                
                <div className="flex items-center space-x-2">
                  <Phone color="#F59E0B" size={16} />
                  <a href="tel:+919333884664" className="text-sm hover:text-amber-400 transition-colors">
                    +91 93338 84664
                  </a>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2">
                    <Phone color="#F59E0B" size={16} />
                    <a href="tel:+917122984227" className="text-sm hover:text-amber-400 transition-colors">
                      0712-2984227
                    </a>
                  </div>
                  <div className="text-gray-400 text-xs pl-6">(Office Number)</div>
                </div>
              </motion.div>
            )}
          </motion.div>
          
          {/* Location Section */}
          <motion.div variants={itemVariants}>
            <button 
              onClick={() => toggleSection('location')}
              className={accordionHeaderStyle}
              aria-expanded={openSection === 'location'}
            >
              LOCATION
              {openSection === 'location' ? 
                <ChevronUp size={18} className="text-amber-500" /> : 
                <ChevronDown size={18} className="text-amber-500" />
              }
            </button>
            
            {openSection === 'location' && (
              <motion.div 
                className="space-y-4 mt-4 pl-1"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <p className="font-semibold mb-1 text-sm text-amber-500/80">FACTORY LOCATION</p>
                  <address className="not-italic text-gray-300 leading-relaxed text-sm">
                    SZ 2-5, MIDC, Butibori,<br />
                    Nagpur – 441122,<br />
                    Maharashtra, Bharat
                  </address>
                </div>
                
                <div>
                  <p className="font-medium mb-1 text-xs text-amber-500/80">OFFICE LOCATION</p>
                  <address className="not-italic text-gray-300 leading-relaxed text-sm">
                    C-3 & C-4, Vaishnav<br />
                    Sagar Bungalow, New<br />
                    Manish Nagar,<br />
                    Sambhaji Nagar, Nagpur<br />
                    440015, Bharat
                  </address>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
        
        {/* Enhanced bottom section */}
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12 sm:mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        
        <div className="relative">
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img 
              src="/mii.png" 
              alt="Made in India" 
              className="h-24 sm:h-32 md:h-36 lg:h-40 w-auto opacity-90 transition-opacity duration-300 hover:opacity-100"
              loading="lazy"
            />
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="relative text-center text-gray-400 text-xs sm:text-sm pt-10 sm:pt-12 md:pt-14 font-light tracking-wide"
          >
            © {new Date().getFullYear()} Website by FrameX | 
            <Link to="/privacy-policy" className="ml-2 text-amber-500 hover:text-amber-400 transition-colors hover:underline">
              Privacy Policy
            </Link>
          </motion.p>
        </div>
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/50 pointer-events-none" />
    </motion.footer>
  );
};

export default Footer;