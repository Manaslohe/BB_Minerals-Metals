"use client";
import React, { useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, useProgress } from "@react-three/drei";
import * as THREE from "three";

// Loading Animation Component
const Loader = () => {
  const { progress } = useProgress();
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-gray-900/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-center">
        <div className="relative w-48 h-3 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-amber-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <p className="mt-3 text-white text-sm font-medium">
          Loading Model: {Math.round(progress)}%
        </p>
      </div>
    </motion.div>
  );
};

// Floor Component
const Floor = () => {
  // Create a simple grid texture programmatically
  const texture = new THREE.CanvasTexture(
    (() => {
      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 512;
      const context = canvas.getContext("2d");
      context.fillStyle = "#ffffff"; // White background
      context.fillRect(0, 0, 512, 512);
      context.strokeStyle = "#f0f0f0"; // Light gray grid lines
      context.lineWidth = 1;
      for (let i = 0; i <= 512; i += 32) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, 512);
        context.stroke();
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(512, i);
        context.stroke();
      }
      return canvas;
    })()
  );
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(10, 10);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

// 3D Model Component
const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);

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
          if (child.material.color) {
            child.material.color.convertSRGBToLinear();
          }
        }
      });
    }
  }, [scene]);

  // Subtle auto-rotation
  useFrame((state) => {
    if (scene) scene.rotation.y += 0.0008;
  });

  return <primitive object={scene} scale={modelScale} position={[0, -2, 0]} />;
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

  // Define initial camera position based on product type for better default view
  const getInitialCameraPosition = (path) => {
    if (path.includes("SILICON METAL")) return [0, 5, 65];
    if (path.includes("Magneese")) return [0, 5, 70];
    if (path.includes("FEROMOLY")) return [0, 5, 60];
    if (path.includes("FERO CHROME")) return [0, 5, 60];
    return [0, 5, 65]; // Default maximum zoomed out position
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
          <Canvas
            shadows
            camera={{ 
              position: initialCameraPosition, 
              fov: 25, // Even smaller FOV for better perspective when maximally zoomed out
              far: 2000 // Further increased far clipping plane
            }}
            gl={{
              preserveDrawingBuffer: true,
              antialias: true,
              outputEncoding: THREE.sRGBEncoding,
              powerPreference: "high-performance",
            }}
            performance={{ min: 0.5 }}
          >
            <color attach="background" args={["#d1d5db"]} />
            {/* Advanced lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight
              position={[12, 15, 12]}
              intensity={1.5}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-bias={-0.0001}
            />
            <directionalLight position={[-8, 10, -8]} intensity={0.9} />
            <Environment preset="studio" environmentIntensity={1.8} />

            <Suspense fallback={null}>
              <Model modelPath={modelPath} />
              <Floor />
            </Suspense>
            <OrbitControls
              autoRotate={false}
              enableZoom={true}
              enablePan={false}
              minDistance={5}
              maxDistance={70}
              zoomSpeed={0.8}
              dampingFactor={0.15}
              target={[0, -2, 0]} // Target the position of the model
              initialPosition={initialCameraPosition} // Ensure the starting position is used
              touches={{
                ONE: THREE.TOUCH.ROTATE,
                TWO: THREE.TOUCH.DOLLY_PAN,
              }}
            />
          </Canvas>
          {/* Loader as DOM overlay */}
          <Suspense fallback={<Loader />}>
            <div />
          </Suspense>
        </div>
      </div>
    </motion.div>
  );
};

export default ThreeDViewer;