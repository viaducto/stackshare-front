/* eslint-disable jsx-a11y/no-redundant-roles */
import { Paragraph } from '@jp-olvera/jp-viaducto-components';
import React from 'react';
import { Center } from '../../components/Center';
import { Right } from '../../components/Right';
import Tag from '../../components/Tag/Tag';

export const dummyData = [
  {
    expandible: null,
    bidding_type: { label: 'Bandwith', color: '#F0F5FF', textColor: '#2F54EB' },
    expires: 'March 4, 2021. 4:00 am',
    rate: '$1',
    total: '$500',
    specification: true,
    id: 'OAUTH|FEWFEW',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
  {
    expandible: null,
    bidding_type: { label: 'Bandwith', color: '#F0F5FF', textColor: '#2F54EB' },
    expires: 'March 4, 2021. 4:00 am',
    rate: '$3',
    total: '$500',
    specification: true,
    id: 'OAUTH|FLAKS',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
  {
    expandible: null,
    bidding_type: { label: 'Data package', color: '#F9F0FF', textColor: '#722ED1' },
    expires: 'March 4, 2021. 4:00 am',
    rate: '$4',
    total: '$500',
    specification: true,
    id: 'OAUTH|FsLAKasS',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
  {
    expandible: null,
    bidding_type: { label: 'Secure Channel', color: '#F0F5FF', textColor: '#2F54EB' },
    expires: 'March 4, 2021. 4:00 am',
    rate: '$1',
    total: '$500',
    specification: true,
    id: 'OAUTH|FLAddKS',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
  {
    expandible: null,
    bidding_type: { label: 'Bandwith', color: '#F0F5FF', textColor: '#2F54EB' },
    expires: 'March 4, 2021. 4:00 am',
    rate: '$133',
    total: '$500',
    specification: true,
    id: 'OAUTH|FLAffKSf',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
  {
    expandible: null,
    bidding_type: { label: 'Bandwith', color: '#F0F5FF', textColor: '#2F54EB' },
    expires: 'March 4, 2021. 4:00 am',
    rate: '$348',
    total: '$500',
    specification: true,
    id: 'OAUTH|gsd',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
  {
    expandible: null,
    bidding_type: { label: 'Data package', color: '#F9F0FF', textColor: '#722ED1' },
    expires: 'March 4, 2021. 4:00 am',
    rate: '$0',
    total: '$500',
    specification: true,
    id: 'OAUTH|FLqAfasKS',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
  {
    expandible: null,
    bidding_type: { label: 'Bandwith', color: '#F0F5FF', textColor: '#2F54EB' },
    expires: 'March 4, 2021. 4:00 am',
    rate: '$949',
    total: '$500',
    specification: true,
    id: 'OAUTH|FLA2K34S',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
  {
    expandible: null,
    bidding_type: { label: 'Data package', color: '#F9F0FF', textColor: '#722ED1' },
    expires: 'March 4, 2021. 4:00 am',
    rate: '$0',
    total: '$500',
    specification: true,
    id: 'OAUTH|423',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
];

export const buyColumns = [
  {
    Header: 'Bidding Type',
    accessor: 'bidding_type',
    Filter: () => null,
    maxWidth: 250,
    width: 140,
    minWidth: 140,
    Cell: (props: any) => {
      const { label, color, textColor } = props.data[props.row.index].bidding_type;
      return (
        <Center>
          <Tag label={label} backgroundColor={color} color={textColor} borderColor={textColor} />
        </Center>
      );
    },
  },
  {
    Header: 'Expires by',
    accessor: 'expires',
    Filter: () => null,
    maxWidth: 250,
    width: 180,
    minWidth: 180,
    Cell: (props: any) => {
      const data = props.data[props.row.index].expires;
      return (
        <Center>
          <Paragraph>{data}</Paragraph>
        </Center>
      );
    },
  },
  {
    Header: 'Rate per Mb/sec',
    accessor: 'rate',
    Filter: () => null,
    width: 140,
    minWidth: 140,
    maxWidth: 200,
    Cell: (props: any) => {
      const data = props.data[props.row.index].rate;
      return (
        <Right>
          <Paragraph>{data}</Paragraph>
        </Right>
      );
    },
  },
  {
    Header: 'Total',
    accessor: 'total',
    Filter: () => null,
    width: 140,
    minWidth: 140,
    maxWidth: 200,
    Cell: (props: any) => {
      const data = props.data[props.row.index].total;
      return (
        <Right>
          <Paragraph>{data}</Paragraph>
        </Right>
      );
    },
  },
];
