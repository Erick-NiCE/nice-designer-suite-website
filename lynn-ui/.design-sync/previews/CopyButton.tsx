import { CopyButton, ToastViewport } from 'lynn-ui';

export function Secondary() {
  return (
    <div>
      <CopyButton
        text="import { Button } from 'lynn-ui';"
        label="Copy import"
        successMessage="Import copied"
        variant="secondary"
      />
      <ToastViewport />
    </div>
  );
}

export function Ghost() {
  return (
    <div>
      <CopyButton
        text="npm install lynn-ui"
        label="Copy command"
        successMessage="Command copied"
        variant="ghost"
      />
      <ToastViewport />
    </div>
  );
}

export function Primary() {
  return (
    <div>
      <CopyButton
        text="--lynn-color-bg"
        label="Copy token"
        successMessage="Token name copied"
        variant="primary"
      />
      <ToastViewport />
    </div>
  );
}

export function Disabled() {
  return (
    <div>
      <CopyButton
        text="--lynn-color-bg"
        label="Copy token"
        successMessage="Token name copied"
        variant="secondary"
        disabled
      />
      <ToastViewport />
    </div>
  );
}
