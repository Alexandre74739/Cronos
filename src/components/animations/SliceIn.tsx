"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const sliceInVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.45, ease },
  },
  exit: {
    opacity: 0, y: 24, scale: 0.98,
    transition: { duration: 0.25, ease },
  },
};

interface SliceInProps {
  children: React.ReactNode;
}

export default function SliceIn({ children }: SliceInProps) {
  return (
    <motion.div variants={sliceInVariants}>
      {children}
    </motion.div>
  );
}
