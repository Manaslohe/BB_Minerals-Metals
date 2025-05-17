"use client";
import React, { useEffect, Suspense, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, useProgress } from "@react-three/drei";
import * as THREE from "three";

// Loading Animation Component
const Loader = () => {
  const { progress, active } = useProgress();
  const [smoothProgress, setSmoothProgress] = useState(0);
  const lastProgressRef = useRef(0);
  const timerRef = useRef(null);
  const progressStepsRef = useRef([5, 15, 30, 45, 60, 75, 90]);
  
  // Handle smooth progress animation
  useEffect(() => {
    // Start fresh when loading begins
    if (active && smoothProgress === 0) {
      setSmoothProgress(3);
    }
    
    // If loading is complete but our animation isn't, gradually complete it
    if (!active && smoothProgress < 100) {
      const finalizeInterval = setInterval(() => {
        setSmoothProgress(prev => {
          const nextVal = prev + 1;
          if (nextVal >= 100) {
            clearInterval(finalizeInterval);
            return 100;
          }
          return nextVal;
        });
      }, 20);
      
      return () => clearInterval(finalizeInterval);
    }
    
    if (!active) return;
    
    // Clear previous timer
    if (timerRef.current) clearInterval(timerRef.current);
    
    // Detect real progress and adapt
    if (progress > lastProgressRef.current) {
      // Keep track of actual loading progress
      lastProgressRef.current = progress;
      
      // Determine next target based on real progress
      let targetProgress;
      
      if (progress >= 100) {
        targetProgress = 99; // We'll go to 100% after active becomes false
      } else {
        // Find appropriate intermediate target based on progress
        targetProgress = progressStepsRef.current.find(step => step > smoothProgress && step <= progress) || 
                         Math.min(progress, 99);
      }
      
      // Make sure we don't go backwards
      targetProgress = Math.max(targetProgress, smoothProgress);
      
      // Animate smoothly to the target
      let startValue = smoothProgress;
      const totalChange = targetProgress - startValue;
      const duration = 1000; // 1 second for this transition
      const startTime = Date.now();
      
      timerRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smoother animation
        const easedProgress = 1 - Math.pow(1 - progress, 2);
        const newValue = startValue + totalChange * easedProgress;
        
        if (progress >= 1) {
          clearInterval(timerRef.current);
          setSmoothProgress(targetProgress);
          
          // If no progress for a while, add small increments
          if (targetProgress < 99) {
            const trickleInterval = setInterval(() => {
              setSmoothProgress(prev => {
                const increment = (99 - prev) / 10; // Smaller increments as we approach 99
                return Math.min(prev + Math.max(0.2, increment), 99);
              });
            }, 800);
            
            timerRef.current = trickleInterval;
          }
        } else {
          setSmoothProgress(newValue);
        }
      }, 16); // ~60fps update
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [progress, active, smoothProgress]);

  // Visual elements to enhance loading feedback
  const loadingPulse = {
    scale: [1, 1.02, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      repeat: Infinity,
      duration: 1.5
    }
  };
  
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-gray-900/90 z-30"
      initial={{ opacity: 1 }}
      animate={{ opacity: active ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ pointerEvents: active ? "auto" : "none" }}
    >
      <div className="text-center">
        <motion.h3 
          className="text-xl font-bold text-white mb-4"
          animate={loadingPulse}
        >
          Loading 3D Model
        </motion.h3>
        <div className="relative w-64 h-4 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-amber-500"
            initial={{ width: '0%' }}
            animate={{ width: `${Math.max(3, smoothProgress)}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        <p className="mt-3 text-white text-sm font-medium">
          {Math.round(smoothProgress)}% Complete
        </p>
        <div className="mt-2 text-gray-300 text-xs flex justify-center items-center gap-2">
          <span>Please wait while we prepare your 3D view</span>
          <motion.span 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ⋯
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

// 3D Model Component
const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath, true); // Priority loading

  // Define scales for different models
  const getModelScale = (path) => {
    if (path.includes("SILICON METAL")) return 6.5;
    if (path.includes("Magneese")) return 7.5;
    if (path.includes("FEROMOLY")) return 2.8;
    if (path.includes("FERO CHROME")) return 3.2;
    return 2.5;
  };

  const modelScale = getModelScale(modelPath);

  useEffect(() => {
    if (scene) {
      // Ensure model is visible
      scene.visible = true;
      
      scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.metalness = 0.9;
          child.material.roughness = 0.2;
          child.material.clearcoat = 0.5;
          child.material.clearcoatRoughness = 0.1;
          child.material.envMapIntensity = 1.8;
          child.material.needsUpdate = true;
          child.castShadow = true;
          child.receiveShadow = true;
          child.frustumCulled = false; // Prevent disappearing due to frustum culling
          if (child.material.color) {
            child.material.color.convertSRGBToLinear();
          }
        }
      });
    }
    
    // Return cleanup function
    return () => {
      // Proper cleanup to prevent memory leaks
      if (scene) {
        scene.traverse((child) => {
          if (child.isMesh) {
            if (child.material) {
              child.material.dispose();
            }
            if (child.geometry) {
              child.geometry.dispose();
            }
          }
        });
      }
    };
  }, [scene]);

  // Subtle auto-rotation - keep rendering by returning something
  useFrame((state) => {
    if (scene) {
      scene.rotation.y += 0.0008;
      // Force continuous rendering
      state.invalidate();
    }
  });

  return <primitive object={scene} scale={modelScale} position={[0, -2, 0]} visible frustumCulled={false} />;
};

// 3D Viewer Modal Component
const ThreeDViewer = ({ isOpen, onClose, productName }) => {
  // Map product names to their GLB files
  const modelMapping = {
    "High Carbon Ferro Chrome": "/blg/HIGH CARBON FERO CHROME.glb",
    "Ferro Molybdenum": "/blg/FEROMOLY.glb",
    "Low Carbon Ferro Chrome": "/blg/LOW CARBON FERO CHROME.glb",
    "Silicon Metal": "/blg/SILICON METAL.glb",
    "Manganese Flake": "/blg/Magneese.glb",
  };

  const modelPath = modelMapping[productName] || modelMapping["High Carbon Ferro Chrome"];

  // Define initial camera position based on product type for a more zoomed-in default view
  const getInitialCameraPosition = (path) => {
    if (path.includes("High Carbon Ferro Chrome")) return [0, 1.5, 5.5];
    if (path.includes("Low Carbon Ferro Chrome")) return [0, 1.5, 5.5];
    if (path.includes("SILICON METAL")) return [0, 1.5, 6.5];
    if (path.includes("Magneese")) return [0, 1.5, 7];
    if (path.includes("FEROMOLY")) return [0, 1.5, 5.8];
    if (path.includes("FERO CHROME")) return [0, 1.5, 5.8];
    return [0, 1.5, 6]; // Default closer position
  };

  const initialCameraPosition = getInitialCameraPosition(modelPath);

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-[75vw] h-[85vh] max-w-6xl bg-white rounded-xl overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 z-20 p-2 bg-gray-700/90 rounded-full text-white hover:bg-gray-600 transition-colors duration-200"
          onClick={onClose}
          aria-label="Close 3D viewer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Product Info and Controls */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-20 bg-gray-900/80 rounded-lg px-4 py-2">
          <h3 className="text-sm sm:text-base font-semibold text-white text-center">
            {productName}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 text-center mt-1">
            Drag to rotate | Pinch/Scroll to zoom
          </p>
        </div>

        {/* 3D Canvas */}
        <div className="h-full w-full relative">
          <Suspense fallback={<Loader />}>
            <Canvas
              shadows
              gl={{
                preserveDrawingBuffer: true,
                antialias: true,
                outputEncoding: THREE.sRGBEncoding,
                powerPreference: "high-performance",
              }}
              dpr={[1, 1.5]}
              camera={{ 
                position: initialCameraPosition, 
                fov: 25,
                far: 2000
              }}
              performance={{ min: 0.5 }}
              frameloop="always" // Changed from demand to always
              onCreated={({ gl, scene }) => {
                // Optimize renderer
                gl.setClearColor(new THREE.Color("#ffffff"), 1);
                gl.physicallyCorrectLights = true;
                // Use tone mapping for better color rendering
                gl.toneMapping = THREE.ACESFilmicToneMapping;
                gl.toneMappingExposure = 1;
                
                // Make sure the scene is set to be rendered continuously
                scene.matrixWorldAutoUpdate = true;
              }}
            >
              <color attach="background" args={["#ffffff"]} />
              {/* Advanced lighting with optimization */}
              <ambientLight intensity={0.4} />
              <directionalLight
                position={[12, 15, 12]}
                intensity={1.5}
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-bias={-0.0001}
              />
              <directionalLight position={[-8, 10, -8]} intensity={0.9} />
              <Environment preset="studio" environmentIntensity={1.8} />

              <Model modelPath={modelPath} />
              <OrbitControls
                autoRotate={false}
                enableZoom={true}
                enablePan={false}
                minDistance={2}
                maxDistance={70}
                zoomSpeed={0.8}
                dampingFactor={0.15}
                target={[0, -2, 0]}
                makeDefault
                touches={{
                  ONE: THREE.TOUCH.ROTATE,
                  TWO: THREE.TOUCH.DOLLY_PAN,
                }}
              />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </motion.div>
  );
};

export default ThreeDViewer;