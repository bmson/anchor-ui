// ============================================================
// Skill Generator — composes Markdown from AnchorConfig
// ============================================================

import type { AnchorConfig } from '../types.js';
import { STYLES } from '../data/styles/index.js';
import { DENSITIES } from '../data/densities/index.js';
import { RHYTHMS } from '../data/rhythms/index.js';
import {
  EMPHASIS_RULES,
  BALANCE_RULES,
  HARMONY_RULES,
  UNITY_RULES,
  VARIETY_RULES,
  HIERARCHY_RULES,
} from '../data/principles/index.js';

/**
 * Generate the spacing CSS token block from a density config.
 */
function generateSpacingTokens(config: AnchorConfig): string {
  const density = DENSITIES[config.density];
  const s = density.baseSpacing;
  return `  /* --- Spacing --- */
  --space-1: ${s[1]}px;
  --space-2: ${s[2]}px;
  --space-3: ${s[3]}px;
  --space-4: ${s[4]}px;
  --space-5: ${s[5]}px;
  --space-6: ${s[6]}px;
  --space-7: ${s[7]}px;
  --space-8: ${s[8]}px;
  --space-9: ${s[9]}px;
  --space-10: ${s[10]}px;`;
}

/**
 * Generate the type scale CSS tokens.
 */
function generateTypeTokens(config: AnchorConfig): string {
  const style = STYLES[config.style];
  const { ratio, base } = style.typeScale;

  // Calculate scale steps
  // Steps go: xs(-2), sm(-1), base(0), md(1), lg(2), xl(3), 2xl(4), 3xl(5)
  const steps = [-2, -1, 0, 1, 2, 3, 4, 5];
  const names = ['xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl'];
  const values = steps.map(step => {
    const px = base * Math.pow(ratio, step);
    return (px / base).toFixed(3);
  });

  const lines = names.map((name, i) => {
    const rem = values[i];
    const px = (parseFloat(rem) * base).toFixed(1);
    return `  --text-${name}: ${rem}rem;    /* ${px}px */`;
  });

  return `  /* --- Type Scale (${ratio} ratio, ${base}px base) --- */
  --font-family: ${style.fonts.family};
  --font-heading: ${style.fonts.heading};
  --font-mono: ${style.fonts.mono};
${lines.join('\n')}
  --line-height-tight: 1.2;
  --line-height-base: 1.5;
  --line-height-loose: 1.75;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --letter-spacing-tight: -0.01em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;`;
}

/**
 * Generate color CSS tokens.
 */
function generateColorTokens(config: AnchorConfig): string {
  const style = STYLES[config.style];
  const c = { ...style.colors, ...config.colors };

  return `  /* --- Colors --- */
  --color-primary: ${c.primary};
  --color-primary-hover: ${c.primaryHover};
  --color-primary-active: ${c.primaryActive};
  --color-primary-light: ${c.primaryLight};
  --color-on-primary: ${c.onPrimary};

  --color-surface: ${c.surface};
  --color-surface-raised: ${c.surfaceRaised};
  --color-surface-alt: ${c.surfaceAlt};
  --color-background: ${c.background};

  --color-text: ${c.text};
  --color-text-secondary: ${c.textSecondary};
  --color-text-hint: ${c.textHint};
  --color-text-disabled: ${c.border};

  --color-border: ${c.border};
  --color-border-strong: ${c.borderStrong};
  --color-divider: ${c.border};

  --color-success: ${c.success};
  --color-warning: ${c.warning};
  --color-error: ${c.error};
  --color-info: ${c.info};

  --color-focus: ${c.focus};
  --color-focus-ring: ${c.focus}66;`;
}

/**
 * Generate shadow tokens.
 */
function generateShadowTokens(config: AnchorConfig): string {
  const style = STYLES[config.style];
  if (Object.keys(style.shadows).length === 0) {
    return '  /* --- Shadows: None (flat design) --- */';
  }
  const lines = Object.entries(style.shadows).map(
    ([key, value]) => `  --shadow-${key}: ${value};`
  );
  return `  /* --- Shadows --- */\n${lines.join('\n')}`;
}

/**
 * Generate radii tokens.
 */
function generateRadiiTokens(config: AnchorConfig): string {
  const style = STYLES[config.style];
  return `  /* --- Border Radius --- */
  --radius-sm: ${style.radii.sm};
  --radius-md: ${style.radii.md};
  --radius-lg: ${style.radii.lg};
  --radius-full: ${style.radii.full};`;
}

/**
 * Generate transition tokens.
 */
function generateTransitionTokens(config: AnchorConfig): string {
  const style = STYLES[config.style];
  const t = style.transitions;
  let lines = `  /* --- Transitions --- */
  --duration-fast: ${t.fast};
  --duration-base: ${t.base};`;
  if (t.slow) {
    lines += `\n  --duration-slow: ${t.slow};`;
  }
  lines += `\n  --easing-standard: ${t.easing};`;
  return lines;
}

