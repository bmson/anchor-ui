# UI Skill: Neumorphic Soft

> **Style:** Neumorphism
> **Rhythm:** Flowing
> **Whitespace:** Spacious
> **Emphasis:** Subtle
> **Balance:** Symmetric
> **Harmony:** Tight
> **Unity:** Strict
> **Variety:** Minimal
> **Hierarchy:** Flat
> **A11Y Level:** WCAG AA

When generating any UI, follow every instruction in this document exactly. Use the provided CSS tokens for all values — never use raw hex colors, pixel values, or font sizes outside the defined scales. Copy component patterns structurally. Consistency is paramount: the same component should look identical every time it is generated.

**Critical requirement:** Neumorphism relies on matching the background color precisely. All surfaces share the same base color (`--color-bg`). Elements appear raised or inset through paired light/dark shadows cast onto that shared surface. Never use pure white or contrasting backgrounds for cards or containers — they break the illusion.

---

## Foundation Tokens

```css
/* === TOKENS: Neumorphic Soft === */
:root {
  /* --- Spacing (4px base, spacious 1.5x) --- */
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

  /* --- Type Scale (1.2 ratio, 16px base) --- */
  --font-family: 'Nunito Sans', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --text-xs: 0.694rem;
  --text-sm: 0.833rem;
  --text-base: 1rem;
  --text-md: 1.2rem;
  --text-lg: 1.44rem;
  --text-xl: 1.728rem;
  --text-2xl: 2.074rem;
  --text-3xl: 2.488rem;
  --line-height-tight: 1.25;
  --line-height-base: 1.6;
  --line-height-loose: 1.8;
  --font-weight-normal: 400;
  --font-weight-medium: 600;
  --font-weight-semibold: 700;
  --font-weight-bold: 800;
  --letter-spacing-tight: -0.01em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;

  /* --- The Base Surface Color (everything matches this) --- */
  --color-bg: #E4E8EC;

  /* --- Neumorphic Shadows --- */
  --shadow-light: rgba(255, 255, 255, 0.8);
  --shadow-dark: rgba(163, 177, 198, 0.6);

  /* Raised (convex) — light top-left, dark bottom-right */
  --neu-raised-sm: 3px 3px 6px var(--shadow-dark), -3px -3px 6px var(--shadow-light);
  --neu-raised: 6px 6px 12px var(--shadow-dark), -6px -6px 12px var(--shadow-light);
  --neu-raised-lg: 10px 10px 20px var(--shadow-dark), -10px -10px 20px var(--shadow-light);

  /* Inset (concave) — inverted */
  --neu-inset: inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light);
  --neu-inset-sm: inset 2px 2px 4px var(--shadow-dark), inset -2px -2px 4px var(--shadow-light);

  /* --- Colors --- */
  --color-primary: #6C63FF;
  --color-primary-hover: #5B52E0;
  --color-primary-active: #4A42C7;
  --color-primary-muted: rgba(108, 99, 255, 0.15);
  --color-on-primary: #FFFFFF;

  --color-surface: var(--color-bg);
  --color-surface-raised: var(--color-bg);
  --color-background: var(--color-bg);

  --color-text: #2D3748;
  --color-text-secondary: #5A6577;
  --color-text-hint: #8E99A9;
  --color-text-disabled: #B0B8C4;

  --color-border: transparent;
  --color-divider: rgba(163, 177, 198, 0.25);

  --color-success: #38A169;
  --color-success-muted: rgba(56, 161, 105, 0.15);
  --color-warning: #D69E2E;
  --color-warning-muted: rgba(214, 158, 46, 0.15);
  --color-error: #E53E3E;
  --color-error-muted: rgba(229, 62, 62, 0.15);
  --color-info: #6C63FF;
  --color-info-muted: rgba(108, 99, 255, 0.15);

  --color-focus: #6C63FF;
  --color-focus-ring: rgba(108, 99, 255, 0.4);

  /* --- Border Radius (very round, soft) --- */
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 9999px;

  /* --- Transitions --- */
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
  --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* --- Layout --- */
  --max-width: 1120px;
  --gutter: var(--space-6);
}

body {
  background-color: var(--color-bg);
  font-family: var(--font-family);
  color: var(--color-text);
}

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

**Flowing rhythm.** Related items cluster; distinct groups breathe apart.

```css
.layout-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gutter);
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

