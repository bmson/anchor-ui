# UI Skill: Glass Spacious

> **Style:** Glassmorphism
> **Rhythm:** Flowing
> **Whitespace:** Spacious
> **Emphasis:** Moderate
> **Balance:** Symmetric
> **Harmony:** Tight
> **Unity:** Strict
> **Variety:** Minimal
> **Hierarchy:** Moderate
> **A11Y Level:** WCAG AA

When generating any UI, follow every instruction in this document exactly. Use the provided CSS tokens for all values — never use raw hex colors, pixel values, or font sizes outside the defined scales. Copy component patterns structurally. Consistency is paramount: the same component should look identical every time it is generated.

**Critical requirement:** Glassmorphism needs a colorful or gradient background behind frosted surfaces. Every page MUST include the background layer defined in the Layout section. Without it, the glass effect is invisible.

---

## Foundation Tokens

Copy this CSS block into the project's root stylesheet. All components reference these tokens exclusively.

```css
/* === TOKENS: Glass Spacious === */
:root {
  /* --- Spacing (4px base, 1.5 ratio, spacious = 1.5x multiplier) --- */
  --space-1: 6px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 36px;
  --space-7: 48px;
  --space-8: 72px;
  --space-9: 96px;
  --space-10: 144px;

  /* --- Type Scale (1.2 ratio, 16px base — Minor Third) --- */
  --font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --text-xs: 0.694rem;   /* 11.1px */
  --text-sm: 0.833rem;   /* 13.3px */
  --text-base: 1rem;     /* 16px */
  --text-md: 1.2rem;     /* 19.2px */
  --text-lg: 1.44rem;    /* 23px */
  --text-xl: 1.728rem;   /* 27.6px */
  --text-2xl: 2.074rem;  /* 33.2px */
  --text-3xl: 2.488rem;  /* 39.8px */
  --line-height-tight: 1.25;
  --line-height-base: 1.6;
  --line-height-loose: 1.8;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --letter-spacing-tight: -0.01em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;

  /* --- Colors --- */
  --color-primary: #6366F1;
  --color-primary-hover: #4F46E5;
  --color-primary-active: #4338CA;
  --color-primary-light: rgba(99, 102, 241, 0.15);
  --color-on-primary: #FFFFFF;

  --color-secondary: #8B5CF6;
  --color-secondary-hover: #7C3AED;
  --color-on-secondary: #FFFFFF;

  --color-text: #1E1B4B;
  --color-text-secondary: #4338CA;
  --color-text-hint: #818CF8;
  --color-text-disabled: #A5B4FC;
  --color-text-on-dark: #FFFFFF;

  /* Glass surfaces */
  --glass-bg: rgba(255, 255, 255, 0.6);
  --glass-bg-hover: rgba(255, 255, 255, 0.72);
  --glass-bg-strong: rgba(255, 255, 255, 0.78);
  --glass-border: rgba(255, 255, 255, 0.5);
  --glass-border-strong: rgba(255, 255, 255, 0.7);
  --glass-blur: 20px;
  --glass-blur-strong: 32px;

  --color-surface: var(--glass-bg);
  --color-surface-raised: var(--glass-bg-strong);
  --color-background-start: #667EEA;
  --color-background-end: #764BA2;

  --color-border: var(--glass-border);
  --color-border-strong: var(--glass-border-strong);
  --color-divider: rgba(255, 255, 255, 0.3);

  --color-success: #059669;
  --color-success-glass: rgba(5, 150, 105, 0.12);
  --color-warning: #D97706;
  --color-warning-glass: rgba(217, 119, 6, 0.12);
  --color-error: #DC2626;
  --color-error-glass: rgba(220, 38, 38, 0.12);
  --color-info: #6366F1;
  --color-info-glass: rgba(99, 102, 241, 0.12);

  --color-focus: #FFFFFF;
  --color-focus-ring: rgba(255, 255, 255, 0.6);

  /* --- Border Radius (Soft, rounded) --- */
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;

  /* --- Shadows (soft, diffused glow) --- */
  --shadow-1: 0 4px 16px rgba(0, 0, 0, 0.08);
  --shadow-2: 0 8px 32px rgba(0, 0, 0, 0.1);
  --shadow-3: 0 16px 48px rgba(0, 0, 0, 0.12);
  --shadow-glow: 0 0 24px rgba(99, 102, 241, 0.2);

  /* --- Transitions --- */
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
  --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-enter: cubic-bezier(0, 0, 0.2, 1);
  --easing-exit: cubic-bezier(0.4, 0, 1, 1);

  /* --- Layout --- */
  --max-width: 1200px;
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

/* --- Glass mixin (apply to any surface) --- */
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
}

.glass--strong {
  background: var(--glass-bg-strong);
  backdrop-filter: blur(var(--glass-blur-strong));
  -webkit-backdrop-filter: blur(var(--glass-blur-strong));
  border: 1px solid var(--glass-border-strong);
}
```

