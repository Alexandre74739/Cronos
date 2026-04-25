import TimelineCard from "./TimelineCard";

type EpochEvent = {
  slug: string;
  year: number;
  title: string;
  description: string;
};

const fmt = (y: number) => (y < 0 ? `${Math.abs(y)} av. JC` : String(y));

export default function TimelineRow({
  event,
  epochSlug,
  color,
  index,
}: {
  event: EpochEvent;
  epochSlug: string;
  color: string;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative">
      <div className="lg:hidden flex gap-6 py-4">
        <div className="flex flex-col items-center">
          <div
            className="w-2.5 h-2.5 rounded-full mt-1 shrink-0"
            style={{ backgroundColor: color, boxShadow: "0 0 0 3px var(--color-bg)" }}
          />
          <div className="w-px flex-1 bg-border mt-2" />
        </div>
        <div className="flex flex-col gap-2 pb-4 flex-1 min-w-0">
          <span className="font-bold text-sm" style={{ color }}>{fmt(event.year)}</span>
          <TimelineCard event={event} epochSlug={epochSlug} color={color} />
        </div>
      </div>

      <div className="hidden lg:flex items-start py-5">
        <div className="w-1/2 pr-12 flex justify-end">
          {isLeft ? (
            <span className="font-bold text-base pt-4 text-right whitespace-nowrap" style={{ color }}>
              {fmt(event.year)}
            </span>
          ) : (
            <TimelineCard event={event} epochSlug={epochSlug} color={color} />
          )}
        </div>

        <div
          className="absolute left-1/2 top-9 -translate-x-1/2 w-2.5 h-2.5 rounded-full z-10"
          style={{ backgroundColor: color, boxShadow: "0 0 0 4px var(--color-bg)" }}
        />

        <div className="w-1/2 pl-12">
          {isLeft ? (
            <TimelineCard event={event} epochSlug={epochSlug} color={color} />
          ) : (
            <span className="font-bold text-base pt-4 block whitespace-nowrap" style={{ color }}>
              {fmt(event.year)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
