import Hero from "@/src/components/sections/Hero";
import Img from "@/src/app/assets/radeau-de-la-meduse.png";
import HistoryBtns from "@/src/components/sections/HistoryBtns";
import { prisma } from "@/src/lib/prisma";

export default async function Home() {
  const epochs = await prisma.epoch.findMany({
    include: { events: { take: 4, orderBy: { year: "asc" } } },
    orderBy: { id: "asc" },
  });

  return (
    <main>
      <Hero
        imageSrc={Img}
        badgeContent="Plongez dans l'Histoire"
        title={"L'Histoire \n par ses causes"}
        description="Plongez dans l'histoire à travers les époques. Explorez les événements
          clés, les personnages marquants et les mouvements qui ont façonné
          notre monde. Découvrez comment l'histoire continue de résonner
          aujourd'hui."
        primaryHref="/"
        primaryContent="▶ Commencer l'exploration"
        secondaryHref="/"
        secondaryContent="+ Créer mon parcours"
      />
      <HistoryBtns epochs={epochs} />
    </main>
  );
}
