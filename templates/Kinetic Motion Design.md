# UI Skill: Kinetic Motion

> **Style:** Motion-Forward / Kinetic
> **Rhythm:** Progressive
> **Whitespace:** Comfortable
> **Emphasis:** Strong
> **Balance:** Symmetric
> **Harmony:** Moderate
> **Unity:** Strict
> **Variety:** Moderate
> **Hierarchy:** Steep
> **A11Y Level:** WCAG AA

When generating any UI, follow every instruction in this document exactly. Use the provided CSS tokens for all values — never use raw hex colors, pixel values, or font sizes outside the defined scales. Copy component patterns structurally. Consistency is paramount: the same component should look identical every time it is generated.

**Core principle:** Motion IS the design language. Every interaction has a deliberate, physically-grounded animation. Elements ease in as they appear, respond elastically to interaction, and transition smoothly between states. Static screenshots of this UI look clean and modern — the magic is in how everything *moves*. All motion uses spring-inspired easing (overshoot on enter, smooth settle). Animation is never decorative — it communicates state change, draws attention, and creates spatial continuity.

**Critical requirement:** Every component in this skill includes animation. Hover states animate. Focus states animate. State changes animate. Page load staggers. If it changes, it moves. But every animation has a purpose — no gratuitous spinning or bouncing.

---

## Foundation Tokens

