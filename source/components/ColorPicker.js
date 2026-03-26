import { useState }          from 'react';
import { Box, Text, useInput } from 'ink';
import { clamp, toRgb, toHex, getSliderLayout } from './utilities.js';

const STEP        = 5;
const TRACK_WIDTH = 22;
const CHANNELS    = ['r', 'g', 'b'];

/**
 * A keyboard-navigable RGB color picker with table-driven logic
 */
export const ColorPicker = ({ label, initialValue, onSubmit }) => {
  const [rgb, setRgb] = useState(() => toRgb(initialValue));
  const [idx, setIdx] = useState(0);

  const active = CHANNELS[idx];
  const hex    = `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;

  useInput((_, key) => {
    const mult  = key.shift ? 5 : 1;
    const delta = STEP * mult;

    const nav =
      { upArrow:    () => setIdx(i => Math.max(0, i - 1))
      , downArrow:  () => setIdx(i => Math.min(2, i + 1))
      , leftArrow:  () => setRgb(p => ({ ...p, [active]: clamp(p[active] - delta, 0, 255) }))
      , rightArrow: () => setRgb(p => ({ ...p, [active]: clamp(p[active] + delta, 0, 255) }))
      , return:     () => onSubmit(hex)
      };

    const action = Object.keys(nav).find(k => key[k]);
    if (action) nav[action]();
  });

  return (
    <Box flexDirection="column" width={60}>
      <Box marginBottom={1}>
        <Text bold color="white">{label.toUpperCase()}</Text>
        <Text color="gray"> ({hex})</Text>
      </Box>

      {CHANNELS.map((ch, i) => {
        const isActive = i === idx;
        const val      = rgb[ch];
        const { before, after } = getSliderLayout(val, 0, 255, TRACK_WIDTH);

        return (
          <Box key={ch} marginBottom={i === 2 ? 0 : 0}>
            {/* Channel Label */}
            <Box width={3}>
              <Text color={isActive ? 'cyan' : 'gray'} bold={isActive}>
                {ch.toUpperCase()}
              </Text>
            </Box>

            {/* Visual Track */}
            <Text color={isActive ? 'cyan' : 'gray'}>
              {before}
              <Text color={isActive ? 'white' : 'gray'}>●</Text>
              {after}
            </Text>

            {/* Value Indicator */}
            <Box width={6} marginLeft={1}>
              <Text color={isActive ? 'white' : 'gray'}>
                {String(val).padStart(3)}
              </Text>
            </Box>

            {/* Real-time Color Preview */}
            <Text color={hex}> ███████</Text>
          </Box>
        );
      })}
    </Box>
  );
};
