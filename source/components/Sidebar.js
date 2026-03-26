import { Box }         from 'ink';
import { Text }        from 'ink';
import { formatLabel } from './utilities.js';

/**
 * Sidebar displaying current phase and step progress
 */
export const Sidebar = ({ current, buildPhase, wizardSteps = [], tokenSteps = [] }) => {

  const reviewStep = { key: 'review', label: 'review' };

  // Append a review step to whichever list is active
  const steps = (buildPhase === 'WIZARD')   ? [...wizardSteps, reviewStep]
              : (buildPhase === 'FINETUNE') ? [...tokenSteps, reviewStep]
              :                               wizardSteps;

  return (
    <Box flexDirection="column" width={24} marginRight={4}>

      {/* Branding */}
      <Box marginBottom={1} flexDirection="column">
        <Box>
          <Text color="cyan" bold>⛊ </Text>
          <Text color="white" bold>ANCHOR AI</Text>
        </Box>
        <Text dimColor> design system</Text>
        <Text dimColor>{'─'.repeat(20)}</Text>
      </Box>

      {/* Step list with progress indicators */}
      {steps.map((step, stepIndex) => {
        const active  = stepIndex === current - 1;
        const done    = stepIndex < current - 1;
        const pending = !active && !done;

        const color  = active ? 'cyan' : (done ? 'white' : 'gray');
        const prefix = active ? '→ '   : (done ? '✓ '    : '  ');

        return (
          <Box key={step.key}>
            <Text color={color} bold={active} dimColor={pending}>
              {prefix}{formatLabel(step.label || step.key)}
            </Text>
          </Box>
        );
      })}
    </Box>
  );

};