.layout-stack-tight > * + * { margin-block-start: var(--space-3); }
.layout-stack > * + * { margin-block-start: var(--space-5); }
.layout-stack-loose > * + * { margin-block-start: var(--space-7); }

.layout-section { padding-block: var(--space-8) var(--space-9); }
```

### Rhythm rules

- Label to input: `var(--space-2)`
- Input to helper text: `var(--space-1)`
- Related form fields: `var(--space-5)`
- Section groups: `var(--space-7)` to `var(--space-8)`
- Card padding: `var(--space-6)`

### Balance: Symmetric, centered.

### Emphasis: Subtle

CTAs are differentiated by color fill only. No size or weight differences. The neumorphic surface itself provides visual interest — buttons don't need to shout.

---

## Component Patterns

### Buttons

Raised neumorphic surface that presses inset on click. The primary adds a color fill.

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
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);
  padding: var(--space-4) var(--space-6);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  min-height: 44px;
  text-decoration: none;
  background-color: var(--color-bg);
  color: var(--color-text);
  box-shadow: var(--neu-raised);
  transition: box-shadow var(--duration-fast) var(--easing-standard);
}

.btn:hover {
  box-shadow: var(--neu-raised-lg);
}

.btn:active {
  box-shadow: var(--neu-inset);
}

.btn:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 3px;
}

.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

/* Primary — filled with color, still has neumorphic shadow */
.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

.btn--primary:active {
  box-shadow: var(--neu-inset);
  background-color: var(--color-primary-active);
}

/* Secondary — surface color, text primary */
.btn--secondary {
  color: var(--color-primary);
}

/* Ghost — flat, no shadow */
.btn--ghost {
  box-shadow: none;
  color: var(--color-text-secondary);
  background-color: transparent;
}

.btn--ghost:hover {
  box-shadow: var(--neu-raised-sm);
}

.btn--ghost:active {
  box-shadow: var(--neu-inset-sm);
}

/* Destructive */
.btn--destructive {
  background-color: var(--color-error);
  color: var(--color-on-primary);
}

.btn--destructive:active {
  box-shadow: var(--neu-inset);
}

/* Sizes */
.btn--sm {
  font-size: var(--text-sm);
  padding: var(--space-3) var(--space-5);
  min-height: 44px;
  box-shadow: var(--neu-raised-sm);
}

.btn--lg {
  font-size: var(--text-md);
  padding: var(--space-5) var(--space-8);
  box-shadow: var(--neu-raised-lg);
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

Inset neumorphic field. The input appears carved into the surface.

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
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  letter-spacing: var(--letter-spacing-wide);
}

.field__input {
  font-family: var(--font-family);
  font-size: var(--text-base);
  line-height: var(--line-height-base);
  color: var(--color-text);
  background-color: var(--color-bg);
  border: none;
  border-radius: var(--radius-sm);
  padding: var(--space-4) var(--space-5);
  min-height: 44px;
  box-shadow: var(--neu-inset);
  transition: box-shadow var(--duration-fast) var(--easing-standard);
}

.field__input::placeholder {
  color: var(--color-text-hint);
}

.field__input:hover {
  box-shadow: inset 5px 5px 10px var(--shadow-dark), inset -5px -5px 10px var(--shadow-light);
}

.field__input:focus {
  outline: none;
  box-shadow: var(--neu-inset), 0 0 0 3px var(--color-focus-ring);
}

.field__helper {
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
}

/* Error */
.field--error .field__input {
  box-shadow: var(--neu-inset), inset 0 0 0 2px var(--color-error);
}

.field--error .field__input:focus {
  box-shadow: var(--neu-inset), 0 0 0 3px rgba(229, 62, 62, 0.3);
}

.field__error {
  font-size: var(--text-xs);
  color: var(--color-error);
  font-weight: var(--font-weight-medium);
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
  background-color: var(--color-bg);
  border: none;
  border-radius: var(--radius-sm);
  padding: var(--space-4) var(--space-8) var(--space-4) var(--space-5);
  min-height: 44px;
  width: 100%;
  appearance: none;
  cursor: pointer;
  box-shadow: var(--neu-raised);
  transition: box-shadow var(--duration-fast) var(--easing-standard);
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
  box-shadow: var(--neu-raised), 0 0 0 3px var(--color-focus-ring);
}

.field__select:active {
  box-shadow: var(--neu-inset);
}
```

### Checkbox

