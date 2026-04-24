interface ButtonProps {
  content: string;
  style?: "primary" | "secondary";
}

export default function Button({ content, style }: ButtonProps) {
  return (
    <button
      className={
        style === "primary"
          ? "bg-white text-gray-900 rounded-sm px-6 py-3 font-bold transition-all duration-300 hover:bg-gray-300"
          : "bg-transparent text-white rounded-sm border border-white px-6 py-3 font-bold transition-all duration-300 hover:bg-white/10"
      }
    >
      {content}
    </button>
  );
}
