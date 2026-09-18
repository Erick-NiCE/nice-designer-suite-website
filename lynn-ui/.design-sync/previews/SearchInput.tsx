import { useState } from 'react';
import { SearchInput } from 'lynn-ui';

export function DashboardFilter() {
  const [value, setValue] = useState('');
  return (
    <SearchInput
      value={value}
      onChange={setValue}
      placeholder="Search components…"
      ariaLabel="Search components"
    />
  );
}

export function ExpandingNavSearch() {
  const [value, setValue] = useState('button');
  return (
    <SearchInput
      value={value}
      onChange={setValue}
      placeholder="Search…"
      expandOnFocus
      ariaLabel="Search the site"
    />
  );
}

export function Disabled() {
  const [value] = useState('');
  return (
    <SearchInput
      value={value}
      onChange={() => {}}
      placeholder="Search components…"
      ariaLabel="Search components"
      disabled
    />
  );
}
