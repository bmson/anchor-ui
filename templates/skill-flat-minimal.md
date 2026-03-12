# UI Skill: Flat Minimal

> **Style:** Flat Design
> **Rhythm:** Regular
> **Whitespace:** Comfortable
> **Emphasis:** Subtle
> **Balance:** Symmetric
> **Harmony:** Tight
> **Unity:** Strict
> **Variety:** Minimal
> **Hierarchy:** Flat
> **A11Y Level:** WCAG AA

When generating any UI, follow every instruction in this document exactly. Use the provided CSS tokens for all values — never use raw hex colors, pixel values, or font sizes outside the defined scales. Copy component patterns structurally. Consistency is paramount: the same component should look identical every time it is generated.

This is a deliberately quiet, understated design. No shadows, no gradients, no elevation. Hierarchy is communicated through weight, size, and color — not through decoration. Let the content speak.

---

## Foundation Tokens

```css
/* === TOKENS: Flat Minimal === */
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

  /* --- Type Scale (1.2 ratio, 15px base — Minor Third) --- */
  --font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'IBM Plex Mono', 'Menlo', monospace;
  --text-xs: 0.694rem;
  --text-sm: 0.833rem;
  --text-base: 1rem;
  --text-md: 1.2rem;
  --text-lg: 1.44rem;
  --text-xl: 1.728rem;
  --text-2xl: 2.074rem;
  --text-3xl: 2.488rem;
  --line-height-tight: 1.25;
  --line-height-base: 1.55;
  --line-height-loose: 1.75;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.01em;

  /* --- Colors (muted, restrained palette) --- */
  --color-primary: #2563EB;
  --color-primary-hover: #1D4ED8;
  --color-primary-active: #1E40AF;
  --color-primary-light: #EFF6FF;
  --color-on-primary: #FFFFFF;

  --color-surface: #FFFFFF;
  --color-surface-alt: #F8FAFC;
  --color-background: #FFFFFF;

  --color-text: #1E293B;
  --color-text-secondary: #64748B;
  --color-text-hint: #94A3B8;
  --color-text-disabled: #CBD5E1;

  --color-border: #E2E8F0;
  --color-border-strong: #CBD5E1;
  --color-divider: #F1F5F9;

  --color-success: #16A34A;
  --color-success-light: #F0FDF4;
  --color-warning: #CA8A04;
  --color-warning-light: #FEFCE8;
  --color-error: #DC2626;
  --color-error-light: #FEF2F2;
  --color-info: #2563EB;
  --color-info-light: #EFF6FF;

  --color-focus: #2563EB;
  --color-focus-ring: rgba(37, 99, 235, 0.35);

  /* --- Border Radius (minimal) --- */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-full: 9999px;

  /* --- Shadows (NONE — this is flat design) --- */
  /* Do not use box-shadow on any element. */

  /* --- Transitions --- */
  --duration-fast: 100ms;
  --duration-base: 150ms;
  --easing-standard: ease-in-out;

  /* --- Layout --- */
  --max-width: 1080px;
  --gutter: var(--space-6);
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

**Regular rhythm.** Equal spacing between siblings at the same level. No variation.

```css
.layout-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gutter);
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

.layout-stack > * + * {
  margin-block-start: var(--space-6);
}

.layout-section {
  padding-block: var(--space-8);
}
```

### Rhythm rules

- Sibling elements: `var(--space-6)`
- Section padding: `var(--space-8)` top and bottom
- Card padding: `var(--space-6)`
- Form field gap: `var(--space-5)`
- Label to input: `var(--space-2)`
- Input to helper text: `var(--space-1)`

### Balance: Symmetric, centered.

### Emphasis: Subtle

CTAs differ from surrounding elements only by color. Same size, same weight. The primary blue is the only "loud" element. Everything else is neutral.

---

## Component Patterns

### Buttons

```html
<button class="btn btn--primary" type="button">Primary</button>
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
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);
  padding: var(--space-3) var(--space-5);
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  cursor: pointer;
  min-height: 44px;
  text-decoration: none;
  transition: background-color var(--duration-fast) var(--easing-standard),
              color var(--duration-fast) var(--easing-standard);
}

