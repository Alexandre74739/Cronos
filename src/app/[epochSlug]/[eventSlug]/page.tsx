import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/src/lib/prisma";

export default async function EventPage(props: PageProps<"/[epochSlug]/[eventSlug]">) {
  const { epochSlug, eventSlug } = await props.params;

  const event = await prisma.event.findUnique({
    where: { slug: eventSlug },
    include: { epoch: true },
  });

  if (!event || event.epoch.slug !== epochSlug) notFound();

  const nextEvents = await prisma.event.findMany({
    where: { year: { gt: event.year } },
    orderBy: { year: "asc" },
    take: 3,
    include: { epoch: true },
  });

  const fmt = (y: number) => y < 0 ? `${Math.abs(y)} av. J.-C.` : String(y);
  const readingTime = Math.max(1, Math.ceil(event.content.split(" ").length / 200));

  return (
    <main className="bg-bg min-h-screen text-white">

      <section className="px-6 sm:px-12 md:px-20 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-white/40 text-sm mb-12">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span>/</span>
          <Link href={`/${epochSlug}`} className=" duration-300 hover:text-white transition-colors">
            {event.epoch.label}
          </Link>
          <span>/</span>
          <span className="text-white truncate max-w-50">{event.title}</span>
        </nav>

        <div className="max-w-3xl flex flex-col gap-6">
          <span className="text-primary font-bold text-3xl">{fmt(event.year)}</span>
          <h1>{event.title}</h1>
          <p className="text-white/60 text-xl leading-relaxed">{event.description}</p>
        </div>
      </section>

      <div className="h-px bg-border mx-6 sm:mx-12 md:mx-20" />

      <section className="px-6 sm:px-12 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h2>Contexte historique</h2>

            {(event.content ?? "").split("\n\n").map((paragraph: string, i: number) => (
              <p key={i} className="text-white/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <blockquote className="border-l-4 border-primary pl-6 py-2">
            <p className="text-white/80 text-lg italic leading-relaxed">
              "{event.description}"
            </p>
          </blockquote>

          <Link
            href={`/${epochSlug}`}
            className="self-start text-white/50 duration-300 hover:text-white transition-colors"
          >
            ← Voir tous les événements de {event.epoch.label}
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-card rounded-sm p-6 flex flex-col gap-5">
            <p className="text-white/40 uppercase tracking-widest font-bold">Fiche</p>

            <div className="flex flex-col gap-1">
              <p className="text-white/40 text-xs uppercase tracking-wide">Année</p>
              <p className="text-white font-bold text-lg">{fmt(event.year)}</p>
            </div>

            <div className="h-px bg-border" />

            <div className="flex flex-col gap-1">
              <p className="text-white/40 text-xs uppercase tracking-wide">Époque</p>
              <Link href={`/${epochSlug}`} className="text-primary font-bold hover:underline">
                {event.epoch.label}
              </Link>
            </div>

            <div className="h-px bg-border" />

            <div className="flex flex-col gap-1">
              <p className="text-white/40 text-xs uppercase tracking-wide">Temps de lecture</p>
              <p className="text-white font-bold">{readingTime} min</p>
            </div>
          </div>
        </div>
      </section>

      {nextEvents.length > 0 && (
        <div>
          <div className="h-px bg-border mx-6 sm:mx-12 md:mx-20" />
          <section className="px-6 sm:px-12 md:px-20 py-16">
            <h2 className="mb-8">La suite de l'Histoire</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nextEvents.map((next: (typeof nextEvents)[number]) => (
                <Link
                  key={next.slug}
                  href={`/${next.epoch.slug}/${next.slug}`}
                  className="group bg-card rounded-sm p-6 flex flex-col gap-3 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">{fmt(next.year)}</span>
                    {next.epoch.slug !== epochSlug && (
                      <span className="text-white/30 text-xs">{next.epoch.label}</span>
                    )}
                  </div>
                  <h3 className="text-xl duration-300 group-hover:text-primary">
                    {next.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed line-clamp-2">
                    {next.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      )}

    </main>
  );
}
