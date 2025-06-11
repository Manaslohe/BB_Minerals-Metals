import React, { useState, useEffect, useRef } from "react";

const CertificationsCompliance = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Add state to track if animation occurred
  const sectionRef = useRef(null);

  // Modified intersection observer to handle both states
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set current visibility state
        setIsVisible(entry.isIntersecting);
        
        // If it becomes visible and hasn't been animated yet, mark as animated
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
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
  }, [hasAnimated]); // Include hasAnimated in dependencies

  const certifications = [
    {
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/ef7b5d5447c6479dac0038316f4acf54/54203221adb40be85afdefd1f611ddb3623db9cd?placeholderIfAbsent=true",
      title: "Registered & Certified",
      description: (
        <>
          BB MINERALS AND METALS is a fully <br />
          registered, certified, and trademarked entity.
        </>
      ),
      className: "px-3.5 pt-4 pb-16",
      imgClass: "w-[46px]"
    },
    {
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/ef7b5d5447c6479dac0038316f4acf54/fe9582d8bfdb84e765a1bd51dc1a573283e34a12?placeholderIfAbsent=true",
      title: "Regulatory Approvals",
      description: (
        <>
          We hold all necessary regulatory approvals
          <br /> and industry-standard certifications.
        </>
      ),
      className: "px-7 pt-5 pb-16",
      imgClass: "w-[52px]"
    },
    {
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/ef7b5d5447c6479dac0038316f4acf54/e232d522c6271cdd97972f7ebfa02d50d4048658?placeholderIfAbsent=true",
      title: "Quality & Compliance",
      description: (
        <>
          Our stringent quality control ensures every
          <br /> batch meets international specifications and
          <br /> compliance requirements.
        </>
      ),
      className: "pt-3.5 pr-3 pb-11 pl-6",
      imgClass: "w-12"
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="certifications-section"
       className={`w-full bg-gray-900 py-10 pb-5 md:pb-10 pt-0 sm:pt-0 overflow-hidden transition-opacity duration-700
                ${isVisible || hasAnimated ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 pt-10 pb-8 relative z-10">
        <div className="mb-10 text-center sm:text-left">
          <h2 
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight
                      transform transition-all duration-700 ease-out
                      ${isVisible || hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '100ms', transformOrigin: 'center sm:left' }}
          >
            CERTIFICATIONS & COMPLIANCE
          </h2>
          <p 
            className={`text-xl sm:text-2xl text-white/60 font-light
                      transform transition-all duration-700 ease-out
                      ${isVisible || hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            Committed to Quality and International Standards
          </p>
        </div>
      </div>
      
      <div className="flex relative flex-col justify-center items-center px-6 sm:px-16 py-12 w-full min-h-[333px]">
        {/* Background with improved visibility */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <div 
            className={`w-full h-full bg-cover bg-center transition-all duration-700
                      transform ${isVisible || hasAnimated ? 'scale-100 opacity-100' : 'scale-105 opacity-80'}`}
            style={{
              backgroundImage: 'url(' + (window.innerWidth < 768 ? '/certi2.png' : '/certib.png') + ')',
              filter: 'brightness(1) saturate(1.3)',
              transitionDelay: '250ms'
            }}
          ></div>
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`w-full transform transition-all duration-700 ease-out
                          ${isVisible || hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <article 
                  className={`
                    flex flex-col items-center text-center p-8 h-full w-full text-white 
                    rounded-2xl backdrop-blur-sm border border-white/50
                    transition-all duration-300 ease-in-out
                    ${hoveredIndex === index ? 
                      'bg-gradient-to-r from-black/90 to-black/40 border-white shadow-lg shadow-white/5 transform -translate-y-1' : 
                      'bg-gradient-to-r from-black/90 to-black/40'}
                  `}
                >
                  <img
                    src={cert.iconSrc}
                    alt={`${cert.title} icon`}
                    className={`${cert.imgClass} mb-6`}
                  />
                  
                  <h3 className={`
                    text-2xl font-semibold mb-3 transition-colors duration-300
                    ${hoveredIndex === index ? 'text-amber-400' : 'text-white'}
                  `}>
                    {cert.title}
                  </h3>
                  
                  <div className={`
                    h-px w-12 mb-4 transition-all duration-300
                    ${hoveredIndex === index ? 'w-20 bg-amber-500' : 'bg-gray-500/50'}
                  `}></div>
                  
                  <p className={`
                    text-base font-light transition-colors duration-300
                    ${hoveredIndex === index ? 'text-white' : 'text-gray-200'}
                  `}>
                    {cert.description}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsCompliance;