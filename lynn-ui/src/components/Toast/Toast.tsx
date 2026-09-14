import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

export type ToastKind = 'success' | 'error' | 'info';

export interface ToastAction {
  /** Button label, e.g. `Undo`. */
  label: string;
  onClick: () => void;
}

export interface ToastState {
  /** Monotonic id, used to re-key the element so the entrance replays. */
  id: number;
  message: string;
  kind: ToastKind;
  action?: ToastAction;
}

export interface ToastControls {
  /**
   * Replaces whatever is on screen with this message. There is exactly one
   * active toast - the plugin stacks nothing either, and a single slot is
   * what makes a fixed bottom bar work without a layout pass.
   *
   * A toast carrying an `action` never auto-dismisses; the viewport's timer
   * would otherwise pull the button away mid-reach.
   */
  show: (message: string, kind?: ToastKind, action?: ToastAction) => void;
  /** Dismisses the active toast, if any. */
  hide: () => void;
}

/* One module-level slot, so `show()` works from anywhere - an event handler,
   a hook, a utility - without threading a provider through the tree. */
let current: ToastState | null = null;
let nextId = 1;
const listeners = new Set<(state: ToastState | null) => void>();

function publish(next: ToastState | null) {
  current = next;
  listeners.forEach((listener) => listener(current));
}

function subscribe(listener: (state: ToastState | null) => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const controls: ToastControls = {
  show: (message, kind = 'info', action) => {
    nextId += 1;
    publish(action != null ? { id: nextId, message, kind, action } : { id: nextId, message, kind });
  },
  hide: () => {
    publish(null);
  },
};

/**
 * Show and hide the app's single toast.
 *
 * Needs a `<ToastViewport />` mounted somewhere for anything to appear.
 *
 * Usage: one of the two deliberate camelCase exports, because showing a toast
 * has no component-prop equivalent. The slot is module-level, so `show()`
 * works from an event handler, a utility or a hook with no provider threaded
 * through the tree - and it returns the same stable `controls` object every
 * render, so it is safe in a dependency array. Attach an `action` for anything
 * undoable; a toast carrying one never auto-dismisses.
 *
 * Don't: don't expect a stack - there is exactly one active toast, so a second
 * `show()` replaces the first mid-read. Batch several results into one message
 * rather than firing in a loop. And don't use it for anything the reader must
 * not miss: it is a timed `role="status"` bar, so a real warning belongs in an
 * `Alert` on the page.
 */
export function useToast(): ToastControls {
  return controls;
}

export interface ToastViewportProps {
  /**
   * Milliseconds before a toast auto-dismisses. `0` keeps every toast up
   * until `hide()`. Toasts with an `action` ignore this and stay put.
   */
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * The fixed bottom slot the active toast renders into. Mount one per app,
 * near the root; it renders nothing while no toast is showing.
 *
 * Usage: mount exactly one, beside `ThemeProvider`'s other root-level
 * children, and then forget about it - it subscribes to the module-level slot
 * and renders `null` until something calls `show()`. `duration={0}` keeps
 * every toast up until `hide()`, for a flow where the reader has to
 * acknowledge.
 *
 * Don't: don't mount two - they subscribe to the same single slot and both
 * render the same message in the same `position: fixed` bottom bar, stacked on
 * top of each other. And don't tune `duration` to buy time for an `action`:
 * toasts with one ignore the timer entirely by design, so the button cannot be
 * pulled away mid-reach. `CopyButton` and `CodeBlock` report only through
 * here, so a page with no viewport gives a failed copy no signal at all.
 */
export function ToastViewport(props: ToastViewportProps) {
  const { duration = 3200, className, style } = props;

  const [toast, setToast] = useState<ToastState | null>(current);

  useEffect(() => subscribe(setToast), []);

  useEffect(() => {
    if (toast == null || toast.action != null || duration <= 0) return;
    const timer = window.setTimeout(() => {
      // Only clear the toast this timer was started for - a newer `show()`
      // must not be cut short by the previous one's countdown.
      if (current != null && current.id === toast.id) publish(null);
    }, duration);
    return () => window.clearTimeout(timer);
  }, [toast, duration]);

  if (toast == null) return null;

  const classes = ['lynn-toast', `lynn-toast-${toast.kind}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      key={toast.id}
      className={classes}
      style={style}
      role="status"
      aria-live="polite"
    >
      <span className="lynn-toast-message">{toast.message}</span>
      {toast.action != null ? (
        <button
          type="button"
          className="lynn-toast-action"
          onClick={toast.action.onClick}
        >
          {toast.action.label}
        </button>
      ) : null}
    </div>
  );
}