---

## Layout & Rhythm

This skill uses **flowing rhythm**: spacing varies contextually. Related items sit closer together, unrelated groups have more space between them. The spacing is proportional and harmonious, not random.

### Rhythm rules

- Tightly related elements (label to input, icon to text): `var(--space-2)` to `var(--space-3)`
- Related siblings (form fields, list items): `var(--space-5)`
- Grouped sections (form to actions, card body to footer): `var(--space-6)`
- Distinct sections (page sections, major content blocks): `var(--space-8)` to `var(--space-9)`
- Card internal padding: `var(--space-6)` (36px)
- Page max-width: `var(--max-width)` centered with `var(--gutter)` side padding

### Background layer (MANDATORY)

Every page must include this gradient background. Glass surfaces are invisible without it.

```css
body {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--color-background-start), var(--color-background-end));
  background-attachment: fixed;
  font-family: var(--font-family);
  color: var(--color-text);
}
```

### Grid

```css
.layout-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gutter);
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

/* Flowing rhythm — contextual spacing classes */
.layout-stack-tight > * + * { margin-block-start: var(--space-3); }
.layout-stack > * + * { margin-block-start: var(--space-5); }
.layout-stack-loose > * + * { margin-block-start: var(--space-7); }

.layout-section {
  padding-block: var(--space-8) var(--space-9);
}
```

### Balance: Symmetric

- Center page content
- Equal column widths for related items
- Center headings and hero text
- Equal padding on both sides

---

## Component Patterns

### Buttons

Four variants: primary, secondary, ghost, destructive. Glass-style ghost button is the signature element.

```html
<button class="btn btn--primary" type="button">Primary Action</button>
<button class="btn btn--secondary" type="button">Secondary</button>
<button class="btn btn--ghost" type="button">Ghost Glass</button>
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
  border-radius: var(--radius-full);
  cursor: pointer;
  min-height: 44px;
  text-decoration: none;
  transition: all var(--duration-base) var(--easing-standard);
}

.btn:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
  box-shadow: var(--shadow-glow);
}

.btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  pointer-events: none;
}

/* Primary — solid indigo, glow on hover */
.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  box-shadow: var(--shadow-1);
}
.btn--primary:hover {
  background-color: var(--color-primary-hover);
  box-shadow: var(--shadow-glow), var(--shadow-2);
  transform: translateY(-1px);
}
.btn--primary:active {
  background-color: var(--color-primary-active);
  transform: translateY(0);
  box-shadow: var(--shadow-1);
}

/* Secondary — glass surface */
.btn--secondary {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  color: var(--color-text);
  border: 1px solid var(--glass-border);
}
.btn--secondary:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-strong);
  transform: translateY(-1px);
  box-shadow: var(--shadow-2);
}
.btn--secondary:active {
  transform: translateY(0);
}

/* Ghost — transparent with glass hover */
.btn--ghost {
  background: transparent;
  color: var(--color-text-on-dark);
}
.btn--ghost:hover {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
}
.btn--ghost:active {
  background: var(--glass-bg-hover);
}

/* Destructive */
.btn--destructive {
  background-color: var(--color-error);
  color: var(--color-text-on-dark);
}
.btn--destructive:hover {
  background-color: #B91C1C;
  box-shadow: 0 0 24px rgba(220, 38, 38, 0.3), var(--shadow-2);
  transform: translateY(-1px);
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
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: var(--radius-full);
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
```

