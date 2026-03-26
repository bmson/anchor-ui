import { Box }                 from 'ink';
import { Text }                from 'ink';
import { DESIGN_DATA }         from '../data/designData.js';
import { DESIGN_DESCRIPTIONS } from '../data/designData.js';
import { WIZARD_STEPS }        from '../data/wizardConfig.js';
import { TOKENS_TO_EDIT }      from '../data/wizardConfig.js';
import { Sidebar }             from '../components/Sidebar.js';
import { OptionItem }          from '../components/SharedItems.js';
import { InputSelect }         from '../components/SharedItems.js';

/**
 * Wizard flow for high-level design definition
 */
export const DefinePhase = ({
  name,
  guideIndex, setGuideIndex,
  dataObject, setDataObject,
  setBuildPhase,
}) => {

  const activeStep = WIZARD_STEPS[guideIndex];

  // Handle selection of a wizard option and progress to next step
  const handleSelect = (item) => {
    const cleanValue  = item.value.replace(' (Recommended)', '');
    let newDataObject = { ...dataObject };

    // Auto-inject defaults and styles if it's the first step (Style Selection)
    if (activeStep.key === 'STYLE_NAME') {
      const styleConfig = DESIGN_DATA.styles[cleanValue];
      newDataObject =
        { ...newDataObject
        , ...DESIGN_DATA.defaults
        , ...styleConfig.tokens
        , ...styleConfig.recommended
        , STYLE_NAME: name || cleanValue
        };
    } else {
      newDataObject[activeStep.key] = cleanValue;
    }

    setDataObject(newDataObject);

    // Progress to next wizard step or move to summary phase
    if (guideIndex + 1 < WIZARD_STEPS.length) {
      setGuideIndex(guideIndex + 1);
    } else {
      setBuildPhase('ASSESS');
    }
  };

  // Map wizard choices to SelectInput items with descriptions
  const selectItems = activeStep.choices.map((choice) => {
    const isRecommended = dataObject[activeStep.key] === choice && guideIndex > 0;

    const description = activeStep.key === 'STYLE_NAME'
      ? DESIGN_DATA.styles[choice]?.tokens?.STYLE_PHILOSOPHY || ''
      : DESIGN_DESCRIPTIONS[activeStep.key]?.[choice] || '';

    return { label: isRecommended ? `${choice} (Recommended)` : choice
           , value: choice
           , description
           };
  });

  const initialIndex = Math.max(
    0,
    selectItems.findIndex((item) => item.label.includes('(Recommended)')),
  );

  return (
    <Box flexDirection="row" padding={1}>
      <Sidebar
        current={guideIndex + 1}
        buildPhase="WIZARD"
        wizardSteps={WIZARD_STEPS}
        tokenSteps={TOKENS_TO_EDIT}
      />

      <Box flexDirection="column" flexGrow={1}>
        <Box marginBottom={1}>
          <Text bold color="white">{activeStep.title}</Text>
        </Box>

        <InputSelect
          key={guideIndex}
          items={selectItems}
          initialIndex={initialIndex}
          onSelect={handleSelect}
          itemComponent={OptionItem}
        />
      </Box>
    </Box>
  );

};

DefinePhase.UID = 'WIZARD';
