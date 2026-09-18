import { GradientBackground } from 'lynn-ui';

export function Slow() {
  return (
    <GradientBackground
      animated="slow"
      style={{ width: '100%', height: 96, borderRadius: 12 }}
    />
  );
}

export function Fast() {
  return (
    <GradientBackground
      animated="fast"
      style={{ width: '100%', height: 96, borderRadius: 12 }}
    />
  );
}

export function Static() {
  return (
    <GradientBackground
      animated={false}
      style={{ width: '100%', height: 96, borderRadius: 12 }}
    />
  );
}
