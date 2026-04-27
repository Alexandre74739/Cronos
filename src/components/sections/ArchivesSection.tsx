"use client";

import { useState, useMemo } from "react";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Select from "../ui/Select";
import SliceIn from "../animations/SliceIn";
import Reveal from "../animations/Reveal";

interface Source {
  slug: string;
  title: string;
  year: number;
  nature: string;
  author: string;
  description: string;
  color: string;
}

const CATEGORIES: Record<string, string[]> = {
  Peinture: [
    "Peinture à l'huile sur toile",
    "Peinture académique à l'huile sur toile",
  ],
  Image: ["Photographie de presse"],
  Texte: [
    "Texte officiel",
    "Charte royale",
    "Traité international",
    "Édit royal",
    "Discours radiodiffusé",
    "Lettre manuscrite",
    "Proclamation présidentielle",
  ],
  Objet: ["Stèle gravée (basalte noir)", "Céramique grecque antique"],
};

export default function ArchivesSection({ sources }: { sources: Source[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    const allowed = category ? CATEGORIES[category] : null;
    return sources.filter((s) => {
      const matchesCategory = !allowed || allowed.includes(s.nature);
      const matchesQuery =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.author.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category, sources]);

  return (
    <section id="archives" className="py-24 px-12 md:px-20">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-4 max-w-xl">
            <Reveal delay={0}>
              <h2>Explorer les archives</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/50 text-base leading-relaxed">
                Explorez les sources primaires qui ont façonné l'Histoire.
                Cliquez sur un document pour accéder à son analyse complète.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="flex items-center gap-3">
              <Select
                value={category}
                onChange={setCategory}
                options={Object.keys(CATEGORIES)}
                placeholder="Tous les types"
              />
              <Input
                value={query}
                onChange={setQuery}
                placeholder="Rechercher une source…"
              />
            </div>
          </Reveal>
        </div>

        {filtered.length === 0 ? (
          <p className="text-white/30 text-sm">Aucun résultat.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((source, i) => (
              <SliceIn key={source.slug} delay={i * 0.06}>
                <Card
                  href={`/sources/${source.slug}`}
                  year={source.year}
                  title={source.title}
                  description={source.description}
                  color={source.color}
                />
              </SliceIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
