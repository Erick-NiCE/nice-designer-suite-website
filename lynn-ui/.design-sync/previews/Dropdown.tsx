import { useState } from 'react';
import { Dropdown } from 'lynn-ui';
import type { DropdownOption } from 'lynn-ui';

const ACCENT_OPTIONS: DropdownOption[] = [
  { value: 'blue', label: 'Blue', swatch: '#025afb', section: 'Cool', hint: '#025afb' },
  { value: 'electric-blue', label: 'Electric Blue', swatch: '#3694fc', section: 'Cool', hint: '#3694fc' },
  { value: 'indigo', label: 'Indigo', swatch: '#6100ff', section: 'Cool', hint: '#6100ff' },
  { value: 'emerald', label: 'Emerald', swatch: '#00e2a0', section: 'Warm', hint: '#00e2a0' },
  { value: 'teal', label: 'Teal', swatch: '#36ead0', section: 'Warm', hint: '#36ead0' },
  { value: 'coral', label: 'Coral', swatch: '#ff5b8a', section: 'Warm', hint: '#ff5b8a' },
  { value: 'lynn', label: 'Lynn', swatch: '#b98fff', section: 'Warm', hint: '#b98fff' },
];

export function GroupedSearchable() {
  const [value, setValue] = useState<string | null>('blue');
  return (
    <Dropdown
      value={value}
      onChange={setValue}
      options={ACCENT_OPTIONS}
      searchable
      sections
      placeholder="Pick an accent"
      ariaLabel="Accent color"
    />
  );
}

export function FlatList() {
  const [value, setValue] = useState<string | null>('emerald');
  return (
    <Dropdown
      value={value}
      onChange={setValue}
      options={ACCENT_OPTIONS.map(({ value: v, label, swatch }) => ({ value: v, label, swatch }))}
      placeholder="Pick an accent"
      ariaLabel="Accent color"
    />
  );
}

export function Unselected() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <Dropdown
      value={value}
      onChange={setValue}
      options={ACCENT_OPTIONS}
      placeholder="Pick an accent"
      ariaLabel="Accent color"
      disabled
    />
  );
}
