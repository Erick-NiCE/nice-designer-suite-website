/**
 * The playground registry.
 *
 * One data entry per showcased component. Everything the docs page draws -
 * the picker column, the live preview, the JSX snippet - is derived from
 * these entries by `app.js`, so there is exactly one playground UI rather
 * than one per component.
 *
 * Entry shape:
 *   id          section id (also the doc-rail anchor)
 *   name        heading
 *   description one line, what the component is for
 *   usage       one line, how to reach for it - the short form of the
 *               `Usage:` note in the component's own JSDoc. Optional: a pure
 *               visual effect with no real choices to make has none.
 *   dont        one line, the failure mode its API actually allows - the short
 *               form of the JSDoc's `Don't:`. Optional, same reasoning.
 *   groups      picker axes: { label, prop, options: [{ value, label, swatch }] }
 *   defaults    initial value per picker prop (keys match `group.prop`)
 *   el(state)   element descriptor - drives BOTH the preview and the snippet
 *   Preview     optional React component used for the preview instead of
 *               `el`, for demos that need their own state (controlled
 *               inputs, toasts, an overlay). `el` still writes the snippet.
 *   hook        optional code preamble (a useState line, a data array) so
 *               the snippet is actually copy-pasteable
 *   reactImports  names to import from 'react' in the snippet
 *   imports     extra 'lynn-ui' names the descriptor does not mention
 *   block       lay the preview out as a block, not a centered flex row
 *   stacked     put the pickers under the preview instead of beside it
 */

import {
  createContext,
  createElement as h,
  Fragment,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  AccessGate,
  Accordion,
  AccordionItem,
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  ChangelogEntry,
  CodeBlock,
  CopyButton,
  CtaBanner,
  CursorGlow,
  DataTable,
  DocRail,
  Dropdown,
  FeatureCard,
  FeaturePanel,
  Float,
  Footer,
  GaugeRing,
  GlowPulse,
  GradientBackground,
  Hero,
  IconArrowRight,
  IconArrowsSort,
  IconBolt,
  IconBulb,
  IconCard,
  IconCheck,
  IconChevronDown,
  IconChevronUp,
  IconClipboard,
  IconLock,
  IconMoon,
  IconSparkles,
  IconSpark,
  IconSun,
  InlineCode,
  Legend,
  Lightning,
  LiquidFill,
  Nav,
  Phase,
  ProgressBar,
  PulseDot,
  Reveal,
  RoadmapItemCard,
  SearchInput,
  Sheen,
  ShimmerText,
  Skeleton,
  Sparkle,
  Spinner,
  StepNumber,
  Stepper,
  Switch,
  TabPanel,
  TabPanels,
  Tabs,
  Timeline,
  Tooltip,
  designTokens,
  useToast,
} from '../dist/index.js';

/* ------------------------------------------------------------------ *
 * descriptor plumbing
 * ------------------------------------------------------------------ */

/** Tag name -> real component, for descriptors. */
export const COMPONENTS = {
  AccessGate,
  Accordion,
  AccordionItem,
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  ChangelogEntry,
  CodeBlock,
  CopyButton,
  CtaBanner,
  CursorGlow,
  DataTable,
  DocRail,
  Dropdown,
  FeatureCard,
  FeaturePanel,
  Float,
  Footer,
  GaugeRing,
  GlowPulse,
  GradientBackground,
  Hero,
  IconArrowRight,
  IconArrowsSort,
  IconBolt,
  IconBulb,
  IconCard,
  IconCheck,
  IconChevronDown,
  IconChevronUp,
  IconClipboard,
  IconLock,
  IconMoon,
  IconSparkles,
  IconSpark,
  IconSun,
  InlineCode,
  Legend,
  Lightning,
  LiquidFill,
  Nav,
  Phase,
  ProgressBar,
  PulseDot,
  Reveal,
  RoadmapItemCard,
  SearchInput,
  Sheen,
  ShimmerText,
  Skeleton,
  Sparkle,
  Spinner,
  StepNumber,
  Stepper,
  Switch,
  TabPanel,
  TabPanels,
  Tabs,
  Timeline,
  Tooltip,
};

/**
 * A prop whose snippet form is an expression rather than a literal:
 * `raw('columns', columns)` renders with `columns` and prints `{columns}`.
 */
export const raw = (expr, value) => ({ __raw: true, expr, value });

/** A prop the preview needs but the snippet should not show (docs sizing). */
export const hidden = (value) => ({ __raw: true, expr: null, value });

export const ACCENTS = Object.keys(designTokens.color.accent);

export function titleize(value) {
  return String(value)
    .replace(/-/g, ' ')
    .replace(/^./, (c) => c.toUpperCase());
}

/** `opts('a','b')` -> `[{value:'a',label:'A'},…]`. */
export const opts = (...values) =>
  values.map((value) => ({ value: String(value), label: titleize(value) }));

/** A two-state axis, rendered as a real `Switch`. */
export const bool = (label, prop, offLabel = 'Off', onLabel = 'On') => ({
  label,
  prop,
  type: 'boolean',
  options: [
    { value: 'off', label: offLabel },
    { value: 'on', label: onLabel },
  ],
});

/** The seven accents as a swatched `Dropdown` axis. */
export const accentGroup = (label, prop, withNone = false) => ({
  label,
  prop,
  options: [
    ...(withNone ? [{ value: 'none', label: 'None' }] : []),
    ...ACCENTS.map((accent) => ({
      value: accent,
      label: titleize(accent),
      swatch: designTokens.color.accent[accent],
    })),
  ],
});

const on = (value) => value === 'on';
const orUndef = (value) => (value === 'none' ? undefined : value);

/* ------------------------------------------------------------------ *
 * descriptor -> React
 * ------------------------------------------------------------------ */

/** A descriptor is any plain object carrying a `t` (tag) field. */
function isDescriptor(value) {
  return (
    value != null &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    typeof value.t === 'string'
  );
}

function resolveProps(props) {
  const out = {};
  for (const [key, value] of Object.entries(props ?? {})) {
    if (value === undefined || value === null) continue;
    if (value.__raw === true) {
      out[key] = value.value;
    } else if (isDescriptor(value)) {
      // A prop whose value is itself an element (Alert icon, IconCard footer).
      out[key] = resolve(value);
    } else {
      out[key] = value;
    }
  }
  return out;
}

export function resolve(node, key) {
  if (node == null || typeof node === 'string' || typeof node === 'number') {
    return node;
  }
  if (Array.isArray(node)) {
    return node.map((child, index) => resolve(child, index));
  }
  const type = COMPONENTS[node.t] ?? node.t;
  const props = resolveProps(node.p);
  if (key != null) props.key = key;
  const children = node.c == null ? undefined : resolve(node.c);
  return children === undefined ? h(type, props) : h(type, props, children);
}

/* ------------------------------------------------------------------ *
 * descriptor -> JSX source
 * ------------------------------------------------------------------ */

/** A descriptor collapsed onto one line, for use inside a prop. */
function jsxInline(node) {
  if (node == null) return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(jsxInline).join('');

  const attrs = Object.entries(node.p ?? {})
    .map(([name, value]) => formatProp(name, value))
    .filter(Boolean)
    .join(' ');
  const open = `<${node.t}${attrs ? ` ${attrs}` : ''}`;
  return node.c == null
    ? `${open} />`
    : `${open}>${jsxInline(node.c)}</${node.t}>`;
}

function formatProp(name, value) {
  if (value === undefined || value === null) return null;
  if (value.__raw === true) {
    return value.expr == null ? null : `${name}={${value.expr}}`;
  }
  if (typeof value === 'string') return `${name}="${value}"`;
  if (typeof value === 'boolean') return value ? name : `${name}={false}`;
  if (typeof value === 'number') return `${name}={${value}}`;
  if (isDescriptor(value)) return `${name}={${jsxInline(value)}}`;
  return `${name}={${JSON.stringify(value)}}`;
}

function jsxOf(node, indent = '') {
  if (node == null) return '';
  if (typeof node === 'string' || typeof node === 'number') {
    return `${indent}${node}`;
  }
  if (Array.isArray(node)) {
    const inner = node
      .map((child) => jsxOf(child, `${indent}  `))
      .filter(Boolean)
      .join('\n');
    return `${indent}<>\n${inner}\n${indent}</>`;
  }

  const attrs = Object.entries(node.p ?? {})
    .map(([name, value]) => formatProp(name, value))
    .filter(Boolean);

  const oneLine = attrs.length > 0 ? ` ${attrs.join(' ')}` : '';
  const openInline = `${indent}<${node.t}${oneLine}`;
  const wide = openInline.length > 68;

  const open = wide
    ? `${indent}<${node.t}\n${attrs
        .map((attr) => `${indent}  ${attr}`)
        .join('\n')}\n${indent}`
    : openInline;

  if (node.c == null) return `${open}${wide ? '/>' : ' />'}`;

  const children = jsxOf(node.c, `${indent}  `);
  return `${open}>\n${children}\n${indent}</${node.t}>`;
}

