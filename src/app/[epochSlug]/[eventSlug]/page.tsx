import { notFound } from "next/navigation";
import { prisma } from "@/src/lib/prisma";

export default async function EventPage(props: PageProps<"/[epochSlug]/[eventSlug]">) {
  const { epochSlug, eventSlug } = await props.params;

  const event = await prisma.event.findUnique({
    where: { slug: eventSlug },
    include: { epoch: true },
  });

  if (!event || event.epoch.slug !== epochSlug) notFound();

  return (
    <main>
      {/* à construire */}
    </main>
  );
}
