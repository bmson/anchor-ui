import { Box }            from 'ink';
import { WIZARD_STEPS }   from '../data/wizardConfig.js';
import { TOKENS_TO_EDIT } from '../data/wizardConfig.js';
import { Sidebar }        from '../components/Sidebar.js';
import { InputRange }     from '../components/InputRange.js';
import { ColorPicker }    from '../components/ColorPicker.js';
import { TokenPicker }    from '../components/TokenPicker.js';
import { TokenEditor }    from '../components/TokenEditor.js';

// Map each token's uiType to its input component
const UI_COMPONENTS =
  { color:  ColorPicker
  , slider: InputRange
  , smart:  TokenPicker
  , text:   TokenEditor
  };

/**
 * Fine-tuning of individual design tokens
 */
export const ModifyPhase = ({
  tokenIndex, setTokenIndex,
  dataObject, setDataObject,
  setBuildPhase,
  setCustomMode,
}) => {

  const { uiType, key, ...tokenProps } = TOKENS_TO_EDIT[tokenIndex];

  const Component = UI_COMPONENTS[uiType];
  const isLast    = tokenIndex + 1 >= TOKENS_TO_EDIT.length;

  const onSubmit = (value) => {
    setDataObject({ ...dataObject, [key]: value });

    if (isLast) {
      setBuildPhase('REVIEW');
    } else {
      setTokenIndex(tokenIndex + 1);
    }
  };

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

};

ModifyPhase.UID = 'FINETUNE';
