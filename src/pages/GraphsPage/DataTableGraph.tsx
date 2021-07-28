import React from 'react';
import { Paragraph, Progress } from '@jp-olvera/jp-viaducto-components';
import { Share } from 'react-ikonate';
import { LineSeries, XYPlot } from 'react-vis';
import { Center } from '../../components/Center';

let dataRandom = () => Math.random() * (10 - 1) + 1;

export const PageName = ({ page }: { page: string }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 0',
    }}
  >
    <Paragraph size='sm'>{page}</Paragraph>
    <Share color='#9EA0A5' fontSize={22} />
  </div>
);
export const GraphTable = ({ percent }: { percent: number }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 0',
    }}
  >
    <Paragraph>{percent}</Paragraph>
    <div>
      <XYPlot width={98} height={30} margin={{ left: 10, right: 0, bottom: 5 }}>
        <LineSeries
          style={{
            fill: 'rgba(22, 101, 216, .1)',
          }}
          color='#1665D8'
          data={[
            { x: 0, y: dataRandom() },
            { x: 1, y: dataRandom() },
            { x: 2, y: dataRandom() },
            { x: 3, y: dataRandom() },
            { x: 4, y: dataRandom() },
            { x: 5, y: dataRandom() },
            { x: 6, y: dataRandom() },
            { x: 7, y: dataRandom() },
            { x: 8, y: dataRandom() },
            { x: 9, y: dataRandom() },
            { x: 10, y: dataRandom() },
            { x: 11, y: dataRandom() },
            { x: 12, y: dataRandom() },
            { x: 13, y: dataRandom() },
          ]}
        />
      </XYPlot>
    </div>
  </div>
);
export const LoaderTable = ({
  visitors,
  current,
  completed,
}: {
  visitors: string;
  current: number;
  completed: number;
}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 0',
    }}
  >
    <Paragraph>{visitors}</Paragraph>
    <Progress totalSteps={10} loader='progress' currentStep={current} completedSteps={completed} />
  </div>
);

export const visitedPages = [
  {
    expandible: null,
    id: 'OAUTH|FLA2K34S',
    page: PageName({ page: '/store/' }),
    visitors: '4,890',
    visits: '3,985',
    bounce: GraphTable({ percent: 81.56 }),
  },
  {
    expandible: null,
    id: 'OAUTH|321',
    page: PageName({ page: '/store/symbols-styleguides' }),
    visitors: '3,785',
    visits: '3,182',
    bounce: GraphTable({ percent: 62.56 }),
  },
  {
    expandible: null,
    id: 'OAUTH|123',
    page: PageName({ page: '/store/dashboard-ui-kit' }),
    visitors: '2,985',
    visits: '2,115',
    bounce: GraphTable({ percent: 58.76 }),
  },
  {
    expandible: null,
    id: 'OAUTH|4534',
    page: PageName({ page: '/store/webflow-cards.html' }),
    visitors: '2,440',
    visits: '1,789',
    bounce: GraphTable({ percent: 39.59 }),
  },
];