```css
/* === TOKENS: Kinetic Motion === */
:root {
  /* --- Spacing (4px base, 1.5 ratio) --- */
  --space-1: 4px;
  --space-2: 6px;
  --space-3: 8px;
  --space-4: 12px;
  --space-5: 16px;
  --space-6: 24px;
  --space-7: 32px;
  --space-8: 48px;
  --space-9: 64px;
  --space-10: 96px;

  /* --- Type Scale (1.25 ratio, 16px base) --- */
  --font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --text-xs: 0.64rem;
  --text-sm: 0.8rem;
  --text-base: 1rem;
  --text-md: 1.25rem;
  --text-lg: 1.563rem;
  --text-xl: 1.953rem;
  --text-2xl: 2.441rem;
  --text-3xl: 3.052rem;
  --text-4xl: 3.815rem;
  --line-height-tight: 1.15;
  --line-height-base: 1.5;
  --line-height-loose: 1.7;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;

  /* --- Colors --- */
  --color-primary: #6D28D9;
  --color-primary-hover: #5B21B6;
  --color-primary-active: #4C1D95;
  --color-primary-light: #EDE9FE;
  --color-primary-glow: rgba(109, 40, 217, 0.35);
  --color-on-primary: #FFFFFF;

  --color-secondary: #0EA5E9;
  --color-secondary-hover: #0284C7;
  --color-secondary-light: #E0F2FE;
  --color-secondary-glow: rgba(14, 165, 233, 0.3);
  --color-on-secondary: #FFFFFF;

  --color-surface: #FFFFFF;
  --color-surface-raised: #FFFFFF;
  --color-surface-alt: #F8FAFC;
  --color-background: #FAFBFE;

  --color-text: #0F172A;
  --color-text-secondary: #475569;
  --color-text-hint: #94A3B8;
  --color-text-disabled: #CBD5E1;

  --color-border: #E2E8F0;
  --color-border-strong: #CBD5E1;
  --color-divider: #F1F5F9;

  --color-success: #059669;
  --color-success-light: #ECFDF5;
  --color-success-glow: rgba(5, 150, 105, 0.3);
  --color-warning: #D97706;
  --color-warning-light: #FFFBEB;
  --color-warning-glow: rgba(217, 119, 6, 0.3);
  --color-error: #DC2626;
  --color-error-light: #FEF2F2;
  --color-error-glow: rgba(220, 38, 38, 0.3);
  --color-info: #6D28D9;
  --color-info-light: #EDE9FE;

  --color-focus: #6D28D9;
  --color-focus-ring: rgba(109, 40, 217, 0.4);

  /* --- Border Radius --- */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* --- Shadows --- */
  --shadow-1: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
  --shadow-2: 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
  --shadow-3: 0 12px 28px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.06);
  --shadow-4: 0 20px 40px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06);
  --shadow-glow-primary: 0 0 24px var(--color-primary-glow);
  --shadow-glow-secondary: 0 0 24px var(--color-secondary-glow);

  /* ============================================= */
  /* === MOTION SYSTEM (the heart of this skill) === */
  /* ============================================= */

  /* --- Durations --- */
  --motion-instant: 80ms;
  --motion-fast: 150ms;
  --motion-base: 250ms;
  --motion-moderate: 400ms;
  --motion-slow: 600ms;
  --motion-dramatic: 900ms;

  /* --- Easing Curves --- */
  /* Standard: smooth, professional */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* Spring: overshoots slightly then settles — the signature curve */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Gentle spring: subtle overshoot for smaller elements */
  --ease-spring-gentle: cubic-bezier(0.22, 1.2, 0.36, 1);

  /* Snap: fast start, cushioned landing */
  --ease-snap: cubic-bezier(0.0, 0.0, 0.15, 1);

  /* Enter: decelerate into rest */
  --ease-enter: cubic-bezier(0.0, 0.0, 0.2, 1);

  /* Exit: accelerate away */
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);

  /* Bounce: elastic overshoot for playful emphasis */
  --ease-bounce: cubic-bezier(0.34, 2.2, 0.64, 1);

  /* --- Stagger Delay --- */
  --stagger-step: 60ms;

  /* --- Layout --- */
  --max-width: 1200px;
  --gutter: var(--space-6);
}

body {
  background-color: var(--color-background);
  font-family: var(--font-family);
  color: var(--color-text);
}

/* --- Utility: Screen-reader only --- */
.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0;
}

/* =============================== */
/* === CORE ANIMATION KEYFRAMES === */
/* =============================== */

/* Fade + slide up — primary entrance animation */
@keyframes enter-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade + slide down — for dropdowns, toasts from top */
@keyframes enter-down {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade + scale — for modals, popovers */
@keyframes enter-scale {
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Exit fade + scale down */
@keyframes exit-scale {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}

/* Fade in only */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide in from right — for toasts, side panels */
@keyframes enter-right {
  from {
    opacity: 0;
    transform: translateX(24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Pulse glow — for loading, active indicators */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 var(--color-primary-glow); }
  50% { box-shadow: 0 0 0 8px transparent; }
}

/* Spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Shake — for error states */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(5px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(2px); }
}

/* Skeleton shimmer — for loading placeholders */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Check mark draw — for success states */
@keyframes draw-check {
  from { stroke-dashoffset: 24; }
  to { stroke-dashoffset: 0; }
}

/* Progress bar fill */
@keyframes fill-bar {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

/* Stagger entrance utility — apply to children */
.stagger-children > * {
  animation: enter-up var(--motion-base) var(--ease-spring) both;
}
.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: var(--stagger-step); }
.stagger-children > *:nth-child(3) { animation-delay: calc(var(--stagger-step) * 2); }
.stagger-children > *:nth-child(4) { animation-delay: calc(var(--stagger-step) * 3); }
.stagger-children > *:nth-child(5) { animation-delay: calc(var(--stagger-step) * 4); }
.stagger-children > *:nth-child(6) { animation-delay: calc(var(--stagger-step) * 5); }
.stagger-children > *:nth-child(7) { animation-delay: calc(var(--stagger-step) * 6); }
.stagger-children > *:nth-child(8) { animation-delay: calc(var(--stagger-step) * 7); }

/* Skeleton loading placeholder */
.skeleton {
  background: linear-gradient(90deg, var(--color-surface-alt) 25%, var(--color-divider) 50%, var(--color-surface-alt) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: var(--radius-sm);
}
```

---

## Layout & Rhythm

**Progressive rhythm.** Sections escalate in spacing, building visual momentum down the page. Entrance animations reinforce this — content appears in staggered waves.

