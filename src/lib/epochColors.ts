const COLORS: Record<string, string> = {
  "antiquite": "#C8902A",
  "moyen-age": "#7B4F9E",
  "renaissance": "#2E8A6E",
  "revolution-industrielle": "#4A7FA5",
  "epoque-moderne": "#B03030",
};

const FALLBACK = "#FA481C";

export function getEpochColor(slug: string): string {
  return COLORS[slug] ?? FALLBACK;
}

export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
