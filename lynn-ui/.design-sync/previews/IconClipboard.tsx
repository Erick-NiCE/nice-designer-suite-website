import { IconClipboard } from 'lynn-ui';

export function Default() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'var(--lynn-color-text, #fff)' }}>
      <IconClipboard size={32} />
      <span style={{ fontSize: 12, opacity: 0.6 }}>IconClipboard</span>
    </div>
  );
}
