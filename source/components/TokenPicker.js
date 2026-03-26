import { useState }      from 'react';
import { Box }           from 'ink';
import { Text }          from 'ink';
import { useInput }      from 'ink';
import { TOKEN_PRESETS } from '../data/designData.js';
import { truncate }      from './utilities.js';
import { InputText }     from './InputText.js';
import { InputSelect }   from './InputSelect.js';

/**
 * Token picker with preset and custom value support
 */
export const TokenPicker = ({ label, tokenKey, initialValue, onSubmit, setCustomMode }) => {

  const [isCustom, setCustom]         = useState(false);
  const [customValue, setCustomValue] = useState('');

  // Build the preset list — theme default first, then any known presets for this token
  const presets =
    [ { key:   'default'
      , label: 'Keep theme default'
      , value: initialValue
      , description: truncate(initialValue)
      }
    , ...(TOKEN_PRESETS[tokenKey] || []).map(preset => ({ ...preset, key: preset.value }))
    ];

  // Escape exits custom mode back to the preset list
  useInput((_, key) => {
    if (isCustom && key.escape) {
      setCustom(false);
      setCustomMode(false);
    }
  });

  const handleSelect = (item) => {
    if (item.value === 'CUSTOM') {
      setCustom(true);
      setCustomMode(true);
    } else {
      onSubmit(item.value);
    }
  };

  /**
   * Preset selection mode
   */
  if (!isCustom) {
    return (
      <Box flexDirection="column" width={60}>
        <Box marginBottom={1}>
          <Text bold color="white">{label}</Text>
        </Box>

        <InputSelect
          items={[...presets, { key: 'custom', label: 'Custom', value: 'CUSTOM' }]}
          onSelect={handleSelect}
        />
      </Box>
    );
  }

  /**
   * Custom value entry mode
   */
  return (
    <Box flexDirection="column" width={60}>
      <Box marginBottom={1}>
        <Text bold color="white">{label}</Text>
      </Box>

      {/* Reference list of available presets */}
      <Box marginBottom={1} flexDirection="column">
        {presets.map(preset => (
          <Box key={preset.key}>
            <Text dimColor color="gray">  {preset.label}: {preset.description}</Text>
          </Box>
        ))}
      </Box>

      <Box gap={1} marginBottom={1}>
        <Text color="cyan" bold>→</Text>
        <InputText
          value={customValue}
          onChange={setCustomValue}
          onSubmit={() => { onSubmit(customValue); setCustomMode(false); }}
          placeholder="Enter custom value"
        />
      </Box>
    </Box>
  );

};