### Text Inputs

Glass-frosted input fields. The border becomes more opaque on focus.

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
}

.field__label {
  font-family: var(--font-family);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-on-dark);
  letter-spacing: var(--letter-spacing-wide);
}

.field__input {
  font-family: var(--font-family);
  font-size: var(--text-base);
  line-height: var(--line-height-base);
  color: var(--color-text);
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  padding: var(--space-4) var(--space-5);
  min-height: 44px;
  transition: all var(--duration-fast) var(--easing-standard);
}

.field__input::placeholder {
  color: var(--color-text-hint);
}

.field__input:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-strong);
}

.field__input:focus {
  outline: none;
  border-color: var(--color-focus);
  box-shadow: var(--shadow-glow);
  background: var(--glass-bg-strong);
}

.field__helper {
  font-size: var(--text-xs);
  color: var(--color-text-on-dark);
  opacity: 0.7;
}

/* Error state */
.field--error .field__input {
  border-color: var(--color-error);
  background: rgba(220, 38, 38, 0.08);
}

.field--error .field__input:focus {
  box-shadow: 0 0 24px rgba(220, 38, 38, 0.2);
}

.field__error {
  font-size: var(--text-xs);
  color: var(--color-error);
  font-weight: var(--font-weight-semibold);
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
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  padding: var(--space-4) var(--space-8) var(--space-4) var(--space-5);
  min-height: 44px;
  width: 100%;
  appearance: none;
  cursor: pointer;
  transition: all var(--duration-fast) var(--easing-standard);
}

.select-wrapper::after {
  content: '';
  position: absolute;
  right: var(--space-5);
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid var(--color-text-hint);
  pointer-events: none;
}

.field__select:focus {
  outline: none;
  border-color: var(--color-focus);
  box-shadow: var(--shadow-glow);
  background: var(--glass-bg-strong);
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
  width: 22px;
  height: 22px;
  min-width: 22px;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border-strong);
  border-radius: var(--radius-sm);
  cursor: pointer;
  margin-top: 2px;
  transition: all var(--duration-fast) var(--easing-standard);
}

.checkbox__input:checked {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
  background-size: 14px;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: var(--shadow-glow);
}

.checkbox__input:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
  box-shadow: var(--shadow-glow);
}

.checkbox__label {
  font-family: var(--font-family);
  font-size: var(--text-base);
  color: var(--color-text-on-dark);
  cursor: pointer;
  line-height: var(--line-height-base);
}
```

### Cards

Frosted glass surface. The primary visual element of this style.

```html
<article class="card glass">
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
```

```css
.card {
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all var(--duration-base) var(--easing-standard);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-2);
  background: var(--glass-bg-hover);
}

.card__image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}

.card__body {
  padding: var(--space-6);
}

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

Glass surface with a colored glow on the left edge.

```html
<div class="toast toast--success glass" role="status" aria-live="polite">
  <span class="toast__icon" aria-hidden="true">✓</span>
  <div class="toast__content">
    <p class="toast__title">Changes saved</p>
    <p class="toast__message">Your settings have been updated.</p>
  </div>
  <button class="toast__dismiss" type="button" aria-label="Dismiss notification">×</button>
</div>
```

