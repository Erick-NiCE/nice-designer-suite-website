# Chart theme (stand-in, not a design system component)

Lyra has no chart component and no data-visualization palette. Until the design system team defines them, charts are a third-party integration and a **gap**. Say so in the gap log and label the chart `data-nds-source="fallback"`.

Use AG Charts when the screen already uses the Lyra `Grid` (AG Grid), so one vendor supplies both; use the library the data owner chose otherwise. Theme it from Lyra tokens, never literals. For AG Charts:

```ts
// CONFIRM: palette is a NiCE Designer stand-in until Lyra defines data-visualization colors.
const css = (v: string) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
export const lyraChartTheme = {
  baseTheme: 'ag-default',
  palette: {
    fills: ['--lyra-base-color-brand-500', '--lyra-base-color-teal-500', '--lyra-base-color-purple-500',
            '--lyra-base-color-orange-500', '--lyra-base-color-green-500', '--lyra-base-color-pink-500'].map(css),
    strokes: ['--lyra-base-color-brand-700', '--lyra-base-color-teal-700', '--lyra-base-color-purple-700',
              '--lyra-base-color-orange-700', '--lyra-base-color-green-700', '--lyra-base-color-pink-700'].map(css),
  },
  overrides: {
    common: {
      background: { fill: css('--lyra-color-bg-surface-container') },
      title: { color: css('--lyra-color-fg-default'), fontFamily: 'Lyra Sans, Inter, sans-serif', fontSize: 16, fontWeight: 500 },
      axes: { number: { label: { color: css('--lyra-color-fg-secondary'), fontSize: 12 } }, category: { label: { color: css('--lyra-color-fg-secondary'), fontSize: 12 } } },
    },
  },
};
```

Rules: never rely on color alone (add labels, patterns or a data table view); every chart needs a title and a text alternative; keep to six series; put the legend where the title is.
