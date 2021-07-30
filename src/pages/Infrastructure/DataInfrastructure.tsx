import { Paragraph } from '@jp-olvera/jp-viaducto-components';
import { Center } from '../../components/Center';
import { Right } from '../../components/Right';

export const dataInfrastructure = [
  {
    expandible: null,
    id: 'OAUTH|FEWFEW',
    device: 'Organization Owner',
    type: 'Backbone',
    device_id: '$1,000,000',
    series: 2,
    action: { deleteBtn: true, action: 'Edit' },
  },
  {
    expandible: null,
    id: 'OAUTH|asd',
    device: 'Billing Manager',
    type: 'Point of Presence',
    device_id: '$1,000,000',
    series: 2,
    action: { deleteBtn: true, action: 'Edit' },
  },
  {
    expandible: null,
    id: 'OAUTH|das',
    device: 'Infrastructure Manager',
    type: 'Network Access Point',
    device_id: '$1,000,000',
    series: 4,
    action: { deleteBtn: true, action: 'Edit' },
  },
  {
    expandible: null,
    id: 'OAUTH|123',
    device: 'Local Admin',
    type: 'Router',
    device_id: '$1,000,000',
    series: 12,
    action: { deleteBtn: true, action: 'Edit' },
  },
  {
    expandible: null,
    id: 'OAUTH|312',
    device: 'Super Local Admin',
    type: 'Router',
    device_id: '$1,000,000',
    series: 19,
    action: { deleteBtn: true, action: 'Edit' },
  },
  {
    expandible: null,
    id: 'OAUTH|6345',
    device: 'Basic User',
    type: 'Backbone',
    device_id: '$1,000,000',
    series: 239,
    action: { deleteBtn: true, action: 'Edit' },
  },
  {
    expandible: null,
    id: 'OAUTH|7467',
    device: 'View Only',
    type: 'Backbone',
    device_id: '$1,000,000',
    series: 3,
    action: { deleteBtn: true, action: 'Edit' },
  },
];

export const columnsInfrastructure = [
  {
    Header: 'Device Name',
    accessor: 'device',
    Filter: () => null,
    width: Math.round(window.innerWidth / 5),
    minWidth: 200,
    Cell: (row: any) => (
      <Center>
        <Paragraph>{row.value}</Paragraph>
      </Center>
    ),
  },
  {
    Header: 'Device Type',
    accessor: 'type',
    Filter: () => null,
    width: Math.round(window.innerWidth / 5),
    minWidth: 200,
    Cell: (row: any) => (
      <Center>
        <Paragraph>{row.value}</Paragraph>
      </Center>
    ),
  },
  {
    Header: 'Device ID',
    accessor: 'device_id',
    Filter: () => null,
    width: 188,
    maxWidth: 250,
    minWidth: 100,
    Cell: (row: any) => (
      <Right>
        <Paragraph>{row.value}</Paragraph>
      </Right>
    ),
  },
  {
    Header: 'Series Number',
    accessor: 'series',
    Filter: () => null,
    width: 188,
    maxWidth: 250,
    minWidth: 100,
    Cell: (row: any) => (
      <Right>
        <Paragraph>{row.value}</Paragraph>
      </Right>
    ),
  },
];
