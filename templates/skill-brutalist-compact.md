# UI Skill: Brutalist Compact

> **Style:** Brutalism
> **Rhythm:** Progressive
> **Whitespace:** Compact
> **Emphasis:** Strong
> **Balance:** Asymmetric
> **Harmony:** Loose
> **Unity:** Strict
> **Variety:** Expressive
> **Hierarchy:** Steep
> **A11Y Level:** WCAG AA

When generating any UI, follow every instruction in this document exactly. Use the provided CSS tokens for all values — never use raw hex colors, pixel values, or font sizes outside the defined scales. Copy component patterns structurally. Consistency is paramount: the same component should look identical every time it is generated.

---

## Foundation Tokens

Copy this CSS block into the project's root stylesheet. All components reference these tokens exclusively.

```css
/* === TOKENS: Brutalist Compact === */
:root {
  /* --- Spacing (4px base, tight) --- */
  --space-1: 2px;
  --space-2: 4px;
  --space-3: 6px;
  --space-4: 8px;
  --space-5: 12px;
  --space-6: 16px;
  --space-7: 24px;
  --space-8: 32px;
  --space-9: 48px;
  --space-10: 64px;

  /* --- Type Scale (1.333 ratio, 16px base — Perfect Fourth) --- */
  --font-family: 'Space Mono', 'Courier New', monospace;
  --font-display: 'Space Grotesk', 'Arial Black', sans-serif;
  --font-mono: 'Space Mono', 'Courier New', monospace;
  --text-xs: 0.563rem;   /* 9px */
  --text-sm: 0.75rem;    /* 12px */
  --text-base: 1rem;     /* 16px */
  --text-md: 1.333rem;   /* 21.3px */
  --text-lg: 1.777rem;   /* 28.4px */
  --text-xl: 2.369rem;   /* 37.9px */
  --text-2xl: 3.157rem;  /* 50.5px */
  --text-3xl: 4.209rem;  /* 67.3px */
  --text-4xl: 5.61rem;   /* 89.8px */
  --line-height-tight: 1.0;
  --line-height-base: 1.4;
  --line-height-loose: 1.6;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --font-weight-black: 900;
  --letter-spacing-tight: -0.03em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.05em;
  --letter-spacing-mega: 0.15em;

  /* --- Colors --- */
  --color-primary: #000000;
  --color-primary-hover: #222222;
  --color-primary-active: #000000;
  --color-on-primary: #FFFFFF;

  --color-accent: #FF2D00;
  --color-accent-hover: #CC2400;
  --color-accent-active: #991B00;
  --color-on-accent: #FFFFFF;

  --color-surface: #FFFFFF;
  --color-surface-raised: #FFFFFF;
  --color-surface-alt: #F0F0F0;
  --color-background: #FFFFFF;

  --color-text: #000000;
  --color-text-secondary: #444444;
  --color-text-hint: #888888;
  --color-text-disabled: #BBBBBB;
  --color-text-on-dark: #FFFFFF;
  --color-text-inverted: #FFFFFF;

  --color-border: #000000;
  --color-border-light: #CCCCCC;
  --color-divider: #000000;

  --color-success: #00802B;
  --color-success-light: #E6F5EC;
  --color-warning: #CC8400;
  --color-warning-light: #FFF5E0;
  --color-error: #CC0000;
  --color-error-light: #FFE6E6;
  --color-info: #0055CC;
  --color-info-light: #E6F0FF;

  --color-focus: #0055CC;
  --color-focus-ring: #0055CC;

  /* --- Border --- */
  --border-thin: 2px solid var(--color-border);
  --border-thick: 3px solid var(--color-border);
  --border-heavy: 5px solid var(--color-border);

  /* --- Border Radius (Brutalist = none) --- */
  --radius-sm: 0;
  --radius-md: 0;
  --radius-lg: 0;
  --radius-full: 0;

  /* --- Shadows (Hard offset, no blur) --- */
  --shadow-1: 3px 3px 0 var(--color-border);
  --shadow-2: 5px 5px 0 var(--color-border);
  --shadow-3: 8px 8px 0 var(--color-border);
  --shadow-pressed: 1px 1px 0 var(--color-border);

  /* --- Transitions (Brutalist = instant or very fast) --- */
  --duration-fast: 0ms;
  --duration-base: 80ms;
  --duration-slow: 150ms;
  --easing-standard: linear;

  /* --- Layout --- */
  --max-width: 1100px;
  --gutter: var(--space-6);
  --columns: 12;
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
```

