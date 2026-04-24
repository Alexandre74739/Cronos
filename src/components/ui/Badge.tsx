interface BadgeProps {
  content: string;
}

export default function Badge({ content }: { content: string }) {
  return (
    <span className="inline-flex self-start items-center border bg-white/5 border-white/30 text-white/80 text-sm font-bold px-4 py-1.5 rounded-sm tracking-wide">
      {content}
    </span>
  );
}
