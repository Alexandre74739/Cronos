import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/src/lib/prisma";
import Hero from "@/src/components/sections/Hero";
import Reveal from "@/src/components/animations/Reveal";
import SliceIn from "@/src/components/animations/SliceIn";

const nasdiItems = [
  { key: "nasdiN", letter: "N", label: "Nature" },
  { key: "nasdiA", letter: "A", label: "Auteur" },
  { key: "nasdiS", letter: "S", label: "Source" },
  { key: "nasdiD", letter: "D", label: "Date" },
  { key: "nasdiI", letter: "I", label: "Idée principale" },
] as const;

const fmt = (y: number) =>
  y <= -1000000
    ? `${Math.abs(y / 1000000)} million${Math.abs(y / 1000000) > 1 ? "s" : ""} av. J.-C.`
    : y < 0
      ? `${Math.abs(y)} av. J.-C.`
      : String(y);

export default async function SourcePage(props: PageProps<"/sources/[slug]">) {
  const { slug } = await props.params;

  const source = await prisma.source.findUnique({ where: { slug } });
  if (!source) notFound();

  return (
    <main>
      <Hero
        imageSrc={source.imageUrl}
        badgeContent={source.nature}
        title={source.title}
        titleClassName="text-2xl sm:text-4xl md:text-5xl"
        breadcrumb={
          <nav className="flex items-center gap-2 text-sm text-white/40">
            <Link
              href="/sources"
              className="hover:text-white/70 transition-colors"
            >
              Archives
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60 truncate max-w-50">
              {source.title}
            </span>
          </nav>
        }
        description={`${source.author} — ${fmt(source.year)}\n${source.origin}`}
        primaryHref="#analyse"
        primaryContent="▼ Lire l'analyse"
      />

      <section id="analyse" className="py-24 px-12 md:px-20">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          <Reveal delay={0}>
            <h2>Analyse NASDI</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/40 text-sm uppercase tracking-widest mb-12">
              {source.title} — {fmt(source.year)}
            </p>
          </Reveal>

          {nasdiItems.map(({ key, letter, label }, i) => (
            <SliceIn key={key} delay={i * 0.1}>
              <div className="flex flex-col gap-4 py-10 border-t border-white/10">
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-bold text-5xl leading-none tabular-nums select-none"
                    style={{ color: source.color, opacity: 0.9 }}
                  >
                    {letter}
                  </span>
                  <h3 className="text-white/60 text-sm uppercase tracking-widest font-medium">
                    {label}
                  </h3>
                </div>
                <p className="text-white/70 leading-[1.85] pl-14">
                  {source[key]}
                </p>
              </div>
            </SliceIn>
          ))}
        </div>
      </section>
    </main>
  );
}
