"use client";

import { useState } from "react";
import Button from "@/src/components/ui/Button";

interface Event {
  slug: string;
  year: number;
  title: string;
  description: string;
}

interface Epoch {
  slug: string;
  label: string;
  events: Event[];
}

export default function HistoryBtns({ epochs }: { epochs: Epoch[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="py-8">
      <div className="flex gap-3 justify-center flex-wrap px-12 md:px-20">
        {epochs.map((epoch) => (
          <Button
            key={epoch.slug}
            content={epoch.label}
            style="tertiary"
            active={active === epoch.slug}
            onClick={() => setActive(active === epoch.slug ? null : epoch.slug)}
          />
        ))}
      </div>

    </div>
  );
}
