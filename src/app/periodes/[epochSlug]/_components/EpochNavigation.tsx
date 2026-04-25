import Button from "@/src/components/ui/Button";

type AdjacentEpoch = { slug: string; label: string } | null;

export default function EpochNavigation({
  prevEpoch,
  nextEpoch,
}: {
  prevEpoch: AdjacentEpoch;
  nextEpoch: AdjacentEpoch;
}) {
  if (!prevEpoch && !nextEpoch) return null;

  return (
    <div className="flex items-center justify-center gap-4 pt-8 flex-wrap">
      {prevEpoch && (
        <Button content={`← ${prevEpoch.label}`} href={`/periodes/${prevEpoch.slug}`} style="secondary" />
      )}
      {nextEpoch && (
        <Button content={`${nextEpoch.label} →`} href={`/periodes/${nextEpoch.slug}`} style="primary" />
      )}
    </div>
  );
}
