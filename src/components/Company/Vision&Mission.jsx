import React from 'react';
import { useNavigate } from 'react-router-dom';

const VisionMissionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white relative">
      {/* Floating Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-amber-500/20 text-blue-900 hover:text-amber-500 transition-all duration-300 group hover:shadow-amber-500/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-lg font-medium">Back</span>
      </button>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Vision & Mission Section */}
        <div className="lg:w-1/2 bg-gradient-to-br from-white via-gray-50 to-amber-50/30 p-4 lg:p-8 flex items-center justify-center">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-grid-blue-900/[0.02] -z-1"></div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 border border-amber-500/10 hover:shadow-2xl hover:border-amber-500/20 transition-all duration-500 animate-fade-in-up max-w-2xl w-full hover:bg-white/90">
            {/* Vision Section */}
            <div className="mb-8 relative group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-3 shadow-lg rotate-3 transform group-hover:rotate-6 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12" y2="16" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-blue-900 tracking-wider group-hover:text-amber-500 transition-colors duration-300">VISION</h2>
              </div>
              <ul className="space-y-3 text-blue-900 text-lg pl-4">
                {/* Vision List Items */}
                <li className="flex items-start hover:bg-amber-50/50 p-3 rounded-lg transition-all duration-300 hover:translate-x-1">
                  <span className="text-amber-500 text-2xl leading-none mr-3">•</span>
                  <p className="text-lg">Be a <span className="font-semibold text-blue-900 hover:text-amber-500 transition-colors duration-300">global leader</span> in high-quality metal products.</p>
                </li>
                <li className="flex items-start hover:bg-amber-50/50 p-3 rounded-lg transition-all duration-300 hover:translate-x-1">
                  <span className="text-amber-500 text-2xl leading-none mr-3">•</span>
                  <p className="text-lg">Drive <span className="font-semibold text-blue-900 hover:text-amber-500 transition-colors duration-300">innovation and sustainability</span> in the metal industry.</p>
                </li>
                <li className="flex items-start hover:bg-amber-50/50 p-3 rounded-lg transition-all duration-300 hover:translate-x-1">
                  <span className="text-amber-500 text-2xl leading-none mr-3">•</span>
                  <p className="text-lg">Revolutionize the metal sector with <span className="font-semibold text-blue-900 hover:text-amber-500 transition-colors duration-300">cutting-edge technology</span>.</p>
                </li>
              </ul>
            </div>

            {/* Enhanced Decorative Divider */}
            <div className="my-6 flex items-center gap-4 group">
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent group-hover:via-amber-500/40 transition-all duration-500"></div>
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent group-hover:via-amber-500/40 transition-all duration-500"></div>
            </div>

            {/* Mission Section */}
            <div className="relative group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-3 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-blue-900 tracking-wider group-hover:text-amber-500 transition-colors duration-300">MISSION</h2>
              </div>
              <ul className="space-y-3 text-blue-900 text-lg pl-4">
                {/* Mission List Items */}
                <li className="flex items-start hover:bg-amber-50/50 p-3 rounded-lg transition-all duration-300 hover:translate-x-1">
                  <span className="text-amber-500 text-2xl leading-none mr-3">•</span>
                  <p className="text-lg">Deliver <span className="font-semibold text-blue-900 hover:text-amber-500 transition-colors duration-300">premium metal products</span> with reliability and innovation.</p>
                </li>
                <li className="flex items-start hover:bg-amber-50/50 p-3 rounded-lg transition-all duration-300 hover:translate-x-1">
                  <span className="text-amber-500 text-2xl leading-none mr-3">•</span>
                  <p className="text-lg">Exceed expectations through <span className="font-semibold text-blue-900 hover:text-amber-500 transition-colors duration-300">quality and trust</span>.</p>
                </li>
                <li className="flex items-start hover:bg-amber-50/50 p-3 rounded-lg transition-all duration-300 hover:translate-x-1">
                  <span className="text-amber-500 text-2xl leading-none mr-3">•</span>
                  <p className="text-lg">Contribute to <span className="font-semibold text-blue-900 hover:text-amber-500 transition-colors duration-300">sustainable growth</span> in industries worldwide.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tagline & Image Section */}
        <div className="lg:w-1/2 h-[600px] lg:h-screen relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url('/mission.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="space-y-8 relative">
                  {/* Main Title */}
                  <div className="transform hover:scale-105 transition-all duration-500">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider">
                      <span className="block mb-4 text-white drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                        INSPIRING
                      </span>
                      <span className="block text-amber-500 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                        TOMORROW
                      </span>
                    </h1>
                  </div>

                  {/* Decorative Elements */}
                  <div className="flex justify-center space-x-4">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent my-auto"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse"></div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 via-amber-500 to-transparent my-auto"></div>
                  </div>

                  {/* Subtitle */}
                  <div className="transform hover:scale-105 transition-all duration-500">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-[0.2em]">
                      <span className="block text-white mb-2">DELIVERING</span>
                      <span className="block text-amber-500 text-shadow-lg">EXCELLENCE</span>
                    </h2>
                  </div>

                  {/* Quote Box */}
                  <div className="mt-12 max-w-lg mx-auto">
                    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform hover:scale-105 transition-all duration-500">
                      <p className="text-white/90 text-xl font-light italic leading-relaxed">
                        "Crafting tomorrow's solutions with uncompromising excellence and revolutionary innovation"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add these styles to your global CSS or create animation classes
const styles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }

  .bg-grid-blue-900 {
    background-size: 40px 40px;
    background-image: linear-gradient(to right, rgba(30, 58, 138, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(30, 58, 138, 0.1) 1px, transparent 1px);
  }
`;

export default VisionMissionPage;