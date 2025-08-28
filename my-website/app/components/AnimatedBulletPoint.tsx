"use client";

import React from "react";

const AnimatedBulletPoint = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex group hover:translate-x-1 transition-transform duration-200">
      <span className="mr-2 inline-block group-hover:rotate-45 group-hover:scale-110 transition-all duration-300">
        ◆
      </span>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default AnimatedBulletPoint;
