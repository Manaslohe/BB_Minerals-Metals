import React, { useState, useEffect, useRef } from "react";
import { Eye, X } from "lucide-react";
import ProductDetail from "../ProductDetail";

const ProductsSection = () => {
  // State management
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
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

  const closeProductDetail = () => {
    setSelectedProduct(null);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  const products = [
    {
      id: 1,
      image: "/product1.png",
      name: "Low Carbon Ferro Chrome",
    },
    {
      id: 2,
      image: "/product2.png",
      name: "High Carbon Ferro Chrome",
    },
    {
      id: 3,
      image: "/product3.png",
      name: "Ferro Molybdenum",
      price: "$499"
    },
    {
      id: 4,
      image: "/product4.png",
      name: "Silicon Metal",
      price: "$599"
    },
    {
      id: 5,
      image: "/product5.png",
      name: " Manganese Flake",
      price: "$699"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="products-section"
      className={`w-full bg-gray-900 py-10 sm:py-16 md:py-20 overflow-hidden transition-opacity duration-700
                ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 pt-6 sm:pt-10 pb-4 sm:pb-8">
        {/* Heading with persistent visibility once triggered */}
        <div className="mb-6 sm:mb-10 text-center sm:text-left overflow-hidden">
          <h2 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-3 tracking-tight
                      transform transition-all duration-700 ease-out
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '100ms', transformOrigin: 'center sm:left' }}
          >
            OUR PRODUCTS
          </h2>
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
        {/* Optimized grid layout with persistent visibility once triggered */}
        <div 
          id="product-grid"
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative aspect-square bg-gradient-to-b from-white to-gray-50 rounded-lg sm:rounded-xl overflow-hidden 
                     cursor-pointer shadow-md hover:shadow-xl hover:shadow-amber-500/20 
                     transition-all duration-400 ease-out hover:-translate-y-2
                     transform transition-all duration-700 ease-out
                     ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
              style={{ transitionDelay: `${150 + index * 50}ms` }}
            >
              {/* Mobile-optimized content container */}
              <div className="relative w-full h-full flex flex-col p-3 sm:p-4 overflow-hidden">
                {/* Product Image - optimized for mobile */}
                <div className="flex-1 flex items-center justify-center py-1 sm:py-2">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-4/5 h-4/5 object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Product name - mobile optimized with faster transitions */}
                <div className="absolute bottom-0 left-0 right-0 py-2 sm:py-3 px-3 sm:px-4 bg-white border-t border-gray-100
                              transition-all duration-300 ease-out group-hover:translate-y-full">
                  <h3 className="text-gray-800 font-medium truncate text-center text-sm sm:text-base">
                    {product.name}
                  </h3>
                </div>

                {/* Product name - slides in from top on hover (faster) */}
                <div className="absolute top-0 left-0 right-0 py-2 sm:py-3 px-3 sm:px-4 bg-amber-500 text-white
                              transform -translate-y-full group-hover:translate-y-0
                              transition-all duration-300 ease-out">
                  <h3 className="font-medium truncate text-center text-sm sm:text-base">
                    {product.name}
                  </h3>
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
                  >
                    <Eye className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    <span className="font-medium">View Details</span>
                  </button>
                </div>
              </div>
              
              {/* Hover overlay - Subtle gradient with faster transition */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-500/20 
                           opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none" />

              {/* Border effect with faster transition */}
              <div className="absolute inset-0 rounded-lg sm:rounded-xl border border-gray-200/50 
                            group-hover:border-amber-500/30 transition-all duration-300" />
              
              {/* Subtle glow effect with faster transition */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-500 
                           rounded-lg sm:rounded-xl blur-lg opacity-0 group-hover:opacity-20 -z-10
                           transition-all duration-300 ease-in-out pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal with faster animation */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4 overflow-y-auto">
          <div className="relative bg-gray-900 w-full max-w-6xl rounded-lg sm:rounded-xl shadow-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto 
                        animate-[fadeIn_0.2s_ease-out]">
            <button 
              onClick={closeProductDetail}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/20 hover:bg-black/30 text-white rounded-full p-1.5 sm:p-2
                       transition-colors duration-300 z-10"
              aria-label="Close popup"
            >
              <X size={18} className="sm:size-20" />
            </button>
            <ProductDetail product={selectedProduct} onBack={closeProductDetail} />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;