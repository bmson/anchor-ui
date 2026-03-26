import esbuild from 'esbuild';

const watch = process.argv.includes('--watch');

const config =
  { entryPoints: ['source/cli.js']
  , outfile:     'dist/cli.js'
  , bundle:      true
  , platform:    'node'
  , format:      'esm'
  , minify:      true
  , jsx:      'automatic'
  , loader:
    { '.js': 'jsx'
    , '.md': 'text'
    }
  , alias:
    { 'react-devtools-core': './source/shim.js'
    }
  , banner:
    { js: "import { createRequire } from 'module'; const require = createRequire(import.meta.url);"
    }
  };

if (watch) {
  const context = await esbuild.context(config);
  await context.watch();
} else {
  await esbuild.build(config);
}
