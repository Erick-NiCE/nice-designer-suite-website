import { PulseDot } from 'lynn-ui';

export function LiveStatuses() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <PulseDot tone="emerald" size={12} duration={2} label="Live" />
      <PulseDot tone="blue" size={12} duration={2.5} label="Next up" />
      <PulseDot tone="coral" size={12} duration={1} label="Incident" />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <PulseDot tone="emerald" size={6} label="Small" />
      <PulseDot tone="emerald" size={8} label="Default" />
      <PulseDot tone="emerald" size={12} label="Large" />
    </div>
  );
}

export function Neumorphic() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <PulseDot tone="emerald" variant="neumorphic" size={12} label="Device online" />
      <PulseDot tone="teal" variant="neumorphic" size={12} label="Syncing" />
    </div>
  );
}