```css
.toast {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-6);
  border-radius: var(--radius-md);
  max-width: 420px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

/* Colored glow bar */
.toast::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
}

.toast--info::before { background: var(--color-info); box-shadow: 0 0 16px var(--color-info); }
.toast--success::before { background: var(--color-success); box-shadow: 0 0 16px var(--color-success); }
.toast--warning::before { background: var(--color-warning); box-shadow: 0 0 16px var(--color-warning); }
.toast--error::before { background: var(--color-error); box-shadow: 0 0 16px var(--color-error); }

.toast__icon {
  font-size: var(--text-md);
  line-height: 1;
  flex-shrink: 0;
  margin-top: 2px;
}

.toast--info .toast__icon { color: var(--color-info); }
.toast--success .toast__icon { color: var(--color-success); }
.toast--warning .toast__icon { color: var(--color-warning); }
.toast--error .toast__icon { color: var(--color-error); }

.toast__content { flex: 1; }

.toast__title {
  font-family: var(--font-family);
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin: 0;
}

.toast__message {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin: var(--space-1) 0 0;
  line-height: var(--line-height-base);
}

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
  transition: all var(--duration-fast) var(--easing-standard);
}

.toast__dismiss:hover {
  color: var(--color-text);
  background: var(--glass-bg);
}

.toast__dismiss:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

### Navigation Bar

Frosted glass navbar that floats above the gradient background.

```html
<header class="navbar glass--strong" role="banner">
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
  border-bottom: 1px solid var(--color-divider);
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
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  text-decoration: none;
  letter-spacing: var(--letter-spacing-tight);
}

.navbar__links {
  display: flex;
  gap: var(--space-2);
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
  border-radius: var(--radius-full);
  transition: all var(--duration-fast) var(--easing-standard);
  min-height: 44px;
  display: flex;
  align-items: center;
}

.navbar__link:hover {
  color: var(--color-text);
  background: var(--glass-bg);
}

.navbar__link--active {
  color: var(--color-on-primary);
  background: var(--color-primary);
  box-shadow: var(--shadow-glow);
}

.navbar__link:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.navbar__actions {
  margin-inline-start: auto;
}
```

### Typography

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family);
  color: var(--color-text-on-dark);
  line-height: var(--line-height-tight);
  margin: 0;
}

h1 {
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
}

h2 {
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
}

h3 {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
}

h4 {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
}

h5 {
  font-size: var(--text-md);
  font-weight: var(--font-weight-medium);
}

h6 {
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--color-text-hint);
}

p, li, td, th {
  font-family: var(--font-family);
  font-size: var(--text-base);
  line-height: var(--line-height-base);
  color: var(--color-text-on-dark);
}

/* When text is inside a glass surface, use dark text */
.glass p, .glass li, .glass td, .glass th { color: var(--color-text); }
.glass h1, .glass h2, .glass h3, .glass h4, .glass h5, .glass h6 { color: var(--color-text); }

small, .text-sm { font-size: var(--text-sm); }
.text-secondary { color: var(--color-text-secondary); }
.text-hint { color: var(--color-text-hint); }

code, pre {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

code {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
  border: 1px solid var(--glass-border);
}

pre {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  color: var(--color-text-on-dark);
  padding: var(--space-6);
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border);
  overflow-x: auto;
}

pre code {
  background: none;
  border: none;
  padding: 0;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  color: inherit;
}

a {
  color: var(--color-text-on-dark);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--color-primary);
  transition: color var(--duration-fast) var(--easing-standard);
}

.glass a { color: var(--color-primary); }

a:hover { color: var(--color-primary); }

a:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
  border-radius: 2px;
}

blockquote {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-left: 4px solid var(--color-primary);
  padding: var(--space-5) var(--space-6);
  margin: 0;
  border-radius: var(--radius-sm);
  color: var(--color-text);
  font-style: italic;
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
  <input class="search__input" type="search" id="search-input"
         placeholder="Search…" autocomplete="off">
</div>
```

```css
.search {
  position: relative;
  max-width: 360px;
}

.search__icon {
  position: absolute;
  left: var(--space-5);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-hint);
  pointer-events: none;
  display: flex;
}

.search__input {
  font-family: var(--font-family);
  font-size: var(--text-base);
  color: var(--color-text);
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-full);
  padding: var(--space-4) var(--space-5) var(--space-4) var(--space-8);
  width: 100%;
  min-height: 44px;
  transition: all var(--duration-fast) var(--easing-standard);
}

.search__input:focus {
  outline: none;
  border-color: var(--color-focus);
  box-shadow: var(--shadow-glow);
  background: var(--glass-bg-strong);
}

.search__input::placeholder {
  color: var(--color-text-hint);
}
```

### Modal / Dialog

