import { useState } from 'react';
import { TabPanels, TabPanel } from 'lynn-ui';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'tokens', label: 'Tokens' },
  { id: 'motion', label: 'Motion' },
];

export function WithBar() {
  const [active, setActive] = useState('overview');
  return (
    <TabPanels
      tabs={TABS}
      activeId={active}
      onChange={setActive}
      variant="pill"
      tone="blue"
      ariaLabel="Docs sections"
    >
      <TabPanel id="overview">Forty-odd components, one stylesheet.</TabPanel>
      <TabPanel id="tokens">Seven accents, three neutral modes.</TabPanel>
      <TabPanel id="motion">One easing curve for every transition.</TabPanel>
    </TabPanels>
  );
}

export function NoBarStretch() {
  const [active, setActive] = useState('tokens');
  return (
    <TabPanels
      tabs={TABS}
      activeId={active}
      onChange={setActive}
      variant="underline"
      tone="coral"
      bar={false}
      stretch
      ariaLabel="Docs sections"
    >
      <TabPanel id="overview">Forty-odd components, one stylesheet.</TabPanel>
      <TabPanel id="tokens">Seven accents, three neutral modes.</TabPanel>
      <TabPanel id="motion">One easing curve for every transition.</TabPanel>
    </TabPanels>
  );
}
