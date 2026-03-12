# UI Skill: Warm Organic

> **Style:** Organic/Humanist
> **Rhythm:** Flowing
> **Whitespace:** Spacious
> **Emphasis:** Moderate
> **Balance:** Symmetric
> **Harmony:** Moderate
> **Unity:** Flexible
> **Variety:** Moderate
> **Hierarchy:** Moderate
> **A11Y Level:** WCAG AA

When generating any UI, follow every instruction in this document exactly. Use the provided CSS tokens for all values — never use raw hex colors, pixel values, or font sizes outside the defined scales. Copy component patterns structurally. Consistency is paramount.

**Core principle:** Warmth, not coldness. Rounded, not sharp. Earthy palette, not synthetic. Serif headings mixed with sans-serif body — intentional typographic variety that feels handcrafted. Soft shadows that feel like natural light. This UI should feel like a well-designed independent bookstore's website, not a SaaS dashboard.

---

## Foundation Tokens

```css
/* === TOKENS: Warm Organic === */
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
  --space-10: 128px;

  /* --- Type Scale (1.25 ratio, 17px base) --- */
  --font-heading: 'Lora', 'Georgia', 'Times New Roman', serif;
  --font-family: 'Source Sans 3', 'Source Sans Pro', -apple-system, sans-serif;
  --font-mono: 'Source Code Pro', 'Menlo', monospace;
  --text-xs: 0.64rem;
  --text-sm: 0.8rem;
  --text-base: 1.0625rem;  /* 17px */
  --text-md: 1.328rem;
  --text-lg: 1.66rem;
  --text-xl: 2.075rem;
  --text-2xl: 2.594rem;
  --text-3xl: 3.242rem;
  --line-height-tight: 1.25;
  --line-height-base: 1.65;
  --line-height-loose: 1.85;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --letter-spacing-tight: -0.01em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;

  /* --- Colors (earthy, warm) --- */
  --color-primary: #B45309;
  --color-primary-hover: #92400E;
  --color-primary-active: #78350F;
  --color-primary-light: #FEF3C7;
  --color-on-primary: #FFFFFF;

  --color-secondary: #166534;
  --color-secondary-hover: #14532D;
  --color-secondary-light: #DCFCE7;

  --color-surface: #FFFBF5;
  --color-surface-alt: #FFF7ED;
  --color-surface-warm: #FEF3C7;
  --color-background: #FFFBF5;

  --color-text: #3C2415;
  --color-text-secondary: #78573D;
  --color-text-hint: #A8896F;
  --color-text-disabled: #C4B5A3;

  --color-border: #E8D5C4;
  --color-border-strong: #D4B99A;
  --color-divider: #F3E8DB;

  --color-success: #166534;
  --color-success-light: #DCFCE7;
  --color-warning: #B45309;
  --color-warning-light: #FEF3C7;
  --color-error: #B91C1C;
  --color-error-light: #FEE2E2;
  --color-info: #1E40AF;
  --color-info-light: #DBEAFE;

  --color-focus: #B45309;
  --color-focus-ring: rgba(180, 83, 9, 0.3);

  /* --- Border Radius (very rounded, organic) --- */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-full: 9999px;

  /* --- Shadows (warm-tinted, soft) --- */
  --shadow-1: 0 2px 8px rgba(60, 36, 21, 0.06);
  --shadow-2: 0 4px 16px rgba(60, 36, 21, 0.08);
  --shadow-3: 0 8px 32px rgba(60, 36, 21, 0.1);
  --shadow-4: 0 16px 48px rgba(60, 36, 21, 0.12);

  /* --- Transitions --- */
  --duration-fast: 150ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;
  --easing-standard: cubic-bezier(0.25, 0.1, 0.25, 1);
  --easing-enter: cubic-bezier(0.0, 0.0, 0.2, 1);

  /* --- Layout --- */
  --max-width: 1080px;
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

**Flowing rhythm.** Related content clusters together; sections breathe generously apart.

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

- Label to input: `var(--space-2)` (8px)
- Input to helper text: `var(--space-1)` (6px)
- Related form fields: `var(--space-5)` (24px)
- Section groups: `var(--space-7)` (48px)
- Major sections: `var(--space-8)` to `var(--space-9)` (72–96px)
- Card padding: `var(--space-6)` (36px)

### Balance: Symmetric, centered. Content flows naturally.

---

## Component Patterns

### Buttons

Rounded, warm. Primary uses the amber/brown. Secondary uses the green.

```html
<button class="btn btn--primary" type="button">Save Changes</button>
<button class="btn btn--secondary" type="button">Secondary</button>
<button class="btn btn--ghost" type="button">Cancel</button>
<button class="btn btn--destructive" type="button">Delete</button>
<button class="btn btn--primary btn--loading" type="button" aria-busy="true" disabled>
  <span class="btn__spinner" aria-hidden="true"></span>
  Saving…
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
  padding: var(--space-4) var(--space-6);
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;
  min-height: 44px;
  text-decoration: none;
  transition: all var(--duration-base) var(--easing-standard);
}

