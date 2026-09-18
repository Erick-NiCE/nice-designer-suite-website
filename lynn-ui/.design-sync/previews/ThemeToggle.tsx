import { ThemeToggle } from 'lynn-ui';

export function Labeled() {
  return <ThemeToggle showLabels={true} />;
}

export function IconOnly() {
  return <ThemeToggle showLabels={false} />;
}
