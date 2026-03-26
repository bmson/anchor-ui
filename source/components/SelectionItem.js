import { Box }         from 'ink';
import { Text }        from 'ink';
import { formatLabel } from './utilities.js';

/**
 * Selectable item with optional description line
 */
export const SelectionItem = ({ label, description, isSelected, isButton = false }) => {

  // Visual state for the active vs idle item
  const color  = isSelected ? 'cyan' : 'white';
  const prefix = isSelected ? '→ '   : '  ';
  const name   = isButton   ? label.toUpperCase() : formatLabel(label);

  // Only render the description if it exists, otherwise we get an empty line
  const hasDescription = !!description;

  return (
    <Box flexDirection="column" marginBottom={1}>
      <Box>
        <Text color={color} bold={isSelected}>{prefix}{name}</Text>
      </Box>

      {hasDescription && (
        <Box marginLeft={4}>
          <Text dimColor={!isSelected} color="gray">{description}</Text>
        </Box>
      )}
    </Box>
  );

};

// Semantic aliases used by the wizard and review phases
export const OptionItem = (props) => <SelectionItem {...props} />;
export const ButtonItem = (props) => <SelectionItem {...props} isButton />;
