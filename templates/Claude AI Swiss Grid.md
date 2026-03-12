# UI Skill: Swiss Grid

> **Style:** Swiss/International Typographic
> **Rhythm:** Regular
> **Whitespace:** Spacious
> **Emphasis:** Moderate
> **Balance:** Asymmetric
> **Harmony:** Tight
> **Unity:** Strict
> **Variety:** Minimal
> **Hierarchy:** Steep
> **A11Y Level:** WCAG AA

When generating any UI, follow every instruction in this document exactly. Use the provided CSS tokens for all values — never use raw hex colors, pixel values, or font sizes outside the defined scales. Copy component patterns structurally. Consistency is paramount.

**Core principle:** Typography IS the design. No decorative elements. No icons in buttons. Hierarchy comes from size, weight, and position on the grid. The grid is sacred — everything aligns to it. Color is used sparingly: black, white, and one accent.

---

## Foundation Tokens

```css
/* === TOKENS: Swiss Grid === */
:root {
  /* --- Spacing (8px base grid unit — everything snaps to 8px) --- */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 48px;
  --space-7: 64px;
  --space-8: 96px;
  --space-9: 128px;
  --space-10: 192px;

  /* --- Type Scale (1.414 ratio — Augmented Fourth, dramatic) --- */
  --font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  --font-mono: 'SF Mono', 'Menlo', 'Consolas', monospace;
  --text-xs: 0.5rem;     /* 8px */
  --text-sm: 0.707rem;   /* 11.3px */
  --text-base: 1rem;     /* 16px */
  --text-md: 1.414rem;   /* 22.6px */
  --text-lg: 2rem;       /* 32px */
  --text-xl: 2.827rem;   /* 45.2px */
  --text-2xl: 4rem;      /* 64px */
  --text-3xl: 5.653rem;  /* 90.5px */
  --line-height-tight: 1.1;
  --line-height-base: 1.5;
  --line-height-loose: 1.7;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --font-weight-black: 900;
  --letter-spacing-tight: -0.04em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.08em;
  --letter-spacing-mega: 0.2em;

  /* --- Colors (strict: black, white, one red accent) --- */
  --color-primary: #000000;
  --color-primary-hover: #222222;
  --color-on-primary: #FFFFFF;

  --color-accent: #E60012;
  --color-accent-hover: #CC0010;
  --color-on-accent: #FFFFFF;

  --color-surface: #FFFFFF;
  --color-surface-alt: #F5F5F5;
  --color-background: #FFFFFF;

  --color-text: #000000;
  --color-text-secondary: #555555;
  --color-text-hint: #999999;
  --color-text-disabled: #CCCCCC;

  --color-border: #000000;
  --color-border-light: #DDDDDD;
  --color-divider: #EEEEEE;

  --color-success: #006B3F;
  --color-success-light: #E8F5EE;
  --color-warning: #CC7700;
  --color-warning-light: #FFF4E0;
  --color-error: #E60012;
  --color-error-light: #FFF0F0;
  --color-info: #000000;
  --color-info-light: #F5F5F5;

  --color-focus: #E60012;
  --color-focus-ring: rgba(230, 0, 18, 0.3);

  /* --- Border Radius (zero — Swiss design uses sharp geometry) --- */
  --radius-sm: 0;
  --radius-md: 0;
  --radius-lg: 0;
  --radius-full: 0;

  /* --- Shadows (none — flat, typographic) --- */
  /* No box-shadow. Period. */

  /* --- Transitions --- */
  --duration-fast: 0ms;
  --duration-base: 100ms;
  --easing-standard: linear;

  /* --- Layout --- */
  --max-width: 1200px;
  --gutter: var(--space-5);
  --columns: 12;
}

body {
  background-color: var(--color-background);
  font-family: var(--font-family);
  color: var(--color-text);
}

.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0;
}
```

---

## Layout & Rhythm

**Regular rhythm.** Uniform spacing. The 8px grid is absolute — all spacing values snap to 8px multiples (4px is the only exception, used for fine adjustments).

```css
.layout-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gutter);
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

/* Asymmetric: primary content gets more columns */
.layout-grid--content { grid-template-columns: 8fr 4fr; gap: var(--gutter); }
.layout-grid--sidebar { grid-template-columns: 3fr 9fr; gap: var(--gutter); }

.layout-stack > * + * { margin-block-start: var(--space-5); }
.layout-section { padding-block: var(--space-8); }
```

### Rhythm rules

- All vertical spacing snaps to the 8px grid: 8, 16, 24, 32, 48, 64, 96px
- Sibling elements: `var(--space-5)` (32px)
- Section padding: `var(--space-8)` (96px)
- Card padding: `var(--space-5)` (32px)
- Form field gap: `var(--space-4)` (24px)
- Label to input: `var(--space-2)` (8px)

### Balance: Asymmetric

- Content is left-aligned, pushed to the left of the grid
- Headings can span full width or break across columns
- White space is active — large empty areas are intentional and meaningful
- Sidebar content is secondary and visually subordinate

---

## Component Patterns

### Buttons

No icons. Text only. Uppercase. The red accent is reserved for the primary CTA only.

```html
<button class="btn btn--primary" type="button">Submit</button>
<button class="btn btn--secondary" type="button">Cancel</button>
<button class="btn btn--ghost" type="button">Back</button>
<button class="btn btn--destructive" type="button">Delete</button>
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  padding: var(--space-3) var(--space-5);
  border: 2px solid transparent;
  border-radius: var(--radius-sm);
  cursor: pointer;
  min-height: 44px;
  text-decoration: none;
}

.btn:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.btn:disabled { opacity: 0.4; cursor: not-allowed; pointer-events: none; }

/* Primary — red accent, the ONLY place red appears prominently */
.btn--primary {
  background-color: var(--color-accent);
  color: var(--color-on-accent);
  border-color: var(--color-accent);
}
.btn--primary:hover { background-color: var(--color-accent-hover); border-color: var(--color-accent-hover); }
.btn--primary:active { background-color: #AA000C; }

/* Secondary — black outline */
.btn--secondary {
  background-color: transparent;
  color: var(--color-text);
  border-color: var(--color-border);
}
.btn--secondary:hover { background-color: var(--color-primary); color: var(--color-on-primary); }

/* Ghost — text only, underline on hover */
.btn--ghost {
  background-color: transparent;
  color: var(--color-text);
  border: none;
  padding: var(--space-2) 0;
  text-decoration: none;
}
.btn--ghost:hover { text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 2px; }

/* Destructive — same as primary (red IS the destructive color here) */
.btn--destructive {
  background-color: var(--color-accent);
  color: var(--color-on-accent);
  border-color: var(--color-accent);
}

/* Sizes */
.btn--sm { font-size: var(--text-xs); padding: var(--space-2) var(--space-4); min-height: 44px; }
.btn--lg { font-size: var(--text-base); padding: var(--space-4) var(--space-6); }
```

### Text Inputs

Minimal. Bottom-border only. No box around the input.

```html
<div class="field">
  <label class="field__label" for="email">Email</label>
  <input class="field__input" type="email" id="email" name="email"
         placeholder="you@example.com" aria-describedby="email-help">
  <span class="field__helper" id="email-help">We'll never share this.</span>
</div>

<div class="field field--error">
  <label class="field__label" for="password">Password</label>
  <input class="field__input" type="password" id="password" name="password"
         aria-invalid="true" aria-describedby="password-error">
  <span class="field__error" id="password-error" role="alert">At least 8 characters.</span>
</div>
```

```css
.field { display: flex; flex-direction: column; gap: var(--space-2); }

.field__label {
  font-family: var(--font-family);
  font-size: var(--text-xs);
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
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--color-border);
  border-radius: 0;
  padding: var(--space-2) 0;
  min-height: 44px;
  transition: border-color var(--duration-base) var(--easing-standard);
}

.field__input::placeholder { color: var(--color-text-hint); }
.field__input:hover { border-bottom-color: var(--color-text-secondary); }

.field__input:focus {
  outline: none;
  border-bottom-color: var(--color-text);
  border-bottom-width: 3px;
}

.field__helper { font-size: var(--text-xs); color: var(--color-text-secondary); }

.field--error .field__input { border-bottom-color: var(--color-accent); }
.field--error .field__input:focus { border-bottom-color: var(--color-accent); }
.field__error { font-size: var(--text-xs); color: var(--color-accent); font-weight: var(--font-weight-bold); }
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
  font-family: var(--font-family); font-size: var(--text-base);
  color: var(--color-text); background-color: transparent;
  border: none; border-bottom: 2px solid var(--color-border);
  border-radius: 0;
  padding: var(--space-2) var(--space-5) var(--space-2) 0;
  min-height: 44px; width: 100%; appearance: none; cursor: pointer;
}

.select-wrapper::after {
  content: '↓';
  position: absolute; right: 0; top: 50%; transform: translateY(-50%);
  font-size: var(--text-sm); font-weight: var(--font-weight-bold);
  color: var(--color-text); pointer-events: none;
}

.field__select:focus { outline: none; border-bottom-color: var(--color-text); border-bottom-width: 3px; }
```

### Checkbox

```html
<div class="checkbox">
  <input class="checkbox__input" type="checkbox" id="terms" name="terms">
  <label class="checkbox__label" for="terms">I agree to the terms</label>
</div>
```

```css
.checkbox { display: flex; align-items: flex-start; gap: var(--space-3); min-height: 44px; padding-block: var(--space-2); }

.checkbox__input {
  appearance: none;
  width: 20px; height: 20px; min-width: 20px;
  border: 2px solid var(--color-border);
  background-color: transparent;
  cursor: pointer; margin-top: 2px;
}

.checkbox__input:checked {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
  background-size: 14px; background-position: center; background-repeat: no-repeat;
}

.checkbox__input:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
.checkbox__label { font-family: var(--font-family); font-size: var(--text-base); color: var(--color-text); cursor: pointer; line-height: var(--line-height-base); }
```

### Cards

No border, no shadow. Separated by generous whitespace and a thin top rule.

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
  background-color: var(--color-surface);
  border-top: 2px solid var(--color-border);
  overflow: hidden;
}

.card__image { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; }

.card__body { padding: var(--space-5) 0; }

.card__title {
  font-family: var(--font-family); font-size: var(--text-md);
  font-weight: var(--font-weight-bold); color: var(--color-text);
  line-height: var(--line-height-tight); margin: 0;
}

.card__text {
  font-size: var(--text-base); color: var(--color-text-secondary);
  line-height: var(--line-height-base); margin: var(--space-2) 0 0;
}

.card__actions {
  display: flex; justify-content: flex-start; gap: var(--space-3);
  padding-block-start: var(--space-3);
}
```

### Notifications / Toasts

Stark, typographic. A thick left rule in the status color, otherwise black and white.

```html
<div class="toast toast--error" role="alert" aria-live="assertive">
  <div class="toast__content">
    <p class="toast__title">Error</p>
    <p class="toast__message">Something went wrong. Try again.</p>
  </div>
  <button class="toast__dismiss" type="button" aria-label="Dismiss">×</button>
</div>
```

```css
.toast {
  display: flex; align-items: flex-start; gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  background-color: var(--color-surface);
  border-left: 4px solid;
  max-width: 400px; width: 100%;
}

.toast--info { border-left-color: var(--color-text); }
.toast--success { border-left-color: var(--color-success); }
.toast--warning { border-left-color: var(--color-warning); }
.toast--error { border-left-color: var(--color-accent); }

.toast__content { flex: 1; }

.toast__title {
  font-family: var(--font-family); font-size: var(--text-xs);
  font-weight: var(--font-weight-bold); text-transform: uppercase;
  letter-spacing: var(--letter-spacing-mega);
  color: var(--color-text); margin: 0;
}

.toast__message { font-size: var(--text-base); color: var(--color-text-secondary); margin: var(--space-1) 0 0; line-height: var(--line-height-base); }

