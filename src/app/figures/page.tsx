import Hero from "@/src/components/sections/Hero";
import Img from "@/src/app/assets/la-liberte-guidant-le-peuple.png";

export default function Figures() {
  return (
    <main>
      <Hero
        imageSrc={Img}
        badgeContent="Rencontrez les bâtisseurs du monde"
        title={"Les acteurs \n du changement"}
        description="Penseurs, guerriers ou visionnaires : explorez la vie de ceux qui ont redéfini le monde. Découvrez comment leurs actions ont déclenché des révolutions, inspiré des mouvements et laissé une empreinte indélébile sur l'histoire."
        primaryHref="/"
        primaryContent="▶ Commencer l'exploration"
        secondaryHref="/"
        secondaryContent="+ Créer mon parcours"
      />
    </main>
  );
}