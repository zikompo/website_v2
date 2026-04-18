"use client";

import React, { useEffect, useRef, useState } from "react";

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#________";
const SCRAMBLE_MS = 600;
const FRAME_MS = 40;

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className }) => {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<number>(0);

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setDisplay(text);
  };

  const scramble = () => {
    if (intervalRef.current) return;
    startRef.current = performance.now();

    intervalRef.current = setInterval(() => {
      const elapsed = performance.now() - startRef.current;
      const progress = Math.min(elapsed / SCRAMBLE_MS, 1);
      const resolvedCount = Math.floor(progress * text.length);

      let next = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          next += " ";
        } else if (i < resolvedCount) {
          next += text[i];
        } else {
          next += GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        }
      }
      setDisplay(next);

      if (progress >= 1) {
        stop();
      }
    }, FRAME_MS);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      className={className}
      onMouseEnter={scramble}
      onFocus={scramble}
      tabIndex={0}
      style={{ display: "inline-block" }}
    >
      {display}
    </span>
  );
};

export default GlitchText;
