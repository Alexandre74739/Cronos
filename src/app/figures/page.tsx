import Hero from "@/src/components/sections/Hero";
import FigureTimeline from "@/src/components/sections/FigureTimeline";
import Reveal from "@/src/components/animations/Reveal";
import { prisma } from "@/src/lib/prisma";
import Img from "@/src/app/assets/la-liberte-guidant-le-peuple.png";

export default async function FiguresPage() {
  const figures = await prisma.figure.findMany({
    select: {
      slug: true,
      name: true,
      birthYear: true,
      deathYear: true,
      role: true,
      imageUrl: true,
      color: true,
    },
    orderBy: { birthYear: "asc" },
  });

  return (
    <main>
      <Hero
        imageSrc={Img}
        badgeContent="Rencontrez les bâtisseurs du monde"
        title={"Les acteurs \n de l'histoire"}
        description="Penseurs, guerriers ou visionnaires : explorez la vie de ceux qui ont redéfini le monde. Découvrez comment leurs actions ont déclenché des révolutions, inspiré des mouvements et laissé une empreinte indélébile sur l'histoire."
        primaryHref="#figures"
        primaryContent="▼ Explorer les figures"
        secondaryHref="/"
        secondaryContent="+ Créer mon parcours"
      />

      <section id="figures" className="py-24 flex flex-col gap-14">
        <div className="px-12 md:px-20 flex flex-col gap-4 max-w-2xl">
          <Reveal delay={0}>
            <h2>Les grandes figures de ce monde</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/50 leading-relaxed">
              De l'Antiquité à l'époque contemporaine, rencontrez les hommes et
              les femmes qui ont façonné le cours de l'histoire humaine. Faites
              défiler la frise pour les découvrir.
            </p>
          </Reveal>
        </div>

        <FigureTimeline figures={figures} />
      </section>
    </main>
  );
}