```css
.layout-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gutter);
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

.layout-stack > * + * { margin-block-start: var(--space-6); }

/* Progressive sections */
.layout-section:nth-child(1) { padding-block: var(--space-7); }
.layout-section:nth-child(2) { padding-block: var(--space-8); }
.layout-section:nth-child(3) { padding-block: var(--space-9); }
.layout-section:nth-child(n+4) { padding-block: var(--space-10); }

/* Sections animate in on load */
.layout-section {
  animation: enter-up var(--motion-moderate) var(--ease-spring) both;
}
.layout-section:nth-child(1) { animation-delay: 0ms; }
.layout-section:nth-child(2) { animation-delay: 120ms; }
.layout-section:nth-child(3) { animation-delay: 240ms; }
.layout-section:nth-child(n+4) { animation-delay: 360ms; }
```

### Balance: Symmetric, centered.

### Emphasis: Strong

CTAs are significantly differentiated. Primary buttons have a scale-up + glow on hover. The animation itself creates emphasis — movement draws the eye more than static styling alone.

---

## Component Patterns

### Buttons

Every button state is animated. Hover lifts with spring easing. Active compresses. Focus pulses. Loading spins. The primary button glows on hover.

```html
<button class="btn btn--primary" type="button">Primary Action</button>
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
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  font-family: var(--font-family);
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-wide);
  padding: var(--space-4) var(--space-6);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  min-height: 44px;
  text-decoration: none;
  position: relative;
  /* THE KEY: spring easing on all transitions */
  transition:
    transform var(--motion-fast) var(--ease-spring),
    box-shadow var(--motion-fast) var(--ease-standard),
    background-color var(--motion-instant) var(--ease-standard);
}

/* Hover: lift + grow with spring overshoot */
.btn:hover {
  transform: translateY(-2px) scale(1.02);
}

/* Active: compress — feels like pressing a physical button */
.btn:active {
  transform: translateY(1px) scale(0.97);
  transition-duration: var(--motion-instant);
}

/* Focus: animated ring expansion */
.btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px var(--color-focus-ring);
  animation: pulse-glow 1.5s var(--ease-standard) infinite;
}

.btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  pointer-events: none;
  transform: none;
}

/* Primary — purple with glow on hover */
.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  box-shadow: var(--shadow-1);
}
.btn--primary:hover {
  background-color: var(--color-primary-hover);
  box-shadow: var(--shadow-glow-primary), var(--shadow-2);
}
.btn--primary:active {
  background-color: var(--color-primary-active);
  box-shadow: var(--shadow-1);
}

/* Secondary — outlined, fills on hover */
.btn--secondary {
  background-color: transparent;
  color: var(--color-primary);
  box-shadow: inset 0 0 0 2px var(--color-primary);
  transition:
    transform var(--motion-fast) var(--ease-spring),
    box-shadow var(--motion-fast) var(--ease-standard),
    background-color var(--motion-base) var(--ease-standard),
    color var(--motion-base) var(--ease-standard);
}
.btn--secondary:hover {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  box-shadow: inset 0 0 0 2px var(--color-primary), var(--shadow-2);
}

/* Ghost */
.btn--ghost {
  background-color: transparent;
  color: var(--color-text-secondary);
  box-shadow: none;
}
.btn--ghost:hover {
  background-color: var(--color-surface-alt);
  color: var(--color-text);
  box-shadow: none;
  transform: translateY(-1px);
}

/* Destructive */
.btn--destructive {
  background-color: var(--color-error);
  color: #FFFFFF;
  box-shadow: var(--shadow-1);
}
.btn--destructive:hover {
  background-color: #B91C1C;
  box-shadow: 0 0 24px var(--color-error-glow), var(--shadow-2);
}

/* Sizes */
.btn--sm { font-size: var(--text-sm); padding: var(--space-3) var(--space-5); min-height: 44px; }
.btn--lg { font-size: var(--text-md); padding: var(--space-5) var(--space-8); }

/* Loading spinner */
.btn--loading { pointer-events: none; }
.btn__spinner {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: var(--radius-full);
  animation: spin 0.7s linear infinite;
}
```

