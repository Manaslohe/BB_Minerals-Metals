import { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const BinNumbers = () => {
  const { isVisible, hasAnimated, ref } = useScrollAnimation("bin-numbers-section");
  const [counts, setCounts] = useState({ years: 0, sqft: 0, professionals: 0 });
  const [hoveredItem, setHoveredItem] = useState(null);

  const stats = [
    {
      number: 15,
      label: "YEARS OF EXPERTISE",
      description: "Pioneering minerals, ferro alloys, and charcoal trading since 2007, delivering quality and reliability.",
      key: "years"
    },
    {
      number: 64000,
      label: "SQ. FT OF WORLD-CLASS FACILITIES",
      description: "With cutting-edge infrastructure for minerals, ferro alloys, and charcoal processing, we ensure superior quality and unmatched value for our customers.",
      key: "sqft"
    },
    {
      number: 90,
      label: "SKILLED PROFESSIONALS",
      description: "Our strength lies in empowering our workforce, supporting communities, and embracing sustainability for a better future.",
      key: "professionals"
    }
  ];

  // Counter animation with optimized RAF - only runs when visible
  useEffect(() => {
    if (!isVisible) return;

    const startTime = performance.now();
    const duration = 2000; // Animation duration in ms
    
    let animationFrameId;
    
    const updateCounters = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easeOutExpo for smoother animation ending
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const newCounts = {};
      stats.forEach(stat => {
        newCounts[stat.key] = Math.floor(stat.number * easeOutExpo);
      });
      
      setCounts(newCounts);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounters);
      }
    };
    
    animationFrameId = requestAnimationFrame(updateCounters);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <section 
      ref={ref}
      id="bin-numbers-section"
      className={`flex flex-col py-16 px-16 bg-gray-900 text-white w-full max-md:px-5 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      aria-label="Bin Numbers Statistics"
    >
      <div className="flex flex-row justify-between items-start w-full max-lg:flex-col">
        <h2 
          className={`text-6xl font-bold text-white max-w-xs max-md:text-4xl max-md:mb-10 transform transition-transform duration-700 ${isVisible ? 'translate-y-0' : 'translate-y-16'}`}
          style={{ transitionDelay: '100ms' }}
        >
          BBMAM IN <br />
          <span className="mt-4 inline-block">NUMBERS</span>
        </h2>

        <div className="flex flex-row justify-between flex-1 ml-16 max-lg:ml-0 max-lg:mt-8 max-md:flex-col max-md:gap-10">
          {stats.map((stat, index) => (
            <div 
              key={stat.key}
              className={`flex flex-row transform transition-all duration-700 ease-out
                          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredItem(stat.key)}
              onMouseLeave={() => setHoveredItem(null)}
              tabIndex={0}
              aria-label={`${stat.label}: ${stat.number}+`}
            >
              <div 
                className={`flex shrink-0 bg-yellow-500 rounded-sm h-40 w-8 mr-4 transition-all duration-300 ${hoveredItem === stat.key ? 'bg-yellow-400 h-44' : ''}`}
              />
              
              <article className="flex flex-col max-w-xs">
                <h3 
                  className={`text-6xl font-bold text-white max-md:text-4xl transition-all duration-500 ${hoveredItem === stat.key ? 'text-yellow-400 scale-110' : ''}`}
                  style={{ transformOrigin: 'left' }}
                >
                  {stat.key === 'sqft' ? counts[stat.key].toLocaleString() : counts[stat.key]}+
                </h3>
                <p className={`text-base font-medium mt-1 transition-colors duration-300 ${hoveredItem === stat.key ? 'text-yellow-400' : 'text-white'}`}>
                  {stat.label}
                </p>
                <p className="text-sm mt-2 text-gray-300 leading-relaxed">
                  {stat.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BinNumbers;