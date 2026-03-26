import { useState }    from 'react';
import { useKeyboard } from './hooks/useKeyboard.js';
import { DefinePhase } from './phases/DefinePhase.js';
import { AssessPhase } from './phases/AssessPhase.js';
import { ModifyPhase } from './phases/ModifyPhase.js';
import { AcceptPhase } from './phases/AcceptPhase.js';
import { ExportPhase } from './phases/ExportPhase.js';
import { ResultPhase } from './phases/ResultPhase.js';

// Map the constant UID to the actual Component
const PhaseMap = {
  [DefinePhase.UID]: DefinePhase,
  [AssessPhase.UID]: AssessPhase,
  [ModifyPhase.UID]: ModifyPhase,
  [AcceptPhase.UID]: AcceptPhase,
  [ExportPhase.UID]: ExportPhase,
  [ResultPhase.UID]: ResultPhase,
};

/**
 * Central hub for the style building application.
 * Manages phase routing, user inputs and navigation via keyboard hooks.
 */
export const App = ({ name }) => {

  // State management for the entire app, passed down to each phase component
  const [buildPhase, setBuildPhase] = useState(DefinePhase.UID);
  const [guideIndex, setGuideIndex] = useState(0);
  const [tokenIndex, setTokenIndex] = useState(0);
  const [dataObject, setDataObject] = useState({ STYLE_NAME: name || '' });
  const [customMode, setCustomMode] = useState(false);
  const [targetPath, setTargetPath] = useState(null);

  const [exportOpts, setExportOpts] = useState({
    skillName: '',
    saveDir: '',
    step: 0,
    from: AssessPhase.UID,
  });

  // Consolidate states using standard JS shorthand
  const props = {
    name,
    buildPhase, setBuildPhase,
    guideIndex, setGuideIndex,
    tokenIndex, setTokenIndex,
    dataObject, setDataObject,
    customMode, setCustomMode,
    targetPath, setTargetPath,
    exportOpts, setExportOpts,
  };

  // Enable keyboard navigation across all phases
  useKeyboard(props);

  // Look up the correct component from our dictionary
  const ActiveComponent = PhaseMap[buildPhase];

  // Render the matched component with all props, or fallback to null
  return ActiveComponent ? <ActiveComponent {...props} /> : null;

}
