import React, { useState } from "react";

const CertificationsCompliance = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      id="certifications-section"
      className="w-full bg-gray-900 py-16 sm:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 pt-10 pb-8 relative z-10">
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight">
            CERTIFICATIONS & COMPLIANCE
          </h2>
          <p className="text-xl sm:text-2xl text-white/60 font-light">
            Committed to Quality and International Standards
          </p>
        </div>
      </div>
      
      <div className="flex relative flex-col justify-center items-center px-6 sm:px-16 py-12 w-full min-h-[333px]">
        {/* Background with improved visibility */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(/certib.png)',
              filter: 'brightness(0.8) saturate(1.3)',
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
                className="w-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <article 
                  className={`
                    flex flex-col items-center text-center p-8 h-full w-full text-white 
                    rounded-2xl backdrop-blur-sm border border-transparent
                    transition-all duration-300 ease-in-out
                    ${hoveredIndex === index ? 
                      'bg-black/40 border-amber-500/30 shadow-lg shadow-amber-500/10 transform -translate-y-1' : 
                      'bg-black/30'}
                  `}
                >
                  <div className={`
                    flex items-center justify-center w-16 h-16 rounded-full mb-6
                    transition-all duration-300
                    ${hoveredIndex === index ? 
                      'bg-amber-500 shadow-md shadow-amber-600/20' : 
                      'bg-amber-800/70'}
                  `}>
                    <img
                      src={cert.iconSrc}
                      alt={`${cert.title} icon`}
                      className={`${cert.imgClass} transition-transform duration-300 
                        ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
                    />
                  </div>
                  
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