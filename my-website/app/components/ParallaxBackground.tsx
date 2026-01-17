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

  const parallaxX = (mousePosition.x - 50) * 0.15;
  const parallaxY = (mousePosition.y - 50) * 0.15;

  return (
    <>
      {/* Light mode background - warm ivory with subtle grid */}
      <div
        className="fixed inset-0 -z-10 h-full w-full dark:hidden pointer-events-none"
        style={{
          backgroundColor: "#FAFAF8",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e5e0 1px, transparent 1px),
              linear-gradient(to bottom, #e5e5e0 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            backgroundPosition: `${parallaxX}px ${parallaxY}px`,
          }}
        />
        {/* Corner accent lines */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
          <div
            className="absolute top-8 left-0 w-24 h-[1px]"
            style={{ backgroundColor: "var(--copper)" }}
          />
          <div
            className="absolute top-0 left-8 w-[1px] h-24"
            style={{ backgroundColor: "var(--copper)" }}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
          <div
            className="absolute bottom-8 right-0 w-24 h-[1px]"
            style={{ backgroundColor: "var(--copper)" }}
          />
          <div
            className="absolute bottom-0 right-8 w-[1px] h-24"
            style={{ backgroundColor: "var(--copper)" }}
          />
        </div>
        {/* Subtle grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Dark mode background - deep charcoal with refined accents */}
      <div
        className="fixed inset-0 -z-10 h-full w-full hidden dark:block pointer-events-none"
        style={{
          backgroundColor: "#0C0C0C",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            backgroundPosition: `${parallaxX}px ${parallaxY}px`,
          }}
        />
        {/* Corner accent lines */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-30">
          <div
            className="absolute top-8 left-0 w-24 h-[1px]"
            style={{ backgroundColor: "var(--copper)" }}
          />
          <div
            className="absolute top-0 left-8 w-[1px] h-24"
            style={{ backgroundColor: "var(--copper)" }}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30">
          <div
            className="absolute bottom-8 right-0 w-24 h-[1px]"
            style={{ backgroundColor: "var(--copper)" }}
          />
          <div
            className="absolute bottom-0 right-8 w-[1px] h-24"
            style={{ backgroundColor: "var(--copper)" }}
          />
        </div>
        {/* Subtle grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Subtle radial gradient for depth */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, transparent 0%, #0C0C0C 70%)`,
          }}
        />
      </div>
    </>
  );
};

export default ParallaxBackground;
