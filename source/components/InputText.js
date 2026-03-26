import { Box }      from 'ink';
import { Text }     from 'ink';
import { useInput } from 'ink';

/**
 * Single-line text entry with visual cursor
 */
export const InputText = ({
  value = '',
  onChange,
  onSubmit,
  placeholder = 'Type here...',
  limit = 30,
  isActive = true,
}) => {

  const isEmpty = !value;

  useInput((input, key) => {
    if (!isActive) return;

    // Submit, delete, or append a single character
    if (key.return)    return onSubmit?.(value);
    if (key.backspace) return onChange(value.slice(0, -1));
    if (key.delete)    return onChange(value.slice(0, -1));

    const isChar    = input && !key.ctrl && !key.meta && input.length === 1;
    const hasRoom   = value.length < limit;

    if (isChar && hasRoom) onChange(value + input);
  });

  return (
    <Box>
      {isEmpty && <Text color="gray" dimColor>{placeholder}</Text>}
      <Text color="white" bold={isActive}>{value}</Text>
      {isActive && <Text color="cyan">┃</Text>}
    </Box>
  );

};
