"use client";

import { useState } from "react";
import Link from "next/link";

interface FigureCardProps {
  slug: string;
  name: string;
  birthYear: number;
  deathYear?: number | null;
  role: string;
  imageUrl: string;
  color: string;
}

const fmt = (y: number) => (y < 0 ? `${Math.abs(y)} av. J.-C.` : String(y));

export default function FigureCard({
  slug,
  name,
  birthYear,
  deathYear,
  role,
  imageUrl,
  color,
}: FigureCardProps) {
  const [error, setError] = useState(false);
  const year = fmt(birthYear);
  const endYear = deathYear ? fmt(deathYear) : null;

  return (
    <Link
      href={`/figures/${slug}`}
      className="group flex flex-col overflow-hidden rounded-sm cursor-pointer"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        {error ? (
          <div
            className="w-full h-full flex items-center justify-center text-6xl font-bold select-none"
            style={{ background: `${color}18`, color: `${color}80` }}
          >
            {name[0]}
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={name}
            referrerPolicy="no-referrer"
            onError={() => setError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
      </div>

      <div className="flex flex-col gap-1 px-3 py-3 bg-card">
        <p className="font-bold leading-tight line-clamp-1 group-hover:text-white/80 transition-colors duration-200">
          {name}
        </p>
        <p style={{ color }}>{endYear ? `${year} - ${endYear}` : year}</p>
        <p className="text-white/40 line-clamp-1">{role}</p>
      </div>

      <div className="h-0.5 flex-none" style={{ background: color }} />
    </Link>
  );
}