### Text Inputs

Focus state animates the border expanding. Error state shakes the input.

```html
<div class="field">
  <label class="field__label" for="email">Email address</label>
  <input class="field__input" type="email" id="email" name="email"
         placeholder="you@example.com" aria-describedby="email-help">
  <span class="field__helper" id="email-help">We'll never share your email.</span>
</div>

<div class="field field--error">
  <label class="field__label" for="password">Password</label>
  <input class="field__input" type="password" id="password" name="password"
         aria-invalid="true" aria-describedby="password-error">
  <span class="field__error" id="password-error" role="alert">
    Password must be at least 8 characters.
  </span>
</div>
```

```css
.field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: enter-up var(--motion-base) var(--ease-spring) both;
}

.field__label {
  font-family: var(--font-family);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  letter-spacing: var(--letter-spacing-wide);
  transition: color var(--motion-fast) var(--ease-standard);
}

/* Label animates color when input is focused (via :focus-within on .field) */
.field:focus-within .field__label {
  color: var(--color-primary);
}

.field__input {
  font-family: var(--font-family);
  font-size: var(--text-base);
  line-height: var(--line-height-base);
  color: var(--color-text);
  background-color: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4) var(--space-5);
  min-height: 44px;
  transition:
    border-color var(--motion-fast) var(--ease-standard),
    box-shadow var(--motion-base) var(--ease-spring),
    background-color var(--motion-fast) var(--ease-standard);
}

.field__input::placeholder { color: var(--color-text-hint); }

.field__input:hover {
  border-color: var(--color-border-strong);
}

/* Focus: border color change + expanding glow ring with spring easing */
.field__input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px var(--color-focus-ring);
  background-color: var(--color-surface);
}

.field__helper {
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  transition: opacity var(--motion-fast) var(--ease-standard);
}

/* Error: input shakes, border goes red */
.field--error .field__input {
  border-color: var(--color-error);
  animation: shake var(--motion-moderate) var(--ease-standard);
}

.field--error .field__input:focus {
  box-shadow: 0 0 0 4px var(--color-error-glow);
}

/* Error message slides in */
.field__error {
  font-size: var(--text-xs);
  color: var(--color-error);
  font-weight: var(--font-weight-semibold);
  animation: enter-up var(--motion-fast) var(--ease-spring-gentle) both;
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
.select-wrapper { position: relative; }

.field__select {
  font-family: var(--font-family);
  font-size: var(--text-base);
  color: var(--color-text);
  background-color: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4) var(--space-8) var(--space-4) var(--space-5);
  min-height: 44px;
  width: 100%;
  appearance: none;
  cursor: pointer;
  transition:
    border-color var(--motion-fast) var(--ease-standard),
    box-shadow var(--motion-base) var(--ease-spring);
}

.select-wrapper::after {
  content: '';
  position: absolute;
  right: var(--space-5);
  top: 50%;
  width: 0; height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid var(--color-text-hint);
  pointer-events: none;
  transition: transform var(--motion-fast) var(--ease-spring);
  transform: translateY(-50%);
}

/* Arrow rotates when select is focused */
.field__select:focus + .select-wrapper::after,
.select-wrapper:focus-within::after {
  transform: translateY(-50%) rotate(180deg);
}

.field__select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px var(--color-focus-ring);
}
```

### Checkbox

Check state animates with a spring pop. The checkmark draws itself in.

```html
<div class="checkbox">
  <input class="checkbox__input" type="checkbox" id="terms" name="terms">
  <label class="checkbox__label" for="terms">I agree to the terms of service</label>
</div>
```

