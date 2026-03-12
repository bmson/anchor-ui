# ⚓ Anchor AI

Design skills for AI coding agents. Stop getting generic LLM UI.

Anchor generates a Markdown skill file that tells AI coding tools (Claude Code, Cursor, Copilot) exactly how your UI should look — down to the pixel. Same skill, same output, every time.

## Quick Start

```bash
npx anchor-ai init
```

Answer a few questions — style, rhythm, density, emphasis — and Anchor writes a skill file into your project. Your AI agent reads it and follows it.

## What It Does

1. **You define** your design language: Material? Brutalist? Nordic minimal? Progressive rhythm or regular? Compact or spacious?
2. **Anchor generates** a Markdown skill file with CSS tokens, component patterns, accessibility rules, and a validation checklist
3. **Your AI agent reads** the skill and produces UI that matches — consistently

## Commands

### `anchor init`

Interactive setup. Creates two files:

- **`anchor.md`** — the skill file your AI agent reads
- **`anchor-tokens.css`** — CSS custom properties to import in your app

Options:
- `--from <url|path>` — import a skill from a URL or local file
- `--output <dir>` — output directory (default: current)
- `--skip-claude` — don't update CLAUDE.md
- `-y, --yes` — accept defaults without prompting

### `anchor check`

Validates your project's UI code against the skill. Catches raw hex colors, missing ARIA attributes, unsemantic HTML, raw pixel values, and more.

Options:
- `--dir <path>` — directory to scan (default: current)
- `--format <pretty|json>` — output format
- `--fix` — auto-fix where possible (coming soon)

## Style Families

| Style | Description |
|---|---|
| Material | Layered elevation, subtle shadows, clean sans-serif |
| Flat | No shadows, border-defined, understated |
| Brutalist | Zero radius, thick borders, hard shadows, monospace |
| Neumorphism | Soft raised/inset shadows on shared surface |
| Glassmorphism | Frosted blur surfaces over gradient backgrounds |
| Swiss | Typography-driven, grid-sacred, one accent color |
| Nordic | Scandinavian minimal, desaturated, generous whitespace |
| Organic | Earthy palette, serif headings, warm shadows |
| Dark Material | Dark surfaces, purple accents, elevation via lightness |
| Kinetic | Motion-forward, spring easing, animated everything |
| Ultra Modern | oklch, container queries, :has(), scroll-driven animations |

## Design Controls

- **Rhythm:** Regular (uniform) / Flowing (contextual) / Progressive (escalating)
- **Density:** Compact / Comfortable / Spacious
- **Emphasis:** Subtle / Moderate / Strong
- **Balance:** Symmetric / Asymmetric
- **Hierarchy:** Flat / Moderate / Steep
- **A11Y:** WCAG AA / AAA

## How It Works

The skill file is plain Markdown — LLMs already understand it natively. It contains:

1. **CSS tokens** in a code block the agent copies verbatim
2. **Component patterns** with reference HTML + CSS the agent pattern-matches
3. **Design principle rules** in prose the agent follows
4. **Accessibility rules** baked into every component
5. **A validation checklist** the agent self-checks before delivering code

The consistency mechanism: tokens + reference code + checklist = the agent copies rather than invents, and verifies rather than guesses.

## Works With

- Claude Code (via `.claude/skills/`)
- Cursor (via project rules)
- GitHub Copilot (via instructions files)
- Any AI coding tool that reads project context

## License

MIT

---

Built by [Anchor AI](https://anchor.ai)
