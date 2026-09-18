import { Spinner } from 'lynn-ui';

export function Sizes() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'var(--lynn-color-bg)', padding: 16 }}>
      <Spinner size="sm" tone="light" ariaLabel="Loading" />
      <Spinner size="md" tone="light" ariaLabel="Loading" />
      <Spinner size="lg" tone="light" ariaLabel="Loading" />
    </div>
  );
}

export function OnDarkSurface() {
  return (
    <div style={{ display: 'flex', gap: 16, background: '#0d1424', padding: 16, borderRadius: 8 }}>
      <Spinner size="md" tone="light" ariaLabel="Loading" />
    </div>
  );
}

export function OnLightSurface() {
  return (
    <div style={{ display: 'flex', gap: 16, background: '#f4f6fb', padding: 16, borderRadius: 8 }}>
      <Spinner size="md" tone="dark" ariaLabel="Loading" />
    </div>
  );
}
