import { AvatarWithText, Container, Paragraph } from '@jp-olvera/jp-viaducto-components';
import { AvatarProps } from '@jp-olvera/jp-viaducto-components/dist/cells/Avatar/Avatar';
import { Center } from '../../components/Center';
import { Left } from '../../components/Left';

const avatar: AvatarProps = {
  src: 'https://i.pravatar.cc/32',
  alt: 'app',
  width: '32',
  height: '32',
};

export const colsTabZero = [
  {
    Header: 'App name',
    accessor: 'app_name_display',
    Filter: () => null,
    maxWidth: 600,
    width: 250,
    minWidth: 250,
    Cell: (row: any) => (
      <Left>
        <Container left='xl'>
          <AvatarWithText avatar={avatar}>
            <Paragraph>{row.value}</Paragraph>
          </AvatarWithText>
        </Container>
      </Left>
    ),
  },
  {
    Header: 'Type',
    accessor: 'type',
    Filter: () => null,
    maxWidth: 400,
    width: 150,
    minWidth: 150,
    Cell: (row: any) => (
      <Center>
        <Paragraph>{row.value}</Paragraph>
      </Center>
    ),
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
    Cell: (row: any) => (
      <Left>
        <Container left='xl'>
          <AvatarWithText avatar={avatar}>
            <Paragraph>{row.value}</Paragraph>
          </AvatarWithText>
        </Container>
      </Left>
    ),
  },
  {
    Header: 'Type',
    accessor: 'type',
    Filter: () => null,
    width: 200,
    minWidth: 120,
    maxWidth: 300,
    Cell: (row: any) => (
      <Center>
        <Paragraph>{row.value}</Paragraph>
      </Center>
    ),
  },
  {
    Header: 'Installed by',
    accessor: 'installed_by',
    Filter: () => null,
    width: 200,
    minWidth: 120,
    maxWidth: 300,
    Cell: (row: any) => (
      <Center>
        <Paragraph>{row.value}</Paragraph>
      </Center>
    ),
  },
  {
    Header: 'Expense period',
    accessor: 'expense_period',
    Filter: () => null,
    width: 150,
    minWidth: 90,
    maxWidth: 300,
    Cell: (row: any) => (
      <Center>
        <Paragraph>{row.value}</Paragraph>
      </Center>
    ),
  },
];
