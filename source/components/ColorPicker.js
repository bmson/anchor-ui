import { useState }        from 'react';
import { Box }             from 'ink';
import { Text }            from 'ink';
import { clamp }           from './utilities.js';
import { toRgb }           from './utilities.js';
import { toHex }           from './utilities.js';
import { useNav }          from './utilities.js';
import { getSliderLayout } from './utilities.js';

const STEP        = 5;
const TRACK_WIDTH = 22;
const CHANNELS    = ['r', 'g', 'b'];

/**
 * Keyboard-navigable RGB color picker
 */
export const ColorPicker = ({ label, initialValue, onSubmit }) => {

  const [rgb, setRgb]     = useState(() => toRgb(initialValue));
  const [index, setIndex] = useState(0);

  // Currently focused channel and computed hex output
  const channel = CHANNELS[index];
  const hex     = `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;

  // Shift the active channel by ±delta, hold shift for 5× speed
  const nudge = (direction, key) => {
    const delta = STEP * (key.shift ? 5 : 1) * direction;
    setRgb(prev => ({ ...prev, [channel]: clamp(prev[channel] + delta, 0, 255) }));
  };

  useNav(
    { upArrow:    ()    => setIndex(prev => Math.max(0, prev - 1))
    , downArrow:  ()    => setIndex(prev => Math.min(2, prev + 1))
    , leftArrow:  (key) => nudge(-1, key)
    , rightArrow: (key) => nudge(+1, key)
    , return:     ()    => onSubmit(hex)
    }
  );

  return (
    <Box flexDirection="column" width={60}>

      <Box marginBottom={1}>
        <Text bold color="white">{label.toUpperCase()}</Text>
        <Text color="gray"> ({hex})</Text>
      </Box>

      {/* One slider row per RGB channel */}
      {CHANNELS.map((name, channelIndex) => {
        const active = channelIndex === index;
        const value  = rgb[name];
        const color  = active ? 'cyan'  : 'gray';
        const lit    = active ? 'white' : 'gray';

        const { before, after } = getSliderLayout(value, 0, 255, TRACK_WIDTH);

        return (
          <Box key={name}>

            {/* Channel label */}
            <Box width={3}>
              <Text color={color} bold={active}>{name.toUpperCase()}</Text>
            </Box>

            {/* Track */}
            <Text color={color}>
              {before}
              <Text color={lit}>●</Text>
              {after}
            </Text>

            {/* Numeric value */}
            <Box width={6} marginLeft={1}>
              <Text color={lit}>{String(value).padStart(3)}</Text>
            </Box>

            {/* Live color preview */}
            <Text color={hex}> ███████</Text>

          </Box>
        );
      })}
    </Box>
  );

};
