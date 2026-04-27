"use client";

export default function Select({
  value,
  onChange,
  options,
  placeholder = "Tous les types",
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-card border border-border text-white/80 px-4 py-2.5 rounded-sm text-sm focus:outline-none focus:border-white/50 transition-colors appearance-none cursor-pointer"
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