```html
<dialog class="modal glass--strong" aria-labelledby="modal-title">
  <div class="modal__header">
    <h2 class="modal__title" id="modal-title">Confirm Action</h2>
    <button class="modal__close" type="button" aria-label="Close dialog">×</button>
  </div>
  <div class="modal__body">
    <p>Are you sure you want to proceed? This cannot be undone.</p>
  </div>
  <div class="modal__footer">
    <button class="btn btn--ghost" type="button">Cancel</button>
    <button class="btn btn--primary" type="button">Confirm</button>
  </div>
</dialog>
```

```css
.modal {
  border: 1px solid var(--glass-border-strong);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-3);
  padding: 0;
  max-width: 480px;
  width: calc(100% - var(--space-8));
}

.modal::backdrop {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6) var(--space-6) 0;
}

.modal__title {
  font-family: var(--font-family);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
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
  transition: all var(--duration-fast) var(--easing-standard);
}

.modal__close:hover {
  color: var(--color-text);
  background: var(--glass-bg);
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

---

## Accessibility Rules

These are mandatory. Every generated component must satisfy all of the following:

1. **Contrast:** All text meets WCAG AA — minimum 4.5:1 for normal text, 3:1 for large text. Critical note for glass: the semi-transparent backgrounds mean text contrast depends on what's behind the surface. Use `--color-text` (#1E1B4B dark indigo) on glass surfaces, which passes AA against the glass-bg composited on the gradient. For text directly on the gradient background (outside glass), use `--color-text-on-dark` (#FFFFFF).

2. **Focus indicators:** Every interactive element has `:focus-visible` with `outline: 2px solid var(--color-focus); outline-offset: 2px`. White outlines are used because they're visible against both the gradient background and glass surfaces.

3. **Touch targets:** Minimum 44×44px for all interactive elements.

4. **Keyboard navigation:** All interactive elements reachable via Tab. Custom widgets implement arrow key navigation. Modals trap focus. Escape closes overlays.

5. **Semantic HTML:** Correct elements — `<button>` for actions, `<a>` for navigation, `<nav>`, `<main>`, `<header>`, `<footer>`, `<fieldset>`, `<legend>`.

6. **Labels:** Every form input has an associated `<label>` or `aria-label`. Placeholders are never label substitutes.

7. **ARIA:** `aria-invalid`, `aria-describedby`, `aria-current="page"`, `role="alert"`, `aria-label` on icon-only buttons, `aria-live` for dynamic updates.

8. **Images:** All `<img>` have `alt`. Decorative images use `alt=""`.

9. **Color:** Never convey information through color alone.

10. **Backdrop-filter fallback:** Some browsers may not support `backdrop-filter`. The `--glass-bg` color (rgba white at 0.6) provides a usable opaque-ish surface even without blur. No additional fallback needed, but do not rely on blur alone for readability.

---

## Validation Checklist

Before presenting UI code, verify every item:

- [ ] All spacing values use tokens (`--space-1` through `--space-10`)
- [ ] All colors reference tokens — no hex, rgb, or hsl literals except in token definitions
- [ ] All font sizes use type scale tokens
- [ ] All border-radius values use radius tokens (should be 12px+ everywhere — this is glassmorphism)
- [ ] All glass surfaces use `backdrop-filter: blur()` with `-webkit-` prefix
- [ ] Body has the gradient background (`linear-gradient(135deg, ...)` with `background-attachment: fixed`)
- [ ] All interactive elements have `:focus-visible` styles with white outlines
- [ ] All form inputs have associated `<label>` elements
- [ ] All buttons use `<button>` elements
- [ ] Color contrast meets WCAG AA — especially verify text on glass surfaces
- [ ] All interactive elements meet 44×44px minimum touch target
- [ ] HTML structure matches reference patterns
- [ ] No inline styles
- [ ] Semantic HTML used correctly
- [ ] ARIA attributes applied where applicable
- [ ] Flowing rhythm maintained — related items close, unrelated groups separated
- [ ] Layout is symmetric — centered content, equal columns
- [ ] The `.glass` or `.glass--strong` class is applied to surface elements
- [ ] Text color switches between `--color-text-on-dark` (on gradient) and `--color-text` (inside glass)