/**
 * Generate the full :root token block.
 */
function generateTokenBlock(config: AnchorConfig): string {
  const style = STYLES[config.style];
  const density = DENSITIES[config.density];

  let block = `\`\`\`css
/* === TOKENS: ${config.name} === */
:root {
${generateSpacingTokens(config)}

${generateTypeTokens(config)}

${generateColorTokens(config)}

${generateRadiiTokens(config)}

${generateShadowTokens(config)}

${generateTransitionTokens(config)}

  /* --- Control Sizing --- */
  --control-height: ${density.controlHeight}px;
  --control-height-lg: ${density.controlHeightLg}px;

  /* --- Layout --- */
  --max-width: 1200px;
  --gutter: var(--space-6);
  --columns: 12;${style.extraTokens || ''}
}

/* --- Utility: Screen-reader only --- */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
\`\`\``;

  return block;
}

/**
 * Generate the principles prose section.
 */
function generatePrinciples(config: AnchorConfig): string {
  return `### Emphasis: ${config.emphasis.charAt(0).toUpperCase() + config.emphasis.slice(1)}

${EMPHASIS_RULES[config.emphasis]}

### Balance: ${config.balance.charAt(0).toUpperCase() + config.balance.slice(1)}

${BALANCE_RULES[config.balance]}

### Harmony: ${config.harmony.charAt(0).toUpperCase() + config.harmony.slice(1)}

${HARMONY_RULES[config.harmony]}

### Unity: ${config.unity.charAt(0).toUpperCase() + config.unity.slice(1)}

${UNITY_RULES[config.unity]}

### Variety: ${config.variety.charAt(0).toUpperCase() + config.variety.slice(1)}

${VARIETY_RULES[config.variety]}

### Hierarchy: ${config.hierarchy.charAt(0).toUpperCase() + config.hierarchy.slice(1)}

${HIERARCHY_RULES[config.hierarchy]}`;
}

/**
 * Generate the validation checklist.
 */
function generateChecklist(config: AnchorConfig): string {
  const style = STYLES[config.style];
  const checks = [
    'All form-level controls (buttons, inputs, selects) use `height: var(--control-height)` with `box-sizing: border-box`',
    'All spacing values use tokens (`--space-1` through `--space-10`)',
    'All colors reference tokens — no raw hex, rgb, or hsl values',
    'All font sizes use type scale tokens',
    'All interactive elements have visible `:focus-visible` styles',
    'All form inputs have associated `<label>` elements',
    'All buttons use `<button>` elements, not divs or spans',
    'Color contrast meets WCAG ' + config.a11y,
    'All interactive elements meet 44×44px minimum touch target',
    'Component HTML structure matches the reference patterns in this skill',
    'No inline styles — all styling through CSS classes referencing tokens',
    'Semantic HTML elements used correctly (button, nav, main, header, footer, fieldset)',
    'ARIA attributes applied where applicable',
  ];

  // Add rhythm-specific check
  switch (config.rhythm) {
    case 'regular':
      checks.push('Regular rhythm maintained — equal spacing between sibling elements');
      break;
    case 'flowing':
      checks.push('Flowing rhythm maintained — related items tight, unrelated groups spacious');
      break;
    case 'progressive':
      checks.push('Progressive rhythm maintained — section spacing increases through the page');
      break;
  }

  // Add balance check
  if (config.balance === 'symmetric') {
    checks.push('Symmetric layout — centered content, equal columns');
  } else {
    checks.push('Asymmetric layout — primary content wider than secondary');
  }

  // Add style-specific checks
  if (style.notes) {
    for (const note of style.notes) {
      checks.push(note);
    }
  }

  return checks.map(c => `- [ ] ${c}`).join('\n');
}

/**
 * Generate the complete Markdown skill file.
 */
