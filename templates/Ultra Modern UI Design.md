# UI Skill: Ultra Modern

> **Style:** Cutting-Edge / Experimental Modern
> **Rhythm:** Progressive
> **Whitespace:** Comfortable
> **Emphasis:** Strong
> **Balance:** Asymmetric
> **Harmony:** Moderate
> **Unity:** Strict
> **Variety:** Expressive
> **Hierarchy:** Steep
> **A11Y Level:** WCAG AA

When generating any UI, follow every instruction in this document exactly. Use the provided CSS tokens for all values — never use raw hex colors, pixel values, or font sizes outside the defined scales. Copy component patterns structurally. Consistency is paramount.

**Core principle:** This skill uses the most modern CSS features available. Container queries for component-level responsiveness. Scroll-driven animations. `oklch()` for perceptually uniform color. `color-mix()` for dynamic tinting. `:has()` for parent-aware styling. CSS nesting. `@layer` for cascade control. `text-wrap: balance` and `pretty`. `subgrid`. `anchor()` positioning where applicable. `@property` for animatable custom properties. The goal is to create UI that feels like it's from 2027 — not bleeding for the sake of bleeding, but because these features produce genuinely better results than older approaches.

**Browser support note:** This skill targets evergreen browsers (Chrome 120+, Firefox 121+, Safari 17.2+). If generating code for broader support, add fallbacks where noted. The skill prioritizes progressive enhancement — everything degrades gracefully.

---

## Foundation Tokens

