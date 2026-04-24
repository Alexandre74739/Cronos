import "dotenv/config";
import ws from "ws";
import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";

neonConfig.webSocketConstructor = ws;

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const data = [
  {
    slug: "antiquite",
    label: "Antiquité",
    events: [
      { slug: "construction-pyramides", year: -2560, title: "Construction des pyramides", description: "Les pharaons d'Égypte érigent les grandes pyramides de Gizeh, symboles du pouvoir divin." },
      { slug: "naissance-democratie", year: -507, title: "Naissance de la démocratie", description: "Clisthène instaure à Athènes les bases de la démocratie, un système politique révolutionnaire." },
      { slug: "conquetes-alexandre", year: -334, title: "Conquêtes d'Alexandre", description: "Alexandre le Grand part à la conquête d'un empire qui s'étend de la Grèce jusqu'à l'Inde." },
      { slug: "chute-rome", year: 476, title: "Chute de Rome", description: "L'Empire romain d'Occident s'effondre sous les invasions barbares, marquant la fin de l'Antiquité." },
    ],
  },
  {
    slug: "moyen-age",
    label: "Moyen Âge",
    events: [
      { slug: "couronnement-charlemagne", year: 800, title: "Couronnement de Charlemagne", description: "Charlemagne est couronné empereur d'Occident par le pape Léon III à Rome." },
      { slug: "premiere-croisade", year: 1096, title: "Première Croisade", description: "Des milliers de chevaliers et pèlerins partent reconquérir Jérusalem au nom de la chrétienté." },
      { slug: "magna-carta", year: 1215, title: "Magna Carta", description: "Les barons anglais forcent le roi Jean sans Terre à signer la Grande Charte, limitant le pouvoir royal." },
      { slug: "peste-noire", year: 1347, title: "La Peste Noire", description: "La grande épidémie de peste bubonique ravage l'Europe, emportant un tiers de la population." },
    ],
  },
  {
    slug: "renaissance",
    label: "Renaissance",
    events: [
      { slug: "imprimerie-gutenberg", year: 1450, title: "Imprimerie de Gutenberg", description: "Johannes Gutenberg invente la presse à caractères mobiles, révolutionnant la diffusion du savoir." },
      { slug: "decouverte-amerique", year: 1492, title: "Découverte de l'Amérique", description: "Christophe Colomb atteint le continent américain, ouvrant une ère d'exploration et de conquête." },
      { slug: "reforme-protestante", year: 1517, title: "Réforme protestante", description: "Martin Luther publie ses 95 thèses, déclenchant une révolution religieuse qui fracture l'Europe." },
      { slug: "copernic-heliocentrisme", year: 1543, title: "Héliocentriisme de Copernic", description: "Copernic prouve que la Terre tourne autour du Soleil, bouleversant la vision du monde." },
    ],
  },
  {
    slug: "revolution-industrielle",
    label: "Révolution Industrielle",
    events: [
      { slug: "machine-vapeur-watt", year: 1769, title: "Machine à vapeur de Watt", description: "James Watt perfectionne la machine à vapeur, moteur d'une révolution industrielle mondiale." },
      { slug: "revolution-francaise", year: 1789, title: "Révolution française", description: "Liberté, Égalité, Fraternité : un nouveau monde politique naît dans le sang et les idéaux." },
      { slug: "printemps-peuples", year: 1848, title: "Printemps des peuples", description: "L'Europe entre en révolution, portée par le nationalisme et les idéaux socialistes." },
      { slug: "commune-paris", year: 1871, title: "Commune de Paris", description: "72 jours d'utopie ouvrière s'achèvent dans un bain de sang, laissant 10 000 morts." },
    ],
  },
  {
    slug: "epoque-moderne",
    label: "Époque Moderne",
    events: [
      { slug: "premiere-guerre-mondiale", year: 1914, title: "Première Guerre mondiale", description: "Le monde bascule dans un conflit sans précédent, faisant plus de 18 millions de morts." },
      { slug: "seconde-guerre-mondiale", year: 1939, title: "Seconde Guerre mondiale", description: "Le conflit le plus meurtrier de l'histoire humaine mobilise les nations du monde entier." },
      { slug: "chute-mur-berlin", year: 1989, title: "Chute du mur de Berlin", description: "Le symbole de la Guerre Froide s'effondre, annonçant la réunification de l'Allemagne." },
      { slug: "attentat-11-septembre", year: 2001, title: "Attentats du 11 septembre", description: "Les attaques terroristes contre les États-Unis redéfinissent la géopolitique mondiale." },
    ],
  },
];

async function main() {
  for (const epoch of data) {
    await prisma.epoch.upsert({
      where: { slug: epoch.slug },
      update: {},
      create: {
        slug: epoch.slug,
        label: epoch.label,
        events: {
          create: epoch.events,
        },
      },
    });
  }
  console.log("Base de données alimentée ✓");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
