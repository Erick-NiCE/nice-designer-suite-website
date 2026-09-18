import { Sheen, Card } from 'lynn-ui';

export function Default() {
  return (
    <Sheen>
      <Card interactive={false} accent="lynn">
        Hover: a diagonal highlight sweeps across this card.
      </Card>
    </Sheen>
  );
}
