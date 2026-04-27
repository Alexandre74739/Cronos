"use client";

import { ChevronLeft, ChevronRight } from "@deemlol/next-icons";
import { motion } from "motion/react";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

export default function ArrowButton({ direction, onClick }: ArrowButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <button
        onClick={onClick}
        aria-label={direction === "left" ? "Précédent" : "Suivant"}
        className="w-11 h-11 rounded-full bg-white backdrop-blur-sm border flex items-center justify-center text-border transition-all duration-300 cursor-pointer hover:scale-110"
      >
        {direction === "left" ? <ChevronLeft /> : <ChevronRight />}
      </button>
    </motion.div>
  );
}
