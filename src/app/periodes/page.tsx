import Link from "next/link";
import Hero from "@/src/components/sections/Hero";
import Img from "@/src/app/assets/les-sabines.png";
import { prisma } from "@/src/lib/prisma";
import { getEpochColor } from "@/src/lib/epochColors";

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

            return (
              <Link
                key={epoch.slug}
                href={`/periodes/${epoch.slug}`}
                className="group flex flex-col overflow-hidden rounded-sm cursor-pointer"
              >
                <div
                  className="relative flex items-center justify-center h-36"
                  style={{ background: `linear-gradient(135deg, ${color}22 0%, ${color}0a 60%, #0d0804 100%)` }}
                >
                  {firstYear !== null && lastYear !== null && (
                    <span className="text-xl font-bold tracking-wide" style={{ color }}>
                      {fmt(firstYear)} → {fmt(lastYear)}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
                </div>

                <div className="flex flex-col gap-2 p-4 bg-card flex-1">
                  <h3 className="text-white font-bold text-base leading-snug group-hover:text-white/80 transition-colors duration-200">
                    {epoch.label}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {epoch.events.length} événement{epoch.events.length > 1 ? "s" : ""}
                  </p>
                  <span className="text-base font-medium mt-auto pt-2" style={{ color }}>
                    Explorer →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}