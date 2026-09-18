import { ProgressBar } from 'lynn-ui';

export function Values() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minWidth: 260 }}>
      <ProgressBar value={0} tone="blue" label="Not started" ariaLabel="Build progress" />
      <ProgressBar value={35} tone="blue" label="Building the stylesheet" ariaLabel="Build progress" />
      <ProgressBar value={70} tone="blue" label="Bundling components" ariaLabel="Build progress" />
      <ProgressBar value={100} tone="emerald" label="Done" ariaLabel="Build progress" />
    </div>
  );
}

export function Tones() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minWidth: 260 }}>
      <ProgressBar value={62} tone="indigo" label="Migration" ariaLabel="Migration progress" />
      <ProgressBar value={62} tone="coral" label="Storage" ariaLabel="Storage progress" />
      <ProgressBar value={62} tone="teal" label="Sync" ariaLabel="Sync progress" />
    </div>
  );
}

export function Indeterminate() {
  return (
    <div style={{ minWidth: 260 }}>
      <ProgressBar indeterminate tone="blue" ariaLabel="Publishing package" />
    </div>
  );
}
