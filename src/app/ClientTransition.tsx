"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const variants = {
  initial: { x: "100%", opacity: 0, rotateY: 0 },
  animate: { x: 0, opacity: 1, rotateY: 0 },
  exit: {
    x: "-100%",
    opacity: 0,
    rotateY: -48,
    scale: 0.986,
    boxShadow: "0 80px 140px rgba(0,0,0,0.7)",
  },
};

export default function ClientTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div style={{ perspective: 1400 }}>
        <motion.div
          key={pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.9, ease: [0.2, 0.85, 0.25, 1] }}
          style={{ transformStyle: "preserve-3d", transformOrigin: "right center" }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
