# UI Skill: Dark Material

> **Style:** Material Design (Dark)
> **Rhythm:** Progressive
> **Whitespace:** Compact
> **Emphasis:** Strong
> **Balance:** Asymmetric
> **Harmony:** Moderate
> **Unity:** Strict
> **Variety:** Moderate
> **Hierarchy:** Steep
> **A11Y Level:** WCAG AA

When generating any UI, follow every instruction in this document exactly. Use the provided CSS tokens for all values — never use raw hex colors, pixel values, or font sizes outside the defined scales. Copy component patterns structurally. Consistency is paramount: the same component should look identical every time it is generated.

**Critical requirement:** This is a dark theme. All surfaces use dark backgrounds with light text. The elevation system uses lighter surface colors (not shadows alone) to indicate hierarchy — higher surfaces are slightly lighter.

---

## Foundation Tokens

```css
/* === TOKENS: Dark Material === */
:root {
  /* --- Spacing (4px base, compact 0.75x) --- */
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

  /* --- Type Scale (1.25 ratio, 14px base) --- */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'Fira Code', 'JetBrains Mono', monospace;
  --text-xs: 0.64rem;
  --text-sm: 0.8rem;
  --text-base: 0.875rem;  /* 14px — compact base */
  --text-md: 1.094rem;
  --text-lg: 1.367rem;
  --text-xl: 1.709rem;
  --text-2xl: 2.136rem;
  --text-3xl: 2.67rem;
  --text-4xl: 3.338rem;
  --line-height-tight: 1.2;
  --line-height-base: 1.5;
  --line-height-loose: 1.7;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.03em;

  /* --- Dark Surface Elevation System --- */
  --color-surface-0: #121212;   /* Base — lowest elevation */
  --color-surface-1: #1E1E1E;   /* Cards, sheets */
  --color-surface-2: #232323;   /* Raised cards, app bar */
  --color-surface-3: #282828;   /* Modals, dialogs */
  --color-surface-4: #2C2C2C;   /* Menus, tooltips */
  --color-surface-5: #333333;   /* Highest elevation */

  /* --- Colors --- */
  --color-primary: #BB86FC;
  --color-primary-hover: #CE9FFC;
  --color-primary-active: #A66EFC;
  --color-primary-dim: rgba(187, 134, 252, 0.12);
  --color-on-primary: #000000;

  --color-secondary: #03DAC6;
  --color-secondary-hover: #33E4D4;
  --color-secondary-dim: rgba(3, 218, 198, 0.12);
  --color-on-secondary: #000000;

  --color-accent: #FF7597;
  --color-accent-hover: #FF8FAB;
  --color-accent-dim: rgba(255, 117, 151, 0.12);

  --color-surface: var(--color-surface-1);
  --color-background: var(--color-surface-0);

  --color-text: #E8E8E8;
  --color-text-secondary: #A0A0A0;
  --color-text-hint: #6B6B6B;
  --color-text-disabled: #4A4A4A;

  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-strong: rgba(255, 255, 255, 0.16);
  --color-divider: rgba(255, 255, 255, 0.06);

  --color-success: #4CAF50;
  --color-success-dim: rgba(76, 175, 80, 0.12);
  --color-warning: #FF9800;
  --color-warning-dim: rgba(255, 152, 0, 0.12);
  --color-error: #CF6679;
  --color-error-dim: rgba(207, 102, 121, 0.12);
  --color-info: #BB86FC;
  --color-info-dim: rgba(187, 134, 252, 0.12);

  --color-focus: #BB86FC;
  --color-focus-ring: rgba(187, 134, 252, 0.4);

  /* --- Border Radius --- */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* --- Shadows (subtle on dark — overlay tint is primary hierarchy signal) --- */
  --shadow-1: 0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2);
  --shadow-2: 0 3px 8px rgba(0,0,0,0.35), 0 2px 4px rgba(0,0,0,0.25);
  --shadow-3: 0 8px 24px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.3);
  --shadow-4: 0 16px 32px rgba(0,0,0,0.45), 0 6px 12px rgba(0,0,0,0.35);
  --shadow-glow-primary: 0 0 20px rgba(187, 134, 252, 0.25);
  --shadow-glow-accent: 0 0 20px rgba(255, 117, 151, 0.25);

  /* --- Transitions --- */
  --duration-fast: 100ms;
  --duration-base: 200ms;
  --duration-slow: 350ms;
  --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-enter: cubic-bezier(0, 0, 0.2, 1);
  --easing-exit: cubic-bezier(0.4, 0, 1, 1);

  /* --- Layout --- */
  --max-width: 1200px;
  --gutter: var(--space-6);
}

body {
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-family);
}

.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0;
}
```

