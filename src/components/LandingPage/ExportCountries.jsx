import React, { useState, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { X } from 'lucide-react'; // Import X icon for close button

const GlobalPresence = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [isWorldwidePopupOpen, setIsWorldwidePopupOpen] = useState(false);

  // Add useEffect for handling scroll lock
  useEffect(() => {
    if (isWorldwidePopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isWorldwidePopupOpen]);

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

  const renderCountryButton = (countryCode, name) => (
    <div 
      className="relative w-fit"
      onMouseEnter={() => setHoveredCountry(countryCode)}
      onMouseLeave={() => setHoveredCountry(null)}
    >
      <div className="flex items-center space-x-3 bg-amber-500 p-1 rounded w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 cursor-pointer">
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          style={{ width: '4em', height: '3em' }}
        />
        <span className="text-lg font-bold text-gray-900">{name}</span>
      </div>
      {countryCode === 'IN' && (
        <span className="pointer-events-none absolute left-52 top-1/2 -translate-y-1/2 text-amber-500 text-sm font-semibold bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
          HEADQUARTERS
        </span>
      )}
    </div>
  );

  return (
    <div className="bg-gray-900 text-white font-sans">
      <div className="container mx-auto py-10 px-4">
        {/* Title and Subtitle */}
        <div className="mb-10 text-center sm:text-left relative">
          <div className="flex justify-between">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight">
                GLOBAL PRESENCE
              </h2>
              <p className="text-xl sm:text-2xl text-white/60 font-light">
                We serve a strong international client base across multiple regions, including
              </p>
            </div>
            <div className="relative">
              <button 
                onClick={() => setIsWorldwidePopupOpen(!isWorldwidePopupOpen)}
                className="hidden sm:flex bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded items-center space-x-2 self-end mb-1 hover:bg-amber-400 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <img 
                  src="/icons/down.png" 
                  alt="arrow" 
                  className={`w-6 h-6 transition-transform duration-300 ${isWorldwidePopupOpen ? 'rotate-180' : ''}`}
                />
                <span>BBMAM WORLDWIDE</span>
              </button>

              {/* Worldwide Popup */}
              {isWorldwidePopupOpen && (
                <>
                  {/* Backdrop - removed backdrop-blur-sm */}
                  <div 
                    className="fixed inset-0 bg-gray-950/60 z-40"
                    onClick={() => setIsWorldwidePopupOpen(false)}
                  />
                  
                  {/* Dropdown Popup */}
                  <div 
                    className="absolute right-0 top-full mt-2 w-[48rem] max-w-[90vw] bg-gray-900 rounded-xl shadow-2xl overflow-hidden ring-1 ring-amber-500/20 z-50 origin-top animate-slideDown"
                  >
                    {/* Header with gradient */}
                    <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 p-8">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl md:text-3xl font-bold text-amber-500">
                          BBMAM WORLDWIDE
                        </h3>
                        <button 
                          onClick={() => setIsWorldwidePopupOpen(false)}
                          className="text-gray-400 hover:text-amber-500 p-2 rounded-full hover:bg-amber-500/10 transition-all duration-300 transform hover:scale-110"
                        >
                          <X size={24} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <p className="text-lg leading-relaxed text-gray-300">
                        At BB MINERALS AND METALS, we are dedicated to excellence, innovation, and customer satisfaction.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-300 mt-4">
                        With a strong global footprint, we have built long-term partnerships in countries such as Japan, Korea, Spain, Russia, Italy, and many more. Our reputation in international markets is founded on strict adherence to quality standards and a strong commitment to timely delivery, ensuring seamless supply chain operations for our clients.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-300 mt-4">
                        We prioritize precision, consistency, and reliability—qualities that make us a trusted supplier in the global Ferroalloys industry.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left: Country List */}
          <div className="md:w-1/3 flex flex-col space-y-4">
            {renderCountryButton('IN', 'BHARAT')}
            {renderCountryButton('RU', 'RUSSIA')}
            {renderCountryButton('IT', 'ITALY')}
            {renderCountryButton('ES', 'SPAIN')}
            {renderCountryButton('JP', 'JAPAN')}
            {renderCountryButton('KR', 'S KOREA')}
            <p className="mt-4">AND MANY OTHER COUNTRIES.</p>
          </div>

          {/* Right: World Map with Dots */}
          <div className="md:w-2/3 relative h-[600px] rounded-xl overflow-hidden">
            {/* Default World Map */}
            <div
              className="world-map absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
              style={{
                backgroundImage: `url(${countryMaps.default})`,
                opacity: hoveredCountry ? 0 : 1
              }}
            />

            {/* Country Specific Map with Overlay */}
            {hoveredCountry && (
              <div className="absolute inset-0">
                <div
                  className="world-map absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
                  style={{
                    backgroundImage: `url(${countryMaps[hoveredCountry]})`,
                    transitionDelay: '150ms'
                  }}
                />
                {/* Country Name Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-4xl font-bold mb-2 tracking-wider drop-shadow-lg">
                    {countryDetails[hoveredCountry].name}
                  </h3>
                  {countryDetails[hoveredCountry].isHQ && (
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"/>
                      <span className="text-amber-500 text-lg drop-shadow-lg">Global Headquarters</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Interactive Hover Effect */}
            <div className={`absolute inset-0 transition-all duration-1000 pointer-events-none
              ${hoveredCountry ? 'ring-2 ring-amber-500/30' : ''}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;