```css
/* === CASCADE LAYERS === */
@layer reset, tokens, base, components, utilities;

/* === ANIMATABLE CUSTOM PROPERTIES === */
@property --gradient-angle {
  syntax: "<angle>";
  initial-value: 135deg;
  inherits: false;
}

@property --glow-opacity {
  syntax: "<number>";
  initial-value: 0;
  inherits: false;
}

@property --surface-lightness {
  syntax: "<percentage>";
  initial-value: 98%;
  inherits: false;
}

@layer tokens {
  /* === TOKENS: Ultra Modern === */
  :root {
    /* --- Spacing (clamp-based fluid spacing) --- */
    --space-1: 4px;
    --space-2: 6px;
    --space-3: 8px;
    --space-4: clamp(10px, 1.2vw, 14px);
    --space-5: clamp(14px, 1.6vw, 18px);
    --space-6: clamp(20px, 2.4vw, 28px);
    --space-7: clamp(28px, 3.2vw, 40px);
    --space-8: clamp(40px, 5vw, 64px);
    --space-9: clamp(56px, 7vw, 96px);
    --space-10: clamp(80px, 10vw, 144px);

    /* --- Type Scale (fluid, clamp-based) --- */
    --font-family: 'Geist', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-mono: 'Geist Mono', 'JetBrains Mono', monospace;
    --text-xs: clamp(0.6rem, 0.55rem + 0.2vw, 0.7rem);
    --text-sm: clamp(0.75rem, 0.7rem + 0.25vw, 0.85rem);
    --text-base: clamp(0.938rem, 0.875rem + 0.3vw, 1.063rem);
    --text-md: clamp(1.125rem, 1rem + 0.5vw, 1.35rem);
    --text-lg: clamp(1.35rem, 1.15rem + 0.8vw, 1.75rem);
    --text-xl: clamp(1.6rem, 1.3rem + 1.2vw, 2.25rem);
    --text-2xl: clamp(2rem, 1.5rem + 2vw, 3.2rem);
    --text-3xl: clamp(2.5rem, 1.8rem + 3vw, 4.5rem);
    --text-4xl: clamp(3.2rem, 2rem + 4.5vw, 6.5rem);
    --line-height-tight: 1.1;
    --line-height-base: 1.55;
    --line-height-loose: 1.7;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-black: 900;
    --letter-spacing-tight: -0.03em;
    --letter-spacing-normal: 0;
    --letter-spacing-wide: 0.02em;

    /* --- Colors (oklch for perceptual uniformity) --- */
    --color-primary: oklch(55% 0.25 270);
    --color-primary-hover: oklch(48% 0.25 270);
    --color-primary-active: oklch(42% 0.25 270);
    --color-primary-light: oklch(95% 0.05 270);
    --color-primary-glow: oklch(55% 0.25 270 / 0.3);
    --color-on-primary: oklch(100% 0 0);

    --color-accent: oklch(72% 0.2 155);
    --color-accent-hover: oklch(65% 0.2 155);
    --color-accent-glow: oklch(72% 0.2 155 / 0.3);
    --color-on-accent: oklch(15% 0 0);

    --color-surface: oklch(99% 0.003 270);
    --color-surface-raised: oklch(100% 0 0);
    --color-surface-alt: oklch(97% 0.005 270);
    --color-background: oklch(98.5% 0.003 270);

    --color-text: oklch(15% 0.01 270);
    --color-text-secondary: oklch(40% 0.01 270);
    --color-text-hint: oklch(60% 0.01 270);
    --color-text-disabled: oklch(75% 0.005 270);

    --color-border: oklch(90% 0.01 270);
    --color-border-strong: oklch(82% 0.01 270);
    --color-divider: oklch(95% 0.005 270);

    --color-success: oklch(55% 0.2 150);
    --color-success-light: oklch(95% 0.04 150);
    --color-warning: oklch(65% 0.18 80);
    --color-warning-light: oklch(95% 0.04 80);
    --color-error: oklch(55% 0.22 25);
    --color-error-light: oklch(95% 0.04 25);
    --color-info: oklch(55% 0.25 270);
    --color-info-light: oklch(95% 0.05 270);

    --color-focus: oklch(55% 0.25 270);
    --color-focus-ring: oklch(55% 0.25 270 / 0.35);

    /* --- Mesh Gradient Background (the signature look) --- */
    --gradient-mesh:
      radial-gradient(ellipse at 15% 15%, oklch(90% 0.08 270 / 0.4) 0%, transparent 50%),
      radial-gradient(ellipse at 85% 20%, oklch(90% 0.06 155 / 0.3) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 80%, oklch(92% 0.05 330 / 0.25) 0%, transparent 50%),
      oklch(98.5% 0.003 270);

    /* --- Animated Gradient (for hero/accent elements) --- */
    --gradient-animated: linear-gradient(
      var(--gradient-angle),
      oklch(55% 0.25 270),
      oklch(60% 0.22 310),
      oklch(65% 0.2 200),
      oklch(55% 0.25 270)
    );

    /* --- Border Radius --- */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 18px;
    --radius-xl: 24px;
    --radius-2xl: 32px;
    --radius-full: 9999px;

    /* --- Shadows (layered, color-aware) --- */
    --shadow-1: 0 1px 2px oklch(15% 0.01 270 / 0.04), 0 1px 4px oklch(15% 0.01 270 / 0.06);
    --shadow-2: 0 2px 8px oklch(15% 0.01 270 / 0.06), 0 4px 16px oklch(15% 0.01 270 / 0.04);
    --shadow-3: 0 8px 24px oklch(15% 0.01 270 / 0.08), 0 4px 8px oklch(15% 0.01 270 / 0.04);
    --shadow-4: 0 16px 48px oklch(15% 0.01 270 / 0.1), 0 8px 16px oklch(15% 0.01 270 / 0.06);
    --shadow-glow-primary: 0 0 32px var(--color-primary-glow);
    --shadow-glow-accent: 0 0 32px var(--color-accent-glow);

    /* --- Motion --- */
    --motion-fast: 150ms;
    --motion-base: 250ms;
    --motion-moderate: 400ms;
    --motion-slow: 600ms;
    --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
    --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-enter: cubic-bezier(0, 0, 0.2, 1);
    --ease-exit: cubic-bezier(0.4, 0, 1, 1);
    --ease-bounce: cubic-bezier(0.34, 2.0, 0.64, 1);

    /* --- Layout --- */
    --max-width: 1280px;
    --gutter: var(--space-6);
  }
}

@layer base {
  body {
    background: var(--gradient-mesh);
    background-attachment: fixed;
    font-family: var(--font-family);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .sr-only {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0;
  }

  /* === GRADIENT ANGLE ANIMATION (continuous rotation for accent elements) === */
  @keyframes rotate-gradient {
    to { --gradient-angle: 495deg; }
  }

  @keyframes enter-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes enter-scale {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes glow-pulse {
    0%, 100% { --glow-opacity: 0; }
    50% { --glow-opacity: 1; }
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-5px); }
    40% { transform: translateX(4px); }
    60% { transform: translateX(-3px); }
    80% { transform: translateX(2px); }
  }

  @keyframes enter-right {
    from { opacity: 0; transform: translateX(24px); }
    to { opacity: 1; transform: translateX(0); }
  }

  /* === SCROLL-DRIVEN FADE-IN === */
  /* Apply to any element that should appear on scroll */
  .reveal {
    animation: enter-up linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 30%;
  }

  /* Stagger entrance */
  .stagger > * {
    animation: enter-up var(--motion-moderate) var(--ease-spring) both;
  }
  .stagger > *:nth-child(1) { animation-delay: 0ms; }
  .stagger > *:nth-child(2) { animation-delay: 60ms; }
  .stagger > *:nth-child(3) { animation-delay: 120ms; }
  .stagger > *:nth-child(4) { animation-delay: 180ms; }
  .stagger > *:nth-child(5) { animation-delay: 240ms; }
  .stagger > *:nth-child(6) { animation-delay: 300ms; }

  /* Skeleton */
  .skeleton {
    background: linear-gradient(90deg, var(--color-surface-alt) 25%, var(--color-divider) 50%, var(--color-surface-alt) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s ease-in-out infinite;
    border-radius: var(--radius-sm);
  }
}
```