---

## Layout & Rhythm

This skill uses **progressive rhythm**: spacing escalates as you move through content. Earlier/top sections are tighter, later/bottom sections breathe more. This creates directional momentum — the eye is pulled forward.

### Rhythm rules

- Section padding escalates:
  - First section: `var(--space-6)` top and bottom
  - Second section: `var(--space-7)` top and bottom
  - Third section: `var(--space-8)` top and bottom
  - Fourth+ sections: `var(--space-9)` top and bottom
- Inline spacing between sibling elements: `var(--space-5)` (12px)
- Card internal padding: `var(--space-5)` (12px)
- Form field vertical gap: `var(--space-4)` (8px)
- Gap between label and input: `var(--space-2)` (4px)
- Gap between input and helper/error text: `var(--space-1)` (2px)
- Page max-width: `var(--max-width)` with `var(--gutter)` side padding

### Grid

Use CSS Grid with unequal columns for asymmetric balance. Default layout: 2:1 ratio (8col + 4col or 7col + 5col). Never use equal-width columns for primary layouts.

```css
.layout-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gutter);
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

.layout-grid--asymmetric {
  grid-template-columns: 2fr 1fr;
  gap: var(--gutter);
}

.layout-stack > * + * {
  margin-block-start: var(--space-5);
}

/* Progressive section spacing */
.layout-section:nth-child(1) { padding-block: var(--space-6); }
.layout-section:nth-child(2) { padding-block: var(--space-7); }
.layout-section:nth-child(3) { padding-block: var(--space-8); }
.layout-section:nth-child(n+4) { padding-block: var(--space-9); }
```

### Balance: Asymmetric

- Primary content takes 2/3 of the width, secondary takes 1/3
- Headings are left-aligned, never centered
- Hero content is offset — not centered on the page
- Uneven padding is acceptable (e.g., more left padding than right on callout blocks)
- Visual weight is distributed unevenly for tension and energy

---

## Component Patterns

### Buttons

Four variants: primary, accent, ghost, destructive. Three sizes: small, medium (default), large. Brutalist buttons have thick borders, hard shadows, and an active state that "presses" the shadow flat.

```html
<button class="btn btn--primary" type="button">Primary Action</button>
<button class="btn btn--accent" type="button">Accent CTA</button>
<button class="btn btn--ghost" type="button">Ghost</button>
<button class="btn btn--destructive" type="button">Delete</button>
<button class="btn btn--primary" type="button" disabled>Disabled</button>
<button class="btn btn--accent btn--loading" type="button" aria-busy="true" disabled>
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
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  padding: var(--space-4) var(--space-6);
  border: var(--border-thick);
  border-radius: var(--radius-sm);
  cursor: pointer;
  min-height: 44px;
  text-decoration: none;
  position: relative;
  transition: transform var(--duration-base) var(--easing-standard),
              box-shadow var(--duration-base) var(--easing-standard);
}

.btn:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}

.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

/* Primary — Black fill, white text, hard shadow */
.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  box-shadow: var(--shadow-2);
}
.btn--primary:hover {
  transform: translate(-1px, -1px);
  box-shadow: var(--shadow-3);
}
.btn--primary:active {
  transform: translate(3px, 3px);
  box-shadow: var(--shadow-pressed);
}

/* Accent — Red fill, strong emphasis */
.btn--accent {
  background-color: var(--color-accent);
  color: var(--color-on-accent);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-2);
}
.btn--accent:hover {
  background-color: var(--color-accent-hover);
  transform: translate(-1px, -1px);
  box-shadow: var(--shadow-3);
}
.btn--accent:active {
  transform: translate(3px, 3px);
  box-shadow: var(--shadow-pressed);
}

/* Ghost — Outline only */
.btn--ghost {
  background-color: transparent;
  color: var(--color-text);
  box-shadow: none;
}
.btn--ghost:hover {
  background-color: var(--color-surface-alt);
}
.btn--ghost:active {
  background-color: var(--color-border-light);
}

/* Destructive */
.btn--destructive {
  background-color: var(--color-error);
  color: var(--color-text-on-dark);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-2);
}
.btn--destructive:hover {
  transform: translate(-1px, -1px);
  box-shadow: var(--shadow-3);
}
.btn--destructive:active {
  transform: translate(3px, 3px);
  box-shadow: var(--shadow-pressed);
}

/* Sizes */
.btn--sm {
  font-size: var(--text-sm);
  padding: var(--space-3) var(--space-5);
  min-height: 44px;
}
.btn--lg {
  font-size: var(--text-md);
  padding: var(--space-5) var(--space-8);
}

/* Loading */
.btn--loading { position: relative; }
.btn__spinner {
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  animation: spin 0.5s steps(8) infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
```

