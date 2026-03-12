// ============================================================
// Anchor AI — Core Types
// ============================================================

export type StyleFamily =
  | 'material'
  | 'flat'
  | 'brutalist'
  | 'neumorphism'
  | 'glassmorphism'
  | 'swiss'
  | 'nordic'
  | 'organic'
  | 'dark-material'
  | 'kinetic'
  | 'ultra-modern';

export type RhythmType = 'regular' | 'flowing' | 'progressive';

export type WhitespaceDensity = 'compact' | 'comfortable' | 'spacious';

export type EmphasisLevel = 'subtle' | 'moderate' | 'strong';

export type BalanceType = 'symmetric' | 'asymmetric';

export type HarmonyLevel = 'tight' | 'moderate' | 'loose';

export type UnityLevel = 'strict' | 'flexible';

export type VarietyLevel = 'minimal' | 'moderate' | 'expressive';

export type HierarchyLevel = 'flat' | 'moderate' | 'steep';

export type A11yLevel = 'AA' | 'AAA';

// The full config that describes a skill
export interface AnchorConfig {
  name: string;
  style: StyleFamily;
  rhythm: RhythmType;
  density: WhitespaceDensity;
  emphasis: EmphasisLevel;
  balance: BalanceType;
  harmony: HarmonyLevel;
  unity: UnityLevel;
  variety: VarietyLevel;
  hierarchy: HierarchyLevel;
  a11y: A11yLevel;
  // Optional overrides
  colors?: Partial<ColorTokens>;
  fonts?: Partial<FontTokens>;
}

export interface ColorTokens {
  primary: string;
  primaryHover: string;
  primaryActive: string;
  primaryLight: string;
  onPrimary: string;
  accent: string;
  surface: string;
  surfaceRaised: string;
  surfaceAlt: string;
  background: string;
  text: string;
  textSecondary: string;
  textHint: string;
  border: string;
  borderStrong: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  focus: string;
}

export interface FontTokens {
  family: string;
  heading: string;
  mono: string;
}

// Spacing scale that gets multiplied by density
export interface SpacingScale {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  10: number;
}

// Type scale
export interface TypeScale {
  ratio: number;
  base: number; // px
  steps: string[]; // token names: xs, sm, base, md, lg, xl, 2xl, 3xl
}

// Style definition — each style family provides these
export interface StyleDefinition {
  name: string;
  label: string;
  description: string;
  fonts: FontTokens;
  colors: ColorTokens;
  typeScale: TypeScale;
  radii: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  shadows: Record<string, string>;
  borders: Record<string, string>;
  transitions: {
    fast: string;
    base: string;
    slow?: string;
    easing: string;
  };
  // Style-specific CSS that goes into the token block
  extraTokens?: string;
  // Style-specific notes that go into the skill prose
  notes?: string[];
}

// What the validator reports
export interface CheckResult {
  file: string;
  line: number;
  column?: number;
  rule: string;
  message: string;
  severity: 'error' | 'warning';
  suggestion?: string;
}

// CLI init options
export interface InitOptions {
  from?: string;       // URL or file path to import
  output?: string;     // Output directory
  skipClaude?: boolean; // Don't update CLAUDE.md
  yes?: boolean;       // Accept defaults
}

// CLI check options
export interface CheckOptions {
  dir?: string;        // Directory to scan
  fix?: boolean;       // Auto-fix where possible
  format?: 'pretty' | 'json';
}