Neumorphic toggle-style checkbox.

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
  background-color: var(--color-bg);
  border: none;
  border-radius: var(--radius-sm);
  box-shadow: var(--neu-raised-sm);
  cursor: pointer;
  margin-top: 2px;
  transition: box-shadow var(--duration-fast) var(--easing-standard);
}

.checkbox__input:checked {
  background-color: var(--color-primary);
  box-shadow: var(--neu-inset-sm);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
  background-size: 14px;
  background-position: center;
  background-repeat: no-repeat;
}

.checkbox__input:focus-visible {
  outline: 2px solid var(--color-focus);
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

Raised neumorphic surface. No borders — shadows create the definition.

```html
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
```

```css
.card {
  background-color: var(--color-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--neu-raised);
  overflow: hidden;
  transition: box-shadow var(--duration-base) var(--easing-standard);
}

.card:hover {
  box-shadow: var(--neu-raised-lg);
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
  font-weight: var(--font-weight-semibold);
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

Raised neumorphic surface with a muted color tint.

```html
<div class="toast toast--success" role="status" aria-live="polite">
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
  background-color: var(--color-bg);
  box-shadow: var(--neu-raised);
  max-width: 420px;
  width: 100%;
}

.toast--info { background-color: color-mix(in srgb, var(--color-bg) 92%, var(--color-info)); }
.toast--success { background-color: color-mix(in srgb, var(--color-bg) 92%, var(--color-success)); }
.toast--warning { background-color: color-mix(in srgb, var(--color-bg) 92%, var(--color-warning)); }
.toast--error { background-color: color-mix(in srgb, var(--color-bg) 92%, var(--color-error)); }

.toast__icon {
  font-size: var(--text-md);
  line-height: 1;
  flex-shrink: 0;
  margin-top: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  box-shadow: var(--neu-raised-sm);
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
  background: var(--color-bg);
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
  box-shadow: var(--neu-raised-sm);
  transition: box-shadow var(--duration-fast) var(--easing-standard);
}

.toast__dismiss:hover { color: var(--color-text); }
.toast__dismiss:active { box-shadow: var(--neu-inset-sm); }
.toast__dismiss:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 3px; }
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
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-bg);
  box-shadow: var(--neu-raised-sm);
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
  border-radius: var(--radius-sm);
  min-height: 44px;
  display: flex;
  align-items: center;
  transition: box-shadow var(--duration-fast) var(--easing-standard),
              color var(--duration-fast) var(--easing-standard);
}

.navbar__link:hover {
  color: var(--color-text);
  box-shadow: var(--neu-raised-sm);
}

.navbar__link--active {
  color: var(--color-primary);
  box-shadow: var(--neu-inset-sm);
}

.navbar__link:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 3px;
}

.navbar__actions { margin-inline-start: auto; }
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
.search { position: relative; max-width: 360px; }

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
  background-color: var(--color-bg);
  border: none;
  border-radius: var(--radius-full);
  padding: var(--space-4) var(--space-5) var(--space-4) var(--space-8);
  width: 100%;
  min-height: 44px;
  box-shadow: var(--neu-inset);
  transition: box-shadow var(--duration-fast) var(--easing-standard);
}

.search__input:focus {
  outline: none;
  box-shadow: var(--neu-inset), 0 0 0 3px var(--color-focus-ring);
}

.search__input::placeholder { color: var(--color-text-hint); }
```

### Modal / Dialog

```html
<dialog class="modal" aria-labelledby="modal-title">
  <div class="modal__header">
    <h2 class="modal__title" id="modal-title">Confirm Action</h2>
    <button class="modal__close" type="button" aria-label="Close dialog">×</button>
  </div>
  <div class="modal__body">
    <p>Are you sure you want to proceed?</p>
  </div>
  <div class="modal__footer">
    <button class="btn btn--ghost" type="button">Cancel</button>
    <button class="btn btn--primary" type="button">Confirm</button>
  </div>
</dialog>
```

```css
.modal {
  border: none;
  border-radius: var(--radius-lg);
  background-color: var(--color-bg);
  box-shadow: var(--neu-raised-lg);
  padding: 0;
  max-width: 480px;
  width: calc(100% - var(--space-8));
}

.modal::backdrop { background-color: rgba(0, 0, 0, 0.3); }

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
  background: var(--color-bg);
  border: none;
  color: var(--color-text-hint);
  cursor: pointer;
  padding: var(--space-2);
  font-size: var(--text-lg);
  border-radius: var(--radius-sm);
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--neu-raised-sm);
}

