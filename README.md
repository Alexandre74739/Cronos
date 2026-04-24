# CRONOS

> Plateforme web éducative — Apprendre l'histoire par les liens de cause à effet.

Projet fictif développé sous mandat ARTE (comité éditorial jeunesse) dans le cadre d'une montée en compétence **sans LLM**. Stack entièrement gratuite, déployable sans infrastructure propriétaire.

---

## Stack

| Couche | Technologie |
|---|---|
| Framework | Next.js 14 (App Router) |
| UI | React |
| Base de données | PostgreSQL — [Neon](https://neon.tech) (tier gratuit) |
| ORM | Prisma |
| Hébergement | Vercel (tier gratuit) |

---

## Architecture

Le routing suit la convention `/[era]/[event-slug]`. Le paramètre `era` pilote directement le `ThemeContext` React, qui injecte les variables CSS du thème visuel correspondant à la période historique active — sans rechargement de page.

```
app/
├── [era]/
│   ├── page.tsx          # Page de période
│   └── [event-slug]/
│       └── page.tsx      # Page d'événement
├── layout.tsx            # ThemeProvider global
└── components/
    ├── Timeline/          # Frise interactive (infinite scroll)
    ├── FigureCard/        # Carte personnage historique
    └── LevelToggle/       # Sélecteur Junior / Expert
```

---

## Base de données

Schéma relationnel PostgreSQL versionné via Prisma. Transférable vers tout hébergeur PostgreSQL sans modification.

```prisma
model Era {
  id           Int      @id @default(autoincrement())
  name         String
  startYear    Int
  endYear      Int
  cssColors    Json     // variables CSS du thème
  headerAssets Json     // assets visuels de l'en-tête
  events       Event[]
  figures      Figure[]
}

model Event {
  id             Int          @id @default(autoincrement())
  era            Era          @relation(fields: [eraId], references: [id])
  eraId          Int
  slug           String       @unique
  title          String
  contentJunior  String       // CM1–6ème
  contentExpert  String       // Lycée
  sources        Json
  dateLabel      String
  connectionsOut Connection[] @relation("FromEvent")
  connectionsIn  Connection[] @relation("ToEvent")
}

model Figure {
  id               Int    @id @default(autoincrement())
  era              Era    @relation(fields: [eraId], references: [id])
  eraId            Int
  name             String
  role             String
  biographyJunior  String
  biographyExpert  String
  imageUrl         String
}

model Connection {
  id          Int    @id @default(autoincrement())
  fromEvent   Event  @relation("FromEvent", fields: [fromEventId], references: [id])
  fromEventId Int
  toEvent     Event  @relation("ToEvent", fields: [toEventId], references: [id])
  toEventId   Int
  description String
  type        String
}
```

---

## Direction artistique

L'interface mute visuellement à chaque changement d'époque. Cinq thèmes s'appliquent par-dessus l'identité socle ARTE.tv (fond `#0F0F0F`, rouge `#E2001A`, typographie sans-serif).

| Époque | Style | Spécificités |
|---|---|---|
| Antiquité | Marbre & Calcaire | `#EEE5D3`, bordures ciselées, police Cinzel |
| Moyen Âge | Enluminure | Bleu roi `#1B3A6B`, or `#C9A84C`, gothique |
| Renaissance | Humanisme & Papier | Fond crème `#F5ECD7`, Garamond, SVG trait |
| Rév. Industrielle | Fonte & Vapeur | Cuivre `#B87333`, rivets CSS, Stardos Stencil |
| Époque Moderne | Minimalisme Digital | Swiss style, Inter, aplats vifs |

---

## Fonctionnalités MVP

**Frise interactive** — Scroll horizontal avec infinite scroll. Chaque nœud déclenche la transition vers la page de période et la mutation visuelle de l'interface.

**Sélecteur de niveau** — Interrupteur persistant dans l'en-tête. Bascule instantanée entre le registre Junior (CM1–6ème) et Expert (Lycée) via état React local, sans requête réseau.

**Pages par période** — Événements fondateurs traités par logique causale, figures phares avec contexte d'influence, connexions sortantes vers les périodes conditionnées.

---

## Ressources visuelles

Aucune image originale produite. Toutes les ressources sont libres de droits ou issues d'APIs publiques.

- **Iconographie** — SVG The Noun Project (CC) ou inline, stylisés par filtres CSS (`sepia`, `hue-rotate`) selon l'époque.
- **Images historiques** — [Met Museum Open Access API](https://metmuseum.github.io) · [Library of Congress API](https://www.loc.gov/apis/). Appels côté serveur (Next.js Server Components).
- **Textures** — `backdrop-filter`, `background-image` avec patterns SVG répétés. Aucun fichier image lourd.

---

## Lancer le projet

```bash
git clone https://github.com/[username]/cronos
cd cronos
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Renseigner DATABASE_URL (chaîne de connexion Neon)

# Initialiser la base
npx prisma migrate dev
npx prisma db seed

# Démarrer
npm run dev
```

---

## Contraintes

Ce projet est développé **sans recours à aucun outil d'intelligence artificielle générative** dans la production du code. La documentation officielle constitue l'unique source de référence technique.

---

*Projet fictif — Exercice de montée en compétence · Mandat ARTE simulé à des fins pédagogiques.*