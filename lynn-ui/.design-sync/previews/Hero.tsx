import { Hero, ShimmerText, Button } from 'lynn-ui';

export function Default() {
  return (
    <Hero
      eyebrow="Design system"
      heading={
        <>
          Meet <ShimmerText as="span">Lynn</ShimmerText>
        </>
      }
      subtitle="Every preview on this page is the real built package."
      animated="slow"
      orbs
      radialMask
      actions={<Button variant="primary">Get started</Button>}
      style={{ minHeight: 500 }}
    />
  );
}
