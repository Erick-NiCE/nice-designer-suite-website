import { Footer } from 'lynn-ui';

export function SiteDefault() {
  return <Footer />;
}

export function CustomColumns() {
  const columns = [
    {
      title: 'Package',
      links: [
        { label: 'Tokens', href: '#tokens-colors' },
        { label: 'Components', href: '#button' },
      ],
    },
    {
      title: 'Motion',
      links: [
        { label: 'Lightning', href: '#lightning', active: true },
        { label: 'LiquidFill', href: '#liquid-fill' },
      ],
    },
  ];
  return <Footer columns={columns} />;
}
