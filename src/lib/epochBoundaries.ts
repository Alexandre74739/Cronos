const BOUNDARIES: Record<string, { start: number; end: number | null }> = {
  "prehistoire":          { start: -7000000, end: -3000 },
  "antiquite":            { start: -3000,    end: 476   },
  "moyen-age":            { start: 476,      end: 1492  },
  "temps-modernes":       { start: 1492,     end: 1789  },
  "epoque-contemporaine": { start: 1789,     end: null  },
};

export function getEpochBoundaries(slug: string) {
  return BOUNDARIES[slug] ?? null;
}
