import { useInput } from 'ink';

/**
 * Math helpers
 */

export const clamp = (value, min, max) =>
  Math.min(max, Math.max(min, value));

/**
 * Color helpers
 */

export const isHex = (string) =>
  /^#([a-f\d]{3}|[a-f\d]{6})$/i.test(string);

export const toHex = (value) =>
  clamp(0, 255, value).toString(16).padStart(2, '0');

export const toRgb = (hex) => {
  const match = hex?.match(/^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i);

  if (!match) return { r: 128, g: 128, b: 128 };

  // Expand shorthand (#abc → #aabbcc) then parse each channel
  const [r, g, b] = match.slice(1).map(channel =>
    parseInt(channel.length === 1 ? channel + channel : channel, 16)
  );

  return { r, g, b };
}

/**
 * String helpers
 */

export const truncate = (string, limit = 40) =>
  string?.length > limit ? `${string.slice(0, limit)}…` : string;

export const formatLabel = (string) =>
  string.replace(/_/g, ' ').toLowerCase();

/**
 * UI helpers
 */

// Build the ━━●━━━ slider track segments for a given value
export const getSliderLayout = (value, min, max, width) => {
  const position = Math.round(((value - min) / (max - min)) * (width - 1));

  return { before: '━'.repeat(Math.max(0, position))
         , after:  '━'.repeat(Math.max(0, width - 1 - position))
         , position
         };
}

// Map ink key names (upArrow, return, etc.) to handler functions
export const useNav = (handlers) => {
  useInput((_, key) => {
    const action = Object.keys(handlers).find(name => key[name]);
    if (action) handlers[action](key);
  });
}
