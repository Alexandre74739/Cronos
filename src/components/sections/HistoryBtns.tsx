"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/src/components/ui/Button";

interface Event {
  slug: string;
  year: number;
  title: string;
  description: string;
}

interface Epoch {
  slug: string;
  label: string;
  events: Event[];
}

export default function HistoryBtns({ epochs }: { epochs: Epoch[] }) {
  const [active, setActive] = useState<string | null>(null);
  const activeEpoch = epochs.find((e) => e.slug === active);

  return (
    <section className="py-8">
      <div className="flex gap-3 justify-center flex-wrap px-12 md:px-20">
        {epochs.map((epoch) => (
          <Button
            key={epoch.slug}
            content={epoch.label}
            style="tertiary"
            active={active === epoch.slug}
            onClick={() => setActive(active === epoch.slug ? null : epoch.slug)}
          />
        ))}
      </div>

      {!activeEpoch && (
        <div className="mt-12 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col items-center gap-3 py-16 text-center">
          <span className="text-4xl">↑</span>
          <p className="text-white/50 text-lg">Sélectionne une époque pour explorer ses événements clés.</p>
        </div>
      )}

      {activeEpoch && (
        <div className="mt-12 px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="gap-3">Événements clés : <span className=" text-primary">{activeEpoch.label}</span></h2>
            <a href="#" className="text-white/50 hover:text-white transition-colors hidden sm:block">
              Voir tous les événements →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {activeEpoch.events.map((event) => (
              <Link href={`/${activeEpoch.slug}/${event.slug}`} key={event.slug} className="group flex flex-col overflow-hidden rounded-sm cursor-pointer">
                <div
                  className="relative flex items-center justify-center h-36"
                  style={{ background: "linear-gradient(135deg, #2d1a08 0%, #1a0f04 60%, #0d0804 100%)" }}
                >
                  <span className="text-xl font-bold tracking-wide" style={{ color: "#c8902a" }}>
                    {event.year < 0 ? `${Math.abs(event.year)} av. J.-C.` : event.year}
                  </span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
                </div>

                <div className="flex flex-col gap-2 p-4 bg-card flex-1">
                  <h3 className="text-white font-bold text-base leading-snug group-hover:text-primary transition-colors duration-200">
                    {event.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                  <span className="text-primary text-base font-medium mt-auto pt-2">
                    Explorer →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )
      }
    </section >
  );
}
