"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const BackgroundShapes = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none flex items-center justify-center mix-blend-screen">

      {/* Autonomous Drifting Glow — moves on its own across the viewport */}
      <motion.div
        animate={{
          x: ["10vw", "70vw", "30vw", "80vw", "10vw"],
          y: ["20vh", "60vh", "80vh", "30vh", "20vh"],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[350px] h-[350px] bg-primary/25 rounded-full blur-[120px] mix-blend-screen hidden md:block"
      />

      {/* Second autonomous glow — opposite path */}
      <motion.div
        animate={{
          x: ["80vw", "20vw", "60vw", "10vw", "80vw"],
          y: ["70vh", "30vh", "10vh", "60vh", "70vh"],
        }}
        transition={{
          duration: 75,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute w-[250px] h-[250px] bg-[#308C8C]/20 rounded-full blur-[100px] mix-blend-screen hidden md:block"
      />

      {/* Vibrant Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 120, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] max-w-[800px] aspect-square bg-[#308C8C]/15 rounded-full blur-[120px] mix-blend-screen"
      />

      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{ duration: 150, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[45%] max-w-[700px] aspect-square bg-[#308C8C]/15 rounded-full blur-[120px] mix-blend-screen"
      />

      {/* Floating Sparkles / Stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            y: [0, -100],
          }}
          transition={{
            duration: (Math.random() * 3 + 2) * 20,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_15px_3px_rgba(255,255,255,0.8)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Geometric Accents - Spinning Squares */}
      <motion.div
        animate={{
          rotate: 360,
          y: [0, -30, 0]
        }}
        transition={{
          rotate: { duration: 400, repeat: Infinity, ease: "linear" },
          y: { duration: 160, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-[20%] right-[15%] w-16 h-16 border-[2px] border-primary/40 rounded-xl hidden md:block backdrop-blur-md shadow-[0_0_30px_rgba(48,140,140,0.3)]"
      />

      <motion.div
        animate={{
          rotate: -360,
          y: [0, 40, 0]
        }}
        transition={{
          rotate: { duration: 500, repeat: Infinity, ease: "linear" },
          y: { duration: 200, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-[30%] left-[10%] w-20 h-20 border-[2px] border-[#308C8C]/30 rounded-3xl hidden md:block backdrop-blur-md shadow-[0_0_30px_rgba(48,140,140,0.3)]"
      />

      {/* Glow lines / Shooting Stars */}
      <motion.div
        animate={{
          x: [-1000, 2000],
          y: [-500, 1000],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 12,
          ease: "linear"
        }}
        className="absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent rotate-45 transform origin-left shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        style={{ top: '20%', left: '0%' }}
      />

      <motion.div
        animate={{
          x: [2000, -1000],
          y: [1000, -500],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatDelay: 15,
          ease: "linear"
        }}
        className="absolute w-48 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent -rotate-45 transform origin-left shadow-[0_0_20px_rgba(48,140,140,0.8)]"
        style={{ top: '80%', left: '100%' }}
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

    </div>
  );
};

export default BackgroundShapes;
