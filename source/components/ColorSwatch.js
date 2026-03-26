import { Text }  from 'ink';
import { isHex } from './utilities.js';

/**
 * Inline color preview — hex swatch or plain text fallback
 */
export const ColorSwatch = ({ value }) => {

  const isPlain = !isHex(value);

  if (isPlain) {
    return <Text color="gray">{value}</Text>;
  }

  return (
    <>
      <Text color="white">{value} </Text>
      <Text color={value}>●</Text>
    </>
  );

};