### Text Inputs

Thick borders, monospace font, no rounded corners. Error states use the accent red with a thick left border.

```html
<div class="field">
  <label class="field__label" for="email">EMAIL</label>
  <input class="field__input" type="email" id="email" name="email"
         placeholder="you@example.com" aria-describedby="email-help">
  <span class="field__helper" id="email-help">We'll never share your email.</span>
</div>

<div class="field field--error">
  <label class="field__label" for="password">PASSWORD</label>
  <input class="field__input" type="password" id="password" name="password"
         aria-invalid="true" aria-describedby="password-error">
  <span class="field__error" id="password-error" role="alert">
    Must be at least 8 characters.
  </span>
</div>
```

```css
.field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.field__label {
  font-family: var(--font-family);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  letter-spacing: var(--letter-spacing-mega);
  text-transform: uppercase;
}

.field__input {
  font-family: var(--font-family);
  font-size: var(--text-base);
  line-height: var(--line-height-base);
  color: var(--color-text);
  background-color: var(--color-surface);
  border: var(--border-thick);
  border-radius: var(--radius-sm);
  padding: var(--space-4) var(--space-5);
  min-height: 44px;
}

.field__input::placeholder {
  color: var(--color-text-hint);
}

.field__input:hover {
  border-color: var(--color-text-secondary);
}

.field__input:focus {
  outline: none;
  border-color: var(--color-focus);
  box-shadow: var(--shadow-1);
}

.field__helper {
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  font-family: var(--font-family);
}

/* Error state */
.field--error .field__input {
  border-color: var(--color-error);
  border-left-width: 6px;
}

.field--error .field__input:focus {
  box-shadow: 3px 3px 0 var(--color-error);
}

.field__error {
  font-size: var(--text-sm);
  color: var(--color-error);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family);
}
```

### Select / Dropdown

```html
<div class="field">
  <label class="field__label" for="country">COUNTRY</label>
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
.select-wrapper {
  position: relative;
}

.field__select {
  font-family: var(--font-family);
  font-size: var(--text-base);
  color: var(--color-text);
  background-color: var(--color-surface);
  border: var(--border-thick);
  border-radius: var(--radius-sm);
  padding: var(--space-4) var(--space-8) var(--space-4) var(--space-5);
  min-height: 44px;
  width: 100%;
  appearance: none;
  cursor: pointer;
}

.select-wrapper::after {
  content: '▼';
  position: absolute;
  right: var(--space-5);
  top: 50%;
  transform: translateY(-50%);
  font-size: var(--text-sm);
  color: var(--color-text);
  pointer-events: none;
  font-family: var(--font-family);
}

.field__select:focus {
  outline: none;
  border-color: var(--color-focus);
  box-shadow: var(--shadow-1);
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
.checkbox {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  min-height: 44px;
  padding-block: var(--space-2);
}

.checkbox__input {
  appearance: none;
  width: 20px;
  height: 20px;
  min-width: 20px;
  border: var(--border-thick);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface);
  cursor: pointer;
  margin-top: 2px;
}

.checkbox__input:checked {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
  background-size: 14px;
  background-position: center;
  background-repeat: no-repeat;
}

.checkbox__input:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
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

Thick border, hard shadow, no rounded corners. Hover lifts the shadow further.

```html
<article class="card">
  <img class="card__image" src="photo.jpg" alt="Description of image" loading="lazy">
  <div class="card__body">
    <h3 class="card__title">Card Title</h3>
    <p class="card__text">Brief description or summary content.</p>
  </div>
  <div class="card__actions">
    <button class="btn btn--ghost btn--sm" type="button">Cancel</button>
    <button class="btn btn--primary btn--sm" type="button">Confirm</button>
  </div>
