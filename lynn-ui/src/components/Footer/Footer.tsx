import type { CSSProperties, ReactNode } from 'react';
import { usePointerGrid } from '../../hooks/usePointerGrid.js';

export interface FooterLink {
  label: ReactNode;
  href: string;
  /** Marks the current page; renders in `blue`. */
  active?: boolean;
}

export interface FooterColumn {
  /**
   * Column heading. The real footer markup has no visible headings, so this
   * renders visually hidden - present for screen readers and as a grouping
   * label, invisible on screen.
   */
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  /** Brand mark. Defaults to the real two-part footer wordmark. */
  logo?: ReactNode;
  /** Link columns. Defaults to the site's real three-column grid. */
  columns?: FooterColumn[];
  /** Accessible name for the link grid. */
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Overview', href: './index.html' },
      { label: 'Install Guide', href: './install-guide.html' },
      { label: 'Claude Skills', href: './claude-skills.html' },
      { label: 'The Suite', href: './the-suite.html' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Use Cases', href: './use-cases.html' },
      { label: 'Scoring', href: './scoring.html' },
      { label: 'Dashboard', href: './dashboard.html' },
      { label: 'Roadmap', href: './roadmap.html' },
    ],
  },
  {
    title: 'Reference',
    links: [
      { label: 'Release Notes', href: './release-notes.html' },
      { label: 'FAQ', href: './faq.html' },
      { label: 'Tools', href: './tools.html' },
      { label: 'Marketplace', href: './marketplace.html' },
      { label: 'Lynn', href: './lynn.html' },
    ],
  },
];

/**
 * The Lynn site footer: a top border, the wordmark, and a three-column link
 * grid. Ported directly from theme.css's already-centralized `.site-footer`.
 *
 * Behind the content sits a faint dot lattice that lights up under the
 * pointer (and under a finger): `usePointerGrid` writes the pointer position
 * as `--lynn-mx` / `--lynn-my`, and a masked second lattice brightens the
 * dots inside a 150px radius of it. Always on, no prop, and the pointer half
 * disables itself under `prefers-reduced-motion`.
 *
 * Usage: one per page, last in the tree. Column `title`s are real headings
 * rendered visually hidden - the source footer shows no headings, but a screen
 * reader still needs the grouping - so write them as labels ("Product",
 * "Reference"), not as decoration. Mark the current page's link `active` to
 * get the blue treatment and `aria-current="page"`.
 *
 * Don't: don't ship the default `columns` outside this site - they are the
 * marketing site's own relative `./*.html` paths, so in any other app every
 * link 404s. Pass your own `columns` and `logo` instead.
 */
export function Footer(props: FooterProps) {
  const {
    logo,
    columns = DEFAULT_COLUMNS,
    ariaLabel = 'Footer',
    className,
    style,
  } = props;

  const classes = ['lynn-footer', className].filter(Boolean).join(' ');

  // Always on, and deliberately prop-less: the grid is part of what the
  // footer *is*, not a variant of it. It sits at 14% opacity behind the
  // links, so there is nothing here a consumer would need to switch off -
  // and `prefers-reduced-motion` already drops the pointer half by itself.
  const footerRef = usePointerGrid<HTMLElement>();

  const brand = logo ?? (
    <>
      <span className="lynn-footer-logo-nice">NiCE</span>
      <span className="lynn-footer-logo-designer"> Designer</span>
    </>
  );

  return (
    <footer ref={footerRef} className={classes} style={style}>
      <div className="lynn-footer-grid" aria-hidden="true" />
      <div className="lynn-footer-top">
        <div className="lynn-footer-brand">
          <div className="lynn-footer-logo">{brand}</div>
        </div>
        <nav className="lynn-footer-nav" aria-label={ariaLabel}>
          {columns.map((column, columnIndex) => (
            <div className="lynn-footer-nav-col" key={`${column.title}-${columnIndex}`}>
              <h2 className="lynn-visually-hidden">{column.title}</h2>
              {column.links.map((link, linkIndex) => (
                <a
                  key={`${link.href}-${linkIndex}`}
                  href={link.href}
                  className={link.active ? 'lynn-footer-link-active' : undefined}
                  aria-current={link.active ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
