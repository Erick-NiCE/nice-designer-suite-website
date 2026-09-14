import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
/* One module-level slot, so `show()` works from anywhere - an event handler,
   a hook, a utility - without threading a provider through the tree. */
let current = null;
let nextId = 1;
const listeners = new Set();
function publish(next) {
    current = next;
    listeners.forEach((listener) => listener(current));
}
function subscribe(listener) {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}
const controls = {
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
export function useToast() {
    return controls;
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
export function ToastViewport(props) {
    const { duration = 3200, className, style } = props;
    const [toast, setToast] = useState(current);
    useEffect(() => subscribe(setToast), []);
    useEffect(() => {
        if (toast == null || toast.action != null || duration <= 0)
            return;
        const timer = window.setTimeout(() => {
            // Only clear the toast this timer was started for - a newer `show()`
            // must not be cut short by the previous one's countdown.
            if (current != null && current.id === toast.id)
                publish(null);
        }, duration);
        return () => window.clearTimeout(timer);
    }, [toast, duration]);
    if (toast == null)
        return null;
    const classes = ['lynn-toast', `lynn-toast-${toast.kind}`, className]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("div", { className: classes, style: style, role: "status", "aria-live": "polite", children: [_jsx("span", { className: "lynn-toast-message", children: toast.message }), toast.action != null ? (_jsx("button", { type: "button", className: "lynn-toast-action", onClick: toast.action.onClick, children: toast.action.label })) : null] }, toast.id));
}
