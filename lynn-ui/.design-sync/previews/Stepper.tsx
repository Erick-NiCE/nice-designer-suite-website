import { Stepper } from 'lynn-ui';

const INSTALL_STEPS = [
  {
    title: 'Install the package',
    children: 'npm install lynn-ui react react-dom',
  },
  {
    title: 'Import the stylesheet',
    children: "import 'lynn-ui/dist/lynn-ui.css';",
  },
  {
    title: 'Wrap the app',
    children: 'Mount <ThemeProvider> once, at the root.',
  },
];

export function Vertical() {
  return <Stepper steps={INSTALL_STEPS} orientation="vertical" color="electric-blue" />;
}

export function Horizontal() {
  return <Stepper steps={INSTALL_STEPS} orientation="horizontal" color="electric-blue" />;
}

export function CustomAccent() {
  return <Stepper steps={INSTALL_STEPS} orientation="vertical" color="indigo" />;
}
