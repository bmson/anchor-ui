import { Box }            from 'ink';
import { Text }           from 'ink';
import { WIZARD_STEPS }   from '../data/wizardConfig.js';
import { TOKENS_TO_EDIT } from '../data/wizardConfig.js';
import { Sidebar }        from '../components/Sidebar.js';
import { ButtonItem }     from '../components/SelectionItem.js';
import { InputSelect }    from '../components/InputSelect.js';
import { ColorSwatch }    from '../components/ColorSwatch.js';
import { isHex }          from '../components/utilities.js';
import { truncate }       from '../components/utilities.js';

/**
 * Final review of tokens after fine-tuning
 */
export const AcceptPhase = ({
  dataObject,
  exportOpts, setExportOpts,
  setBuildPhase,
}) => {

  const handleExport = () => {
    setExportOpts({ ...exportOpts, skillName: dataObject.STYLE_NAME, from: 'REVIEW' });
    setBuildPhase('EXPORT');
  };

  return (
    <Box flexDirection="row" padding={1}>
      <Sidebar
        current={TOKENS_TO_EDIT.length + 1}
        buildPhase="FINETUNE"
        wizardSteps={WIZARD_STEPS}
        tokenSteps={TOKENS_TO_EDIT}
      />

      <Box flexDirection="column" flexGrow={1}>
        <Box marginBottom={1}>
          <Text bold color="white">Review Changes</Text>
        </Box>

        <Box flexDirection="column" marginBottom={1}>
          {TOKENS_TO_EDIT.map((token) => {
            const value   = dataObject[token.key];
            const isColor = isHex(value);

            return (
              <Box key={token.key}>
                <Text dimColor>{token.label.toLowerCase().padEnd(20)}</Text>
                {isColor
                  ? <ColorSwatch value={value} />
                  : <Text color="white">{truncate(value, 30)}</Text>
                }
              </Box>
            );
          })}
        </Box>

        <Box marginBottom={1}>
          <Text dimColor>{'─'.repeat(28)}</Text>
        </Box>

        <InputSelect
          items={[{ key: 'done', label: 'Export', value: 'done' }]}
          onSelect={handleExport}
          itemComponent={ButtonItem}
        />
      </Box>
    </Box>
  );

};

AcceptPhase.UID = 'REVIEW';
