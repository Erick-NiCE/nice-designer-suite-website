import { useState } from 'react';
import { Tabs } from 'lynn-ui';

const OPTIONS = [
  { value: 'preview', label: 'Preview' },
  { value: 'props', label: 'Props' },
  { value: 'a11y', label: 'A11y' },
];

export function PillFilterRow() {
  const [value, setValue] = useState('preview');
  return (
    <Tabs
      options={OPTIONS}
      value={value}
      onChange={setValue}
      variant="pill"
      tone="blue"
      ariaLabel="Card view"
    />
  );
}

export function ElevatedStretch() {
  const [value, setValue] = useState('props');
  return (
    <Tabs
      options={OPTIONS}
      value={value}
      onChange={setValue}
      variant="elevated"
      tone="indigo"
      stretch
      ariaLabel="Card view"
    />
  );
}

export function UnderlineTeal() {
  const [value, setValue] = useState('a11y');
  return (
    <Tabs
      options={OPTIONS}
      value={value}
      onChange={setValue}
      variant="underline"
      tone="teal"
      ariaLabel="Card view"
    />
  );
}
