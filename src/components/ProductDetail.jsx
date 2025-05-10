"use client";
import React, { useEffect, useState } from "react";

// Add custom animation styles without jsx and global attributes
const FloatingAnimation = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes float-rotate {
      0% {
        transform: translateY(0px) rotateY(10deg) rotateX(5deg);
      }
      25% {
        transform: translateY(-10px) rotateY(15deg) rotateX(0deg);
      }
      50% {
        transform: translateY(-15px) rotateY(20deg) rotateX(-5deg);
      }
      75% {
        transform: translateY(-10px) rotateY(15deg) rotateX(0deg);
      }
      100% {
        transform: translateY(0px) rotateY(10deg) rotateX(5deg);
      }
    }
    
    @keyframes float-rotate-3d {
      0% {
        transform: translateY(0px) rotateY(10deg) rotateX(5deg) rotateZ(0deg);
      }
      25% {
        transform: translateY(-10px) rotateY(15deg) rotateX(0deg) rotateZ(2deg);
      }
      50% {
        transform: translateY(-15px) rotateY(20deg) rotateX(-5deg) rotateZ(0deg);
      }
      75% {
        transform: translateY(-10px) rotateY(15deg) rotateX(0deg) rotateZ(-2deg);
      }
      100% {
        transform: translateY(0px) rotateY(10deg) rotateX(5deg) rotateZ(0deg);
      }
    }
    
    @keyframes appear {
      0% {
        opacity: 0;
        transform: scale(0.8) rotateY(30deg) rotateX(15deg);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotateY(10deg) rotateX(5deg);
      }
    }
    
    .perspective-1000 {
      perspective: 1000px;
    }
    
    .transform-style-3d {
      transform-style: preserve-3d;
    }
    
    .animate-float-rotate {
      animation: float-rotate 8s ease-in-out infinite;
    }
    
    .animate-float-rotate-3d {
      animation: float-rotate-3d 12s ease-in-out infinite;
    }
    
    .animate-appear {
      animation: appear 1.2s ease-out forwards;
    }
    
    .bg-gradient-radial {
      background-image: radial-gradient(var(--tw-gradient-stops));
    }
  ` }} />
);

function ProductDetail({ product, onBack }) {
  const handleBackClick = () => {
    if (onBack) onBack();
  };

  // Default content if no product is provided
  const productName = product?.name || "Low Carbon Ferro Chrome";
  const productImage = product?.image || "https://cdn.builder.io/api/v1/image/assets/TEMP/b16646be3adda7285fa4a2ab2daa099b61a0a66b";

  return (
    <div className="bg-gray-900 rounded-xl p-6 sm:p-8">
      <FloatingAnimation />
      {/* Back Button */}
      <nav className="mb-6">
        <button
          className="flex gap-2 items-center p-1.5 bg-amber-500 rounded-xl shadow-sm cursor-pointer hover:bg-amber-600 transition-all duration-200"
          onClick={handleBackClick}
          aria-label="Go back"
        >
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6666 5.20842L16.6666 19.7917L5.20829 12.5001L16.6666 5.20842Z"
                fill="black"
              />
            </svg>
          </span>
          <span className="text-sm text-black font-medium">BACK</span>
        </button>
      </nav>

      <h1 className="mb-6 text-3xl md:text-4xl font-bold text-white">
        {productName}
      </h1>

      <section className="relative">
        <div className="absolute top-0 left-0 w-2 md:w-3 bg-amber-500 h-full" />
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 p-4 md:p-6 pl-6 md:pl-12 bg-gray-800 rounded-lg">
          {/* Product Image with 3D animation */}
          <figure className="flex justify-center items-center w-full md:w-auto perspective-1000">
            <div className="relative transform-style-3d animate-appear w-full h-auto">
              <img
                src={productImage}
                alt={productName}
                className="h-56 md:h-72 lg:h-96 object-contain mx-auto drop-shadow-2xl"
                style={{
                  animation: "float-rotate-3d 12s ease-in-out infinite",
                  filter: "drop-shadow(0px 20px 25px rgba(0, 0, 0, 0.6))",
                  transformOrigin: "center center"
                }}
              />
              <div 
                className="absolute inset-0 bg-gradient-radial from-transparent to-gray-800/20 pointer-events-none"
                style={{
                  transform: "translateZ(-70px) rotateX(45deg)",
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  opacity: "0.6"
                }}
              ></div>
            </div>
          </figure>

          <div className="flex flex-col gap-8">
            {/* Overview Section */}
            <article className="flex flex-col md:flex-row gap-4 items-start">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c7b4a5c47fdf0773dee819f17e985a3eb0a9317"
                alt="Overview icon"
                className="w-12 h-12"
              />
              <div>
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Overview
                </h2>
                <p className="text-sm md:text-base leading-6 md:leading-7 text-neutral-300">
                  Low Carbon Ferro Chrome (LC FeCr) is an essential alloy primarily used in steelmaking and other industrial applications. It is a crucial source of chromium with minimal carbon content.
                </p>
              </div>
            </article>

            {/* Uses & Applications Section */}
            <article className="flex flex-col md:flex-row gap-4 items-start">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2109d836c2fb631d1f6508552cf22a82d41a4441"
                alt="Uses & Applications icon"
                className="w-12 h-12"
              />
              <div>
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Uses & Applications
                </h2>
                <div className="flex flex-col gap-2">
                  {/* Bullet Points */}
                  {[
                    { title: "Stainless Steel Production", desc: "– Enhances corrosion resistance and strength." },
                    { title: "High-Performance Alloys", desc: "– Used in superalloys for aerospace applications." },
                    { title: "Tool & Die Steel", desc: "– Improves wear resistance and durability." }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <span className="min-w-[5px] min-h-[5px] bg-gray-400 rounded-full"></span>
                      <p className="text-sm md:text-base text-neutral-300">
                        <strong className="font-bold">{item.title}</strong>
                        <span>{item.desc}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