</article>
```

```css
.card {
  background-color: var(--color-surface);
  border: var(--border-thick);
  box-shadow: var(--shadow-2);
  overflow: hidden;
  transition: transform var(--duration-base) var(--easing-standard),
              box-shadow var(--duration-base) var(--easing-standard);
}

.card:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-3);
}

.card__image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  border-bottom: var(--border-thick);
}

.card__body {
  padding: var(--space-5);
}

.card__title {
  font-family: var(--font-display);
  font-size: var(--text-md);
  font-weight: var(--font-weight-black);
  color: var(--color-text);
  line-height: var(--line-height-tight);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}

.card__text {
  font-family: var(--font-family);
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: var(--line-height-base);
  margin: var(--space-3) 0 0;
}

.card__actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  border-top: var(--border-thin);
}
```

### Notifications / Toasts

Thick left border, hard shadow, monospace text. Uses role="alert" for errors/warnings.

```html
<div class="toast toast--error" role="alert" aria-live="assertive">
  <span class="toast__marker" aria-hidden="true">!!</span>
  <div class="toast__content">
    <p class="toast__title">Error</p>
    <p class="toast__message">Something went wrong. Try again.</p>
  </div>
  <button class="toast__dismiss" type="button" aria-label="Dismiss notification">×</button>
</div>
```

```css
.toast {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  background-color: var(--color-surface);
  border: var(--border-thick);
  box-shadow: var(--shadow-2);
  max-width: 420px;
  width: 100%;
}

.toast--info { border-left: 6px solid var(--color-info); }
.toast--success { border-left: 6px solid var(--color-success); }
.toast--warning { border-left: 6px solid var(--color-warning); }
.toast--error { border-left: 6px solid var(--color-error); }

.toast__marker {
  font-family: var(--font-family);
  font-size: var(--text-md);
  font-weight: var(--font-weight-black);
  line-height: 1;
  flex-shrink: 0;
}

.toast--info .toast__marker { color: var(--color-info); }
.toast--success .toast__marker { color: var(--color-success); }
.toast--warning .toast__marker { color: var(--color-warning); }
.toast--error .toast__marker { color: var(--color-error); }

.toast__content { flex: 1; }

.toast__title {
  font-family: var(--font-family);
  font-size: var(--text-base);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  margin: 0;
}

.toast__message {
  font-family: var(--font-family);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin: var(--space-1) 0 0;
  line-height: var(--line-height-base);
}

.toast__dismiss {
  appearance: none;
  background: none;
  border: var(--border-thin);
  color: var(--color-text);
  cursor: pointer;
  padding: var(--space-2);
  font-family: var(--font-family);
  font-size: var(--text-md);
  font-weight: var(--font-weight-bold);
  line-height: 1;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toast__dismiss:hover {
  background-color: var(--color-surface-alt);
}

.toast__dismiss:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}
```

### Navigation Bar

```html
<header class="navbar" role="banner">
  <nav class="navbar__inner" aria-label="Main navigation">
    <a class="navbar__brand" href="/">APPNAME</a>
    <ul class="navbar__links" role="list">
      <li><a class="navbar__link navbar__link--active" href="/dashboard" aria-current="page">Dashboard</a></li>
      <li><a class="navbar__link" href="/projects">Projects</a></li>
      <li><a class="navbar__link" href="/settings">Settings</a></li>
    </ul>
    <div class="navbar__actions">
      <button class="btn btn--ghost btn--sm" type="button">Log Out</button>
    </div>
  </nav>
</header>
```

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-primary);
  color: var(--color-text-on-dark);
  border-bottom: var(--border-heavy);
  border-bottom-color: var(--color-accent);
}

.navbar__inner {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  max-width: var(--max-width);
  margin-inline: auto;
  padding: var(--space-4) var(--gutter);
  min-height: 52px;
}

.navbar__brand {
  font-family: var(--font-display);
  font-size: var(--text-md);
  font-weight: var(--font-weight-black);
  color: var(--color-text-on-dark);
  text-decoration: none;
  letter-spacing: var(--letter-spacing-mega);
  text-transform: uppercase;
}

.navbar__links {
  display: flex;
  gap: 0;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar__link {
  font-family: var(--font-family);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-on-dark);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  padding: var(--space-4) var(--space-5);
  border-right: 1px solid rgba(255,255,255,0.2);
  min-height: 44px;
  display: flex;
  align-items: center;
  opacity: 0.7;
}

.navbar__link:first-child {
  border-left: 1px solid rgba(255,255,255,0.2);
}

.navbar__link:hover {
  opacity: 1;
  background-color: rgba(255,255,255,0.1);
}

.navbar__link--active {
  opacity: 1;
  background-color: var(--color-accent);
  color: var(--color-on-accent);
}

.navbar__link:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: -3px;
}

.navbar__actions {
  margin-inline-start: auto;
}

.navbar__actions .btn--ghost {
  color: var(--color-text-on-dark);
  border-color: rgba(255,255,255,0.4);
}

.navbar__actions .btn--ghost:hover {
  background-color: rgba(255,255,255,0.15);
}
```

