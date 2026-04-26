"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Button from "@/src/components/ui/Button";
import Card from "@/src/components/ui/Card";
import { getEpochColor } from "@/src/lib/epochColors";
import StaggerItem from "../animations/StaggerItem";

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
  const activeEpoch = epochs.find((e) => e.slug === active);

  return (
    <section className="py-8">
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

      <AnimatePresence mode="wait">
        {!activeEpoch ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-12 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col items-center gap-3 py-16 text-center"
          >
            <span className="text-4xl">↑</span>
            <p className="text-white/50 text-lg">Sélectionne une époque pour explorer ses événements clés.</p>
          </motion.div>
        ) : (
          <motion.div key={activeEpoch.slug} className="mt-12 px-4 sm:px-8 md:px-12 lg:px-20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="gap-3">Événements clés : <Link href={`/periodes/${activeEpoch.slug}`} style={{ color: getEpochColor(activeEpoch.slug) }} className="hover:underline">{activeEpoch.label}</Link></h2>
              <Link href="/periodes" className="text-white/50 hover:text-white transition-colors hidden sm:block">
                Voir toutes les périodes →
              </Link>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
                exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {activeEpoch.events.map((event) => (
                <StaggerItem key={event.slug}>
                  <Card
                    href={`/periodes/${activeEpoch.slug}/${event.slug}`}
                    year={event.year}
                    title={event.title}
                    description={event.description}
                    color={getEpochColor(activeEpoch.slug)}
                  />
                </StaggerItem>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section >
  );
}
