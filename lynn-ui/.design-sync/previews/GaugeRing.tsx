import { GaugeRing } from 'lynn-ui';

export function Scores() {
  return (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      <GaugeRing value={12} tone="coral" size={104} label="Coverage" ariaLabel="Coverage score" />
      <GaugeRing value={48} tone="teal" size={104} label="Coverage" ariaLabel="Coverage score" />
      <GaugeRing value={86} tone="emerald" size={104} label="Coverage" ariaLabel="Coverage score" />
      <GaugeRing value={100} tone="blue" size={104} label="Coverage" ariaLabel="Coverage score" />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
      <GaugeRing value={86} tone="emerald" size={90} ariaLabel="Coverage score" />
      <GaugeRing value={86} tone="emerald" size={104} label="Coverage" ariaLabel="Coverage score" />
      <GaugeRing value={86} tone="emerald" size={140} label="Coverage" ariaLabel="Coverage score" />
    </div>
  );
}

export function CustomFormat() {
  return (
    <GaugeRing
      value={42}
      max={50}
      tone="indigo"
      size={140}
      label="Closed"
      format={(value) => `${value}/50`}
      ariaLabel="Tickets closed this sprint"
    />
  );
}
