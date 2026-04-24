"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/logo-site.svg";
import Link from "next/link";
import PWAInstallButton from "./PWAInstallButton";

const links = [
  { href: "/frise", label: "Frise" },
  { href: "/periodes", label: "Périodes" },
  { href: "/figures", label: "Figures" },
  { href: "/sources", label: "Sources" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-bg border-b border-border fixed top-0 left-0 w-full z-100">
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="flex items-center shrink-0"
          onClick={() => setIsOpen(false)}
        >
          <Image src={Logo} alt="ARTE Cronos" height={36} priority />
        </Link>

        <nav className="hidden lg:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-ui text-sm font-semibold text-white/80 transition-colors duration-200 hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="hidden lg:flex items-center gap-3">
        <button
          aria-label="Rechercher"
          className="cursor-pointer text-white/70 hover:text-white transition-colors duration-200 p-1"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>

        <PWAInstallButton />

        <button className="font-ui text-xs font-semibold text-white border border-white px-6 py-2.5 transition-all duration-200 hover:bg-white hover:text-bg">
          Créer un compte
        </button>
      </div>

      {/* Burger mobile */}
      <button
        className="flex lg:hidden flex-col justify-between w-6 h-4 bg-transparent border-0 p-0 shrink-0"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <span
          aria-hidden="true"
          className={`block w-full h-0.5 bg-white rounded-sm transition-all duration-200 origin-center ${isOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
        />
        <span
          aria-hidden="true"
          className={`block w-full h-0.5 bg-white rounded-sm transition-all duration-200 ${isOpen ? "opacity-0 scale-x-0" : ""}`}
        />
        <span
          aria-hidden="true"
          className={`block w-full h-0.5 bg-white rounded-sm transition-all duration-200 origin-center ${isOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
        />
      </button>

      <ul
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`block lg:hidden fixed top-16 left-0 w-full bg-bg border-t-2 border-secondary overflow-hidden transition-[max-height] duration-350ms ease-cubic-bezier(0.4,0,0.2,1) z-99 ${isOpen ? "max-h-480px" : "max-h-0"}`}
      >
        {links.map(({ href, label }) => (
          <li key={href} className="border-b border-border last:border-b-0">
            <Link
              href={href}
              onClick={() => setIsOpen(false)}
              className="flex items-center px-6 py-4 font-ui text-lg font-bold text-white border-l-[3px] border-l-transparent transition-all duration-200 hover:text-[#b3b3b3] hover:border-l-[#b3b3b3] hover:pl-8"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
