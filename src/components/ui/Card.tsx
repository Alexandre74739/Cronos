import Link from "next/link";

interface CardProps {
  href: string;
  year: number;
  title: string;
  description: string;
}

export default function Card({ href, year, title, description }: CardProps) {
  const fmt = (y: number) => (y < 0 ? `${Math.abs(y)} av. J.-C.` : String(y));

  return (
    <Link href={href} className="group flex flex-col overflow-hidden rounded-sm cursor-pointer">
      <div
        className="relative flex items-center justify-center h-36"
        style={{ background: "linear-gradient(135deg, #2d1a08 0%, #1a0f04 60%, #0d0804 100%)" }}
      >
        <span className="text-xl font-bold tracking-wide" style={{ color: "#c8902a" }}>
          {fmt(year)}
        </span>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
      </div>

      <div className="flex flex-col gap-2 p-4 bg-card flex-1">
        <h3 className="text-white font-bold text-base leading-snug group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        <span className="text-primary text-base font-medium mt-auto pt-2">
          Explorer →
        </span>
      </div>
    </Link>
  );
}
