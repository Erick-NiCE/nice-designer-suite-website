import { useEffect, useId, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Spinner } from '../Spinner/Spinner.js';
import { IconLock } from '../../icons/icons.js';

/** The Teams glyph the real gate ships, inlined so the default needs no asset. */
function TeamsIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 2H8a2 2 0 00-2 2v2H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-2h2a2 2 0 002-2V4a2 2 0 00-2-2zM4 20V8h12v12H4zm16-4h-2V8a2 2 0 00-2-2H8V4h12v12z"
        fill="currentColor"
      />
    </svg>
  );
}

export interface AccessGateProps {
  /** Heading, e.g. `NiCE Designer Site Login`. */
  title: string;
  /** Explanatory line under the heading. */
  subtitle: ReactNode;
  /**
   * Called with the trimmed, lower-cased code, matching what the real gate
   * compares (`input.value.trim().toLowerCase()`).
   */
  onSubmit: (code: string) => void;
  /**
   * Rejection message. Every time this arrives the input shakes and clears,
   * which is the gate's whole error affordance.
   */
  error?: string;
  /** The "don't have the code" paragraph above the link button. */
  ctaText?: ReactNode;
  /** Link target for the pill button, e.g. a Teams deep link. */
  ctaHref?: string;
  /** Pill button label. */
  ctaLinkLabel?: string;
  /** Pill button glyph. Defaults to the Teams mark the real gate uses. */
  ctaIcon?: ReactNode;
  /**
   * Fades the overlay out and takes it out of the layout once the fade
   * finishes - the two-step `unlocked` -> `display: none` the real gate does
   * with a 420ms timer.
   */
  unlocked?: boolean;
  /** Swaps the submit label for a spinner and blocks further submits. */
  submitting?: boolean;
  /** Submit button label. */
  submitLabel?: string;
  /** Password field placeholder. */
  inputPlaceholder?: string;
  /** Lock tile glyph. */
  lockIcon?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/** Matches the real gate's 0.4s fade plus the 20ms it allows for. */
const FADE_MS = 420;
const SHAKE_MS = 400;

/**
 * The site-wide login modal.
 *
 * One component for what the site currently ships twice - `site-gate.css` /
 * `site-gate.js` (canonical, used on nearly every page) and roadmap.html's
 * hand-rolled `.gate-*` copy, which had drifted on the divider color, the
 * input padding and three text alphas. This is the canonical version.
 *
 * Deliberately does no password checking of its own: the real gate's
 * comparison is client-side and readable in source, so the code lives with
 * the caller and this component only reports what was typed.
 *
 * Usage: fully caller-driven. Compare inside `onSubmit` (it hands you the code
 * already `.trim().toLowerCase()`d), set `error` to a message to reject, and
 * flip `unlocked` to true to accept - the overlay then fades for 420ms before
 * unmounting itself, so it can stay rendered while the page behind it
 * hydrates. `submitting` is for a gate that checks against a server.
 *
 * Don't: don't clear `error` by hand to reset the field - the component already
 * empties the input and shakes it on every rejection, including a second
 * rejection carrying the identical message (the effect keys on an attempt
 * counter too). And don't assume it behaves like a modal beyond the markup: it
 * sets `role="dialog"` and `aria-modal`, but owns no focus trap and no Escape
 * handler, so dismissing it on Escape is the caller's job.
 */
export function AccessGate(props: AccessGateProps) {
  const {
    title,
    subtitle,
    onSubmit,
    error,
    ctaText,
    ctaHref,
    ctaLinkLabel = 'Message on Teams',
    ctaIcon = <TeamsIcon />,
    unlocked = false,
    submitting = false,
    submitLabel = 'Unlock',
    inputPlaceholder = 'Enter code',
    lockIcon = <IconLock size={28} />,
    className,
    style,
  } = props;

  const [code, setCode] = useState('');
  const [shaking, setShaking] = useState(false);
  const [hidden, setHidden] = useState(unlocked);
  const [attempt, setAttempt] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const titleId = useId();

  // A rejection shakes the field and empties it, once per attempt. Keying the
  // effect on the attempt counter as well as the message means a second wrong
  // code still shakes even when the message is character-for-character the
  // same as the first one's.
  useEffect(() => {
    if (!error) return;
    setShaking(true);
    setCode('');
    const timer = setTimeout(() => setShaking(false), SHAKE_MS);
    return () => clearTimeout(timer);
  }, [error, attempt]);

  useEffect(() => {
    if (!unlocked) {
      setHidden(false);
      return;
    }
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setHidden(true);
      return;
    }
    const timer = setTimeout(() => setHidden(true), FADE_MS);
    return () => clearTimeout(timer);
  }, [unlocked]);

  if (hidden) return null;

  const classes = [
    'lynn-access-gate',
    unlocked ? 'lynn-access-gate-unlocked' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const showCta = ctaText != null || ctaHref != null;

  const submit = () => {
    if (submitting) return;
    setAttempt((count) => count + 1);
    onSubmit(code.trim().toLowerCase());
  };

  return (
    <div
      className={classes}
      style={style}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <form
        className="lynn-access-gate-card"
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <div className="lynn-access-gate-lock" aria-hidden="true">
          {lockIcon}
        </div>
        <div className="lynn-access-gate-title" id={titleId}>
          {title}
        </div>
        <div className="lynn-access-gate-subtitle">{subtitle}</div>

        <div className="lynn-access-gate-input-wrap">
          <input
            ref={inputRef}
            className={[
              'lynn-access-gate-input',
              error ? 'lynn-access-gate-input-error' : null,
              shaking ? 'lynn-access-gate-input-shake' : null,
            ]
              .filter(Boolean)
              .join(' ')}
            type="password"
            value={code}
            placeholder={inputPlaceholder}
            autoComplete="off"
            aria-label={inputPlaceholder}
            aria-invalid={error ? true : undefined}
            onChange={(event) => setCode(event.target.value)}
            // The form's submit button already makes Enter work in a real
            // browser; site-gate.js binds the key explicitly anyway, and so
            // does this - implicit submission is the one thing headless
            // drivers and password managers routinely fail to trigger.
            onKeyDown={(event) => {
              if (event.key !== 'Enter') return;
              event.preventDefault();
              submit();
            }}
          />
        </div>

        <div className="lynn-access-gate-error" role="alert">
          {error}
        </div>

        <button
          className="lynn-access-gate-submit"
          type="submit"
          disabled={submitting}
        >
          {submitting ? <Spinner size="sm" ariaLabel={null} /> : null}
          {submitLabel}
        </button>

        {showCta ? (
          <>
            <div className="lynn-access-gate-divider" />
            <div className="lynn-access-gate-cta">
              {ctaText}
              {/* The source puts a <br> between the paragraph and the pill.
                  Wrapping the link instead keeps that line break the
                  component's business rather than the caller's. */}
              {ctaHref != null ? (
                <div>
                  <a
                    className="lynn-access-gate-cta-link"
                    href={ctaHref}
                    target="_blank"
                    rel="noopener"
                  >
                    {ctaIcon}
                    {ctaLinkLabel}
                  </a>
                </div>
              ) : null}
            </div>
          </>
        ) : null}
      </form>
    </div>
  );
}
