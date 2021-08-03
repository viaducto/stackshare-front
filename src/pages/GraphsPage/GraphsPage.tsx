/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, useRef, useState } from 'react';
import {
  Container,
  Paragraph,
  Title,
  Spacer,
  Popover,
  Select,
  WrapperTable,
  ConfigContext,
} from '@jp-olvera/jp-viaducto-components';
import { ArrowRight, ArrowRightTop, ArrowRightBottom, Cup, Ellypsis, Person } from 'react-ikonate';
import {
  XYPlot,
  DiscreteColorLegend,
  LineSeries,
  Sunburst,
  VerticalBarSeries,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineMarkSeries,
} from 'react-vis';
import { BodyContent, BodyMain } from '../../components/layout';
import Table from '../../components/Table/Table';
import {
  socialColumns,
  socialMedia,
  visitedColumns,
  visitedPages,
  ITEMS,
  DATA,
  DAYS,
  today,
} from './DataTableGraph';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import {
  CircularOptions,
  DataTitleGraph,
  GraphPercent,
  LabelNumber,
  ProgressWidget,
} from '../../components/Widgets';
import CircularTable from '../../components/Widgets/CircularTable';

const myDATA = [
  {
    x: 0,
    y: 2,
  },
  {
    x: 1,
    y: 1.7,
  },
  {
    x: 2,
    y: 1,
  },
  {
    x: 3,
    y: 4,
  },
  {
    x: 4,
    y: 3,
  },
  {
    x: 5,
    y: 2.1,
  },
  {
    x: 6,
    y: 2,
  },
];

