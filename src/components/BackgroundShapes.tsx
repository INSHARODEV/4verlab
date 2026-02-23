"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const BackgroundShapes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const springConfig = { damping: 200, stiffness: 5 }; // Drastically slowed down cursor follow (5% speed)
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    if (isClient) {
      cursorX.set(mousePosition.x);
      cursorY.set(mousePosition.y);
    }
  }, [mousePosition, cursorX, cursorY, isClient]);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none flex items-center justify-center mix-blend-screen">

      {/* Dynamic Cursor Glow */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-primary/30 rounded-full blur-[100px] mix-blend-screen hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Vibrant Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 500, repeat: Infinity, ease: "easeInOut" }} // Increased from 25
        className="absolute top-[-10%] left-[-10%] w-[50%] max-w-[800px] aspect-square bg-teal-500/15 rounded-full blur-[120px] mix-blend-screen"
      />

      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{ duration: 600, repeat: Infinity, ease: "easeInOut", delay: 2 }} // Increased from 30
        className="absolute bottom-[-10%] right-[-10%] w-[45%] max-w-[700px] aspect-square bg-cyan-500/15 rounded-full blur-[120px] mix-blend-screen"
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
            duration: (Math.random() * 3 + 2) * 20, // Increased duration (5% speed)
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
          rotate: { duration: 400, repeat: Infinity, ease: "linear" }, // Increased from 20
          y: { duration: 160, repeat: Infinity, ease: "easeInOut" } // Increased from 8
        }}
        className="absolute top-[20%] right-[15%] w-16 h-16 border-[2px] border-primary/40 rounded-xl hidden md:block backdrop-blur-md shadow-[0_0_30px_rgba(48,140,140,0.3)]"
      />

      <motion.div
        animate={{
          rotate: -360,
          y: [0, 40, 0]
        }}
        transition={{
          rotate: { duration: 500, repeat: Infinity, ease: "linear" }, // Increased from 25
          y: { duration: 200, repeat: Infinity, ease: "easeInOut" } // Increased from 10
        }}
        className="absolute bottom-[30%] left-[10%] w-20 h-20 border-[2px] border-cyan-500/30 rounded-3xl hidden md:block backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.3)]"
      />

      {/* Glow lines / Shooting Stars */}
      <motion.div
        animate={{
          x: [-1000, 2000],
          y: [-500, 1000],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 60, // Increased from 3
          repeat: Infinity,
          delay: 5,
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
          duration: 80, // Increased from 4
          repeat: Infinity,
          delay: 2,
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
