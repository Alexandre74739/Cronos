import { notFound } from "next/navigation";
import { prisma } from "@/src/lib/prisma";

export default async function EpochPage(props: PageProps<"/[epochSlug]">) {
  const { epochSlug } = await props.params;

  const epoch = await prisma.epoch.findUnique({
    where: { slug: epochSlug },
    include: { events: { orderBy: { year: "asc" } } },
  });

  if (!epoch) notFound();

  return (
    <main>
      {/* à construire */}
    </main>
  );
}
