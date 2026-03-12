// ============================================================
// anchor check — Validate project against skill
// ============================================================

import pc from 'picocolors';
import fs from 'node:fs';
import path from 'node:path';
import fg from 'fast-glob';
import type { CheckOptions, CheckResult } from '../types.js';
import { scanFile } from '../validators/scanner.js';

// File patterns to scan
const SCAN_PATTERNS = [
  '**/*.css',
  '**/*.scss',
  '**/*.html',
  '**/*.jsx',
  '**/*.tsx',
  '**/*.vue',
  '**/*.svelte',
];

const IGNORE_PATTERNS = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/.next/**',
  '**/coverage/**',
  '**/anchor-tokens.css',  // Don't lint the generated tokens file
  '**/*.min.css',
];

/**
 * Format results for terminal output.
 */
function formatPretty(results: CheckResult[]): string {
  if (results.length === 0) {
    return pc.green('\n  ✓ No violations found. Your UI is anchored.\n');
  }

  // Group by file
  const byFile = new Map<string, CheckResult[]>();
  for (const r of results) {
    const existing = byFile.get(r.file) || [];
    existing.push(r);
    byFile.set(r.file, existing);
  }

  let output = '';
  const errors = results.filter(r => r.severity === 'error').length;
  const warnings = results.filter(r => r.severity === 'warning').length;

  for (const [file, fileResults] of byFile) {
    output += `\n  ${pc.underline(file)}\n`;
    for (const r of fileResults) {
      const icon = r.severity === 'error' ? pc.red('✕') : pc.yellow('⚠');
      const rule = pc.dim(`[${r.rule}]`);
      output += `    ${icon} ${pc.dim(`L${r.line}`)} ${r.message} ${rule}\n`;
      if (r.suggestion) {
        output += `      ${pc.dim(`→ ${r.suggestion}`)}\n`;
      }
    }
  }

  output += `\n  ${pc.bold('Summary:')} `;
  if (errors > 0) output += pc.red(`${errors} error${errors === 1 ? '' : 's'} `);
  if (warnings > 0) output += pc.yellow(`${warnings} warning${warnings === 1 ? '' : 's'} `);
  output += `in ${byFile.size} file${byFile.size === 1 ? '' : 's'}\n`;

  return output;
}

/**
 * Main check command handler.
 */
export async function checkCommand(opts: CheckOptions): Promise<void> {
  const dir = path.resolve(opts.dir || '.');

  console.log(`\n  ${pc.bold('⚓ Anchor check')} ${pc.dim(dir)}\n`);

  // Find files
  const files = await fg(SCAN_PATTERNS, {
    cwd: dir,
    ignore: IGNORE_PATTERNS,
    absolute: true,
  });

  if (files.length === 0) {
    console.log(pc.dim('  No CSS/HTML/JSX/TSX files found to check.\n'));
    return;
  }

  console.log(pc.dim(`  Scanning ${files.length} file${files.length === 1 ? '' : 's'}...`));

  // Scan all files
  const allResults: CheckResult[] = [];
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const relPath = path.relative(dir, file);
    const results = scanFile(content, relPath);
    allResults.push(...results);
  }

  // Output
  if (opts.format === 'json') {
    console.log(JSON.stringify(allResults, null, 2));
  } else {
    console.log(formatPretty(allResults));
  }

  // Exit code
  const hasErrors = allResults.some(r => r.severity === 'error');
  if (hasErrors) {
    process.exit(1);
  }
}
