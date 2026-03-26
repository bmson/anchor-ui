import { useState }    from 'react';
import { Box }         from 'ink';
import { Text }        from 'ink';
import { useInput }    from 'ink';
import { clamp }       from './utilities.js';
import { formatLabel } from './utilities.js';

/**
 * Selectable item with support for descriptions
 */
export const SelectionItem = ({ label, description, isSelected, isButton = false }) => {

  const color  = isSelected ? 'cyan' : 'white';
  const prefix = isSelected ? '→ '   : '  ';
  const name   = isButton   ? label.toUpperCase() : formatLabel(label);

  return (
    <Box flexDirection="column" marginBottom={1}>
      <Box>
        <Text color={color} bold={isSelected}>{prefix}{name}</Text>
      </Box>
      {description && (
        <Box marginLeft={4}>
          <Text dimColor={!isSelected} color="gray">{description}</Text>
        </Box>
      )}
    </Box>
  );

};

export const OptionItem = (props) => <SelectionItem {...props} />;
export const ButtonItem = (props) => <SelectionItem {...props} isButton />;

/**
 * Keyboard-navigable list with declarative navigation
 */
export const InputSelect = ({
  items = [],
  onSelect,
  initialIndex = 0,
  itemComponent: Item = SelectionItem,
  isActive = true,
}) => {

  const [index, setIndex] = useState(initialIndex);

  useInput((_, key) => {
    if (!isActive || !items.length) return;

    const nav =
      { upArrow:   () => setIndex(i => clamp(i - 1, 0, items.length - 1))
      , downArrow: () => setIndex(i => clamp(i + 1, 0, items.length - 1))
      , return:    () => onSelect?.(items[index], index)
      };

    const action = Object.keys(nav).find(k => key[k]);
    if (action) nav[action]();
  });

  return (
    <Box flexDirection="column">
      {items.map((item, i) => (
        <Item
          key={item.key || item.value || i}
          {...item}
          isSelected={i === index}
        />
      ))}
    </Box>
  );

};

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

  useInput((input, key) => {
    if (!isActive) return;

    if (key.return)    return onSubmit?.(value);
    if (key.backspace) return onChange(value.slice(0, -1));
    if (key.delete)    return onChange(value.slice(0, -1));

    const isChar = input && !key.ctrl && !key.meta && input.length === 1;
    if (isChar && value.length < limit) onChange(value + input);
  });

  return (
    <Box>
      {!value && <Text color="gray" dimColor>{placeholder}</Text>}
      <Text color="white" bold={isActive}>{value}</Text>
      {isActive && <Text color="cyan">┃</Text>}
    </Box>
  );

};