.btn:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
.btn:disabled { opacity: 0.45; cursor: not-allowed; pointer-events: none; }

.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  box-shadow: var(--shadow-1);
}
.btn--primary:hover { background-color: var(--color-primary-hover); box-shadow: var(--shadow-2); transform: translateY(-1px); }
.btn--primary:active { background-color: var(--color-primary-active); transform: translateY(0); box-shadow: var(--shadow-1); }

.btn--secondary {
  background-color: var(--color-secondary);
  color: #FFFFFF;
  box-shadow: var(--shadow-1);
}
.btn--secondary:hover { background-color: var(--color-secondary-hover); box-shadow: var(--shadow-2); }

.btn--ghost {
  background-color: transparent;
  color: var(--color-text-secondary);
}
.btn--ghost:hover { background-color: var(--color-surface-alt); color: var(--color-text); }

.btn--destructive {
  background-color: var(--color-error);
  color: #FFFFFF;
}
.btn--destructive:hover { background-color: #991B1B; box-shadow: var(--shadow-2); }

.btn--sm { font-size: var(--text-sm); padding: var(--space-3) var(--space-5); min-height: 44px; }
.btn--lg { font-size: var(--text-md); padding: var(--space-5) var(--space-8); }

.btn--loading { position: relative; }
.btn__spinner {
  width: 16px; height: 16px;
  border: 2px solid currentColor; border-right-color: transparent;
  border-radius: var(--radius-full);
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
```

### Text Inputs

Warm background tint, generous padding, rounded.

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
  <span class="field__error" id="password-error" role="alert">At least 8 characters required.</span>
</div>
```

```css
.field { display: flex; flex-direction: column; gap: var(--space-2); }

.field__label {
  font-family: var(--font-family); font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold); color: var(--color-text);
}

.field__input {
  font-family: var(--font-family); font-size: var(--text-base);
  line-height: var(--line-height-base); color: var(--color-text);
  background-color: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4) var(--space-5);
  min-height: 44px;
  transition: all var(--duration-fast) var(--easing-standard);
}

.field__input::placeholder { color: var(--color-text-hint); }
.field__input:hover { border-color: var(--color-border-strong); background-color: var(--color-surface); }

.field__input:focus {
  outline: none;
  border-color: var(--color-focus);
  box-shadow: 0 0 0 3px var(--color-focus-ring);
  background-color: var(--color-surface);
}

.field__helper { font-size: var(--text-xs); color: var(--color-text-secondary); }

.field--error .field__input { border-color: var(--color-error); background-color: var(--color-error-light); }
.field--error .field__input:focus { box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.2); }
.field__error { font-size: var(--text-xs); color: var(--color-error); font-weight: var(--font-weight-semibold); }
```

### Select / Dropdown

```html
<div class="field">
  <label class="field__label" for="country">Country</label>
  <div class="select-wrapper">
    <select class="field__select" id="country" name="country">
      <option value="" disabled selected>Choose…</option>
      <option value="us">United States</option>
      <option value="is">Iceland</option>
    </select>
  </div>
</div>
```

```css
.select-wrapper { position: relative; }

.field__select {
  font-family: var(--font-family); font-size: var(--text-base); color: var(--color-text);
  background-color: var(--color-surface-alt);
  border: 1px solid var(--color-border); border-radius: var(--radius-md);
  padding: var(--space-4) var(--space-8) var(--space-4) var(--space-5);
  min-height: 44px; width: 100%; appearance: none; cursor: pointer;
  transition: all var(--duration-fast) var(--easing-standard);
}

.select-wrapper::after {
  content: ''; position: absolute; right: var(--space-5); top: 50%; transform: translateY(-50%);
  width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent;
  border-top: 5px solid var(--color-text-hint); pointer-events: none;
}

.field__select:focus { outline: none; border-color: var(--color-focus); box-shadow: 0 0 0 3px var(--color-focus-ring); }
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
  appearance: none; width: 22px; height: 22px; min-width: 22px;
  border: 2px solid var(--color-border-strong); border-radius: var(--radius-sm);
  background-color: var(--color-surface-alt); cursor: pointer; margin-top: 2px;
  transition: all var(--duration-fast) var(--easing-standard);
}

.checkbox__input:checked {
  background-color: var(--color-primary); border-color: var(--color-primary);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
  background-size: 14px; background-position: center; background-repeat: no-repeat;
}

.checkbox__input:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
.checkbox__label { font-family: var(--font-family); font-size: var(--text-base); color: var(--color-text); cursor: pointer; line-height: var(--line-height-base); }
```

### Cards

Warm surface with soft shadow. Rounded corners.

```html
<article class="card">
  <img class="card__image" src="photo.jpg" alt="Description" loading="lazy">
  <div class="card__body">
    <h3 class="card__title">Card Title</h3>
    <p class="card__text">A brief description with warm, inviting tone.</p>
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
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-1);
  overflow: hidden;
  transition: all var(--duration-base) var(--easing-standard);
}

.card:hover { box-shadow: var(--shadow-2); transform: translateY(-2px); }

.card__image { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; }
.card__body { padding: var(--space-6); }

.card__title {
  font-family: var(--font-heading); font-size: var(--text-lg);
  font-weight: var(--font-weight-bold); color: var(--color-text);
  line-height: var(--line-height-tight); margin: 0;
}

.card__text { font-size: var(--text-base); color: var(--color-text-secondary); line-height: var(--line-height-base); margin: var(--space-3) 0 0; }

.card__actions {
  display: flex; justify-content: flex-end; gap: var(--space-3);
  padding: var(--space-4) var(--space-6); border-top: 1px solid var(--color-divider);
}
```

### Notifications / Toasts

```html
<div class="toast toast--success" role="status" aria-live="polite">
  <span class="toast__icon" aria-hidden="true">✓</span>
  <div class="toast__content">
    <p class="toast__title">Saved</p>
    <p class="toast__message">Your changes are live.</p>
  </div>
  <button class="toast__dismiss" type="button" aria-label="Dismiss">×</button>
</div>
```

```css
.toast {
  display: flex; align-items: flex-start; gap: var(--space-4);
  padding: var(--space-5) var(--space-6);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-2);
  max-width: 420px; width: 100%;
}

.toast--info { border-left: 4px solid var(--color-info); }
.toast--success { border-left: 4px solid var(--color-success); }
.toast--warning { border-left: 4px solid var(--color-warning); }
.toast--error { border-left: 4px solid var(--color-error); }

.toast__icon { font-size: var(--text-md); line-height: 1; flex-shrink: 0; margin-top: 2px; }
.toast--info .toast__icon { color: var(--color-info); }
.toast--success .toast__icon { color: var(--color-success); }
.toast--warning .toast__icon { color: var(--color-warning); }
.toast--error .toast__icon { color: var(--color-error); }

.toast__content { flex: 1; }
.toast__title { font-family: var(--font-heading); font-size: var(--text-base); font-weight: var(--font-weight-bold); color: var(--color-text); margin: 0; }
.toast__message { font-size: var(--text-sm); color: var(--color-text-secondary); margin: var(--space-1) 0 0; line-height: var(--line-height-base); }

.toast__dismiss {
  appearance: none; background: none; border: none; color: var(--color-text-hint);
  cursor: pointer; padding: var(--space-2); font-size: var(--text-md);
  border-radius: var(--radius-sm); min-width: 44px; min-height: 44px;
  display: flex; align-items: center; justify-content: center;
}
.toast__dismiss:hover { color: var(--color-text); background-color: var(--color-surface-alt); }
.toast__dismiss:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
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
  position: sticky; top: 0; z-index: 100;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-1);
}

.navbar__inner {
  display: flex; align-items: center; gap: var(--space-6);
  max-width: var(--max-width); margin-inline: auto;
  padding: var(--space-4) var(--gutter); min-height: 56px;
}

.navbar__brand {
  font-family: var(--font-heading); font-size: var(--text-md);
  font-weight: var(--font-weight-bold); color: var(--color-text);
  text-decoration: none;
}

.navbar__links { display: flex; gap: var(--space-2); list-style: none; padding: 0; margin: 0; }

.navbar__link {
  font-family: var(--font-family); font-size: var(--text-sm);
  font-weight: var(--font-weight-medium); color: var(--color-text-secondary);
  text-decoration: none; padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md); min-height: 44px;
  display: flex; align-items: center;
  transition: all var(--duration-fast) var(--easing-standard);
}

.navbar__link:hover { color: var(--color-text); background-color: var(--color-surface-alt); }
.navbar__link--active { color: var(--color-primary); background-color: var(--color-primary-light); }
.navbar__link:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
.navbar__actions { margin-inline-start: auto; }
```

### Typography

Serif headings, sans-serif body. The combination creates warmth and intentional variety.

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--color-text);
  line-height: var(--line-height-tight);
  margin: 0;
}

