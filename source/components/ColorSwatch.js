import { Text }  from 'ink';
import { isHex } from './utilities.js';

/**
 * Displays a color hex value along with a visual circular swatch
 */
export const ColorSwatch = ({ value }) => isHex(value)
  ? (
      <>
        <Text color="white">{value} </Text>
        <Text color={value}>●</Text>
      </>
    )
  : <Text color="gray">{value}</Text>;
