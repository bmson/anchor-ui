# UI Skill: FlatMinimal

> **Style:** FlatMinimal
> **Rhythm:** Regular
> **Whitespace:** Comfortable
> **Emphasis:** Subtle
> **Balance:** Symmetric
> **Harmony:** Tight
> **Unity:** Strict
> **Variety:** Minimal
> **Hierarchy:** Flat
> **Motion:** Micro
> **A11Y Level:** WCAG AA

When generating any UI, follow every instruction in this document exactly. Use the provided CSS tokens for all values — never use raw hex colors, pixel values, or font sizes outside the defined scales. Copy component patterns structurally. Consistency is paramount: the same component should look identical every time it is generated.

**Philosophy:**
Quiet, understated design. No shadows or gradients. Let the content speak.

---

## 1. Style Signature & Abstract Logic

Before generating any code, evaluate the UI against these abstract style constraints:

- **Core Constraint:** 0px elevation. Shadows are strictly forbidden.
- **Rhythm & Grid:** Regular. Adjust padding to feel Comfortable.
- **Emphasis & Hierarchy:** Subtle emphasis. Communicate importance via Flat methods.
- **Interaction Feel:** Snappy and precise.

---

## 2. Foundation Tokens

```css
/* TOKENS: FlatMinimal */
:root {
  /* Spacing (ordinal steps, not multipliers — ×1 / ×1.5 / ×2 / ×3 / ×4 / ×6 / ×8 / ×12 / ×16 / ×24) */
  --space-unit: 4px;
  --space-1: calc(var(--space-unit) * 1);    /* 4px / 8px */
  --space-2: calc(var(--space-unit) * 1.5);  /* 6px / 12px */
  --space-3: calc(var(--space-unit) * 2);    /* 8px / 16px */
  --space-4: calc(var(--space-unit) * 3);    /* 12px / 24px */
  --space-5: calc(var(--space-unit) * 4);    /* 16px / 32px */
  --space-6: calc(var(--space-unit) * 6);    /* 24px / 48px */
  --space-7: calc(var(--space-unit) * 8);    /* 32px / 64px */
  --space-8: calc(var(--space-unit) * 12);   /* 48px / 96px */
  --space-9: calc(var(--space-unit) * 16);   /* 64px / 128px */
  --space-10: calc(var(--space-unit) * 24);  /* 96px / 192px */

  /* Typography */
  --font-family: 'IBM Plex Sans', -apple-system, sans-serif;
  --font-mono: 'Menlo', 'Monaco', 'Courier New', monospace;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-md: 1.125rem;
  --text-lg: 1.25rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.5rem;
  --line-height-tight: 1.25;
  --line-height-base: 1.5;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --letter-spacing-wide: 0.02em;

  /* Colors */
  --color-primary: #2563eb;
  --color-primary-hover: color-mix(in srgb, var(--color-primary) 85%, black);
  --color-primary-light: color-mix(in srgb, var(--color-primary) 15%, transparent);
  --color-on-primary: #FFFFFF;

  --color-surface: #ffffff;
  --color-surface-alt: color-mix(in srgb, var(--color-surface) 95%, black);
  --color-background: #f8fafc;

  /* Neutral palette — derived from background. Assumes a solid --color-background; for gradient backgrounds, set these manually. */
  --color-text: color-mix(in oklch, var(--color-background) 8%, black);
  --color-text-secondary: color-mix(in oklch, var(--color-background) 30%, black);
  --color-text-hint: color-mix(in oklch, var(--color-background) 55%, black);

  --color-border: color-mix(in oklch, var(--color-background) 85%, black);
  --color-border-strong: color-mix(in oklch, var(--color-background) 68%, black);
  --color-divider: color-mix(in oklch, var(--color-background) 91%, black);

  --color-error: #dc2626;
  --color-success: #16a34a;

  --color-focus: var(--color-primary);
  --color-focus-ring: color-mix(in srgb, var(--color-primary) 30%, transparent);

  /* Geometry & Effects */
  --radius-sm: calc(6px * 0.5);
  --radius-md: 6px;
  --radius-lg: calc(6px * 1.5);
  --radius-full: 9999px;

  --border-weight: 1px;
  --shadow-main: none;
  --blur-main: none;

  /* Motion */
  --duration-fast: 100ms;
  --duration-base: 150ms;
  --duration-slow: 250ms;
  --ease-standard: ease-in-out;

  /* Layout (hardcoded defaults — override per project) */
  --max-width: 1080px;
  --gutter: var(--space-6);
  --control-height: 44px;
}

/* Dark mode — re-derives neutral palette from a dark base. Surface/background colors are inherited from theme tokens above. */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text: color-mix(in oklch, var(--color-background) 8%, white);
    --color-text-secondary: color-mix(in oklch, var(--color-background) 30%, white);
    --color-text-hint: color-mix(in oklch, var(--color-background) 55%, white);
    --color-border: color-mix(in oklch, var(--color-background) 85%, white);
    --color-border-strong: color-mix(in oklch, var(--color-background) 68%, white);
    --color-divider: color-mix(in oklch, var(--color-background) 91%, white);
  }
}
/* Apply with .theme-dark class to override OS preference or force dark mode */
.theme-dark {
  --color-text: color-mix(in oklch, var(--color-background) 8%, white);
  --color-text-secondary: color-mix(in oklch, var(--color-background) 30%, white);
  --color-text-hint: color-mix(in oklch, var(--color-background) 55%, white);
  --color-border: color-mix(in oklch, var(--color-background) 85%, white);
  --color-border-strong: color-mix(in oklch, var(--color-background) 68%, white);
  --color-divider: color-mix(in oklch, var(--color-background) 91%, white);
}

.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;
}
```

