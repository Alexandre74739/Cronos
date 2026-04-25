import { notFound } from "next/navigation";
import { prisma } from "@/src/lib/prisma";
import { getEpochColor } from "@/src/lib/epochColors";
import EpochHero from "@/src/components/sections/EpochHero";
import EventsSection from "./_components/EventsSection";

export default async function EpochPage(props: PageProps<"/periodes/[epochSlug]">) {
  const { epochSlug } = await props.params;

  const epoch = await prisma.epoch.findUnique({
    where: { slug: epochSlug },
    include: { events: { orderBy: { year: "asc" } } },
  });

  if (!epoch) notFound();

  const [prevEpoch, nextEpoch] = await Promise.all([
    prisma.epoch.findFirst({
      where: { id: { lt: epoch.id } },
      orderBy: { id: "desc" },
      select: { slug: true, label: true },
    }),
    prisma.epoch.findFirst({
      where: { id: { gt: epoch.id } },
      orderBy: { id: "asc" },
      select: { slug: true, label: true },
    }),
  ]);

  const color = getEpochColor(epochSlug);
  const firstYear = epoch.events.at(0)?.year ?? null;
  const lastYear = epoch.events.at(-1)?.year ?? null;

  return (
    <main className="bg-bg min-h-screen">
      <EpochHero
        label={epoch.label}
        color={color}
        firstYear={firstYear}
        lastYear={lastYear}
      />

      <div className="h-px bg-border mx-6 sm:mx-12 md:mx-20" />

      <EventsSection
        events={epoch.events}
        epochSlug={epochSlug}
        color={color}
        prevEpoch={prevEpoch}
        nextEpoch={nextEpoch}
      />
    </main>
  );
}
