const COLORS: Record<string, string> = {
  "prehistoire": "#7A9E7E",
  "antiquite": "#C8902A",
  "moyen-age": "#7B4F9E",
  "temps-modernes": "#2E8A6E",
  "epoque-contemporaine": "#B03030",
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