```css
.checkbox {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  min-height: 44px;
  padding-block: var(--space-2);
}

.checkbox__input {
  appearance: none;
  width: 22px;
  height: 22px;
  min-width: 22px;
  border: 2px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface);
  cursor: pointer;
  margin-top: 2px;
  transition:
    background-color var(--motion-instant) var(--ease-standard),
    border-color var(--motion-instant) var(--ease-standard),
    transform var(--motion-fast) var(--ease-spring),
    box-shadow var(--motion-fast) var(--ease-spring);
}

/* Hover: slight lift */
.checkbox__input:hover {
  border-color: var(--color-primary);
  transform: scale(1.08);
}

/* Checked: spring pop + glow */
.checkbox__input:checked {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  transform: scale(1.1);
  box-shadow: 0 0 0 4px var(--color-focus-ring);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
  background-size: 14px;
  background-position: center;
  background-repeat: no-repeat;
}

/* Settles back to normal size after the pop */
.checkbox__input:checked:not(:active) {
  transform: scale(1);
  box-shadow: none;
  transition:
    transform var(--motion-base) var(--ease-spring),
    box-shadow var(--motion-moderate) var(--ease-standard);
}

.checkbox__input:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.checkbox__label {
  font-family: var(--font-family);
  font-size: var(--text-base);
  color: var(--color-text);
  cursor: pointer;
  line-height: var(--line-height-base);
}
```

### Cards

Cards animate in with stagger. Hover lifts with spring easing and grows shadow.

```html
<div class="card-grid stagger-children">
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
  <!-- more cards — each enters with stagger delay -->
</div>
```

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--gutter);
}

.card {
  background-color: var(--color-surface-raised);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-1);
  overflow: hidden;
  transition:
    transform var(--motion-base) var(--ease-spring),
    box-shadow var(--motion-base) var(--ease-standard),
    border-color var(--motion-fast) var(--ease-standard);
}

/* Hover: spring lift + shadow expansion */
.card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: var(--shadow-3);
  border-color: var(--color-border-strong);
}

/* Returns smoothly when unhovered */
.card:not(:hover) {
  transition:
    transform var(--motion-moderate) var(--ease-standard),
    box-shadow var(--motion-moderate) var(--ease-standard);
}

.card__image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  transition: transform var(--motion-slow) var(--ease-standard);
}

/* Image zooms slightly on card hover */
.card:hover .card__image {
  transform: scale(1.04);
}

.card__body { padding: var(--space-6); }

.card__title {
  font-family: var(--font-family);
  font-size: var(--text-md);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  line-height: var(--line-height-tight);
  margin: 0;
}

.card__text {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: var(--line-height-base);
  margin: var(--space-3) 0 0;
}

.card__actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--color-divider);
}
```

### Notifications / Toasts

Toasts slide in from the right with spring easing. Dismiss animates out. Auto-dismiss uses a shrinking progress bar at the bottom.

```html
<div class="toast toast--success" role="status" aria-live="polite">
  <span class="toast__icon" aria-hidden="true">✓</span>
  <div class="toast__content">
    <p class="toast__title">Changes saved</p>
    <p class="toast__message">Your settings have been updated.</p>
  </div>
  <button class="toast__dismiss" type="button" aria-label="Dismiss notification">×</button>
  <div class="toast__progress" aria-hidden="true"></div>
</div>
```

```css
.toast {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-6);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-3);
  max-width: 420px;
  width: 100%;
  position: relative;
  overflow: hidden;
  /* Entrance: slide in from right with spring */
  animation: enter-right var(--motion-moderate) var(--ease-spring) both;
}

/* Exit animation class (toggle via JS) */
.toast--exiting {
  animation: exit-scale var(--motion-base) var(--ease-exit) forwards;
}

.toast--info { border-left: 4px solid var(--color-info); }
.toast--success { border-left: 4px solid var(--color-success); }
.toast--warning { border-left: 4px solid var(--color-warning); }
.toast--error {
  border-left: 4px solid var(--color-error);
  animation: enter-right var(--motion-moderate) var(--ease-spring) both,
             shake var(--motion-moderate) var(--ease-standard) var(--motion-moderate);
}

.toast__icon {
  font-size: var(--text-md);
  line-height: 1;
  flex-shrink: 0;
  margin-top: 2px;
  /* Icon pops in with delay */
  animation: enter-scale var(--motion-fast) var(--ease-bounce) both;
  animation-delay: var(--motion-base);
}

