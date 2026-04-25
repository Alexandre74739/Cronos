"use client";

import { TV, Monitor, Smartphone } from "@deemlol/next-icons";
import Link from "next/link";

const links = [
  { href: "/", label: "Frise" },
  { href: "/periodes", label: "Périodes" },
  { href: "/figures", label: "Figures" },
  { href: "/sources", label: "Sources" },
];

const devices = [
  { Icon: TV, label: "TV" },
  { Icon: Monitor, label: "Ordinateur" },
  { Icon: Smartphone, label: "Mobile" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="flex flex-col items-center gap-4 px-6 py-12 text-center">
        <p className="font-heading font-bold text-2xl order-1 lg:order-2">
          Cronos sur tous vos écrans
        </p>
        <p className="text-white/50 max-w-md order-2 lg:order-3">
          Retrouvez l'application sur votre ordinateur, smartphone ou TV
          connectée.
        </p>

        <div className="flex items-center gap-8 mt-2 order-3 lg:order-1">
          {devices.map(({ Icon, label }) => (
            <Icon key={label} className="size-8" />
          ))}
        </div>
      </div>

      <div className="h-px bg-border mx-6 sm:mx-12 md:mx-20" />

      <nav className="flex flex-wrap items-center justify-center gap-8 py-5 px-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="font-ui text-white/50 hover:text-white transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="h-px bg-border mx-6 sm:mx-12 md:mx-20" />

      <p className="text-center text-white/20 text-xs py-5">
        © {new Date().getFullYear()} ARTE Cronos : Tous droits réservés
      </p>
    </footer>
  );
}
