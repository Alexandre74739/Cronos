import Hero from "./Hero";

const fmt = (y: number) => {
  if (y <= -1000000) return `${Math.abs(y / 1000000)} million${Math.abs(y / 1000000) > 1 ? "s" : ""} av. JC`;
  return y < 0 ? `${Math.abs(y)} av. JC` : String(y);
};

interface EpochHeroProps {
  label: string;
  color: string;
  firstYear: number | null;
  lastYear: number | null;
}

export default function EpochHero({ label, color, firstYear, lastYear }: EpochHeroProps) {
  const endLabel = lastYear !== null ? fmt(lastYear) : "Aujourd'hui";
  const badge = firstYear !== null
    ? `${fmt(firstYear)} - ${endLabel}`
    : label;

  return (
    <Hero
      tint={color}
      badgeContent={badge}
      title={label}
      description="Plongez dans les événements qui ont marqué cette époque. Découvrez les faits, les personnages et les contextes qui ont façonné l'Histoire."
      primaryHref="#evenements"
      primaryContent="▼ Voir les événements"
    />
  );
}
