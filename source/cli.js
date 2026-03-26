#!/usr/bin/env node
import { parseArgs } from 'node:util';
import { render }    from 'ink';

import { App } from './app.js';

// Parse the command-line arguments
const { values } = parseArgs({
  args: process.argv.slice(2),

  options:
    { name:      { type: 'string' }
    , filename:  { type: 'string' }
    , directory: { type: 'string' }
    }
});

// Start the interactive terminal application
render(<App {...values} />);