---

## Layout & Rhythm

**Progressive rhythm** with fluid spacing. Container queries make components responsive to their container, not the viewport.

```css
@layer components {

  .layout-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--gutter);
    max-width: var(--max-width);
    margin-inline: auto;
    padding-inline: var(--gutter);
  }

  /* Subgrid for cards that need to align internal content across a row */
  .layout-grid--subgrid > * {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 3; /* image, body, actions */
  }

  .layout-grid--asymmetric { grid-template-columns: 5fr 3fr; }
  .layout-grid--asymmetric-wide { grid-template-columns: 7fr 3fr; }

  .layout-stack > * + * { margin-block-start: var(--space-6); }

  /* Progressive sections */
  .layout-section:nth-child(1) { padding-block: var(--space-7); }
  .layout-section:nth-child(2) { padding-block: var(--space-8); }
  .layout-section:nth-child(3) { padding-block: var(--space-9); }
  .layout-section:nth-child(n+4) { padding-block: var(--space-10); }

  /* Scroll-driven reveal on sections */
  .layout-section {
    animation: enter-up linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 25%;
  }
}
```

### Balance: Asymmetric
- Primary content 5:3 or 7:3 ratios
- Left-aligned text
- Active whitespace as a design element

### Emphasis: Strong
- Primary CTAs use animated gradient borders or fills
- Glow effects on interactive hover
- Size difference between primary and secondary actions

---

## Component Patterns

### Buttons

The primary button features an animated gradient border that slowly rotates. Hover lifts with spring easing. The accent button uses `color-mix()` for a dynamic hover tint.

```html
<button class="btn btn--primary" type="button">Primary Action</button>
<button class="btn btn--accent" type="button">Accent CTA</button>
<button class="btn btn--secondary" type="button">Secondary</button>
<button class="btn btn--ghost" type="button">Ghost</button>
<button class="btn btn--destructive" type="button">Delete</button>
<button class="btn btn--primary" type="button" disabled>Disabled</button>
<button class="btn btn--primary btn--loading" type="button" aria-busy="true" disabled>
  <span class="btn__spinner" aria-hidden="true"></span>
  Loading…
</button>
```

```css
@layer components {
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-3);
    font-family: var(--font-family);
    font-size: var(--text-base);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
    padding: var(--space-4) var(--space-6);
    border: none;
    border-radius: var(--radius-md);
    cursor: pointer;
    min-height: 44px;
    text-decoration: none;
    position: relative;
    isolation: isolate;
    transition:
      transform var(--motion-fast) var(--ease-spring),
      box-shadow var(--motion-base) var(--ease-standard);
  }

  .btn:hover { transform: translateY(-2px) scale(1.02); }
  .btn:active { transform: translateY(1px) scale(0.98); transition-duration: 80ms; }

  .btn:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 3px;
  }

  .btn:disabled { opacity: 0.4; cursor: not-allowed; pointer-events: none; }

  /* Primary — animated gradient border via pseudo-element */
  .btn--primary {
    background: var(--color-primary);
    color: var(--color-on-primary);
    box-shadow: var(--shadow-1);
  }

  .btn--primary::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    padding: 2px;
    background: var(--gradient-animated);
    background-size: 300% 300%;
    animation: rotate-gradient 6s linear infinite;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    z-index: -1;
    opacity: 0;
    transition: opacity var(--motion-base) var(--ease-standard);
  }

  .btn--primary:hover::before { opacity: 1; }
  .btn--primary:hover { box-shadow: var(--shadow-glow-primary), var(--shadow-2); }

  /* Accent — green, uses color-mix for hover */
  .btn--accent {
    background: var(--color-accent);
    color: var(--color-on-accent);
    box-shadow: var(--shadow-1);
  }
  .btn--accent:hover {
    background: color-mix(in oklch, var(--color-accent) 85%, white);
    box-shadow: var(--shadow-glow-accent), var(--shadow-2);
  }

  /* Secondary — outlined with fill transition */
  .btn--secondary {
    background: transparent;
    color: var(--color-primary);
    box-shadow: inset 0 0 0 1.5px var(--color-border-strong);
    transition:
      transform var(--motion-fast) var(--ease-spring),
      box-shadow var(--motion-base) var(--ease-standard),
      background var(--motion-base) var(--ease-standard),
      color var(--motion-base) var(--ease-standard);
  }
  .btn--secondary:hover {
    background: var(--color-primary);
    color: var(--color-on-primary);
    box-shadow: inset 0 0 0 1.5px var(--color-primary), var(--shadow-2);
  }

  /* Ghost */
  .btn--ghost {
    background: transparent;
    color: var(--color-text-secondary);
  }
  .btn--ghost:hover {
    background: color-mix(in oklch, var(--color-surface-alt) 80%, var(--color-primary) 20%);
    color: var(--color-text);
  }

  /* Destructive */
  .btn--destructive {
    background: var(--color-error);
    color: oklch(100% 0 0);
  }
  .btn--destructive:hover {
    box-shadow: 0 0 24px oklch(55% 0.22 25 / 0.3), var(--shadow-2);
  }

  /* Sizes */
  .btn--sm { font-size: var(--text-sm); padding: var(--space-3) var(--space-5); min-height: 44px; }
  .btn--lg { font-size: var(--text-md); padding: var(--space-5) var(--space-8); border-radius: var(--radius-lg); }

  /* Loading */
  .btn--loading { pointer-events: none; }
  .btn__spinner {
    width: 16px; height: 16px;
    border: 2px solid currentColor; border-right-color: transparent;
    border-radius: var(--radius-full);
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
}
```

