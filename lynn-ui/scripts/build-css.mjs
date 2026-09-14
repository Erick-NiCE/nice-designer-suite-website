// Bundles src/styles/index.css (inlining every local @import) into
// dist/lynn-ui.css. The remote Google Fonts @import in styles/fonts.css is
// marked external so it survives into the output untouched.
import { build } from 'esbuild';

await build({
  entryPoints: ['src/styles/index.css'],
  outfile: 'dist/lynn-ui.css',
  bundle: true,
  external: ['https://*', 'http://*'],
  logLevel: 'info',
});
