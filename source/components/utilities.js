/**
 * Clamp a number between a minimum and maximum value
 */
export const clamp = (val, min, max) =>
  Math.min(max, Math.max(min, val));

/**
 * Check if a string is a valid hex color
 */
export const isHex = (str) =>
  /^#([a-f\d]{3}|[a-f\d]{6})$/i.test(str);

/**
 * Convert value to a 2-digit hexadecimal string
 */
export const toHex = (val) =>
  clamp(0, 255, val).toString(16).padStart(2, '0');

/**
 * Convert a hex color string to an RGB object
 */
export const toRgb = (hex) => {
  const match = hex?.match(/^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i);

  if (!match) return { r: 128, g: 128, b: 128 };

  const [r, g, b] = match.slice(1).map(x =>
    parseInt(x.length === 1 ? x + x : x, 16)
  );

  return { r, g, b };
}

/**
 * Truncate a string to a given character limit
 */
export const truncate = (str, limit = 40) =>
  str?.length > limit ? `${str.slice(0, limit)}…` : str;

/**
 * Replace underscores with spaces and convert to lowercase
 */
export const formatLabel = (str) =>
  str.replace(/_/g, ' ').toLowerCase();

/**
 * Calculate slider track layout for a given value within a range
 */
export const getSliderLayout = (val, min, max, width) => {
  const pos = Math.round(((val - min) / (max - min)) * (width - 1));

  return { before: '━'.repeat(Math.max(0, pos))
         , after:  '━'.repeat(Math.max(0, width - 1 - pos))
         , pos
         };
}
