import type { CSSProperties, ReactNode } from 'react';
import { useScrollHideNav } from '../../hooks/useScrollHideNav.js';

export interface NavProps {
  /**
   * Brand mark on the left. Defaults to the real three-part Lynn wordmark
   * (blue "NiCE" + white "Designer Suite").
   */
  logo?: ReactNode;
  /** Href the logo links to. Pass `null` to render the logo as plain text. */
  logoHref?: string | null;
  /**
   * The single right-hand call to action. The source nav has exactly one
   * action slot, so this is a single node rather than a list.
   */
  cta?: ReactNode;
  /**
   * Slide the nav away while scrolling down and bring it back on scroll up.
   * Defaults on, matching the live site.
   */
  autoHide?: boolean;
  /** Accessible name for the landmark. */
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * The Lynn top navigation bar: 60px tall, sticky, `rgba(33,33,43,0.92)` with
 * a 16px backdrop blur, auto-hiding on scroll-down.
 *
 * Deliberately excludes the site's left `doc-rail`. That rail is generated
 * from `nice-effects.js`'s `DOC_PAGES` array - a hard-coded map of the
 * marketing site's own pages, with per-page section anchors, search, a
 * persisted collapse state and scroll-warmth highlighting. It is page
 * content, not a reusable design-system primitive, so it has no place in a
 * component package.
 *
 * Usage: one per page, first in the tree - it is `position: sticky; top: 0` at
 * `z-index: 100`, so it needs to be a direct child of the scrolling column
 * rather than nested inside a transformed or `overflow: hidden` ancestor. The
 * single `cta` slot is where a `Button`, a `ThemeToggle` or a `SearchInput`
 * goes. `logoHref={null}` renders the wordmark as plain text, for a page that
 * is already the home page. Turn `autoHide` off for a docs shell, where a nav
 * that slides away mid-scroll costs more than the space it frees.
 *
 * Don't: don't expect it to re-skin with the theme - it paints the site's
 * literal `rgba(33,33,43,0.92)` rather than reading the neutral tokens, so in
 * `light` mode it stays dark unless you override that one background in
 * `className` (which is exactly what the playground shell does). And don't try
 * to fit a link row into `cta`: the source nav has one action slot, so it is a
 * single node, not a list.
 */
export function Nav(props: NavProps) {
  const {
    logo,
    logoHref = '#',
    cta,
    autoHide = true,
    ariaLabel = 'Main',
    className,
    style,
  } = props;

  const hidden = useScrollHideNav({ enabled: autoHide });

  const classes = [
    'lynn-nav',
    hidden ? 'lynn-nav-hidden' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const brand = logo ?? (
    <>
      <span className="lynn-nav-logo-nice">NiCE</span>
      <span className="lynn-nav-logo-designer"> Designer</span>
      <span className="lynn-nav-logo-suite"> Suite</span>
    </>
  );

  return (
    <nav className={classes} style={style} aria-label={ariaLabel}>
      {logoHref == null ? (
        <span className="lynn-nav-logo">{brand}</span>
      ) : (
        <a className="lynn-nav-logo" href={logoHref}>
          {brand}
        </a>
      )}
      {cta != null ? <div className="lynn-nav-cta">{cta}</div> : null}
    </nav>
  );
}
