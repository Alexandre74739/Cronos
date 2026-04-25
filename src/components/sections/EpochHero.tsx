import Hero from "./Hero";

const fmt = (y: number) => (y < 0 ? `${Math.abs(y)} av. JC` : String(y));

interface EpochHeroProps {
  label: string;
  color: string;
  firstYear: number | null;
  lastYear: number | null;
}

export default function EpochHero({ label, color, firstYear, lastYear }: EpochHeroProps) {
  const badge =
    firstYear !== null && lastYear !== null && firstYear !== lastYear
      ? `${fmt(firstYear)} - ${fmt(lastYear)}`
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
