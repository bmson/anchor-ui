import { Box, Text }   from 'ink';
import { formatLabel } from './utilities.js';

const PHASE_LABELS =
  { WIZARD:   'wizard'
  , FINETUNE: 'fine-tune'
  , EXPORT:   'export'
  };

/**
 * Aesthetic Sidebar for displaying current phase and steps
 */
export const Sidebar = ({ current, buildPhase, wizardSteps = [], tokenSteps = [] }) => {
  const label      = PHASE_LABELS[buildPhase] || 'process';
  const reviewStep = { key: 'review', label: 'review' };

  // Determine active steps based on build phase
  const steps = (buildPhase === 'WIZARD')   ? [...wizardSteps, reviewStep]
              : (buildPhase === 'FINETUNE') ? [...tokenSteps, reviewStep]
              : wizardSteps;

  return (
    <Box flexDirection="column" width={24} marginRight={4}>
      {/* App Branding */}
      <Box marginBottom={1} flexDirection="column">
        <Box>
          <Text color="cyan" bold>⛊ </Text>
          <Text color="white" bold>ANCHOR</Text>
        </Box>
        <Text dimColor> design system</Text>
        <Text dimColor>{'─'.repeat(20)}</Text>
      </Box>

      {/* Current Phase Indicator */}
      <Box marginBottom={1}>
        <Text color="magenta" bold italic>{label.toUpperCase()}</Text>
      </Box>

      {/* Navigation Steps */}
      {steps.map((step, i) => {
        const isActive = i === current - 1;
        const isDone   = i < current - 1;

        const color  = isActive ? 'cyan' : (isDone ? 'white' : 'gray');
        const prefix = isActive ? '→ '   : (isDone ? '✓ ' : '  ');
        const name   = formatLabel(step.label || step.key);

        return (
          <Box key={step.key}>
            <Text color={color} bold={isActive} dimColor={!isActive && !isDone}>
              {prefix}{name}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};
