import Link from "next/link";

interface ButtonProps {
  content: string;
  href: string;
  style?: "primary" | "secondary";
}

export default function Button({ content, href, style }: ButtonProps) {
  const baseStyles =
    "inline-block rounded-sm px-6 py-3 font-bold transition-all duration-300 text-center";

  const variantStyles =
    style === "primary"
      ? "bg-white text-gray-900 hover:bg-gray-300"
      : "bg-transparent text-white border border-white hover:bg-white/10";

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles}`}>
      {content}
    </Link>
  );
}
