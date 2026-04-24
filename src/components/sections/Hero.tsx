import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center min-h-[calc(100vh-64px)] px-12 md:px-20 lg:px-28"
      style={{
        background:
          "radial-gradient(ellipse at 85% center, #2a0c08 0%, #151515 55%)",
      }}
    >
      <div className="flex flex-col gap-6 max-w-xl">
        <Badge content="Plateforme éducative · 9-18 ans" />

        <h1 className="font-black leading-[1.05] tracking-tight">
          L'histoire
          <br />
          par ses causes
        </h1>

        <p className="text-white/60 text-base max-w-sm leading-relaxed">
          Pas des dates. Des connexions. Choisissez une époque ci-dessous pour
          explorer l'histoire autrement.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button content="▶ Commencer l'exploration" style="primary" />
          <Button content="+ Créer mon parcours" style="secondary" />
        </div>
      </div>
    </section>
  );
}
