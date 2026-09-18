/**
 * The lynn-ui playground.
 *
 * No bundler: this is plain ES module JavaScript using `createElement`
 * directly, importing React through the host page's import map and every
 * component from the package's own built `dist/index.js`.
 *
 * This module is used two ways:
 *
 *   - `playground/index.html`  the standalone shell: has no nav or rail of
 *                              its own, so it calls `mountPlayground(el)`,
 *                              which owns the whole document - its own `Nav`,
 *                              `ThemeProvider` and a fixed-left `DocRail`
 *                              fed by `RAIL_GROUPS`.
 *   - `../../lynn.html`        the live site's Lynn page: already has its
 *                              own `Nav`, `ThemeProvider` and left `DocRail`
 *                              (the page IS a lynn-ui app, not a host
 *                              embedding one), so it imports `Body` and
 *                              `RAIL_GROUPS` directly and renders them
 *                              inside its own single tree instead of calling
 *                              `mountPlayground` - one theme, one rail, no
 *                              second nav competing with the page's own.
 *
 * House rule: every clickable control here is a real lynn-ui component. The
 * theme switch is `ThemeToggle`, the picker axes are `Tabs`, `Dropdown` and
 * `Switch`, the code panels are `CodeBlock` (which carries a real
 * `CopyButton`), the rail is `DocRail`. There is no bare `<button>`,
 * `<input>` or `<select>` anywhere below.
 */

import {
  createElement as h,
  Fragment,
  StrictMode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createRoot } from 'react-dom/client';

import {
  Alert,
  Badge,
  Button,
  Card,
  CodeBlock,
  DocRail,
  Dropdown,
  Float,
  GlowPulse,
  GradientBackground,
  IconBolt,
  IconBulb,
  IconMoon,
  IconSparkles,
  InlineCode,
  Nav,
  PulseDot,
  Reveal,
  Sheen,
  ShimmerText,
  Sparkle,
  Switch,
  Tabs,
  ThemeProvider,
  ThemeToggle,
  ToastViewport,
  designTokens,
  useLynnTheme,
} from '../dist/index.js';

import {
  ACCENTS,
  GROUPS,
  RailContext,
  TOKEN_ITEMS,
  buildCode,
  resolve,
  titleize,
} from './registry.js';

// Re-exported so a host page rendering `Body` directly only needs one import
// source: `DocRailPreview` (inside `Body`'s "DocRail" component card) reads
// this to demo controlling the host's own real rail, so the host must wrap
// `Body` in `RailContext.Provider` with the same `collapsed`/`setCollapsed`
// state it hands its own `DocRail`.
export { RailContext };

/* ------------------------------------------------------------------ *
 * live token reading
 * ------------------------------------------------------------------ */

const ROOT_SELECTOR = '.lynn-root';

/**
 * Reads the resolved value of each custom property off `.lynn-root`, so the
 * neutral swatches show what the *active* theme mode actually renders rather
 * than the `lynn`-mode literals baked into `designTokens`.
 */
function useCssVars(names) {
  const { theme } = useLynnTheme();
  const [values, setValues] = useState({});

  useEffect(() => {
    const root = document.querySelector(ROOT_SELECTOR);
    if (root == null) return;
    const styles = window.getComputedStyle(root);
    const next = {};
    for (const name of names) {
      next[name] = styles.getPropertyValue(name).trim();
    }
    setValues(next);
  }, [theme, names.join(' ')]);

  return values;
}

/* ------------------------------------------------------------------ *
 * small docs-chrome helpers (labels and layout only)
 * ------------------------------------------------------------------ */

function Section(props) {
  const { id, eyebrow, title, lede, children } = props;
  return h('section', { className: 'docs-section', id }, [
    eyebrow != null
      ? h('p', { key: 'eyebrow', className: 'docs-eyebrow' }, eyebrow)
      : null,
    h('h2', { key: 'title', className: 'docs-h2' }, title),
    lede != null ? h('p', { key: 'lede', className: 'docs-lede' }, lede) : null,
    h('div', { key: 'body' }, children),
  ]);
}

function Meta(props) {
  return h('div', { className: 'tok-meta' }, props.children);
}

/**
 * One line of per-component guidance, under a card's description.
 *
 * Text only - the label is a `pgc-guide-label` span rather than a control,
 * because there is nothing here to click. `usage` and `dont` are independently
 * optional: a pure visual effect with no real choices to make carries only a
 * `dont`, and `GuideNote` renders nothing at all when neither is set.
 */
function GuideNote(props) {
  const { usage, dont } = props;
  if (usage == null && dont == null) return null;

  // The colon and the leading space are real characters rather than CSS, so
  // the line still reads as "Usage: pass ..." when it is copied out of the
  // page or announced by a screen reader - `margin-right` alone would leave
  // the two words run together in the text layer.
  const line = (kind, label, text) =>
    h('p', { key: kind, className: `pgc-guide-line pgc-guide-${kind}` }, [
      h('span', { key: 'label', className: 'pgc-guide-label' }, `${label}:`),
      h('span', { key: 'text' }, ` ${text}`),
    ]);

  return h('div', { className: 'pgc-guide' }, [
    usage != null ? line('usage', 'Usage', usage) : null,
    dont != null ? line('dont', 'Don’t', dont) : null,
  ]);
}

/* ------------------------------------------------------------------ *
 * tokens: colors
 * ------------------------------------------------------------------ */

const NEUTRAL_TOKENS = [
  ['bg', '--lynn-color-bg'],
  ['surface', '--lynn-color-surface'],
  ['card', '--lynn-color-card'],
  ['border', '--lynn-color-border'],
  ['borderHover', '--lynn-color-border-hover'],
  ['borderSubtle', '--lynn-color-border-subtle'],
  ['text', '--lynn-color-text'],
  ['textSecondary', '--lynn-color-text-secondary'],
  ['textMuted', '--lynn-color-text-muted'],
];

const NEUTRAL_VARS = NEUTRAL_TOKENS.map(([, cssVar]) => cssVar);

function ColorTokens() {
  const { theme } = useLynnTheme();
  const live = useCssVars(NEUTRAL_VARS);

  const accentCells = ACCENTS.map((accent) =>
    h('div', { key: accent }, [
      h('div', {
        key: 'swatch',
        className: 'tok-swatch',
        style: { background: designTokens.color.accent[accent] },
      }),
      h('div', { key: 'name', className: 'tok-name' }, titleize(accent)),
      h(Meta, { key: 'hex' }, designTokens.color.accent[accent]),
      h(Meta, { key: 'var' }, `--lynn-color-${accent}`),
    ])
  );

  const neutralCells = NEUTRAL_TOKENS.map(([name, cssVar]) =>
    h('div', { key: cssVar }, [
      h('div', {
        key: 'swatch',
        className: 'tok-swatch',
        style: { background: `var(${cssVar})` },
      }),
      h('div', { key: 'name', className: 'tok-name' }, name),
      h(Meta, { key: 'value' }, live[cssVar] || '…'),
      h(Meta, { key: 'var' }, cssVar),
    ])
  );

  return h(Fragment, null, [
    h(
      Alert,
      { key: 'note', variant: 'info', icon: h(IconBulb, { size: 16 }), title: 'Accents are mode-invariant' },
      'The seven accents, the radius and spacing scales and the easing curve are identical in all three theme modes. Only the neutrals below are re-pointed - they are read live off .lynn-root, so they follow the toggle in the header.'
    ),
    h('h3', { key: 'ah', className: 'tok-name' }, 'The seven accents'),
    h('div', { key: 'accents', className: 'tok-grid' }, accentCells),
    h(
      'h3',
      { key: 'nh', className: 'tok-name', style: { marginTop: 28 } },
      `Neutrals - current mode: ${theme}`
    ),
    h('div', { key: 'neutrals', className: 'tok-grid' }, neutralCells),
  ]);
}

/* ------------------------------------------------------------------ *
 * tokens: typography
 * ------------------------------------------------------------------ */

const TYPE_ROWS = [
  { token: 'heroTitle', weight: 'black', tracking: 'heroTitle', sample: 'Meet Lynn' },
  {
    token: 'sectionTitle',
    weight: 'extrabold',
    tracking: 'sectionTitle',
    sample: 'One design system',
  },
  {
    token: 'cardTitle',
    weight: 'semibold',
    tracking: 'cardTitle',
    sample: 'Interactive components',
  },
  {
    token: 'body',
    weight: 'regular',
    sample: 'Body copy: 14px on a 1.65 line height.',
  },
  { token: 'navLink', weight: 'medium', sample: 'Documentation' },
  {
    token: 'sectionLabel',
    weight: 'bold',
    tracking: 'sectionLabel',
    upper: true,
    sample: 'Section label',
  },
  { token: 'metadata', weight: 'regular', sample: 'September 2026 · v11.5' },
  { token: 'code', weight: 'regular', mono: true, sample: '--lynn-color-bg' },
];

const kebab = (value) => value.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

function TypeRow(props) {
  const { row } = props;
  const ref = useRef(null);
  const [computed, setComputed] = useState('');

  useEffect(() => {
    const measure = () => {
      if (ref.current != null) {
        setComputed(window.getComputedStyle(ref.current).fontSize);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const sizeVar = `--lynn-font-size-${kebab(row.token)}`;
  const trackVar =
    row.tracking != null ? `--lynn-letter-spacing-${kebab(row.tracking)}` : null;

  return h('div', { className: 'tok-row' }, [
    h('div', { key: 'meta' }, [
      h('div', { key: 'name', className: 'tok-name' }, row.token),
      h(Meta, { key: 'raw' }, designTokens.typography.size[row.token]),
      h(Meta, { key: 'computed' }, `computes to ${computed || '…'}`),
      h(Meta, { key: 'var' }, sizeVar),
      h(
        Meta,
        { key: 'weight' },
        `weight ${designTokens.typography.weight[row.weight]}${
          trackVar != null
            ? ` · tracking ${designTokens.typography.letterSpacing[row.tracking]}`
            : ''
        }`
      ),
    ]),
    h(
      'div',
      {
        key: 'sample',
        ref,
        className: 'tok-sample',
        style: {
          fontSize: `var(${sizeVar})`,
          fontWeight: designTokens.typography.weight[row.weight],
          letterSpacing: trackVar != null ? `var(${trackVar})` : undefined,
          fontFamily: row.mono
            ? 'var(--lynn-font-family-mono)'
            : 'var(--lynn-font-family)',
          textTransform: row.upper ? 'uppercase' : undefined,
          lineHeight:
            row.token === 'heroTitle' || row.token === 'sectionTitle'
              ? 'var(--lynn-line-height-tight)'
              : 'var(--lynn-line-height-body)',
        },
      },
      row.sample
    ),
  ]);
}

function TypographyTokens() {
  return h(Fragment, null, [
    h(
      'p',
      { key: 'families', className: 'docs-lede' },
      [
        h(Fragment, { key: 'a' }, 'Two families: '),
        h(InlineCode, { key: 'b' }, '--lynn-font-family'),
        h(Fragment, { key: 'c' }, ' (Be Vietnam Pro) and '),
        h(InlineCode, { key: 'd' }, '--lynn-font-family-mono'),
        h(Fragment, { key: 'e' }, '. Each row below is rendered at its real token size, weight and tracking.'),
      ]
    ),
    h(
      'div',
      { key: 'rows', className: 'tok-rows' },
      TYPE_ROWS.map((row) => h(TypeRow, { key: row.token, row }))
    ),
  ]);
}

/* ------------------------------------------------------------------ *
 * tokens: spacing, radius, motion
 * ------------------------------------------------------------------ */

function SpacingTokens() {
  const rows = Object.entries(designTokens.spacing).map(([name, value]) =>
    h('div', { key: name, className: 'tok-row' }, [
      h('div', { key: 'meta' }, [
        h('div', { key: 'name', className: 'tok-name' }, name),
        h(Meta, { key: 'value' }, `${value}px`),
        h(Meta, { key: 'var' }, `--lynn-space-${name}`),
      ]),
      value === 0
        ? h('div', { key: 'bar', className: 'docs-note' }, 'zero - the reset value')
        : h('div', {
            key: 'bar',
            className: 'tok-bar',
            style: { width: `var(--lynn-space-${name})` },
          }),
    ])
  );
  return h('div', { className: 'tok-rows' }, rows);
}

function RadiusTokens() {
  const rows = Object.entries(designTokens.radius).map(([name, value]) =>
    h('div', { key: name, className: 'tok-row' }, [
      h('div', { key: 'meta' }, [
        h('div', { key: 'name', className: 'tok-name' }, name),
        h(Meta, { key: 'value' }, `${value}px`),
        h(Meta, { key: 'var' }, `--lynn-radius-${name}`),
      ]),
      h('div', {
        key: 'box',
        className: 'tok-box',
        style: { borderRadius: `var(--lynn-radius-${name})` },
      }),
    ])
  );
  return h('div', { className: 'tok-rows' }, rows);
}

function Demo(props) {
  return h('div', { className: 'tok-demo' }, [
    h('div', { key: 'label', className: 'tok-meta' }, props.label),
    h('div', { key: 'body', className: 'tok-demo-body' }, props.children),
  ]);
}

function MotionTokens() {
  const [replay, setReplay] = useState(0);

  return h(Fragment, null, [
    h('div', { key: 'ease', className: 'tok-row' }, [
      h('div', { key: 'meta' }, [
        h('div', { key: 'name', className: 'tok-name' }, 'ease'),
        h(Meta, { key: 'var' }, '--lynn-ease'),
      ]),
      h(Meta, { key: 'value' }, designTokens.motion.ease),
    ]),
    h(
      'p',
      { key: 'note', className: 'docs-lede', style: { marginTop: 20 } },
      'Every interaction transition in Lynn uses that one curve. The motion components below are live - each has its own card further down under Motion & effects.'
    ),
    h(
      'div',
      { key: 'replay', style: { marginBottom: 16 } },
      h(
        Button,
        {
          variant: 'secondary',
          onClick: () => setReplay(replay + 1),
          'aria-label': 'Replay the reveal entrances',
        },
        'Replay the entrances'
      )
    ),
    h('div', { key: 'grid', className: 'tok-demo-grid' }, [
      h(
        Demo,
        { key: 'reveal', label: '<Reveal /> - staggered entrance' },
        h(
          'div',
          { style: { display: 'grid', gap: 8, width: '100%' } },
          [0, 1, 2].map((index) =>
            h(
              Reveal,
              { key: `${replay}-${index}`, index },
              h(Badge, { tone: 'blue', bordered: true }, `index ${index}`)
            )
          )
        )
      ),
      h(
        Demo,
        { key: 'float', label: '<Float /> - infinite bob' },
        h(Float, null, h(Badge, { tone: 'lynn', icon: h(IconSparkles, { size: 12 }) }, 'Floating'))
      ),
      h(Demo, { key: 'pulse', label: '<PulseDot /> - live status' }, [
        h(PulseDot, { key: 'a', label: 'Live' }),
        h(PulseDot, { key: 'b', tone: 'coral', label: 'Alert', duration: 1 }),
      ]),
      h(
        Demo,
        { key: 'shimmer', label: '<ShimmerText /> - gradient wipe' },
        h(
          ShimmerText,
          { as: 'h3', style: { fontSize: 30, fontWeight: 900, margin: 0 } },
          'Shimmer'
        )
      ),
      h(
        Demo,
        { key: 'sheen', label: '<Sheen /> - looping light sweep' },
        h(
          Sheen,
          null,
          h(Card, { interactive: false, accent: 'teal' }, 'Hover me')
        )
      ),
      h(
        Demo,
        { key: 'sparkle', label: '<Sparkle /> - twinkling field' },
        // Sparkle beside the badge, not wrapping it - see the registry's
        // matching component card for why: children swap in the plain
        // scale+opacity fallback instead of the real twinkling glyph.
        h(
          'div',
          { style: { display: 'flex', alignItems: 'center', gap: 10 } },
          [
            h(Sparkle, { key: 'glyph' }),
            h(Badge, { key: 'badge', tone: 'lynn', icon: h(IconBolt, { size: 12 }) }, 'Superpowers'),
          ]
        )
      ),
      h(
        Demo,
        { key: 'glow', label: '<GlowPulse /> - breathing halo' },
        h(GlowPulse, null, h(Badge, { status: 'active' }, 'Active'))
      ),
      h(
        Demo,
        { key: 'gradient', label: '<GradientBackground /> - drifting accents' },
        h(GradientBackground, {
          animated: 'fast',
          style: { width: '100%', height: 72, borderRadius: 12 },
        })
      ),
    ]),
  ]);
}

/* ------------------------------------------------------------------ *
 * the playground card
 * ------------------------------------------------------------------ */

const TAG_TONES = ['blue', 'lynn', 'emerald', 'teal', 'coral', 'indigo', 'electric-blue'];

/**
 * One picker axis. The control is chosen from the axis shape, so every card
 * gets the right real component: `Switch` for a two-state axis, `Dropdown`
 * once the list outgrows a segmented control, `Tabs` otherwise.
 */
function Control(props) {
  const { group, value, onChange } = props;

  const kind =
    group.control ??
    (group.type === 'boolean'
      ? 'switch'
      : group.options.length > 5
        ? 'dropdown'
        : 'tabs');

  if (kind === 'switch') {
    const isOn = value === 'on';
    return h(Switch, {
      checked: isOn,
      onChange: (next) => onChange(next ? 'on' : 'off'),
      label: group.options[isOn ? 1 : 0].label,
      size: 'sm',
      ariaLabel: group.label,
    });
  }

  if (kind === 'dropdown') {
    return h(Dropdown, {
      value,
      onChange,
      options: group.options,
      searchable: group.options.length > 8,
      ariaLabel: group.label,
    });
  }

  return h(Tabs, {
    options: group.options,
    value,
    onChange,
    variant: 'pill',
    tone: 'blue',
    stretch: true,
    ariaLabel: group.label,
  });
}

function PlaygroundCard(props) {
  const { entry } = props;
  const [state, setState] = useState(entry.defaults ?? {});

  const groups = entry.groups ?? [];
  const code = buildCode(entry, state);

  // Re-key the preview on every picker change: several components read a
  // prop once into their own state (`DataTable.defaultSort`,
  // `Accordion.defaultOpen`, `ChangelogEntry.defaultOpen`), so a fresh mount
  // is the only way a picker for those props can mean anything.
  const previewKey = JSON.stringify(state);
  const preview =
    entry.Preview != null
      ? h(entry.Preview, { ...state, key: previewKey })
      : h(Fragment, { key: previewKey }, resolve(entry.el(state)));

  const tags = groups.map((group, index) =>
    h(
      Badge,
      {
        key: group.prop,
        tone: TAG_TONES[index % TAG_TONES.length],
        bordered: true,
      },
      `${group.prop}: ${state[group.prop]}`
    )
  );

  const controls = groups.map((group) =>
    h('div', { key: group.prop, className: 'pgc-group' }, [
      h('p', { key: 'label', className: 'pgc-control-label' }, group.label),
      h(Control, {
        key: 'control',
        group,
        value: state[group.prop],
        onChange: (next) =>
          setState((previous) => ({ ...previous, [group.prop]: next })),
      }),
    ])
  );

  const stacked = entry.stacked === true || groups.length === 0;

  return h(
    'section',
    { className: 'docs-section', id: entry.id },
    h(Card, { interactive: false, className: 'pgc' }, [
      h('h3', { key: 'title', className: 'docs-h2' }, entry.name),
      tags.length > 0
        ? h('div', { key: 'tags', className: 'pgc-tags' }, tags)
        : null,
      h('p', { key: 'desc', className: 'pgc-desc docs-lede' }, entry.description),
      h(GuideNote, { key: 'guide', usage: entry.usage, dont: entry.dont }),
      h(
        'div',
        {
          key: 'body',
          className: `pgc-body${stacked ? ' pgc-body-stacked' : ''}`,
        },
        [
          h(
            'div',
            {
              key: 'preview',
              className: `pgc-preview${entry.block ? ' pgc-preview-block' : ''}`,
            },
            preview
          ),
          groups.length > 0
            ? h('div', { key: 'controls', className: 'pgc-controls' }, controls)
            : null,
        ]
      ),
      h(
        'div',
        { key: 'code', className: 'pgc-code' },
        h(CodeBlock, { language: 'jsx', ariaLabel: `${entry.name} usage` }, code)
      ),
    ])
  );
}

/* ------------------------------------------------------------------ *
 * the page
 * ------------------------------------------------------------------ */

/**
 * `Body`'s section/component list, shaped as `DocRailGroup[]` - exported so a
 * host page can append it to its own rail's `groups` instead of standing up a
 * second `DocRail` alongside it.
 */
export const RAIL_GROUPS = [
  { label: 'Overview', items: [{ id: 'overview', label: 'Introduction' }] },
  { label: 'Tokens', items: TOKEN_ITEMS },
  ...GROUPS.map((group) => ({
    label: group.label,
    items: group.entries.map((entry) => ({ id: entry.id, label: entry.name })),
  })),
];

function Overview() {
  const componentCount = GROUPS.reduce(
    (total, group) => total + group.entries.length,
    0
  );

  return h(Section, {
    id: 'overview',
    eyebrow: 'lynn-ui',
    title: 'Components and tokens',
    lede: `Every preview on this page is the real built package: the ESM out of dist/index.js, styled by the real dist/lynn-ui.css. ${componentCount} component playgrounds and five token scales, all driven by one registry.`,
    children: h(Fragment, null, [
      h(
        Alert,
        {
          key: 'theme',
          variant: 'purple',
          icon: h(IconMoon, { size: 16 }),
          title: 'Three theme modes',
        },
        'The toggle in the header switches lynn (the default dark blue), light (white-based) and dark (grey-based). It re-points the neutral tokens on .lynn-root, so every preview below re-skins live.'
      ),
      h(
        Alert,
        { key: 'install', variant: 'info', icon: h(IconBulb, { size: 16 }), title: 'Getting started' },
        'Install the package, import the stylesheet once at the app root, and wrap the tree in ThemeProvider.'
      ),
      h(
        CodeBlock,
        { key: 'code', language: 'jsx' },
        `import 'lynn-ui/dist/lynn-ui.css';
import { ThemeProvider, ThemeToggle, ToastViewport } from 'lynn-ui';

export function App({ children }) {
  return (
    <ThemeProvider defaultTheme="lynn">
      <ThemeToggle />
      {children}
      <ToastViewport />
    </ThemeProvider>
  );
}`
      ),
    ]),
  });
}

function Tokens() {
  return h(Fragment, null, [
    h(
      'div',
      { key: 'divider', className: 'docs-group-divider' },
      [
        h('p', { key: 'eyebrow', className: 'docs-eyebrow' }, 'Foundations'),
        h('h2', { key: 'title', className: 'docs-h1' }, 'Tokens'),
      ]
    ),
    h(Section, {
      key: 'colors',
      id: 'tokens-colors',
      eyebrow: 'Tokens',
      title: 'Colors',
      lede: 'Seven named accents plus one neutral scale per theme mode.',
      children: h(ColorTokens),
    }),
    h(Section, {
      key: 'typography',
      id: 'tokens-typography',
      eyebrow: 'Tokens',
      title: 'Typography',
      lede: 'Eight size tokens, six weights, four tracking values.',
      children: h(TypographyTokens),
    }),
    h(Section, {
      key: 'spacing',
      id: 'tokens-spacing',
      eyebrow: 'Tokens',
      title: 'Spacing',
      lede: 'An eleven-step scale, from the 0 reset to the 96px section gap.',
      children: h(SpacingTokens),
    }),
    h(Section, {
      key: 'radius',
      id: 'tokens-radius',
      eyebrow: 'Tokens',
      title: 'Radius',
      lede: 'Seven corner values, ending in the pill.',
      children: h(RadiusTokens),
    }),
    h(Section, {
      key: 'motion',
      id: 'tokens-motion',
      eyebrow: 'Tokens',
      title: 'Motion',
      lede: 'One easing curve, and the components that move.',
      children: h(MotionTokens),
    }),
  ]);
}

function Components() {
  return h(
    Fragment,
    null,
    GROUPS.map((group) =>
      h(Fragment, { key: group.label }, [
        h('div', { key: 'divider', className: 'docs-group-divider' }, [
          h('p', { key: 'eyebrow', className: 'docs-eyebrow' }, 'Components'),
          h('h2', { key: 'title', className: 'docs-h1' }, group.label),
        ]),
        ...group.entries.map((entry) =>
          h(PlaygroundCard, { key: entry.id, entry })
        ),
      ])
    )
  );
}

/**
 * The playground's actual content: the three sections (Overview, Tokens,
 * Components), no chrome of its own.
 *
 * Exported so a host page that already has its own `Nav`/`DocRail`/
 * `ThemeProvider` (lynn.html) can render this directly inside its own tree,
 * merging `RAIL_GROUPS` into its own rail instead of getting a second one.
 * The standalone shell's `mountPlayground` renders the same component, just
 * wrapped in its own chrome below.
 */
export function Body() {
  return h(Fragment, null, [
    h(Overview, { key: 'overview' }),
    h(Tokens, { key: 'tokens' }),
    h(Components, { key: 'components' }),
    h(ToastViewport, { key: 'toast' }),
  ]);
}

/** The standalone shell: own `Nav`, fixed rail, full-width main column. */
function StandaloneApp() {
  const [collapsed, setCollapsed] = useState(false);

  return h(RailContext.Provider, { value: { collapsed, setCollapsed } }, [
    h(Nav, {
      key: 'nav',
      autoHide: false,
      logoHref: '#overview',
      ariaLabel: 'lynn-ui playground',
      logo: h(Fragment, null, [
        h('span', { key: 'a', className: 'lynn-nav-logo-nice' }, 'lynn'),
        h('span', { key: 'b', className: 'lynn-nav-logo-designer' }, '-ui'),
      ]),
      cta: h(ThemeToggle, { showLabels: true }),
    }),

    h(DocRail, {
      key: 'rail',
      mode: 'sections',
      groups: RAIL_GROUPS,
      collapsed,
      onToggle: setCollapsed,
      searchable: true,
      label: 'Contents',
      searchPlaceholder: 'Filter sections…',
      emptyText: 'No matching sections',
    }),

    h(
      'main',
      {
        key: 'main',
        className: `docs-main${collapsed ? ' docs-main-wide' : ''}`,
      },
      h(Body)
    ),
  ]);
}

/**
 * Mounts the standalone playground shell into any container.
 *
 * Only `playground/index.html` calls this - a page that already has its own
 * `Nav`/`DocRail`/`ThemeProvider` (lynn.html) should import `Body` and
 * `RAIL_GROUPS` instead and render them inside its own tree; mounting a
 * second, independent `ThemeProvider` there would give the page two
 * disconnected theme states and a second competing rail.
 *
 * @param {Element|string} container element, or the id of one.
 * @param {{ defaultTheme?: 'lynn'|'light'|'dark' }} [options]
 * @returns the React root, so a caller can `unmount()` it.
 */
export function mountPlayground(container, options = {}) {
  const { defaultTheme = 'lynn' } = options;

  const element =
    typeof container === 'string'
      ? document.getElementById(container)
      : container;

  if (element == null) {
    throw new Error(
      `mountPlayground: container ${JSON.stringify(container)} not found`
    );
  }

  const root = createRoot(element);
  root.render(
    h(
      StrictMode,
      null,
      h(ThemeProvider, { defaultTheme }, h(StandaloneApp))
    )
  );

  console.log(
    '[lynn-ui playground] mounted standalone -',
    GROUPS.reduce((total, group) => total + group.entries.length, 0),
    'playgrounds'
  );

  return root;
}