---

## Layout & Rhythm

**Progressive rhythm.** Section spacing escalates as you move through the page, building momentum.

```css
.layout-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gutter);
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

.layout-grid--asymmetric { grid-template-columns: 2fr 1fr; gap: var(--gutter); }
.layout-grid--asymmetric-wide { grid-template-columns: 3fr 1fr; gap: var(--gutter); }

.layout-stack > * + * { margin-block-start: var(--space-5); }

/* Progressive sections */
.layout-section:nth-child(1) { padding-block: var(--space-6); }
.layout-section:nth-child(2) { padding-block: var(--space-7); }
.layout-section:nth-child(3) { padding-block: var(--space-8); }
.layout-section:nth-child(n+4) { padding-block: var(--space-9); }
```

### Balance: Asymmetric

- Primary content takes 2/3 or 3/4 width
- Headings left-aligned
- Sidebars and secondary content take the narrow column
- Visual weight distributed unevenly

### Emphasis: Strong

CTAs are significantly differentiated. Primary actions use the bright purple with a glow effect. Accent CTAs use the pink. Size, color, and glow all separate CTAs from surrounding elements.

---

## Component Patterns

### Buttons

```html
<button class="btn btn--primary" type="button">Primary Action</button>
<button class="btn btn--accent" type="button">Accent CTA</button>
<button class="btn btn--secondary" type="button">Secondary</button>
<button class="btn btn--ghost" type="button">Ghost</button>
<button class="btn btn--destructive" type="button">Delete</button>
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
  border-radius: var(--radius-sm);
  cursor: pointer;
  min-height: 44px;
  text-decoration: none;
  transition: all var(--duration-fast) var(--easing-standard);
}

.btn:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  pointer-events: none;
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
  transform: translateY(-1px);
}
.btn--primary:active {
  background-color: var(--color-primary-active);
  transform: translateY(0);
  box-shadow: var(--shadow-1);
}

/* Accent — pink with glow */
.btn--accent {
  background-color: var(--color-accent);
  color: var(--color-on-primary);
  box-shadow: var(--shadow-1);
}
.btn--accent:hover {
  background-color: var(--color-accent-hover);
  box-shadow: var(--shadow-glow-accent), var(--shadow-2);
  transform: translateY(-1px);
}

/* Secondary — elevated surface */
.btn--secondary {
  background-color: var(--color-surface-3);
  color: var(--color-primary);
  border: 1px solid var(--color-border-strong);
}
.btn--secondary:hover {
  background-color: var(--color-surface-4);
  border-color: var(--color-primary);
}

/* Ghost */
.btn--ghost {
  background-color: transparent;
  color: var(--color-text-secondary);
}
.btn--ghost:hover {
  background-color: var(--color-surface-2);
  color: var(--color-text);
}

/* Destructive */
.btn--destructive {
  background-color: var(--color-error);
  color: var(--color-text);
}
.btn--destructive:hover {
  box-shadow: 0 0 20px rgba(207, 102, 121, 0.3), var(--shadow-2);
  transform: translateY(-1px);
}

/* Sizes */
.btn--sm { font-size: var(--text-sm); padding: var(--space-3) var(--space-5); min-height: 44px; }
.btn--lg { font-size: var(--text-md); padding: var(--space-5) var(--space-8); }

/* Loading */
.btn--loading { position: relative; }
.btn__spinner {
  width: 14px; height: 14px;
  border: 2px solid currentColor; border-right-color: transparent;
  border-radius: var(--radius-full);
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
```

### Text Inputs

Dark surface inputs with glowing focus state.

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
.field { display: flex; flex-direction: column; gap: var(--space-2); }

.field__label {
  font-family: var(--font-family);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  letter-spacing: var(--letter-spacing-wide);
}

.field__input {
  font-family: var(--font-family);
  font-size: var(--text-base);
  line-height: var(--line-height-base);
  color: var(--color-text);
  background-color: var(--color-surface-1);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  padding: var(--space-4) var(--space-5);
  min-height: 44px;
  transition: all var(--duration-fast) var(--easing-standard);
}

.field__input::placeholder { color: var(--color-text-hint); }
.field__input:hover { border-color: var(--color-text-hint); }