function collectNames(node, into) {
  if (node == null || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    node.forEach((child) => collectNames(child, into));
    return;
  }
  if (typeof node.t === 'string' && /^[A-Z]/.test(node.t)) into.add(node.t);
  // Element-valued props count too - IconCard's `footer`, Alert's `icon`.
  Object.values(node.p ?? {}).forEach((value) => {
    if (isDescriptor(value)) collectNames(value, into);
  });
  collectNames(node.c, into);
}

/** The snippet shown in a card's code panel, for the current picker state. */
export function buildCode(entry, state) {
  const node = entry.el(state);
  const names = new Set(entry.imports ?? []);
  collectNames(node, names);

  const lines = [];
  if (entry.reactImports?.length) {
    lines.push(`import { ${entry.reactImports.join(', ')} } from 'react';`);
  }
  if (names.size > 0) {
    lines.push(`import { ${[...names].sort().join(', ')} } from 'lynn-ui';`);
  }
  if (entry.hook) lines.push('', entry.hook);
  lines.push('', jsxOf(node));
  return lines.join('\n');
}

/* ------------------------------------------------------------------ *
 * shared demo data
 * ------------------------------------------------------------------ */

const TABLE_COLUMNS = [
  { key: 'name', label: 'Component', sortable: true },
  { key: 'group', label: 'Group', sortable: true },
  { key: 'score', label: 'Coverage', sortable: true, align: 'right' },
];

const TABLE_ROWS = [
  { name: 'Button', group: 'Actions', score: 100 },
  { name: 'DataTable', group: 'Data', score: 82 },
  { name: 'Alert', group: 'Feedback', score: 94 },
  { name: 'Lightning', group: 'Motion', score: 61 },
];

const TABLE_CODE = `const columns = [
  { key: 'name', label: 'Component', sortable: true },
  { key: 'group', label: 'Group', sortable: true },
  { key: 'score', label: 'Coverage', sortable: true, align: 'right' },
];

const rows = [
  { name: 'Button', group: 'Actions', score: 100 },
  { name: 'DataTable', group: 'Data', score: 82 },
  { name: 'Alert', group: 'Feedback', score: 94 },
  { name: 'Lightning', group: 'Motion', score: 61 },
];`;

const LEGEND_ITEMS = [
  {
    swatch: designTokens.color.accent.emerald,
    label: 'Shipped',
    description: 'In the published package',
  },
  {
    swatch: designTokens.color.accent.blue,
    label: 'Active',
    description: 'Being built now',
  },
  {
    swatch: designTokens.color.accent.coral,
    label: 'Blocked',
    description: 'Waiting on a dependency',
  },
];

const LEGEND_CODE = `const items = [
  { swatch: '${designTokens.color.accent.emerald}', label: 'Shipped', description: 'In the published package' },
  { swatch: '${designTokens.color.accent.blue}', label: 'Active', description: 'Being built now' },
  { swatch: '${designTokens.color.accent.coral}', label: 'Blocked', description: 'Waiting on a dependency' },
];`;

const CHANGELOG_GROUPS = [
  {
    label: 'Added',
    tone: 'emerald',
    items: ['Three-mode theming', 'Sheen, Sparkle and GlowPulse'],
  },
  {
    label: 'Changed',
    tone: 'blue',
    items: ['Badge covers every real site status'],
  },
];

const CHANGELOG_CODE = `const groups = [
  { label: 'Added', tone: 'emerald', items: ['Three-mode theming', 'Sheen, Sparkle and GlowPulse'] },
  { label: 'Changed', tone: 'blue', items: ['Badge covers every real site status'] },
];`;

const STEPPER_STEPS = [
  {
    title: 'Install the package',
    children: 'npm install lynn-ui react react-dom',
  },
  {
    title: 'Import the stylesheet',
    children: "import 'lynn-ui/dist/lynn-ui.css';",
  },
  {
    title: 'Wrap the app',
    children: 'Mount <ThemeProvider> once, at the root.',
  },
];

const STEPPER_CODE = `const steps = [
  { title: 'Install the package', children: 'npm install lynn-ui react react-dom' },
  { title: 'Import the stylesheet', children: "import 'lynn-ui/dist/lynn-ui.css';" },
  { title: 'Wrap the app', children: 'Mount <ThemeProvider> once, at the root.' },
];`;

const FOOTER_COLUMNS = [
  {
    title: 'Package',
    links: [
      { label: 'Tokens', href: '#tokens-colors' },
      { label: 'Components', href: '#button' },
    ],
  },
  {
    title: 'Motion',
    links: [
      { label: 'Lightning', href: '#lightning' },
      { label: 'LiquidFill', href: '#liquid-fill' },
    ],
  },
];

const FOOTER_CODE = `const columns = [
  { title: 'Package', links: [{ label: 'Tokens', href: '#tokens-colors' }, { label: 'Components', href: '#button' }] },
  { title: 'Motion', links: [{ label: 'Lightning', href: '#lightning' }, { label: 'LiquidFill', href: '#liquid-fill' }] },
];`;

const RAIL_GROUPS = [
  {
    label: 'Getting started',
    items: [
      { id: 'tokens-colors', label: 'Colors' },
      { id: 'tokens-spacing', label: 'Spacing' },
    ],
  },
];

const DROPDOWN_OPTIONS = ACCENTS.map((accent) => ({
  value: accent,
  label: titleize(accent),
  swatch: designTokens.color.accent[accent],
  section: accent.includes('blue') || accent === 'indigo' ? 'Cool' : 'Warm',
  hint: designTokens.color.accent[accent],
}));

const DROPDOWN_CODE = `const accentOptions = [
${DROPDOWN_OPTIONS.map(
  (option) =>
    `  { value: '${option.value}', label: '${option.label}', swatch: '${option.swatch}', section: '${option.section}' },`
).join('\n')}
];`;

const GRADIENTS = {
  blue: 'linear-gradient(135deg, #3694fc, #025afb)',
  indigo: 'linear-gradient(135deg, #6100ff, #b98fff)',
  emerald: 'linear-gradient(135deg, #00e2a0, #36ead0)',
  coral: 'linear-gradient(135deg, #ff5b8a, #b98fff)',
};

const gradientGroup = (label, prop) => ({
  label,
  prop,
  options: Object.keys(GRADIENTS).map((key) => ({
    value: key,
    label: titleize(key),
    swatch: designTokens.color.accent[key],
  })),
});

/* ------------------------------------------------------------------ *
 * stateful previews
 * ------------------------------------------------------------------ */

/** Lets the DocRail card drive the page's own real rail. */
export const RailContext = createContext({
  collapsed: false,
  setCollapsed: () => {},
});

function SwitchPreview(state) {
  const [checked, setChecked] = useState(true);
  return h(Switch, {
    checked,
    onChange: setChecked,
    label: checked ? 'Magnetic buttons on' : 'Magnetic buttons off',
    size: state.size,
    disabled: on(state.disabled),
  });
}

function TabsPreview(state) {
  const [value, setValue] = useState('preview');
  return h(Tabs, {
    options: opts('preview', 'props', 'a11y'),
    value,
    onChange: setValue,
    variant: state.variant,
    tone: state.tone,
    stretch: on(state.stretch),
    ariaLabel: 'Card view',
  });
}

function TabPanelsPreview(state) {
  const [active, setActive] = useState('overview');
  return h(
    TabPanels,
    {
      tabs: [
        { id: 'overview', label: 'Overview' },
        { id: 'tokens', label: 'Tokens' },
        { id: 'motion', label: 'Motion' },
      ],
      activeId: active,
      onChange: setActive,
      variant: state.variant,
      tone: state.tone,
      bar: on(state.bar),
      stretch: on(state.stretch),
      ariaLabel: 'Docs sections',
    },
    [
      h(TabPanel, { key: 'overview', id: 'overview' }, 'Forty-odd components, one stylesheet.'),
      h(TabPanel, { key: 'tokens', id: 'tokens' }, 'Seven accents, three neutral modes.'),
      h(TabPanel, { key: 'motion', id: 'motion' }, 'One easing curve for every transition.'),
    ]
  );
}

function SearchInputPreview(state) {
  const [value, setValue] = useState('');
  return h(SearchInput, {
    value,
    onChange: setValue,
    placeholder: 'Search components…',
    expandOnFocus: on(state.expandOnFocus),
    disabled: on(state.disabled),
    ariaLabel: 'Search components',
  });
}

function DropdownPreview(state) {
  const [value, setValue] = useState('blue');
  return h(Dropdown, {
    value,
    onChange: setValue,
    options: on(state.swatches)
      ? DROPDOWN_OPTIONS
      : DROPDOWN_OPTIONS.map(({ value: v, label, section }) => ({
          value: v,
          label,
          section,
        })),
    searchable: on(state.searchable),
    sections: on(state.sections),
    placeholder: 'Pick an accent',
    ariaLabel: 'Accent color',
    disabled: on(state.disabled),
  });
}

