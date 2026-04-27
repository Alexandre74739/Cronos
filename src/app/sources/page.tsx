import Hero from "@/src/components/sections/Hero";
import Analyses from "@/src/components/sections/Analyses";
import ArchivesSection from "@/src/components/sections/ArchivesSection";
import { prisma } from "@/src/lib/prisma";
import Img from "@/src/app/assets/guernica.png";

export default async function SourcesPage() {
  const sources = await prisma.source.findMany({
    select: {
      slug: true,
      title: true,
      year: true,
      nature: true,
      author: true,
      description: true,
      color: true,
    },
    orderBy: { year: "asc" },
  });

  return (
    <main>
      <Hero
        imageSrc={Img}
        badgeContent="Devenez détective de l'Histoire"
        title={"Au cœur \n des archives"}
        description="Analysez les manuscrits, les objets et les œuvres d'art. Apprenez à décrypter le passé à travers ses traces les plus authentiques. Explorez, questionnez, découvrez : les archives n'auront plus de secrets pour vous."
        primaryHref="#archives"
        primaryContent="▼ Explorer les archives"
        secondaryHref="/"
        secondaryContent="+ Créer mon parcours"
      />
      <Analyses />
      <ArchivesSection sources={sources} />
    </main>
  );
}
