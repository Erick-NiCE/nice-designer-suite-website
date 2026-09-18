import { Card } from 'lynn-ui';

export function StaticSolid() {
  return (
    <Card variant="solid" accent="blue" interactive={false}>
      Every component reads its color from the same --lynn-color-* tokens.
    </Card>
  );
}

export function InteractiveTilt() {
  return (
    <Card variant="solid" accent="indigo" interactive>
      Move the pointer across this card: it tilts toward the cursor and a
      220px spotlight follows it.
    </Card>
  );
}

export function GlassLiquid() {
  return (
    <Card variant="glass" accent="teal" interactive={false} liquid>
      A translucent, blurred panel with a soft highlight drifting slowly
      across the pane.
    </Card>
  );
}

export function NoAccent() {
  return (
    <Card variant="solid" interactive={false}>
      A plain surface with no top accent strip, for content that carries its
      own emphasis.
    </Card>
  );
}
