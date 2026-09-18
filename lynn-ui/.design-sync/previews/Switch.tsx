import { useState } from 'react';
import { Switch } from 'lynn-ui';

export function Checked() {
  const [checked, setChecked] = useState(true);
  return <Switch checked={checked} onChange={setChecked} label="Magnetic buttons" />;
}

export function Unchecked() {
  const [checked, setChecked] = useState(false);
  return <Switch checked={checked} onChange={setChecked} label="Show issue counts" />;
}
