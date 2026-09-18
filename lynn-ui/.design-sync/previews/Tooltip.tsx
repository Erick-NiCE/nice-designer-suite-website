import { Button, Tooltip } from 'lynn-ui';

export function BottomOnButton() {
  return (
    <div style={{ padding: 40 }}>
      <Tooltip label="Shows on hover and on keyboard focus" side="bottom">
        <Button variant="secondary">Hover or focus me</Button>
      </Tooltip>
    </div>
  );
}

export function RightNearEdge() {
  return (
    <div style={{ padding: 40, display: 'flex', justifyContent: 'flex-end' }}>
      <Tooltip label="Right-aligned for a target near the edge" side="right">
        <Button variant="ghost">Copy link</Button>
      </Tooltip>
    </div>
  );
}

export function OnPlainText() {
  return (
    <div style={{ padding: 40 }}>
      <Tooltip label="A keyboard-reachable wrapper span, not a cloned attribute" side="bottom">
        Hover this text
      </Tooltip>
    </div>
  );
}
