"use client";

import { useState } from "react";
import Button from "@/src/components/ui/Button";

const epochs = ["Antiquité", "Moyen Âge", "Renaissance", "Révolution Industrielle", "Époque Moderne"];

export default function HistoryBtns() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div>
      <div className="flex gap-4 align-center justify-center mt-4">
        {epochs.map((epoch) => (
          <Button
            key={epoch}
            content={epoch}
            style="tertiary"
            active={active === epoch}
            onClick={() => setActive(active === epoch ? null : epoch)}
          />
        ))}
      </div>
    </div>
  );
}
