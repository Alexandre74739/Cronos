"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import FigureCard from "../ui/FigureCard";
import ArrowButton from "../ui/ArrowButton";

interface Figure {
  slug: string;
  name: string;
  birthYear: number;
  deathYear?: number | null;
  role: string;
  imageUrl: string;
  color: string;
}

const CARD_W = 224;
const GAP = 20;
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fmt = (y: number) => (y < 0 ? `${Math.abs(y)} av. J.-C.` : String(y));

export default function FigureTimeline({ figures }: { figures: Figure[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({
      left: dir * (scrollRef.current.clientWidth * 0.75),
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end gap-2 px-12 md:px-20">
        <ArrowButton direction="left" onClick={() => scroll(-1)} />
        <ArrowButton direction="right" onClick={() => scroll(1)} />
      </div>

      <div ref={scrollRef} className="scroll-hide overflow-x-auto">
        <div
          className="inline-flex flex-col gap-0"
          style={{ paddingInline: "clamp(3rem, 5vw, 5rem)", gap: 0 }}
        >
          <div className="flex" style={{ gap: GAP }}>
            {figures.map((f, i) => (
              <motion.div
                key={f.slug}
                className="flex-none"
                style={{ width: CARD_W }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.45, ease, delay: i * 0.04 }}
              >
                <FigureCard {...f} />
              </motion.div>
            ))}
            <div className="flex-none w-8" aria-hidden />
          </div>

          <div className="relative flex mt-4" style={{ gap: GAP }}>
            <div className="absolute inset-x-0 top-2 h-px bg-white/15" />
            {figures.map((f, i) => (
              <div
                key={f.slug}
                className="flex-none flex flex-col items-center gap-2"
                style={{ width: CARD_W }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full border-2 relative z-10"
                  style={{ borderColor: f.color, background: "#151515" }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.8 }}
                  transition={{ duration: 0.25, ease, delay: i * 0.04 }}
                />
                <span className="text-white/40 select-none text-center leading-tight text-lg">
                  {fmt(f.birthYear)}
                </span>
              </div>
            ))}
            <div className="flex-none w-8" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
