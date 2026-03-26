import { useState }    from 'react';
import { useKeyboard } from './hooks/useKeyboard.js';
import { DefinePhase } from './phases/DefinePhase.js';
import { AssessPhase } from './phases/AssessPhase.js';
import { ModifyPhase } from './phases/ModifyPhase.js';
import { AcceptPhase } from './phases/AcceptPhase.js';
import { ExportPhase } from './phases/ExportPhase.js';
import { ResultPhase } from './phases/ResultPhase.js';

const PhaseMap =
  { [DefinePhase.UID]: DefinePhase
  , [AssessPhase.UID]: AssessPhase
  , [ModifyPhase.UID]: ModifyPhase
  , [AcceptPhase.UID]: AcceptPhase
  , [ExportPhase.UID]: ExportPhase
  , [ResultPhase.UID]: ResultPhase
  };

/**
 * Central hub for the style building application
 */
export const App = ({ name }) => {

  const [buildPhase, setBuildPhase] = useState(DefinePhase.UID);
  const [guideIndex, setGuideIndex] = useState(0);
  const [tokenIndex, setTokenIndex] = useState(0);
  const [dataObject, setDataObject] = useState({ STYLE_NAME: name || '' });
  const [customMode, setCustomMode] = useState(false);
  const [targetPath, setTargetPath] = useState(null);

  const [exportOpts, setExportOpts] = useState(
    { skillName: ''
    , saveDir:   ''
    , step:      0
    , from:      AssessPhase.UID
    });

  const props =
    { name
    , buildPhase, setBuildPhase
    , guideIndex, setGuideIndex
    , tokenIndex, setTokenIndex
    , dataObject, setDataObject
    , customMode, setCustomMode
    , targetPath, setTargetPath
    , exportOpts, setExportOpts
    };

  useKeyboard(props);

  const Phase = PhaseMap[buildPhase];
  return Phase ? <Phase {...props} /> : null;

}
