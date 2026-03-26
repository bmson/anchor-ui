import { useState }        from 'react';
import { useEffect }       from 'react';
import { Box }             from 'ink';
import { Text }            from 'ink';
import { clamp }           from './utilities.js';
import { useNav }          from './utilities.js';
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

  const [value, setValue] = useState(initialValue);

  // Sync if parent changes the initial value
  useEffect(() => setValue(initialValue), [initialValue]);

  // Hold shift for 5× speed
  const nudge = (direction, key) => {
    const delta = step * (key.shift ? 5 : 1) * direction;
    setValue(prev => clamp(prev + delta, min, max));
  };

  useNav(
    { leftArrow:  (key) => nudge(-1, key)
    , rightArrow: (key) => nudge(+1, key)
    , return:     ()    => onSubmit?.(value)
    }
  );

  const { before, after } = getSliderLayout(value, min, max, TRACK_WIDTH);

  return (
    <Box flexDirection="column">

      {/* Header: label and live value */}
      <Box marginBottom={1}>
        <Text bold color="white">{label.toUpperCase()}</Text>
        <Text color="cyan"> {value}{unit}</Text>
      </Box>

      {/* Track: min ━━█━━━ max */}
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