### Typography

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  color: var(--color-text);
  line-height: var(--line-height-tight);
  margin: 0;
}

/* Steep hierarchy — large jumps between levels */
h1 {
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-black);
  letter-spacing: var(--letter-spacing-tight);
  text-transform: uppercase;
}

h2 {
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-black);
  letter-spacing: var(--letter-spacing-tight);
  text-transform: uppercase;
}

h3 {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}

h4 {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-bold);
}

h5 {
  font-size: var(--text-md);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
}

h6 {
  font-family: var(--font-family);
  font-size: var(--text-base);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-mega);
  text-transform: uppercase;
  color: var(--color-text-secondary);
}

p, li, td, th {
  font-family: var(--font-family);
  font-size: var(--text-base);
  line-height: var(--line-height-base);
  color: var(--color-text);
}

small, .text-sm {
  font-size: var(--text-sm);
}

.text-secondary { color: var(--color-text-secondary); }
.text-hint { color: var(--color-text-hint); }

code, pre {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

code {
  background-color: var(--color-surface-alt);
  border: 1px solid var(--color-border-light);
  padding: var(--space-1) var(--space-2);
}

pre {
  background-color: var(--color-primary);
  color: var(--color-text-on-dark);
  padding: var(--space-5);
  border: var(--border-thick);
  overflow-x: auto;
}

pre code {
  background: none;
  border: none;
  padding: 0;
  color: inherit;
}

a {
  color: var(--color-text);
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
  text-decoration-color: var(--color-accent);
}

a:hover {
  color: var(--color-accent);
}

a:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}

blockquote {
  border-left: var(--border-heavy);
  border-left-color: var(--color-accent);
  padding: var(--space-4) var(--space-6);
  margin: 0;
  background-color: var(--color-surface-alt);
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
}
```

### Search

```html
<div class="search" role="search">
  <label class="sr-only" for="search-input">Search</label>
  <input class="search__input" type="search" id="search-input"
         placeholder="SEARCH…" autocomplete="off">
  <button class="search__btn" type="submit" aria-label="Submit search">→</button>
</div>
```

```css
.search {
  display: flex;
  max-width: 360px;
}

.search__input {
  font-family: var(--font-family);
  font-size: var(--text-base);
  color: var(--color-text);
  background-color: var(--color-surface);
  border: var(--border-thick);
  border-right: none;
  padding: var(--space-4) var(--space-5);
  width: 100%;
  min-height: 44px;
  letter-spacing: var(--letter-spacing-wide);
}

.search__input:focus {
  outline: none;
  border-color: var(--color-focus);
  box-shadow: var(--shadow-1);
}

.search__input::placeholder {
  color: var(--color-text-hint);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-mega);
}

.search__btn {
  font-family: var(--font-family);
  font-size: var(--text-md);
  font-weight: var(--font-weight-black);
  color: var(--color-on-primary);
  background-color: var(--color-primary);
  border: var(--border-thick);
  padding: var(--space-4) var(--space-5);
  cursor: pointer;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search__btn:hover {
  background-color: var(--color-accent);
}

.search__btn:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}
```

### Modal / Dialog

```html
<dialog class="modal" aria-labelledby="modal-title">
  <div class="modal__header">
    <h2 class="modal__title" id="modal-title">CONFIRM ACTION</h2>
    <button class="modal__close" type="button" aria-label="Close dialog">×</button>
  </div>
  <div class="modal__body">
    <p>Are you sure? This action cannot be undone.</p>
  </div>
  <div class="modal__footer">
    <button class="btn btn--ghost" type="button">Cancel</button>
    <button class="btn btn--accent" type="button">Confirm</button>
  </div>
