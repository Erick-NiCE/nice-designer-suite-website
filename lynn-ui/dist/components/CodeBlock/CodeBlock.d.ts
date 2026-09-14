import type { CSSProperties, ReactNode } from 'react';
export interface CodeBlockProps {
    /**
     * The code, as text. Typed as a string rather than as nodes because the
     * copy button has to hand the clipboard exactly what is on screen, and
     * because a code sample is text - `{'\n'}`-joined markup would be a way of
     * writing a string badly.
     */
    children: string;
    /** Language name shown in the header strip, e.g. `bash`, `tsx`. */
    language?: string;
    /**
     * Render the header's copy button. Defaults on - a code block a reader
     * cannot copy is a screenshot.
     */
    showCopyButton?: boolean;
    /** Accessible name for the scrollable code region. */
    ariaLabel?: string;
    className?: string;
    style?: CSSProperties;
}
/**
 * A scrollable code panel.
 *
 * Ported from the plugin's `.dev-css` block (`styles.css:2510-2524`): a
 * monospace `pre` on the `surface` fill with a subtle hairline, `white-space:
 * pre`, and a 300px cap past which it scrolls rather than pushing the page
 * down. The code's own color is the site's `.code-block` teal.
 *
 * `tabIndex={0}` on the scroller is deliberate: a region that scrolls has to
 * be reachable by keyboard, or its overflowing content is unreadable without
 * a mouse.
 *
 * Usage: `children` is typed as `string` on purpose - the header's
 * `CopyButton` hands the clipboard exactly this text, so build a multi-line
 * sample as a template literal rather than as markup. `language` fills the
 * header chip, the `data-language` attribute and the scroller's default
 * accessible name, so set it even when the chip is not the point.
 *
 * Don't: don't use it without a `ToastViewport` somewhere above - the copy
 * button's only feedback, success or failure, goes through `useToast()`, so
 * the reader gets no signal at all. And don't pass `showCopyButton={false}`
 * with no `language` for anything but a one-liner: that combination drops the
 * header entirely, leaving a 300px scroller the reader can neither copy from
 * nor identify.
 */
export declare function CodeBlock(props: CodeBlockProps): import("react").JSX.Element;
export interface InlineCodeProps {
    /** The code fragment. */
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}
/**
 * An inline code fragment.
 *
 * Ported from install-guide.html's `code, .inline-code` rule - the site's one
 * real inline-code treatment: a faint tinted chip with teal monospace text
 * that never wraps mid-token.
 *
 * Usage: for a single identifier inside running prose - a prop name, a CSS
 * custom property, a file path, a command. It renders a real `<code>`, so it
 * nests inside a paragraph, an `Alert` body or a `docs-lede` without any
 * layout of its own.
 *
 * Don't: don't use it for a snippet that needs more than one line - it never
 * wraps mid-token, so a long value overflows its container rather than
 * breaking; reach for `CodeBlock` the moment there is a newline in the text.
 */
export declare function InlineCode(props: InlineCodeProps): import("react").JSX.Element;
