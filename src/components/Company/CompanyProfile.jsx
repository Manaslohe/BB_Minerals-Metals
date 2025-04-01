import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Photo Popup Component
const PhotoPopup = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white text-blue-900 rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-amber-500 hover:text-white transition-all duration-300"
        >
          ✕
        </button>
        <img
          src={imageSrc}
          alt="Enlarged view"
          className="w-full h-auto rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

const CompanyProfilePage = () => {
  const navigate = useNavigate();
  const [isPhotoPopupOpen, setIsPhotoPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Photo Popup */}
      <PhotoPopup
        isOpen={isPhotoPopupOpen}
        onClose={() => setIsPhotoPopupOpen(false)}
        imageSrc="/background.png"
      />
      
      {/* Header with Back Button */}
      <div className="container mx-auto py-6 px-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-blue-900 hover:text-amber-500 transition-colors duration-300 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-lg font-medium">Back</span>
        </button>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="relative">
          {/* Left Orange Bar - Decorative Element */}
          <div className="absolute left-0 top-0 bottom-0 w-1 md:w-2 bg-amber-500 rounded-full"></div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pl-4 md:pl-8">
            {/* Company Information */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 hover:text-amber-500 transition-colors duration-300">
                COMPANY PROFILE
              </h1>
              
              <div className="space-y-6 text-lg">
                <p>
                  B B Minerals and Metals, led by <span className="font-semibold">Mr. Shiv Jagdishchandra Gupta</span>, has been a trusted name in the trading of minerals, ferro alloys, and charcoal for over a decade.
                </p>
                
                <p>
                  Classified as an <span className="font-semibold">SSI</span> unit under the <span className="font-semibold">MSME Act</span>, the company holds a registered trademark and <span className="font-semibold">ISO certification</span>, ensuring high-quality standards and regulatory compliance.
                </p>
                
                <p>
                  With a robust supply chain and a growing client network, <span className="font-semibold">B B Minerals and Metals</span> continues to expand its presence in both domestic and international markets.
                </p>
              </div>
            </div>
            
            {/* Interactive Company Image */}
            <div 
              onClick={() => setIsPhotoPopupOpen(true)}
              className="rounded-lg overflow-hidden shadow-xl h-full min-h-64 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer relative group"
            >
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white px-4 py-2 rounded-lg text-blue-900 font-medium">Click to enlarge</span>
              </div>
              <img 
                src="/background.png" 
                alt="B B Minerals and Metals Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section with hover effects */}
      <div className="bg-white py-12 shadow-inner mb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "15+", text: "Years Experience" },
              { number: "100%", text: "Quality Assurance" },
              { number: "ISO", text: "Certified" },
              { number: "Global", text: "Market Presence" }
            ].map((stat, index) => (
              <div key={index} className="p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg">
                <div className="text-amber-500 text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-900 font-medium">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer Call to Action with enhanced hover effects */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-blue-900 rounded-lg shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">Partner with Industry Leaders</h3>
          <p className="text-white mb-6 max-w-2xl mx-auto">
            Join our growing network of satisfied clients and experience the B B Minerals and Metals difference. Quality, reliability, and excellence are our promises.
          </p>
          <button 
            onClick={() => navigate('/contact')} 
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfilePage;