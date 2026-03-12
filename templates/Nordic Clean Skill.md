# UI Skill: Nordic Clean

> **Style:** Scandinavian / Nordic Minimalism
> **Rhythm:** Regular
> **Whitespace:** Spacious
> **Emphasis:** Subtle
> **Balance:** Symmetric
> **Harmony:** Tight
> **Unity:** Strict
> **Variety:** Minimal
> **Hierarchy:** Flat
> **A11Y Level:** WCAG AA

When generating any UI, follow every instruction in this document exactly. Use the provided CSS tokens for all values — never use raw hex colors, pixel values, or font sizes outside the defined scales. Copy component patterns structurally. Consistency is paramount.

**Core principle:** Nothing unnecessary. Every element earns its place. The design is defined by what is removed, not what is added. Whitespace is the primary compositional tool — it does more work than any border, shadow, or decoration. Colors are desaturated, drawn from Nordic landscapes: stone, fog, birch, slate water. Typography is clean and functional. Interaction feedback is understated — a subtle shift, not a spectacle. If you're wondering whether to add a visual element, don't.

**The rule of restraint:** No shadows heavier than `--shadow-1`. No border-radius larger than `--radius-md`. No font-weight heavier than `--font-weight-semibold`. No transitions longer than `--duration-base`. No text transforms. No uppercase. No letter-spacing wider than `--letter-spacing-wide`. These constraints are absolute.

---

## Foundation Tokens

```css
/* === TOKENS: Nordic Clean === */
:root {
  /* --- Spacing (8px base, spacious 1.5x) --- */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 36px;
  --space-7: 48px;
  --space-8: 72px;
  --space-9: 96px;
  --space-10: 144px;

  /* --- Type Scale (1.2 ratio, 16px base — Minor Third, gentle) --- */
  --font-family: 'Atkinson Hyperlegible', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'IBM Plex Mono', 'Menlo', monospace;
  --text-xs: 0.694rem;
  --text-sm: 0.833rem;
  --text-base: 1rem;
  --text-md: 1.2rem;
  --text-lg: 1.44rem;
  --text-xl: 1.728rem;
  --text-2xl: 2.074rem;
  --text-3xl: 2.488rem;
  --line-height-tight: 1.3;
  --line-height-base: 1.65;
  --line-height-loose: 1.85;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --letter-spacing-tight: -0.005em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.01em;

  /* --- Colors (Nordic: desaturated, cool-neutral, fog and stone) --- */

  /* Primary: muted slate blue — like deep water on a grey day */
  --color-primary: #4A6670;
  --color-primary-hover: #3A545E;
  --color-primary-active: #2D434C;
  --color-primary-light: #EFF3F5;
  --color-on-primary: #FFFFFF;

  /* Surface: warm paper white with a whisper of warmth */
  --color-surface: #FAFAF8;
  --color-surface-raised: #FFFFFF;
  --color-surface-alt: #F5F4F0;
  --color-background: #FAFAF8;

  /* Text: dark stone, not pure black */
  --color-text: #2C2C2A;
  --color-text-secondary: #6B6B66;
  --color-text-hint: #9C9C96;
  --color-text-disabled: #C5C5BF;

  /* Borders: barely there */
  --color-border: #E8E7E3;
  --color-border-strong: #D5D4CF;
  --color-divider: #F0EFEC;

  /* Status: muted versions — nothing screams */
  --color-success: #5B8A6F;
  --color-success-light: #EFF5F1;
  --color-warning: #B0873A;
  --color-warning-light: #FAF5ED;
  --color-error: #B35B5B;
  --color-error-light: #F9F0F0;
  --color-info: #4A6670;
  --color-info-light: #EFF3F5;

  --color-focus: #4A6670;
  --color-focus-ring: rgba(74, 102, 112, 0.25);

  /* --- Border Radius (subtle, restrained) --- */
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-full: 9999px;
  /* No --radius-lg or larger. The rule of restraint. */

  /* --- Shadows (whisper-light, almost invisible) --- */
  --shadow-1: 0 1px 3px rgba(0, 0, 0, 0.04);
  /* No --shadow-2 or heavier. The rule of restraint. */

  /* --- Transitions (quick, imperceptible) --- */
  --duration-fast: 80ms;
  --duration-base: 150ms;
  --easing-standard: ease-out;
  /* No --duration-slow or longer. The rule of restraint. */

  /* --- Layout --- */
  --max-width: 960px;
  --gutter: var(--space-6);
}

body {
  background-color: var(--color-background);
  font-family: var(--font-family);
  color: var(--color-text);
  -webkit-font-smoothing: antialiased;
}

.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0;
}
```

