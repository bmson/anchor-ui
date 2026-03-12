import { describe, it, expect } from 'vitest';
import { generateSkill, generateTokensCSS } from '../src/generators/skill.js';
import type { AnchorConfig } from '../src/types.js';

const BASE_CONFIG: AnchorConfig = {
  name: 'Test Skill',
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

describe('generateSkill', () => {
  it('produces valid markdown with all sections', () => {
    const skill = generateSkill(BASE_CONFIG);

    expect(skill).toContain('# UI Skill: Test Skill');
    expect(skill).toContain('## Foundation Tokens');
    expect(skill).toContain('## Layout & Rhythm');
    expect(skill).toContain('## Component Patterns');
    expect(skill).toContain('## Accessibility Rules');
    expect(skill).toContain('## Validation Checklist');
  });

  it('includes CSS token block', () => {
    const skill = generateSkill(BASE_CONFIG);

    expect(skill).toContain(':root {');
    expect(skill).toContain('--space-');
    expect(skill).toContain('--color-primary');
    expect(skill).toContain('--control-height');
    expect(skill).toContain('--text-base');
  });

  it('respects style family', () => {
    const brutalist = generateSkill({ ...BASE_CONFIG, style: 'brutalist' });
    expect(brutalist).toContain('Brutalism');
    expect(brutalist).toContain("'Space Mono'");

    const nordic = generateSkill({ ...BASE_CONFIG, style: 'nordic' });
    expect(nordic).toContain('Nordic');
    expect(nordic).toContain("'Atkinson Hyperlegible'");
  });

  it('respects density', () => {
    const compact = generateSkill({ ...BASE_CONFIG, density: 'compact' });
    const spacious = generateSkill({ ...BASE_CONFIG, density: 'spacious' });

    // Compact should have smaller spacing values
    expect(compact).toContain('--space-6: 18px');
    expect(spacious).toContain('--space-6: 36px');
  });

  it('respects rhythm type', () => {
    const regular = generateSkill({ ...BASE_CONFIG, rhythm: 'regular' });
    const progressive = generateSkill({ ...BASE_CONFIG, rhythm: 'progressive' });

    expect(regular).toContain('Regular rhythm');
    expect(progressive).toContain('Progressive rhythm');
    expect(progressive).toContain('nth-child');
  });

  it('includes a11y rules', () => {
    const aa = generateSkill({ ...BASE_CONFIG, a11y: 'AA' });
    const aaa = generateSkill({ ...BASE_CONFIG, a11y: 'AAA' });

    expect(aa).toContain('WCAG AA');
    expect(aaa).toContain('WCAG AAA');
    expect(aaa).toContain('7:1');
  });
});

describe('generateTokensCSS', () => {
  it('produces valid CSS', () => {
    const css = generateTokensCSS(BASE_CONFIG);

    expect(css).toContain(':root {');
    expect(css).toContain('--space-1:');
    expect(css).toContain('--color-primary:');
    expect(css).toContain('.sr-only');
  });
});
