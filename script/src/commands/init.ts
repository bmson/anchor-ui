// ============================================================
// anchor init — Create a new skill
// ============================================================

import prompts from 'prompts';
import pc from 'picocolors';
import fs from 'node:fs';
import path from 'node:path';
import type { AnchorConfig, InitOptions } from '../types.js';
import { STYLE_CHOICES } from '../data/styles/index.js';
import { DENSITY_CHOICES } from '../data/densities/index.js';
import { RHYTHM_CHOICES } from '../data/rhythms/index.js';
import { EMPHASIS_CHOICES, BALANCE_CHOICES, HIERARCHY_CHOICES } from '../data/principles/index.js';
import { generateSkill, generateTokensCSS } from '../generators/skill.js';

const LOGO = `
  ${pc.bold('⚓ Anchor AI')}
  ${pc.dim('Design skills for AI coding agents')}
`;

/**
 * Import a skill from a URL or local file path.
 */
async function importSkill(source: string): Promise<string> {
  // URL
  if (source.startsWith('http://') || source.startsWith('https://')) {
    console.log(pc.dim(`  Fetching from ${source}...`));
    const res = await fetch(source);
    if (!res.ok) {
      throw new Error(`Failed to fetch skill: ${res.status} ${res.statusText}`);
    }
    return await res.text();
  }

  // Local file
  const resolved = path.resolve(source);
  if (!fs.existsSync(resolved)) {
    throw new Error(`File not found: ${resolved}`);
  }
  return fs.readFileSync(resolved, 'utf-8');
}

/**
 * Detect where to write the skill file based on the project.
 */
function detectOutputPath(baseDir: string): { skillPath: string; tokensPath: string; claudePath: string | null } {
  const dir = path.resolve(baseDir);

  // Check for .claude directory (Claude Code)
  const claudeSkillsDir = path.join(dir, '.claude', 'skills');

  // Default paths
  const skillPath = fs.existsSync(path.join(dir, '.claude'))
    ? path.join(claudeSkillsDir, 'anchor.md')
    : path.join(dir, 'anchor-skill.md');

  const tokensPath = path.join(dir, 'anchor-tokens.css');

  // Check for CLAUDE.md
  const claudeMdPath = path.join(dir, 'CLAUDE.md');
  const claudePath = fs.existsSync(claudeMdPath) || fs.existsSync(path.join(dir, '.claude'))
    ? claudeMdPath
    : null;

  return { skillPath, tokensPath, claudePath };
}

/**
 * Write files and optionally update CLAUDE.md.
 */
function writeSkillFiles(
  skillContent: string,
  tokensContent: string,
  paths: { skillPath: string; tokensPath: string; claudePath: string | null },
  skipClaude: boolean,
): void {
  // Ensure directories exist
  const skillDir = path.dirname(paths.skillPath);
  fs.mkdirSync(skillDir, { recursive: true });

  // Write skill
  fs.writeFileSync(paths.skillPath, skillContent, 'utf-8');
  console.log(pc.green(`  ✓ Skill written to ${pc.bold(paths.skillPath)}`));

  // Write tokens CSS
  fs.writeFileSync(paths.tokensPath, tokensContent, 'utf-8');
  console.log(pc.green(`  ✓ Tokens written to ${pc.bold(paths.tokensPath)}`));

  // Update CLAUDE.md
  if (paths.claudePath && !skipClaude) {
    const anchor = `\n\n## UI Design Skill\n\nFollow the Anchor AI design skill for all UI generation. The skill file is at: ${path.relative(path.dirname(paths.claudePath), paths.skillPath)}\nThe CSS tokens file is at: ${path.relative(path.dirname(paths.claudePath), paths.tokensPath)}\n`;

    if (fs.existsSync(paths.claudePath)) {
      const existing = fs.readFileSync(paths.claudePath, 'utf-8');
      if (!existing.includes('Anchor AI')) {
        fs.appendFileSync(paths.claudePath, anchor, 'utf-8');
        console.log(pc.green(`  ✓ Updated ${pc.bold(paths.claudePath)}`));
      } else {
        console.log(pc.dim(`  ⋅ CLAUDE.md already references Anchor`));
      }
    } else {
      fs.writeFileSync(paths.claudePath, `# Project Instructions${anchor}`, 'utf-8');
      console.log(pc.green(`  ✓ Created ${pc.bold(paths.claudePath)}`));
    }
  }
}

