import Hero from "@/src/components/sections/Hero";
import Img from "@/src/app/assets/les-sabines.png";
import { prisma } from "@/src/lib/prisma";
import { getEpochColor } from "@/src/lib/epochColors";
import Card from "@/src/components/ui/Card";

const fmt = (y: number) => (y < 0 ? `${Math.abs(y)} av. JC` : String(y));

export default async function Periodes() {
  const epochs = await prisma.epoch.findMany({
    include: {
      events: { select: { year: true }, orderBy: { year: "asc" } },
    },
    orderBy: { id: "asc" },
  });

  return (
    <main>
      <Hero
        imageSrc={Img}
        badgeContent="Traversez les siècles"
        title={"Voyager  \n dans les siècles"}
        description="Parcourez les époques, de l'Antiquité à nos jours. Identifiez les ruptures et les continuités qui ont construit notre civilisation. Explorez les grandes périodes historiques, leurs caractéristiques et leurs impacts sur le monde contemporain."
        primaryHref="/"
        primaryContent="▶ Commencer l'exploration"
        secondaryHref="/"
        secondaryContent="+ Créer mon parcours"
      />

      <section className="px-6 sm:px-12 md:px-20 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {epochs.map((epoch: typeof epochs[number]) => {
            const color = getEpochColor(epoch.slug);
            const firstYear = epoch.events.at(0)?.year ?? null;
            const lastYear = epoch.events.at(-1)?.year ?? null;
            const yearLabel = firstYear !== null && lastYear !== null
              ? `${fmt(firstYear)} → ${fmt(lastYear)}`
              : "—";

            return (
              <Card
                key={epoch.slug}
                href={`/periodes/${epoch.slug}`}
                year={yearLabel}
                title={epoch.label}
                description={`${epoch.events.length} événement${epoch.events.length > 1 ? "s" : ""}`}
                color={color}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}