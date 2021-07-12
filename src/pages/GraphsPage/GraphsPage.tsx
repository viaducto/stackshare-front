/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useRef, useState } from 'react';
import {
  Container,
  Breadcrum,
  Breadcrums,
  Paragraph,
  Title,
  Spacer,
  Anchor,
  Popover,
  Select,
  WrapperTable,
} from '@jp-olvera/jp-viaducto-components';
import { ArrowRight, ArrowRightTop, ArrowLeftBottom, Cup, Ellypsis, Person } from 'react-ikonate';
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
import { BodyContent, BodyHeader, BodyMain } from '../../components/layout';
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
import Graph from '../BiddingTelco/Graph';

const GraphsPage = () => {
  const ref = useRef<any | null>(null);
  const [activePopover, setActivePopover] = useState(false);
  const [values, setValues] = useState<number | string>(0);
  const onClose = () => {
    setActivePopover(!activePopover);
  };
  const showInfo = () => {
    setActivePopover(true);
  };

  return (
    <BodyContent
      style={{
        boxSizing: 'border-box',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      {/* Header */}
      <BodyHeader>
        <Container vertical='sm' horizontal='md'>
          <Breadcrums>
            <Breadcrum label='Home' href='/' />
            <Breadcrum label='Graphs' active separator={false} />
          </Breadcrums>
          <Paragraph size='lg' color='#262626' weight='600' lineHeight='1.75rem'>
            Graphs
          </Paragraph>
        </Container>
      </BodyHeader>

      {/* Content */}
      <BodyMain>
        <div style={{ backgroundColor: 'white', height: '80vh', overflow: 'auto' }}>
          {/* Numbers */}
          <Container
            vertical='md'
            horizontal='lg'
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
              <Container style={{ width: 160 }} vertical='sm' horizontal='sm'>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Title level='3' lineHeight='2.375rem' color='#3E3F42'>
                    £632,569
                  </Title>
                  <Container
                    vertical='nano'
                    horizontal='sm'
                    style={{
                      backgroundColor: '#34AA44',
                      minWidth: 28,
                      textAlign: 'center',
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                    }}
                  >
                    <Paragraph color='white' size='sm' lineHeight='1.125rem' align='center'>
                      +6
                    </Paragraph>
                  </Container>
                </div>
                <Paragraph color='#9EA0A5' size='sm' lineHeight='1.125rem'>
                  Total Invoiced
                </Paragraph>
              </Container>

              <Spacer direction='horizontal' size='xl' />
              <div style={{ height: 60, width: 1, backgroundColor: '#EAEDF3' }} />
              <Spacer direction='horizontal' size='xl' />

              <Container style={{ width: 160 }} vertical='sm' horizontal='sm'>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Title level='3' lineHeight='2.375rem' color='#9EA0A5'>
                    £2,500
                  </Title>
                  <Container
                    vertical='nano'
                    horizontal='sm'
                    style={{
                      backgroundColor: '#E6492D',
                      minWidth: 28,
                      textAlign: 'center',
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                    }}
                  >
                    <Paragraph color='white' size='sm' lineHeight='1.125rem' align='center'>
                      -1
                    </Paragraph>
                  </Container>
                </div>
                <Paragraph color='#9EA0A5' size='sm' lineHeight='1.125rem'>
                  Unpaid Invoices
                </Paragraph>
              </Container>

              <Spacer direction='horizontal' size='xl' />
              <div style={{ height: 60, width: 1, backgroundColor: '#EAEDF3' }} />
              <Spacer direction='horizontal' size='xl' />

              <Container style={{ width: 160 }} vertical='sm' horizontal='sm'>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Title level='3' lineHeight='2.375rem' color='#3E3F42'>
                    £35,558
                  </Title>
                  <Container
                    vertical='nano'
                    horizontal='sm'
                    style={{
                      backgroundColor: '#34AA44',
                      minWidth: 28,
                      textAlign: 'center',
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                    }}
                  >
                    <Paragraph color='white' size='sm' lineHeight='1.125rem' align='center'>
                      +12
                    </Paragraph>
                  </Container>
                </div>
                <Paragraph color='#9EA0A5' size='sm' lineHeight='1.125rem'>
                  Total Expenses
                </Paragraph>
              </Container>
              <Spacer direction='horizontal' size='xl' />
              <div style={{ height: 60, width: 1, backgroundColor: '#EAEDF3' }} />
              <Spacer direction='horizontal' size='xl' />

              <Container style={{ width: 160 }} vertical='sm' horizontal='sm'>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Title level='3' lineHeight='2.375rem' color='#9EA0A5'>
                    £0
                  </Title>
                </div>
                <Paragraph color='#9EA0A5' size='sm' lineHeight='1.125rem'>
                  Unpaid Expenses
                </Paragraph>
              </Container>
            </Container>
          </Container>

          {/* Top graph */}
          <Container
            vertical='md'
            horizontal='lg'
            expandHorizontal
            style={{ boxSizing: 'border-box' }}
          >
            <Paragraph lineHeight='1.375rem' weight='600'>
              Top Graph
            </Paragraph>
            <Container
              vertical='md'
              horizontal='md'
              style={{
                border: '0.063rem solid #d9d9d9',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Paragraph lineHeight='1.75rem' color='#3E3F42' size='lg' weight='500'>
                    Your Performance
                  </Paragraph>
                  <Anchor
                    label='See more'
                    icon={<ArrowRight color='#9EA0A5' fontSize='1rem' />}
                    color='#9EA0A5'
                  />
                </div>
                <Spacer size='xl' />

                <div
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{ float: 'right', marginRight: 10 }}>
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
                        color='#9EA0A5'
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
                  </div>
                  <Spacer direction='horizontal' size='xl' />
                  <div>
                    <Title level='D2' color='success' lineHeight='5rem'>
                      32%
                    </Title>
                    <Paragraph color='#9EA0A5' size='sm' lineHeight='1.125rem' weight='500'>
                      6 Months Increase
                    </Paragraph>
                  </div>
                </div>

                <Spacer size='lg' />

                <div
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{ float: 'right', marginRight: 10 }}>
                      <DiscreteColorLegend orientation='horizontal' items={ITEMS} />
                    </div>
                    <XYPlot width={200} height={100} margin={{ left: 0 }}>
                      <LineSeries
                        style={{
                          fill: 'none',
                        }}
                        color='#1665D8'
                        data={[
                          { x: 1, y: -0.5 },
                          { x: 2, y: 7 },
                          { x: 3, y: -5 },
                          { x: 4, y: -4 },
                          { x: 5, y: 1 },
                          { x: 6, y: -1 },
                          { x: 7, y: -7 },
                          { x: 8, y: -0.5 },
                          { x: 9, y: 3 },
                          { x: 10, y: 0 },
                          { x: 11, y: 2 },
                          { x: 12, y: -2 },
                        ]}
                      />
                      <LineSeries
                        style={{
                          strokeDasharray: '2 2',
                          fill: 'none',
                        }}
                        color='#9EA0A5'
                        data={[
                          { x: 1, y: 1.5 },
                          { x: 2, y: 5 },
                          { x: 3, y: -4 },
                          { x: 4, y: -1 },
                          { x: 5, y: -2 },
                          { x: 6, y: -3 },
                          { x: 7, y: -5 },
                          { x: 8, y: -4 },
                          { x: 9, y: -8 },
                          { x: 10, y: -5 },
                          { x: 11, y: -6 },
                          { x: 12, y: 0 },
                        ]}
                      />
                    </XYPlot>
                  </div>
                  <Spacer direction='horizontal' size='xl' />
                  <div>
                    <Title level='D2' color='success' lineHeight='5rem'>
                      9%
                    </Title>
                    <Paragraph color='#9EA0A5' size='sm' lineHeight='1.125rem' weight='500'>
                      Yearly Increase
                    </Paragraph>
                  </div>
                </div>
              </div>

              <div style={{ height: 60, width: 1, backgroundColor: '#EAEDF3' }} />

              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Paragraph lineHeight='1.75rem' color='#3E3F42' size='lg' weight='500'>
                    Monthly Statistics
                  </Paragraph>
                  <Anchor
                    label='See more'
                    icon={<ArrowRight color='#9EA0A5' fontSize='1rem' />}
                    color='#9EA0A5'
                  />
                </div>
                <Spacer size='xl' />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minWidth: '30rem',
                  }}
                >
                  <div>
                    <Sunburst
                      animation={{ damping: 20, stiffness: 300 }}
                      getSize={(d) => d.size}
                      data={{
                        title: '',
                        size: 0,
                        color: 'white',
                        children: [
                          {
                            title: '',
                            size: 35,
                            color: '#E6492D',
                          },
                          {
                            title: '',
                            size: 150,
                            color: '#1665D8',
                          },
                        ],
                      }}
                      height={230}
                      margin={{ left: -10 }}
                      width={230}
                      style={{ stroke: '#fff' }}
                    />
                  </div>
                  <div>
                    <Title level='D4' lineHeight='3.75rem' color='#3E3F42' align='right'>
                      £12,595
                    </Title>
                    <Paragraph align='right' size='sm' color='#9EA0A5' lineHeight='1.125rem'>
                      {'Invoiced this month'.toUpperCase()}
                    </Paragraph>
                    <Spacer size='sm' />
                    <hr />
                    <Spacer size='sm' />
                    <Title level='4' color='#3E3F42' lineHeight='2rem' align='right'>
                      £10,095
                    </Title>
                    <Title level='4' color='#3E3F42' lineHeight='2rem' align='right'>
                      £2,500
                    </Title>
                  </div>
                </div>
              </div>
            </Container>
          </Container>

          {/* Graph */}
          <Container
            vertical='md'
            horizontal='lg'
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
                  <Select
                    inputSize='small'
                    radius='sm'
                    border={{
                      top: '0.063rem solid #D8DCE6',
                      right: '0.063rem solid #D8DCE6',
                      bottom: '0.063rem solid #D8DCE6',
                      left: '0.063rem solid #D8DCE6',
                    }}
                  >
                    <option value='December'>December</option>
                  </Select>
                  <Spacer direction='horizontal' size='sm' />
                  <Select
                    inputSize='small'
                    radius='sm'
                    border={{
                      top: '0.063rem solid #D8DCE6',
                      right: '0.063rem solid #D8DCE6',
                      bottom: '0.063rem solid #D8DCE6',
                      left: '0.063rem solid #D8DCE6',
                    }}
                  >
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
              >
                <XYPlot margin={{ left: 0, right: 20 }} width={1050} height={250} xType='ordinal'>
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
                <Container
                  vertical='lg'
                  horizontal='lg'
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '0.063rem solid #d9d9d9',
                    justifyContent: 'space-around',
                    width: 255,
                    height: 240,
                    borderRadius: 4,
                  }}
                >
                  <Paragraph
                    weight='bold'
                    size='sm'
                    color='#9EA0A5'
                    lineHeight='1.125rem'
                    align='center'
                  >
                    {'Realtime Users'.toUpperCase()}
                  </Paragraph>
                  <Title level='1' lineHeight='3.125rem' color='#3E3F42' align='center'>
                    56
                  </Title>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Paragraph color='success'>+9.8%</Paragraph>
                    <Spacer direction='horizontal' size='xs' />
                    <div
                      style={{
                        border: '0.125rem solid #689F38',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                      }}
                    >
                      <ArrowRightTop color='#689F38' strokeWidth={2} />
                    </div>
                  </div>
                  <XYPlot width={195} height={50} margin={{ left: 0, right: 0, bottom: 0 }}>
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
                </Container>

                <Container
                  vertical='lg'
                  horizontal='lg'
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '0.063rem solid #d9d9d9',
                    justifyContent: 'space-around',
                    width: 255,
                    height: 240,
                    borderRadius: 4,
                  }}
                >
                  <Paragraph
                    weight='bold'
                    size='sm'
                    color='#9EA0A5'
                    lineHeight='1.125rem'
                    align='center'
                  >
                    {'Total Visits'.toUpperCase()}
                  </Paragraph>
                  <Title level='1' lineHeight='3.125rem' color='#3E3F42' align='center'>
                    54,598
                  </Title>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Paragraph color='#E6492D'>-11.9%</Paragraph>
                    <Spacer direction='horizontal' size='xs' />
                    <div
                      style={{
                        border: '0.125rem solid #E6492D',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                      }}
                    >
                      <ArrowLeftBottom color='#E6492D' strokeWidth={2} />
                    </div>
                  </div>
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
                </Container>

                <Container
                  vertical='lg'
                  horizontal='lg'
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '0.063rem solid #d9d9d9',
                    justifyContent: 'space-around',
                    width: 255,
                    height: 240,
                    borderRadius: 4,
                  }}
                >
                  <Paragraph
                    weight='bold'
                    size='sm'
                    color='#9EA0A5'
                    lineHeight='1.125rem'
                    align='center'
                  >
                    {'Bounce Rate'.toUpperCase()}
                  </Paragraph>
                  <Title level='1' lineHeight='3.125rem' color='#3E3F42' align='center'>
                    73.67%
                  </Title>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Paragraph color='success'>+12.2%</Paragraph>
                    <Spacer direction='horizontal' size='xs' />
                    <div
                      style={{
                        border: '0.125rem solid #689F38',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                      }}
                    >
                      <ArrowRightTop color='#689F38' strokeWidth={2} />
                    </div>
                  </div>
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
                </Container>

                <Container
                  vertical='lg'
                  horizontal='lg'
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '0.063rem solid #d9d9d9',
                    justifyContent: 'space-around',
                    width: 255,
                    height: 240,
                    borderRadius: 4,
                  }}
                >
                  <Paragraph
                    weight='bold'
                    size='sm'
                    color='#9EA0A5'
                    lineHeight='1.125rem'
                    align='center'
                  >
                    {'Visit Duration'.toUpperCase()}
                  </Paragraph>
                  <Title level='1' lineHeight='3.125rem' color='#3E3F42' align='center'>
                    1m 4s
                  </Title>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Paragraph color='success'>+19.6%</Paragraph>
                    <Spacer direction='horizontal' size='xs' />
                    <div
                      style={{
                        border: '0.125rem solid #689F38',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                      }}
                    >
                      <ArrowRightTop color='#689F38' strokeWidth={2} />
                    </div>
                  </div>
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
                </Container>
              </div>
            </Container>
          </Container>

          {/* Most Visited */}
          <Container
            vertical='md'
            horizontal='lg'
            expandHorizontal
            style={{ boxSizing: 'border-box' }}
          >
            <Paragraph lineHeight='1.375rem' weight='600'>
              Most Visited / Social Media
            </Paragraph>
            <Container
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
                <div>
                  <Paragraph size='lg' lineHeight='1.75rem' color='#3E3F42' weight='600'>
                    Most Visited Pages
                  </Paragraph>
                  <WrapperTable border='horizontal' horizontalSpacing='sm'>
                    <Table
                      cols={visitedColumns}
                      dataTable={visitedPages}
                      filter={false}
                      pagination={false}
                    />
                  </WrapperTable>
                </div>
                <div>
                  <Paragraph size='lg' lineHeight='1.75rem' color='#3E3F42' weight='600'>
                    Social Media Traffic
                  </Paragraph>
                  <WrapperTable border='horizontal' horizontalSpacing='sm'>
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
            horizontal='lg'
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
                border: '0.063rem solid #d9d9d9',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Graph
                title='Broadband Usage'
                percent='+6.9%'
                data='98.1%'
                profit='Daily'
                progress='76.92%'
                color='#1665D8'
              />
              <Spacer direction='horizontal' size='xl' />
              <Graph title='Revenue' percent='+11.3%' data='$13,893' profit='Total Profit' />
              <Spacer direction='horizontal' size='xl' />
              <Graph
                title='Clients'
                percent='+3.2%'
                data='1,232'
                profit='Subscribed'
                progress='76.92%'
                color='#6758F3'
              />
              <Spacer direction='horizontal' size='xl' />
              <Graph title='Active Users' percent='+12.4%' data='29,981' color='#FACF55' />
            </Container>
          </Container>

          {/* Widget */}
          <Container
            vertical='md'
            horizontal='lg'
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
              <div style={{ border: '0.063rem solid #d9d9d9', width: 350 }}>
                <div style={{ borderBottom: '0.063rem solid #d9d9d9', width: '100%' }}>
                  <Container
                    vertical='md'
                    horizontal='md'
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          background: '#1665D8',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Cup color='white' fontSize={22} />
                      </div>
                      <Spacer direction='horizontal' size='md' />
                      <div>
                        <Paragraph weight='600' size='lg' color='#3E3F42' lineHeight='1.75rem'>
                          Total Sales
                        </Paragraph>
                        <Paragraph color='success' lineHeight='1.375'>
                          +$985.56
                        </Paragraph>
                      </div>
                    </div>
                    <div>
                      <Ellypsis fontSize={22} color='#9EA0A5' />
                    </div>
                  </Container>
                </div>

                <div>
                  <Container
                    vertical='md'
                    horizontal='md'
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <div>
                        <Sunburst
                          animation={{ damping: 25, stiffness: 300 }}
                          getSize={(d) => d.size}
                          data={{
                            title: '',
                            size: 1,
                            color: 'white',
                            children: [
                              {
                                title: '',
                                size: 150,
                                color: '#1665D8',
                              },
                              {
                                title: '',
                                size: 35,
                                color: '#EAECEE',
                              },
                            ],
                          }}
                          margin={{ left: 0, bottom: 0, right: 0, top: 0 }}
                          height={162}
                          width={162}
                          style={{ stroke: '#fff' }}
                        />
                      </div>
                      <div>
                        <Title level='3' lineHeight='3.75rem' color='#3E3F42' align='right'>
                          $2,595
                        </Title>
                        <Paragraph align='right' size='sm' color='#9EA0A5' lineHeight='1.125rem'>
                          {'Invoiced'.toUpperCase()}
                        </Paragraph>
                        <Spacer size='sm' />
                        <hr />
                        <Spacer size='sm' />
                        <Title level='3' color='#3E3F42' lineHeight='2rem' align='right'>
                          23
                        </Title>
                        <Paragraph align='right' size='sm' color='#9EA0A5' lineHeight='1.125rem'>
                          {'Invoices'.toUpperCase()}
                        </Paragraph>
                      </div>
                    </div>
                  </Container>
                </div>
              </div>

              <Spacer direction='horizontal' size='xl' />

              <div style={{ border: '0.063rem solid #d9d9d9', width: 350 }}>
                <div style={{ borderBottom: '0.063rem solid #d9d9d9', width: '100%' }}>
                  <Container
                    vertical='md'
                    horizontal='md'
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          background: '#FACF55',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Person color='white' fontSize={22} />
                      </div>
                      <Spacer direction='horizontal' size='md' />
                      <div>
                        <Paragraph weight='600' size='lg' color='#3E3F42' lineHeight='1.75rem'>
                          User Onboarding
                        </Paragraph>
                        <Paragraph color='success' lineHeight='1.375'>
                          Q3 Goal: 8,000 Users
                        </Paragraph>
                      </div>
                    </div>
                    <div>
                      <Ellypsis fontSize={22} color='#9EA0A5' />
                    </div>
                  </Container>
                </div>

                <div>
                  <Container
                    vertical='md'
                    horizontal='md'
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <div>
                        <Sunburst
                          animation={{ damping: 25, stiffness: 300 }}
                          getSize={(d) => d.size}
                          data={{
                            title: '',
                            size: 1,
                            color: 'white',
                            children: [
                              {
                                title: '',
                                size: 50,
                                color: '#FACF55',
                              },
                              {
                                title: '',
                                size: 100,
                                color: '#EAECEE',
                              },
                            ],
                          }}
                          margin={{ left: 0, bottom: 0, right: 0, top: 0 }}
                          height={162}
                          width={162}
                          style={{ stroke: '#fff' }}
                        />
                      </div>
                      <div>
                        <Title level='3' lineHeight='3.75rem' color='#3E3F42' align='right'>
                          2,452
                        </Title>
                        <Paragraph align='right' size='sm' color='#9EA0A5' lineHeight='1.125rem'>
                          {'Onboarded'.toUpperCase()}
                        </Paragraph>
                        <Spacer direction='vertical' size='md' />
                        <hr />
                      </div>
                    </div>
                  </Container>
                </div>
              </div>
            </Container>
          </Container>

          {/* Graph */}
          <Container
            vertical='md'
            horizontal='lg'
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
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  width: 730,
                  height: 326,
                  border: '0.063rem solid #d9d9d9',
                }}
              >
                <Container
                  vertical='md'
                  horizontal='md'
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    borderBottom: '0.063rem solid #d9d9d9',
                  }}
                >
                  <Paragraph color='#3E3F42' size='lg' weight='600'>
                    Daily Active Clients
                  </Paragraph>
                  <Ellypsis fontSize={22} color='#9EA0A5' />
                </Container>
                <Container top='xl' bottom='md' horizontal='md'>
                  <XYPlot width={670} height={200} margin={{ left: 10, right: 10, bottom: 20 }}>
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis top={170} tickFormat={(v) => DAYS[v]} />
                    <YAxis hideLine={false} left={670} tickValues={[20, 40, 60]} />

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
          <Container expandVertical expandHorizontal vertical='lg' horizontal='lg'>
            <Container>
              <Paragraph weight='bold' size='sm' color='#9EA0A5' lineHeight='1.125rem'>
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
