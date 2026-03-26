# Anchor CLI

Interactive CLI for generating design token skill files. Walk through a guided wizard to define your design system — style, rhythm, whitespace, color, motion, accessibility — then fine-tune individual tokens and export a ready-to-use `.md` skill file.

## Quick Start

```bash
npx @anchor-org/cli
```

## Install

```bash
npm install --global @anchor-org/cli
```

Then run it anywhere:

```bash
anchor
anchor --name "My Brand"
```

## Options

| Flag     | Description                        |
|----------|------------------------------------|
| `--name` | Pre-fill the style name            |

## Development

```bash
npm install
npm run dev       # watch mode — rebuilds on save
npm run build     # one-off production build
npm run link      # build and link globally for local testing
npm run unlink    # remove the global link
```