.toast--info .toast__icon { color: var(--color-info); }
.toast--success .toast__icon { color: var(--color-success); }
.toast--warning .toast__icon { color: var(--color-warning); }
.toast--error .toast__icon { color: var(--color-error); }

.toast__content { flex: 1; }

.toast__title {
  font-family: var(--font-family);
  font-size: var(--text-base);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: 0;
}

.toast__message {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin: var(--space-1) 0 0;
  line-height: var(--line-height-base);
}

/* Auto-dismiss progress bar */
.toast__progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  transform-origin: left;
  animation: fill-bar 5s linear forwards reverse;
}

.toast--info .toast__progress { background-color: var(--color-info); }
.toast--success .toast__progress { background-color: var(--color-success); }
.toast--warning .toast__progress { background-color: var(--color-warning); }
.toast--error .toast__progress { background-color: var(--color-error); }

.toast__dismiss {
  appearance: none;
  background: none;
  border: none;
  color: var(--color-text-hint);
  cursor: pointer;
  padding: var(--space-2);
  font-size: var(--text-md);
  line-height: 1;
  border-radius: var(--radius-sm);
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    color var(--motion-fast) var(--ease-standard),
    background-color var(--motion-fast) var(--ease-standard),
    transform var(--motion-fast) var(--ease-spring);
}

.toast__dismiss:hover {
  color: var(--color-text);
  background-color: var(--color-surface-alt);
  transform: scale(1.1);
}

.toast__dismiss:active {
  transform: scale(0.9);
}

.toast__dismiss:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

### Navigation Bar

Active link indicator slides between items with a smooth transition. Nav animates in on load.

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
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-1);
  animation: enter-down var(--motion-base) var(--ease-spring) both;
}

.navbar__inner {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  max-width: var(--max-width);
  margin-inline: auto;
  padding: var(--space-4) var(--gutter);
  min-height: 56px;
}

.navbar__brand {
  font-family: var(--font-family);
  font-size: var(--text-md);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-text);
  text-decoration: none;
  letter-spacing: var(--letter-spacing-tight);
  transition: transform var(--motion-fast) var(--ease-spring);
}

.navbar__brand:hover {
  transform: scale(1.03);
}

.navbar__links {
  display: flex;
  gap: var(--space-1);
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar__link {
  font-family: var(--font-family);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  min-height: 44px;
  display: flex;
  align-items: center;
  position: relative;
  transition:
    color var(--motion-fast) var(--ease-standard),
    background-color var(--motion-fast) var(--ease-standard);
}

/* Animated underline indicator */
.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  border-radius: var(--radius-full);
  transition: width var(--motion-base) var(--ease-spring),
              left var(--motion-base) var(--ease-spring);
}

.navbar__link:hover {
  color: var(--color-text);
}

.navbar__link:hover::after {
  width: 60%;
  left: 20%;
}

.navbar__link--active {
  color: var(--color-primary);
}

.navbar__link--active::after {
  width: 80%;
  left: 10%;
  background-color: var(--color-primary);
}

.navbar__link:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.navbar__actions { margin-inline-start: auto; }
```

### Search

Search icon animates on focus. Input expands slightly.

```html
<div class="search" role="search">
  <label class="sr-only" for="search-input">Search</label>
  <span class="search__icon" aria-hidden="true">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M11 11L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </span>
  <input class="search__input" type="search" id="search-input"
         placeholder="Search…" autocomplete="off">
</div>
```

```css
.search {
  position: relative;
  max-width: 360px;
  transition: max-width var(--motion-base) var(--ease-spring);
}

/* Expand on focus */
.search:focus-within {
  max-width: 420px;
}

.search__icon {
  position: absolute;
  left: var(--space-5);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-hint);
  pointer-events: none;
  display: flex;
  transition: color var(--motion-fast) var(--ease-standard),
              transform var(--motion-base) var(--ease-spring);
}

.search:focus-within .search__icon {
  color: var(--color-primary);
  transform: translateY(-50%) scale(1.1);
}