.field__input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-focus-ring), var(--shadow-glow-primary);
  background-color: var(--color-surface-2);
}

.field__helper { font-size: var(--text-xs); color: var(--color-text-hint); }

.field--error .field__input { border-color: var(--color-error); }
.field--error .field__input:focus { box-shadow: 0 0 0 3px rgba(207,102,121,0.3); }
.field__error { font-size: var(--text-xs); color: var(--color-error); font-weight: var(--font-weight-medium); }
```

### Select / Dropdown

```html
<div class="field">
  <label class="field__label" for="country">Country</label>
  <div class="select-wrapper">
    <select class="field__select" id="country" name="country">
      <option value="" disabled selected>Select a country</option>
      <option value="us">United States</option>
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
  background-color: var(--color-surface-1);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  padding: var(--space-4) var(--space-8) var(--space-4) var(--space-5);
  min-height: 44px;
  width: 100%;
  appearance: none;
  cursor: pointer;
}

.select-wrapper::after {
  content: '';
  position: absolute; right: var(--space-5); top: 50%; transform: translateY(-50%);
  width: 0; height: 0;
  border-left: 5px solid transparent; border-right: 5px solid transparent;
  border-top: 5px solid var(--color-text-hint);
  pointer-events: none;
}

.field__select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-focus-ring);
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
.checkbox { display: flex; align-items: flex-start; gap: var(--space-3); min-height: 44px; padding-block: var(--space-2); }

.checkbox__input {
  appearance: none;
  width: 20px; height: 20px; min-width: 20px;
  border: 2px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-1);
  cursor: pointer; margin-top: 2px;
  transition: all var(--duration-fast) var(--easing-standard);
}

.checkbox__input:checked {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-glow-primary);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
  background-size: 14px; background-position: center; background-repeat: no-repeat;
}

.checkbox__input:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }

.checkbox__label {
  font-family: var(--font-family); font-size: var(--text-base);
  color: var(--color-text); cursor: pointer; line-height: var(--line-height-base);
}
```

### Cards

Elevated dark surfaces. Higher cards use lighter backgrounds.

```html
<article class="card">
  <img class="card__image" src="photo.jpg" alt="Description" loading="lazy">
  <div class="card__body">
    <h3 class="card__title">Card Title</h3>
    <p class="card__text">Brief summary content.</p>
  </div>
  <div class="card__actions">
    <button class="btn btn--ghost btn--sm" type="button">Cancel</button>
    <button class="btn btn--primary btn--sm" type="button">Confirm</button>
  </div>
</article>
```

```css
.card {
  background-color: var(--color-surface-1);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-1);
  overflow: hidden;
  transition: all var(--duration-base) var(--easing-standard);
}

.card:hover {
  background-color: var(--color-surface-2);
  box-shadow: var(--shadow-2);
  border-color: var(--color-border-strong);
}

.card__image { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; }

.card__body { padding: var(--space-5); }

.card__title {
  font-family: var(--font-family); font-size: var(--text-md);
  font-weight: var(--font-weight-semibold); color: var(--color-text);
  line-height: var(--line-height-tight); margin: 0;
}

.card__text {
  font-size: var(--text-base); color: var(--color-text-secondary);
  line-height: var(--line-height-base); margin: var(--space-3) 0 0;
}

.card__actions {
  display: flex; justify-content: flex-end; gap: var(--space-3);
  padding: var(--space-3) var(--space-5); border-top: 1px solid var(--color-divider);
}
```

### Notifications / Toasts

```html
<div class="toast toast--success" role="status" aria-live="polite">
  <span class="toast__icon" aria-hidden="true">✓</span>
  <div class="toast__content">
    <p class="toast__title">Saved</p>
    <p class="toast__message">Your changes have been applied.</p>
  </div>
  <button class="toast__dismiss" type="button" aria-label="Dismiss">×</button>
</div>
```

```css
.toast {
  display: flex; align-items: flex-start; gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  border-radius: var(--radius-md);
  background-color: var(--color-surface-3);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-3);
  max-width: 400px; width: 100%;
}

.toast--info { border-left: 3px solid var(--color-info); }
.toast--success { border-left: 3px solid var(--color-success); }
.toast--warning { border-left: 3px solid var(--color-warning); }
.toast--error { border-left: 3px solid var(--color-error); }

