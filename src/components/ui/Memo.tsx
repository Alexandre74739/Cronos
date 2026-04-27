interface MemoProps {
  icon: string;
  count: number;
  title: string;
  content: string;
}

export default function Memo({ icon, count, title, content }: MemoProps) {
  return (
    <div className="bg-card rounded-sm p-6 flex flex-col gap-5 w-full max-w-sm border border-white/20 hover:bg-white/5 transition-colors">
      <div className="flex items-start justify-between">
        <span className="text-white/60 text-2xl leading-none">{icon}</span>
        <span className="text-white/20 font-bold text-4xl leading-none tabular-nums">
          {count}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg leading-snug">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
