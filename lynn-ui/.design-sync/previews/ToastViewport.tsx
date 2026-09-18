import { useEffect } from 'react';
import { Button, ToastViewport, useToast } from 'lynn-ui';

export function SuccessToast() {
  const toast = useToast();
  useEffect(() => {
    toast.show('Copied to clipboard', 'success');
  }, [toast]);
  return (
    <div style={{ position: 'relative', height: 120 }}>
      <Button variant="primary" onClick={() => toast.show('Copied to clipboard', 'success')}>
        Copy
      </Button>
      <ToastViewport />
    </div>
  );
}

export function ErrorToastWithUndo() {
  const toast = useToast();
  useEffect(() => {
    toast.show('Failed to save changes', 'error', {
      label: 'Retry',
      onClick: () => toast.show('Saved', 'success'),
    });
  }, [toast]);
  return (
    <div style={{ position: 'relative', height: 120 }}>
      <Button
        variant="secondary"
        onClick={() =>
          toast.show('Failed to save changes', 'error', {
            label: 'Retry',
            onClick: () => toast.show('Saved', 'success'),
          })
        }
      >
        Save changes
      </Button>
      <ToastViewport />
    </div>
  );
}

export function InfoToast() {
  const toast = useToast();
  useEffect(() => {
    toast.show('Three components still need review', 'info');
  }, [toast]);
  return (
    <div style={{ position: 'relative', height: 120 }}>
      <Button variant="ghost" onClick={() => toast.show('Three components still need review', 'info')}>
        Check status
      </Button>
      <ToastViewport />
    </div>
  );
}
