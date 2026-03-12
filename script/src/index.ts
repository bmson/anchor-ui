#!/usr/bin/env node
// ============================================================
// Anchor AI — CLI Entry
// ============================================================

import { Command } from 'commander';
import { initCommand } from './commands/init.js';
import { checkCommand } from './commands/check.js';
import pc from 'picocolors';

const program = new Command();

program
  .name('anchor')
  .description('Design skills for AI coding agents. Anchor your UI.')
  .version('0.1.0');

program
  .command('init')
  .description('Create a new Anchor skill for your project')
  .option('--from <source>', 'Import skill from URL or file path')
  .option('--output <dir>', 'Output directory', '.')
  .option('--skip-claude', 'Skip updating CLAUDE.md')
  .option('-y, --yes', 'Accept defaults without prompting')
  .action(async (opts) => {
    try {
      await initCommand(opts);
    } catch (err) {
      console.error(pc.red(`\nError: ${(err as Error).message}`));
      process.exit(1);
    }
  });

program
  .command('check')
  .description('Validate UI code against your Anchor skill')
  .option('--dir <path>', 'Directory to scan', '.')
  .option('--fix', 'Auto-fix violations where possible')
  .option('--format <type>', 'Output format: pretty or json', 'pretty')
  .action(async (opts) => {
    try {
      await checkCommand(opts);
    } catch (err) {
      console.error(pc.red(`\nError: ${(err as Error).message}`));
      process.exit(1);
    }
  });

program.parse();