.toast__dismiss {
  appearance: none; background: none; border: none; color: var(--color-text);
  cursor: pointer; padding: var(--space-2); font-size: var(--text-md);
  font-weight: var(--font-weight-bold);
  min-width: 44px; min-height: 44px; display: flex; align-items: center; justify-content: center;
}
.toast__dismiss:hover { color: var(--color-accent); }
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
  position: sticky; top: 0; z-index: 100;
  background-color: var(--color-surface);
  border-bottom: 2px solid var(--color-border);
}

.navbar__inner {
  display: flex; align-items: center; gap: var(--space-6);
  max-width: var(--max-width); margin-inline: auto;
  padding: var(--space-4) var(--gutter); min-height: 56px;
}

.navbar__brand {
  font-family: var(--font-family); font-size: var(--text-base);
  font-weight: var(--font-weight-black); color: var(--color-text);
  text-decoration: none; text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}

.navbar__links { display: flex; gap: var(--space-5); list-style: none; padding: 0; margin: 0; }

.navbar__link {
  font-family: var(--font-family); font-size: var(--text-xs);
  font-weight: var(--font-weight-bold); color: var(--color-text-secondary);
  text-decoration: none; text-transform: uppercase;
  letter-spacing: var(--letter-spacing-mega);
  padding: var(--space-2) 0;
  min-height: 44px; display: flex; align-items: center;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
}

.navbar__link:hover { color: var(--color-text); border-bottom-color: var(--color-text); }
.navbar__link--active { color: var(--color-accent); border-bottom-color: var(--color-accent); }
.navbar__link:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
```

### Typography

Steep hierarchy. h1 is massive. h6 is tiny uppercase. The contrast is the design.

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family); color: var(--color-text);
  line-height: var(--line-height-tight); margin: 0;
}

h1 { font-size: var(--text-3xl); font-weight: var(--font-weight-black); letter-spacing: var(--letter-spacing-tight); }
h2 { font-size: var(--text-2xl); font-weight: var(--font-weight-bold); letter-spacing: var(--letter-spacing-tight); }
h3 { font-size: var(--text-xl); font-weight: var(--font-weight-bold); }
h4 { font-size: var(--text-lg); font-weight: var(--font-weight-medium); }
h5 { font-size: var(--text-md); font-weight: var(--font-weight-medium); }
h6 { font-size: var(--text-xs); font-weight: var(--font-weight-bold); text-transform: uppercase; letter-spacing: var(--letter-spacing-mega); color: var(--color-text-secondary); }

p, li, td, th { font-family: var(--font-family); font-size: var(--text-base); line-height: var(--line-height-base); color: var(--color-text); }

small, .text-sm { font-size: var(--text-sm); }
.text-secondary { color: var(--color-text-secondary); }

code, pre { font-family: var(--font-mono); font-size: var(--text-sm); }
code { background-color: var(--color-surface-alt); padding: var(--space-1) var(--space-2); }
pre { background-color: var(--color-primary); color: var(--color-on-primary); padding: var(--space-5); overflow-x: auto; }
pre code { background: none; padding: 0; color: inherit; }

a { color: var(--color-text); text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; text-decoration-color: var(--color-accent); }
a:hover { color: var(--color-accent); }
a:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }

blockquote { border-left: 4px solid var(--color-accent); padding: var(--space-3) var(--space-5); margin: 0; font-size: var(--text-md); font-weight: var(--font-weight-light); color: var(--color-text-secondary); }
```

### Search

```html
<div class="search" role="search">
  <label class="sr-only" for="search-input">Search</label>
  <input class="search__input" type="search" id="search-input" placeholder="Search…" autocomplete="off">
  <button class="search__btn" type="submit" aria-label="Submit search">→</button>
</div>
```