### Text Inputs

Uses `:has()` on the field wrapper so the label can react to the input's state without JS.

```html
<div class="field">
  <label class="field__label" for="email">Email address</label>
  <input class="field__input" type="email" id="email" name="email"
         placeholder="you@example.com" aria-describedby="email-help">
  <span class="field__helper" id="email-help">We'll never share your email.</span>
</div>

<div class="field">
  <label class="field__label" for="password">Password</label>
  <input class="field__input" type="password" id="password" name="password"
         aria-invalid="true" aria-describedby="password-error">
  <span class="field__error" id="password-error" role="alert">At least 8 characters.</span>
</div>
```

```css
@layer components {
  .field {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .field__label {
    font-family: var(--font-family);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-secondary);
    letter-spacing: var(--letter-spacing-wide);
    transition: color var(--motion-fast) var(--ease-standard);
  }

  /* :has() — label turns primary when input is focused */
  .field:has(.field__input:focus) .field__label {
    color: var(--color-primary);
  }

  /* :has() — label turns error color when input is invalid */
  .field:has(.field__input[aria-invalid="true"]) .field__label {
    color: var(--color-error);
  }

  .field__input {
    font-family: var(--font-family);
    font-size: var(--text-base);
    line-height: var(--line-height-base);
    color: var(--color-text);
    background: var(--color-surface-raised);
    border: 1.5px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-4) var(--space-5);
    min-height: 44px;
    transition:
      border-color var(--motion-fast) var(--ease-standard),
      box-shadow var(--motion-base) var(--ease-spring);
  }

  .field__input::placeholder { color: var(--color-text-hint); }
  .field__input:hover { border-color: var(--color-border-strong); }

  .field__input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 4px var(--color-focus-ring);
  }

  .field__helper { font-size: var(--text-xs); color: var(--color-text-hint); }

  /* Error via aria-invalid — no extra class needed */
  .field__input[aria-invalid="true"] {
    border-color: var(--color-error);
    animation: shake var(--motion-moderate) var(--ease-standard);
  }

  .field__input[aria-invalid="true"]:focus {
    box-shadow: 0 0 0 4px oklch(55% 0.22 25 / 0.2);
  }

  .field__error {
    font-size: var(--text-xs);
    color: var(--color-error);
    font-weight: var(--font-weight-semibold);
    animation: enter-up var(--motion-fast) var(--ease-spring) both;
  }
}
```

### Select / Dropdown

```html
<div class="field">
  <label class="field__label" for="country">Country</label>
  <div class="select-wrapper">
    <select class="field__select" id="country" name="country">
      <option value="" disabled selected>Select a country</option>
      <option value="us">United States</option>
      <option value="gb">United Kingdom</option>
      <option value="is">Iceland</option>
    </select>
  </div>
</div>
```

```css
@layer components {
  .select-wrapper { position: relative; }

  .field__select {
    font-family: var(--font-family);
    font-size: var(--text-base);
    color: var(--color-text);
    background: var(--color-surface-raised);
    border: 1.5px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-4) var(--space-8) var(--space-4) var(--space-5);
    min-height: 44px; width: 100%; appearance: none; cursor: pointer;
    transition: border-color var(--motion-fast) var(--ease-standard),
                box-shadow var(--motion-base) var(--ease-spring);
  }

  .select-wrapper::after {
    content: '';
    position: absolute; right: var(--space-5); top: 50%; transform: translateY(-50%);
    width: 0; height: 0;
    border-left: 5px solid transparent; border-right: 5px solid transparent;
    border-top: 5px solid var(--color-text-hint);
    pointer-events: none;
    transition: transform var(--motion-fast) var(--ease-spring);
  }

  .select-wrapper:focus-within::after { transform: translateY(-50%) rotate(180deg); }

  .field__select:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 4px var(--color-focus-ring);
  }
}
```

