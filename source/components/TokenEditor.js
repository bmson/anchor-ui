import { useState } from 'react';
import { Box, Text } from 'ink';
import { InputText } from './SharedItems.js';

/**
 * Aesthetic wrapper for design token text input
 */
export const TokenEditor = ({ label, initialValue = '', onSubmit }) => {
  const [val, setVal] = useState(initialValue);

  return (
    <Box flexDirection="column" width={60}>
      <Box marginBottom={1}>
        <Text bold color="white">{label}</Text>
      </Box>

      <Box gap={1} marginBottom={1}>
        <Text color="cyan" bold>→</Text>
        <InputText 
          value={val} 
          onChange={setVal} 
          onSubmit={() => onSubmit(val)} 
        />
      </Box>
    </Box>
  );
};
