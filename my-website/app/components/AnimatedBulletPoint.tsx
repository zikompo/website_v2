"use client";

import React from "react";
import * as motion from "motion/react-client";

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const AnimatedBulletPoint = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex group hover:translate-x-1 transition-transform duration-200"
    >
      <span className="mr-2 inline-block group-hover:rotate-45 group-hover:scale-110 transition-all duration-300">
        ◆
      </span>
      <div className="flex-1">{children}</div>
    </motion.div>
  );
};

export default AnimatedBulletPoint;
