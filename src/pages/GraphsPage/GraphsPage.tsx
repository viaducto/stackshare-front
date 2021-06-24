import React from 'react';
import {
  Container,
  Breadcrum,
  Breadcrums,
  Paragraph,
  Title,
  Spacer,
  Anchor,
} from '@jp-olvera/jp-viaducto-components';
import { ArrowRight } from 'react-ikonate';
import { XYPlot, DiscreteColorLegend, LineSeries, Sunburst } from 'react-vis';
import { BodyContent, BodyHeader, BodyMain } from '../../components/layout';
const ITEMS = [
  { title: 'Profit', color: '#1665D8', strokeStyle: 'solid' },
  {
    title: 'Profit/Expenses',
    color: '#9EA0A5',
    strokeDasharray: '2 2',
    // strokeStyle: 'dashed',
  },
];

const GraphsPage = () => {
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
          <Container vertical='md' horizontal='lg' expandHorizontal>
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
          <Container vertical='md' horizontal='lg' expandHorizontal>
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
                    lineHeight='1.75rem'
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

              {/* <Spacer direction='horizontal' size='md' /> */}
              <div style={{ height: 60, width: 1, backgroundColor: '#EAEDF3' }} />
              {/* <Spacer direction='horizontal' size='md' /> */}

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
                    lineHeight='1.75rem'
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
          <Container vertical='md' horizontal='lg' expandHorizontal>
            <Paragraph lineHeight='1.375rem' weight='600'>
              Graph
            </Paragraph>
          </Container>

          {/* Most Visited */}
          <Container vertical='md' horizontal='lg' expandHorizontal>
            <Paragraph lineHeight='1.375rem' weight='600'>
              Most Visited
            </Paragraph>
          </Container>

          {/* Social Media */}
          <Container vertical='md' horizontal='lg' expandHorizontal>
            <Paragraph lineHeight='1.375rem' weight='600'>
              Social Media
            </Paragraph>
          </Container>

          {/* Progress Card */}
          <Container vertical='md' horizontal='lg' expandHorizontal>
            <Paragraph lineHeight='1.375rem' weight='600'>
              Progress Card
            </Paragraph>
          </Container>

          {/* Widget */}
          <Container vertical='md' horizontal='lg' expandHorizontal>
            <Paragraph lineHeight='1.375rem' weight='600'>
              Widget
            </Paragraph>
          </Container>

          {/* Graph */}
          <Container vertical='md' horizontal='lg' expandHorizontal>
            <Paragraph lineHeight='1.375rem' weight='600'>
              Graph
            </Paragraph>
          </Container>
        </div>
      </BodyMain>
    </BodyContent>
  );
};

export default GraphsPage;
