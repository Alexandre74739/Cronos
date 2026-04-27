import { Tag, User, BookOpen, Calendar, Sparkles } from "@deemlol/next-icons";

const categories = [
  {
    letter: "N",
    name: "Nature",
    description:
      "Déterminez le type de document : texte officiel, lettre privée, photographie, carte, objet…",
    icon: Tag,
  },
  {
    letter: "A",
    name: "Auteur",
    description:
      "Identifiez qui a produit le document : son nom, sa fonction, sa position sociale et son époque.",
    icon: User,
  },
  {
    letter: "S",
    name: "Source",
    description:
      "Retracez l'origine du document : institution, publication, archive ou tradition orale.",
    icon: BookOpen,
  },
  {
    letter: "D",
    name: "Date",
    description:
      "Situez le document dans le temps : date de création, de publication ou de découverte.",
    icon: Calendar,
  },
  {
    letter: "I",
    name: "Idée principale",
    description:
      "Dégagez le message central : ce que l'auteur cherche à démontrer, défendre ou transmettre.",
    icon: Sparkles,
  },
];

export default function Analyses() {
  return (
    <section className="py-24 px-12 md:px-20">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4 max-w-xl">
          <h2>La méthode du détective NASDI</h2>
          <p className="text-white/50 text-base leading-relaxed">
            Cinq questions essentielles pour décrypter n'importe quelle
            source historique et en extraire le sens profond.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(({ letter, name, description, icon: Icon }) => (
            <div
              key={letter}
              className="bg-card rounded-sm p-6 flex flex-col gap-5 border border-white/10 hover:bg-white/5 transition-colors group w-full sm:w-72"
            >
              <div className="flex items-start justify-between">
                <span className="text-white/50">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <span className="text-white/10 font-bold text-4xl leading-none tabular-nums">
                  {letter}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base leading-snug">{name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