---

## 3. Layout, Rhythm & Containment

### Base Containment

All generated UI must be wrapped in a container using the background token to ensure proper contrast of the elements.

```html
<div style="background-color: var(--color-background); min-height: 100vh; padding: var(--space-8);"></div>
```

### Rhythm Rules

Equal spacing between siblings at the same level.

```css
.layout-stack > * + * {
  margin-block-start: var(--space-6);
}

.layout-section {
  padding-block: var(--space-8);
}
```

### Motion Performance Guardrail

**Motion Level: Micro**
When creating animations or transitions, animate ONLY composite properties: `transform`, `opacity`, and `filter`. NEVER animate `width`, `height`, `margin`, `padding`, or `box-shadow` if `Micro` is Fluid or higher, as this triggers layout repaints.

---

## 4. Interaction & Data Heuristics

### Micro-Typography

To maintain readability without scale or decoration:

- **Labels/Metadata:** Use `var(--text-xs)`, `text-transform: uppercase`, `letter-spacing: var(--letter-spacing-wide)`, and `var(--color-text-secondary)`.
- **Primary Values:** Use `var(--text-sm)` or `var(--text-base)` with `var(--font-weight-medium)`.

---

## 5. Mandatory Pattern Library

### Typography

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family);
  color: var(--color-text);
  line-height: var(--line-height-tight);
  margin: 0;
}

h1 {
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
}

h2 {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
}

h3 {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-medium);
}

p, li, td, th {
  font-family: var(--font-family);
  font-size: var(--text-base);
  line-height: var(--line-height-base);
  color: var(--color-text);
}
a {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color var(--duration-fast) var(--ease-standard);
}

a:hover {
  color: var(--color-primary-hover);
}

a:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
  border-radius: 2px;
}
```

### Buttons

```html
<button class="btn btn--primary" type="button">Primary</button>
<button class="btn btn--secondary" type="button">Secondary</button>
<button class="btn btn--ghost" type="button">Ghost</button>
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
  padding: var(--space-3) var(--space-5);
  height: var(--control-height);
  box-sizing: border-box;
  border-radius: var(--radius-md);
  border: var(--border-weight) solid transparent;
  box-shadow: var(--shadow-main);
  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--duration-fast) var(--ease-standard),
              color var(--duration-fast) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard);
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
  border-color: var(--color-border);
}

.btn--primary:hover {
  background-color: var(--color-primary-hover);
}

.btn--secondary {
  background-color: var(--color-surface);
  color: var(--color-text);
  border-color: var(--color-border);
}

.btn--secondary:hover {
  background-color: var(--color-surface-alt);
}

.btn--ghost {
  background-color: transparent;
  color: var(--color-text-secondary);
  box-shadow: none;
  border-color: transparent;
}

.btn--ghost:hover {
  background-color: var(--color-surface-alt);
  color: var(--color-text);
}
```

### Text Inputs

```html
<!-- Default -->
<div class="field">
  <label class="field__label" for="email">Email</label>
  <input class="field__input" type="email" id="email" placeholder="you@example.com" />
</div>

<!-- Error state -->
<div class="field field--error">
  <label class="field__label" for="email-err">Email</label>
  <input class="field__input" type="email" id="email-err" aria-describedby="email-hint" aria-invalid="true" />
  <span class="field__hint" id="email-hint" role="alert">Please enter a valid email address.</span>
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
}

.field__input {
  font-family: var(--font-family);
  font-size: var(--text-base);
  color: var(--color-text);
  background-color: var(--color-surface);
  border: var(--border-weight) solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  height: var(--control-height);
  box-sizing: border-box;
  box-shadow: var(--shadow-main);
  transition: border-color var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard);
}

