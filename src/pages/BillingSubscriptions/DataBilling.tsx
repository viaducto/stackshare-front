import { AvatarWithText, Container, Paragraph } from '@jp-olvera/jp-viaducto-components';
import React from 'react';
import { Center } from '../../components/Center';
import Tag from '../../components/Tag/Tag';
import master from './mastercard.svg';

export const Payment = () => (
  <Container vertical='sm' horizontal='xs'>
    <AvatarWithText
      className='avatar-text'
      avatar={{
        src: master,
        alt: 'card',
        size: 'small',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%);',
      }}
    >
      <div style={{ flexDirection: 'column' }}>
        <Paragraph lineHeight='100%'>XXXX-XXXX-XXXX-1345</Paragraph>
        <Paragraph color='#838383' lineHeight='100%' size='sm'>
          Master Card - Debit
        </Paragraph>
      </div>
    </AvatarWithText>
  </Container>
);

export const columns = [
  {
    accessor: 'invoice_id',
    Header: 'Invoice ID',
    minWidth: 150,
    width: 150,
    maxWidth: 180,
    Cell: (props: any) => (
      <Center>
        <Paragraph>{props.data[props.row.index].invoice_id}</Paragraph>
      </Center>
    ),
  },
  {
    accessor: 'date',
    Header: 'Due Date',
    minWidth: 200,
    width: 200,
    maxWidth: 250,
    Cell: (props: any) => (
      <Center>
        <Paragraph>{props.data[props.row.index].date}</Paragraph>
      </Center>
    ),
  },
  {
    accessor: 'pay',
    Header: 'Payment Due',
    minWidth: 250,
    width: 250,
    maxWidth: 300,
    Cell: (props: any) => (
      <Center>
        <Paragraph>{props.data[props.row.index].pay}</Paragraph>
      </Center>
    ),
  },
  {
    accessor: 'amount',
    Header: 'Amount',
    minWidth: 180,
    width: 180,
    maxWidth: 230,
    Cell: (props: any) => (
      <Center>
        <Paragraph>{props.data[props.row.index].amount}</Paragraph>
      </Center>
    ),
  },
  {
    accessor: 'status',
    Header: 'Status',
    minWidth: 150,
    width: 150,
    maxWidth: 180,
    Cell: (props: any) => <Center>{props.data[props.row.index].status}</Center>,
  },
  {
    accessor: 'method',
    Header: 'Method',
    minWidth: 300,
    width: 300,
    maxWidth: 350,
    Cell: (props: any) => <Center>{props.data[props.row.index].method}</Center>,
  },
];

export const data = [
  {
    invoice_id: '389.29',
    date: 'March 4, 2018',
    pay: 'March 4, 2018',
    amount: '$282',
    status: (
      <Center>
        <Tag label='Paid' color='#52C41A' backgroundColor='#F6FFED' borderColor='#B7EB8F' />
      </Center>
    ),
    method: <Payment />,
    id: '1',
  },
  {
    invoice_id: '267.41',
    date: 'April 6, 2014',
    pay: 'March 4, 2018',
    amount: '$884',
    status: (
      <Center>
        <Tag label='Paid' color='#52C41A' backgroundColor='#F6FFED' borderColor='#B7EB8F' />
      </Center>
    ),
    method: <Payment />,
    id: '2',
  },
  {
    invoice_id: '751.84',
    date: 'May 17, 2015',
    pay: 'March 4, 2018',
    amount: '$513',
    status: (
      <Center>
        <Tag label='Unpaid' color='#F5222D' backgroundColor='#FFF1F0' borderColor='#FFA39E' />
      </Center>
    ),
    method: <Payment />,
    id: '3',
  },
  {
    invoice_id: '280.40',
    date: 'July 21, 2015',
    pay: 'March 4, 2018',
    amount: '$729',
    status: (
      <Center>
        <Tag label='Paid' color='#52C41A' backgroundColor='#F6FFED' borderColor='#B7EB8F' />
      </Center>
    ),
    method: <Payment />,
    id: '4',
  },
  {
    invoice_id: '512.14',
    date: 'March 1, 2020',
    pay: 'March 4, 2018',
    amount: '$493',
    status: (
      <Center>
        <Tag label='Paid' color='#52C41A' backgroundColor='#F6FFED' borderColor='#B7EB8F' />
      </Center>
    ),
    method: <Payment />,
    id: '5',
  },
  {
    invoice_id: '584.61',
    date: 'May 3, 2014',
    pay: 'March 4, 2018',
    amount: '$348',
    status: (
      <Center>
        <Tag label='Paid' color='#52C41A' backgroundColor='#F6FFED' borderColor='#B7EB8F' />
      </Center>
    ),
    method: <Payment />,
    id: '6',
  },
  {
    invoice_id: '581.68',
    date: 'February 20, 2015',
    pay: 'March 4, 2018',
    amount: '$849',
    status: (
      <Center>
        <Tag label='Pending' color='#FA8C16' backgroundColor='#FFF7E6' borderColor='#FFD591' />
      </Center>
    ),
    method: <Payment />,
    id: '7',
  },
  {
    invoice_id: '162.17',
    date: 'December 14, 2016',
    pay: 'March 4, 2018',
    amount: '$949',
    status: (
      <Center>
        <Tag label='Paid' color='#52C41A' backgroundColor='#F6FFED' borderColor='#B7EB8F' />
      </Center>
    ),
    method: <Payment />,
    id: '8',
  },
  {
    invoice_id: '736.32',
    date: 'May 1, 2018',
    pay: 'March 4, 2018',
    amount: '$620',
    status: (
      <Center>
        <Tag label='Paid' color='#52C41A' backgroundColor='#F6FFED' borderColor='#B7EB8F' />
      </Center>
    ),
    method: <Payment />,
    id: '9',
  },
];
