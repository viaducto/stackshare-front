import { Paragraph } from '@jp-olvera/jp-viaducto-components';
import { Center } from '../../components/Center';

export const permissionColumns = [
  {
    Header: 'Role',
    accessor: 'role',
    Filter: () => null,
    width: Math.round(window.innerWidth / 4),
    Cell: (row: any) => (
      <Center>
        <Paragraph>{row.value}</Paragraph>
      </Center>
    ),
  },
  {
    Header: 'Role type',
    accessor: 'type',
    Filter: () => null,
    width: Math.round(window.innerWidth / 5),
    Cell: (row: any) => (
      <Center>
        <Paragraph>{row.value}</Paragraph>
      </Center>
    ),
  },
  {
    Header: 'Number of Users',
    accessor: 'money',
    Filter: () => null,
    width: Math.round(window.innerWidth / 6),
    Cell: (row: any) => (
      <Center>
        <Paragraph>{row.value}</Paragraph>
      </Center>
    ),
  },
  {
    Header: 'Number of Users',
    accessor: 'users',
    Filter: () => null,
    width: Math.round(window.innerWidth / 6),
    Cell: (row: any) => (
      <Center>
        <Paragraph>{row.value}</Paragraph>
      </Center>
    ),
  },
];

export const permissionData = [
  {
    expandible: null,
    id: 'OAUTH|FEWFEW',
    role: 'Organization Owner',
    type: 'Default',
    money: '1,000,000',
    users: 2,
    action: { deleteBtn: true, action: 'Edit' },
  },
  {
    expandible: null,
    id: 'OAUTH|asd',
    role: 'Billing Manager',
    type: 'Default',
    money: '1,000,000',
    users: 2,
    action: { deleteBtn: true, action: 'Edit' },
  },
  {
    expandible: null,
    id: 'OAUTH|das',
    role: 'Infrastructure Manager',
    type: 'Custom',
    money: '1,000,000',
    users: 4,
    action: { deleteBtn: true, action: 'Edit' },
  },
  {
    expandible: null,
    id: 'OAUTH|123',
    role: 'Local Admin',
    type: 'Custom',
    money: '1,000,000',
    users: 12,
    action: { deleteBtn: true, action: 'Edit' },
  },
  {
    expandible: null,
    id: 'OAUTH|312',
    role: 'Super Local Admin',
    type: 'Custom',
    money: '1,000,000',
    users: 19,
    action: { deleteBtn: true, action: 'Edit' },
  },
  {
    expandible: null,
    id: 'OAUTH|6345',
    role: 'Basic User',
    type: 'Custom',
    money: '1,000,000',
    users: 239,
    action: { deleteBtn: true, action: 'Edit' },
  },
  {
    expandible: null,
    id: 'OAUTH|7467',
    role: 'View Only',
    type: 'Custom',
    money: '1,000,000',
    users: 3,
    action: { deleteBtn: true, action: 'Edit' },
  },
];
