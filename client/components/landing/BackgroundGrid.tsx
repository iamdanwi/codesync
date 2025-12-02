"use client";

import { motion } from "framer-motion";

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Moving gradient orbs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, -100, 0],
          y: [0, 50, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" 
      />
    </div>
  );
}