.btn:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}
.btn--primary:hover { background-color: var(--color-primary-hover); }
.btn--primary:active { background-color: var(--color-primary-active); }

.btn--secondary {
  background-color: transparent;
  color: var(--color-text);
  border-color: var(--color-border-strong);
}
.btn--secondary:hover { background-color: var(--color-surface-alt); }

.btn--ghost {
  background-color: transparent;
  color: var(--color-text-secondary);
}
.btn--ghost:hover { background-color: var(--color-surface-alt); }

.btn--destructive {
  background-color: var(--color-error);
  color: #FFFFFF;
}
.btn--destructive:hover { background-color: #B91C1C; }

.btn--sm { font-size: var(--text-xs); padding: var(--space-2) var(--space-4); min-height: 44px; }
.btn--lg { font-size: var(--text-base); padding: var(--space-4) var(--space-6); }
```

### Text Inputs

Clean, minimal borders. No shadows ever.

```html
<div class="field">
  <label class="field__label" for="email">Email</label>
  <input class="field__input" type="email" id="email" name="email"
         placeholder="you@example.com" aria-describedby="email-help">
  <span class="field__helper" id="email-help">We won't share this.</span>
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
  font-family: var(--font-family);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.field__input {
  font-family: var(--font-family);
  font-size: var(--text-base);
  line-height: var(--line-height-base);
  color: var(--color-text);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-4);
  min-height: 44px;
  transition: border-color var(--duration-fast) var(--easing-standard);
}

.field__input::placeholder { color: var(--color-text-hint); }
.field__input:hover { border-color: var(--color-border-strong); }

.field__input:focus {
  outline: none;
  border-color: var(--color-focus);
  box-shadow: 0 0 0 3px var(--color-focus-ring);
}

.field__helper { font-size: var(--text-xs); color: var(--color-text-secondary); }

.field--error .field__input { border-color: var(--color-error); }
.field--error .field__input:focus { box-shadow: 0 0 0 3px rgba(220,38,38,0.2); }
.field__error { font-size: var(--text-xs); color: var(--color-error); font-weight: var(--font-weight-medium); }
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
  font-family: var(--font-family);
  font-size: var(--text-base);
  color: var(--color-text);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-7) var(--space-3) var(--space-4);
  min-height: 44px;
  width: 100%;
  appearance: none;
  cursor: pointer;
}

.select-wrapper::after {
  content: '';
  position: absolute;
  right: var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  width: 0; height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid var(--color-text-hint);
  pointer-events: none;
}

.field__select:focus {
  outline: none;
  border-color: var(--color-focus);
  box-shadow: 0 0 0 3px var(--color-focus-ring);
}
```

### Checkbox

```html
<div class="checkbox">
  <input class="checkbox__input" type="checkbox" id="terms" name="terms">
  <label class="checkbox__label" for="terms">I agree to the terms</label>
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
  width: 18px; height: 18px; min-width: 18px;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface);
  cursor: pointer;
  margin-top: 3px;
  transition: all var(--duration-fast) var(--easing-standard);
}

.checkbox__input:checked {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
  background-size: 12px; background-position: center; background-repeat: no-repeat;
}

.checkbox__input:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }

.checkbox__label {
  font-family: var(--font-family);
  font-size: var(--text-base);
  color: var(--color-text);
  cursor: pointer;
  line-height: var(--line-height-base);
}
```

### Cards

No shadow, no elevation. Border only. The card is flat — just a bordered container.

```html
<article class="card">
  <img class="card__image" src="photo.jpg" alt="Description" loading="lazy">
  <div class="card__body">
    <h3 class="card__title">Card Title</h3>
    <p class="card__text">Brief description or summary.</p>
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
  border-radius: var(--radius-md);
  overflow: hidden;
}

.card:hover { border-color: var(--color-border-strong); }

.card__image {
  width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block;
}