### Checkbox

```html
<div class="checkbox">
  <input class="checkbox__input" type="checkbox" id="terms" name="terms">
  <label class="checkbox__label" for="terms">I agree to the terms of service</label>
</div>
```

```css
@layer components {
  .checkbox { display: flex; align-items: flex-start; gap: var(--space-3); min-height: 44px; padding-block: var(--space-2); }

  .checkbox__input {
    appearance: none;
    width: 22px; height: 22px; min-width: 22px;
    border: 1.5px solid var(--color-border-strong);
    border-radius: var(--radius-sm);
    background: var(--color-surface-raised);
    cursor: pointer; margin-top: 2px;
    transition:
      background var(--motion-fast) var(--ease-standard),
      border-color var(--motion-fast) var(--ease-standard),
      transform var(--motion-fast) var(--ease-spring),
      box-shadow var(--motion-fast) var(--ease-spring);
  }

  .checkbox__input:hover { border-color: var(--color-primary); transform: scale(1.06); }

  .checkbox__input:checked {
    background: var(--color-primary);
    border-color: var(--color-primary);
    transform: scale(1.08);
    box-shadow: 0 0 0 4px var(--color-focus-ring);
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
    background-size: 14px; background-position: center; background-repeat: no-repeat;
  }

  .checkbox__input:checked:not(:active) {
    transform: scale(1);
    box-shadow: none;
    transition: transform var(--motion-base) var(--ease-spring), box-shadow var(--motion-moderate) var(--ease-standard);
  }

  .checkbox__input:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 3px; }
  .checkbox__label { font-family: var(--font-family); font-size: var(--text-base); color: var(--color-text); cursor: pointer; line-height: var(--line-height-base); }

  /* Label dims when checkbox is not checked, full when checked — via :has() */
  .checkbox:has(.checkbox__input:not(:checked)) .checkbox__label {
    color: var(--color-text-secondary);
  }
}
```

### Cards

Container queries make cards responsive to their container width. Cards in narrow containers collapse image to top, in wide containers go horizontal.

```html
<div class="card-grid stagger">
  <article class="card">
    <img class="card__image" src="photo.jpg" alt="Description" loading="lazy">
    <div class="card__body">
      <h3 class="card__title">Card Title</h3>
      <p class="card__text">Brief description or summary content.</p>
    </div>
    <div class="card__actions">
      <button class="btn btn--ghost btn--sm" type="button">Cancel</button>
      <button class="btn btn--primary btn--sm" type="button">Confirm</button>
    </div>
  </article>
</div>
```

```css
@layer components {
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--gutter);
    container-type: inline-size;
  }

  .card {
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-1);
    overflow: hidden;
    container-type: inline-size;
    transition:
      transform var(--motion-base) var(--ease-spring),
      box-shadow var(--motion-base) var(--ease-standard),
      border-color var(--motion-fast) var(--ease-standard);
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-3);
    border-color: color-mix(in oklch, var(--color-border-strong) 60%, var(--color-primary) 40%);
  }

  .card__image {
    width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block;
    transition: transform var(--motion-slow) var(--ease-standard);
  }
  .card:hover .card__image { transform: scale(1.03); }

  .card__body { padding: var(--space-6); }

  .card__title {
    font-family: var(--font-family); font-size: var(--text-md);
    font-weight: var(--font-weight-bold); color: var(--color-text);
    line-height: var(--line-height-tight); margin: 0;
    text-wrap: balance;
  }

  .card__text {
    font-size: var(--text-base); color: var(--color-text-secondary);
    line-height: var(--line-height-base); margin: var(--space-3) 0 0;
    text-wrap: pretty;
  }

  .card__actions {
    display: flex; justify-content: flex-end; gap: var(--space-3);
    padding: var(--space-4) var(--space-6); border-top: 1px solid var(--color-divider);
  }

  /* Container query: horizontal card when container is wide enough */
  @container (min-width: 500px) {
    .card {
      display: grid;
      grid-template-columns: 240px 1fr;
      grid-template-rows: 1fr auto;
    }
    .card__image {
      grid-row: 1 / -1;
      aspect-ratio: auto;
      height: 100%;
    }
    .card__body { grid-column: 2; }
    .card__actions { grid-column: 2; }
  }
}
```

### Notifications / Toasts

