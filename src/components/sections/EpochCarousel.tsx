"use client";

import { useRef, useState, useEffect } from "react";
import Card from "../ui/Card";
import ArrowButton from "../ui/ArrowButton";

interface Source {
  slug: string;
  title: string;
  year: number | string;
  description: string;
  color: string;
}

interface EpochCarouselProps {
  epoch: string;
  color: string;
  sources: Source[];
}

export default function EpochCarousel({
  epoch,
  color,
  sources,
}: EpochCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [sources]);

  const scroll = (dir: 1 | -1) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: dir * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (sources.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 py-4 overflow-hidden">
      <h3
        className="px-6 md:px-12 lg:px-20 text-2xl font-bold tracking-tight"
        style={{ color }}
      >
        {epoch}
      </h3>

      <div className="relative group px-6 md:px-12 lg:px-20">
        <div
          className={`absolute -left-2 md:left-2 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 ${canScrollLeft ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
        >
          <ArrowButton direction="left" onClick={() => scroll(-1)} />
        </div>

        <div
          className={`absolute -right-2 md:right-2 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 ${canScrollRight ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
        >
          <ArrowButton direction="right" onClick={() => scroll(1)} />
        </div>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="scroll-hide flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        >
          {sources.map((source) => (
            <div
              key={source.slug}
              className="flex-none snap-start
                         w-[calc(50%-6px)] 
                         md:w-[calc(33.33%-11px)] 
                         lg:w-[calc(25%-12px)]"
            >
              <Card
                href={`/sources/${source.slug}`}
                year={source.year}
                title={source.title}
                description={source.description}
                color={source.color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