---

## Layout & Rhythm

**Regular rhythm.** Equal, predictable spacing. No surprises. The spaciousness itself is the design statement — generous breathing room between everything.

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
  padding-block: var(--space-9);
}
```

### Rhythm rules

- Sibling elements: `var(--space-6)` (36px)
- Section padding: `var(--space-9)` (96px) — deliberately generous
- Card padding: `var(--space-6)` (36px)
- Form field gap: `var(--space-5)` (24px)
- Label to input: `var(--space-2)` (8px)
- Input to helper text: `var(--space-1)` (4px)
- Page max-width: 960px — narrower than most, letting content breathe

### Balance: Symmetric, centered. Narrow measure. Wide margins.

### Emphasis: Subtle

CTAs differ only by background fill. Same size, same weight as body text. The primary blue-grey stands out against the warm neutrals purely through hue contrast — no size escalation, no bold weight, no shadow.

---

## Component Patterns

### Buttons

Quiet. No shadow. No bold text. Hover is a slight background shift. Active dims. That's it.

```html
<button class="btn btn--primary" type="button">Save</button>
<button class="btn btn--secondary" type="button">Cancel</button>
<button class="btn btn--ghost" type="button">Back</button>
<button class="btn btn--destructive" type="button">Delete</button>
<button class="btn btn--primary" type="button" disabled>Disabled</button>
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
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);
  padding: var(--space-3) var(--space-5);
  border: none;
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
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

/* Primary — muted slate fill */
.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}
.btn--primary:hover { background-color: var(--color-primary-hover); }
.btn--primary:active { background-color: var(--color-primary-active); }

/* Secondary — outlined */
.btn--secondary {
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border-strong);
}
.btn--secondary:hover { background-color: var(--color-surface-alt); }
.btn--secondary:active { background-color: var(--color-divider); }

/* Ghost — text only */
.btn--ghost {
  background-color: transparent;
  color: var(--color-text-secondary);
}
.btn--ghost:hover { color: var(--color-text); background-color: var(--color-surface-alt); }

/* Destructive — muted red, not alarming */
.btn--destructive {
  background-color: var(--color-error);
  color: #FFFFFF;
}
.btn--destructive:hover { background-color: #9A4D4D; }

/* Sizes */
.btn--sm { font-size: var(--text-xs); padding: var(--space-2) var(--space-4); min-height: 44px; }
.btn--lg { font-size: var(--text-base); padding: var(--space-4) var(--space-6); }

/* Loading */
.btn--loading { pointer-events: none; }
.btn__spinner {
  width: 14px; height: 14px;
  border: 1.5px solid currentColor;
  border-right-color: transparent;
  border-radius: var(--radius-full);
  animation: spin 1s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
```

### Text Inputs

Clean single-line border. No background fill on the input — it lives on the surface. Minimal visual distinction, relying on the label and spacing to make the form legible.

```html
<div class="field">
  <label class="field__label" for="email">Email</label>
  <input class="field__input" type="email" id="email" name="email"
         placeholder="name@example.com" aria-describedby="email-help">
  <span class="field__helper" id="email-help">We won't share this.</span>
</div>

<div class="field field--error">
  <label class="field__label" for="password">Password</label>
  <input class="field__input" type="password" id="password" name="password"
         aria-invalid="true" aria-describedby="password-error">
  <span class="field__error" id="password-error" role="alert">At least 8 characters.</span>
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
  color: var(--color-text-secondary);
}

.field__input {
  font-family: var(--font-family);
  font-size: var(--text-base);
  line-height: var(--line-height-base);
  color: var(--color-text);
  background-color: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-4);
  min-height: 44px;
  transition: border-color var(--duration-fast) var(--easing-standard);
}

.field__input::placeholder { color: var(--color-text-disabled); }

.field__input:hover { border-color: var(--color-border-strong); }

.field__input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-focus-ring);
}

.field__helper { font-size: var(--text-xs); color: var(--color-text-hint); }

/* Error — border changes, no drama */
.field--error .field__input { border-color: var(--color-error); }
.field--error .field__input:focus { box-shadow: 0 0 0 2px rgba(179, 91, 91, 0.2); }
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
      <option value="dk">Denmark</option>
      <option value="fi">Finland</option>
      <option value="no">Norway</option>
      <option value="se">Sweden</option>
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
  background-color: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-7) var(--space-3) var(--space-4);
  min-height: 44px;
  width: 100%;
  appearance: none;
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--easing-standard);
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
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-focus-ring);
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
  background-color: transparent;
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

No shadow. A single thin border. Generous internal spacing. The content itself is the visual interest.

