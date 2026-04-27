"use client";

import { useState, useMemo } from "react";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Select from "../ui/Select";
import SliceIn from "../animations/SliceIn";
import Reveal from "../animations/Reveal";
import EpochCarousel from "./EpochCarousel";

interface Source {
  slug: string;
  title: string;
  year: number;
  nature: string;
  author: string;
  description: string;
  color: string;
}

const EPOCHS = [
  { name: "Préhistoire", color: "#7A9E7E" },
  { name: "Antiquité", color: "#C8902A" },
  { name: "Moyen Âge", color: "#7B4F9E" },
  { name: "Temps modernes", color: "#2E8A6E" },
  { name: "Époque contemporaine", color: "#B03030" },
];

const COLOR_TO_EPOCH: Record<string, string> = {
  "#7A9E7E": "Préhistoire",
  "#C8902A": "Antiquité",
  "#7B4F9E": "Moyen Âge",
  "#2E8A6E": "Temps modernes",
  "#B03030": "Époque contemporaine",
};

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

  const isFiltering = query.trim() !== "" || category !== "";

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

  const byEpoch = useMemo(
    () =>
      EPOCHS.map(({ name, color }) => ({
        name,
        color,
        sources: sources.filter((s) => COLOR_TO_EPOCH[s.color] === name),
      })).filter((e) => e.sources.length > 0),
    [sources]
  );

  return (
    <section id="archives" className="py-24 flex flex-col gap-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between px-12 md:px-20">
        <div className="flex flex-col gap-4 max-w-xl">
          <Reveal delay={0}>
            <h2>Explorer les archives</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/50 text-base leading-relaxed">
              Explorez les sources primaires qui ont façonné l&apos;Histoire.
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

      {isFiltering ? (
        filtered.length === 0 ? (
          <p className="text-white/30 text-sm px-12 md:px-20">
            Aucun résultat.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-12 md:px-20">
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
        )
      ) : (
        <div className="flex flex-col gap-12">
          {byEpoch.map(({ name, color, sources: epochSources }) => (
            <EpochCarousel
              key={name}
              epoch={name}
              color={color}
              sources={epochSources}
            />
          ))}
        </div>
      )}
    </section>
  );
}
