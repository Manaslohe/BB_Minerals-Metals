"use client";
import * as React from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Animation variants for better performance
const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

const mobileMenuVariants = {
  closed: {
    x: "100%",
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  open: {
    x: 0,
    transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.1 }
  }
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

// Header reveal animation
const headerVariants = {
  hidden: {
    y: -80,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Logo animation
const logoVariants = {
  hidden: {
    opacity: 0,
    x: -30,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

// Nav item animation for desktop
const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

// Replace useIsMobileDesktopView with this new hook
const useIsMobileView = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      // Check if the device is mobile and in desktop view
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      
      if (isMobileDevice && viewportWidth >= 1024) {
        // Mobile device in desktop view - adjust menu spacing
        document.documentElement.style.setProperty('--menu-gap', '1.5rem');
        document.documentElement.style.setProperty('--menu-font-size', '0.85rem');
        setIsMobileView(false);
      } else if (viewportWidth < 1024) {
        // Regular mobile view
        setIsMobileView(true);
      } else {
        // Regular desktop view
        document.documentElement.style.setProperty('--menu-gap', '2rem');
        document.documentElement.style.setProperty('--menu-font-size', '1rem');
        setIsMobileView(false);
      }
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return isMobileView;
};

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [expandedItem, setExpandedItem] = React.useState(null);
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const isMobileView = useIsMobileView(); // Replace isMobileDesktopView with this

  React.useEffect(() => {
    setHasLoaded(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleExpandItem = (item) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  const isActive = (path) => {
    return location.pathname.includes(path);
  };

  const companySubmenu = [
    { name: "Company Profile", path: "/company/profile" },
    { name: "Our History", path: "/company/history" },
    { name: "Excellence", path: "/company/excellence" },
    { name: "Promoter's Message", path: "/company/promoter-message" },
    { name: "Manufacturing Unit", path: "/company/manufacturing-unit" },
    { name: "Gallery", path: "/company/gallery" } // Added Gallery option
  ];

  const scrollToProducts = () => {
    const productSection = document.getElementById("products-section");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("products-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  };

  const NavigationItems = ({ isMobile = false, className = "" }) => (
    <nav
      className={`flex ${
        isMobile ? "flex-col" : "flex-row items-center justify-between"
      } w-full ${className}`}
    >
      {isMobile ? (
        <motion.div className="w-full space-y-3">
          {["COMPANY", "PRODUCT"].map((item, index) => (
            <motion.div
              key={item}
              variants={menuItemVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              {item === "PRODUCT" ? (
                <div
                  className="py-3 px-4 rounded-lg hover:bg-gray-600 active:bg-gray-700 transition-colors cursor-pointer"
                  onClick={scrollToProducts}
                >
                  <div className="font-bold text-lg text-white">{item}</div>
                </div>
              ) : (
                <>
                  <div
                    className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-gray-600 transition-colors relative"
                    onClick={() => toggleExpandItem(item)}
                  >
                    <div className="font-bold text-lg text-white">{item}</div>
                    <motion.div
                      animate={{ rotate: expandedItem === item ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5 text-white" />
                    </motion.div>
                    {/* Orange underline only on hover */}
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  {expandedItem === item && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1"
                    >
                      <div className="space-y-1 py-2 px-2">
                        {(item === "COMPANY" ? companySubmenu : []).map(
                          (subItem, idx) => (
                            <motion.div
                              key={idx}
                              variants={menuItemVariants}
                              custom={idx}
                              className="text-base py-3 px-6 rounded-lg hover:bg-gray-600 active:bg-gray-700 transition-colors cursor-pointer"
                              onClick={() => {
                                navigate(subItem.path);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <span className="font-semibold text-white">
                                {subItem.name}
                              </span>
                            </motion.div>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </>
              )}
            </motion.div>
          ))}

          {["INQUIRY", "BLOG & FAQS", "CONTACT US"].map((item, index) => (
            <motion.div
              key={item}
              variants={menuItemVariants}
              custom={index + 2}
              initial="hidden"
              animate="visible"
              className="py-3 px-4 rounded-lg hover:bg-gray-600 active:bg-gray-700 transition-colors cursor-pointer relative"
              onClick={() => {
                if (item === "INQUIRY") navigate("/inquiry");
                else if (item === "CONTACT US") navigate("/contact");
                else if (item === "BLOG & FAQS") navigate("/blog");
                setIsMobileMenuOpen(false);
              }}
            >
              <div className="font-bold text-lg text-white">{item}</div>
              {/* Orange underline for active components */}
              {((item === "INQUIRY" && isActive("/inquiry")) || 
                (item === "CONTACT US" && isActive("/contact")) || 
                (item === "BLOG & FAQS" && isActive("/blog"))) && (
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500 rounded-full"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="flex w-full justify-end gap-8 pr-6">
          <MenuItem
            label="COMPANY"
            isActive={isActive("/company")}
            submenu={companySubmenu}
            index={0}
          />
          <MenuItem
            label="PRODUCT"
            isActive={isActive("/products")}
            onClick={scrollToProducts}
            index={1}
          />
          <MenuItem
            label="INQUIRY"
            isActive={isActive("/inquiry")}
            onClick={() => navigate("/inquiry")}
            index={2}
          />
          <MenuItem
            label="BLOG & FAQS"
            isActive={isActive("/blog")}
            onClick={() => navigate("/blog")}
            index={3}
          />
          <MenuItem
            label="CONTACT US"
            isActive={isActive("/contact")}
            onClick={() => navigate("/contact")}
            index={4}
          />
        </div>
      )}
    </nav>
  );

  const MenuItem = ({ label, submenu, isActive, onClick, index }) => (
    <motion.div
      className="relative whitespace-nowrap cursor-pointer group"
      variants={navItemVariants}
      custom={index}
      initial="hidden"
      animate={hasLoaded ? "visible" : "hidden"}
      whileHover={{ scale: 1.02 }}
      onClick={
        label === "BLOG & FAQS"
          ? () => navigate("/blog")
          : onClick
      }
    >
      <div className="text-white drop-shadow-md text-[var(--menu-font-size)]">{label}</div>

      <div className="relative h-0.5 w-full">
        {isActive && (
          <div className="absolute inset-0 bg-amber-500 rounded-sm shadow-md" />
        )}

        <div
          className="absolute inset-0 bg-amber-500 rounded-sm shadow-md origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          style={{ display: isActive ? "none" : "block" }}
        />
      </div>

      {submenu && (
        <motion.div
          className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden z-[150] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
        >
          {submenu.map((item, idx) => (
            <div
              key={idx}
              className="px-4 py-2 text-[#004080] hover:bg-amber-100 cursor-pointer font-semibold"
              onClick={(e) => {
                e.stopPropagation();
                navigate(item.path);
                setIsMobileMenuOpen(false);
              }}
            >
              {item.name}
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <>
      <motion.header
        className="z-[100] w-full bg-transparent absolute top-0 left-0"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 py-5 flex items-center">
          <motion.div
            className="w-[180px] flex-shrink-0"
            variants={logoVariants}
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <img src="/logo.png" alt="Company logo" className="w-full" />
          </motion.div>

          {!isMobileView ? (
            // Desktop view
             <div className="flex-grow ml-4 lg:ml-12">
              <nav className="flex w-full justify-end items-center pr-2 lg:pr-6">
               <div className="flex items-center gap-[var(--menu-gap)] overflow-x-auto hide-scrollbar">
                  <MenuItem
                    label="COMPANY"
                    isActive={isActive("/company")}
                    submenu={companySubmenu}
                    index={0}
                  />
                  <MenuItem
                    label="PRODUCT"
                    isActive={isActive("/products")}
                    onClick={scrollToProducts}
                    index={1}
                  />
                  <MenuItem
                    label="INQUIRY"
                    isActive={isActive("/inquiry")}
                    onClick={() => navigate("/inquiry")}
                    index={2}
                  />
                  <MenuItem
                    label="BLOG & FAQS"
                    isActive={isActive("/blog")}
                    onClick={() => navigate("/blog")}
                    index={3}
                  />
                  <MenuItem
                    label="CONTACT US"
                    isActive={isActive("/contact")}
                    onClick={() => navigate("/contact")}
                    index={4}
                  />
                </div>
              </nav>
            </div>
          ) : (
            // Mobile view button
            <motion.button
              className="flex items-center justify-center 
                bg-amber-500/90 hover:bg-amber-600 w-10 h-10 rounded-full 
                shadow-md transition-all duration-200 mobile-menu-button ml-auto"
              onClick={toggleMobileMenu}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Menu className="h-5 w-5 text-white" />
            </motion.button>
          )}
        </div>

        <AnimatePresence>
          {(isMobileView && isMobileMenuOpen) && (
            <>
              <motion.div
                className="fixed top-0 right-0 h-full bg-gray-500 shadow-lg w-[280px] z-50 mobile-sidebar overflow-y-auto"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <motion.div
                  className="flex justify-end p-4 border-b border-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.button
                    onClick={toggleMobileMenu}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6 text-white drop-shadow-sm" />
                  </motion.button>
                </motion.div>
                <div className="p-4">
                  <NavigationItems isMobile={true} className="flex-col" />
                </div>
              </motion.div>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={toggleMobileMenu}
              />
            </>
          )}
        </AnimatePresence>
      </motion.header>
      
      <style jsx global>{`
        :root {
          --menu-gap: 2rem;
          --menu-font-size: 1rem;
        }
        
        @media screen and (min-width: 1024px) {
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        }
        
        @media screen and (max-width: 1280px) {
          .container {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Header;