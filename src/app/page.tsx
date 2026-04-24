import Hero from "@/src/components/sections/Hero";
import Img from "@/src/app/assets/radeau-de-la-meduse.png";

export default function Home() {
  return (
    <main>
      <Hero
        imageSrc={Img}
        badgeContent="Plateforme éducative 9-18 ans"
        title={"L'Histoire \n par ses causes"}
        description="Plongez dans l'histoire à travers les époques. Explorez les événements
          clés, les personnages marquants et les mouvements qui ont façonné
          notre monde. Découvrez commentl'histoire continue de résonner
          aujourd'hui."
      />
    </main>
  );
}