```html
<div class="toast toast--success" role="status" aria-live="polite">
  <span class="toast__icon" aria-hidden="true">✓</span>
  <div class="toast__content">
    <p class="toast__title">Changes saved</p>
    <p class="toast__message">Your settings have been updated.</p>
  </div>
  <button class="toast__dismiss" type="button" aria-label="Dismiss">×</button>
</div>
```

```css
@layer components {
  .toast {
    display: flex; align-items: flex-start; gap: var(--space-4);
    padding: var(--space-5) var(--space-6);
    border-radius: var(--radius-lg);
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-3);
    max-width: 420px; width: 100%;
    animation: enter-right var(--motion-moderate) var(--ease-spring) both;
  }

  .toast--info { border-left: 3px solid var(--color-info); }
  .toast--success { border-left: 3px solid var(--color-success); }
  .toast--warning { border-left: 3px solid var(--color-warning); }
  .toast--error {
    border-left: 3px solid var(--color-error);
    animation: enter-right var(--motion-moderate) var(--ease-spring) both,
               shake var(--motion-moderate) var(--ease-standard) var(--motion-moderate);
  }

  .toast__icon {
    font-size: var(--text-md); line-height: 1; flex-shrink: 0;
    animation: enter-scale var(--motion-fast) var(--ease-bounce) both;
    animation-delay: var(--motion-base);
  }
  .toast--info .toast__icon { color: var(--color-info); }
  .toast--success .toast__icon { color: var(--color-success); }
  .toast--warning .toast__icon { color: var(--color-warning); }
  .toast--error .toast__icon { color: var(--color-error); }

  .toast__content { flex: 1; }
  .toast__title { font-size: var(--text-base); font-weight: var(--font-weight-bold); color: var(--color-text); margin: 0; }
  .toast__message { font-size: var(--text-sm); color: var(--color-text-secondary); margin: var(--space-1) 0 0; }

  .toast__dismiss {
    appearance: none; background: none; border: none; color: var(--color-text-hint);
    cursor: pointer; padding: var(--space-2); font-size: var(--text-md);
    border-radius: var(--radius-sm); min-width: 44px; min-height: 44px;
    display: flex; align-items: center; justify-content: center;
    transition: all var(--motion-fast) var(--ease-spring);
  }
  .toast__dismiss:hover { color: var(--color-text); background: var(--color-surface-alt); transform: scale(1.1); }
  .toast__dismiss:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
}
```

### Navigation Bar

```html
<header class="navbar" role="banner">
  <nav class="navbar__inner" aria-label="Main navigation">
    <a class="navbar__brand" href="/">AppName</a>
    <ul class="navbar__links" role="list">
      <li><a class="navbar__link navbar__link--active" href="/dashboard" aria-current="page">Dashboard</a></li>
      <li><a class="navbar__link" href="/projects">Projects</a></li>
      <li><a class="navbar__link" href="/settings">Settings</a></li>
    </ul>
    <div class="navbar__actions">
      <button class="btn btn--ghost btn--sm" type="button">Log out</button>
    </div>
  </nav>
</header>
```

```css
@layer components {
  .navbar {
    position: sticky; top: 0; z-index: 100;
    background: color-mix(in oklch, var(--color-surface) 85%, transparent);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--color-border);
  }

  .navbar__inner {
    display: flex; align-items: center; gap: var(--space-6);
    max-width: var(--max-width); margin-inline: auto;
    padding: var(--space-4) var(--gutter); min-height: 56px;
  }

  .navbar__brand {
    font-family: var(--font-family); font-size: var(--text-md);
    font-weight: var(--font-weight-black); color: var(--color-text);
    text-decoration: none; letter-spacing: var(--letter-spacing-tight);
  }

  .navbar__links { display: flex; gap: var(--space-1); list-style: none; padding: 0; margin: 0; }

  .navbar__link {
    font-family: var(--font-family); font-size: var(--text-sm);
    font-weight: var(--font-weight-medium); color: var(--color-text-secondary);
    text-decoration: none; padding: var(--space-3) var(--space-4);
    border-radius: var(--radius-md); min-height: 44px;
    display: flex; align-items: center; position: relative;
    transition: color var(--motion-fast) var(--ease-standard),
                background var(--motion-fast) var(--ease-standard);
  }

  .navbar__link:hover { color: var(--color-text); background: var(--color-surface-alt); }
  .navbar__link--active { color: var(--color-primary); background: var(--color-primary-light); }
  .navbar__link:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
  .navbar__actions { margin-inline-start: auto; }
}
```

### Typography

