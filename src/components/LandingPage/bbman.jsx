import { useState, useRef } from 'react';
import { PlayCircle } from 'lucide-react';
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const BBMAN = () => {
  const { isVisible, hasAnimated } = useScrollAnimation("bbman-section");
  const [showVideo, setShowVideo] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  return (
    <section 
      id="bbman-section"
      className={`w-full bg-gray-900 py-0 sm:py-4 transition-opacity duration-700 ${
        isVisible || hasAnimated ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto">
        {/* Bottom image/video with consistent animation timing */}
        <div className={`sm:mt-12 lg:mt-24 transform transition-all duration-700 ease-out ${
          isVisible || hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`} style={{ transitionDelay: hasAnimated ? '0ms' : '200ms' }}>
          <div className="w-[90%] sm:w-[90%] md:w-[85%] mx-auto">
            <div 
              className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 
                        ${hovered ? 'border-amber-500 shadow-xl shadow-amber-500/20' : 'border-amber-500/30'}`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className={`absolute -inset-2 bg-amber-500/10 blur-xl rounded-lg transition-all duration-700 ${
                isVisible || hasAnimated ? 'opacity-100' : 'opacity-0 scale-150'
              }`}></div>
              
              {/* YouTube video (shown when play button is clicked) */}
              {showVideo ? (
                <div className="relative w-full aspect-video">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/pElk1ShPrcE?autoplay=1" 
                    title="BB Minerals and Metals Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <>
                  {/* Image with reduced hover zoom */}
                  <img 
                    src="/about.png" 
                    alt="About BB Minerals and Metals" 
                    className={`relative z-10 w-full h-auto object-cover transition-all duration-700 ${
                      isVisible || hasAnimated ? 'scale-100 filter-none' : 'scale-105 blur-sm'
                    } ${hovered ? 'brightness-95 scale-[1.02]' : 'brightness-100 scale-100'}`}
                    style={{ 
                      filter: 'drop-shadow(0 20px 30px rgba(251, 191, 36, 0.15))',
                      aspectRatio: '16/9'
                    }}
                    loading="lazy"
                  />
                  
                  {/* Play button with Lucide React PlayCircle icon and pointer cursor */}
                  <button
                    onClick={() => setShowVideo(true)}
                    className={`absolute bottom-14 left-14 sm:bottom-45 sm:left-14 flex items-center gap-2 bg-amber-500 hover:bg-amber-600 
                              text-white py-2 px-4 sm:py-2 sm:px-7 rounded-4xl transition-all duration-300 
                              z-20 shadow-lg transform cursor-pointer ${hovered ? 'opacity-100 translate-y-0 scale-105' : 'opacity-80 translate-y-1'}`}
                    aria-label="Play video"
                  >
                    <PlayCircle size={40} strokeWidth={2} />
                    <span className="font-medium text-2xl text-white">Play Video</span>
                  </button>
                </>
              )}
              
              {/* Subtle overlay gradient for image */}
              {!showVideo && (
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 ${
                    hovered ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BBMAN;