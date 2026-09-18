import { Nav, Button } from 'lynn-ui';

export function WithCta() {
  return (
    <Nav
      autoHide={false}
      logoHref="#nav"
      cta={<Button variant="primary">Download</Button>}
    />
  );
}

export function NoCta() {
  return <Nav autoHide={false} logoHref={null} />;
}
