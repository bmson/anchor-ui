import { Box }                 from 'ink';
import { Text }                from 'ink';
import { DESIGN_DATA }         from '../data/designData.js';
import { DESIGN_DESCRIPTIONS } from '../data/designData.js';
import { WIZARD_STEPS }        from '../data/wizardConfig.js';
import { TOKENS_TO_EDIT }      from '../data/wizardConfig.js';
import { Sidebar }             from '../components/Sidebar.js';
import { OptionItem }          from '../components/SelectionItem.js';
import { InputSelect }         from '../components/InputSelect.js';

/**
 * Wizard flow for high-level design definition
 */
export const DefinePhase = ({
  name,
  guideIndex, setGuideIndex,
  dataObject, setDataObject,
  setBuildPhase,
}) => {

  const step        = WIZARD_STEPS[guideIndex];
  const isStyleStep = step.key === 'STYLE_NAME';
  const isLastStep  = guideIndex + 1 >= WIZARD_STEPS.length;

  const handleSelect = (item) => {
    const choice = item.value.replace(' (Recommended)', '');
    let   next   = { ...dataObject };

    // Inject full style config on the first step
    if (isStyleStep) {
      const style = DESIGN_DATA.styles[choice];
      next =
        { ...next
        , ...DESIGN_DATA.defaults
        , ...style.tokens
        , ...style.recommended
        , STYLE_NAME: name || choice
        };
    } else {
      next[step.key] = choice;
    }

    setDataObject(next);

    if (isLastStep) {
      setBuildPhase('ASSESS');
    } else {
      setGuideIndex(guideIndex + 1);
    }
  };

  // Build items with recommended marker and descriptions
  const items = step.choices.map((choice) => {
    const isRecommended = dataObject[step.key] === choice && guideIndex > 0;

    const description = isStyleStep
      ? DESIGN_DATA.styles[choice]?.tokens?.STYLE_PHILOSOPHY || ''
      : DESIGN_DESCRIPTIONS[step.key]?.[choice] || '';

    return { label: isRecommended ? `${choice} (Recommended)` : choice
           , value: choice
           , description
           };
  });

  const initialIndex = Math.max(0,
    items.findIndex((item) => item.label.includes('(Recommended)'))
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
          <Text bold color="white">{step.title}</Text>
        </Box>

        <InputSelect
          key={guideIndex}
          items={items}
          initialIndex={initialIndex}
          onSelect={handleSelect}
          itemComponent={OptionItem}
        />
      </Box>
    </Box>
  );

};

DefinePhase.UID = 'WIZARD';