.field__input::placeholder {
  color: var(--color-text-hint);
}

.field__input:hover {
  border-color: var(--color-border-strong);
}

.field__input:focus {
  outline: none;
}

.field__input:focus-visible {
  border-color: var(--color-focus);
  box-shadow: 0 0 0 3px var(--color-focus-ring);
}

.field__hint {
  font-family: var(--font-family);
  font-size: var(--text-sm);
  color: var(--color-text-hint);
}

.field--error .field__input {
  border-color: var(--color-error);
}

.field--error .field__input:focus-visible {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-error) 20%, transparent);
}

.field--error .field__hint {
  color: var(--color-error);
}
```

### Select

```html
<div class="field">
  <label class="field__label" for="role">Role</label>

  <select class="field__input field__select" id="role">
    <option>Admin</option>
    <option>Editor</option>
  </select>
</div>
```

```css
.field__select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%236B7280' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-4) center;
  padding-right: var(--space-6);
  cursor: pointer;
}
```

### Textarea

```html
<div class="field">
  <label class="field__label" for="bio">Bio</label>
  <textarea class="field__input field__textarea" id="bio" rows="4" placeholder="Tell us about yourself"></textarea>
</div>
```

```css
.field__textarea {
  height: auto;
  resize: vertical;
  min-height: calc(var(--control-height) * 2);
}
```

### Radio Buttons

```html
<fieldset class="radio-group">
  <legend class="radio-group__legend">Plan</legend>

  <div class="radio">
    <input class="radio__input" type="radio" id="free" name="plan" value="free" />
    <label class="radio__label" for="free">Free</label>
  </div>

  <div class="radio">
    <input class="radio__input" type="radio" id="pro" name="plan" value="pro" />
    <label class="radio__label" for="pro">Pro</label>
  </div>
</fieldset>
```

```css
.radio-group {
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.radio-group__legend {
  font-family: var(--font-family);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.radio {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.radio__input {
  appearance: none;
  position: relative;
  width: 20px;
  height: 20px;
  min-width: 20px;
  border: var(--border-weight) solid var(--color-border-strong);
  border-radius: var(--radius-full);
  background-color: var(--color-surface);
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-standard),
              background-color var(--duration-fast) var(--ease-standard);
}

.radio__input:checked {
  border-color: var(--color-primary);
}

.radio__input:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full);
  background-color: var(--color-primary);
  transform: translate(-50%, -50%);
}

.radio__input:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.radio__label {
  font-family: var(--font-family);
  font-size: var(--text-base);
  color: var(--color-text);
  cursor: pointer;
}
```

### Checkbox

```html
<div class="checkbox">
  <input class="checkbox__input" type="checkbox" id="terms" />
  <label class="checkbox__label" for="terms">I agree</label>
</div>
```

```css
.checkbox {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  min-height: var(--control-height);
  padding-block: var(--space-2);
}

.checkbox__input {
  appearance: none;
  position: relative;
  width: 20px;
  height: 20px;
  min-width: 20px;
  border: var(--border-weight) solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface);
  cursor: pointer;
  margin-top: 2px;
  box-shadow: var(--shadow-main);
  transition: background-color var(--duration-fast) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard);
}

.checkbox__input:checked {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.checkbox__input:checked::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 6px;
  width: 5px;
  height: 10px;
  border: 2px solid white;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
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
}
```

### Cards

```html
<article class="card">
  <div class="card__body">
    <h3 class="card__title">Card Title</h3>
    <p class="card__text">Brief description.</p>
  </div>
</article>
```

```css
.card {
  background-color: var(--color-surface);
  border: var(--border-weight) solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-main);
  backdrop-filter: var(--blur-main);
  transition: box-shadow var(--duration-base) var(--ease-standard),
              transform var(--duration-base) var(--ease-standard);
}

.card__body {
  padding: var(--space-6);
}

.card__title {
  font-family: var(--font-family);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin: 0;
}

.card__text {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  margin: var(--space-3) 0 0;
}
```

### Empty States

```html
<div class="empty-state">
  <div class="empty-state__icon" aria-hidden="true"></div>
  <h3 class="empty-state__title">No results found</h3>
  <p class="empty-state__text">Try adjusting your filters.</p>
  <button class="btn btn--secondary btn--sm">Clear Filters</button>
</div>
```

```css
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-8);
  text-align: center;
  border: var(--border-weight) dashed var(--color-border-strong);
  border-radius: var(--radius-lg);
}

.empty-state__icon {
  color: var(--color-text-hint);
  margin-bottom: var(--space-4);
}

