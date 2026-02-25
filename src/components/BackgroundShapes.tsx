"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const BackgroundShapes = () => {
  const [isClient, setIsClient] = useState(false);

  // Smooth springs for mouse tracking
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setIsClient(true);

    // Set initial position to center
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none flex items-center justify-center mix-blend-screen bg-black/5">

      {/* Interactive Mouse Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full mix-blend-screen pointer-events-none blur-[120px] opacity-40 hidden lg:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(48,140,140,0.5) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Autonomous Drifting Glow — moves organically across the viewport */}
      <motion.div
        animate={{
          x: ["0vw", "40vw", "10vw", "70vw", "0vw"],
          y: ["10vh", "40vh", "80vh", "30vh", "10vh"],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] mix-blend-screen"
      />

      {/* Second autonomous glow — opposite organic path */}
      <motion.div
        animate={{
          x: ["80vw", "20vw", "50vw", "10vw", "80vw"],
          y: ["80vh", "20vh", "10vh", "60vh", "80vh"],
          scale: [1, 0.8, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute w-[450px] h-[450px] bg-[#308C8C]/15 rounded-full blur-[130px] mix-blend-screen"
      />

      {/* Deep Space Background Accent */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-[60vw] max-w-[800px] aspect-square bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-[150px] mix-blend-screen"
      />

      {/* Floating Sparkles / Tech Data Nodes */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, Math.random() * 0.6 + 0.4, 0],
            scale: [0, Math.random() + 0.5, 0],
            y: [0, -(Math.random() * 250 + 100)],
            x: [0, (Math.random() - 0.5) * 150]
          }}
          transition={{
            duration: (Math.random() * 5 + 5),
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_12px_2px_rgba(48,140,140,0.9)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Geometric Accents - Minimalist Tech Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full border border-primary/10 hidden md:block"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full border border-dashed border-primary/5 hidden md:block"
      />

      {/* Cinematic Shooting Stars / Light streaks */}
      <motion.div
        animate={{
          x: ["-10vw", "120vw"],
          y: ["10vh", "80vh"],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 6,
          ease: "easeInOut"
        }}
        className="absolute w-[250px] h-[1px] bg-gradient-to-r from-transparent via-primary/80 to-transparent rotate-[25deg] transform origin-left shadow-[0_0_15px_rgba(48,140,140,1)]"
        style={{ top: '20%', left: '-10%' }}
      />

      <motion.div
        animate={{
          x: ["110vw", "-10vw"],
          y: ["10vh", "90vh"],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 9,
          ease: "easeInOut"
        }}
        className="absolute w-[400px] h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-[35deg] transform origin-left shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        style={{ top: '10%', right: '-10%' }}
      />

      {/* Animated Cyber Grid Overlay */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "0px 64px"]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] opacity-80"
      />

      {/* Subtle Vertical Scanline */}
      <motion.div
        animate={{
          y: ["-100%", "100%"]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 w-full h-[15%] bg-gradient-to-b from-transparent via-primary/5 to-transparent mix-blend-overlay pointer-events-none"
      />

    </div>
  );
};

export default BackgroundShapes;
