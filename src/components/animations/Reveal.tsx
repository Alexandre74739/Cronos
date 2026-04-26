"use client";

import { motion } from "motion/react";

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, duration = 0.5, className }: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