.toast__icon { font-size: var(--text-md); line-height: 1; flex-shrink: 0; }
.toast--info .toast__icon { color: var(--color-info); }
.toast--success .toast__icon { color: var(--color-success); }
.toast--warning .toast__icon { color: var(--color-warning); }
.toast--error .toast__icon { color: var(--color-error); }

.toast__content { flex: 1; }
.toast__title { font-size: var(--text-base); font-weight: var(--font-weight-semibold); color: var(--color-text); margin: 0; }
.toast__message { font-size: var(--text-sm); color: var(--color-text-secondary); margin: var(--space-1) 0 0; }

.toast__dismiss {
  appearance: none; background: none; border: none; color: var(--color-text-hint);
  cursor: pointer; padding: var(--space-2); font-size: var(--text-md);
  min-width: 44px; min-height: 44px; display: flex; align-items: center; justify-content: center;
  border-radius: var(--radius-sm);
}
.toast__dismiss:hover { color: var(--color-text); background-color: var(--color-surface-4); }
.toast__dismiss:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
```

### Navigation Bar

Dark elevated app bar with purple accent.

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
  position: sticky; top: 0; z-index: 100;
  background-color: var(--color-surface-2);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-2);
}

.navbar__inner {
  display: flex; align-items: center; gap: var(--space-5);
  max-width: var(--max-width); margin-inline: auto;
  padding: var(--space-3) var(--gutter); min-height: 52px;
}

.navbar__brand {
  font-family: var(--font-family); font-size: var(--text-md);
  font-weight: var(--font-weight-bold); color: var(--color-text);
  text-decoration: none; letter-spacing: var(--letter-spacing-tight);
}

.navbar__links { display: flex; gap: var(--space-1); list-style: none; padding: 0; margin: 0; }

.navbar__link {
  font-family: var(--font-family); font-size: var(--text-sm);
  font-weight: var(--font-weight-medium); color: var(--color-text-secondary);
  text-decoration: none; padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-sm); min-height: 44px;
  display: flex; align-items: center;
  transition: all var(--duration-fast) var(--easing-standard);
}

.navbar__link:hover { color: var(--color-text); background-color: var(--color-surface-3); }

.navbar__link--active {
  color: var(--color-primary);
  background-color: var(--color-primary-dim);
}

.navbar__link:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
.navbar__actions { margin-inline-start: auto; }
```

### Typography

Steep hierarchy — large jumps between heading sizes.

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family); color: var(--color-text);
  line-height: var(--line-height-tight); margin: 0;
}

h1 { font-size: var(--text-4xl); font-weight: var(--font-weight-bold); letter-spacing: var(--letter-spacing-tight); }
h2 { font-size: var(--text-2xl); font-weight: var(--font-weight-bold); letter-spacing: var(--letter-spacing-tight); }
h3 { font-size: var(--text-xl); font-weight: var(--font-weight-semibold); }
h4 { font-size: var(--text-lg); font-weight: var(--font-weight-semibold); }
h5 { font-size: var(--text-md); font-weight: var(--font-weight-medium); }
h6 { font-size: var(--text-base); font-weight: var(--font-weight-medium); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: var(--letter-spacing-wide); }

p, li, td, th { font-family: var(--font-family); font-size: var(--text-base); line-height: var(--line-height-base); color: var(--color-text); }

small, .text-sm { font-size: var(--text-sm); }
.text-secondary { color: var(--color-text-secondary); }
.text-hint { color: var(--color-text-hint); }

code, pre { font-family: var(--font-mono); font-size: var(--text-sm); }

code {
  background-color: var(--color-surface-3);
  padding: var(--space-1) var(--space-2); border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
}

pre {
  background-color: var(--color-surface-0); color: var(--color-text);
  padding: var(--space-6); border-radius: var(--radius-md);
  border: 1px solid var(--color-border); overflow-x: auto;
}
pre code { background: none; border: none; padding: 0; }

a { color: var(--color-primary); text-decoration: underline; text-underline-offset: 2px; }
a:hover { color: var(--color-primary-hover); }
a:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; border-radius: 2px; }

blockquote {
  border-left: 3px solid var(--color-primary);
  padding: var(--space-4) var(--space-5); margin: 0;
  background-color: var(--color-primary-dim);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  color: var(--color-text-secondary);
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
.search { position: relative; max-width: 320px; }

.search__icon {
  position: absolute; left: var(--space-4); top: 50%; transform: translateY(-50%);
  color: var(--color-text-hint); pointer-events: none; display: flex;
}

.search__input {
  font-family: var(--font-family); font-size: var(--text-base); color: var(--color-text);
  background-color: var(--color-surface-1); border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-full);
  padding: var(--space-3) var(--space-5) var(--space-3) var(--space-7);
  width: 100%; min-height: 44px;
  transition: all var(--duration-fast) var(--easing-standard);
}

