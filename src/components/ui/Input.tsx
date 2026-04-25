"use client";

export default function SearchInput({
  value,
  onChange,
  placeholder = "Rechercher...",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-card border border-border text-white placeholder-white/30 px-4 py-2.5 rounded-sm text-sm focus:outline-none focus:border-white/50 transition-colors w-full max-w-xs"
    />
  );
}
