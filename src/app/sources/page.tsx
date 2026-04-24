import Hero from "@/src/components/sections/Hero";
import Img from "@/src/app/assets/guernica.png";

export default function Figures() {
  return (
    <main>
      <Hero
        imageSrc={Img}
        badgeContent="Plateforme éducative · 9-18 ans"
        title={"Au cœur \n des archives"}
        description="Analysez les manuscrits, les objets et les œuvres d'art. Apprenez à décrypter le passé à travers ses traces les plus authentiques. Explorez, questionnez, découvrez : les archives n'auront plus de secrets pour vous."
        primaryHref="/"
        primaryContent="▶ Commencer l'exploration"
        secondaryHref="/"
        secondaryContent="+ Créer mon parcours"
      />
    </main>
  );
}
