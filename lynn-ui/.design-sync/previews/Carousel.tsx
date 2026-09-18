import { Carousel } from 'lynn-ui';

const SLIDES = [
  {
    image: 'https://picsum.photos/seed/lynn-design-system/600/400',
    title: 'Lynn Design System',
    tagline: 'Tokens, motion, and the live component playground.',
    ctaLabel: 'Explore Lynn',
    ctaHref: './lynn.html',
  },
  {
    image: 'https://picsum.photos/seed/lynn-install-guide/600/400',
    title: 'Install Guide',
    tagline: 'Chrome extension, Claude Desktop, and the Figma plugin.',
    ctaLabel: 'Get set up',
    ctaHref: './install-guide.html',
  },
  {
    image: 'https://picsum.photos/seed/lynn-marketplace/600/400',
    title: 'The Marketplace',
    tagline: 'Community skills and tools, installed the same way.',
    ctaLabel: 'Browse skills',
    ctaHref: './marketplace.html',
  },
  {
    image: 'https://picsum.photos/seed/lynn-faq/600/400',
    title: 'FAQ',
    tagline: 'How the tools work, and how to get set up.',
    ctaLabel: 'Read the FAQ',
    ctaHref: './faq.html',
  },
];

export function Default() {
  return <Carousel slides={SLIDES} />;
}
