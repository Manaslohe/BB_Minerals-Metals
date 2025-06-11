import React, { useState, useEffect, useRef } from 'react';
import ReactCountryFlag from 'react-country-flag';
import WorldwidePopup from '../WorldwidePopup';

const GlobalPresence = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null); // For mobile view
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Add state for tracking animation
  const sectionRef = useRef(null);
  const isMobile = useRef(false);

  // Modified intersection observer for one-way visibility change
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set current visibility state
        setIsVisible(entry.isIntersecting);
        
        // Once visible, mark as animated
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { 
        threshold: 0.15,
        rootMargin: "-50px" 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      isMobile.current = window.innerWidth < 768;
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Handle country interaction for both hover and click
  const handleCountryInteraction = (countryCode, isClick = false) => {
    setHoveredCountry(isClick ? null : countryCode);
    if (isClick || isMobile.current) {
      setSelectedCountry(countryCode === selectedCountry ? null : countryCode);
    }
  };

  // Country maps and details
  const countryMaps = {
    IN: '/maps/india.png',
    RU: '/maps/russia.png',
    IT: '/maps/italy.png',
    ES: '/maps/spain.png',
    JP: '/maps/japan.png',
    KR: '/maps/sk.png',
    default: './country.png'
  };

  const countryDetails = {
    IN: { name: 'BHARAT', isHQ: true },
    RU: { name: 'RUSSIA', isHQ: false },
    IT: { name: 'ITALY', isHQ: false },
    ES: { name: 'SPAIN', isHQ: false },
    JP: { name: 'JAPAN', isHQ: false },
    KR: { name: 'S KOREA', isHQ: false },
  };

  const renderCountryButton = (countryCode, name, index) => (
    <div 
      className={`relative w-fit transform transition-all duration-700 ease-out
                 ${isVisible || hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
      style={{ transitionDelay: `${150 + index * 100}ms` }}
      onMouseEnter={() => handleCountryInteraction(countryCode)}
      onMouseLeave={() => handleCountryInteraction(null)}
      onClick={() => handleCountryInteraction(countryCode, true)}
    >
      <div className={`
        flex items-center space-x-3 p-1 rounded w-48 
        transition-all duration-300 
        ${(hoveredCountry === countryCode || selectedCountry === countryCode) 
          ? 'bg-amber-500 shadow-lg shadow-amber-500/20 transform scale-105' 
          : 'bg-amber-500 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20'
        }
        cursor-pointer
      `}>
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          style={{ width: '4em', height: '3em' }}
          className="transition-transform duration-300 ease-out"
          aria-label={`Flag of ${name}`}
        />
        <span className={`
          text-lg font-bold text-gray-900 transition-all duration-300
          ${(hoveredCountry === countryCode || selectedCountry === countryCode) ? 'scale-105' : ''}
        `}>
          {name}
        </span>
      </div>
      {countryCode === 'IN' && (
        <span className="pointer-events-none absolute left-52 top-1/2 -translate-y-1/2 text-amber-500 text-sm font-semibold bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
          HEADQUARTERS
        </span>
      )}
    </div>
  );

  const countries = [
    { code: 'IN', name: 'BHARAT' },
    { code: 'RU', name: 'RUSSIA' },
    { code: 'IT', name: 'ITALY' },
    { code: 'ES', name: 'SPAIN' },
    { code: 'JP', name: 'JAPAN' },
    { code: 'KR', name: 'S KOREA' },
  ];

  return (
    <div 
      ref={sectionRef}
      className={`bg-gray-900 text-white font-sans transition-opacity duration-700
                ${isVisible || hasAnimated ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto py-10 px-4 md:pb-5 pb-0">
        {/* Title and Subtitle with animations */}
        <div className="mb-10 text-center sm:text-left relative">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div>
              <h2 
                className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight
                          transform transition-all duration-700 ease-out
                          ${isVisible || hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '100ms' }}
              >
                GLOBAL PRESENCE
              </h2>
              <p 
                className={`text-xl sm:text-2xl text-white/60 font-light
                          transform transition-all duration-700 ease-out
                          ${isVisible || hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '200ms' }}
              >
                We serve a strong international client base across multiple regions, including
              </p>
            </div>
          </div>
        </div>

        {/* Desktop view - similar to original design */}
        <div 
          className={`hidden md:flex flex-row transform transition-all duration-700 ease-out
                    ${isVisible || hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
          style={{ transitionDelay: '300ms' }}
        >
          {/* Left: Country List */}
          <div className="w-1/3 flex flex-col space-y-4">
            {countries.map((country, index) => (
              <div key={`country-${country.code}`}>
                {renderCountryButton(country.code, country.name, index)}
              </div>
            ))}
            <p className={`mt-4 transition-all duration-700 ease-out
                        ${isVisible || hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                style={{ transitionDelay: '800ms' }}>
              AND MANY OTHER COUNTRIES.
            </p>
          </div>

          {/* Right: World Map with smooth transitions */}
          <div className="w-2/3 relative h-[600px] rounded-xl overflow-hidden z-[1]">
            {/* --- Add a wrapper for popup with higher z-index --- */}
            <div className="absolute inset-0 pointer-events-none z-[20]">
              {/* Render the WorldwidePopup here for desktop only */}
              <div className="absolute top-6 right-6 pointer-events-auto">
                <WorldwidePopup className="hidden md:block" />
              </div>
            </div>
            {/* --- End popup wrapper --- */}

            {/* Default World Map */}
            <div
              className="world-map absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-700 ease-in-out z-[1]"
              style={{
                backgroundImage: `url(${countryMaps.default})`,
                opacity: hoveredCountry ? 0 : 1
              }}
            />

            {/* Country Specific Maps with smooth transitions */}
            {Object.keys(countryMaps).filter(code => code !== 'default').map(countryCode => (
              <div 
                key={countryCode}
                className={`absolute inset-0 transition-all duration-700 ease-in-out z-[2]
                          ${hoveredCountry === countryCode ? 'opacity-100' : 'opacity-0'}`}
              >
                <div
                  className="world-map absolute inset-0 bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${countryMaps[countryCode]})`,
                  }}
                />
                {/* Country Name Overlay */}
                <div className={`absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 ${hoveredCountry === countryCode ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className="text-white text-4xl font-bold mb-2 tracking-wider drop-shadow-lg">
                    {countryDetails[countryCode].name}
                  </h3>
                  {countryDetails[countryCode].isHQ && (
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"/>
                      <span className="text-amber-500 text-lg drop-shadow-lg">Global Headquarters</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Interactive Hover Effect */}
            <div className={`absolute inset-0 transition-all duration-700 pointer-events-none z-[3]
              ${hoveredCountry ? 'ring-2 ring-amber-500/30' : ''}`}
            />
          </div>
        </div>

        {/* Mobile view - Optimized layout with improved map visibility */}
        <div className={`md:hidden relative transform transition-all duration-700 ease-out min-h-[600px]
                       ${isVisible || hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
             style={{ transitionDelay: '300ms' }}
        >
          
          {/* Background map container with better sizing and visibility */}
          <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden">
            {/* Default world map - fixed visibility */}
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-700 ease-in-out"
              style={{
                backgroundImage: `url(${countryMaps.default})`,
                opacity: (hoveredCountry || selectedCountry) ? 0.1 : 0.35
              }}
            />
            
            {/* Country-specific maps with improved visibility and sizing */}
            {Object.keys(countryMaps).filter(code => code !== 'default').map(countryCode => (
              <div
                key={`mobile-${countryCode}`}
                className={`absolute inset-0 transition-all duration-700 ease-in-out
                          ${(hoveredCountry === countryCode || selectedCountry === countryCode) ? 'opacity-80' : 'opacity-0'}`}
              >
                <div
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${countryMaps[countryCode]})` }}
                />
              </div>
            ))}
            
            {/* Lighter overlay gradient for better map visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/80 pointer-events-none"></div>
          </div>

          {/* Country buttons with improved spacing */}
          <div className="relative z-10 flex flex-col space-y-3 p-4 pt-8">
            {/* Country buttons - stacked vertically */}
            {countries.map((country, index) => (
              <div
                key={`mobile-btn-${country.code}`}
                className={`transform transition-all duration-700 ease-out
                          ${isVisible || hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div 
                  className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300
                            ${(hoveredCountry === country.code || selectedCountry === country.code)
                              ? 'bg-amber-500 shadow-lg shadow-amber-500/20 ring-2 ring-amber-500'
                              : selectedCountry ? 'bg-gray-800/70 hover:bg-gray-800 opacity-80' : 'bg-gray-800/90 hover:bg-gray-800'}`}
                  onClick={() => handleCountryInteraction(country.code, true)}
                >
                  <div className="flex items-center space-x-3">
                    <ReactCountryFlag
                      countryCode={country.code}
                      svg
                      style={{ width: '3em', height: '2.3em' }}
                      className={`rounded shadow-sm ${selectedCountry && selectedCountry !== country.code ? 'opacity-80' : ''}`}
                    />
                    <span className={`text-base font-medium transition-colors
                               ${(hoveredCountry === country.code || selectedCountry === country.code) ? 'text-gray-900' : 'text-white'}`}>
                      {country.name}
                    </span>
                  </div>
                  
                  {country.code === 'IN' && (
                    <span className="text-xs bg-amber-500/20 px-2 py-1 rounded text-amber-400">
                      HQ
                    </span>
                  )}
                </div>
              </div>
            ))}
            <p className={`mt-2 text-center text-white/70 text-sm transform transition-all duration-700 ease-out
                        ${isVisible || hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                style={{ transitionDelay: '900ms' }}>
              AND MANY OTHER COUNTRIES.
            </p>
          </div>
          
          {/* Mobile worldwide info button with better positioning */}
          <div className="flex justify-center mt-6 mb-6">
            <WorldwidePopup className="sm:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;