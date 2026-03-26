import { useState }  from 'react';
import { Box }       from 'ink';
import { Text }      from 'ink';
import { InputText } from './InputText.js';

/**
 * Free-text input for a design token value
 */
export const TokenEditor = ({ label, initialValue = '', onSubmit }) => {

  const [value, setValue] = useState(initialValue);

  return (
    <Box flexDirection="column" width={60}>
      <Box marginBottom={1}>
        <Text bold color="white">{label}</Text>
      </Box>

      <Box gap={1} marginBottom={1}>
        <Text color="cyan" bold>→</Text>
        <InputText
          value={value}
          onChange={setValue}
          onSubmit={onSubmit}
        />
      </Box>
    </Box>
  );

};
