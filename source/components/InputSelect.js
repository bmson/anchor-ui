import { useState }      from 'react';
import { Box }           from 'ink';
import { clamp }         from './utilities.js';
import { useNav }        from './utilities.js';
import { SelectionItem } from './SelectionItem.js';

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

  // Only bind keys when the list is active and has items
  const canNavigate = isActive && items.length > 0;

  const handlers = canNavigate
    ? { upArrow:   () => setIndex(prev => clamp(prev - 1, 0, items.length - 1))
      , downArrow: () => setIndex(prev => clamp(prev + 1, 0, items.length - 1))
      , return:    () => onSelect?.(items[index], index)
      }
    : {};

  useNav(handlers);

  return (
    <Box flexDirection="column">
      {items.map((item, itemIndex) => (
        <Item
          key={item.key || item.value || itemIndex}
          {...item}
          isSelected={itemIndex === index}
        />
      ))}
    </Box>
  );

};
