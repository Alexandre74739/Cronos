"use client";

import { useState } from "react";
import TimelineRow from "./TimelineRow";
import EpochNavigation from "./EpochNavigation";
import Input from "@/src/components/ui/Input";

type EpochEvent = {
  slug: string;
  year: number;
  title: string;
  description: string;
};

type AdjacentEpoch = { slug: string; label: string } | null;

export default function EventsSection({
  events,
  epochSlug,
  color,
  prevEpoch,
  nextEpoch,
}: {
  events: EpochEvent[];
  epochSlug: string;
  color: string;
  prevEpoch: AdjacentEpoch;
  nextEpoch: AdjacentEpoch;
}) {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? events.filter(
        (e) =>
          e.title.toLowerCase().includes(query.toLowerCase()) ||
          e.description.toLowerCase().includes(query.toLowerCase())
      )
    : events;

  const countLabel =
    filtered.length !== events.length
      ? `${filtered.length}/${events.length}`
      : String(events.length);

  return (
    <section id="evenements" className="px-6 sm:px-12 md:px-20 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2>
            Tous les événements{" "}
            <span className="text-white/40 font-normal text-xl">({countLabel})</span>
          </h2>
          <Input value={query} onChange={setQuery} />
        </div>

        {filtered.length === 0 ? (
          <p className="text-white/40">Aucun événement ne correspond à votre recherche.</p>
        ) : (
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            {filtered.map((event, i) => (
              <TimelineRow key={event.slug} event={event} epochSlug={epochSlug} color={color} index={i} />
            ))}
          </div>
        )}

        <EpochNavigation prevEpoch={prevEpoch} nextEpoch={nextEpoch} />
      </div>
    </section>
  );
}
