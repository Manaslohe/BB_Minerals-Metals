import { useState, useEffect, useRef } from 'react';
import { Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const CompanyOverview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState('next');
  const [isChanging, setIsChanging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [touchDelta, setTouchDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [initialTouchPos, setInitialTouchPos] = useState(null);
  const slidesContainerRef = useRef(null);

  const slides = [
    {
      image: "/e2.png",
      title: "ABOUT US",
      description: "BB MINERALS AND METALS is a leading name in the Ferroalloys industry, specializing in the manufacturing and trading of high-quality Ferroalloys for over a decade. As a Small Scale Industry (SSI) registered under MSME, we are committed to delivering premium-grade alloys that meet international standards, catering to diverse industrial applications.",
      icon: <img src="/icons/about.png" alt="About Us" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain" />
    },
    {
      image: "/e1.png",
      title: "OUR SPECIALIZATION",
      description: "We manufacture and trade high-quality:\n• Ferro Molybdenum\n• Low Carbon Ferro Chrome\nWith advanced metallurgical expertise, we ensure superior product quality that meets the stringent demands of the global market.",
      icon: <img src="/icons/our_speciali.png" alt="Our Specialization" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain" />
    },
    {
      image: "/e3.png",
      title: "PRODUCTION CAPACITY",
      description: "Our state-of-the-art manufacturing facility has a production capacity of 5,000 tonnes annually, enabling us to ensure consistent supply and meet bulk industrial demands efficiently.",
      icon: <img src="/icons/manufacturing_facility.png" alt="Manufacturing Facility" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain" />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { 
        threshold: [0.15],
        rootMargin: "-50px" 
      }
    );

    const checkInitialVisibility = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isInViewport = (
        rect.top >= -rect.height * 0.5 &&
        rect.bottom <= window.innerHeight + rect.height * 0.5
      );
      
      if (isInViewport && !hasAnimated) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    };

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      checkInitialVisibility();

      window.addEventListener('load', checkInitialVisibility);
      setTimeout(checkInitialVisibility, 500);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('load', checkInitialVisibility);
    };
  }, [hasAnimated]);

  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isChanging) {
      interval = setInterval(() => {
        changeSlide('next');
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isChanging]);

  const changeSlide = (direction) => {
    if (isChanging) return;

    setIsChanging(true);
    setSlideDirection(direction);

    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }

    setTimeout(() => {
      setIsChanging(false);
    }, 300);
  };

  const handleSlideChange = (direction) => {
    setIsAutoPlaying(false);
    changeSlide(direction);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleDotClick = (index) => {
    if (isChanging || currentSlide === index) return;

    setSlideDirection(index > currentSlide ? 'next' : 'prev');
    setIsChanging(true);

    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsChanging(false), 500);
    }, 50);

    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleTouchStart = (e) => {
    setIsAutoPlaying(false);
    setInitialTouchPos(e.targetTouches[0].clientX);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
    setIsDragging(true);
    setTouchDelta(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.targetTouches[0].clientX;
    setTouchEnd(currentX);
    
    const delta = touchStart - currentX;
    setTouchDelta(delta);
    
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const containerWidth = slidesContainerRef.current?.offsetWidth || 300;
    const threshold = containerWidth * 0.15;
    
    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        handleSlideChange('next');
      } else {
        handleSlideChange('prev');
      }
    } else {
      setTouchDelta(0);
    }
    
    setTimeout(() => setIsAutoPlaying(true), 10000);
    setInitialTouchPos(null);
  };

  const handleTouchCancel = () => {
    setIsDragging(false);
    setTouchDelta(0);
    setInitialTouchPos(null);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getSlideStyle = (index) => {
    const baseStyles = {
      transition: isDragging ? 'none' : 'all 300ms ease-out',
      opacity: currentSlide === index ? 1 : 0
    };

    if (!isDragging || touchDelta === 0) {
      if (currentSlide === index) {
        return { ...baseStyles, transform: 'translateX(0)' };
      } else if (index === (currentSlide + 1) % slides.length) {
        return { ...baseStyles, transform: 'translateX(100%)', opacity: 0 };
      } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
        return { ...baseStyles, transform: 'translateX(-100%)', opacity: 0 };
      } else {
        return { ...baseStyles, transform: 'translateX(100%)', opacity: 0 };
      }
    }
    
    if (isDragging) {
      const dragStyles = { transition: 'none', opacity: currentSlide === index ? 1 : 0 };
      
      const containerWidth = slidesContainerRef.current?.offsetWidth || 300;
      const swipePercentage = (touchDelta / containerWidth) * 100;
      const maxSwipePercent = 100;
      const clampedSwipe = Math.max(Math.min(swipePercentage, maxSwipePercent), -maxSwipePercent);
      
      if (currentSlide === index) {
        return { ...dragStyles, transform: `translateX(${-clampedSwipe}%)`, opacity: 1 };
      } else if (index === (currentSlide + 1) % slides.length && touchDelta > 0) {
        return { ...dragStyles, transform: `translateX(${100 - clampedSwipe}%)`, opacity: Math.min(Math.abs(clampedSwipe) / 100, 1) };
      } else if (index === (currentSlide - 1 + slides.length) % slides.length && touchDelta < 0) {
        return { ...dragStyles, transform: `translateX(${-100 - clampedSwipe}%)`, opacity: Math.min(Math.abs(clampedSwipe) / 100, 1) };
      } else {
        return { ...dragStyles, transform: 'translateX(100%)', opacity: 0 };
      }
    }

    return baseStyles;
  };

  return (
    <section 
      ref={sectionRef}
      id="company-overview"
      className={`w-full bg-gray-900 py-8 sm:py-12 md:py-20 overflow-hidden transition-opacity duration-500 
        ${isVisible || hasAnimated ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 md:px-6 pt-4 sm:pt-6 md:pt-10 pb-2 sm:pb-4 md:pb-8">
        <div className="mb-4 sm:mb-6 md:mb-10 text-center sm:text-left overflow-hidden">
          <h2 
            className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-white mb-1 sm:mb-2 tracking-tight
                      transform transition-all duration-500 ease-out
                      ${isVisible || hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '50ms' }}
          >
            COMPANY OVERVIEW
          </h2>
          <p 
            className={`text-base sm:text-lg md:text-2xl text-white/60 font-light px-4 sm:px-0
                      transform transition-all duration-500 ease-out
                      ${isVisible || hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Discover our journey, expertise, and industrial excellence
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-10 gap-4 sm:gap-6 lg:gap-12 transform transition-all duration-500 ease-out ${
          isVisible || hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`} style={{ transitionDelay: hasAnimated ? '150ms' : '200ms' }}>
          <div 
            ref={slidesContainerRef}
            className="lg:col-span-4 relative w-full h-70 sm:h-72 md:h-80 lg:h-[450px] flex items-center justify-center overflow-hidden rounded-xl touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 ${
                  currentSlide === index ? 'z-10' : 'z-0'
                } transition-opacity duration-300 ease-out`}
                style={getSlideStyle(index)}
              >
                <div className="h-full w-full flex items-center justify-center">
                  <div className={`relative`}>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className={`object-contain w-3/4 sm:w-4/5 lg:w-full h-full mx-auto relative z-10 transition-all duration-300 ease-out ${
                        currentSlide === index ? 'brightness-100' : 'brightness-90'
                      }`}
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
            
            {isDragging && Math.abs(touchDelta) > 20 && (
              <div className={`absolute inset-y-0 ${touchDelta > 0 ? 'right-2' : 'left-2'} 
                top-1/2 transform -translate-y-1/2 z-20 flex items-center justify-center
                opacity-70 transition-opacity`}>
                <div className="bg-white/20 backdrop-blur-md rounded-full p-2">
                  {touchDelta > 0 ? 
                    <ChevronRight className="w-6 h-6 text-white" /> : 
                    <ChevronLeft className="w-6 h-6 text-white" />
                  }
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-6 space-y-5 sm:space-y-6 lg:space-y-8 mt-4 lg:mt-0">
            <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start mb-4 sm:mb-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`rounded-full h-2 sm:h-3 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    currentSlide === index 
                      ? 'bg-white w-6 sm:w-8' 
                      : 'bg-gray-500 hover:bg-gray-400 w-2 sm:w-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="relative h-auto min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 space-y-4 sm:space-y-6 transition-all duration-400 ease-in-out transform ${
                    currentSlide === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`flex items-center justify-center ${
                      index === 0 ? 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20' : 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20'
                    }`}>
                      {slide.icon}
                    </div>
                    <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-500 transition-all duration-300 ${
                      currentSlide === index ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}>
                      {slide.title}
                    </h2>
                  </div>

                  <div className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed space-y-3 sm:space-y-4">
                    {slide.description.split('\n').map((paragraph, i) => (
                      <p key={i} className={`transition-all duration-400 ${
                        currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`} style={{ transitionDelay: currentSlide === index ? `${100 + i * 50}ms` : '0ms' }}>
                        {paragraph.startsWith('•') ? (
                          <span className="flex items-start">
                            <span className="text-amber-400 mr-2 text-xl sm:text-2xl leading-none">•</span>
                            <span>{paragraph.substring(1).trim()}</span>
                          </span>
                        ) : paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-amber-500/50 rounded-full mt-2 sm:mt-4"></div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start gap-2 sm:gap-3 pt-4 sm:pt-6 lg:pt-8">
              <button
                onClick={() => handleSlideChange('prev')}
                className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-amber-500 text-white transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={() => handleSlideChange('next')}
                className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-amber-500 text-white transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
 
      </div>
    </section>
  );
};

export default CompanyOverview;