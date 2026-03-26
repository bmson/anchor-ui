import { useState }        from 'react';
import { useEffect }       from 'react';
import { Box }             from 'ink';
import { Text }            from 'ink';
import { useInput }        from 'ink';
import { clamp }           from './utilities.js';
import { getSliderLayout } from './utilities.js';

const TRACK_WIDTH = 22;

/**
 * Keyboard-navigable range input (slider)
 */
export const InputRange = ({
  label,
  initialValue = 0,
  min = 0, max = 100,
  step = 1, unit = '',
  onSubmit,
}) => {

  const [val, setVal] = useState(initialValue);

  useEffect(() => setVal(initialValue), [initialValue]);

  useInput((_, key) => {
    const delta = step * (key.shift ? 5 : 1);

    const nav =
      { leftArrow:  () => setVal(v => clamp(v - delta, min, max))
      , rightArrow: () => setVal(v => clamp(v + delta, min, max))
      , return:     () => onSubmit?.(val)
      };

    const action = Object.keys(nav).find(k => key[k]);
    if (action) nav[action]();
  });

  const { before, after } = getSliderLayout(val, min, max, TRACK_WIDTH);

  return (
    <Box flexDirection="column">
      <Box marginBottom={1}>
        <Text bold color="white">{label.toUpperCase()}</Text>
        <Text color="cyan"> {val}{unit}</Text>
      </Box>

      <Box alignItems="center">
        <Box width={6}>
          <Text dimColor>{min}{unit}</Text>
        </Box>

        <Box marginX={1}>
          <Text color="cyan">{before}</Text>
          <Text color="white">█</Text>
          <Text color="gray">{after}</Text>
        </Box>

        <Text dimColor>{max}{unit}</Text>
      </Box>
    </Box>
  );

};
