import { useState } from 'react';
import { AccessGate } from 'lynn-ui';

export function LockedForm() {
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');

  function check(code: string) {
    if (code.trim().toLowerCase() === 'lynn') {
      setError('');
      setUnlocked(true);
    } else {
      setError('That code is not recognised.');
    }
  }

  return (
    <AccessGate
      title="NiCE Designer Suite"
      subtitle="Enter your access code to continue."
      unlocked={unlocked}
      error={error}
      onSubmit={check}
      ctaText="No code yet?"
      ctaHref="/request-access"
      ctaLinkLabel="Request access"
    />
  );
}