.modal__close:hover { color: var(--color-text); }
.modal__close:active { box-shadow: var(--neu-inset-sm); }
.modal__close:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 3px; }

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

/* Flat hierarchy — gentle size progression */
h1 { font-size: var(--text-2xl); font-weight: var(--font-weight-bold); }
h2 { font-size: var(--text-xl); font-weight: var(--font-weight-bold); }
h3 { font-size: var(--text-lg); font-weight: var(--font-weight-semibold); }
h4 { font-size: var(--text-md); font-weight: var(--font-weight-semibold); }
h5 { font-size: var(--text-base); font-weight: var(--font-weight-medium); }
h6 { font-size: var(--text-sm); font-weight: var(--font-weight-medium); color: var(--color-text-secondary); letter-spacing: var(--letter-spacing-wide); text-transform: uppercase; }

p, li, td, th {
  font-family: var(--font-family);
  font-size: var(--text-base);
  line-height: var(--line-height-base);
  color: var(--color-text);
}

small, .text-sm { font-size: var(--text-sm); }
.text-secondary { color: var(--color-text-secondary); }
.text-hint { color: var(--color-text-hint); }

code, pre { font-family: var(--font-mono); font-size: var(--text-sm); }

code {
  background-color: var(--color-bg);
  box-shadow: var(--neu-inset-sm);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
}

pre {
  background-color: #2D3748;
  color: #E2E8F0;
  padding: var(--space-6);
  border-radius: var(--radius-md);
  box-shadow: var(--neu-inset);
  overflow-x: auto;
}

pre code { background: none; box-shadow: none; padding: 0; color: inherit; }

a {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 3px;
}
a:hover { color: var(--color-primary-hover); }
a:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 3px; border-radius: 2px; }

blockquote {
  background-color: var(--color-bg);
  box-shadow: var(--neu-inset);
  padding: var(--space-5) var(--space-6);
  margin: 0;
  border-radius: var(--radius-sm);
  color: var(--color-text-secondary);
  font-style: italic;
}
```

---

## Accessibility Rules

Mandatory for every component:

1. **Contrast:** WCAG AA — 4.5:1 normal text, 3:1 large text. `--color-text` (#2D3748) on `--color-bg` (#E4E8EC) passes at 5.1:1.
2. **Focus:** `:focus-visible` with `outline: 2px solid var(--color-focus); outline-offset: 3px`. The 3px offset ensures visibility over the neumorphic shadows.
3. **Touch targets:** 44×44px minimum.
4. **Keyboard:** Tab for all interactive elements. Arrow keys for custom widgets. Focus trap in modals. Escape closes overlays.
5. **Semantic HTML:** `<button>`, `<a>`, `<nav>`, `<main>`, `<header>`, `<footer>`, `<fieldset>`, `<legend>`.
6. **Labels:** All inputs have `<label>` or `aria-label`. No placeholder-as-label.
7. **ARIA:** `aria-invalid`, `aria-describedby`, `aria-current="page"`, `role="alert"`, `aria-label` on icon buttons.
8. **Images:** `alt` on all `<img>`. `alt=""` for decorative.
9. **Color:** Never color-only information.

---

## Validation Checklist

- [ ] All spacing uses tokens (`--space-1` through `--space-10`)
- [ ] All colors use tokens — no raw values
- [ ] All font sizes use type scale tokens
- [ ] **All card/container backgrounds match `--color-bg`** — no white or contrasting surfaces
- [ ] Raised elements use `--neu-raised` variants, inset elements use `--neu-inset` variants
- [ ] **No standard box-shadows** — only neumorphic paired light/dark shadows
- [ ] **No borders on containers** — shadows define edges, not border lines
- [ ] Border radius is 12px+ everywhere (soft, rounded)
- [ ] Inputs appear inset (carved in), buttons/cards appear raised (pushed out)
- [ ] Buttons transition from raised to inset on `:active`
- [ ] All interactive elements have `:focus-visible` with 3px offset
- [ ] All form inputs have `<label>` elements
- [ ] All buttons use `<button>`
- [ ] Contrast meets WCAG AA
- [ ] Touch targets meet 44×44px
- [ ] HTML matches reference patterns
- [ ] No inline styles
- [ ] Semantic HTML used correctly
- [ ] ARIA attributes applied
- [ ] Body background is `var(--color-bg)` (#E4E8EC)
