import { Box }  from 'ink';
import { Text } from 'ink';

/**
 * Success message and export path
 */
export const ResultPhase = ({ targetPath = 'anchor.md' }) => (

  <Box flexDirection="column" padding={1}>
    <Text>
      <Text color="cyan" bold>⛊ </Text>
      <Text color="white" bold>anchor</Text>
    </Text>

    <Text dimColor> design token</Text>
    <Text dimColor>{`\n${'─'.repeat(18)}\n`}</Text>

    <Text color="white" bold>Export complete</Text>
    <Text color="cyan">{targetPath}</Text>

    <Text dimColor>{'\n'}(Press Ctrl+C to exit)</Text>
  </Box>

);

ResultPhase.UID = 'DONE';
