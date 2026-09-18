import { useState } from 'react';
import { TabPanels, TabPanel } from 'lynn-ui';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'tokens', label: 'Tokens' },
  { id: 'motion', label: 'Motion' },
];

/**
 * TabPanel has no meaning outside a TabPanels context (it reads the active
 * id from context and returns null while inactive), so its preview is the
 * full composition rather than a standalone render.
 */
export function NestedInTabPanels() {
  const [active, setActive] = useState('overview');
  return (
    <TabPanels
      tabs={TABS}
      activeId={active}
      onChange={setActive}
      variant="pill"
      tone="emerald"
      ariaLabel="Docs sections"
    >
      <TabPanel id="overview">Forty-odd components, one stylesheet.</TabPanel>
      <TabPanel id="tokens">Seven accents, three neutral modes.</TabPanel>
      <TabPanel id="motion">One easing curve for every transition.</TabPanel>
    </TabPanels>
  );
}
