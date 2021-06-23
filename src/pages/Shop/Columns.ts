export const colsTabZero = [
  {
    Header: 'App name',
    accessor: 'app_name_display',
    Filter: () => null,
    width: 720,
    maxWidth: 800,
    minWidth: 250,
  },
  {
    Header: 'Type',
    accessor: 'type',
    Filter: () => null,
    width: 550,
    minWidth: 150,
    maxWidth: 550,
  },
];

export const colsTabOne = [
  {
    Header: 'App name',
    accessor: 'app_name_display',
    Filter: () => null,
    width: 285,
    maxWidth: 400,
    minWidth: 250,
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
    width: 170,
    minWidth: 120,
    maxWidth: 300,
  },
];