.card__body { padding: var(--space-6); }

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

Flat colored background, no shadow.

```html
<div class="toast toast--success" role="status" aria-live="polite">
  <div class="toast__content">
    <p class="toast__message">Settings saved successfully.</p>
  </div>
  <button class="toast__dismiss" type="button" aria-label="Dismiss">×</button>
</div>
```

```css
.toast {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  border-radius: var(--radius-md);
  max-width: 400px;
  width: 100%;
}

.toast--info { background-color: var(--color-info-light); color: var(--color-info); }
.toast--success { background-color: var(--color-success-light); color: var(--color-success); }
.toast--warning { background-color: var(--color-warning-light); color: var(--color-warning); }
.toast--error { background-color: var(--color-error-light); color: var(--color-error); }

.toast__content { flex: 1; }

.toast__message {
  font-family: var(--font-family);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  margin: 0;
  line-height: var(--line-height-base);
}

.toast__dismiss {
  appearance: none;
  background: none;
  border: none;
  color: inherit;
  opacity: 0.6;
  cursor: pointer;
  padding: var(--space-2);
  font-size: var(--text-md);
  min-width: 44px; min-height: 44px;
  display: flex; align-items: center; justify-content: center;
  border-radius: var(--radius-sm);
}
.toast__dismiss:hover { opacity: 1; }
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
}

.navbar__inner {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  max-width: var(--max-width);
  margin-inline: auto;
  padding: var(--space-4) var(--gutter);
  min-height: 48px;
}

.navbar__brand {
  font-family: var(--font-family);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  text-decoration: none;
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
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-sm);
  min-height: 44px;
  display: flex; align-items: center;
  transition: color var(--duration-fast) var(--easing-standard);
}

.navbar__link:hover { color: var(--color-text); background-color: var(--color-surface-alt); }
.navbar__link--active { color: var(--color-primary); background-color: var(--color-primary-light); }
.navbar__link:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
```

### Typography

Flat hierarchy — the jumps between heading levels are small. Nothing shouts.

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family);
  color: var(--color-text);
  line-height: var(--line-height-tight);
  margin: 0;
}

h1 { font-size: var(--text-2xl); font-weight: var(--font-weight-semibold); }
h2 { font-size: var(--text-xl); font-weight: var(--font-weight-semibold); }
h3 { font-size: var(--text-lg); font-weight: var(--font-weight-medium); }
h4 { font-size: var(--text-md); font-weight: var(--font-weight-medium); }
h5 { font-size: var(--text-base); font-weight: var(--font-weight-medium); }
h6 { font-size: var(--text-sm); font-weight: var(--font-weight-medium); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: var(--letter-spacing-wide); }

p, li, td, th {
  font-family: var(--font-family);
  font-size: var(--text-base);
  line-height: var(--line-height-base);
  color: var(--color-text);
}

small, .text-sm { font-size: var(--text-sm); }
.text-secondary { color: var(--color-text-secondary); }

code, pre { font-family: var(--font-mono); font-size: var(--text-sm); }

code {
  background-color: var(--color-surface-alt);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
}

pre {
  background-color: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  padding: var(--space-6);
  border-radius: var(--radius-md);
  overflow-x: auto;
}

pre code { background: none; border: none; padding: 0; }

a {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
}
a:hover { color: var(--color-primary-hover); }
a:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; border-radius: 2px; }