.search__input {
  font-family: var(--font-family);
  font-size: var(--text-base);
  color: var(--color-text);
  background-color: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: var(--space-4) var(--space-5) var(--space-4) var(--space-8);
  width: 100%;
  min-height: 44px;
  transition:
    border-color var(--motion-fast) var(--ease-standard),
    box-shadow var(--motion-base) var(--ease-spring),
    background-color var(--motion-fast) var(--ease-standard);
}

.search__input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px var(--color-focus-ring), var(--shadow-glow-primary);
  background-color: var(--color-surface);
}

.search__input::placeholder { color: var(--color-text-hint); }
```

### Modal / Dialog

Modal enters with scale + fade using spring easing. Backdrop fades in. Content inside staggers.

```html
<dialog class="modal" aria-labelledby="modal-title">
  <div class="modal__inner stagger-children">
    <div class="modal__header">
      <h2 class="modal__title" id="modal-title">Confirm Action</h2>
      <button class="modal__close" type="button" aria-label="Close dialog">×</button>
    </div>
    <div class="modal__body">
      <p>Are you sure you want to proceed? This action cannot be undone.</p>
    </div>
    <div class="modal__footer">
      <button class="btn btn--ghost" type="button">Cancel</button>
      <button class="btn btn--primary" type="button">Confirm</button>
    </div>
  </div>
</dialog>
```

```css
.modal {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-4);
  padding: 0;
  max-width: 480px;
  width: calc(100% - var(--space-8));
  /* Spring scale entrance */
  animation: enter-scale var(--motion-moderate) var(--ease-spring) both;
}

.modal::backdrop {
  background-color: rgba(0, 0, 0, 0.4);
  animation: fade-in var(--motion-base) var(--ease-standard) both;
}

.modal__inner { /* stagger-children applied via class */ }

.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6) var(--space-6) 0;
}

.modal__title {
  font-family: var(--font-family);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: 0;
}

.modal__close {
  appearance: none;
  background: none;
  border: none;
  color: var(--color-text-hint);
  cursor: pointer;
  padding: var(--space-2);
  font-size: var(--text-lg);
  border-radius: var(--radius-full);
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    color var(--motion-fast) var(--ease-standard),
    background-color var(--motion-fast) var(--ease-standard),
    transform var(--motion-fast) var(--ease-spring);
}

.modal__close:hover {
  color: var(--color-text);
  background-color: var(--color-surface-alt);
  transform: rotate(90deg);
}

.modal__close:active {
  transform: rotate(90deg) scale(0.9);
}

.modal__close:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.modal__body {
  padding: var(--space-5) var(--space-6);
  color: var(--color-text-secondary);
  line-height: var(--line-height-base);
}

.modal__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-6) var(--space-6);
}
```

### Typography

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family);
  color: var(--color-text);
  line-height: var(--line-height-tight);
  margin: 0;
}

/* Steep hierarchy */
h1 { font-size: var(--text-4xl); font-weight: var(--font-weight-extrabold); letter-spacing: var(--letter-spacing-tight); }
h2 { font-size: var(--text-2xl); font-weight: var(--font-weight-bold); letter-spacing: var(--letter-spacing-tight); }
h3 { font-size: var(--text-xl); font-weight: var(--font-weight-bold); }
h4 { font-size: var(--text-lg); font-weight: var(--font-weight-semibold); }
h5 { font-size: var(--text-md); font-weight: var(--font-weight-semibold); }
h6 { font-size: var(--text-sm); font-weight: var(--font-weight-semibold); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: var(--letter-spacing-wide); }

p, li, td, th { font-family: var(--font-family); font-size: var(--text-base); line-height: var(--line-height-base); color: var(--color-text); }

small, .text-sm { font-size: var(--text-sm); }
.text-secondary { color: var(--color-text-secondary); }
.text-hint { color: var(--color-text-hint); }

code, pre { font-family: var(--font-mono); font-size: var(--text-sm); }

code {
  background-color: var(--color-surface-alt);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
}

pre {
  background-color: #1E1B2E;
  color: #E2E0F0;
  padding: var(--space-6);
  border-radius: var(--radius-md);
  overflow-x: auto;
}
pre code { background: none; border: none; padding: 0; color: inherit; }

a {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--color-primary-light);
  transition: text-decoration-color var(--motion-fast) var(--ease-standard);
}
a:hover { text-decoration-color: var(--color-primary); }
a:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; border-radius: 2px; }

blockquote {
  border-left: 3px solid var(--color-primary);
  padding: var(--space-5) var(--space-6);
  margin: 0;
  background-color: var(--color-surface-alt);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  color: var(--color-text-secondary);
}
```

