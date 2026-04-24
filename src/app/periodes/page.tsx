import Hero from "@/src/components/sections/Hero";
import Img from "@/src/app/assets/les-sabines.png";

export default function Periodes() {
  return (
    <main>
      <Hero
        imageSrc={Img}
        badgeContent="Plateforme éducative 9-18 ans"
        title={"Voyager  \n dans les siècles"}
        description="Parcourez les époques, de l'Antiquité à nos jours. Identifiez les ruptures et les continuités qui ont construit notre civilisation. Explorez les grandes périodes historiques, leurs caractéristiques et leurs impacts sur le monde contemporain."
        primaryHref="/"
        primaryContent="▶ Commencer l'exploration"
        secondaryHref="/"
        secondaryContent="+ Créer mon parcours"
      />
    </main>
  );
}