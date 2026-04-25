"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/src/components/ui/Button";

type EpochEvent = {
  slug: string;
  year: number;
  title: string;
  description: string;
};

type AdjacentEpoch = { slug: string; label: string } | null;

const fmt = (y: number) => (y < 0 ? `${Math.abs(y)} av. J.-C.` : String(y));

// ---- Card de la timeline ----

function TimelineCard({ event, epochSlug }: { event: EpochEvent; epochSlug: string }) {
  return (
    <Link
      href={`/${epochSlug}/${event.slug}`}
      className="group bg-card rounded-sm p-5 flex flex-col gap-3 hover:bg-white/5 transition-colors w-full"
    >
      <h3 className="text-white font-bold text-base leading-snug group-hover:text-primary transition-colors duration-200">
        {event.title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
        {event.description}
      </p>
      <span className="text-primary text-sm font-medium mt-1">
        Explorer →
      </span>
    </Link>
  );
}

// ---- Ligne alternée de la timeline (desktop) ----

function TimelineRow({
  event,
  epochSlug,
  index,
}: {
  event: EpochEvent;
  epochSlug: string;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative">

      {/* Mobile & tablette : ligne gauche + empilement */}
      <div className="lg:hidden flex gap-6 py-4">
        <div className="flex flex-col items-center">
          <div
            className="w-2.5 h-2.5 rounded-full bg-primary mt-1 shrink-0"
            style={{ boxShadow: "0 0 0 3px var(--color-bg)" }}
          />
          <div className="w-px flex-1 bg-border mt-2" />
        </div>
        <div className="flex flex-col gap-2 pb-4 flex-1 min-w-0">
          <span className="text-white/50 font-bold text-sm">{fmt(event.year)}</span>
          <TimelineCard event={event} epochSlug={epochSlug} />
        </div>
      </div>

      {/* Desktop : alternance gauche / droite */}
      <div className="hidden lg:flex items-start py-5">
        <div className="w-1/2 pr-12 flex justify-end">
          {isLeft ? (
            <span className="text-white/50 font-bold text-base pt-4 text-right whitespace-nowrap">
              {fmt(event.year)}
            </span>
          ) : (
            <TimelineCard event={event} epochSlug={epochSlug} />
          )}
        </div>

        <div
          className="absolute left-1/2 top-9 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary z-10"
          style={{ boxShadow: "0 0 0 4px var(--color-bg)" }}
        />

        <div className="w-1/2 pl-12">
          {isLeft ? (
            <TimelineCard event={event} epochSlug={epochSlug} />
          ) : (
            <span className="text-white/50 font-bold text-base pt-4 block whitespace-nowrap">
              {fmt(event.year)}
            </span>
          )}
        </div>
      </div>

    </div>
  );
}

// ---- Navigation entre époques ----

function EpochNavigation({ prevEpoch, nextEpoch }: { prevEpoch: AdjacentEpoch; nextEpoch: AdjacentEpoch }) {
  if (!prevEpoch && !nextEpoch) return null;

  return (
    <div className="flex items-center justify-center gap-4 pt-8 flex-wrap">
      {prevEpoch && (
        <Button
          content={`← ${prevEpoch.label}`}
          href={`/${prevEpoch.slug}`}
          style="secondary"
        />
      )}
      {nextEpoch && (
        <Button
          content={`${nextEpoch.label} →`}
          href={`/${nextEpoch.slug}`}
          style="primary"
        />
      )}
    </div>
  );
}

// ---- Section principale ----

export default function EventsSection({
  events,
  epochSlug,
  prevEpoch,
  nextEpoch,
}: {
  events: EpochEvent[];
  epochSlug: string;
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

        {/* En-tête */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-1 h-7 bg-primary" />
            <h2 className="text-white">
              Tous les événements{" "}
              <span className="text-white/40 font-normal text-xl">({countLabel})</span>
            </h2>
          </div>
          <input
            type="text"
            placeholder="Rechercher..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-card border border-border text-white placeholder-white/30 px-4 py-2.5 rounded-sm text-sm focus:outline-none focus:border-white/50 transition-colors w-full max-w-xs"
          />
        </div>

        {/* Timeline */}
        {filtered.length === 0 ? (
          <p className="text-white/40">Aucun événement ne correspond à votre recherche.</p>
        ) : (
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            {filtered.map((event, i) => (
              <TimelineRow
                key={event.slug}
                event={event}
                epochSlug={epochSlug}
                index={i}
              />
            ))}
          </div>
        )}

        {/* Navigation prev / next */}
        <EpochNavigation prevEpoch={prevEpoch} nextEpoch={nextEpoch} />

      </div>
    </section>
  );
}
