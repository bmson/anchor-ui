import * as FlatMinimal       from './designStyles/FlatMinimal.js';
import * as Minimalist        from './designStyles/Minimalist.js';
import * as Glassmorphism     from './designStyles/Glassmorphism.js';
import * as NeoBrutalism      from './designStyles/NeoBrutalism.js';
import * as Bauhaus           from './designStyles/Bauhaus.js';
import * as Neumorphism       from './designStyles/Neumorphism.js';
import * as Skeuomorphism     from './designStyles/Skeuomorphism.js';
import * as MicroInteractions from './designStyles/MicroInteractions.js';

/**
 * Central repository for all design styles, motion packages, and system defaults
 */
export const DESIGN_DATA =
  { options:
    { RHYTHM_TYPE:
      [ 'Regular'
      , 'Rigid'
      , 'Fluid'
      , 'Syncopated'
      , 'Modular'
      ]
    , WHITESPACE_LEVEL:
      [ 'Sparse'
      , 'Airy'
      , 'Comfortable'
      , 'Compact'
      , 'Dense'
      ]
    , EMPHASIS_TYPE:
      [ 'Subtle'
      , 'Luminous'
      , 'Aggressive'
      , 'Structural'
      , 'Tactile'
      ]
    , HARMONY_LEVEL:
      [ 'Monochromatic'
      , 'Tight'
      , 'Clashing'
      , 'Primary'
      ]
    , HIERARCHY_TYPE:
      [ 'Flat'
      , 'Z-Axis'
      , 'Typographic'
      , 'Extruded'
      , 'Brute-Force'
      ]
    , MOTION_LEVEL:
      [ 'Static'
      , 'Micro'
      , 'Fluid'
      , 'Expressive'
      , 'Cinematic'
      ]
    , A11Y_LEVEL:
      [ 'WCAG AA'
      , 'WCAG AAA'
      ]
    }

  , motion_packages:
    { Static:     { DUR_FAST: '0ms',   DUR_BASE: '0ms' ,  DUR_SLOW: '0ms',   EASE_MAIN: 'step-end' }
    , Micro:      { DUR_FAST: '100ms', DUR_BASE: '150ms', DUR_SLOW: '250ms', EASE_MAIN: 'ease-in-out' }
    , Fluid:      { DUR_FAST: '150ms', DUR_BASE: '300ms', DUR_SLOW: '400ms', EASE_MAIN: 'ease-out' }
    , Expressive: { DUR_FAST: '200ms', DUR_BASE: '400ms', DUR_SLOW: '600ms', EASE_MAIN: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
    , Cinematic:  { DUR_FAST: '300ms', DUR_BASE: '500ms', DUR_SLOW: '800ms', EASE_MAIN: 'cubic-bezier(0.25, 0.8, 0.25, 1)' }
    }

  , defaults:
    { COLOR_ERROR:   '#DC2626'
    , COLOR_SUCCESS: '#16A34A'
    }

  , styles:
    { FlatMinimal
    , Minimalist
    , Glassmorphism
    , NeoBrutalism
    , Bauhaus
    , Neumorphism
    , Skeuomorphism
    , MicroInteractions
    },
  };

/**
 * Human-readable descriptions for each configuration option
 */
export const DESIGN_DESCRIPTIONS = {
  RHYTHM_TYPE:
    { 'Regular':        'Equal, predictable spacing between siblings. Calm and standard.'
    , 'Rigid':          'Strict mathematical grid adherence. No fluid scaling. Highly structured.'
    , 'Fluid':          'Elements scale and flow smoothly based on screen size or container.'
    , 'Syncopated':     'Deliberately staggered or asymmetrical alignments for an edgy, raw feel.'
    , 'Modular':        'Component-based, blocky, and completely standardized.'
    }
  , WHITESPACE_LEVEL:
    { 'Sparse':         'Maximum negative space. Creates a highly luxurious or minimalist feel.'
    , 'Airy':           'Generous spacing. Lets background effects (like blurs) breathe.'
    , 'Comfortable':    'Standard 8px/16px/24px system. Best for everyday SaaS apps.'
    , 'Compact':        'Tighter spacing to group complex or physical-looking elements.'
    , 'Dense':          'Cramped and information-heavy. Intentionally overwhelming or utilitarian.'
    }
  , EMPHASIS_TYPE:
    { 'Subtle':         'Shifts in opacity, slight color changes, or delicate borders.'
    , 'Luminous':       'Increased brightness, stronger blur, or white border opacity.'
    , 'Aggressive':     'High contrast, massive text, clashing colors, heavy shadows.'
    , 'Structural':     'Thick strokes, primary colors, and heavy geometric weight.'
    , 'Tactile':        'Deep inset shadows, bright highlights, and \'pressed\' states.'
    }
  , HARMONY_LEVEL:
    { 'Monochromatic':  'Single hue. Variations in lightness and saturation only.'
    , 'Tight':          'Analogous colors. Careful adherence to a strict, small palette.'
    , 'Clashing':       'Deliberate use of opposing, highly saturated colors (e.g., Neon on Red).'
    , 'Primary':        'Only base colors (Red, Yellow, Blue) plus black and white.'
    }
  , HIERARCHY_TYPE:
    { 'Flat':           'Hierarchy built entirely on font-size and font-weight. No elevation.'
    , 'Z-Axis':         'Hierarchy built on elevation, drop shadows, and blur layers.'
    , 'Typographic':    'Scale of text is the ONLY indicator of importance.'
    , 'Extruded':       'Hierarchy built on convex (outer shadow) vs. concave (inner) shapes.'
    , 'Brute-Force':    'Hierarchy forced via heavy outlines and jarring background colors.'
    }
  , MOTION_LEVEL:
    { 'Static':         'Zero animation. Interactivity is instant. Feels like a printed machine.'
    , 'Micro':          'Utilitarian motion. Animates only opacity and color. Very fast (100-150ms).'
    , 'Fluid':          'Organic and smooth. Uses subtle scaling and shadow transitions.'
    , 'Expressive':     'Bouncy and playful. Uses custom spring-like cubic-beziers.'
    , 'Cinematic':      'GPU-accelerated. 3D transforms, blurred transitions, continuous gradients.'
    }
  , A11Y_LEVEL:
    { 'WCAG AA':        'Standard compliance. 4.5:1 contrast for text, 3:1 for large text.'
    , 'WCAG AAA':       'Strict compliance. 7:1 contrast for text. Highly accessible but restricts colors.'
    }
  };

/**
 * Predefined values for the fine-tuning phase
 */
export const TOKEN_PRESETS =
  { RADIUS_MAIN:
    [ { label: 'Sharp',   value: '0px',    description: '0px corner radius' }
    , { label: 'Subtle',  value: '4px',    description: '4px corner radius' }
    , { label: 'Rounded', value: '12px',   description: '12px corner radius' }
    , { label: 'Pill',    value: '9999px', description: 'Maximum corner radius' }
    ]
  , BORDER_WEIGHT:
    [ { label: 'None',     value: '0px', description: '0px border width' }
    , { label: 'Hairline', value: '1px', description: '1px border width' }
    , { label: 'Bold',     value: '3px', description: '3px border width' }
    , { label: 'Brutal',   value: '5px', description: '5px border width' }
    ]
  , SHADOW_MAIN:
    [ { label: 'None',          value: 'none',                                 description: 'No box-shadow' }
    , { label: 'Soft Floating', value: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',  description: 'Soft, large floating shadow' }
    , { label: 'Hard Brutal',   value: '5px 5px 0px rgba(0, 0, 0, 1)',         description: 'Hard, offset black shadow' }
    , { label: 'Inner Bevel',   value: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',   description: 'Inset/pressed inner shadow' }
    , { label: 'Glass Glow',    value: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', description: 'Translucent blue glass glow' }
    ]
  , BLUR_MAIN:
    [ { label: 'None',           value: 'none',       description: 'No backdrop blur' }
    , { label: 'Light Frosted',  value: 'blur(4px)',  description: '4px backdrop blur' }
    , { label: 'Medium Glass',   value: 'blur(12px)', description: '12px backdrop blur' }
    , { label: 'Heavy Obscured', value: 'blur(24px)', description: '24px backdrop blur' }
    ]
  , BASE_UNIT:
    [ { label: 'Dense',    value: '4px',  description: '4px grid system' }
    , { label: 'Standard', value: '8px',  description: '8px grid system' }
    , { label: 'Loose',    value: '12px', description: '12px grid system' }
    ]
  , FONT_FAMILY:
    [ { label: 'System UI', value: 'system-ui, -apple-system, sans-serif', description: 'Native OS font stack' }
    , { label: 'Geometric', value: '\'Inter\', \'Roboto\', sans-serif',    description: 'Clean sans-serif (Inter/Roboto)' }
    , { label: 'Brutalist', value: '\'Space Grotesk\', sans-serif',        description: 'Sharp, modern (Space Grotesk)' }
    , { label: 'Serif',     value: '\'Merriweather\', serif',              description: 'Traditional serif (Merriweather)' }
    ]
  };
