import Image from "next/image";
import radeauImg from "@/src/app/assets/radeau-de-la-meduse.png";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-[calc(100vh-64px)] px-12 md:px-20 overflow-hidden bg-151515">
      <div className="absolute inset-0">
        <Image
          src={radeauImg}
          alt=""
          fill
          className="object-cover object-center opacity-60"
          priority
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #151515 35%, #15151599 60%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col gap-6 max-w-xl">
        <Badge content="Plateforme éducative · 9-18 ans" />

        <h1 className="font-bold leading-[1.05] tracking-tight">
          L'histoire
          <br />
          par ses causes
        </h1>

        <p className="text-white/60 max-w-base leading-relaxed">
          Plongez dans l'histoire à travers les époques. Explorez les événements
          clés, les personnages marquants et les mouvements qui ont façonné
          notre monde. Découvrez commentl'histoire continue de résonner
          aujourd'hui.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button content="▶ Commencer l'exploration" style="primary" />
          <Button content="+ Créer mon parcours" style="secondary" />
        </div>
      </div>
    </section>
  );
}
