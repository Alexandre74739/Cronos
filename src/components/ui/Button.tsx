import Link from "next/link";

interface ButtonProps {
  content: string;
  href?: string;
  style?: "primary" | "secondary" | "tertiary";
  active?: boolean;
  onClick?: () => void;
}

export default function Button({ content, href, style, active, onClick }: ButtonProps) {
  const baseStyles =
    "inline-block rounded-sm px-6 py-3 font-bold transition-all duration-300 text-center cursor-pointer";

  const variantStyles =
    style === "primary"
      ? "bg-white text-gray-900 hover:bg-gray-300"
      : style === "secondary"
        ? "bg-transparent text-white border border-white hover:bg-white/10"
        : active
          ? "bg-orange-700 text-white text-sm"
          :  "bg-white/20 text-white text-sm hover:bg-white hover:text-gray-900";

  if (onClick) {
    return (
      <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
        {content}
      </button>
    );
  }

  return (
    <Link href={href!} className={`${baseStyles} ${variantStyles}`}>
      {content}
    </Link>
  );
}
