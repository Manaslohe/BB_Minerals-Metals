import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function HistoryPage() {
  const navigate = useNavigate();
  
  // Track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    'our-journey': false,
    'founders-journey': false,
    'establishment': false,
    'transition': false,
    'global-expansion': false,
    'dual-approach': false,
    'looking-ahead': false
  });
  
  // Refs to measure content height for smoother animations
  const contentRefs = useRef({});
  
  // Animation state for page entrance
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set animation visible after a short delay to ensure smooth entrance
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Toggle section expansion
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Array of history sections
  const historySections = [
    { 
      id: 'our-journey', 
      title: 'OUR JOURNEY',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl text-amber-500 font-semibold">Over a Decade of Excellence in Ferroalloys</h3>
          <p className="text-gray-300 leading-relaxed">
            BB Minerals and Metals has earned a remarkable reputation over more than 15+ years in the ferroalloys 
            industry, evolving from a small trading company into a globally recognized name in both trading and 
            manufacturing. Our journey is one of strategic growth, adaptability, and an unwavering commitment to 
            quality and customer satisfaction.
          </p>
        </div>
      )
    },
    { 
      id: 'founders-journey', 
      title: 'FOUNDER\'S JOURNEY',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl text-amber-500 font-semibold">Mr. Shiv Jagdishchandra Gupta</h3>
          <ul className="space-y-3 text-gray-300 leading-relaxed list-none">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2 mt-1.5">•</span>
              <span>
                <span className="font-semibold">Mr. Shiv Jagdishchandra Gupta</span>, originally from Rajasthan, pursued his graduation before stepping into business.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2 mt-1.5">•</span>
              <span>
                Started with charcoal trading, building a strong <span className="font-semibold">Pan India supply network</span>.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2 mt-1.5">•</span>
              <span>
                Expanded into minerals trading, primarily focusing on <span className="font-semibold">ferro alloys</span>.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2 mt-1.5">•</span>
              <span>
                Gained deep market knowledge and built <span className="font-semibold">strong client relationships</span> and got well known for the quality and reliability of the products.
              </span>
            </li>
          </ul>
        </div>
      )
    },
    { 
      id: 'establishment', 
      title: 'ESTABLISHMENT & FORMATIVE YEARS',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl text-amber-500 font-semibold">Building the Base</h3>
          <p className="text-gray-300 leading-relaxed">
            Establish over a decade ago, BB Minerals and Metals set out with a clear goal — to establish itself as a key
            player in the trading of ferroalloys and metals. In its early years, the company focused on sourcing high-
            quality ferroalloys from global suppliers, building a robust network of producers and consumers across key
            markets.
          </p>
          <p className="text-gray-300 leading-relaxed mt-3">
            Thanks to a deep understanding of international trade and an efficient logistics system, BB Minerals and
            Metals quickly built a solid reputation in the ferroalloys trading sector. Competitive pricing, a wide product
            range, and reliable supply chain management became the foundation of the business. These formative
            years were marked by continuous efforts to grow the client base and diversify product offerings.
          </p>
        </div>
      )
    },
    { 
      id: 'transition', 
      title: 'TRANSITION TO MANUFACTURING',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl text-amber-500 font-semibold">A Strategic Evolution</h3>
          <p className="text-gray-300 leading-relaxed">
            Around the five-year mark, the company identified a critical opportunity to gain greater control over product 
            quality and reduce reliance on third-party suppliers. This led to a strategic expansion into manufacturing.
          </p>
          <p className="text-gray-300 leading-relaxed mt-3">
            Significant investments were made in state-of-the-art production facilities, including advanced smelting 
            and alloying technologies. By establishing its own manufacturing unit, BB Minerals and Metals enhanced its 
            ability to meet specific client requirements, deliver consistent quality, and ensure faster turnaround times.
          </p>
          <p className="text-gray-300 leading-relaxed mt-3">
            This move elevated the company from a trading entity to a trusted manufacturer — strengthening its market 
            position and improving cost efficiency.
          </p>
        </div>
      )
    },
    { 
      id: 'global-expansion', 
      title: 'GLOBAL EXPANSION & DIVERSIFICATION',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl text-amber-500 font-semibold">Reaching New Markets</h3>
          <p className="text-gray-300 leading-relaxed">
            As its manufacturing capacity grew, BB Minerals and Metals expanded its global footprint. The company 
            established sales and distribution networks across Asia and Europe, tapping into emerging markets and 
            broadening its customer base.
          </p>
          <p className="text-gray-300 leading-relaxed mt-3">
            With a diverse portfolio including high-quality products like ferro molybdenum, ferrochrome, and ferrosilicon, 
            BB Minerals and Metals became a reliable partner to industries such as steel production and alloy 
            manufacturing. The combination of trading expertise and in-house production enabled the company to 
            deliver customized solutions tailored to client specifications.
          </p>
        </div>
      )
    },
    { 
      id: 'dual-approach', 
      title: 'A DUAL APPROACH TO INDUSTRY LEADERSHIP',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl text-amber-500 font-semibold">Trading & Manufacturing Excellence</h3>
          <p className="text-gray-300 leading-relaxed">
            Today, BB Minerals and Metals stands as both a trusted supplier and a key manufacturer in the ferroalloys
            industry. Its dual business model — offering both reliable sourcing and precision manufacturing — provides
            flexibility, consistency, and competitive advantage in a global market.
          </p>
          <p className="text-gray-300 leading-relaxed mt-3">
            With a strong global presence and a customer-first mindset, the company continues to lead by example. It
            remains committed to innovation, quality improvement, and embracing new technologies to meet the
            highest industry standards.
          </p>
        </div>
      )
    },
    { 
      id: 'looking-ahead', 
      title: 'LOOKING AHEAD',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl text-amber-500 font-semibold">Poised for the Future</h3>
          <p className="text-gray-300 leading-relaxed">
            With over a decade of experience behind it, BB Minerals and Metals is focused on future growth. The
            company is actively expanding its product portfolio, exploring untapped markets, and integrating
            sustainable practices into its operations.
          </p>
          <p className="text-gray-300 leading-relaxed mt-3">
            As it moves forward, BB Minerals and Metals remains dedicated to sustainability, innovation, and delivering
            exceptional value to its global customer base.
          </p>
        </div>
      )
    }
  ];
  
  // Refined animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  // Improved content animation variants for smoother transitions
  const contentVariants = {
    hidden: { 
      height: 0,
      opacity: 0,
      transition: { 
        height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
        opacity: { duration: 0.25, delay: 0 }
      }
    },
    visible: { 
      height: "auto",
      opacity: 1,
      transition: { 
        height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
        opacity: { duration: 0.25, delay: 0.1 }
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { 
        height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
        opacity: { duration: 0.25, delay: 0 }
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-900 text-white pt-4 pb-16"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Back Button - Modern & Professional */}
      <motion.div 
        className="p-4 sm:p-6 relative z-30"
        variants={itemVariants}
      >
        <motion.button 
          className="group flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-white
                    shadow-lg hover:shadow-amber-500/20 transition-all duration-300
                    hover:scale-105 active:scale-95 cursor-pointer"
          onClick={() => navigate(-1)}
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={18} className="text-amber-500 group-hover:animate-pulse" />
          <span className="font-medium text-sm">Back</span>
        </motion.button>
      </motion.div>
      
      {/* Header with animation */}
      <motion.div 
        className="text-center mb-12 mt-4"
        variants={itemVariants}
      >
        <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-white">
          OUR HISTORY
        </h1>
        <div className="mt-2 w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full" />
      </motion.div>
      
      {/* Accordion Sections with improved animations */}
      <motion.div 
        className="container mx-auto px-4 max-w-3xl space-y-1"
        variants={containerVariants}
      >
        {historySections.map((section, index) => (
          <motion.div 
            key={section.id} 
            className="border-b border-gray-800/70 overflow-hidden rounded-lg hover:bg-gray-800/30 transition-colors duration-300"
            variants={itemVariants}
            custom={index}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              className="w-full py-6 px-4 flex justify-between items-center text-left focus:outline-none"
              onClick={() => toggleSection(section.id)}
              aria-expanded={expandedSections[section.id]}
              aria-controls={`content-${section.id}`}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-lg md:text-xl font-semibold text-amber-50">{section.title}</h2>
              <motion.div
                initial={false}
                animate={{ 
                  rotate: expandedSections[section.id] ? 180 : 0,
                  color: expandedSections[section.id] ? "#F59E0B" : "#F59E0B" 
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <ChevronDown 
                  className="text-amber-500 transition-colors"
                  size={24} 
                />
              </motion.div>
            </motion.button>
            
            {/* Content panel with improved smooth animation */}
            <AnimatePresence initial={false}>
              {expandedSections[section.id] && (
                <motion.div 
                  id={`content-${section.id}`}
                  ref={ref => contentRefs.current[section.id] = ref}
                  className="overflow-hidden"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  key={`content-${section.id}`}
                >
                  <div className="px-4 pb-6">
                    {section.content ? (
                      section.content
                    ) : (
                      <p className="text-gray-300">
                        This is placeholder content for the {section.title.toLowerCase()} section.
                        Replace this with your actual historical content for each section.
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}