export const socialMedia = [
  {
    expandible: null,
    id: 'OAUTH|4534',
    network: 'Instagram',
    traffic: LoaderTable({ visitors: '3,550', completed: 8, current: 8 }),
  },
  {
    expandible: null,
    id: 'OAUTH|123',
    network: 'Facebook',
    traffic: LoaderTable({ visitors: '2,236', completed: 6, current: 6 }),
  },
  {
    expandible: null,
    id: 'OAUTH|3212',
    network: 'Twitter',
    traffic: LoaderTable({ visitors: '1,795', completed: 5, current: 5 }),
  },
  {
    expandible: null,
    id: 'OAUTH|233',
    network: 'Linkedin',
    traffic: LoaderTable({ visitors: '62', completed: 2, current: 2 }),
  },
];
export const visitedColumns = [
  {
    Header: 'Page Name',
    accessor: 'page',
    Filter: () => null,
    width: 180,
    Cell: (row: any) => (
      <Center>
        <Paragraph>{row.value}</Paragraph>
      </Center>
    ),
  },
  {
    Header: 'Visitors',
    accessor: 'visitors',
    Filter: () => null,
    width: 100,
    Cell: (row: any) => (
      <Center>
        <Paragraph>{row.value}</Paragraph>
      </Center>
    ),
  },
  {
    Header: 'Unique Page Visits',
    accessor: 'visits',
    Filter: () => null,
    width: 150,
    Cell: (row: any) => (
      <Center>
        <Paragraph>{row.value}</Paragraph>
      </Center>
    ),
  },
  {
    Header: 'Bounce Rate',
    accessor: 'bounce',
    Filter: () => null,
    width: 150,
    Cell: (row: any) => <Center>{row.value}</Center>,
  },
];
export const socialColumns = [
  {
    Header: 'Network',
    accessor: 'network',
    Filter: () => null,
    width: 90,
    Cell: (row: any) => (
      <Center>
        <Paragraph>{row.value}</Paragraph>
      </Center>
    ),
  },
  {
    Header: 'Visitors',
    accessor: 'traffic',
    Filter: () => null,
    width: 200,
    Cell: (row: any) => (
      <Center>
        <Paragraph>{row.value}</Paragraph>
      </Center>
    ),
  },
];

export const ITEMS = [
  { title: 'Profit', color: '#1665D8', strokeStyle: 'solid' },
  {
    title: 'Profit/Expenses',
    color: '#9EA0A5',
    strokeDasharray: '2 2',
  },
];
export const DATA = [
  {
    x: 1,
    y: 3.1,
  },
  {
    x: 2,
    y: 4.8,
  },
  {
    x: 3,
    y: 5.8,
  },
  {
    x: 4,
    y: 2,
  },
  {
    x: 5,
    y: 4.8,
  },
  {
    x: 6,
    y: 5.8,
  },
  {
    x: 7,
    y: 3.2,
  },
  {
    x: 8,
    y: 5,
  },
  {
    x: 9,
    y: 2,
  },
  {
    x: 10,
    y: 5.6,
  },
  {
    x: 11,
    y: 3.1,
  },
  {
    x: 12,
    y: 6.9,
  },
  {
    x: 13,
    y: 5,
  },
  {
    x: 14,
    y: 5.8,
  },
  {
    x: 15,
    y: 2.2,
  },
  {
    x: 16,
    y: 3,
  },
  {
    x: 17,
    y: 2,
  },
  {
    x: 18,
    y: 6.2,
  },
  {
    x: 19,
    y: 2,
  },
  {
    x: 20,
    y: 5.2,
  },
  {
    x: 21,
    y: 5.7,
  },
  {
    x: 22,
    y: 3,
  },
  {
    x: 23,
    y: 6.3,
  },
  {
    x: 24,
    y: 2,
  },
  {
    x: 25,
    y: 3.2,
  },
  {
    x: 26,
    y: 3.1,
  },
  {
    x: 27,
    y: 2,
  },
  {
    x: 28,
    y: 5.1,
  },
  {
    x: 29,
    y: 2,
  },
  {
    x: 30,
    y: 3,
  },
  {
    x: 31,
    y: 6.4,
  },
];

export const DAYS = ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ''];
const objToday = new Date(),
  weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayOfWeek = weekday[objToday.getDay()],
  domEnder = (function () {
    let a = objToday;
    if (/1/.test(a.toString().charAt(0))) return 'th';
    return 1 === parseInt(a.toString().charAt(1))
      ? 'st'
      : 2 === parseInt(a.toString().charAt(1))
      ? 'nd'
      : 3 === parseInt(a.toString().charAt(1))
      ? 'rd'
      : 'th';
  })();
const dayOfMonth =
    objToday.getDate() < 10 ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear();
export const today: string = dayOfWeek + ' ' + dayOfMonth + ' of ' + curMonth + ', ' + curYear;
