import { Skeleton } from 'lynn-ui';

export function DefaultRows() {
  return (
    <div style={{ minWidth: 260 }}>
      <Skeleton rows={3} />
    </div>
  );
}

export function LongList() {
  return (
    <div style={{ minWidth: 260 }}>
      <Skeleton rows={5} />
    </div>
  );
}

export function Compact() {
  return (
    <div style={{ minWidth: 260 }}>
      <Skeleton rows={5} compact />
    </div>
  );
}
