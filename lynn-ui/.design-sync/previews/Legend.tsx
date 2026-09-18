import { Legend, designTokens } from 'lynn-ui';

const STATUS_ITEMS = [
  { swatch: designTokens.color.accent.emerald, label: 'Shipped', description: 'In the published package' },
  { swatch: designTokens.color.accent.blue, label: 'Active', description: 'Being built now' },
  { swatch: designTokens.color.accent.coral, label: 'Blocked', description: 'Waiting on a dependency' },
];

export function DotWithLabel() {
  return <Legend items={STATUS_ITEMS} variant="dot" label="Status" />;
}

export function PillVariant() {
  return <Legend items={STATUS_ITEMS} variant="pill" label="Status" />;
}

export function DotNoLabel() {
  return <Legend items={STATUS_ITEMS} variant="dot" />;
}