/**
 * Interactive prompts to build the config.
 */
async function promptConfig(): Promise<AnchorConfig | null> {
  const response = await prompts([
    {
      type: 'text',
      name: 'name',
      message: 'Skill name',
      initial: 'My App UI',
    },
    {
      type: 'select',
      name: 'style',
      message: 'Style family',
      choices: STYLE_CHOICES,
      initial: 0,
    },
    {
      type: 'select',
      name: 'rhythm',
      message: 'Rhythm type',
      choices: RHYTHM_CHOICES,
      initial: 0,
    },
    {
      type: 'select',
      name: 'density',
      message: 'Whitespace density',
      choices: DENSITY_CHOICES,
      initial: 1, // comfortable
    },
    {
      type: 'select',
      name: 'emphasis',
      message: 'Emphasis level',
      choices: EMPHASIS_CHOICES,
      initial: 1, // moderate
    },
    {
      type: 'select',
      name: 'balance',
      message: 'Layout balance',
      choices: BALANCE_CHOICES,
      initial: 0, // symmetric
    },
    {
      type: 'select',
      name: 'hierarchy',
      message: 'Hierarchy steepness',
      choices: HIERARCHY_CHOICES,
      initial: 1, // moderate
    },
    {
      type: 'select',
      name: 'a11y',
      message: 'Accessibility level',
      choices: [
        { title: 'WCAG AA', description: 'Standard — 4.5:1 contrast for normal text', value: 'AA' },
        { title: 'WCAG AAA', description: 'Enhanced — 7:1 contrast for normal text', value: 'AAA' },
      ],
      initial: 0,
    },
  ], {
    onCancel: () => {
      console.log(pc.dim('\n  Cancelled.'));
      process.exit(0);
    },
  });

  if (!response.style) return null;

  return {
    name: response.name,
    style: response.style,
    rhythm: response.rhythm,
    density: response.density,
    emphasis: response.emphasis,
    balance: response.balance,
    // Defaults for non-prompted values
    harmony: 'tight',
    unity: 'strict',
    variety: 'minimal',
    hierarchy: response.hierarchy,
    a11y: response.a11y,
  };
}

/**
 * Default config for --yes flag.
 */
function defaultConfig(): AnchorConfig {
  return {
    name: 'Default',
    style: 'material',
    rhythm: 'regular',
    density: 'comfortable',
    emphasis: 'moderate',
    balance: 'symmetric',
    harmony: 'tight',
    unity: 'strict',
    variety: 'minimal',
    hierarchy: 'moderate',
    a11y: 'AA',
  };
}

/**
 * Main init command handler.
 */
export async function initCommand(opts: InitOptions): Promise<void> {
  console.log(LOGO);

  const baseDir = opts.output || '.';
  const paths = detectOutputPath(baseDir);

  // Import from URL or file
  if (opts.from) {
    console.log(pc.dim('  Importing skill...\n'));
    const skillContent = await importSkill(opts.from);
    const tokensContent = '/* Import mode — extract tokens from the skill file manually */';
    writeSkillFiles(skillContent, tokensContent, paths, opts.skipClaude || false);
    console.log(pc.green('\n  Done! Your Anchor skill is ready.\n'));
    return;
  }

  // Interactive or default
  let config: AnchorConfig;
  if (opts.yes) {
    config = defaultConfig();
    console.log(pc.dim('  Using defaults: Material, Regular rhythm, Comfortable density\n'));
  } else {
    const prompted = await promptConfig();
    if (!prompted) return;
    config = prompted;
  }

  // Generate
  console.log(pc.dim('\n  Generating skill...\n'));
  const skillContent = generateSkill(config);
  const tokensContent = generateTokensCSS(config);

  // Write
  writeSkillFiles(skillContent, tokensContent, paths, opts.skipClaude || false);

  // Summary
  console.log(`
${pc.green('  Done!')} Your Anchor skill is ready.

${pc.dim('  Next steps:')}
  ${pc.dim('1.')} Import ${pc.bold('anchor-tokens.css')} in your app
  ${pc.dim('2.')} Start building — your AI agent will follow the skill
  ${pc.dim('3.')} Run ${pc.bold('anchor check')} to validate output

  ${pc.dim('Config:')} ${config.style} / ${config.rhythm} / ${config.density}
`);
}
