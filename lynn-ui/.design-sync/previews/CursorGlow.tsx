import { CursorGlow } from 'lynn-ui';

export function Default() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 220,
        borderRadius: 12,
        border: '1px solid var(--lynn-color-border)',
        background: 'var(--lynn-color-bg)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CursorGlow enabled size={480} />
      <span style={{ color: 'var(--lynn-color-text-muted)', fontSize: 13, position: 'relative' }}>
        A 480px screen-blended glow follows the pointer anywhere on the page.
      </span>
    </div>
  );
}
