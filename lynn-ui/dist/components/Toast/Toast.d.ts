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
export declare function useToast(): ToastControls;
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
export declare function ToastViewport(props: ToastViewportProps): import("react").JSX.Element | null;
