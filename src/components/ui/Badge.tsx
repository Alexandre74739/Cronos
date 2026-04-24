interface BadgeProps {
  content: string;
}

export default function Badge({ content }: { content: string }) {
  return (
    <span className="inline-flex items-center border border-white/30 text-white/80 text-sm font-medium px-3 py-1 rounded-sm tracking-wide">
      {content}
    </span>
  );
}
