/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';

const DummyBadge = ({ label, color, textColor }: any) => (
  <div
    style={{
      alignSelf: 'center',
      height: '1.375rem',
      backgroundColor: color,
      border: `0.063rem solid ${textColor}`,
      color: textColor,
      borderRadius: 2,
      width: 'fit-content',
      boxSizing: 'border-box',
      padding: '0.1rem 0.5rem',
      textAlign: 'center',
      verticalAlign: 'center',
      fontSize: 12,
    }}
  >
    {label}
  </div>
);

export const dummyData = [
  {
    expandible: null,
    bidding_type: { label: 'Bandwith', color: '#F0F5FF', textColor: '#2F54EB' },
    expires: 'March 4, 2021. 4:00 am',
    rate: 1,
    total: 500,
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
    rate: 3,
    total: 500,
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
    rate: 4,
    total: 500,
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
    rate: 1,
    total: 500,
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
    rate: 133,
    total: 500,
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
    rate: 348,
    total: 500,
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
    rate: 0,
    total: 500,
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
    rate: 949,
    total: 500,
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
    rate: 0,
    total: 500,
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
    width: 250,
    maxWidth: 250,
    minWidth: 100,
    Cell: (props: any) => {
      const { label, color, textColor } = props.data[props.row.index].bidding_type;

      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <DummyBadge label={label} color={color} textColor={textColor} />
        </div>
      );
    },
  },
  {
    Header: 'Expires by',
    accessor: 'expires',
    Filter: () => null,
    width: 250,
    maxWidth: 250,
    minWidth: 100,
  },
  {
    Header: 'Rate per Mb/sec',
    accessor: 'rate',
    Filter: () => null,
    prefix: '$',
    width: 200,
    maxWidth: 200,
    minWidth: 100,
  },
  {
    Header: 'Total',
    accessor: 'total',
    Filter: () => null,
    prefix: '$',
    width: 200,
    maxWidth: 200,
    minWidth: 100,
  },
];