const GraphsPage = () => {
  const ref = useRef<any | null>(null);
  const gref = useRef<any | null>(null);
  const [activePopover, setActivePopover] = useState(false);
  const [pop, setpop] = useState(false);
  const [data, setdata] = useState<{ size?: number; title?: string }>({ size: 0, title: '' });
  const [values, setValues] = useState<number | string>(0);
  const onClose = () => {
    setActivePopover(!activePopover);
  };
  const handleClose = () => {
    setpop(!pop);
  };
  const showInfo = () => {
    setActivePopover(true);
  };
  const { configuration } = useContext(ConfigContext);
  const {
    colors: {
      text: { dark, success, danger },
    },
    border,
  } = configuration;

  return (
    <BodyContent>
      {/* Header */}
      <HeaderSell
        title='Graphs'
        breadcrums={[
          { label: 'Home', href: '/', active: false },
          { label: 'Graphs', href: '', active: true },
        ]}
      >
        <Spacer size='md' />
      </HeaderSell>

      {/* Content */}
      <BodyMain>
        <div style={{ height: '80vh', overflow: 'auto' }}>
          {/* Numbers */}
          <Container
            vertical='md'
            horizontal='md'
            expandHorizontal
            style={{ boxSizing: 'border-box' }}
          >
            <Paragraph lineHeight='1.375rem' weight='600'>
              Numbers
            </Paragraph>
            <Container
              vertical='md'
              style={{
                border: '0.063rem solid #d9d9d9',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <LabelNumber title='£ 632,569' number={6} description='Total Invoiced' />
              <Spacer direction='horizontal' size='xl' />

              <div style={{ height: 60, width: 1, backgroundColor: '#EAEDF3' }} />

              <Spacer direction='horizontal' size='xl' />
              <LabelNumber title='£ 2,500' number={-1} description='Unpaid Invoices' />
              <Spacer direction='horizontal' size='xl' />

              <div style={{ height: 60, width: 1, backgroundColor: '#EAEDF3' }} />

              <Spacer direction='horizontal' size='xl' />
              <LabelNumber
                title='$ 123,456'
                number={-10}
                description='Warning'
                shapeColor='warning'
              />
              <Spacer direction='horizontal' size='xl' />

              <div style={{ height: 60, width: 1, backgroundColor: '#EAEDF3' }} />

              <Spacer direction='horizontal' size='xl' />
              <LabelNumber
                title='154 users'
                description='Custom'
                backgroundColor='#999'
                number={5}
              />
              <Spacer direction='horizontal' size='xl' />

              <div style={{ height: 60, width: 1, backgroundColor: '#EAEDF3' }} />

              <Spacer direction='horizontal' size='xl' />
              <LabelNumber title='$ 0' description='Unpaid Expenses' shapeColor='warning' />
            </Container>
          </Container>

          {/* Top graph */}
          <Container
            vertical='md'
            horizontal='md'
            expandHorizontal
            style={{ boxSizing: 'border-box' }}
          >
            <Paragraph lineHeight='1.375rem' weight='600'>
              Top Graph
            </Paragraph>
            <Container
              vertical='sm'
              horizontal='md'
              style={{
                border: '0.063rem solid #d9d9d9',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap',
                overflow: 'auto',
              }}
            >
              <GraphPercent
                title='Your Performance'
                percent={10}
                description='6 Months Increase'
                link={{ label: 'See more', href: '', icon: <ArrowRight /> }}
              >
                <Container vertical='sm'>
                  <div style={{ float: 'right', marginRight: 10, marginBottom: 30 }}>
                    <DiscreteColorLegend orientation='horizontal' items={ITEMS} />
                  </div>
                  <XYPlot width={200} height={100} margin={{ left: 0 }}>
                    <LineSeries
                      style={{
                        fill: 'none',
                      }}
                      color='#1665D8'
                      data={[
                        { x: 1, y: 0 },
                        { x: 2, y: 7 },
                        { x: 3, y: -3 },
                        { x: 4, y: 2 },
                        { x: 5, y: -6 },
                        { x: 6, y: -4 },
                      ]}
                    />
                    <LineSeries
                      style={{
                        strokeDasharray: '2 2',
                        fill: 'none',
                      }}
                      color={dark}
                      data={[
                        { x: 1, y: 3 },
                        { x: 2, y: 4 },
                        { x: 3, y: -1 },
                        { x: 4, y: -0.5 },
                        { x: 5, y: -9 },
                        { x: 6, y: 1 },
                      ]}
                    />
                  </XYPlot>
                </Container>
              </GraphPercent>

              <Spacer size='xl' />

              <div className='overflow'>
                <CircularTable
                  title='Monthly Statistics'
                  link={{ label: 'See more', icon: <ArrowRight />, href: '' }}
                  data='£12,595'
                  description='Invoiced this month'
                  additional={
                    <>
                      <Title level='4' lineHeight='2rem' align='right'>
                        £10,095
                      </Title>
                      <Title level='4' lineHeight='2rem' align='right'>
                        £2,500
                      </Title>
                    </>
                  }
                >
                  <div ref={gref}>
                    <Popover
                      position='left'
                      content={
                        <Container vertical='md' horizontal='md'>
                          <Title>
                            {data.title} : {data.size?.toString()}
                          </Title>
                        </Container>
                      }
                      active={pop}
                      target={gref}
                      handleClose={handleClose}
                    />
                    <Sunburst
                      animation={{ damping: 20, stiffness: 300 }}
                      onValueClick={(e) => {
                        setpop(false);
                        setTimeout(() => {
                          if (e.size && e.size > 0) {
                            setdata({ size: e.size, title: e.title });
                            setpop(true);
                          }
                        }, 100);
                      }}
                      getSize={(d) => d.size}
                      data={{
                        title: '',
                        size: 0,
                        color: 'transparent',
                        children: [
                          {
                            title: 'Ice cream',
                            size: 35,
                            color: '#E6492D',
                          },
                          {
                            title: 'Pizza',
                            size: 150,
                            color: '#1665D8',
                          },
                        ],
                      }}
                      height={230}
                      margin={{ left: -10 }}
                      width={230}
                      style={{ stroke: 'transparent' }}
                    />
                  </div>
                </CircularTable>
              </div>
            </Container>
          </Container>

          {/* Graph */}
          <Container
            vertical='md'
            horizontal='md'
            expandHorizontal
            style={{ boxSizing: 'border-box' }}
          >
            <Paragraph lineHeight='1.375rem' weight='600'>
              Graph
            </Paragraph>
            <Container
              vertical='md'
              horizontal='md'
              expandHorizontal
              style={{
                border: '0.063rem solid #d9d9d9',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <Paragraph>Daily Visitors</Paragraph>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <Select inputSize='small' radius='sm'>
                    <option value='December'>December</option>
                  </Select>
                  <Spacer direction='horizontal' size='sm' />
                  <Select inputSize='small' radius='sm'>
                    <option value='2018'>2018</option>
                  </Select>
                </div>
              </div>
              <Spacer size='md' />
              <hr />
              <Spacer size='md' />
              <div
                onClick={showInfo}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                ref={ref}
                className='overflow'
              >
                <XYPlot
                  margin={{ left: 0, right: 20 }}
                  width={550}
                  height={250}
                  xType='ordinal'
                  className='overflow'
                >
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis left={1060} tickValues={[0, 3, 6, 9]} tickPadding={10} />
                  <VerticalBarSeries
                    barWidth={0.35}
                    data={DATA}
                    color='#1665D8'
                    onValueClick={(e) => {
                      showInfo();
                      setValues(e.y);
                    }}
                  />
                </XYPlot>
              </div>
              <Spacer size='lg' />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <DataTitleGraph
                  title='Realtime users'
                  data='56'
                  percent={9.8}
                  icon={<ArrowRightTop color={success} />}
                >
                  <XYPlot width={195} height={50} margin={{ left: 20, right: 5, bottom: 0 }}>
                    <LineSeries
                      style={{
                        fill: 'rgba(22, 101, 216, .1)',
                      }}
                      color='#1665D8'
                      data={[
                        { x: 0, y: 0 },
                        { x: 1, y: 9 },
                        { x: 2, y: 7 },
                        { x: 3, y: 7.5 },
                        { x: 4, y: 10 },
                        { x: 5, y: 9.5 },
                        { x: 6, y: 6 },
                        { x: 7, y: 7 },
                        { x: 8, y: 4.5 },
                        { x: 9, y: 7.1 },
                        { x: 10, y: 7.5 },
                        { x: 11, y: 6.9 },
                        { x: 12, y: 9 },
                        { x: 13, y: 0 },
                      ]}
                    />
                  </XYPlot>
                </DataTitleGraph>

                <DataTitleGraph
                  title='Total visits'
                  data='54,598'
                  percent={-11.9}
                  icon={<ArrowRightBottom color={danger} />}
                >
                  <XYPlot width={195} height={50} margin={{ left: 0, right: 0, bottom: 0 }}>
                    <LineSeries
                      style={{
                        fill: 'rgba(52, 170, 68, .1)',
                      }}
                      color='#34AA44'
                      data={[
                        { x: 0, y: 0 },
                        { x: 1, y: 1 },
                        { x: 2, y: 1.3 },
                        { x: 3, y: 2 },
                        { x: 4, y: 3 },
                        { x: 5, y: 2.3 },
                        { x: 6, y: 2.1 },
                        { x: 7, y: 1.8 },
                        { x: 8, y: 2.2 },
                        { x: 9, y: 1.8 },
                        { x: 10, y: 2 },
                        { x: 11, y: 2.4 },
                        { x: 12, y: 2.2 },
                        { x: 13, y: 0 },
                      ]}
                    />
                  </XYPlot>
                </DataTitleGraph>

                <DataTitleGraph
                  title='Bounce rate'
                  data='73.67%'
                  percent={12.2}
                  icon={<ArrowRightTop color={success} />}
                >
                  <XYPlot width={195} height={50} margin={{ left: 0, right: 0, bottom: 0 }}>
                    <LineSeries
                      style={{
                        fill: 'rgba(103, 88, 243, .1)',
                      }}
                      color='#6758F3'
                      data={[
                        { x: 0, y: 0 },
                        { x: 1, y: 5 },
                        { x: 2, y: 5.1 },
                        { x: 3, y: 7 },
                        { x: 4, y: 5.2 },
                        { x: 5, y: 4.5 },
                        { x: 6, y: 5.3 },
                        { x: 7, y: 4.8 },
                        { x: 8, y: 4.3 },
                        { x: 9, y: 4.5 },
                        { x: 10, y: 4.2 },
                        { x: 11, y: 4.1 },
                        { x: 12, y: 0 },
                      ]}
                    />
                  </XYPlot>
                </DataTitleGraph>

                <DataTitleGraph
                  title='Visit duration'
                  data='1m 4s'
                  percent={19.6}
                  icon={<ArrowRightTop color={success} />}
                >
                  <XYPlot width={195} height={50} margin={{ left: 0, right: 0, bottom: 0 }}>
                    <LineSeries
                      style={{
                        fill: 'rgba(250, 207, 85, .1)',
                      }}
                      color='#FACF55'
                      data={[
                        { x: 0, y: 0 },
                        { x: 1, y: 2 },
                        { x: 2, y: 1 },
                        { x: 3, y: 1.3 },
                        { x: 4, y: 4.9 },
                        { x: 5, y: 4.5 },
                        { x: 6, y: 5 },
                        { x: 7, y: 4.8 },
                        { x: 8, y: 3.9 },
                        { x: 9, y: 4.6 },
                        { x: 10, y: 4.8 },
                        { x: 11, y: 4.2 },
                        { x: 12, y: 4.7 },
                        { x: 13, y: 0 },
                      ]}
                    />
                  </XYPlot>
                </DataTitleGraph>
              </div>
            </Container>
          </Container>

          {/* Most Visited */}
          <Container
            vertical='md'
            horizontal='md'
            expandHorizontal
            style={{ boxSizing: 'border-box' }}
          >
            <Paragraph lineHeight='1.375rem' weight='600'>
              Most Visited / Social Media
            </Paragraph>
            <Container
              className='overflow'
              style={{
                border: '0.063rem solid #d9d9d9',
              }}
            >
              <Container
                vertical='md'
                horizontal='md'
                expandHorizontal
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                }}
              >
                <div className='overflow'>
                  <Paragraph size='lg' lineHeight='1.75rem' weight='600'>
                    Most Visited Pages
                  </Paragraph>
                  <WrapperTable
                    fontSize='md'
                    zebra={false}
                    verticalSpacing='md'
                    border='horizontal'
                    borderColor='#E8E8E8'
                    horizontalSpacing='sm'
                  >
                    <Table
                      cols={visitedColumns}
                      dataTable={visitedPages}
                      filter={false}
                      pagination={false}
                    />
                  </WrapperTable>
                </div>
                <Spacer size='md' />
                <div>
                  <Paragraph size='lg' lineHeight='1.75rem' weight='600'>
                    Social Media Traffic
                  </Paragraph>
                  <WrapperTable
                    fontSize='md'
                    zebra={false}
                    verticalSpacing='md'
                    border='horizontal'
                    borderColor='#E8E8E8'
                    horizontalSpacing='sm'
                  >
                    <Table
                      cols={socialColumns}
                      dataTable={socialMedia}
                      filter={false}
                      pagination={false}
                    />
                  </WrapperTable>
                </div>
              </Container>
            </Container>
          </Container>

          {/* Progress Card */}
          <Container
            vertical='md'
            horizontal='md'
            expandHorizontal
            style={{ boxSizing: 'border-box' }}
          >
            <Paragraph lineHeight='1.375rem' weight='600'>
              Progress Card
            </Paragraph>
            <Container
              vertical='md'
              horizontal='md'
              expandHorizontal
              style={{
                border,
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Spacer direction='horizontal' size='md' />
              <ProgressWidget title='Broadband Usage' profit='Daily' data='98.1%' percent={6.9}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    height: 100,
                    width: '100%',
                  }}
                >
                  <div style={{ width: '100%', height: 4, background: dark }}>
                    <div style={{ width: '70%', height: 4, background: danger }} />
                  </div>
                  <Spacer size='sm' />
                  <Paragraph size='sm' color='#9EA0A5'>
                    Yearly Goal
                  </Paragraph>
                </div>
              </ProgressWidget>

              <Spacer direction='horizontal' size='md' />
              <ProgressWidget title='Revenue' profit='Total Profit' data='$13,893' percent={11.3}>
                <Container horizontal='lg'>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <XYPlot
                      margin={{ left: 20, right: 20 }}
                      width={230}
                      height={100}
                      xType='ordinal'
                    >
                      <VerticalBarSeries barWidth={0.6} data={myDATA} color={success} />
                    </XYPlot>
                  </div>
                </Container>
              </ProgressWidget>

              <Spacer direction='horizontal' size='md' />
              <ProgressWidget title='Clients' profit='Subscribed' data='1,232' percent={3.2}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    height: 100,
                    width: '100%',
                  }}
                >
                  <div style={{ width: '100%', height: 4, background: dark }}>
                    <div style={{ width: '35%', height: 4, background: 'purple' }} />
                  </div>
                  <Spacer size='sm' />
                  <Paragraph size='sm' color='#9EA0A5'>
                    Yearly Goal
                  </Paragraph>
                </div>
              </ProgressWidget>

              <Spacer direction='horizontal' size='md' />
              <ProgressWidget title='Active Users' data='29,981' percent={12.4}>
                <Container horizontal='lg'>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <XYPlot
                      margin={{ left: 20, right: 20 }}
                      width={230}
                      height={100}
                      xType='ordinal'
                    >
                      <VerticalBarSeries barWidth={0.6} data={myDATA} color={'yellow'} />
                    </XYPlot>
                  </div>
                </Container>
              </ProgressWidget>
            </Container>
          </Container>

          {/* Widget */}
          <Container
            vertical='md'
            horizontal='md'
            expandHorizontal
            style={{ boxSizing: 'border-box' }}
          >
            <Paragraph lineHeight='1.375rem' weight='600'>
              Widget
            </Paragraph>
            <Container
              vertical='md'
              horizontal='md'
              expandHorizontal
              style={{
                border: '0.063rem solid #d9d9d9',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <CircularOptions
                title='Total Sales'
                additional={
                  <Paragraph color='success' lineHeight='1.375'>
                    +$985.56
                  </Paragraph>
                }
                data='$2,595'
                dataDescription='Invoiced'
                dataAdditional={
                  <>
                    <Title level='3' lineHeight='2rem' align='right'>
                      23
                    </Title>
                    <Paragraph align='right' size='sm' color={dark} lineHeight='1.125rem'>
                      {'Invoices'.toUpperCase()}
                    </Paragraph>
                  </>
                }
                icon={<Cup color='white' fontSize={22} />}
                optionsIcon={<Ellypsis fontSize={22} color={dark} />}
              >
                <Sunburst
                  animation={{ damping: 25, stiffness: 300 }}
                  getSize={(d) => d.size}
                  data={{
                    title: '',
                    size: 1,
                    color: 'transparent',
                    children: [
                      {
                        title: '',
                        size: 150,
                        color: '#1665D8',
                      },
                      {
                        title: '',
                        size: 35,
                        color: dark,
                      },
                    ],
                  }}
                  margin={{ left: 0, bottom: 0, right: 0, top: 0 }}
                  height={162}
                  width={162}
                  style={{ stroke: dark }}
                />
              </CircularOptions>
              <Spacer direction='horizontal' size='xl' />

              <CircularOptions
                color='#FACF55'
                title='User Onboarding'
                additional={
                  <Paragraph color='success' lineHeight='1.375'>
                    Q3 Goal: 8,000 Users
                  </Paragraph>
                }
                data='2,452'
                dataDescription='ONBOARDED'
                icon={<Person color='white' fontSize={22} />}
                optionsIcon={<Ellypsis fontSize={22} color={dark} />}
              >
                <Sunburst
                  animation={{ damping: 25, stiffness: 300 }}
                  getSize={(d) => d.size}
                  data={{
                    title: '',
                    size: 1,
                    color: 'transparent',
                    children: [
                      {
                        title: '',
                        size: 50,
                        color: '#FACF55',
                      },
                      {
                        title: '',
                        size: 100,
                        color: dark,
                      },
                    ],
                  }}
                  margin={{ left: 0, bottom: 0, right: 0, top: 0 }}
                  height={162}
                  width={162}
                  style={{ stroke: dark }}
                />
              </CircularOptions>
              <Spacer direction='horizontal' size='xl' />
            </Container>
          </Container>

          {/* Graph */}
          <Container
            vertical='md'
            horizontal='md'
            expandHorizontal
            style={{ boxSizing: 'border-box' }}
          >
            <Paragraph lineHeight='1.375rem' weight='600'>
              Graph
            </Paragraph>
            <Container
              className='overflow'
              vertical='md'
              horizontal='md'
              expandHorizontal
              style={{
                border: '0.063rem solid #d9d9d9',
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              <Container
                vertical='md'
                expandHorizontal
                horizontal='md'
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignContent: 'center',
                }}
              >
                <Paragraph size='lg' weight='600'>
                  Daily Active Clients
                </Paragraph>
                <Ellypsis fontSize={22} color={dark} />
              </Container>
              <div
                style={{
                  width: '100%',
                  height: 326,
                  overflow: 'auto',
                }}
              >
                <Container top='xl' bottom='md'>
                  <XYPlot
                    width={window.innerWidth * 0.7}
                    height={200}
                    margin={{ left: 10, right: 10, bottom: 20 }}
                  >
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis top={170} tickFormat={(v) => DAYS[v]} />
                    <YAxis
                      hideLine={false}
                      left={window.innerWidth * 0.7}
                      tickValues={[20, 40, 60]}
                    />

                    <LineMarkSeries
                      style={{
                        fill: 'rgba(103, 88, 243, .1)',
                      }}
                      fill='#6758F3'
                      color='#6758F3'
                      data={[
                        { x: 0, y: 0 },
                        { x: 1, y: 45 },
                        { x: 2, y: 50 },
                        { x: 3, y: 39 },
                        { x: 4, y: 55 },
                        { x: 5, y: 40 },
                        { x: 6, y: 59 },
                        { x: 7, y: 29 },
                        { x: 8, y: 0 },
                      ]}
                    />
                  </XYPlot>
                </Container>
              </div>
            </Container>
          </Container>
        </div>
      </BodyMain>
      <Popover
        target={ref}
        active={activePopover}
        position='top'
        elevation={1}
        content={
          <Container expandVertical expandHorizontal vertical='lg' horizontal='md'>
            <Container>
              <Paragraph weight='bold' size='sm' color={dark} lineHeight='1.125rem'>
                {today.toUpperCase()}
              </Paragraph>
              <Spacer size='sm' />
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <DiscreteColorLegend
                  orientation='horizontal'
                  items={[{ title: 'Visitors', color: '#1665D8' }]}
                />
                <Paragraph>{values}</Paragraph>
              </div>
            </Container>
          </Container>
        }
        handleClose={onClose}
      />
    </BodyContent>
  );
};

export default GraphsPage;
