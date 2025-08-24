"use client";

import { useState, useEffect } from "react";

const ParallaxBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let rafId: number;
    let lastUpdate = 0;
    const throttleMs = 16; // ~60fps

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdate < throttleMs) return;

      lastUpdate = now;

      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePosition({ x, y });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const parallaxX = (mousePosition.x - 50) * 0.3;
  const parallaxY = (mousePosition.y - 50) * 0.3;

  return (
    <>
      {/* Light mode background */}
      <div
        className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:hidden pointer-events-none"
        style={{
          backgroundPosition: `${parallaxX}px ${parallaxY}px`,
        }}
      />
      {/* Dark mode background */}
      <div
        className="fixed inset-0 -z-10 h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:20px_20px] hidden dark:block pointer-events-none"
        style={{
          backgroundPosition: `${parallaxX}px ${parallaxY}px`,
        }}
      />
    </>
  );
};

export default ParallaxBackground;
