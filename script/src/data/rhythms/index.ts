// ============================================================
// Rhythm Types
// ============================================================

import type { RhythmType } from '../../types.js';

interface RhythmConfig {
  label: string;
  description: string;
  css: string;   // Layout CSS block
  rules: string; // Prose description of rhythm rules for the skill
}

export const RHYTHMS: Record<RhythmType, RhythmConfig> = {
  regular: {
    label: 'Regular',
    description: 'Equal spacing between all sibling elements. Predictable, uniform cadence.',
    css: `
.layout-stack > * + * {
  margin-block-start: var(--space-6);
}

.layout-section {
  padding-block: var(--space-8);
}`,
    rules: `**Regular rhythm.** Equal spacing between siblings at the same level. Do not vary spacing between items at the same level.

- Inline spacing between sibling elements: \`var(--space-6)\`
- Section padding: \`var(--space-8)\` top and bottom
- Card internal padding: \`var(--space-6)\`
- Form field vertical gap: \`var(--space-5)\`
- Gap between label and input: \`var(--space-2)\`
- Gap between input and helper/error text: \`var(--space-1)\``,
  },

  flowing: {
    label: 'Flowing',
    description: 'Varied but proportional spacing. Related items cluster, groups breathe apart.',
    css: `
.layout-stack-tight > * + * { margin-block-start: var(--space-3); }
.layout-stack > * + * { margin-block-start: var(--space-5); }
.layout-stack-loose > * + * { margin-block-start: var(--space-7); }

.layout-section {
  padding-block: var(--space-8) var(--space-9);
}`,
    rules: `**Flowing rhythm.** Spacing varies contextually. Related items sit closer together, unrelated groups have more space.

- Tightly related elements (label to input, icon to text): \`var(--space-2)\` to \`var(--space-3)\`
- Related siblings (form fields, list items): \`var(--space-5)\`
- Grouped sections (form to actions, card body to footer): \`var(--space-6)\`
- Distinct sections: \`var(--space-8)\` to \`var(--space-9)\`
- Card internal padding: \`var(--space-6)\``,
  },

  progressive: {
    label: 'Progressive',
    description: 'Spacing escalates as you move through content. Creates directional momentum.',
    css: `
.layout-stack > * + * {
  margin-block-start: var(--space-5);
}

/* Progressive section spacing */
.layout-section:nth-child(1) { padding-block: var(--space-6); }
.layout-section:nth-child(2) { padding-block: var(--space-7); }
.layout-section:nth-child(3) { padding-block: var(--space-8); }
.layout-section:nth-child(n+4) { padding-block: var(--space-9); }`,
    rules: `**Progressive rhythm.** Spacing escalates as you move through content. Earlier/top sections are tighter, later/bottom sections breathe more.

- Section padding escalates: first \`var(--space-6)\`, second \`var(--space-7)\`, third \`var(--space-8)\`, fourth+ \`var(--space-9)\`
- Inline spacing between sibling elements: \`var(--space-5)\`
- Card internal padding: \`var(--space-5)\`
- Form field vertical gap: \`var(--space-4)\`
- Gap between label and input: \`var(--space-2)\``,
  },
};

export const RHYTHM_CHOICES = Object.entries(RHYTHMS).map(([key, r]) => ({
  title: r.label,
  description: r.description,
  value: key as RhythmType,
}));