function ToastPreview(state) {
  const toast = useToast();
  return h(
    Button,
    {
      variant: 'primary',
      onClick: () =>
        toast.show(
          'Component copied to the clipboard',
          state.kind,
          on(state.action)
            ? { label: 'Undo', onClick: () => toast.show('Undone', 'info') }
            : undefined
        ),
    },
    `Show a ${state.kind} toast`
  );
}

function AccessGatePreview() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return h(Fragment, null, [
    h(
      Button,
      { key: 'open', variant: 'primary', onClick: () => setOpen(true) },
      'Show the access gate'
    ),
    h(
      'span',
      { key: 'note', className: 'docs-note' },
      'Full-screen overlay. Code "lynn" unlocks; Escape dismisses.'
    ),
    h(AccessGate, {
      key: 'gate',
      title: 'NiCE Designer Suite',
      subtitle: 'This preview is gated the same way the real site is.',
      unlocked: !open,
      error,
      ctaText: 'No code yet?',
      ctaHref: '#access-gate',
      ctaLinkLabel: 'Request access',
      onSubmit: (code) => {
        if (code.trim().toLowerCase() === 'lynn') {
          setError('');
          setOpen(false);
        } else {
          setError('That code is not recognised.');
        }
      },
    }),
  ]);
}

function DocRailPreview() {
  const { collapsed, setCollapsed } = useContext(RailContext);
  return h(Fragment, null, [
    h(
      Button,
      {
        key: 'toggle',
        variant: 'secondary',
        onClick: () => setCollapsed(!collapsed),
      },
      collapsed ? 'Expand this page’s rail' : 'Collapse this page’s rail'
    ),
    h(
      'span',
      { key: 'state', className: 'docs-note' },
      `collapsed = ${collapsed}`
    ),
  ]);
}

function RevealPreview(state) {
  const [nonce, setNonce] = useState(0);
  const count = Number(state.count);
  return h(Fragment, null, [
    h(
      Button,
      { key: 'replay', variant: 'ghost', onClick: () => setNonce(nonce + 1) },
      'Replay the entrance'
    ),
    h(
      'div',
      { key: 'stack', style: { display: 'grid', gap: 10, width: '100%' } },
      Array.from({ length: count }, (_unused, index) =>
        h(
          Reveal,
          { key: `${nonce}-${index}`, index, once: on(state.once) },
          h(
            Card,
            { interactive: false, accent: 'blue' },
            `index={${index}} - staggered by ${index * 80}ms`
          )
        )
      )
    ),
  ]);
}

function CursorGlowPreview(state) {
  return h(Fragment, null, [
    h(CursorGlow, {
      key: 'glow',
      enabled: on(state.enabled),
      size: Number(state.size),
    }),
    h(
      'span',
      { key: 'note', className: 'docs-note' },
      on(state.enabled)
        ? `A ${state.size}px screen-blended glow is following the pointer anywhere on this page.`
        : 'Disabled: the component renders nothing at all.'
    ),
  ]);
}

/* ------------------------------------------------------------------ *
 * the registry
 * ------------------------------------------------------------------ */

export const TOKEN_ITEMS = [
  { id: 'tokens-colors', label: 'Colors' },
  { id: 'tokens-typography', label: 'Typography' },
  { id: 'tokens-spacing', label: 'Spacing' },
  { id: 'tokens-radius', label: 'Radius' },
  { id: 'tokens-motion', label: 'Motion' },
];