---

## Accessibility Rules

Mandatory:

1. **Contrast:** WCAG AA — 4.5:1 normal text, 3:1 large text. `--color-text` (#0F172A) on `--color-surface` (#FFF) = 17.5:1.
2. **Focus:** `:focus-visible` with animated ring. Uses `box-shadow` for animated focus indicators plus `outline` as fallback. The pulsing glow animation on buttons must not be the only focus indicator — the `box-shadow` ring provides static visibility.
3. **Touch targets:** 44×44px minimum.
4. **Keyboard:** Full Tab navigation. Arrow keys for custom widgets. Focus trap in modals. Escape closes overlays.
5. **Semantic HTML:** Correct elements.
6. **Labels:** All inputs have `<label>` or `aria-label`.
7. **ARIA:** `aria-invalid`, `aria-describedby`, `aria-current="page"`, `role="alert"`, `aria-label` on icon buttons, `aria-busy="true"` on loading buttons, `aria-live` on toast containers.
8. **Images:** `alt` on all `<img>`.
9. **Color:** Never color-only. Error states use shake animation + color + text.
10. **Reduced motion:** If the user has `prefers-reduced-motion: reduce` set in their OS, respect it. Include this media query to disable animations:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

This is optional to include in generated output. If included, it does not change any visual styling — only removes motion. All components remain fully functional and visually correct without animation.

---

## Validation Checklist

- [ ] All spacing uses tokens (`--space-1` through `--space-10`)
- [ ] All colors use tokens — no raw values
- [ ] All font sizes use type scale tokens
- [ ] **All durations use motion tokens** (`--motion-instant` through `--motion-dramatic`) — no raw `ms` values
- [ ] **All easing curves use easing tokens** (`--ease-spring`, `--ease-snap`, etc.) — no raw `cubic-bezier` in components
- [ ] **Buttons animate on hover** (lift + scale with spring easing)
- [ ] **Buttons animate on active** (compress)
- [ ] **Focus states use animated ring** (expanding box-shadow, not just outline)
- [ ] **Inputs animate border and shadow on focus** with spring easing
- [ ] **Error inputs trigger shake animation**
- [ ] **Error messages slide in** with `enter-up` animation
- [ ] **Cards in grids use stagger entrance** via `stagger-children` class
- [ ] **Cards lift on hover** with spring easing
- [ ] **Toasts slide in from right** with `enter-right` animation
- [ ] **Modals scale in** with `enter-scale` and spring easing
- [ ] **Modal backdrop fades in**
- [ ] **Nav bar animates in** from top with `enter-down`
- [ ] **Nav active indicator animates** between links (expanding underline)
- [ ] **Labels animate color** when their input is focused (via `:focus-within`)
- [ ] **Search field expands** on focus
- [ ] `stagger-children` class applied to card grids and modal inner content
- [ ] `prefers-reduced-motion` media query included (optional but recommended)
- [ ] All interactive elements have `:focus-visible`
- [ ] All form inputs have `<label>` elements
- [ ] All buttons use `<button>`
- [ ] Contrast meets WCAG AA
- [ ] Touch targets 44×44px
- [ ] HTML matches reference patterns
- [ ] No inline styles
- [ ] Semantic HTML used correctly
- [ ] ARIA attributes applied
- [ ] Progressive rhythm — section spacing escalates
