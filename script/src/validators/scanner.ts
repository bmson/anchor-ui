// ============================================================
// Validators — scan project files for skill violations
// ============================================================

import type { CheckResult } from '../types.js';

// Known token patterns
const SPACING_TOKENS = /var\(--space-(?:1|2|3|4|5|6|7|8|9|10)\)/;
const COLOR_TOKENS = /var\(--color-[a-z-]+\)/;

/**
 * Check a CSS/HTML/JSX file for violations.
 */
export function scanFile(content: string, filePath: string): CheckResult[] {
  const results: CheckResult[] = [];
  const lines = content.split('\n');
  const ext = filePath.split('.').pop() || '';
  const isCSS = ['css', 'scss', 'less'].includes(ext);
  const isMarkup = ['html', 'jsx', 'tsx', 'vue', 'svelte'].includes(ext);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;

    if (isCSS || isMarkup) {
      // Rule: No raw hex colors in style contexts
      const hexMatch = line.match(/#(?:[0-9a-fA-F]{3}){1,2}\b/);
      if (hexMatch && !line.includes('--') && !line.includes('svg') && !line.includes('url(')) {
        // Skip lines that are defining CSS custom properties
        if (!line.trim().startsWith('--')) {
          results.push({
            file: filePath,
            line: lineNum,
            rule: 'no-raw-colors',
            message: `Raw hex color "${hexMatch[0]}" — use a token like var(--color-*)`,
            severity: 'error',
            suggestion: 'Replace with the appropriate color token from your Anchor skill.',
          });
        }
      }

      // Rule: No raw rgb/rgba/hsl outside token definitions
      const rgbMatch = line.match(/(?<!var\()(?:rgb|rgba|hsl|hsla)\([^)]+\)/);
      if (rgbMatch && !line.trim().startsWith('--') && !line.includes('url(')) {
        results.push({
          file: filePath,
          line: lineNum,
          rule: 'no-raw-colors',
          message: `Raw color function "${rgbMatch[0].slice(0, 30)}..." — use a token`,
          severity: 'warning',
        });
      }

      // Rule: No raw pixel values for spacing (common offenders)
      const pxMatch = line.match(/(?:padding|margin|gap|top|right|bottom|left):\s*(\d+)px/);
      if (pxMatch && !line.trim().startsWith('--')) {
        results.push({
          file: filePath,
          line: lineNum,
          rule: 'no-raw-spacing',
          message: `Raw pixel value "${pxMatch[1]}px" — use var(--space-*) tokens`,
          severity: 'warning',
          suggestion: 'Replace with the closest spacing token from your Anchor skill.',
        });
      }

      // Rule: No raw font-size values
      const fontSizeMatch = line.match(/font-size:\s*(\d+(?:\.\d+)?(?:px|rem|em))/);
      if (fontSizeMatch && !line.trim().startsWith('--') && !line.includes('var(')) {
        results.push({
          file: filePath,
          line: lineNum,
          rule: 'no-raw-font-size',
          message: `Raw font-size "${fontSizeMatch[1]}" — use var(--text-*) tokens`,
          severity: 'error',
        });
      }

      // Rule: No outline: none without replacement
      if (line.includes('outline: none') || line.includes('outline:none')) {
        // Check if next line has a replacement
        const nextLine = lines[i + 1] || '';
        if (!nextLine.includes('box-shadow') && !nextLine.includes('outline') && !nextLine.includes('border')) {
          results.push({
            file: filePath,
            line: lineNum,
            rule: 'focus-visible-required',
            message: 'outline: none removes focus indicator — provide a visible replacement',
            severity: 'error',
          });
        }
      }

      // Rule: No min-height on form controls (should use --control-height)
      if (line.match(/min-height:\s*\d+px/) && !line.trim().startsWith('--')) {
        // Heuristic: check if we're in a form control context
        const contextLines = lines.slice(Math.max(0, i - 10), i).join('\n');
        if (contextLines.match(/\.(btn|field__input|field__select|search__input)/)) {
          results.push({
            file: filePath,
            line: lineNum,
            rule: 'control-height-token',
            message: 'Form controls should use height: var(--control-height), not raw min-height',
            severity: 'warning',
          });
        }
      }
    }

    // Markup-specific rules
    if (isMarkup) {
      // Rule: No div/span with onclick (should be button)
      if (line.match(/<(?:div|span)[^>]*on[Cc]lick/)) {
        results.push({
          file: filePath,
          line: lineNum,
          rule: 'semantic-button',
          message: 'Use <button> for interactive elements, not <div> or <span> with onClick',
          severity: 'error',
        });
      }

      // Rule: Inputs need labels
      if (line.match(/<input[^>]*>/) && !line.includes('type="hidden"')) {
        // Check surrounding lines for label
        const context = lines.slice(Math.max(0, i - 5), Math.min(lines.length, i + 5)).join('\n');
        if (!context.includes('<label') && !context.includes('aria-label') && !context.includes('aria-labelledby')) {
          results.push({
            file: filePath,
            line: lineNum,
            rule: 'input-needs-label',
            message: 'Input element missing associated <label> or aria-label',
            severity: 'error',
          });
        }
      }

      // Rule: Images need alt
      if (line.match(/<img[^>]*>/) && !line.includes('alt=') && !line.includes('alt =')) {
        results.push({
          file: filePath,
          line: lineNum,
          rule: 'img-needs-alt',
          message: 'Image element missing alt attribute',
          severity: 'error',
        });
      }

      // Rule: No inline styles
      if (line.match(/style=["'{]/) && !line.includes('style={{')) {
        // Allow React inline styles (style={{}}) but flag HTML inline styles
        results.push({
          file: filePath,
          line: lineNum,
          rule: 'no-inline-styles',
          message: 'Inline styles detected — use CSS classes with design tokens instead',
          severity: 'warning',
        });
      }
    }
  }

  return results;
}
