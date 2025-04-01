"use client";
import * as React from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [expandedItem, setExpandedItem] = React.useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleExpandItem = (item) => {
    setExpandedItem(expandedItem === item ? null : item);
  };
  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        event.target.closest('.mobile-sidebar') === null &&
        event.target.closest('.mobile-menu-button') === null
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const companySubmenu = [
    "Company Profile",
    "Founder Journey",
    "Vision & Mission",
    "Excellence"
  ];

  const productSubmenu = ["Visit Product Page"];


  const NavigationItems = ({ isMobile = false, className = "" }) => (
    <nav className={`flex gap-30 px-20 py-3 w-full text-base font-bold 
      ${isMobile ? 
        "text-white bg-amber-500 space-y-2" : 
        "text-white bg-amber-500 rounded-3xl"} 
      max-md:px-5 max-md:mt-6 max-md:max-w-full ${className}`}
    >
      {isMobile ? (
        // Mobile navigation with dropdowns
        <motion.div className="w-full space-y-1">
          {['COMPANY', 'PRODUCT'].map((item, index) => (
            <motion.div
              key={item}
              variants={menuItemVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              className="w-full mb-2"
            >
              <div 
                className="flex justify-between items-center py-4 px-3 rounded-lg hover:bg-amber-600 transition-colors"
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
                <div className="bg-amber-600 rounded-lg mt-1">
                  <div className="p-3 space-y-2">
                    {(item === 'COMPANY' ? companySubmenu : productSubmenu).map((subItem, idx) => (
                      <motion.div
                        key={idx}
                        variants={menuItemVariants}
                        custom={idx}
                        className="text-base py-2 px-4 rounded-md hover:bg-amber-700 transition-colors cursor-pointer font-bold"
                        onClick={() => {
                          if (item === 'PRODUCT' && subItem === "Visit Product Page") {
                            navigate('/products');
                            setIsMobileMenuOpen(false);
                          }
                        }}
                      >
                        {subItem}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {['CAREER', 'INQUIRY', 'BLOG', 'CONTACT US'].map((item, index) => (
            <motion.div
              key={item}
              variants={menuItemVariants}
              custom={index + 2}
              initial="hidden"
              animate="visible"
              className="py-4 px-3 rounded-lg hover:bg-amber-600 transition-colors cursor-pointer"
              onClick={() => {
                if (item === 'INQUIRY') navigate('/inquiry');
                if (item === 'CONTACT US') navigate('/contact');
                setIsMobileMenuOpen(false);
              }}
            >
              <div className="font-bold text-lg">{item}</div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        // Desktop navigation
        <>
          <motion.div 
            className="relative whitespace-nowrap group cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div>COMPANY</div>
            <motion.div 
              className="flex shrink-0 h-0.5 bg-white rounded-sm" 
              initial={{ width: "100%" }}
              whileHover={{ width: "100%" }}
            />
            <motion.div
              className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden z-[150] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
            >
              {companySubmenu.map((item, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 text-[#004080] hover:bg-amber-100 cursor-pointer font-semibold"
                  onClick={() => {
                    if (item === "Excellence") {
                      navigate('/company/excellence');
                      setIsMobileMenuOpen(false);
                    } else if (item === "Vision & Mission") {
                      navigate('/company/vision-mission');
                      setIsMobileMenuOpen(false);
                    } else if (item === "Company Profile") {
                      navigate('/company/profile');
                      setIsMobileMenuOpen(false);
                    } else if (item === "Founder Journey") {
                      navigate('/company/founders-journey');
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div>PRODUCT</div>
            <motion.div 
              className="flex shrink-0 h-0.5 bg-white rounded-sm opacity-0 group-hover:opacity-100" 
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden z-[150] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
            >
              {productSubmenu.map((item, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 text-[#004080] hover:bg-amber-100 cursor-pointer font-semibold"
                  onClick={() => {
                    if (item === "Visit Product Page") {
                      navigate('/products');
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">CAREER</motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="cursor-pointer"
            onClick={() => navigate('/inquiry')}
          >
            INQUIRY
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">BLOG</motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="cursor-pointer basis-auto"
            onClick={() => navigate('/contact')}
          >
            CONTACT US
          </motion.div>
        </>
      )}
    </nav>
  );

  return (
    <motion.header 
      className="z-[100] w-full bg-white relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between">
      <motion.div 
          className="w-[30%] md:w-[15%] flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex relative flex-col items-start py-2 md:pb-4 md:pt-0 aspect-[2] max-md:py-2">
            <img
              src="src/assets/logo.png"
              alt="Company logo background"
              className="absolute ml-4 max-md:scale-110"
            />
          </div>
        </motion.div>

        {/* Desktop Navigation - Hidden on Mobile */}
        <motion.div 
          className="hidden md:flex md:ml-5 md:w-[79%] md:items-center pt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <NavigationItems />
        </motion.div>

        {/* Mobile Menu Button - Visible only on Mobile */}
        <motion.button
          className="md:hidden p-2 mr-2 mobile-menu-button ml-auto"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {isMobileMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
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
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 hover:bg-amber-600 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
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