```html
<article class="card">
  <img class="card__image" src="photo.jpg" alt="Description" loading="lazy">
  <div class="card__body">
    <h3 class="card__title">Card title</h3>
    <p class="card__text">A brief description. The content speaks for itself.</p>
  </div>
  <div class="card__actions">
    <button class="btn btn--ghost btn--sm" type="button">Cancel</button>
    <button class="btn btn--primary btn--sm" type="button">Confirm</button>
  </div>
</article>
```

```css
.card {
  background-color: var(--color-surface-raised);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: border-color var(--duration-fast) var(--easing-standard);
}

.card:hover { border-color: var(--color-border-strong); }

.card__image {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  display: block;
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

Minimal. A thin left accent, muted background. No icon — the text communicates the message.

```html
<div class="toast toast--success" role="status" aria-live="polite">
  <div class="toast__content">
    <p class="toast__message">Settings saved.</p>
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
  background-color: var(--color-surface-raised);
  border: 1px solid var(--color-border);
  border-left: 3px solid;
  max-width: 380px;
  width: 100%;
}

.toast--info { border-left-color: var(--color-info); }
.toast--success { border-left-color: var(--color-success); }
.toast--warning { border-left-color: var(--color-warning); }
.toast--error { border-left-color: var(--color-error); }

.toast__content { flex: 1; }

.toast__message {
  font-family: var(--font-family);
  font-size: var(--text-sm);
  color: var(--color-text);
  margin: 0;
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
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  transition: color var(--duration-fast) var(--easing-standard);
}

.toast__dismiss:hover { color: var(--color-text); }
.toast__dismiss:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
```

### Navigation Bar

Barely there. A thin bottom line separates it from content. No background contrast, no shadow.

```html
<header class="navbar" role="banner">
  <nav class="navbar__inner" aria-label="Main navigation">
    <a class="navbar__brand" href="/">appname</a>
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
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-divider);
}

.navbar__inner {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  max-width: var(--max-width);
  margin-inline: auto;
  padding: var(--space-4) var(--gutter);
  min-height: 52px;
}

/* Brand: lowercase, normal weight — no shouting */
.navbar__brand {
  font-family: var(--font-family);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  text-decoration: none;
  letter-spacing: var(--letter-spacing-tight);
}

.navbar__links {
  display: flex;
  gap: var(--space-5);
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar__link {
  font-family: var(--font-family);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-normal);
  color: var(--color-text-hint);
  text-decoration: none;
  padding: var(--space-2) 0;
  min-height: 44px;
  display: flex;
  align-items: center;
  border-bottom: 1.5px solid transparent;
  margin-bottom: -1px;
  transition: color var(--duration-fast) var(--easing-standard),
              border-color var(--duration-fast) var(--easing-standard);
}

.navbar__link:hover {
  color: var(--color-text);
}

.navbar__link--active {
  color: var(--color-text);
  border-bottom-color: var(--color-primary);
}

.navbar__link:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.navbar__actions { margin-inline-start: auto; }
```

### Typography

Flat hierarchy. Sizes step gently. Weight never exceeds semibold. Nothing shouts. The text is meant to be read, not scanned.

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family);
  color: var(--color-text);
  line-height: var(--line-height-tight);
  margin: 0;
}

/* Flat hierarchy: gentle steps */
h1 { font-size: var(--text-2xl); font-weight: var(--font-weight-semibold); }
h2 { font-size: var(--text-xl); font-weight: var(--font-weight-semibold); }
h3 { font-size: var(--text-lg); font-weight: var(--font-weight-medium); }
h4 { font-size: var(--text-md); font-weight: var(--font-weight-medium); }
h5 { font-size: var(--text-base); font-weight: var(--font-weight-medium); }
h6 { font-size: var(--text-sm); font-weight: var(--font-weight-medium); color: var(--color-text-secondary); }

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
  background-color: var(--color-surface-alt);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
}

pre {
  background-color: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  padding: var(--space-6);
  border-radius: var(--radius-md);
  overflow-x: auto;
}
pre code { background: none; padding: 0; }

a {
  color: var(--color-primary);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  transition: color var(--duration-fast) var(--easing-standard);
}
a:hover { color: var(--color-primary-hover); }
a:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; border-radius: 2px; }

blockquote {
  border-left: 2px solid var(--color-border-strong);
  padding: var(--space-4) var(--space-6);
  margin: 0;
  color: var(--color-text-secondary);
  font-style: italic;
}
```

### Search

