// ============================================================
// Whitespace Density — spacing multipliers
// ============================================================

import type { WhitespaceDensity, SpacingScale } from '../../types.js';

interface DensityConfig {
  label: string;
  description: string;
  multiplier: number;
  controlHeight: number;    // px
  controlHeightLg: number;  // px
  baseSpacing: SpacingScale;
}

const BASE_SCALE: SpacingScale = {
  1: 4, 2: 6, 3: 8, 4: 12, 5: 16, 6: 24, 7: 32, 8: 48, 9: 64, 10: 96,
};

function applyMultiplier(scale: SpacingScale, multiplier: number): SpacingScale {
  const result = {} as SpacingScale;
  for (const [key, value] of Object.entries(scale)) {
    result[Number(key) as keyof SpacingScale] = Math.round((value as number) * multiplier);
  }
  return result;
}

export const DENSITIES: Record<WhitespaceDensity, DensityConfig> = {
  compact: {
    label: 'Compact',
    description: 'Tight spacing, more content visible. Good for data-dense apps.',
    multiplier: 0.75,
    controlHeight: 44,
    controlHeightLg: 52,
    baseSpacing: applyMultiplier(BASE_SCALE, 0.75),
  },
  comfortable: {
    label: 'Comfortable',
    description: 'Balanced spacing. The default for most apps.',
    multiplier: 1,
    controlHeight: 44,
    controlHeightLg: 52,
    baseSpacing: BASE_SCALE,
  },
  spacious: {
    label: 'Spacious',
    description: 'Generous breathing room. Good for marketing and content-focused sites.',
    multiplier: 1.5,
    controlHeight: 48,
    controlHeightLg: 56,
    baseSpacing: applyMultiplier(BASE_SCALE, 1.5),
  },
};

export const DENSITY_CHOICES = Object.entries(DENSITIES).map(([key, d]) => ({
  title: d.label,
  description: d.description,
  value: key as WhitespaceDensity,
}));
