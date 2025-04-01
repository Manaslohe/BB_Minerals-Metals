import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Globe from 'react-globe.gl';
import ReactCountryFlag from "react-country-flag";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const ExportCountries = () => {
  const { isVisible } = useScrollAnimation("export-countries");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const globeRef = useRef(null);
  
  const countries = [
    { name: 'Russia', lat: 61.5240, lng: 105.3188, code: 'RU' },
    { name: 'Italy', lat: 41.8719, lng: 12.5674, code: 'IT' },
    { name: 'Spain', lat: 40.4637, lng: -3.7492, code: 'ES' },
    { name: 'Japan', lat: 36.2048, lng: 138.2529, code: 'JP' },
    { name: 'South Korea', lat: 35.9078, lng: 127.7669, code: 'KR' }
  ];

  const globeConfig = {
    pointRadius: 2,
    pointColor: (d) => selectedCountry?.name === d.name ? '#f59e0b' : '#004080',
    pointAltitude: 0.4,
    pointsMerge: false,
    pointLabel: (d) => d.name,
    atmosphereColor: '#1a4d8f',
    atmosphereAltitude: 0.3,
    globeImageUrl: "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg",
    bumpImageUrl: "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png",
    enablePointerInteraction: true,
    animateIn: true
  };

  useEffect(() => {
    const handleGlobeRotation = () => {
      if (globeRef.current) {
        globeRef.current.controls().autoRotate = true;
        globeRef.current.controls().autoRotateSpeed = 0.3;
      }
    };

    handleGlobeRotation();
    
    // Re-enable rotation when country changes
    if (selectedCountry) {
      const timer = setTimeout(handleGlobeRotation, 1500);
      return () => clearTimeout(timer);
    }
  }, [selectedCountry]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = false;
      globeRef.current.pointOfView({
        lat: country.lat,
        lng: country.lng,
        altitude: window.innerWidth < 768 ? 1.5 : 2.5
      }, 1000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <motion.div 
      id="export-countries"
      className="w-full py-8 md:py-16 px-4 md:px-8 bg-gray-50 relative"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="flex flex-col lg:flex-row items-start gap-8 mb-8">
        <motion.div 
          className="relative lg:w-[35%] xl:w-[30%]"
          variants={itemVariants}
        >
          <div className="sticky top-8">
            {/* Title section */}
            <motion.div 
              className="relative flex mb-8"
              variants={itemVariants}
            >
              <motion.div 
                className="absolute h-full w-1.5 md:w-2 bg-amber-500 rounded-none"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#004080] ml-4 md:ml-6 leading-tight tracking-tight whitespace-nowrap break-words">
                OUR EXPORT COUNTRIES
              </h2>
            </motion.div>
            
            {/* Mobile Globe */}
            <motion.div 
              className="lg:hidden w-full h-[350px] mb-8"
              variants={itemVariants}
            >
              <Globe
                ref={globeRef}
                className="globe-instance"
                height={350}
                width={window.innerWidth - 32}
                backgroundColor="#F9FAFB"
                pointsData={selectedCountry ? [selectedCountry] : countries}
                pointLat="lat"
                pointLng="lng"
                {...globeConfig}
                onGlobeReady={() => {
                  if (globeRef.current) {
                    globeRef.current.controls().autoRotate = true;
                    globeRef.current.controls().autoRotateSpeed = 0.3;
                    globeRef.current.controls().enableZoom = false;
                    globeRef.current.controls().maxDistance = 180;
                    globeRef.current.controls().minDistance = 150;
                  }
                }}
              />
            </motion.div>

            {/* Country List */}
            <AnimatePresence>
              <motion.div 
                className="flex flex-col space-y-4"
                variants={itemVariants}
              >
                {countries.map((country, index) => (
                  <motion.div
                    key={country.name}
                    className={`flex items-center p-4 rounded-xl transition-all cursor-pointer
                      ${selectedCountry?.name === country.name 
                        ? 'bg-amber-50 shadow-lg transform scale-105' 
                        : 'hover:bg-gray-100'}`}
                    variants={itemVariants}
                    custom={index}
                    onHoverStart={() => handleCountrySelect(country)}
                    onClick={() => handleCountrySelect(country)}
                    whileHover={{ x: 15 }}
                    transition={{ 
                      duration: 0.2,
                      delay: index * 0.1 
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <ReactCountryFlag
                        countryCode={country.code}
                        svg
                        style={{
                          width: '3em',
                          height: '3em',
                          borderRadius: '8px',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                      />
                      <h3 className={`text-2xl md:text-3xl font-medium transition-colors
                        ${selectedCountry?.name === country.name 
                          ? 'text-amber-500 font-bold' 
                          : 'text-[#004080]'}`}>
                        {country.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Desktop Globe Container */}
        <motion.div 
          className="hidden lg:block lg:w-[65%] xl:w-[70%] h-[650px] sticky top-8"
          variants={itemVariants}
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex justify-end">
            <Globe
              ref={globeRef}
              className="globe-instance"
              height={700}
              width={800}
              backgroundColor="#F9FAFB"
              pointsData={selectedCountry ? [selectedCountry] : countries}
              pointLat="lat"
              pointLng="lng"
              {...globeConfig}
              onGlobeReady={() => {
                if (globeRef.current) {
                  globeRef.current.controls().autoRotate = true;
                  globeRef.current.controls().autoRotateSpeed = 0.3;
                  globeRef.current.controls().enableZoom = true;
                  globeRef.current.controls().maxDistance = 300;
                  globeRef.current.controls().minDistance = 200;
                }
              }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Bottom line */}
        <motion.div 
             className="absolute bottom-0 left-0 right-0 h-2 md:h-3 bg-amber-500"
             variants={{
               hidden: { scaleX: 0 },
               visible: { 
                 scaleX: 1,
                 transition: { duration: 1.5, delay: 0.6 }
               }
             }}
             style={{ originX: 0 }}
           />
    </motion.div>
  );
};

export default ExportCountries;