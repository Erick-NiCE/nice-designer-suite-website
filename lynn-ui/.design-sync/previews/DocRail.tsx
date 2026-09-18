import { useState } from 'react';
import { DocRail } from 'lynn-ui';

const RAIL_GROUPS = [
  {
    label: 'Getting started',
    items: [
      { id: 'tokens-colors', label: 'Colors' },
      { id: 'tokens-spacing', label: 'Spacing' },
    ],
  },
  {
    label: 'Components',
    items: [
      { id: 'card', label: 'Card' },
      { id: 'button', label: 'Button' },
      { id: 'dropdown', label: 'Dropdown' },
    ],
  },
];

export function SectionsSearchable() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <DocRail
      mode="sections"
      groups={RAIL_GROUPS}
      collapsed={collapsed}
      onToggle={setCollapsed}
      searchable
    />
  );
}
