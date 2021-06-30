export const colsTabZero = [
  {
    Header: 'App name',
    accessor: 'app_name_display',
    Filter: () => null,
    width: 500,
    maxWidth: 600,
    minWidth: 250,
  },
  {
    Header: 'Type',
    accessor: 'type',
    Filter: () => null,
    width: 300,
    maxWidth: 400,
    minWidth: 200,
  },
];

export const colsTabOne = [
  {
    Header: 'App name',
    accessor: 'app_name_display',
    Filter: () => null,
    width: 200,
    minWidth: 120,
    maxWidth: 300,
  },
  {
    Header: 'Type',
    accessor: 'type',
    Filter: () => null,
    width: 200,
    minWidth: 120,
    maxWidth: 300,
  },
  {
    Header: 'Installed by',
    accessor: 'installed_by',
    Filter: () => null,
    width: 200,
    minWidth: 120,
    maxWidth: 300,
  },
  {
    Header: 'Expense period',
    accessor: 'expense_period',
    prefix: '$',
    Filter: () => null,
    width: 150,
    minWidth: 90,
    maxWidth: 300,
  },
];
