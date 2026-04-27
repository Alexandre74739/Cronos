import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/src/components/sections/Hero";
import Reveal from "@/src/components/animations/Reveal";
import SliceIn from "@/src/components/animations/SliceIn";
import { prisma } from "@/src/lib/prisma";

const fmt = (y: number) => (y < 0 ? `${Math.abs(y)} av. J.-C.` : String(y));

export default async function FigurePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const figure = await prisma.figure.findUnique({ where: { slug } });
  if (!figure) notFound();

  const years = figure.deathYear
    ? `${fmt(figure.birthYear)} — ${fmt(figure.deathYear)}`
    : `né en ${fmt(figure.birthYear)}`;

  const sections = [
    { num: "01", label: "Jeunesse & Formation", content: figure.bioYouth },
    { num: "02", label: "L'heure de gloire", content: figure.bioApogee },
    { num: "03", label: "Héritage", content: figure.bioLegacy },
  ];

  return (
    <main>
      <Hero
        imageSrc={figure.imageUrl}
        tint={figure.color}
        badgeContent={figure.role}
        title={figure.name}
        titleClassName="text-4xl sm:text-5xl md:text-6xl"
        breadcrumb={
          <nav className="flex items-center gap-2 text-sm text-white/40">
            <Link href="/figures" className="hover:text-white/70 transition-colors">
              Figures
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60">{figure.name}</span>
          </nav>
        }
        description={`${years} · ${figure.origin}`}
        primaryHref="#biographie"
        primaryContent="▼ Lire la biographie"
      />

      <section id="biographie" className="py-24 px-12 md:px-20">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          <Reveal delay={0}>
            <h2>Chronique de vie</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/50 text-base italic leading-relaxed mb-12 max-w-xl">
              &ldquo;{figure.excerpt}&rdquo;
            </p>
          </Reveal>

          {sections.map(({ num, label, content }, i) => (
            <SliceIn key={num} delay={i * 0.1}>
              <div className="flex flex-col gap-4 py-10 border-t border-white/10">
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-bold text-5xl leading-none tabular-nums select-none"
                    style={{ color: figure.color, opacity: 0.9 }}
                  >
                    {num}
                  </span>
                  <h3 className="text-white/60 text-sm uppercase tracking-widest font-medium">
                    {label}
                  </h3>
                </div>
                <p className="text-white/70 leading-[1.85] pl-14">
                  {content}
                </p>
              </div>
            </SliceIn>
          ))}
        </div>
      </section>
    </main>
  );
}