</dialog>
```

```css
.modal {
  border: var(--border-heavy);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-3);
  padding: 0;
  max-width: 480px;
  width: calc(100% - var(--space-8));
}

.modal::backdrop {
  background-color: rgba(0, 0, 0, 0.7);
}

.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-5);
  border-bottom: var(--border-thin);
  background-color: var(--color-primary);
  color: var(--color-text-on-dark);
}

.modal__title {
  font-family: var(--font-display);
  font-size: var(--text-md);
  font-weight: var(--font-weight-black);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  margin: 0;
  color: var(--color-text-on-dark);
}

.modal__close {
  appearance: none;
  background: none;
  border: 1px solid rgba(255,255,255,0.3);
  color: var(--color-text-on-dark);
  cursor: pointer;
  padding: var(--space-2);
  font-family: var(--font-family);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-bold);
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__close:hover {
  background-color: rgba(255,255,255,0.15);
}

.modal__close:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}

.modal__body {
  padding: var(--space-5);
  font-family: var(--font-family);
  color: var(--color-text);
  line-height: var(--line-height-base);
}

.modal__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  border-top: var(--border-thin);
}
```

---

## Accessibility Rules

These are mandatory. Every generated component must satisfy all of the following:

1. **Contrast:** All text meets WCAG AA — minimum 4.5:1 for normal text, 3:1 for large text (18px+ or 14px+ bold). The black-on-white palette inherently satisfies this. Accent red (#FF2D00) on white passes at large text sizes only — use it exclusively for large headings, buttons with white text, or decorative elements.

2. **Focus indicators:** Every interactive element has a visible `:focus-visible` style. Use `outline: 3px solid var(--color-focus); outline-offset: 3px`. The 3px width and offset ensure visibility against the thick borders used in this style.

3. **Touch targets:** All buttons, links, checkboxes, radios, and other interactive elements have a minimum 44×44px click/tap area.

4. **Keyboard navigation:** All interactive elements are reachable via Tab. Custom widgets implement arrow key navigation. Modals trap focus. Escape closes modals, dropdowns, and popovers.

5. **Semantic HTML:** Use `<button>` for actions, `<a>` for navigation, `<nav>` for navigation landmarks, `<main>` for primary content, `<header>` and `<footer>` for page structure, `<fieldset>` and `<legend>` for form groups.

6. **Labels:** Every `<input>`, `<select>`, and `<textarea>` must have an associated `<label>` or `aria-label`. Placeholder text is never a substitute.

7. **ARIA:** Use `aria-invalid="true"` on invalid inputs. Use `aria-describedby` for helper/error text. Use `aria-current="page"` on active nav links. Use `role="alert"` on error notifications. Use `aria-label` on icon-only buttons.

8. **Images:** All `<img>` elements have `alt` attributes. Decorative images use `alt=""`.

9. **Color:** Never convey information through color alone. Error states always include text or icon indicators alongside color.

---

## Validation Checklist

Before presenting UI code, verify every item:

- [ ] All spacing values use tokens (`--space-1` through `--space-10`)
- [ ] All colors reference color tokens — no hex, rgb, or hsl literals
- [ ] All font sizes use type scale tokens
- [ ] All borders use the border tokens (`--border-thin`, `--border-thick`, `--border-heavy`)
- [ ] Border radius is 0 everywhere (this is brutalist — no rounding)
- [ ] Shadows use the hard offset shadow tokens (no blur shadows)
- [ ] All interactive elements have visible `:focus-visible` styles with 3px outlines
- [ ] All form inputs have associated `<label>` elements
- [ ] All buttons use `<button>` elements
- [ ] Color contrast meets WCAG AA
- [ ] All interactive elements meet 44×44px minimum touch target
- [ ] HTML structure matches reference patterns
- [ ] No inline styles — all styling through CSS classes
- [ ] Semantic HTML elements used correctly
- [ ] ARIA attributes applied where applicable
- [ ] Progressive rhythm maintained — section spacing increases deeper into the page
- [ ] Layout is asymmetric — primary content takes 2/3 width, no centered layouts
- [ ] Text is uppercase where specified (labels, headings, nav links, button text)
- [ ] Font families are correct: `--font-display` for headings, `--font-family` (monospace) for body/UI