```html
<div class="search" role="search">
  <label class="sr-only" for="search-input">Search</label>
  <span class="search__icon" aria-hidden="true">
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M11 11L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </span>
  <input class="search__input" type="search" id="search-input" placeholder="Search…" autocomplete="off">
</div>
```

```css
.search { position: relative; max-width: 300px; }

.search__icon {
  position: absolute; left: var(--space-4); top: 50%; transform: translateY(-50%);
  color: var(--color-text-disabled); pointer-events: none; display: flex;
}

.search__input {
  font-family: var(--font-family); font-size: var(--text-sm); color: var(--color-text);
  background-color: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: var(--space-3) var(--space-4) var(--space-3) var(--space-7);
  width: 100%; min-height: 44px;
  transition: border-color var(--duration-fast) var(--easing-standard);
}

.search__input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-focus-ring);
}

.search__input::placeholder { color: var(--color-text-disabled); }
```

### Modal / Dialog

```html
<dialog class="modal" aria-labelledby="modal-title">
  <div class="modal__header">
    <h2 class="modal__title" id="modal-title">Are you sure?</h2>
    <button class="modal__close" type="button" aria-label="Close">×</button>
  </div>
  <div class="modal__body">
    <p>This action cannot be undone.</p>
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
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-1);
  padding: 0;
  max-width: 420px;
  width: calc(100% - var(--space-8));
  background-color: var(--color-surface-raised);
}

.modal::backdrop { background-color: rgba(44, 44, 42, 0.25); }

.modal__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: var(--space-6) var(--space-6) 0;
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
  transition: color var(--duration-fast) var(--easing-standard);
}
.modal__close:hover { color: var(--color-text); }
.modal__close:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }

.modal__body {
  padding: var(--space-5) var(--space-6);
  color: var(--color-text-secondary);
  line-height: var(--line-height-base);
}

.modal__footer {
  display: flex; justify-content: flex-end; gap: var(--space-3);
  padding: var(--space-4) var(--space-6) var(--space-6);
}
```

---

## Accessibility Rules

Mandatory:

1. **Contrast:** WCAG AA. `--color-text` (#2C2C2A) on `--color-surface` (#FAFAF8) = 13.5:1. `--color-text-secondary` (#6B6B66) on surface = 5.4:1. `--color-primary` (#4A6670) on surface = 5.2:1. All pass.
2. **Focus:** `:focus-visible` with `outline: 2px solid var(--color-focus); outline-offset: 2px`.
3. **Touch targets:** 44×44px minimum.
4. **Keyboard:** Full Tab navigation. Focus trap in modals. Escape closes overlays.
5. **Semantic HTML:** Correct elements throughout.
6. **Labels:** All inputs labeled. Placeholder is never a substitute.
7. **ARIA:** `aria-invalid`, `aria-describedby`, `aria-current="page"`, `role="alert"`, `aria-label`, `aria-live`.
8. **Images:** `alt` on all `<img>`.
9. **Color:** Never color-only signaling.
10. **Font choice:** Atkinson Hyperlegible is designed specifically for readability, including for users with low vision. This is an intentional accessibility choice.

---

## Validation Checklist

- [ ] All spacing uses tokens (`--space-1` through `--space-10`)
- [ ] All colors use tokens — no raw values
- [ ] All font sizes use type scale tokens
- [ ] **No shadow heavier than `--shadow-1`** — only the lightest shadow exists
- [ ] **No border-radius larger than `--radius-md` (6px)** — except search/pill using `--radius-full`
- [ ] **No font-weight heavier than `--font-weight-semibold` (600)** — no bold, no black
- [ ] **No text-transform: uppercase** anywhere
- [ ] **No letter-spacing wider than `--letter-spacing-wide` (0.01em)**
- [ ] **No transitions longer than `--duration-base` (150ms)**
- [ ] **No gradients**
- [ ] **No glow effects**
- [ ] Colors are desaturated / muted — no vivid or saturated hues
- [ ] Navbar brand is lowercase
- [ ] Toast has no icon — text-only message
- [ ] Card image ratio is 3:2 (not 16:9)
- [ ] Page max-width is 960px (narrow)
- [ ] All interactive elements have `:focus-visible`
- [ ] All form inputs have `<label>`
- [ ] All buttons use `<button>`
- [ ] Contrast meets WCAG AA
- [ ] Touch targets 44×44px
- [ ] HTML matches reference patterns
- [ ] No inline styles
- [ ] Semantic HTML
- [ ] ARIA applied
- [ ] Regular rhythm — equal 36px spacing between siblings
- [ ] Symmetric layout — centered, equal columns
- [ ] Flat hierarchy — gentle size steps between headings
- [ ] Subtle emphasis — CTAs differ by background fill only
