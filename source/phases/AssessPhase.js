import { Box }  from 'ink';
import { Text } from 'ink';

import { WIZARD_STEPS }   from '../data/wizardConfig.js';
import { TOKENS_TO_EDIT } from '../data/wizardConfig.js';

import { Sidebar }           from '../components/Sidebar.js';
import { ButtonItem }        from '../components/SharedItems.js';
import { InputSelect } from '../components/SharedItems.js';
import { ColorSwatch }       from '../components/ColorSwatch.js';

/**
 * Assessment of the wizard results and choice to fine-tune or export
 */
export function AssessPhase({
  dataObject,
  exportOpts, setExportOpts,
  setBuildPhase,
}) {
  const summaryKeys = [
    { key: 'style', value: dataObject.STYLE_NAME },
    { key: 'rhythm', value: dataObject.RHYTHM_TYPE },
    { key: 'whitespace', value: dataObject.WHITESPACE_LEVEL },
    { key: 'emphasis', value: dataObject.EMPHASIS_TYPE },
    { key: 'harmony', value: dataObject.HARMONY_LEVEL },
    { key: 'hierarchy', value: dataObject.HIERARCHY_TYPE },
    { key: 'motion', value: dataObject.MOTION_LEVEL },
    { key: 'a11y', value: dataObject.A11Y_LEVEL },
  ];

  const palette = [
    { key: 'primary', value: dataObject.PRIMARY_COLOR },
    { key: 'surface', value: dataObject.SURFACE_COLOR },
    { key: 'background', value: dataObject.BACKGROUND_COLOR },
  ];

  return (
    <Box flexDirection="row" padding={1}>
      <Sidebar
        current={WIZARD_STEPS.length + 1}
        buildPhase="WIZARD"
        wizardSteps={WIZARD_STEPS}
        tokenSteps={TOKENS_TO_EDIT}
      />

      <Box flexDirection="column" flexGrow={1}>
        <Box marginBottom={1}>
          <Text bold color="white">
            Review
          </Text>
        </Box>

        <Box flexDirection="column" marginBottom={1}>
          {summaryKeys.map(({ key, value }) => (
            <Box key={key}>
              <Text dimColor>{key.padEnd(12)}</Text>
              <Text color="white">{value}</Text>
            </Box>
          ))}
          {palette.map(({ key, value }) => (
            <Box key={key}>
              <Text dimColor>{key.padEnd(12)}</Text>
              <ColorSwatch value={value} />
            </Box>
          ))}
        </Box>

        <Box marginBottom={1}>
          <Text dimColor>{'─'.repeat(28)}</Text>
        </Box>

        <InputSelect
          items={[
            { key: 'done', label: 'Export', value: false },
            { key: 'tune', label: 'Fine-tune tokens', value: true },
          ]}
          onSelect={(item) => {
            if (item.value) {
              setBuildPhase('FINETUNE');
            } else {
              setExportOpts({ ...exportOpts, skillName: dataObject.STYLE_NAME, from: 'ASSESS' });
              setBuildPhase('EXPORT');
            }
          }}
          itemComponent={ButtonItem}
        />
      </Box>
    </Box>
  );
}

AssessPhase.UID = 'ASSESS';
