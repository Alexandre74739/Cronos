import { House } from "@deemlol/next-icons";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="relative min-h-screen flex items-center overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src="/404-arte.mp4"
            />
            <div className="relative z-10 w-full flex justify-center">
                <div className=" px-8 text-left">
                    <h1 className="text-2xl sm:text-4xl leading-tight mb-4">
                        Erreur 404 - Page introuvable
                    </h1>
                    <h2 className="text-xl font-semibold">
                        Nous sommes désolés, la page que vous cherchez n'existe plus...
                    </h2>
                    <p className="mb-8 leading-relaxed">
                        Soit la page a été dépubliée car son contenu était obsolète, soit nous avons déplacé le fichier un peu brutalement, soit vous avez fait une erreur en tapant son url.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/">
                            <button className="flex items-center gap-3 bg-card px-6 py-4 rounded-sm hover:ring-4 hover:ring-white hover:rounded-xs">
                                <House className="size-5" />
                                Retour à l'accueil
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
