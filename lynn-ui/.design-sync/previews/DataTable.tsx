import { DataTable, Badge } from 'lynn-ui';

const columns = [
  { key: 'name', label: 'Component', sortable: true },
  { key: 'group', label: 'Group', sortable: true },
  { key: 'score', label: 'Coverage', sortable: true, align: 'right' as const },
];

const rows = [
  { name: 'Button', group: 'Actions', score: 100 },
  { name: 'DataTable', group: 'Data', score: 82 },
  { name: 'Alert', group: 'Feedback', score: 94 },
  { name: 'Lightning', group: 'Motion', score: 61 },
  { name: 'Accordion', group: 'Data', score: 88 },
  { name: 'CtaBanner', group: 'Marketing', score: 76 },
];

export function SortedByScore() {
  return (
    <DataTable
      columns={columns}
      rows={rows}
      defaultSort={{ key: 'score', direction: 'desc' }}
      emptyText="Nothing to show yet"
      ariaLabel="Component coverage"
    />
  );
}

export function SortedByName() {
  return (
    <DataTable
      columns={columns}
      rows={rows}
      defaultSort={{ key: 'name', direction: 'asc' }}
      emptyText="Nothing to show yet"
      ariaLabel="Component coverage, alphabetical"
    />
  );
}

export function WithCustomCells() {
  return (
    <DataTable
      columns={columns}
      rows={rows}
      defaultSort={{ key: 'group', direction: 'asc' }}
      renderCell={(row, column) => {
        if (column.key === 'score') {
          const score = row.score as number;
          return (
            <Badge status={score >= 90 ? 'great' : score >= 75 ? 'good' : 'ok'}>
              {score}%
            </Badge>
          );
        }
        return undefined;
      }}
      ariaLabel="Component coverage with grades"
    />
  );
}

export function EmptyState() {
  return (
    <DataTable
      columns={columns}
      rows={[]}
      emptyText="Nothing to show yet"
      ariaLabel="Component coverage"
    />
  );
}
