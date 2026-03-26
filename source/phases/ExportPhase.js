import { Box }          from 'ink';
import { Text }         from 'ink';
import { Sidebar }      from '../components/Sidebar.js';
import { generateFile } from '../hooks/useFileGenerator.js';
import { InputText }    from '../components/InputText.js';

/**
 * Export configuration (naming and directory)
 */
export const ExportPhase = ({
  dataObject,
  exportOpts, setExportOpts,
  setBuildPhase,
  setTargetPath,
}) => {

  const isNaming = exportOpts.step === 0;

  const safeName = (exportOpts.skillName || dataObject.STYLE_NAME || 'Skill')
    .replace(/[^a-z0-9]/gi, '-')
    .toLowerCase();

  // Generate the file and transition to the result phase
  const handleFinish = async () => {
    try {
      const filePath = await generateFile(dataObject, exportOpts);
      setTargetPath(filePath);
    } catch (error) {
      console.error('Error generating file:', error.message);
    }
    setBuildPhase('DONE');
  };

  /**
   * Step 1: Skill name
   */
  if (isNaming) {
    return (
      <Box flexDirection="row" padding={1}>
        <Sidebar
          current={1}
          buildPhase="EXPORT"
          wizardSteps={[{ key: 'skill_name' }, { key: 'save_directory' }]}
          tokenSteps={[]}
        />

        <Box flexDirection="column" flexGrow={1}>
          <Box marginBottom={1}>
            <Text bold color="white">Skill Name</Text>
          </Box>

          <Box flexDirection="column">
            <Text dimColor>Enter the name for this design skill</Text>
            <Box gap={0} marginTop={1}>
              <Text color="cyan" bold>→ </Text>
              <Text color="gray">./</Text>
              <InputText
                value={exportOpts.skillName}
                onChange={(value) => setExportOpts({ ...exportOpts, skillName: value })}
                onSubmit={() => setExportOpts({ ...exportOpts, step: 1 })}
              />
              <Text color="gray">.md</Text>
            </Box>
          </Box>

          <Box marginTop={1}>
            <Text dimColor>Press Enter to use "{dataObject.STYLE_NAME}"</Text>
          </Box>
        </Box>
      </Box>
    );
  }

  /**
   * Step 2: Save directory
   */
  return (
    <Box flexDirection="row" padding={1}>
      <Sidebar
        current={2}
        buildPhase="EXPORT"
        wizardSteps={[{ key: 'skill_name' }, { key: 'save_directory' }]}
        tokenSteps={[]}
      />

      <Box flexDirection="column" flexGrow={1}>
        <Box marginBottom={1}>
          <Text bold color="white">Save Directory</Text>
        </Box>

        <Box flexDirection="column">
          <Text dimColor>Enter the directory to save the skill file</Text>
          <Box gap={0} marginTop={1}>
            <Text color="cyan" bold>→ </Text>
            <InputText
              value={exportOpts.saveDir}
              onChange={(value) => setExportOpts({ ...exportOpts, saveDir: value })}
              onSubmit={handleFinish}
            />
            <Text color="gray">/{safeName}.md</Text>
          </Box>
        </Box>

        <Box marginTop={1}>
          <Text dimColor>Press Enter to save in current directory</Text>
        </Box>
      </Box>
    </Box>
  );

};

ExportPhase.UID = 'EXPORT';
