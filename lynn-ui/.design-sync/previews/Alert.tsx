import { Alert, IconBulb } from 'lynn-ui';

export function Variants() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Alert variant="info" icon={<IconBulb size={16} />}>
        Import the stylesheet once, at the app root.
      </Alert>
      <Alert variant="success" icon={<IconBulb size={16} />}>
        Every component reads its color from the same --lynn-color-* tokens.
      </Alert>
      <Alert variant="warning" icon={<IconBulb size={16} />}>
        This mapping is teal, not amber - Lynn has no amber accent.
      </Alert>
      <Alert variant="danger" icon={<IconBulb size={16} />}>
        The build failed: three components are missing a stylesheet import.
      </Alert>
      <Alert variant="purple" icon={<IconBulb size={16} />}>
        Beta: theming API may still change before v12.
      </Alert>
    </div>
  );
}

export function WithTitle() {
  return (
    <Alert variant="info" icon={<IconBulb size={16} />} title="Import the stylesheet once">
      Every component reads its color from the same --lynn-color-* tokens.
    </Alert>
  );
}

export function Compact() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Alert variant="success" compact icon={<IconBulb size={14} />}>
        Sync complete: 42 components published.
      </Alert>
      <Alert variant="danger" compact icon={<IconBulb size={14} />}>
        Two previews still need a real usage example.
      </Alert>
    </div>
  );
}
