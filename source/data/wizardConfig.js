import { DESIGN_DATA } from './designData.js';

/**
 * Defines the flow of the design selection wizard
 */
export const WIZARD_STEPS =
  [ { key: 	   'STYLE_NAME'
    , title:   'Select Base Design Style'
    , choices: Object.keys(DESIGN_DATA.styles)
    }
  , { key:     'RHYTHM_TYPE'
    , title:   'Select Rhythm Type'
    , choices: DESIGN_DATA.options.RHYTHM_TYPE
    }
  , { key:     'WHITESPACE_LEVEL'
    , title:   'Select Whitespace Density'
    , choices: DESIGN_DATA.options.WHITESPACE_LEVEL
    }
  , { key:     'EMPHASIS_TYPE'
    , title:   'Select Emphasis & Contrast'
    , choices: DESIGN_DATA.options.EMPHASIS_TYPE
    }
  , { key:     'HARMONY_LEVEL'
    , title:   'Select Color Harmony'
    , choices: DESIGN_DATA.options.HARMONY_LEVEL
    }
  , { key:     'HIERARCHY_TYPE'
    , title:   'Select Hierarchy Method'
    , choices: DESIGN_DATA.options.HIERARCHY_TYPE
    }
  , { key:     'MOTION_LEVEL'
    , title:   'Select Motion Intensity'
    , choices: DESIGN_DATA.options.MOTION_LEVEL
    }
  , { key:     'A11Y_LEVEL'
    , title:   'Select Accessibility Target'
    , choices: DESIGN_DATA.options.A11Y_LEVEL
    }
  ];

/**
 * Defines the tokens available for fine-tuning after the wizard
 */
export const TOKENS_TO_EDIT =
  [ { key: 'PRIMARY_COLOR',    label: 'Primary Color',        uiType: 'color' }
  , { key: 'SURFACE_COLOR',    label: 'Surface (Card) Color', uiType: 'color' }
  , { key: 'BACKGROUND_COLOR', label: 'Background Color',     uiType: 'color' }
  , { key: 'COLOR_ERROR',      label: 'Error Color',          uiType: 'color' }
  , { key: 'COLOR_SUCCESS',    label: 'Success Color',        uiType: 'color' }

  , { key: 'RADIUS_MAIN',      label: 'Border Radius',        uiType: 'slider', min: 0, max: 48, step: 2 }
  , { key: 'BORDER_WEIGHT',    label: 'Border Weight',        uiType: 'slider', min: 0, max: 10, step: 1 }
  , { key: 'BASE_UNIT',        label: 'Base Spacing Unit',    uiType: 'slider', min: 2, max: 16, step: 1 }

  , { key: 'SHADOW_MAIN',      label: 'Box Shadow',           uiType: 'smart' }
  , { key: 'BLUR_MAIN',        label: 'Backdrop Blur',        uiType: 'smart' }
  , { key: 'FONT_FAMILY',      label: 'Font Stack',           uiType: 'smart' }
  ];
