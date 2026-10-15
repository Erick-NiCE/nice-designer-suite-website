// Builds native-catalog.json for claude-skills.html (Native tools and skills).
// Source of truth is the plugin's generated catalog, so the page never drifts
// from what ships. Marketplace entries (credited to outside authors) are left
// out: they live on marketplace.html.
//
// Usage: node scripts/gen-native-catalog.mjs [path/to/nice-designer-plugin]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const pluginDir = process.argv[2] || path.resolve(here, '../../nice-designer-plugin');
const src = fs.readFileSync(path.join(pluginDir, 'src/ui/mcp-catalog.ts'), 'utf8');

function grab(name) {
  const a = src.indexOf('export const ' + name);
  if (a < 0) throw new Error('missing ' + name);
  const start = src.indexOf('= [', a) + 2;
  let depth = 0, i = start;
  for (; i < src.length; i++) {
    const c = src[i];
    if (c === '[') depth++;
    else if (c === ']' && --depth === 0) break;
  }
  return (0, eval)('(' + src.slice(start, i + 1) + ')');
}

const toolGroups = grab('TOOL_GROUPS');
const skillGroups = grab('SKILL_GROUPS');
const tools = grab('CATALOG_TOOLS').filter((t) => !t.thirdParty);
// Internal-only skills stay off the public page.
const HIDDEN_SKILLS = new Set(['lynn-ui-prototyping']);
const skills = grab('CATALOG_SKILLS').filter((s) => !s.thirdParty && !HIDDEN_SKILLS.has(s.id));

const out = {
  generated: new Date().toISOString().slice(0, 10),
  toolGroups: toolGroups.filter((g) => tools.some((t) => t.group === g.id)),
  skillGroups: skillGroups.filter((g) => skills.some((s) => s.group === g.id)),
  tools,
  skills,
};
fs.writeFileSync(path.resolve(here, '../native-catalog.json'), JSON.stringify(out, null, 1) + '\n');
console.log(`native-catalog.json: ${tools.length} tools in ${out.toolGroups.length} groups, ${skills.length} skills in ${out.skillGroups.length} groups`);
