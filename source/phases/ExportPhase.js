import { Box }  from 'ink';
import { Text } from 'ink';

import { Sidebar }         from '../components/Sidebar.js';
import { generateFile }    from '../hooks/useFileGenerator.js';
import { InputText } from '../components/SharedItems.js';

/**
 * Export configuration (naming and directory)
 */
export function ExportPhase({
  dataObject,
  exportOpts, setExportOpts,
  setBuildPhase,
  setTargetPath,
}) {
  const isSkillNameStep = exportOpts.step === 0;
  const safeName = (exportOpts.skillName || dataObject.STYLE_NAME || 'Skill')
    .replace(/[^a-z0-9]/gi, '-')
    .toLowerCase();
  const fileName = `${safeName}.md`;

  const handleFinish = async () => {
    try {
      const filePath = await generateFile(dataObject, exportOpts);
      setTargetPath(filePath);
    } catch (error) {
      console.error('Error generating file:', error.message);
    }
    setBuildPhase('DONE');
  };

  return (
    <Box flexDirection="row" padding={1}>
      <Sidebar
        current={isSkillNameStep ? 1 : 2}
        buildPhase="EXPORT"
        wizardSteps={[{ key: 'skill_name' }, { key: 'save_directory' }]}
        tokenSteps={[]}
      />

      <Box flexDirection="column" flexGrow={1}>
        <Box marginBottom={1}>
          <Text bold color="white">
            {isSkillNameStep ? 'Skill Name' : 'Save Directory'}
          </Text>
        </Box>

        {isSkillNameStep ? (
          <Box flexDirection="column">
            <Text dimColor>Enter the name for this design skill</Text>
            <Box gap={0} marginTop={1}>
              <Text color="cyan" bold>
                →{' '}
              </Text>
              <Text color="gray">./</Text>
              <InputText
                value={exportOpts.skillName}
                onChange={(val) => setExportOpts({ ...exportOpts, skillName: val })}
                onSubmit={() => setExportOpts({ ...exportOpts, step: 1 })}
              />
              <Text color="gray">.md</Text>
            </Box>
          </Box>
        ) : (
          <Box flexDirection="column">
            <Text dimColor>Enter the directory to save the skill file</Text>
            <Box gap={0} marginTop={1}>
              <Text color="cyan" bold>
                →{' '}
              </Text>
              <InputText
                value={exportOpts.saveDir}
                onChange={(val) => setExportOpts({ ...exportOpts, saveDir: val })}
                onSubmit={handleFinish}
              />
              <Text color="gray">/{fileName}</Text>
            </Box>
          </Box>
        )}

        <Box marginTop={1}>
          <Text dimColor>
            {isSkillNameStep
              ? `Press Enter to use "${dataObject.STYLE_NAME}"`
              : 'Press Enter to save in current directory'}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

ExportPhase.UID = 'EXPORT';