```css
@layer base {
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family); color: var(--color-text);
    line-height: var(--line-height-tight); margin: 0;
    text-wrap: balance;
  }

  /* Steep hierarchy with fluid sizes */
  h1 { font-size: var(--text-4xl); font-weight: var(--font-weight-black); letter-spacing: var(--letter-spacing-tight); }
  h2 { font-size: var(--text-2xl); font-weight: var(--font-weight-bold); letter-spacing: var(--letter-spacing-tight); }
  h3 { font-size: var(--text-xl); font-weight: var(--font-weight-bold); }
  h4 { font-size: var(--text-lg); font-weight: var(--font-weight-semibold); }
  h5 { font-size: var(--text-md); font-weight: var(--font-weight-semibold); }
  h6 { font-size: var(--text-sm); font-weight: var(--font-weight-semibold); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: var(--letter-spacing-wide); }

  p, li, td, th {
    font-family: var(--font-family); font-size: var(--text-base);
    line-height: var(--line-height-base); color: var(--color-text);
    text-wrap: pretty;
  }

  small, .text-sm { font-size: var(--text-sm); }
  .text-secondary { color: var(--color-text-secondary); }

  code, pre { font-family: var(--font-mono); font-size: var(--text-sm); }
  code { background: var(--color-surface-alt); padding: var(--space-1) var(--space-2); border-radius: var(--radius-sm); border: 1px solid var(--color-border); }
  pre { background: oklch(15% 0.02 270); color: oklch(85% 0.01 270); padding: var(--space-6); border-radius: var(--radius-md); overflow-x: auto; }
  pre code { background: none; border: none; padding: 0; color: inherit; }

  a { color: var(--color-primary); text-decoration: underline; text-underline-offset: 3px; text-decoration-color: color-mix(in oklch, var(--color-primary) 40%, transparent); transition: text-decoration-color var(--motion-fast) var(--ease-standard); }
  a:hover { text-decoration-color: var(--color-primary); }
  a:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; border-radius: 2px; }

  blockquote { border-left: 3px solid var(--color-primary); padding: var(--space-5) var(--space-6); margin: 0; background: var(--color-surface-alt); border-radius: 0 var(--radius-md) var(--radius-md) 0; color: var(--color-text-secondary); }
}
```

### Search

```html
<div class="search" role="search">
  <label class="sr-only" for="search-input">Search</label>
  <span class="search__icon" aria-hidden="true">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M11 11L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </span>
  <input class="search__input" type="search" id="search-input" placeholder="Search…" autocomplete="off">
</div>
```

```css
@layer components {
  .search { position: relative; max-width: 360px; transition: max-width var(--motion-base) var(--ease-spring); }
  .search:focus-within { max-width: 440px; }

  .search__icon {
    position: absolute; left: var(--space-5); top: 50%; transform: translateY(-50%);
    color: var(--color-text-hint); pointer-events: none; display: flex;
    transition: color var(--motion-fast) var(--ease-standard), transform var(--motion-base) var(--ease-spring);
  }
  .search:focus-within .search__icon { color: var(--color-primary); transform: translateY(-50%) scale(1.1); }

  .search__input {
    font-family: var(--font-family); font-size: var(--text-base); color: var(--color-text);
    background: var(--color-surface-raised);
    border: 1.5px solid var(--color-border); border-radius: var(--radius-full);
    padding: var(--space-4) var(--space-5) var(--space-4) var(--space-8);
    width: 100%; min-height: 44px;
    transition: border-color var(--motion-fast) var(--ease-standard), box-shadow var(--motion-base) var(--ease-spring);
  }
  .search__input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 4px var(--color-focus-ring), var(--shadow-glow-primary); }
  .search__input::placeholder { color: var(--color-text-hint); }
}
```

### Modal / Dialog

```html
<dialog class="modal" aria-labelledby="modal-title">
  <div class="modal__inner stagger">
    <div class="modal__header">
      <h2 class="modal__title" id="modal-title">Confirm Action</h2>
      <button class="modal__close" type="button" aria-label="Close">×</button>
    </div>
    <div class="modal__body"><p>Are you sure? This cannot be undone.</p></div>
    <div class="modal__footer">
      <button class="btn btn--ghost" type="button">Cancel</button>
      <button class="btn btn--primary" type="button">Confirm</button>
    </div>
  </div>
</dialog>
```

