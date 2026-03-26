import { useState }          from 'react';
import { Box, Text, useInput } from 'ink';
import { TOKEN_PRESETS }      from '../data/designData.js';
import { truncate }           from './utilities.js';
import { SelectionItem
       , InputSelect
       , InputText 
       } from './SharedItems.js';

/**
 * Aesthetic picker for design tokens with custom value support
 */
export const TokenPicker = ({ label, tokenKey, initialValue, onSubmit, setCustomMode }) => {
  const [isCustom, setCustom] = useState(false);
  const [val, setVal]         = useState('');

  const presets =
    [ { key: 'default', label: 'Keep theme default', value: initialValue, description: truncate(initialValue) }
    , ...(TOKEN_PRESETS[tokenKey] || []).map(p => ({ ...p, key: p.value }))
    ];

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

  return (
    <Box flexDirection="column" width={60}>
      <Box marginBottom={1}>
        <Text bold color="white">{label}</Text>
      </Box>

      {!isCustom ? (
        <InputSelect
          items={[...presets, { key: 'custom', label: 'Custom', value: 'CUSTOM' }]}
          onSelect={handleSelect}
        />
      ) : (
        <Box flexDirection="column">
          {/* Header/Context for custom entry */}
          <Box marginBottom={1} flexDirection="column">
            {presets.map(p => (
              <Box key={p.key}>
                <Text dimColor color="gray">  {p.label}: {p.description}</Text>
              </Box>
            ))}
          </Box>
          
          <Box gap={1} marginBottom={1}>
            <Text color="cyan" bold>→</Text>
            <InputText 
              value={val} 
              onChange={setVal} 
              onSubmit={() => { onSubmit(val); setCustomMode(false); }} 
              placeholder="Enter custom value" 
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};
