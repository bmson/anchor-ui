import { useInput }       from 'ink';
import { WIZARD_STEPS }   from '../data/wizardConfig.js';
import { TOKENS_TO_EDIT } from '../data/wizardConfig.js';

/**
 * Global keyboard navigation across all phases
 */
export const useKeyboard = ({
  customMode,
  buildPhase, setBuildPhase,
  guideIndex, setGuideIndex,
  tokenIndex, setTokenIndex,
  exportOpts, setExportOpts,
}) => {

  // Escape is disabled during text entry and custom input
  const isTextToken = TOKENS_TO_EDIT[tokenIndex]?.uiType === 'text';
  const isExporting = buildPhase === 'EXPORT';
  const isTuning    = buildPhase === 'FINETUNE';
  const isFree      = !isExporting && !(isTuning && isTextToken) && !customMode;

  /**
   * Table-driven back navigation - each phase declares how to step back,
   * reset to the previous phase's last step, or exit to a parent phase
   */
  const stepBack =
    { WIZARD:   { when: guideIndex > 0,  set: setGuideIndex, to: guideIndex - 1 }
    , FINETUNE: { when: tokenIndex > 0,  set: setTokenIndex, to: tokenIndex - 1 }
    , EXPORT:   { when: exportOpts.step, set: setExportOpts, to: { ...exportOpts, step: 0 } }
    };

  const resetIndex =
    { ASSESS: { set: setGuideIndex, to: WIZARD_STEPS.length - 1 }
    , REVIEW: { set: setTokenIndex, to: TOKENS_TO_EDIT.length - 1 }
    };

  const exitTo =
    { FINETUNE: 'ASSESS'
    , EXPORT:   exportOpts.from || 'ASSESS'
    };

  // Try each strategy in order: step within phase → reset index → exit phase
  const goBack = () => {
    const step  = stepBack[buildPhase];
    const reset = resetIndex[buildPhase];
    const exit  = exitTo[buildPhase];

    if (step?.when) return step.set(step.to);
    if (reset)      return reset.set(reset.to);
    if (exit)       setBuildPhase(exit);
  }

  useInput((_, key) => {
    if (key.escape && isFree) goBack();
  });

}