blockquote {
  border-left: 3px solid var(--color-border-strong);
  padding: var(--space-4) var(--space-6);
  margin: 0;
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
  <input class="search__input" type="search" id="search-input"
         placeholder="Search…" autocomplete="off">
</div>
```

```css
.search { position: relative; max-width: 320px; }

.search__icon {
  position: absolute; left: var(--space-4); top: 50%;
  transform: translateY(-50%); color: var(--color-text-hint);
  pointer-events: none; display: flex;
}

.search__input {
  font-family: var(--font-family);
  font-size: var(--text-base);
  color: var(--color-text);
  background-color: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: var(--space-3) var(--space-5) var(--space-3) var(--space-8);
  width: 100%; min-height: 44px;
  transition: border-color var(--duration-fast) var(--easing-standard);
}

.search__input:focus {
  outline: none;
  border-color: var(--color-focus);
  box-shadow: 0 0 0 3px var(--color-focus-ring);
  background-color: var(--color-surface);
}

.search__input::placeholder { color: var(--color-text-hint); }
```

### Modal / Dialog

```html
<dialog class="modal" aria-labelledby="modal-title">
  <div class="modal__header">
    <h2 class="modal__title" id="modal-title">Confirm</h2>
    <button class="modal__close" type="button" aria-label="Close">×</button>
  </div>
  <div class="modal__body">
    <p>Are you sure? This can't be undone.</p>
  </div>
  <div class="modal__footer">
    <button class="btn btn--ghost" type="button">Cancel</button>
    <button class="btn btn--primary" type="button">Confirm</button>
  </div>
</dialog>
```

```css
.modal {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 0;
  max-width: 440px;
  width: calc(100% - var(--space-8));
}

.modal::backdrop { background-color: rgba(0,0,0,0.4); }

.modal__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: var(--space-5) var(--space-6);
  border-bottom: 1px solid var(--color-divider);
}

.modal__title {
  font-family: var(--font-family);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin: 0;
}

.modal__close {
  appearance: none; background: none; border: none;
  color: var(--color-text-hint); cursor: pointer;
  padding: var(--space-2); font-size: var(--text-lg);
  border-radius: var(--radius-sm);
  min-width: 44px; min-height: 44px;
  display: flex; align-items: center; justify-content: center;
}
.modal__close:hover { color: var(--color-text); background-color: var(--color-surface-alt); }
.modal__close:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }

.modal__body {
  padding: var(--space-5) var(--space-6);
  color: var(--color-text-secondary);
  line-height: var(--line-height-base);
}

.modal__footer {
  display: flex; justify-content: flex-end; gap: var(--space-3);
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--color-divider);
}
```

---

## Accessibility Rules

Mandatory. Every component must satisfy:

1. **Contrast:** WCAG AA — 4.5:1 normal text, 3:1 large text.
2. **Focus:** `:focus-visible` with `outline: 2px solid var(--color-focus); outline-offset: 2px` on all interactive elements.
3. **Touch targets:** 44×44px minimum.
4. **Keyboard:** Tab navigation for all interactive elements. Arrow keys for custom widgets. Focus trap in modals. Escape closes overlays.
5. **Semantic HTML:** `<button>` for actions, `<a>` for links, `<nav>`, `<main>`, `<header>`, `<footer>`, `<fieldset>`, `<legend>`.
6. **Labels:** All inputs have `<label>` or `aria-label`. No placeholder-as-label.
7. **ARIA:** `aria-invalid`, `aria-describedby`, `aria-current="page"`, `role="alert"`, `aria-label` on icon buttons.
8. **Images:** `alt` on all `<img>`. `alt=""` for decorative.
9. **Color:** Never color-only information.

---

## Validation Checklist

- [ ] All spacing uses tokens (`--space-1` through `--space-10`)
- [ ] All colors use tokens — zero raw values
- [ ] All font sizes use type scale tokens
- [ ] **No box-shadow on any element** (this is flat design — the ONLY exception is focus rings)
- [ ] **No gradients** anywhere
- [ ] Border radius is small (4–8px max) everywhere
- [ ] All interactive elements have `:focus-visible`
- [ ] All form inputs have `<label>` elements
- [ ] All buttons use `<button>`
- [ ] Contrast meets WCAG AA
- [ ] Touch targets meet 44×44px
- [ ] HTML matches reference patterns
- [ ] No inline styles
- [ ] Semantic HTML used correctly
- [ ] ARIA attributes applied
- [ ] Regular rhythm — equal spacing between siblings
- [ ] Symmetric layout — centered, equal columns
- [ ] Emphasis is subtle — CTAs differ by color only, not size or weight
