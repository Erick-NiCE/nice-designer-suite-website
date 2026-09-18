import { useState } from 'react';
import { TextField } from 'lynn-ui';

export function TextResting() {
  const [value, setValue] = useState('');
  return <TextField label="Project name" value={value} onChange={setValue} />;
}

export function TextFilled() {
  const [value, setValue] = useState('lynn-ui');
  return (
    <TextField label="Package name" value={value} onChange={setValue} accent="indigo" />
  );
}

export function PasswordWithToggle() {
  const [value, setValue] = useState('correct-horse-battery-staple');
  return <TextField label="Access code" type="password" value={value} onChange={setValue} />;
}

export function WithError() {
  const [value, setValue] = useState('not-an-email');
  return (
    <TextField
      label="Work email"
      type="email"
      value={value}
      onChange={setValue}
      error="Enter a valid email address."
    />
  );
}
