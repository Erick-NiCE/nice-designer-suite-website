import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CopyButton } from '../CopyButton/CopyButton.js';
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
export function CodeBlock(props) {
    const { children, language, showCopyButton = true, ariaLabel, className, style, } = props;
    const classes = ['lynn-code-block', className].filter(Boolean).join(' ');
    const hasHeader = language != null || showCopyButton;
    return (_jsxs("div", { className: classes, style: style, children: [hasHeader ? (_jsxs("div", { className: "lynn-code-block-head", children: [language != null ? (_jsx("span", { className: "lynn-code-block-lang", children: language })) : null, showCopyButton ? (_jsx(CopyButton, { text: children, variant: "ghost", className: "lynn-code-block-copy" })) : null] })) : null, _jsx("pre", { className: "lynn-code-block-pre", tabIndex: 0, role: "group", "aria-label": ariaLabel ?? (language != null ? `${language} code` : 'Code'), children: _jsx("code", { ...(language != null ? { 'data-language': language } : {}), children: children }) })] }));
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
export function InlineCode(props) {
    const { children, className, style } = props;
    const classes = ['lynn-inline-code', className].filter(Boolean).join(' ');
    return (_jsx("code", { className: classes, style: style, children: children }));
}
