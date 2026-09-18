import { CodeBlock, ToastViewport } from 'lynn-ui';

export function Jsx() {
  return (
    <div>
      <CodeBlock language="jsx">{"import { Button } from 'lynn-ui';"}</CodeBlock>
      <ToastViewport />
    </div>
  );
}

export function Bash() {
  return (
    <div>
      <CodeBlock language="bash">{'npm install lynn-ui'}</CodeBlock>
      <ToastViewport />
    </div>
  );
}

export function Css() {
  return (
    <div>
      <CodeBlock language="css">
        {'.lynn-button {\n  background: var(--lynn-color-accent-blue);\n}'}
      </CodeBlock>
      <ToastViewport />
    </div>
  );
}

export function NoCopyButton() {
  return (
    <div>
      <CodeBlock language="tsx" showCopyButton={false}>
        {"export const version = '11.5';"}
      </CodeBlock>
      <ToastViewport />
    </div>
  );
}
