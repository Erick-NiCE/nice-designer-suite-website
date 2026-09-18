import { Reveal, Card } from 'lynn-ui';

const CARD_COPY = [
  'Fades and lifts into place',
  'Staggered 55ms behind the last',
  'Once visible, it stays visible',
];

export function Staggered() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {CARD_COPY.map((copy, index) => (
        <Reveal key={copy} index={index} once>
          <Card interactive={false}>{copy}</Card>
        </Reveal>
      ))}
    </div>
  );
}
