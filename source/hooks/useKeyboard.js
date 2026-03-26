import { useInput }       from 'ink';
import { WIZARD_STEPS }   from '../data/wizardConfig.js';
import { TOKENS_TO_EDIT } from '../data/wizardConfig.js';

/**
 * Hook to handle global keyboard navigation
 */
export const useKeyboard = ({
  customMode,
  buildPhase, setBuildPhase,
  guideIndex, setGuideIndex,
  tokenIndex, setTokenIndex,
  exportOpts, setExportOpts,
}) => {

  // Determine if the current token is a text input and if we're in a phase where text input is active
  const isTextToken  = TOKENS_TO_EDIT[tokenIndex]?.uiType === 'text';

  // Check what build phase we're in to determine if text input should be active
  const isExporting  = buildPhase === 'EXPORT';
  const isFinetuning = buildPhase === 'FINETUNE';

  // Check if the keyboard should be free for navigation
  const isKeyboardFree = !isExporting && !(isFinetuning && isTextToken) && !customMode;

  // Define the conditions for stepping back, resetting the index and exiting to other phases based on the current build phase
  const stepBack =
    { WIZARD:   { when: guideIndex > 0,  set: setGuideIndex, to: guideIndex - 1 }
    , FINETUNE: { when: tokenIndex > 0,  set: setTokenIndex, to: tokenIndex - 1 }
    , EXPORT:   { when: exportOpts.step, set: setExportOpts, to: { ...exportOpts, step: 0 } }
    };

  const resetIndex =
    { ASSESS:  { set: setGuideIndex, to: WIZARD_STEPS.length - 1 }
    , REVIEW:  { set: setTokenIndex, to: TOKENS_TO_EDIT.length - 1 }
    };

  const exitTo =
    { FINETUNE: 'ASSESS'
    , EXPORT:   exportOpts.from || 'ASSESS'
    };

  // Function to handle going back based on the current build phase
  const goBack = () => {
    const step  = stepBack[buildPhase];
    const reset = resetIndex[buildPhase];
    const exit  = exitTo[buildPhase];

    // Try to step back within the phase
    if (step?.when) return step.set(step.to);

    // Try to reset the current phase index
    if (reset) return reset.set(reset.to);

    // Fall back to changing the phase entirely
    if (exit) setBuildPhase(exit);
  }

  // Listen for keyboard input and trigger the appropriate actions based on the current state
  useInput((input, key) => {
    if (key.escape && isKeyboardFree) goBack();
  });

}
