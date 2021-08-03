import { AvatarWithText, Container, Paragraph } from '@jp-olvera/jp-viaducto-components';
import { AvatarProps } from '@jp-olvera/jp-viaducto-components/dist/cells/Avatar/Avatar';
import { Center } from '../../components/Center';
import { Left } from '../../components/Left';

const avatar: AvatarProps = {
  src: 'https://i.pravatar.cc/32',
  alt: 'app',
  width: '45',
  height: '45',
};

export const colsTabZero = () => [
  {
    Header: 'App name',
    accessor: 'app_name_display',
    width: Math.round(window.innerWidth / 4),
    minWidth: 200,
    Cell: (row: any) => (
      <Left>
        <Container left='xl'>
          <AvatarWithText avatar={avatar} spacing='md'>
            <Paragraph>{row.value}</Paragraph>
          </AvatarWithText>
        </Container>
      </Left>
    ),
  },
  {
    Header: 'Type',
    accessor: 'type',
    width: Math.round(window.innerWidth / 3),
    minWidth: 200,
    Cell: (row: any) => {
      return (
        <Center>
          <Paragraph>{row.value}</Paragraph>
        </Center>
      );
    },
  },
];

export const colsTabOne = [
  {
    Header: 'App name',
    accessor: 'app_name_display',
    width: 180,
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
