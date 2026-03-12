// ============================================================
// Design Principles — maps to prose rules in the skill
// ============================================================

import type {
  EmphasisLevel,
  BalanceType,
  HarmonyLevel,
  UnityLevel,
  VarietyLevel,
  HierarchyLevel,
} from '../../types.js';

// Each principle maps to a prose description the LLM will follow

export const EMPHASIS_RULES: Record<EmphasisLevel, string> = {
  subtle: 'CTAs differ from surrounding elements only by color. Same size, same weight. Let the color do the work.',
  moderate: 'CTAs are slightly larger or bolder than surrounding elements. More padding, bolder weight. Clear but not dominant.',
  strong: 'CTAs are significantly differentiated. Larger, bolder, possible shadow or glow. Clear visual dominance over surrounding elements.',
};

export const BALANCE_RULES: Record<BalanceType, string> = {
  symmetric: `- Center page content using max-width + margin-inline: auto
- Use equal column widths in grids when displaying related items
- Center headings and hero content
- Equal padding on left and right sides of all containers`,
  asymmetric: `- Primary content takes 2/3 of the width, secondary takes 1/3
- Headings are left-aligned, never centered
- Hero content is offset — not centered on the page
- Uneven padding is acceptable
- Visual weight is distributed unevenly for tension and energy`,
};

export const HARMONY_RULES: Record<HarmonyLevel, string> = {
  tight: 'Related elements match closely in styling — consistent padding, matching border treatments, uniform icon sizes. Visual consistency is maximized.',
  moderate: 'Related elements share key traits (color, radius) but can vary in secondary aspects (padding, spacing). Consistency with some flexibility.',
  loose: 'Related elements share a visual family but allow meaningful variation. Different component types can look quite different from each other.',
};

export const UNITY_RULES: Record<UnityLevel, string> = {
  strict: 'All patterns are followed exactly. No one-off components. Every card looks like every other card. Every button follows the same structure.',
  flexible: 'Patterns provide a starting point but can be adapted for context. A marketing card can differ from a dashboard card if the context demands it.',
};

export const VARIETY_RULES: Record<VarietyLevel, string> = {
  minimal: 'Visual differentiation between component types is subtle. Same radii, same shadows, same border treatment. The system feels unified and calm.',
  moderate: 'Components have distinct identities but share foundational tokens. Cards, buttons, and inputs look related but distinguishable.',
  expressive: 'Components can vary meaningfully. Bold typography choices, mixed border treatments, contrasting patterns between component types.',
};

export const HIERARCHY_RULES: Record<HierarchyLevel, string> = {
  flat: 'Gentle size progression between heading levels. h1 is only about 2x the size of body text. Nothing shouts.',
  moderate: 'Clear size progression. h1 is about 2.5-3x body text. Headings are obviously headings but not overwhelming.',
  steep: 'Large jumps between heading levels. h1 is 4x+ body text. The size contrast itself is a design element.',
};

export const EMPHASIS_CHOICES = Object.entries(EMPHASIS_RULES).map(([key, desc]) => ({
  title: key.charAt(0).toUpperCase() + key.slice(1),
  description: desc.slice(0, 80) + '…',
  value: key as EmphasisLevel,
}));

export const BALANCE_CHOICES = [
  { title: 'Symmetric', description: 'Centered, equal columns, mirrored spacing', value: 'symmetric' as BalanceType },
  { title: 'Asymmetric', description: 'Off-center, unequal columns, directional tension', value: 'asymmetric' as BalanceType },
];

export const HIERARCHY_CHOICES = Object.entries(HIERARCHY_RULES).map(([key, desc]) => ({
  title: key.charAt(0).toUpperCase() + key.slice(1),
  description: desc.slice(0, 80) + '…',
  value: key as HierarchyLevel,
}));
