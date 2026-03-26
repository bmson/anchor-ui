import { Box }            from 'ink';
import { WIZARD_STEPS }   from '../data/wizardConfig.js';
import { TOKENS_TO_EDIT } from '../data/wizardConfig.js';
import { Sidebar }        from '../components/Sidebar.js';
import { InputRange }     from '../components/InputRange.js';
import { ColorPicker }    from '../components/ColorPicker.js';
import { TokenPicker }    from '../components/TokenPicker.js';
import { TokenEditor }    from '../components/TokenEditor.js';

// Map each tokens uiType to the corresponding input component
const UI_COMPONENTS =
  { color:  ColorPicker
  , slider: InputRange
  , smart:  TokenPicker
  , text:   TokenEditor
  };

/**
 * Fine-tuning of individual design tokens
 */
export function ModifyPhase({
  tokenIndex, setTokenIndex,
  dataObject, setDataObject,
  setBuildPhase,
  setCustomMode,
}) {

  // Extract the current token properties to pass down to the input component
  const { uiType, key, ...tokenProps } = TOKENS_TO_EDIT[tokenIndex];

  // Dynamically select the appropriate input component based on the token's uiType
  const Component  = UI_COMPONENTS[uiType];

  // Check if this is the last token to edit, so we know when to transition to the review phase
  const isLastToken = tokenIndex + 1 >= TOKENS_TO_EDIT.length;

  // Handler for when the user submits a new value for the current token
  const onSubmit = (newValue) => {
    setDataObject({ ...dataObject, [key]: newValue });

    if (isLastToken) {
      setBuildPhase('REVIEW');
    } else {
      setTokenIndex(tokenIndex + 1);
    }
  };

  // Render the sidebar and the dynamically selected input component for the current token
  return (
    <Box flexDirection="row" padding={1}>
      <Sidebar
        buildPhase="FINETUNE"
        wizardSteps={WIZARD_STEPS}
        tokenSteps={TOKENS_TO_EDIT}
        current={tokenIndex + 1}
      />

      <Box flexDirection="column" flexGrow={1}>
        <Component
          {...tokenProps}
          initialValue={dataObject[key]}
          onSubmit={onSubmit}
          setCustomMode={setCustomMode}
        />
      </Box>
    </Box>
  );
}

ModifyPhase.UID = 'FINETUNE';
