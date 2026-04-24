interface ButtonProps {
  content: string;
  style?: "primary" | "secondary";
}

export default function Button({ content, style }: ButtonProps) {
  return (
    <button
      className={
        style === "primary"
          ? "bg-white text-gray-900 rounded-sm px-6 py-3 font-semibold transition-all duration-200 hover:bg-gray-100"
          : "bg-transparent text-white rounded-sm border border-white px-6 py-3 font-semibold transition-all duration-200 hover:bg-white/10"
      }
    >
      {content}
    </button>
  );
}
