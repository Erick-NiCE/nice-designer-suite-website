import type { CSSProperties } from 'react';
import { Button } from '../Button/Button.js';
import type { ButtonVariant } from '../Button/Button.js';
import { useToast } from '../Toast/Toast.js';
import { IconClipboard } from '../../icons/icons.js';

export interface CopyButtonProps {
  /** The exact text written to the clipboard. */
  text: string;
  /** Button label. */
  label?: string;
  /** Message the toast shows on success. */
  successMessage?: string;
  /** The `Button` variant to render. */
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * A real copy-to-clipboard button.
 *
 * The shape is the plugin's `btn-icon-label` clipboard button (a 13px
 * clipboard glyph beside a short verb), built on the real `Button`. The
 * confirmation goes through `useToast()`, so a `<ToastViewport />` has to be
 * mounted for anything to be seen - without one the copy still happens
 * silently.
 *
 * The clipboard API is unavailable outside a secure context and can be
 * refused by permission policy, so the failure path reports rather than
 * throwing into the void.
 *
 * Usage: give it the exact string to copy in `text` and a verb in `label`
 * ("Copy import", "Copy token"), and set `successMessage` to say what landed
 * on the clipboard rather than leaving the generic "Copied". `variant` is
 * passed straight through to `Button`; `CodeBlock` uses `ghost` for the one in
 * its header.
 *
 * Don't: don't use it on a page with no `ToastViewport` mounted - both the
 * success and the "could not copy" paths report only through `useToast()`, so
 * with no viewport a failed copy is indistinguishable from a successful one.
 * And don't hand it a live value that might change between render and click:
 * `text` is read at click time, but it is also what the clipboard gets
 * verbatim, with no trimming or formatting.
 */
export function CopyButton(props: CopyButtonProps) {
  const {
    text,
    label = 'Copy',
    successMessage = 'Copied',
    variant = 'secondary',
    disabled = false,
    className,
    style,
  } = props;

  const toast = useToast();

  const copy = async () => {
    try {
      if (
        typeof navigator === 'undefined' ||
        navigator.clipboard == null
      ) {
        throw new Error('Clipboard unavailable');
      }
      await navigator.clipboard.writeText(text);
      toast.show(successMessage, 'success');
    } catch {
      toast.show('Could not copy to the clipboard', 'error');
    }
  };

  const classes = ['lynn-copy-button', className].filter(Boolean).join(' ');

  return (
    <Button
      variant={variant}
      className={classes}
      style={style}
      disabled={disabled}
      icon={<IconClipboard size={13} />}
      onClick={() => {
        void copy();
      }}
    >
      {label}
    </Button>
  );
}
