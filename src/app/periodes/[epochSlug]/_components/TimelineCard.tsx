import Link from "next/link";

type EpochEvent = {
  slug: string;
  year: number;
  title: string;
  description: string;
};

export default function TimelineCard({
  event,
  epochSlug,
  color,
}: {
  event: EpochEvent;
  epochSlug: string;
  color: string;
}) {
  return (
    <Link
      href={`/periodes/${epochSlug}/${event.slug}`}
      className="group bg-card rounded-sm p-5 flex flex-col gap-3 hover:bg-white/5 transition-colors w-full"
    >
      <h3 className="text-white font-bold text-lg leading-snug group-hover:text-white transition-colors duration-200">
        {event.title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
        {event.description}
      </p>
      <span className="text-sm font-medium mt-1" style={{ color }}>
        Explorer →
      </span>
    </Link>
  );
}
