import { ShimmerText } from 'lynn-ui';

export function Heading() {
  return (
    <h2 style={{ fontSize: 34, fontWeight: 900, margin: 0 }}>
      Meet <ShimmerText as="span">Lynn</ShimmerText>
    </h2>
  );
}

export function SlowSweep() {
  return (
    <h3 style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>
      <ShimmerText as="span" duration={8}>
        Superpowers
      </ShimmerText>{' '}
      for your workflow
    </h3>
  );
}