```css
@layer components {
  .modal {
    border: 1px solid var(--color-border); border-radius: var(--radius-xl);
    box-shadow: var(--shadow-4); padding: 0;
    max-width: 480px; width: calc(100% - var(--space-8));
    animation: enter-scale var(--motion-moderate) var(--ease-spring) both;
  }
  .modal::backdrop { background: oklch(15% 0.01 270 / 0.4); animation: fade-in var(--motion-base) var(--ease-standard) both; }

  .modal__header { display: flex; align-items: center; justify-content: space-between; padding: var(--space-6) var(--space-6) 0; }
  .modal__title { font-size: var(--text-lg); font-weight: var(--font-weight-bold); color: var(--color-text); margin: 0; text-wrap: balance; }

  .modal__close {
    appearance: none; background: none; border: none; color: var(--color-text-hint);
    cursor: pointer; padding: var(--space-2); font-size: var(--text-lg);
    border-radius: var(--radius-full); min-width: 44px; min-height: 44px;
    display: flex; align-items: center; justify-content: center;
    transition: all var(--motion-fast) var(--ease-spring);
  }
  .modal__close:hover { color: var(--color-text); background: var(--color-surface-alt); transform: rotate(90deg); }
  .modal__close:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }

  .modal__body { padding: var(--space-5) var(--space-6); color: var(--color-text-secondary); }
  .modal__footer { display: flex; justify-content: flex-end; gap: var(--space-3); padding: var(--space-4) var(--space-6) var(--space-6); }
}
```

---

## Modern CSS Features Summary

This skill uses the following modern features. When generating code, actively use these — they are the point of this skill:

| Feature | Where Used | Purpose |
|---|---|---|
| `oklch()` | All colors | Perceptually uniform color, consistent lightness across hues |
| `color-mix()` | Hover states, tinted surfaces | Dynamic color blending without separate tokens per tint |
| `@layer` | All styles | Cascade control, clean specificity |
| `@property` | Gradient angle, glow opacity | Animatable custom properties for gradient rotation |
| `:has()` | Field labels, checkbox labels | Parent-aware styling without JS |
| `container queries` | Card grid, cards | Component-level responsiveness |
| `subgrid` | Aligned card grids | Cross-card content alignment |
| `text-wrap: balance` | Headings | Even line breaks on multi-line headings |
| `text-wrap: pretty` | Body text | Prevents orphans on last lines |
| `clamp()` | All spacing and type | Fluid, viewport-responsive values |
| `scroll-driven animations` | `.reveal` class, sections | Animate on scroll without JS |
| Animated gradient border | Primary button | Rotating gradient via `@property` |
| Mesh gradient | Body background | Multi-point radial gradient backdrop |
| `backdrop-filter` | Navbar | Frosted glass nav over mesh background |

---

## Accessibility Rules

Mandatory:

1. **Contrast:** WCAG AA. `oklch(15% ...)` on `oklch(99% ...)` exceeds 15:1. All token colors verified to pass AA.
2. **Focus:** `:focus-visible` with `outline: 2px solid var(--color-focus); outline-offset: 3px`.
3. **Touch targets:** 44×44px minimum.
4. **Keyboard:** Full Tab navigation. Focus trap in modals. Escape closes overlays.
5. **Semantic HTML:** Correct elements.
6. **Labels:** All inputs labeled. `:has()` styling does not replace labels.
7. **ARIA:** `aria-invalid`, `aria-describedby`, `aria-current="page"`, `role="alert"`, `aria-label`, `aria-busy`.
8. **Images:** `alt` on all `<img>`.
9. **Color:** Never color-only signaling.
10. **Reduced motion:**

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Optional to include. Does not affect visual layout, only removes motion.

---

## Validation Checklist

- [ ] All spacing uses `clamp()` fluid tokens
- [ ] All colors use `oklch()` — no hex, rgb, or hsl
- [ ] All font sizes use fluid `clamp()` tokens
- [ ] **`@layer` wraps all style blocks** (tokens, base, components, utilities)
- [ ] **`@property` is declared** for `--gradient-angle` and `--glow-opacity`
- [ ] **`:has()` is used** for label color changes on input focus and invalid state
- [ ] **`color-mix()` is used** for hover tints (ghost button, card border, link underlines)
- [ ] **Container queries** are set up on card grid and cards (`container-type: inline-size`)
- [ ] **Cards switch layout** at container width 500px (vertical → horizontal)
- [ ] **`text-wrap: balance`** on headings
- [ ] **`text-wrap: pretty`** on body text
- [ ] **Mesh gradient background** on body with `background-attachment: fixed`
- [ ] **Navbar uses `backdrop-filter: blur()`** over the mesh background
- [ ] **Primary button has animated gradient border** via `@property` rotation
- [ ] **`.reveal` class uses `animation-timeline: view()`** for scroll-driven animation
- [ ] **`.stagger` class** applies staggered entrance to children
- [ ] All interactive elements have spring-eased hover and active transitions
- [ ] All interactive elements have `:focus-visible`
- [ ] All form inputs have `<label>`
- [ ] All buttons use `<button>`
- [ ] Contrast meets WCAG AA
- [ ] Touch targets 44×44px
- [ ] HTML matches reference patterns
- [ ] No inline styles
- [ ] Semantic HTML
- [ ] ARIA applied
- [ ] Progressive rhythm — sections escalate spacing
- [ ] Asymmetric layout — 5:3 or 7:3 content ratios