h1 { font-size: var(--text-3xl); font-weight: var(--font-weight-bold); letter-spacing: var(--letter-spacing-tight); }
h2 { font-size: var(--text-2xl); font-weight: var(--font-weight-bold); }
h3 { font-size: var(--text-xl); font-weight: var(--font-weight-semibold); }
h4 { font-size: var(--text-lg); font-weight: var(--font-weight-semibold); }
h5 { font-size: var(--text-md); font-weight: var(--font-weight-medium); }
h6 { font-family: var(--font-family); font-size: var(--text-sm); font-weight: var(--font-weight-semibold); color: var(--color-text-secondary); letter-spacing: var(--letter-spacing-wide); text-transform: uppercase; }

p, li, td, th { font-family: var(--font-family); font-size: var(--text-base); line-height: var(--line-height-base); color: var(--color-text); }

small, .text-sm { font-size: var(--text-sm); }
.text-secondary { color: var(--color-text-secondary); }

code, pre { font-family: var(--font-mono); font-size: var(--text-sm); }
code { background-color: var(--color-surface-alt); padding: var(--space-1) var(--space-2); border-radius: var(--radius-sm); border: 1px solid var(--color-border); }
pre { background-color: #2D2418; color: #F5E6D3; padding: var(--space-6); border-radius: var(--radius-md); overflow-x: auto; }
pre code { background: none; border: none; padding: 0; color: inherit; }

a { color: var(--color-primary); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
a:hover { color: var(--color-primary-hover); text-decoration-thickness: 2px; }
a:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; border-radius: 2px; }

blockquote {
  border-left: 3px solid var(--color-primary);
  padding: var(--space-5) var(--space-6); margin: 0;
  background-color: var(--color-surface-alt);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  font-family: var(--font-heading); font-style: italic;
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
.search { position: relative; max-width: 360px; }

.search__icon {
  position: absolute; left: var(--space-5); top: 50%; transform: translateY(-50%);
  color: var(--color-text-hint); pointer-events: none; display: flex;
}

.search__input {
  font-family: var(--font-family); font-size: var(--text-base); color: var(--color-text);
  background-color: var(--color-surface-alt);
  border: 1px solid var(--color-border); border-radius: var(--radius-full);
  padding: var(--space-4) var(--space-5) var(--space-4) var(--space-8);
  width: 100%; min-height: 44px;
  transition: all var(--duration-fast) var(--easing-standard);
}

.search__input:focus { outline: none; border-color: var(--color-focus); box-shadow: 0 0 0 3px var(--color-focus-ring); background-color: var(--color-surface); }
.search__input::placeholder { color: var(--color-text-hint); }
```

### Modal / Dialog

```html
<dialog class="modal" aria-labelledby="modal-title">
  <div class="modal__header">
    <h2 class="modal__title" id="modal-title">Are you sure?</h2>
    <button class="modal__close" type="button" aria-label="Close">×</button>
  </div>
  <div class="modal__body"><p>This action cannot be undone.</p></div>
  <div class="modal__footer">
    <button class="btn btn--ghost" type="button">Cancel</button>
    <button class="btn btn--primary" type="button">Confirm</button>
  </div>
</dialog>
```

```css
.modal {
  border: 1px solid var(--color-border); border-radius: var(--radius-xl);
  box-shadow: var(--shadow-4); padding: 0;
  max-width: 460px; width: calc(100% - var(--space-8));
  background-color: var(--color-surface);
}
.modal::backdrop { background-color: rgba(60, 36, 21, 0.35); }

.modal__header { display: flex; align-items: center; justify-content: space-between; padding: var(--space-6) var(--space-6) 0; }
.modal__title { font-family: var(--font-heading); font-size: var(--text-lg); font-weight: var(--font-weight-bold); color: var(--color-text); margin: 0; }

.modal__close {
  appearance: none; background: none; border: none; color: var(--color-text-hint);
  cursor: pointer; padding: var(--space-2); font-size: var(--text-lg);
  border-radius: var(--radius-full); min-width: 44px; min-height: 44px;
  display: flex; align-items: center; justify-content: center;
}
.modal__close:hover { color: var(--color-text); background-color: var(--color-surface-alt); }
.modal__close:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }

.modal__body { padding: var(--space-5) var(--space-6); color: var(--color-text-secondary); line-height: var(--line-height-base); }
.modal__footer { display: flex; justify-content: flex-end; gap: var(--space-3); padding: var(--space-4) var(--space-6) var(--space-6); }
```

---

## Accessibility Rules

Mandatory:

1. **Contrast:** WCAG AA. `--color-text` (#3C2415) on `--color-surface` (#FFFBF5) = 11.3:1. `--color-text-secondary` (#78573D) on surface = 5.2:1. Both pass. `--color-primary` (#B45309) on surface = 5.1:1 — passes.
2. **Focus:** `:focus-visible` with amber `outline: 2px solid var(--color-focus); outline-offset: 2px`.
3. **Touch targets:** 44×44px.
4. **Keyboard:** Full navigation.
5. **Semantic HTML:** Correct elements.
6. **Labels:** All inputs labeled.
7. **ARIA:** Applied per patterns.
8. **Images:** `alt` on all.
9. **Color:** Never color-only.

---

## Validation Checklist

- [ ] All spacing uses tokens
- [ ] All colors use earthy/warm palette tokens — no cool blues or grays outside info/error semantics
- [ ] All font sizes use type scale tokens
- [ ] **Headings use `--font-heading` (serif)**, body/UI uses `--font-family` (sans-serif)
- [ ] Card titles also use the serif heading font
- [ ] Toast titles use the serif heading font
- [ ] Navbar brand uses the serif heading font
- [ ] Border radius is 8px+ everywhere (rounded, organic)
- [ ] Shadows use warm-tinted tokens (brown-based rgba, not black)
- [ ] Background surfaces use warm off-white (`--color-surface` / `--color-surface-alt`)
- [ ] All interactive elements have `:focus-visible`
- [ ] All form inputs have `<label>`
- [ ] All buttons use `<button>`
- [ ] Contrast meets WCAG AA
- [ ] Touch targets 44×44px
- [ ] HTML matches patterns
- [ ] No inline styles
- [ ] Semantic HTML
- [ ] ARIA applied
- [ ] Flowing rhythm — related items tight, groups spacious
- [ ] Symmetric layout
