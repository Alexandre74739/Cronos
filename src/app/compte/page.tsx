"use client";

import { useState } from "react";
import {
  BookOpen,
  Bell,
  Monitor,
  Lock,
  Eye,
  EyeOff,
} from "@deemlol/next-icons";

const perks = [
  {
    icon: Monitor,
    label: "Retrouvez votre progression sur tous vos appareils",
  },
  { icon: Bell, label: "Recevez des alertes sur les nouvelles ressources" },
  { icon: BookOpen, label: "Accédez à l'ensemble des archives et sources" },
  { icon: Lock, label: "Un seul compte pour tout l'univers Cronos" },
];

export default function Compte() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-[calc(100vh-64px)] flex">
      <div className="hidden lg:flex flex-col justify-center gap-10 w-1/2 bg-card px-16 py-20 border-r border-border">
        <div>
          <p className="text-primary font-bold tracking-widest text-sm uppercase mb-3">
            Arte Cronos
          </p>
          <h2 className="text-white leading-tight">
            L'Histoire,
            <br />à votre rythme
          </h2>
        </div>

        <ul className="flex flex-col gap-6">
          {perks.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-start gap-4">
              <span className="mt-0.5 text-primary shrink-0">
                <Icon size={20} />
              </span>
              <p className="text-white/70 leading-relaxed">{label}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8 py-20">
        <div className="w-full max-w-sm flex flex-col gap-8">
          <div>
            <h3 className="mb-1">Créer mon compte</h3>
            <p className="text-white/40">
              Rejoignez Cronos et personnalisez votre parcours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs font-semibold tracking-wide uppercase">
                Adresse e-mail
              </label>
              <input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-bg border border-border text-white placeholder-white/20 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs font-semibold tracking-wide uppercase">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-bg border border-border text-white placeholder-white/20 px-4 py-3 pr-12 rounded-sm text-sm focus:outline-none focus:border-white/40 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-gray-900 font-bold py-3 rounded-sm text-sm hover:bg-gray-200 active:scale-[0.98] transition-all duration-150 mt-1"
            >
              Créer mon compte
            </button>
          </form>

          {submitted && (
            <div className="animate-in border border-border rounded-sm px-5 py-4 flex flex-col gap-2">
              <p className="text-white font-semibold text-sm">
                Merci pour votre intérêt !
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                La création de compte n'est pas implémentée sur cette
                version de Cronos. Le projet étant à vocation pédagogique, il
                a été fait le choix de ne stocker aucune donnée utilisateur.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