.empty-state__title {
  font-family: var(--font-family);
  font-size: var(--text-md);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  margin: 0;
}

.empty-state__text {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin: var(--space-2) 0 var(--space-4) 0;
}
```

### Notifications / Toasts

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
  max-width: 400px;
  width: 100%;
  border: var(--border-weight) solid var(--color-border);
  box-shadow: var(--shadow-main);
  backdrop-filter: var(--blur-main);
  background-color: var(--color-surface);
}

.toast__content {
  flex: 1;
}

.toast__message {
  font-family: var(--font-family);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  margin: 0;
  color: var(--color-text);
}

.toast__dismiss {
  appearance: none;
  background: none;
  border: none;
  color: var(--color-text-hint);
  cursor: pointer;
  padding: var(--space-2);
  font-size: var(--text-md);
  border-radius: var(--radius-sm);
}

.toast__dismiss:hover {
  color: var(--color-text);
  background-color: var(--color-surface-alt);
}
```

### Modal / Dialog

```html
<dialog class="modal" aria-labelledby="modal-title">
  <div class="modal__header">
    <h2 class="modal__title" id="modal-title">Confirm</h2>
    <button class="modal__close" type="button" aria-label="Close">×</button>
  </div>

  <div class="modal__body"><p>Are you sure?</p></div>

  <div class="modal__footer">
    <button class="btn btn--ghost" type="button">Cancel</button>
    <button class="btn btn--primary" type="button">Confirm</button>
  </div>
</dialog>
```

```css
.modal {
  background-color: var(--color-surface);
  border: var(--border-weight) solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 0;
  max-width: 440px;
  width: calc(100% - var(--space-8));
  box-shadow: var(--shadow-main);
  backdrop-filter: var(--blur-main);
}

.modal::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-5) var(--space-6);
  border-bottom: var(--border-weight) solid var(--color-divider);
}

.modal__title {
  font-family: var(--font-family);
  font-size: var(--text-md);
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
  border-radius: var(--radius-sm);
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
  padding: var(--space-4) var(--space-6);
  border-top: var(--border-weight) solid var(--color-divider);
}
```

### Navigation Bar

```html
<header class="navbar" role="banner">
  <nav class="navbar__inner">
    <a class="navbar__brand" href="/">AppName</a>
    <ul class="navbar__links" role="list">
      <li><a class="navbar__link navbar__link--active" href="/">Home</a></li>
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
  border-bottom: var(--border-weight) solid var(--color-border);
  box-shadow: var(--shadow-main);
  backdrop-filter: var(--blur-main);
}

.navbar__inner {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  max-width: var(--max-width);
  margin-inline: auto;
  padding: var(--space-4) var(--gutter);
  min-height: 64px;
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
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  transition: background-color var(--duration-fast) var(--ease-standard),
      color var(--duration-fast) var(--ease-standard);
}

.navbar__link:hover {
  color: var(--color-text);
  background-color: var(--color-surface-alt);
}

.navbar__link--active {
  color: var(--color-primary);
  background-color: var(--color-primary-light);
}
```

---

## 6. Accessibility & Technical Guardrails

**1. No Utility Frameworks (Zero-Utility Clause):**
Strict Rule: Use only the semantic CSS classes defined in this document. Do not use Tailwind, Tachyons, Bootstrap, or inline styles. **If a utility class (e.g. `flex`, `p-4`, `text-sm`) appears anywhere in the output, the output is invalid and must be regenerated.**

**2. Iconography Standard:**

- **Dimensions:** 20×20px or 24×24px inside a 44×44px minimum touch target.
- **Weight:** 1.5px or 2px consistent stroke width. Inherit `currentColor`.

**3. Core A11Y:**

- **Contrast:** WCAG AA.
- **Focus:** `:focus-visible` with `outline: 2px solid var(--color-primary); outline-offset: 2px`.
- **Touch targets:** 44×44px minimum.

---

## 7. Validation Checklist

**Verify the output against this list before finalizing the response:**

- [ ] Are all spacing values using tokens (`--space-1` through `--space-10`)?
- [ ] Are all colors using CSS tokens with zero raw hex values in the markup?
- [ ] **Negative Constraint:** No box-shadows, no gradients, no blurred backgrounds.
- [ ] **Proper Containment:** Is the entire UI placed within a background wrapper token?
- [ ] Do all interactive elements have `:focus-visible`?
- [ ] Are animations strictly adhering to the `Micro` rules and durations?
- [ ] **No Utility Classes:** Verified that no Tailwind-style or atomic classes were used. Any utility class = invalid output.
- [ ] Does the output use `prefers-color-scheme: dark` or `.theme-dark` if dark mode is required?
