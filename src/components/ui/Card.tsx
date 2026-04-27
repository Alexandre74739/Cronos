import Link from "next/link";

interface CardProps {
    href: string;
    year: number | string;
    title: string;
    description: string;
    color?: string;
}

export default function Card({ href, year, title, description, color = "#FA481C" }: CardProps) {
    const fmt = (y: number) => (y < 0 ? `${Math.abs(y)} av. JC` : String(y));
    const yearLabel = typeof year === "number" ? fmt(year) : year;

    return (
        <Link href={href} className="group flex flex-col overflow-hidden rounded-sm cursor-pointer">
            <div
                className="relative flex items-center justify-center h-36"
                style={{ background: `linear-gradient(135deg, ${color}22 0%, ${color}0a 60%, #0d0804 100%)` }}
            >
                <span className="text-xl font-bold tracking-wide" style={{ color }}>
                    {yearLabel}
                </span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
            </div>

            <div className="flex flex-col gap-2 p-4 bg-card flex-1">
                <h3 className="text-white font-bold text-base leading-snug line-clamp-2 wrap-break-word group-hover:text-white/80 transition-colors duration-200">
                    {title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                    {description}
                </p>
                <span className="text-base font-medium mt-auto pt-2" style={{ color }}>
                    Explorer →
                </span>
            </div>
        </Link>
    );
}