```css
.search { display: flex; max-width: 360px; }

.search__input {
  font-family: var(--font-family); font-size: var(--text-base); color: var(--color-text);
  background-color: transparent; border: none; border-bottom: 2px solid var(--color-border);
  padding: var(--space-2) 0; width: 100%; min-height: 44px;
}
.search__input:focus { outline: none; border-bottom-color: var(--color-text); border-bottom-width: 3px; }
.search__input::placeholder { color: var(--color-text-hint); }

.search__btn {
  font-family: var(--font-family); font-size: var(--text-md); font-weight: var(--font-weight-bold);
  color: var(--color-text); background: none; border: none; border-bottom: 2px solid var(--color-border);
  padding: var(--space-2) var(--space-3); cursor: pointer; min-width: 44px; min-height: 44px;
}
.search__btn:hover { color: var(--color-accent); }
.search__btn:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
```

### Modal / Dialog

```html
<dialog class="modal" aria-labelledby="modal-title">
  <div class="modal__header">
    <h2 class="modal__title" id="modal-title">Confirm</h2>
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
  border: 2px solid var(--color-border); padding: 0;
  max-width: 480px; width: calc(100% - var(--space-8));
}
.modal::backdrop { background-color: rgba(0,0,0,0.5); }

.modal__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: var(--space-5); border-bottom: 1px solid var(--color-divider);
}
.modal__title { font-size: var(--text-md); font-weight: var(--font-weight-bold); margin: 0; }

.modal__close {
  appearance: none; background: none; border: none; color: var(--color-text);
  cursor: pointer; padding: var(--space-2); font-size: var(--text-lg); font-weight: var(--font-weight-light);
  min-width: 44px; min-height: 44px; display: flex; align-items: center; justify-content: center;
}
.modal__close:hover { color: var(--color-accent); }
.modal__close:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }

.modal__body { padding: var(--space-4) var(--space-5); color: var(--color-text-secondary); line-height: var(--line-height-base); }
.modal__footer { display: flex; justify-content: flex-end; gap: var(--space-3); padding: var(--space-4) var(--space-5); border-top: 1px solid var(--color-divider); }
```

---

## Accessibility Rules

Mandatory:

1. **Contrast:** WCAG AA. Black on white = 21:1. `--color-text-secondary` (#555) on white = 7.5:1. Both pass. Red accent (#E60012) on white = 4.6:1 — passes for normal text, comfortable for large text/buttons.
2. **Focus:** `:focus-visible` with `outline: 2px solid var(--color-focus); outline-offset: 2px`. Red outline.
3. **Touch targets:** 44×44px minimum.
4. **Keyboard:** Full navigation.
5. **Semantic HTML:** Correct elements.
6. **Labels:** All inputs labeled.
7. **ARIA:** Applied per patterns.
8. **Images:** `alt` on all.
9. **Color:** Never color-only.

Note on underline inputs: the bottom-border-only input style must still be clearly distinguishable as an interactive element. The 2px border and label placement achieve this. If generating forms in unusual contexts, ensure the input is visually identifiable.

---

## Validation Checklist

- [ ] All spacing snaps to the 8px grid (only --space-1 at 4px is the exception)
- [ ] All colors are black, white, gray, or the single red accent — no other hues
- [ ] All font sizes use type scale tokens
- [ ] **Zero border-radius** everywhere
- [ ] **Zero box-shadow** anywhere
- [ ] **No icons in buttons** — text only, uppercase
- [ ] **No gradients**
- [ ] Inputs use bottom-border-only style, not boxed
- [ ] Cards separated by top rule + whitespace, not borders or shadows
- [ ] All interactive elements have `:focus-visible`
- [ ] All form inputs have `<label>` (uppercase, mega letter-spacing)
- [ ] All buttons use `<button>`
- [ ] Contrast meets WCAG AA
- [ ] Touch targets 44×44px
- [ ] HTML matches patterns
- [ ] No inline styles
- [ ] Semantic HTML
- [ ] ARIA applied
- [ ] Regular rhythm — uniform 32px gaps between siblings
- [ ] Asymmetric layout — content left-weighted
- [ ] Steep hierarchy — massive h1, tiny h6
- [ ] Typography drives all hierarchy — no decorative differentiation