export const GROUPS = [
  /* ---------------------------------------------------------- Actions */
  {
    label: 'Actions',
    entries: [
      {
        id: 'button',
        name: 'Button',
        description:
          'The site’s three real button shapes, with the optional magnetic pull that follows the pointer.',
        usage:
          'pass `magnetic` only to override the per-variant default - it’s on for `primary` and off for `secondary` and `ghost`.',
        dont:
          'treat `loading` and `disabled` as independent - `loading` disables on top of `disabled`, and it replaces the `icon` with a `Spinner`.',
        groups: [
          { label: 'Variant', prop: 'variant', options: opts('primary', 'secondary', 'ghost') },
          { label: 'State', prop: 'state', options: opts('default', 'disabled') },
          { label: 'Icon', prop: 'icon', options: [{ value: 'none', label: 'None' }, { value: 'arrow', label: 'Arrow' }] },
          bool('Magnetic', 'magnetic', 'Off', 'On'),
          bool('Glow', 'glow', 'Off', 'Neon'),
        ],
        defaults: { variant: 'primary', state: 'default', icon: 'none', magnetic: 'off', glow: 'off' },
        el: (s) => ({
          t: 'Button',
          p: {
            variant: s.variant,
            disabled: s.state === 'disabled' || undefined,
            icon: s.icon === 'arrow' ? { t: 'IconArrowRight', p: { size: 16 } } : undefined,
            // `magnetic` has a per-variant default (on for primary), unlike
            // every other boolean prop here - `undefined` would mean "use
            // that default," silently no-opping the "Off" state for primary
            // buttons. This one needs a real boolean both ways.
            magnetic: on(s.magnetic),
            glow: on(s.glow) || undefined,
          },
          c: 'Get started',
        }),
      },
      {
        id: 'switch',
        name: 'Switch',
        description:
          'A real `role="switch"` control - the plugin’s toggle pill, keyboard operable with Space and Enter.',
        usage:
          'prefer a visible `label` - it’s clickable along with the track and becomes the accessible name, so no `ariaLabel` is needed.',
        dont:
          'pass `label` and `ariaLabel` together - `ariaLabel` wins, and the visible text quietly stops being the control’s name.',
        groups: [
          { label: 'Size', prop: 'size', options: opts('sm', 'md') },
          bool('State', 'disabled', 'Enabled', 'Disabled'),
        ],
        defaults: { size: 'md', disabled: 'off' },
        Preview: SwitchPreview,
        reactImports: ['useState'],
        hook: 'const [checked, setChecked] = useState(true);',
        el: (s) => ({
          t: 'Switch',
          p: {
            checked: raw('checked'),
            onChange: raw('setChecked'),
            label: 'Magnetic buttons',
            size: s.size,
            disabled: on(s.disabled) || undefined,
          },
        }),
      },
      {
        id: 'tabs',
        name: 'Tabs',
        description:
          'The segmented control every picker on this page is built from, in the plugin’s three real shapes.',
        usage:
          'use it bare for a filter row or a segmented setting, and `TabPanels` when the choice reveals content.',
        dont:
          'pass a `value` that matches no option - nothing is active, so every segment drops to `tabIndex={-1}` and the group leaves the tab order.',
        groups: [
          { label: 'Variant', prop: 'variant', options: opts('pill', 'elevated', 'underline') },
          accentGroup('Tone', 'tone'),
          bool('Stretch', 'stretch', 'Intrinsic', 'Full width'),
        ],
        defaults: { variant: 'pill', tone: 'blue', stretch: 'off' },
        Preview: TabsPreview,
        reactImports: ['useState'],
        hook: "const [value, setValue] = useState('preview');",
        el: (s) => ({
          t: 'Tabs',
          p: {
            options: raw("[{ value: 'preview' }, { value: 'props' }, { value: 'a11y' }]"),
            value: raw('value'),
            onChange: raw('setValue'),
            variant: s.variant,
            tone: s.tone,
            stretch: on(s.stretch) || undefined,
            ariaLabel: 'Card view',
          },
        }),
      },
    ],
  },

  /* --------------------------------------------------------- Feedback */
  {
    label: 'Feedback',
    entries: [
      {
        id: 'alert',
        name: 'Alert',
        description:
          'The callout the site re-implemented eight separate times, in one component with five real variants.',
        usage:
          'pick the `variant` by intent rather than hue - `warning` is teal here because Lynn has no amber.',
        dont:
          'use it for a transient confirmation - it has no dismiss, no timer and no live region; that is what `useToast()` is for.',
        groups: [
          { label: 'Variant', prop: 'variant', options: opts('info', 'success', 'warning', 'danger', 'purple') },
          bool('Title', 'title', 'None', 'With title'),
          bool('Density', 'compact', 'Default', 'Compact'),
        ],
        defaults: { variant: 'info', title: 'on', compact: 'off' },
        block: true,
        el: (s) => ({
          t: 'Alert',
          p: {
            variant: s.variant,
            icon: { t: 'IconBulb', p: { size: 16 } },
            title: on(s.title) ? 'Import the stylesheet once' : undefined,
            compact: on(s.compact) || undefined,
          },
          c: 'Every component reads its color from the same --lynn-color-* tokens.',
        }),
      },
      {
        id: 'badge',
        name: 'Badge',
        description:
          'Accent-toned pills and the thirteen real status pills the site uses across roadmap, tools and scoring pages.',
        usage:
          'reach for `status` when the label is one of the thirteen real site states, and `tone` for anything else.',
        dont:
          'pass `status` and `tone` together - `status` wins and silently drops both `tone` and `bordered`.',
        groups: [
          accentGroup('Tone', 'tone'),
          {
            label: 'Status (overrides tone)',
            prop: 'status',
            options: [
              { value: 'none', label: 'None' },
              ...opts(
                'active',
                'shipped',
                'next',
                'planned',
                'new',
                'dropped',
                'great',
                'good',
                'ok',
                'bad',
                'beta',
                'recommended',
                'optional'
              ),
            ],
          },
          bool('Border', 'bordered', 'Filled', 'Bordered'),
          bool('Icon', 'icon', 'None', 'With icon'),
        ],
        defaults: { tone: 'lynn', status: 'none', bordered: 'off', icon: 'off' },
        el: (s) => ({
          t: 'Badge',
          p: {
            tone: s.status === 'none' ? s.tone : undefined,
            status: orUndef(s.status),
            bordered: on(s.bordered) || undefined,
            icon: on(s.icon) ? { t: 'IconBolt', p: { size: 12 } } : undefined,
          },
          c: s.status === 'none' ? titleize(s.tone) : titleize(s.status),
        }),
      },
      {
        id: 'toast',
        name: 'Toast',
        description:
          'One active toast in a fixed bottom bar, fired from anywhere through `useToast()`. Needs a `ToastViewport` at the root.',
        usage:
          'mount one `ToastViewport` at the app root, then call `toast.show()` from anywhere - the slot is module-level.',
        dont:
          'expect a stack - there is exactly one active toast, so a second `show()` replaces the first mid-read.',
        groups: [
          { label: 'Kind', prop: 'kind', options: opts('success', 'error', 'info') },
          bool('Action', 'action', 'None', 'With undo'),
        ],
        defaults: { kind: 'success', action: 'off' },
        Preview: ToastPreview,
        imports: ['ToastViewport', 'useToast'],
        hook: 'const toast = useToast(); // <ToastViewport /> is mounted at the app root',
        el: (s) => ({
          t: 'Button',
          p: {
            variant: 'primary',
            onClick: raw(
              on(s.action)
                ? `() =>\n  toast.show('Copied', '${s.kind}', {\n    label: 'Undo',\n    onClick: () => toast.show('Undone', 'info'),\n  })`
                : `() => toast.show('Copied', '${s.kind}')`
            ),
          },
          c: 'Copy',
        }),
      },
      {
        id: 'spinner',
        name: 'Spinner',
        description: 'The plugin’s bordered-ring spinner, in three sizes and both contrast tones.',
        usage:
          '`tone` describes the ground the spinner sits on, not the active theme, so it does not change when the toggle moves.',
        dont:
          'leave the default `ariaLabel` on a spinner already inside a labeled busy region - pass `ariaLabel={null}` instead.',
        groups: [
          { label: 'Size', prop: 'size', options: opts('sm', 'md', 'lg') },
          { label: 'Tone', prop: 'tone', options: opts('light', 'dark') },
        ],
        defaults: { size: 'md', tone: 'light' },
        el: (s) => ({ t: 'Spinner', p: { size: s.size, tone: s.tone, ariaLabel: 'Loading' } }),
      },
      {
        id: 'progress-bar',
        name: 'ProgressBar',
        description: 'The linear determinate bar, plus the indeterminate sweep for work of unknown length.',
        usage:
          'pass `ariaLabel` whenever there is no visible `label` - the `role="progressbar"` sits on the track, not on the wrapper.',
        dont:
          'pass `value` alongside `indeterminate` - the width and all three `aria-value*` attributes are dropped.',
        groups: [
          { label: 'Value', prop: 'value', options: opts(0, 35, 70, 100) },
          accentGroup('Tone', 'tone'),
          bool('Mode', 'indeterminate', 'Determinate', 'Indeterminate'),
          bool('Label', 'label', 'None', 'With label'),
        ],
        defaults: { value: '70', tone: 'blue', indeterminate: 'off', label: 'on' },
        block: true,
        el: (s) => ({
          t: 'ProgressBar',
          p: {
            value: on(s.indeterminate) ? undefined : Number(s.value),
            tone: s.tone,
            indeterminate: on(s.indeterminate) || undefined,
            label: on(s.label) ? 'Building the stylesheet' : undefined,
            ariaLabel: 'Build progress',
          },
        }),
      },
      {
        id: 'gauge-ring',
        name: 'GaugeRing',
        description: 'The radial score gauge, an animated `stroke-dashoffset` arc over a track ring.',
        usage:
          'set `size` and let `thickness` derive from it (`size / 11`), and use `format` when the raw count beats a percentage.',
        dont:
          'drive `value` from a ticking counter expecting the arc to follow - the fill-from-empty transition runs once, on mount.',
        groups: [
          { label: 'Value', prop: 'value', options: opts(12, 48, 86, 100) },
          accentGroup('Tone', 'tone'),
          { label: 'Size', prop: 'size', options: opts(72, 104, 140) },
        ],
        defaults: { value: '86', tone: 'emerald', size: '104' },
        el: (s) => ({
          t: 'GaugeRing',
          p: {
            value: Number(s.value),
            tone: s.tone,
            size: Number(s.size),
            label: 'Coverage',
            ariaLabel: 'Coverage score',
          },
        }),
      },
      {
        id: 'skeleton',
        name: 'Skeleton',
        description: 'The loading placeholder from the NiCE Designer plugin: shimmering rows, 1.4s linear.',
        usage:
          'render it immediately, with `rows` set to the count you expect, so the layout does not jump when the real rows land.',
        dont:
          'use it as an empty state - the whole block is `aria-hidden`, so a screen reader hears nothing at all.',
        groups: [
          { label: 'Rows', prop: 'rows', options: opts(2, 3, 5) },
          bool('Density', 'compact', 'Default', 'Compact'),
        ],
        defaults: { rows: '3', compact: 'off' },
        block: true,
        el: (s) => ({
          t: 'Skeleton',
          p: { rows: Number(s.rows), compact: on(s.compact) || undefined },
        }),
      },
      {
        id: 'tooltip',
        name: 'Tooltip',
        description:
          'A CSS-only bubble fed by a `data-lynn-tooltip` attribute - no portal, no positioning pass. The attribute is cloned onto a single element child, so the target must be one that forwards unknown props (a DOM element); anything else, including plain text, gets the keyboard-reachable wrapper span shown here.',
        usage:
          'give it a single focusable DOM element - the attributes clone onto it, so the bubble appears on keyboard focus for free.',
        dont:
          'wrap a lynn-ui component - `data-lynn-tooltip` arrives as a prop none of them forward to the DOM, so no bubble appears.',
        groups: [{ label: 'Side', prop: 'side', options: opts('bottom', 'right') }],
        defaults: { side: 'bottom' },
        el: (s) => ({
          t: 'Tooltip',
          p: { label: 'Shows on hover and on keyboard focus', side: s.side },
          c: 'Hover or focus me',
        }),
      },
    ],
  },

  /* ----------------------------------------------------------- Layout */
  {
    label: 'Layout',
    entries: [
      {
        id: 'card',
        name: 'Card',
        description:
          'The base surface: a 2px accent strip, a hover lift, and the pointer-tracking tilt and spotlight.',
        usage:
          'pass `interactive` only where the card has mouse-move room - the tilt and spotlight look wrong packed edge-to-edge in a dense grid.',
        dont:
          'treat `onClick` as making it a button - it is a plain `div` with no role, `tabIndex` or key handling, so put a real `Button` inside.',
        groups: [
          { label: 'Variant', prop: 'variant', options: opts('solid', 'glass') },
          accentGroup('Accent', 'accent', true),
          bool('Interactive', 'interactive', 'Static', 'Tilt + spotlight'),
        ],
        defaults: { variant: 'solid', accent: 'blue', interactive: 'on' },
        block: true,
        el: (s) => ({
          t: 'Card',
          p: {
            variant: s.variant,
            accent: orUndef(s.accent),
            interactive: on(s.interactive),
          },
          c: 'Move the pointer across this card: it tilts toward the cursor and a 220px spotlight follows it.',
        }),
      },
      {
        id: 'feature-card',
        name: 'FeatureCard',
        description:
          'The rich icon-tile card used verbatim on the-suite, roadmap and the home page, at two densities.',
        usage:
          'build `iconGradient` and `accentColor` out of `designTokens.color.accent[...]`, and keep the two in one accent family.',
        dont:
          'pass `statusVariant` without `status` - the footer badge only renders when there is a label, so the variant alone is a no-op.',
        groups: [
          { label: 'Density', prop: 'density', options: opts('full', 'compact') },
          gradientGroup('Icon gradient', 'gradient'),
          { label: 'Status', prop: 'status', options: [{ value: 'none', label: 'None' }, ...opts('shipped', 'active', 'beta', 'planned')] },
          bool('Why text', 'why', 'Hidden', 'Shown'),
          bool('Bullets', 'bullets', 'Hidden', 'Shown'),
          bool('Tags', 'tags', 'Hidden', 'Shown'),
        ],
        defaults: {
          density: 'full',
          gradient: 'indigo',
          status: 'shipped',
          why: 'on',
          bullets: 'on',
          tags: 'on',
        },
        block: true,
        el: (s) => ({
          t: 'FeatureCard',
          p: {
            icon: { t: 'IconSparkles', p: { size: 22 } },
            iconGradient: GRADIENTS[s.gradient],
            name: 'lynn-ui',
            tagline: 'The design system as a real package',
            whyText: on(s.why)
              ? 'Because eight hand-rolled copies of the same callout is eight chances to drift.'
              : undefined,
            bullets: on(s.bullets)
              ? raw("['Forty-odd components', 'Three theme modes', 'One stylesheet']", [
                  'Forty-odd components',
                  'Three theme modes',
                  'One stylesheet',
                ])
              : undefined,
            tags: on(s.tags)
              ? raw("['React', 'TypeScript']", ['React', 'TypeScript'])
              : undefined,
            status: orUndef(s.status) ? titleize(s.status) : undefined,
            statusVariant: orUndef(s.status),
            accentColor: designTokens.color.accent[s.gradient],
            density: s.density,
          },
        }),
      },
      {
        id: 'icon-card',
        name: 'IconCard',
        description:
          'The consolidated "icon + title + description" tile behind six near-duplicates on the site.',
        usage:
          '`vertical` for a pillar grid, `horizontal` for a list row, with a `Badge` or a small link in the `footer` slot.',
        dont:
          'let the `icon` carry meaning on its own - that span is `aria-hidden`, so it has to be repeated in `title` or `description`.',
        groups: [
          { label: 'Layout', prop: 'layout', options: opts('vertical', 'horizontal') },
          bool('Footer', 'footer', 'None', 'With badge'),
        ],
        defaults: { layout: 'vertical', footer: 'on' },
        block: true,
        el: (s) => ({
          t: 'IconCard',
          p: {
            icon: { t: 'IconSpark', p: { size: 20 } },
            title: 'One token set',
            description:
              'Seven accents and one neutral scale, redefined per theme mode and read by every component.',
            layout: s.layout,
            footer: on(s.footer)
              ? { t: 'Badge', p: { tone: 'emerald', bordered: true }, c: 'Stable' }
              : undefined,
          },
        }),
      },
      {
        id: 'cta-banner',
        name: 'CtaBanner',
        description: 'The repeated gradient promo strip from marketplace, the-suite and the home page.',
        usage:
          '`variant` also picks the CTA’s default weight (`primary` for gradient, `secondary` for tinted), so `ctaVariant` is only for breaking that pairing.',
        dont:
          'set `ctaTarget="_blank"` and also pass a `ctaRel` without `noopener` - the safe default only applies while `ctaRel` is unset.',
        groups: [
          { label: 'Variant', prop: 'variant', options: opts('gradient', 'tinted') },
          { label: 'CTA variant', prop: 'ctaVariant', options: opts('primary', 'secondary', 'ghost') },
          bool('CTA icon', 'ctaIcon', 'None', 'Arrow'),
        ],
        defaults: { variant: 'gradient', ctaVariant: 'primary', ctaIcon: 'on' },
        block: true,
        el: (s) => ({
          t: 'CtaBanner',
          p: {
            text: 'Forty-odd components, three theme modes, one stylesheet.',
            ctaLabel: 'Read the docs',
            ctaHref: '#button',
            variant: s.variant,
            ctaVariant: s.ctaVariant,
            ctaIcon: on(s.ctaIcon) ? { t: 'IconArrowRight', p: { size: 16 } } : undefined,
          },
        }),
      },
      {
        id: 'feature-panel',
        name: 'FeaturePanel',
        description: 'The large narrative walkthrough panel from wings-2026, with its own action row.',
        usage:
          'let the `actions` row be the hand-off - the first action defaults to `primary` and every one after it to `secondary`.',
        dont:
          'put a custom control in `actions` - it takes `FeaturePanelAction` data, not nodes, so that every action is a real `Button`; use `children`.',
        groups: [
          gradientGroup('Accent', 'gradient'),
          bool('Badge', 'badge', 'None', 'With badge'),
          { label: 'Actions', prop: 'actions', options: opts(1, 2) },
        ],
        defaults: { gradient: 'blue', badge: 'on', actions: '2' },
        block: true,
        el: (s) => ({
          t: 'FeaturePanel',
          p: {
            badge: on(s.badge) ? 'Wings 2026' : undefined,
            heading: 'A design system you can actually import',
            body: 'Every pattern on the marketing site, ported once, typed, themed and documented here.',
            accentGradient: GRADIENTS[s.gradient],
            actions:
              s.actions === '2'
                ? raw(
                    "[\n  { label: 'Get started', href: '#button' },\n  { label: 'Tokens', href: '#tokens-colors', variant: 'secondary' },\n]",
                    [
                      { label: 'Get started', href: '#button' },
                      { label: 'Tokens', href: '#tokens-colors', variant: 'secondary' },
                    ]
                  )
                : raw("[{ label: 'Get started', href: '#button' }]", [
                    { label: 'Get started', href: '#button' },
                  ]),
          },
        }),
      },
    ],
  },

  /* ------------------------------------------------------- Navigation */
  {
    label: 'Navigation',
    entries: [
      {
        id: 'nav',
        name: 'Nav',
        description:
          'The 60px sticky bar with one CTA slot. The header of this page is a real `Nav` with the `ThemeToggle` as its CTA.',
        usage:
          'one per page, first in the tree, with a `Button`, a `ThemeToggle` or a `SearchInput` in its single `cta` slot.',
        groups: [
          bool('Auto-hide', 'autoHide', 'Off', 'Hide on scroll down'),
          bool('CTA', 'cta', 'None', 'With button'),
        ],
        defaults: { autoHide: 'off', cta: 'on' },
        block: true,
        el: (s) => ({
          t: 'Nav',
          p: {
            autoHide: on(s.autoHide),
            logoHref: '#nav',
            cta: on(s.cta)
              ? { t: 'Button', p: { variant: 'primary' }, c: 'Download' }
              : undefined,
          },
        }),
      },
      {
        id: 'footer',
        name: 'Footer',
        description: 'The three-column link grid that closes every page on the site.',
        usage:
          'write each column `title` as a real grouping label - they render visually hidden, for screen readers only.',
        dont:
          'ship the default `columns` outside this site - they are the marketing site’s own relative `./*.html` paths.',
        groups: [bool('Columns', 'custom', 'Site default', 'Custom')],
        defaults: { custom: 'off' },
        block: true,
        hook: FOOTER_CODE,
        el: (s) => ({
          t: 'Footer',
          p: { columns: on(s.custom) ? raw('columns', FOOTER_COLUMNS) : undefined },
        }),
      },
      {
        id: 'doc-rail',
        name: 'DocRail',
        description:
          'The fixed 220px glass sidebar with scroll-warmth highlighting. The rail on the left of this page is a real `DocRail` in `sections` mode - these buttons drive its controlled `collapsed` prop.',
        usage:
          'pass `collapsed` plus `onToggle` to control it from outside, or pass neither and let the rail track its own state.',
        dont:
          'mount two on one page - it is `position: fixed` at 220px wide, so the second one lands exactly on top of the first.',
        groups: [],
        defaults: {},
        Preview: DocRailPreview,
        reactImports: ['useState'],
        hook: 'const [collapsed, setCollapsed] = useState(false);',
        el: () => ({
          t: 'DocRail',
          p: {
            mode: 'sections',
            groups: raw('groups', RAIL_GROUPS),
            collapsed: raw('collapsed'),
            onToggle: raw('setCollapsed'),
            searchable: true,
          },
        }),
      },
      {
        id: 'access-gate',
        name: 'AccessGate',
        description:
          'The site-wide login overlay, one component instead of the two drifted copies in site-gate.js and roadmap.html.',
        usage:
          'compare inside `onSubmit`, which hands you the code already trimmed and lower-cased, and set `error` to reject it.',
        dont:
          'assume it is a modal beyond the markup - it sets `role="dialog"` and `aria-modal` but owns no focus trap and no Escape handler.',
        groups: [],
        defaults: {},
        Preview: AccessGatePreview,
        reactImports: ['useState'],
        hook: 'const [unlocked, setUnlocked] = useState(false);',
        el: () => ({
          t: 'AccessGate',
          p: {
            title: 'NiCE Designer Suite',
            subtitle: 'Enter your access code to continue.',
            unlocked: raw('unlocked'),
            onSubmit: raw('check'),
            ctaText: 'No code yet?',
            ctaHref: '/request-access',
            ctaLinkLabel: 'Request access',
          },
        }),
      },
    ],
  },

  /* ------------------------------------------------------------- Data */
  {
    label: 'Data',
    entries: [
      {
        id: 'data-table',
        name: 'DataTable',
        description:
          'The dashboard’s sortable table. Click a header to sort; the pickers set the initial sort and the empty state.',
        usage:
          'return `undefined` from `renderCell` to fall through to the default, and pass `rowKey` as soon as the caller reorders `rows`.',
        dont:
          'treat `defaultSort` as controlled - it seeds the sort state once on mount, so changing it later does nothing without a remount.',
        groups: [
          { label: 'Sort column', prop: 'key', options: opts('name', 'group', 'score') },
          { label: 'Direction', prop: 'direction', options: opts('asc', 'desc') },
          bool('Rows', 'empty', 'Four rows', 'Empty'),
        ],
        defaults: { key: 'score', direction: 'desc', empty: 'off' },
        block: true,
        hook: TABLE_CODE,
        el: (s) => ({
          t: 'DataTable',
          p: {
            columns: raw('columns', TABLE_COLUMNS),
            rows: on(s.empty) ? raw('[]', []) : raw('rows', TABLE_ROWS),
            defaultSort: raw(`{ key: '${s.key}', direction: '${s.direction}' }`, {
              key: s.key,
              direction: s.direction,
            }),
            emptyText: 'Nothing to show yet',
            ariaLabel: 'Component coverage',
          },
        }),
      },
      {
        id: 'legend',
        name: 'Legend',
        description: 'The plugin’s swatch-row legend, as dots or filled pills.',
        usage:
          'feed `item.swatch` the same `designTokens.color.accent[...]` value the real element uses, or the key stops matching what it keys.',
        dont:
          'set `item.description` on the `dot` variant - only `pill` renders one, so the text disappears with no warning.',
        groups: [
          { label: 'Variant', prop: 'variant', options: opts('dot', 'pill') },
          bool('Label', 'label', 'None', 'With label'),
        ],
        defaults: { variant: 'dot', label: 'on' },
        block: true,
        hook: LEGEND_CODE,
        el: (s) => ({
          t: 'Legend',
          p: {
            items: raw('items', LEGEND_ITEMS),
            variant: s.variant,
            label: on(s.label) ? 'Status' : undefined,
          },
        }),
      },
      {
        id: 'avatar',
        name: 'Avatar',
        description: 'Initials in a circle, at the three sizes the roadmap actually uses.',
        usage:
          'pass `ariaLabel` with the full name whenever the initials stand for a person - it stops a screen reader spelling them out.',
        dont:
          'pass more than two characters - all three sizes are fixed discs with no overflow handling, so a third letter clips.',
        groups: [
          { label: 'Size', prop: 'size', options: opts('xs', 'sm', 'lg') },
          bool('Fill', 'gradient', 'Flat', 'Gradient'),
        ],
        defaults: { size: 'lg', gradient: 'on' },
        el: (s) => ({
          t: 'Avatar',
          p: {
            initials: 'EM',
            size: s.size,
            gradient: on(s.gradient) || undefined,
            ariaLabel: 'Erick Mathews',
          },
        }),
      },
      {
        id: 'timeline',
        name: 'Timeline',
        description:
          'The roadmap’s vertical phase timeline: `Timeline` > `Phase` > `RoadmapItemCard`.',
        usage:
          '`Phase.status` drives both the dot’s color and whether it pulses - 2s for `active`, 2.5s for `next`, static otherwise.',
        dont:
          'write “Requires:” into `Phase.dependency` - the component already renders that prefix, so you get it twice.',
        groups: [
          { label: 'Phase status', prop: 'status', options: opts('shipped', 'active', 'next', 'future') },
          bool('Highlight item', 'highlight', 'Off', 'On'),
        ],
        defaults: { status: 'active', highlight: 'on' },
        block: true,
        el: (s) => ({
          t: 'Timeline',
          c: {
            t: 'Phase',
            p: {
              status: s.status,
              title: 'Phase 2 - the component package',
              period: 'Q3 2026',
              description: 'Every site pattern ported into lynn-ui, typed and themed.',
              dependency: 'Phase 1 sign-off',
            },
            c: {
              t: 'RoadmapItemCard',
              p: {
                name: 'Playground docs',
                description: 'A registry-driven page with a live preview per component.',
                status: 'Active',
                statusVariant: 'active',
                tags: raw("['Docs', 'React']", ['Docs', 'React']),
                accentColor: designTokens.color.accent.blue,
                highlight: on(s.highlight) || undefined,
              },
            },
          },
        }),
      },
      {
        id: 'stepper',
        name: 'Stepper',
        description: 'The install-guide’s numbered stepper, vertical or horizontal.',
        usage:
          'each step’s `children` is its card body, and giving a step an `id` lets a `DocRail` link jump straight to it.',
        dont:
          'look for a size lever - the badge is hard-coded to `StepNumber size="lg"`, so a tighter numbered list wants `StepNumber` directly.',
        groups: [
          { label: 'Orientation', prop: 'orientation', options: opts('vertical', 'horizontal') },
          accentGroup('Color', 'color'),
        ],
        defaults: { orientation: 'vertical', color: 'blue' },
        block: true,
        hook: STEPPER_CODE,
        el: (s) => ({
          t: 'Stepper',
          p: {
            steps: raw('steps', STEPPER_STEPS),
            orientation: s.orientation,
            color: s.color,
          },
        }),
      },
      {
        id: 'step-number',
        name: 'StepNumber',
        description: 'The numbered-circle atom shared by the stepper and five list patterns site-wide.',
        usage:
          'the defaults reproduce install-guide’s real badge; drop to `tint` at the smaller sizes for the inline numbered lists.',
        dont:
          'let it be the only place the order lives - the span is `aria-hidden`, so the sequence needs an `<ol>` or the step title.',
        groups: [
          { label: 'Size', prop: 'size', options: opts('xs', 'sm', 'md', 'lg') },
          { label: 'Fill', prop: 'fill', options: opts('gradient', 'tint', 'solid') },
          accentGroup('Color', 'color'),
        ],
        defaults: { size: 'md', fill: 'gradient', color: 'indigo' },
        el: (s) => ({
          t: 'StepNumber',
          p: { n: 3, size: s.size, fill: s.fill, color: s.color },
        }),
      },
      {
        id: 'changelog-entry',
        name: 'ChangelogEntry',
        description:
          'The release-notes version card: the latest entry stays open, older ones collapse.',
        usage:
          'exactly one entry in a list carries `isLatest`, and that form renders expanded with no toggle at all.',
        dont:
          'pass `isLatest` and `defaultOpen` together - the `isLatest` branch returns before the toggle exists, so `defaultOpen` is dead code.',
        groups: [
          bool('Position', 'isLatest', 'Older entry', 'Latest'),
          bool('Older entry starts', 'defaultOpen', 'Collapsed', 'Open'),
        ],
        defaults: { isLatest: 'on', defaultOpen: 'off' },
        block: true,
        hook: CHANGELOG_CODE,
        el: (s) => ({
          t: 'ChangelogEntry',
          p: {
            version: 'v11.5',
            date: 'September 2026',
            isLatest: on(s.isLatest) || undefined,
            defaultOpen: on(s.defaultOpen) || undefined,
            groups: raw('groups', CHANGELOG_GROUPS),
          },
        }),
      },
      {
        id: 'accordion',
        name: 'Accordion',
        description:
          'The plugin’s collapsible section, with an optional hint and an action slot in the header.',
        usage:
          'keep each `id` stable (it is the `localStorage` key) and put controls in `actions`, which renders outside the toggle button.',
        dont:
          'expect one-open-at-a-time - `Accordion` holds no state, so every `AccordionItem` opens and closes independently by design.',
        groups: [
          bool('First item', 'defaultOpen', 'Collapsed', 'Open'),
          bool('Hint', 'hint', 'None', 'With hint'),
          bool('Actions', 'actions', 'None', 'With badge'),
        ],
        defaults: { defaultOpen: 'on', hint: 'on', actions: 'off' },
        block: true,
        el: (s) => ({
          t: 'Accordion',
          c: [
            {
              t: 'AccordionItem',
              p: {
                id: 'why',
                title: 'Why a package instead of copied CSS?',
                hint: on(s.hint) ? '3 reasons' : undefined,
                actions: on(s.actions)
                  ? { t: 'Badge', p: { tone: 'teal', bordered: true }, c: 'FAQ' }
                  : undefined,
                defaultOpen: on(s.defaultOpen),
                persist: false,
              },
              c: 'Because a pattern copied eight times drifts eight ways.',
            },
            {
              t: 'AccordionItem',
              p: {
                id: 'theming',
                title: 'How does theming work?',
                defaultOpen: false,
                persist: false,
              },
              c: 'One data-lynn-theme attribute re-points the neutral tokens.',
            },
          ],
        }),
      },
    ],
  },

  /* ------------------------------------------------------------ Forms */
  {
    label: 'Forms',
    entries: [
      {
        id: 'search-input',
        name: 'SearchInput',
        description:
          'The filter field from tools.html and the dashboard, with the plugin’s cleaner focus treatment.',
        usage:
          'controlled, and `onChange` hands you the string rather than the event, so `onChange={setQuery}` is the whole wiring.',
        dont:
          'rely on the `ariaLabel` fallback - it defaults to `placeholder`, so a decorative placeholder becomes the field’s whole name.',
        groups: [
          bool('Expand on focus', 'expandOnFocus', 'Off', 'On'),
          bool('State', 'disabled', 'Enabled', 'Disabled'),
        ],
        defaults: { expandOnFocus: 'off', disabled: 'off' },
        Preview: SearchInputPreview,
        reactImports: ['useState'],
        hook: "const [query, setQuery] = useState('');",
        el: (s) => ({
          t: 'SearchInput',
          p: {
            value: raw('query'),
            onChange: raw('setQuery'),
            placeholder: 'Search components…',
            expandOnFocus: on(s.expandOnFocus) || undefined,
            disabled: on(s.disabled) || undefined,
            ariaLabel: 'Search components',
          },
        }),
      },
      {
        id: 'dropdown',
        name: 'Dropdown',
        description:
          'The searchable select from the plugin’s color pickers: swatches, sticky section headers, inline filter.',
        usage:
          'turn on `searchable` once the list passes about eight rows, and `sections` to group it under sticky headers.',
        dont:
          'set `sections` without giving the options a `section` - they all fall into one unlabeled group.',
        groups: [
          bool('Search', 'searchable', 'Off', 'Searchable'),
          bool('Sections', 'sections', 'Flat', 'Grouped'),
          bool('Swatches', 'swatches', 'Off', 'On'),
          bool('State', 'disabled', 'Enabled', 'Disabled'),
        ],
        defaults: { searchable: 'on', sections: 'on', swatches: 'on', disabled: 'off' },
        Preview: DropdownPreview,
        reactImports: ['useState'],
        hook: `const [accent, setAccent] = useState('blue');\n\n${DROPDOWN_CODE}`,
        el: (s) => ({
          t: 'Dropdown',
          p: {
            value: raw('accent'),
            onChange: raw('setAccent'),
            options: raw('accentOptions'),
            searchable: on(s.searchable) || undefined,
            sections: on(s.sections) || undefined,
            placeholder: 'Pick an accent',
            disabled: on(s.disabled) || undefined,
            ariaLabel: 'Accent color',
          },
        }),
      },
    ],
  },

  /* ------------------------------------------------- Motion & effects */
  {
    label: 'Motion & effects',
    entries: [
      {
        id: 'hero',
        name: 'Hero',
        description:
          'The full-bleed page opener: animated gradient, three blurred orbs and a radial mask.',
        usage:
          'one per page, with the shimmer on one or two words via a nested `ShimmerText` rather than over the whole line.',
        dont:
          'turn `radialMask` off while `animated` and `orbs` are on - the vignette is what guarantees contrast behind the headline.',
        groups: [
          { label: 'Gradient', prop: 'animated', options: opts('slow', 'fast', 'off') },
          bool('Orbs', 'orbs', 'Off', 'On'),
          bool('Radial mask', 'radialMask', 'Off', 'On'),
        ],
        defaults: { animated: 'slow', orbs: 'on', radialMask: 'on' },
        block: true,
        stacked: true,
        el: (s) => ({
          t: 'Hero',
          p: {
            eyebrow: 'Design system',
            heading: 'Meet Lynn',
            subtitle: 'Every preview on this page is the real built package.',
            animated: s.animated === 'off' ? false : s.animated,
            orbs: on(s.orbs),
            radialMask: on(s.radialMask),
            style: hidden({ minHeight: 360 }),
            actions: raw(
              '<Button variant="primary">Get started</Button>',
              h(Button, { variant: 'primary' }, 'Get started')
            ),
          },
        }),
        imports: ['Button'],
      },
      {
        id: 'gradient-background',
        name: 'GradientBackground',
        description: 'The site’s four-stop accent gradient, static or drifting at two speeds.',
        usage:
          'with no children it is a backdrop, so give it `position: absolute; inset: 0` inside a positioned parent, or explicit dimensions.',
        dont:
          'render an empty one and expect to see it - the element is only `position: relative`, so it collapses to zero height.',
        groups: [{ label: 'Animation', prop: 'animated', options: opts('slow', 'fast', 'off') }],
        defaults: { animated: 'slow' },
        block: true,
        el: (s) => ({
          t: 'GradientBackground',
          p: {
            animated: s.animated === 'off' ? false : s.animated,
            style: hidden({ width: '100%', height: 96, borderRadius: 12 }),
          },
        }),
      },
      {
        id: 'reveal',
        name: 'Reveal',
        description:
          'Scroll-into-view entrance. `index` staggers siblings by 80ms each; `once` keeps them shown.',
        usage:
          'pass the map index as `index` - the stagger is `(index % 6) * 55ms`, so it resets every six siblings rather than growing.',
        dont:
          'wrap a table row, a list item or a direct grid child - it renders a `div`, which breaks that structure; wrap the container instead.',
        groups: [
          { label: 'Siblings', prop: 'count', options: opts(1, 3, 5) },
          bool('Once', 'once', 'Re-animates', 'Once'),
        ],
        defaults: { count: '3', once: 'on' },
        block: true,
        Preview: RevealPreview,
        el: (s) =>
          Array.from({ length: Number(s.count) }, (_unused, index) => ({
            t: 'Reveal',
            p: { index, once: on(s.once) },
            c: {
              t: 'Card',
              p: { interactive: false },
              c: 'Fades and lifts into place',
            },
          })),
      },
      {
        id: 'shimmer-text',
        name: 'ShimmerText',
        description: 'The moving gradient wipe over the accent-filled headline text.',
        usage:
          'nest it inside the heading you already have and give it the one word that matters; `as` defaults to `span` for exactly that.',
        dont:
          'set a `color` on it - the text is painted by the gradient through `-webkit-text-fill-color: transparent`, so your color never shows.',
        groups: [
          { label: 'Tag', prop: 'as', options: opts('span', 'h2', 'h3', 'strong') },
          { label: 'Duration', prop: 'duration', options: opts(2, 4, 8) },
        ],
        defaults: { as: 'h2', duration: '4' },
        el: (s) => ({
          t: 'ShimmerText',
          p: {
            as: s.as,
            duration: Number(s.duration),
            style: hidden({ fontSize: 34, fontWeight: 900, margin: 0 }),
          },
          c: 'Shimmer',
        }),
      },
      {
        id: 'float',
        name: 'Float',
        description: 'A gentle infinite bob, used on badges and glyphs across the site.',
        usage:
          'for one small decorative thing - a glyph, a `Badge`, an icon tile. `distance` is normalized, so its sign does not matter.',
        dont:
          'wrap anything the reader has to click or read precisely - the loop never settles, so the target never stops moving.',
        groups: [
          { label: 'Distance', prop: 'distance', options: opts(4, 8, 16) },
          { label: 'Duration', prop: 'duration', options: opts(3, 6, 10) },
        ],
        defaults: { distance: '8', duration: '6' },
        el: (s) => ({
          t: 'Float',
          p: { distance: Number(s.distance), duration: Number(s.duration) },
          c: { t: 'Badge', p: { tone: 'lynn', icon: { t: 'IconSparkles', p: { size: 12 } } }, c: 'Floating' },
        }),
      },
      {
        id: 'pulse-dot',
        name: 'PulseDot',
        description: 'The live-status dot: a solid core with an expanding ring behind it.',
        usage:
          'pass `label` so the state has words, and use `duration` to tell two simultaneous live states apart.',
        dont:
          'scatter it through a list as a decorative bullet - the ring runs forever and carries no `aria`; `Legend`’s `dot` is the static swatch.',
        groups: [
          accentGroup('Tone', 'tone'),
          { label: 'Size', prop: 'size', options: opts(6, 8, 12) },
          { label: 'Duration', prop: 'duration', options: opts(1, 2, 4) },
        ],
        defaults: { tone: 'emerald', size: '8', duration: '2' },
        el: (s) => ({
          t: 'PulseDot',
          p: {
            tone: s.tone,
            size: Number(s.size),
            duration: Number(s.duration),
            label: 'Live',
          },
        }),
      },
      {
        id: 'cursor-glow',
        name: 'CursorGlow',
        description:
          'A screen-blended glow that trails the pointer anywhere on the page. Mount it once, at the root.',
        usage:
          'a page-level singleton - mount one at the app root, and use `enabled={false}` as a real off switch that binds no listener.',
        dont:
          'mount more than one - each binds its own `mousemove` and they composite through `mix-blend-mode: screen` into one brighter blob.',
        groups: [
          bool('Enabled', 'enabled', 'Off', 'On'),
          { label: 'Size', prop: 'size', options: opts(240, 480, 720) },
        ],
        defaults: { enabled: 'on', size: '480' },
        Preview: CursorGlowPreview,
        el: (s) => ({
          t: 'CursorGlow',
          p: { enabled: on(s.enabled), size: Number(s.size) },
        }),
      },
      {
        id: 'lightning',
        name: 'Lightning',
        description:
          'A canvas plasma ball: seven filaments plus drifting motes, optionally leaning toward the pointer.',
        usage:
          'one per page, as a feature stage - the CSS floors it at 240px tall, and it pauses itself whenever it scrolls off screen.',
        dont:
          'pass anything but a hex to `color` or `glow` - `hexToRgb` parses nothing else, so an `rgb()` or `var()` string yields NaN channels.',
        groups: [
          gradientGroup('Color', 'color'),
          { label: 'Motes', prop: 'motes', options: opts(0, 24, 54) },
          bool('Follow pointer', 'followPointer', 'Off', 'On'),
        ],
        defaults: { color: 'blue', motes: '54', followPointer: 'on' },
        block: true,
        stacked: true,
        el: (s) => ({
          t: 'Lightning',
          p: {
            color: designTokens.color.accent[s.color],
            motes: Number(s.motes),
            followPointer: on(s.followPointer),
          },
          c: 'Move the pointer across the plasma',
        }),
      },
      {
        id: 'liquid-fill',
        name: 'LiquidFill',
        description:
          'A matter.js particle pool that fills and sloshes on hover. Real physics, not a CSS fake.',
        usage:
          'the matter.js world is built lazily on the first `mouseenter`, so an instance nobody hovers costs nothing but its markup.',
        dont:
          'drive `color`, `opacity` or `count` from a live control - every change tears the whole physics world down and rebuilds it.',
        groups: [
          gradientGroup('Color', 'color'),
          { label: 'Particles', prop: 'count', options: opts(24, 48, 80) },
        ],
        defaults: { color: 'teal', count: '48' },
        block: true,
        stacked: true,
        el: (s) => ({
          t: 'LiquidFill',
          p: {
            color: designTokens.color.accent[s.color],
            count: Number(s.count),
          },
          c: 'Hover to fill and slosh',
        }),
      },
      {
        id: 'sheen',
        name: 'Sheen',
        description: 'A diagonal light sweep that loops continuously across its child.',
        usage:
          'wrap the one surface you want to catch the light; there are no props, so every sheen in the system is the same sheen.',
        dont:
          'read it as a hover affordance - the sweep is an unconditional 4.2s loop, and the wrapper’s `overflow: hidden` clips anything leaving the box.',
        groups: [],
        defaults: {},
        block: true,
        el: () => ({
          t: 'Sheen',
          c: {
            t: 'Card',
            p: { interactive: false, accent: 'lynn' },
            c: 'Hover: a diagonal highlight sweeps across this card.',
          },
        }),
      },
      {
        id: 'sparkle',
        name: 'Sparkle',
        description: 'The twinkling star field the site scatters behind small accents.',
        usage:
          'pass no children to get `IconSparkles` at 18px in the `lynn` accent, which is the intended form.',
        dont:
          'put text or a control inside it - the span is `aria-hidden` and scales to 1.35x on a loop, so a label in there is unreadable.',
        groups: [],
        defaults: {},
        // Sparkle beside the badge, not wrapping it: passing children swaps
        // in the plain scale+opacity fallback (see Sparkle.tsx), which is
        // not what this demo is meant to show off.
        el: () => [
          { t: 'Sparkle' },
          { t: 'Badge', p: { tone: 'lynn', icon: { t: 'IconBolt', p: { size: 12 } } }, c: 'Superpowers' },
        ],
      },
      {
        id: 'glow-pulse',
        name: 'GlowPulse',
        description: 'A breathing accent halo, used to draw the eye to a single live element.',
        usage:
          'one instance per screen, around the single element the eye should be pulled to.',
        dont:
          'apply it to several siblings at once - the 34px and 60px shadows overlap into one lit region and the signal is gone.',
        groups: [],
        defaults: {},
        el: () => ({
          t: 'GlowPulse',
          c: { t: 'Badge', p: { status: 'active' }, c: 'Active' },
        }),
      },
    ],
  },

  /* ------------------------------------------------------------- Code */
  {
    label: 'Code',
    entries: [
      {
        id: 'code-block',
        name: 'CodeBlock',
        description:
          'The scrolling code panel with a language chip and a real `CopyButton` - the same panel every card on this page uses.',
        usage:
          '`children` is typed `string` on purpose, so the copy button can hand the clipboard exactly what is on screen.',
        dont:
          'use it with no `ToastViewport` mounted - the copy button’s only feedback, success or failure, goes through `useToast()`.',
        groups: [
          { label: 'Language', prop: 'language', options: opts('jsx', 'css', 'bash') },
          bool('Copy button', 'copy', 'Hidden', 'Shown'),
        ],
        defaults: { language: 'jsx', copy: 'on' },
        block: true,
        el: (s) => ({
          t: 'CodeBlock',
          p: { language: s.language, showCopyButton: on(s.copy) },
          c: "import { Button } from 'lynn-ui';",
        }),
      },
      {
        id: 'copy-button',
        name: 'CopyButton',
        description:
          'Writes to the clipboard and reports through the toast - both the success and the failure path.',
        usage:
          'set `successMessage` to name what landed on the clipboard rather than leaving the generic “Copied”.',
        dont:
          'use it without a `ToastViewport` - both the success and the failure path report only through the toast, so the reader gets nothing.',
        groups: [
          { label: 'Variant', prop: 'variant', options: opts('primary', 'secondary', 'ghost') },
          bool('State', 'disabled', 'Enabled', 'Disabled'),
        ],
        defaults: { variant: 'secondary', disabled: 'off' },
        el: (s) => ({
          t: 'CopyButton',
          p: {
            text: "import { Button } from 'lynn-ui';",
            label: 'Copy import',
            successMessage: 'Import copied',
            variant: s.variant,
            disabled: on(s.disabled) || undefined,
          },
        }),
      },
      {
        id: 'inline-code',
        name: 'InlineCode',
        description: 'A monospace fragment inside running prose.',
        usage:
          'for a single identifier inside running prose - a prop name, a custom property, a path, a command.',
        dont:
          'use it for anything with a newline in it - it never wraps mid-token, so a long value overflows; reach for `CodeBlock`.',
        groups: [],
        defaults: {},
        block: true,
        el: () => ({
          t: 'InlineCode',
          c: '--lynn-color-bg',
        }),
        imports: ['InlineCode'],
      },
    ],
  },

  /* ------------------------------------------------------ Composition */
  {
    label: 'Composition',
    entries: [
      {
        id: 'tab-panels',
        name: 'TabPanels',
        description:
          'The dashboard’s section switcher: a `Tabs` bar wired to `TabPanel` children, with the right ARIA.',
        usage:
          'every `tab.id` needs a `TabPanel` carrying the matching `id`; the active id reaches the panels through context.',
        dont:
          'put an expensive subtree in a background panel expecting it to unmount - inactive panels stay mounted and keep running.',
        groups: [
          { label: 'Variant', prop: 'variant', options: opts('pill', 'elevated', 'underline') },
          accentGroup('Tone', 'tone'),
          bool('Bar', 'bar', 'Bare', 'Framed'),
          bool('Stretch', 'stretch', 'Intrinsic', 'Full width'),
        ],
        defaults: { variant: 'elevated', tone: 'blue', bar: 'on', stretch: 'off' },
        block: true,
        Preview: TabPanelsPreview,
        reactImports: ['useState'],
        hook: "const [active, setActive] = useState('overview');",
        el: (s) => ({
          t: 'TabPanels',
          p: {
            tabs: raw("[{ id: 'overview', label: 'Overview' }, { id: 'tokens', label: 'Tokens' }]"),
            activeId: raw('active'),
            onChange: raw('setActive'),
            variant: s.variant,
            tone: s.tone,
            bar: on(s.bar),
            stretch: on(s.stretch) || undefined,
            ariaLabel: 'Docs sections',
          },
          c: [
            { t: 'TabPanel', p: { id: 'overview' }, c: 'Forty-odd components, one stylesheet.' },
            { t: 'TabPanel', p: { id: 'tokens' }, c: 'Seven accents, three neutral modes.' },
          ],
        }),
      },
    ],
  },
];

/** Flat list, for lookups. */
export const ALL_ENTRIES = GROUPS.flatMap((group) => group.entries);
