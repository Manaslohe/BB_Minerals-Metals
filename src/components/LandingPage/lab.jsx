import { useState, useEffect } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Laboratory = () => {
  // State to manage responsive layout
  const [isMobile, setIsMobile] = useState(false);
  const { isVisible } = useScrollAnimation("laboratory-section");

  // Effect to handle resize events
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Clean up event listeners
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      id="laboratory-section"
      className={`w-full bg-gray-900 py-12 md:py-20 overflow-hidden transition-opacity duration-700
                ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Left content with animations - consistent timing */}
          <div className="w-full md:w-1/2 lg:w-6/12 mb-8 md:mb-0 md:pr-8">
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight
                        transform transition-all duration-700 ease-out
                        ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
              style={{ transitionDelay: '100ms', transformOrigin: 'left' }}
            >
              LABORATORY
            </h2>
            
            <div 
              className={`transition-all duration-700 ease-out transform
                        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                <span className="text-white transition-colors duration-300">BB Minerals and Metals' </span>
                <span className="text-white/60 transition-colors duration-300">
                  in-house laboratory ensures consistent product quality 
                  through advanced testing and skilled analysis. From raw materials to final 
                  output, we conduct chemical composition checks, microstructure analysis, and 
                  physical evaluations. Our lab supports not just quality control but also 
                  innovation and continuous improvement.
                </span>
              </p>
            </div>
          </div>

          {/* Right content - Images with animation - consistent timing */}
          <div 
            className={`w-full md:w-1/2 lg:w-6/12 relative
                      transform transition-all duration-700 ease-out
                      ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
            style={{ transitionDelay: '300ms' }}
          >
            {/* Mobile-first image layout with enhanced hover */}
            <div className="w-full overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/group.png" 
                alt="Laboratory equipment" 
                className="w-full h-auto object-cover transform transition-transform duration-700 ease-out scale-100 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Animated decorative element (only visible on desktop) */}
            <div 
              className={`absolute -bottom-4 -left-4 w-16 h-16 bg-amber-500 rounded-xl hidden md:block
                        transform transition-all duration-700 ease-out
                        ${isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 rotate-45'}`}
              style={{ transitionDelay: '400ms' }}
            />
            
            {/* Secondary decorative element */}
            <div 
              className={`absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-lg hidden md:block
                        transform transition-all duration-700 ease-out
                        ${isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 -rotate-45'}`}
              style={{ transitionDelay: '500ms' }}
            />
            
            {/* Subtle gradient overlay for mobile only */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Laboratory;