.search__input:focus {
  outline: none; border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-focus-ring), var(--shadow-glow-primary);
  background-color: var(--color-surface-2);
}

.search__input::placeholder { color: var(--color-text-hint); }
```

### Modal / Dialog

```html
<dialog class="modal" aria-labelledby="modal-title">
  <div class="modal__header">
    <h2 class="modal__title" id="modal-title">Confirm Action</h2>
    <button class="modal__close" type="button" aria-label="Close">×</button>
  </div>
  <div class="modal__body"><p>Are you sure? This cannot be undone.</p></div>
  <div class="modal__footer">
    <button class="btn btn--ghost" type="button">Cancel</button>
    <button class="btn btn--primary" type="button">Confirm</button>
  </div>
</dialog>
```

```css
.modal {
  border: 1px solid var(--color-border-strong); border-radius: var(--radius-lg);
  background-color: var(--color-surface-3); box-shadow: var(--shadow-4);
  padding: 0; max-width: 440px; width: calc(100% - var(--space-8));
}
.modal::backdrop { background-color: rgba(0,0,0,0.6); }

.modal__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: var(--space-5) var(--space-5) 0;
}
.modal__title { font-size: var(--text-lg); font-weight: var(--font-weight-semibold); color: var(--color-text); margin: 0; }

.modal__close {
  appearance: none; background: none; border: none; color: var(--color-text-hint);
  cursor: pointer; padding: var(--space-2); font-size: var(--text-lg);
  border-radius: var(--radius-sm); min-width: 44px; min-height: 44px;
  display: flex; align-items: center; justify-content: center;
}
.modal__close:hover { color: var(--color-text); background-color: var(--color-surface-4); }
.modal__close:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }

.modal__body { padding: var(--space-4) var(--space-5); color: var(--color-text-secondary); }
.modal__footer { display: flex; justify-content: flex-end; gap: var(--space-3); padding: var(--space-3) var(--space-5) var(--space-5); }
```

---

## Accessibility Rules

Mandatory:

1. **Contrast:** WCAG AA. `--color-text` (#E8E8E8) on `--color-surface-1` (#1E1E1E) = 12.6:1. `--color-text-secondary` (#A0A0A0) on surface-1 = 6.6:1. Both pass. `--color-primary` (#BB86FC) on surface = 7.4:1 — passes.
2. **Focus:** `:focus-visible` with `outline: 2px solid var(--color-focus); outline-offset: 2px`. Purple outline is visible against all dark surfaces.
3. **Touch targets:** 44×44px minimum.
4. **Keyboard:** Full Tab navigation. Arrow keys for custom widgets. Focus trap in modals. Escape closes.
5. **Semantic HTML:** Correct elements throughout.
6. **Labels:** All inputs have `<label>` or `aria-label`.
7. **ARIA:** Applied where specified in component patterns.
8. **Images:** `alt` on all `<img>`.
9. **Color:** Never color-only signaling.

---

## Validation Checklist

- [ ] All spacing uses tokens
- [ ] All colors use tokens — no raw values
- [ ] All font sizes use type scale tokens
- [ ] **All surfaces use the dark elevation system** (`--color-surface-0` through `--color-surface-5`)
- [ ] **Higher-elevation surfaces use lighter colors** (modals > cards > background)
- [ ] **Body background is `--color-surface-0`** (#121212)
- [ ] Primary CTA has glow shadow on hover (`--shadow-glow-primary`)
- [ ] All interactive elements have `:focus-visible` with purple outline
- [ ] All form inputs have `<label>` elements
- [ ] All buttons use `<button>`
- [ ] Contrast meets WCAG AA on dark surfaces
- [ ] Touch targets meet 44×44px
- [ ] HTML matches reference patterns
- [ ] No inline styles
- [ ] Semantic HTML used correctly
- [ ] ARIA attributes applied
- [ ] Progressive rhythm — section spacing increases through the page
- [ ] Asymmetric layout — primary content wider than secondary
- [ ] Steep hierarchy — large size jumps between heading levels
- [ ] Strong emphasis — CTAs clearly dominate with color + glow + size
