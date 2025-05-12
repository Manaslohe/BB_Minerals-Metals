"use client";
import * as React from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

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

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [expandedItem, setExpandedItem] = React.useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleExpandItem = (item) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  // Check if route is active
  const isActive = (path) => {
    // Set COMPANY as active by default when on home page
    if (path === "/company" && location.pathname === "/") {
      return true;
    }
    return location.pathname.includes(path);
  };

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        event.target.closest(".mobile-sidebar") === null &&
        event.target.closest(".mobile-menu-button") === null
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const companySubmenu = [
    { name: "Company Profile", path: "/company/profile" },
    { name: "Excellence", path: "/company/excellence" },
    { name: "Promoter Message", path: "/company/promoter-message" },
    { name: "Manufacturing Unit", path: "/company/manufacturing-unit" },
    { name: "Gallery", path: "/company/gallery" }
  ];

  // Smooth scroll function to scroll to the product section
  const scrollToProducts = () => {
    const productSection = document.getElementById("products-section");
    if (productSection) {
      // If we're already on the page with products section
      productSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    } else {
      // If we're not on the home page, first navigate to home then scroll
      navigate("/");
      // Wait for navigation to complete before scrolling
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
        // Mobile navigation with dropdowns
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
                  className="py-3 px-4 rounded-lg hover:bg-amber-600 active:bg-amber-700 transition-colors cursor-pointer"
                  onClick={scrollToProducts}
                >
                  <div className="font-bold text-lg">{item}</div>
                </div>
              ) : (
                <>
                  <div
                    className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-amber-600 transition-colors"
                    onClick={() => toggleExpandItem(item)}
                  >
                    <div className="font-bold text-lg">{item}</div>
                    <motion.div
                      animate={{ rotate: expandedItem === item ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
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
                              className="text-base py-3 px-6 rounded-lg hover:bg-amber-600 active:bg-amber-700 transition-colors cursor-pointer"
                              onClick={() => {
                                navigate(subItem.path);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <span className="font-semibold">
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

          {["CAREER", "INQUIRY", "BLOG", "CONTACT US"].map((item, index) => (
            <motion.div
              key={item}
              variants={menuItemVariants}
              custom={index + 2}
              initial="hidden"
              animate="visible"
              className="py-3 px-4 rounded-lg hover:bg-amber-600 active:bg-amber-700 transition-colors cursor-pointer"
              onClick={() => {
                if (item === "INQUIRY") navigate("/inquiry");
                if (item === "CONTACT US") navigate("/contact");
                setIsMobileMenuOpen(false);
              }}
            >
              <div className="font-bold text-lg">{item}</div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        // Desktop navigation
        <div className="flex w-full justify-end gap-8 pr-6">
          <MenuItem
            label="COMPANY"
            isActive={isActive("/company")}
            submenu={companySubmenu}
          />
          <MenuItem
            label="PRODUCT"
            isActive={isActive("/products")}
            onClick={scrollToProducts}
          />
          <MenuItem label="CAREER" isActive={isActive("/career")} />
          <MenuItem
            label="INQUIRY"
            isActive={isActive("/inquiry")}
            onClick={() => navigate("/inquiry")}
          />
          <MenuItem label="BLOG" isActive={isActive("/blog")} />
          <MenuItem
            label="CONTACT US"
            isActive={isActive("/contact")}
            onClick={() => navigate("/contact")}
          />
        </div>
      )}
    </nav>
  );

  // Individual menu item component
  const MenuItem = ({ label, submenu, isActive, onClick }) => (
    <motion.div
      className="relative whitespace-nowrap cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <div className="text-white drop-shadow-md">{label}</div>

      {/* Active indicator or hover indicator */}
      <div className="relative h-0.5 w-full">
        {/* Active state */}
        {isActive && (
          <div className="absolute inset-0 bg-amber-500 rounded-sm shadow-md" />
        )}

        {/* Hover state - separate from active state */}
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
          {submenu.map((item, index) => (
            <div
              key={index}
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
    <motion.header
      className="z-[100] w-full bg-transparent absolute top-0 left-0"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo - always on left side */}
        <motion.div
          className="w-[140px] sm:w-[180px] flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img src="/logo.png" alt="Company logo" className="w-full" />
        </motion.div>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden md:block flex-grow ml-12">
          <nav className="flex w-full justify-end items-center pr-6">
            <div className="flex items-center gap-8">
              <MenuItem
                label="COMPANY"
                isActive={isActive("/company")}
                submenu={companySubmenu}
              />
              <MenuItem
                label="PRODUCT"
                isActive={isActive("/products")}
                onClick={scrollToProducts}
              />
              <MenuItem label="CAREER" isActive={isActive("/career")} />
              <MenuItem
                label="INQUIRY"
                isActive={isActive("/inquiry")}
                onClick={() => navigate("/inquiry")}
              />
              <MenuItem label="BLOG" isActive={isActive("/blog")} />
              <MenuItem
                label="CONTACT US"
                isActive={isActive("/contact")}
                onClick={() => navigate("/contact")}
              />
            </div>
          </nav>
        </div>

        {/* Mobile Menu Button - aligned to right */}
        <motion.button
          className="md:hidden flex items-center justify-center 
            bg-amber-500/90 hover:bg-amber-600 w-10 h-10 rounded-full 
            shadow-md transition-all duration-200 mobile-menu-button ml-auto"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed top-0 right-0 h-full bg-amber-500 shadow-lg w-[280px] z-50 mobile-sidebar overflow-y-auto"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div
                className="flex justify-end p-4 border-b border-amber-400"
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
  );
}

export default Header;