export function generateSkill(config: AnchorConfig): string {
  const style = STYLES[config.style];
  const rhythm = RHYTHMS[config.rhythm];

  const meta = `# UI Skill: ${config.name}

> **Style:** ${style.label}
> **Rhythm:** ${rhythm.label}
> **Whitespace:** ${config.density.charAt(0).toUpperCase() + config.density.slice(1)}
> **Emphasis:** ${config.emphasis.charAt(0).toUpperCase() + config.emphasis.slice(1)}
> **Balance:** ${config.balance.charAt(0).toUpperCase() + config.balance.slice(1)}
> **Harmony:** ${config.harmony.charAt(0).toUpperCase() + config.harmony.slice(1)}
> **Unity:** ${config.unity.charAt(0).toUpperCase() + config.unity.slice(1)}
> **Variety:** ${config.variety.charAt(0).toUpperCase() + config.variety.slice(1)}
> **Hierarchy:** ${config.hierarchy.charAt(0).toUpperCase() + config.hierarchy.slice(1)}
> **A11Y Level:** WCAG ${config.a11y}

When generating any UI, follow every instruction in this document exactly. Use the provided CSS tokens for all values — never use raw hex colors, pixel values, or font sizes outside the defined scales. Copy component patterns structurally. Consistency is paramount: the same component should look identical every time it is generated.`;

  const notes = style.notes && style.notes.length > 0
    ? '\n\n' + style.notes.map((n: string) => `**${n}**`).join('\n\n')
    : '';

  const tokens = `## Foundation Tokens

Copy this CSS block into the project's root stylesheet. All components reference these tokens exclusively.

${generateTokenBlock(config)}`;

  const layout = `## Layout & Rhythm

This skill uses **${rhythm.label.toLowerCase()} rhythm**.

${rhythm.rules}

### Grid

\`\`\`css
.layout-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gutter);
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--gutter);
}
${rhythm.css}
\`\`\`

${generatePrinciples(config)}`;

  const components = `## Component Patterns

This section will contain reference HTML + CSS for all components. Use the \`anchor generate-components\` command (coming soon) or reference the hand-authored skill files at https://github.com/anchorai/anchor-ai for complete component patterns.

Components to implement using the above tokens and principles:

- **Button** — primary, secondary, ghost, destructive; sizes sm/md/lg; loading state
- **Input** — text, email, password; label, helper text, error state
- **Textarea** — with character count
- **Select / Dropdown** — native style
- **Checkbox** — standalone and grouped
- **Radio** — grouped with fieldset/legend
- **Toggle / Switch** — on/off
- **Search** — with icon, pill-shaped
- **Notification / Toast** — info, success, warning, error; dismiss button
- **Navigation Bar** — sticky, responsive
- **Card** — with image, body, actions
- **Modal / Dialog** — using native dialog element, focus trap
- **Tooltip** — directional
- **Badge / Tag** — status, removable
- **Avatar** — image with initials fallback
- **Table** — sortable, responsive
- **Tabs** — horizontal with keyboard navigation
- **Breadcrumb** — with separator
- **Pagination** — numbered with ellipsis
- **Typography** — h1-h6, body, small, code, blockquote, links

Every component must:
- Use \`height: var(--control-height)\` with \`box-sizing: border-box\` for form-level controls
- Reference only token values (no raw colors, sizes, or spacing)
- Include all ARIA attributes specified in the a11y section
- Meet the emphasis, balance, and hierarchy settings defined above`;

  const a11y = `## Accessibility Rules

These are mandatory. Every generated component must satisfy all of the following:

1. **Contrast:** All text meets WCAG ${config.a11y} — minimum ${config.a11y === 'AAA' ? '7:1 normal text, 4.5:1 large text' : '4.5:1 normal text, 3:1 large text'}.
2. **Focus indicators:** Every interactive element has a visible \`:focus-visible\` style. Never \`outline: none\` without a replacement.
3. **Touch targets:** Minimum 44×44px for all interactive elements.
4. **Keyboard navigation:** All interactive elements reachable via Tab. Custom widgets implement arrow key navigation. Modals trap focus. Escape closes overlays.
5. **Semantic HTML:** \`<button>\` for actions, \`<a>\` for navigation, \`<nav>\`, \`<main>\`, \`<header>\`, \`<footer>\`, \`<fieldset>\`, \`<legend>\`.
6. **Labels:** Every form input has an associated \`<label>\` or \`aria-label\`. Placeholder text is never a substitute.
7. **ARIA:** \`aria-invalid="true"\` on invalid inputs. \`aria-describedby\` for helper/error text. \`aria-current="page"\` on active nav links. \`role="alert"\` on error notifications. \`aria-label\` on icon-only buttons.
8. **Images:** All \`<img>\` have \`alt\`. Decorative images use \`alt=""\`.
9. **Color:** Never convey information through color alone. Error states always include text or icon alongside color.`;

  const checklist = `## Validation Checklist

Before presenting UI code, verify every item:

${generateChecklist(config)}`;

  return [meta, notes, '---', tokens, '---', layout, '---', components, '---', a11y, '---', checklist]
    .filter(Boolean)
    .join('\n\n');
}

/**
 * Generate a standalone CSS tokens file.
 */
export function generateTokensCSS(config: AnchorConfig): string {
  // Extract just the CSS from the token block
  const skill = generateSkill(config);
  const match = skill.match(/```css\n([\s\S]*?)```/);
  if (match) {
    return `/* Anchor AI — Design Tokens: ${config.name} */\n/* Generated by anchor-ai — do not edit manually */\n\n${match[1].trim()}\n`;
  }
  return '/* Error: Could not extract tokens */';
}
