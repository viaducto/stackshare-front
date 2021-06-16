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
    bidding_type: DummyBadge({ label: 'Bandwith', color: '#F0F5FF', textColor: '#2F54EB' }),
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
    bidding_type: DummyBadge({ label: 'Bandwith', color: '#F0F5FF', textColor: '#2F54EB' }),
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
    bidding_type: DummyBadge({ label: 'Data package', color: '#F9F0FF', textColor: '#722ED1' }),
    expires: 'March 4, 2021. 4:00 am',
    rate: 4,
    total: 500,
    specification: true,
    id: 'OAUTH|FsLAKS',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
  {
    expandible: null,
    bidding_type: DummyBadge({ label: 'Secure Channel', color: '#F0F5FF', textColor: '#2F54EB' }),
    expires: 'March 4, 2021. 4:00 am',
    rate: 1,
    total: 500,
    specification: true,
    id: 'OAUTH|FLAdKS',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
  {
    expandible: null,
    bidding_type: DummyBadge({ label: 'Bandwith', color: '#F0F5FF', textColor: '#2F54EB' }),
    expires: 'March 4, 2021. 4:00 am',
    rate: 133,
    total: 500,
    specification: true,
    id: 'OAUTH|FLAKSf',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
  {
    expandible: null,
    bidding_type: DummyBadge({ label: 'Bandwith', color: '#F0F5FF', textColor: '#2F54EB' }),
    expires: 'March 4, 2021. 4:00 am',
    rate: 348,
    total: 500,
    specification: true,
    id: 'OAUTH|FLAfsKS',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
  {
    expandible: null,
    bidding_type: DummyBadge({ label: 'Data package', color: '#F9F0FF', textColor: '#722ED1' }),
    expires: 'March 4, 2021. 4:00 am',
    rate: 0,
    total: 500,
    specification: true,
    id: 'OAUTH|FLqAKS',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
  {
    expandible: null,
    bidding_type: DummyBadge({ label: 'Bandwith', color: '#F0F5FF', textColor: '#2F54EB' }),
    expires: 'March 4, 2021. 4:00 am',
    rate: 949,
    total: 500,
    specification: true,
    id: 'OAUTH|FLA2KS',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
  {
    expandible: null,
    bidding_type: DummyBadge({ label: 'Data package', color: '#F9F0FF', textColor: '#722ED1' }),
    expires: 'March 4, 2021. 4:00 am',
    rate: 0,
    total: 500,
    specification: true,
    id: 'OAUTH|FLAK3S',
    wanted_bandwith: '500 Mb/s',
    wanted_uptimes: '24hrs',
    time_frame: 'March 4, 2021 - March 30, 2021',
    data_cap: 'Unlimited',
    order_type: 'Market Order',
  },
];

// export const dummyColumns = (active: any, setAvtive: any) => [
//   {
//     Header: 'Bidding Type',
//     accessor: 'bidding_type',
//     Filter: () => null,
//   },
//   {
//     Header: 'Expires by',
//     accessor: 'expires',
//     Filter: () => null,
//   },
//   {
//     Header: 'Rate per Mb/sec',
//     accessor: 'rate',
//     Filter: () => null,
//     prefix: '$',
//   },
//   {
//     Header: 'Total',
//     accessor: 'total',
//     Filter: () => null,
//     prefix: '$',
//   },
//   {
//     Header: 'Specification',
//     accessor: 'specification',
//     Filter: () => null,
//     Cell: (props: any) => {
//       return (
//         <div style={{ display: 'inline-flex', justifyContent: 'space-between' }}>
//           <Button label='See details' colors={details} onClick={() => {}} />
//           <Button label='Delete' colors={deleteColor} onClick={() => {}} />
//           <Drawer active={false} onClose={() => null}>
//             asdasdasd
//           </Drawer>
//         </div>
//       );
//     },
//   },
// ];
