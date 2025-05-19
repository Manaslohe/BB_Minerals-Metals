import React, { useState, useEffect, useRef } from "react";
import { Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import ProductDetail from "../ProductDetail";

// JSON-LD structured data for products - SEO optimization
const ProductJsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Low Carbon Ferro Chrome",
        "url": "https://bbmam.in/products#low-carbon-ferro-chrome",
        "image": "https://bbmam.in/product1.png"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "High Carbon Ferro Chrome",
        "url": "https://bbmam.in/products#high-carbon-ferro-chrome",
        "image": "https://bbmam.in/product2.png"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ferro Molybdenum",
        "url": "https://bbmam.in/products#ferro-molybdenum",
        "image": "https://bbmam.in/product3.png"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Silicon Metal",
        "url": "https://bbmam.in/products#silicon-metal",
        "image": "https://bbmam.in/product4.png"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Manganese Flake",
        "url": "https://bbmam.in/products#manganese-flake",
        "image": "https://bbmam.in/product5.png"
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  );
};

const ProductsSection = () => {
  // State management
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const sectionRef = useRef(null);

  // Modified Intersection Observer to only set visibility to true once
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set to true when intersecting, never back to false
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: "-50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleViewProduct = (productId) => {
    // Find the selected product
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
  };

  // Enhanced closeProductDetail with animation timing
  const closeProductDetail = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProduct(null);
      setIsClosing(false);
      document.body.style.overflow = 'auto';
    }, 300); // Duration matches the fadeOut animation
  };

  const products = [
    {
      id: 1,
      image: "/product1.png",
      name: "Low Carbon Ferro Chrome",
      alt: "Low Carbon Ferro Chrome – High quality alloy for steel production"
    },
    {
      id: 2,
      image: "/product2.png",
      name: "High Carbon Ferro Chrome",
      alt: "High Carbon Ferro Chrome – Premium grade for steel industry"
    },
    {
      id: 3,
      image: "/product3.png",
      name: "Ferro Molybdenum",
      alt: "Ferro Molybdenum – Critical alloy for high-strength steel"
    },
    {
      id: 4,
      image: "/product4.png",
      name: "Silicon Metal",
      alt: "Silicon Metal – Essential element for steel deoxidation"
    },
    {
      id: 5,
      image: "/product5.png",
      name: "Manganese Flake",
      alt: "Manganese Flake – Used in deoxidizing steel production"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="products-section"
      className={`w-full bg-gray-900 py-10 sm:py-16 md:py-20 overflow-hidden transition-opacity duration-700
                ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <Helmet>
        <meta name="description" content="Explore our range of high-grade ferro alloys including Ferro Manganese, Silico Manganese, and more. Quality guaranteed." />
      </Helmet>
      
      {/* Inject structured data for SEO */}
      <ProductJsonLd />
      
      <div className="container mx-auto px-4 pt-6 sm:pt-10 pb-4 sm:pb-8">
        {/* Heading with persistent visibility once triggered */}
        <div className="mb-6 sm:mb-10 text-center sm:text-left overflow-hidden">
          {/* Updated to h1 for proper heading structure as per SEO best practices */}
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-3 tracking-tight
                      transform transition-all duration-700 ease-out
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '100ms', transformOrigin: 'center sm:left' }}
          >
            OUR PRODUCTS
          </h1>
          <p 
            className={`text-lg sm:text-xl md:text-2xl text-white/60 font-light
                      transform transition-all duration-700 ease-out
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            Strength You Can Rely On. Quality You Can See.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-10">
        {/* Container with white border for all product cards - with synchronized animation */}
        <div 
          className={`bg-[#2C333B] border-2 border-white/50 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8
                    transform transition-all duration-700 ease-out
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
          style={{ transitionDelay: '100ms' }}
        >
          {/* Optimized grid layout with persistent visibility once triggered */}
          <div 
            id="product-grid"
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          >
            {products.map((product, index) => {
              // Check if this is the last item and if total count is odd
              const isLastItem = index === products.length - 1;
              const isOddCount = products.length % 2 === 1;
              const shouldCenter = isLastItem && isOddCount;
              
              return (
                <div
                  key={product.id}
                  className={`transform transition-all duration-700 ease-out
                       ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
                       ${shouldCenter ? 'col-span-2 sm:col-span-1 md:col-span-1 mx-auto w-[calc(50%-8px)] sm:w-full' : ''}`}
                  style={{ transitionDelay: `${150 + index * 50}ms` }}
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Product Card */}
                  <div
                    onClick={() => handleViewProduct(product.id)} 
                    className="group relative aspect-square bg-gradient-to-b from-white to-gray-50 rounded-lg sm:rounded-xl overflow-hidden 
                         cursor-pointer shadow-md hover:shadow-lg
                         transition-all duration-400 ease-out hover:-translate-y-2 mb-2 sm:mb-3"
                  >
                    {/* Product Image - optimized for mobile with updated alt text */}
                    <div className="relative w-full h-full flex flex-col p-3 sm:p-4 overflow-hidden">
                      <div className="flex-1 flex items-center justify-center py-1 sm:py-2">
                        <img 
                          src={product.image} 
                          alt={product.alt} // SEO-optimized alt text
                          className="w-4/5 h-4/5 object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>

                      {/* View button - faster transition */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center px-3 sm:px-4 py-2 sm:py-3
                                    transform translate-y-full group-hover:translate-y-0
                                    transition-all duration-300 ease-out z-30">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewProduct(product.id);
                          }}
                          className="bg-amber-500 text-white py-1.5 sm:py-2.5 px-3 sm:px-5 rounded-md sm:rounded-lg 
                                    flex items-center gap-1 sm:gap-2 
                                    w-full justify-center text-sm sm:text-base
                                    hover:bg-amber-600 active:scale-95 transition-all duration-200 
                                    shadow-md relative"
                          type="button"
                          aria-label={`View details of ${product.name}`}
                        >
                          <Eye className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                          <span className="font-medium">View Details</span>
                        </button>
                      </div>
                    </div>
                    
                    {/* Border effect with faster transition */}
                    <div className="absolute inset-0 rounded-lg sm:rounded-xl border border-gray-200/50 
                                  group-hover:border-gray-300 transition-all duration-300" />
                  </div>
                  
                  {/* Product name below card - changes to amber-500 on hover */}
                  <h3 className={`text-center font-medium text-sm sm:text-base transition-colors duration-300
                                ${hoveredId === product.id ? 'text-amber-500' : 'text-white'}`}>
                    {product.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal with Framer Motion animations */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <motion.div 
              className="relative bg-gray-900 w-full max-w-6xl rounded-lg sm:rounded-xl shadow-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.4
              }}
            >
              <motion.button 
                onClick={closeProductDetail}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/20 hover:bg-amber-500 text-white rounded-full p-2 sm:p-2.5
                         transition-all duration-200 z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
                         hover:scale-110"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close popup"
              >
                <X size={20} className="sm:w-5 sm:h-5" />
              </motion.button>
              <ProductDetail 
                product={selectedProduct} 
                isClosing={isClosing} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsSection;