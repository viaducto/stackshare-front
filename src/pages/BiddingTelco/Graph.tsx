import React from 'react';
import { XYPlot, VerticalBarSeries } from 'react-vis';
import { Container, Paragraph, Title, Spacer } from '@jp-olvera/jp-viaducto-components';

const Graph = ({
  title,
  profit = null,
  data,
  percent,
  color = '#34AA44',
  progress = null,
}: {
  title: string;
  profit?: string | null;
  color?: string;
  data: string;
  percent: string;
  progress?: string | null;
}) => {
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
  return (
    <Container style={{ border: '0.063rem solid #d9d9d9', width: 255 }} top='md' horizontal='lg'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Paragraph size='lg' color='#3e3f42' lineHeight='1.5rem' weight='500'>
          {title}
        </Paragraph>
        {profit !== null && (
          <Paragraph color='#9EA0A5' lineHeight='1.375rem' weight='400'>
            {profit}
          </Paragraph>
        )}
      </div>
      <Spacer size='sm' />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Title level='3' lineHeight='2.75rem' color='#3E3F42'>
          {data}
        </Title>
        <Paragraph color='success' lineHeight='1.375rem' weight='400'>
          {percent}
        </Paragraph>
      </div>
      <Spacer size='md' />
      <Container horizontal='lg'>
        {progress === null && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <XYPlot margin={{ left: 20, right: 20 }} width={230} height={100} xType='ordinal'>
              <VerticalBarSeries barWidth={0.6} data={myDATA} color={color} />
            </XYPlot>
          </div>
        )}
      </Container>
      {progress !== null && (
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
          <div style={{ width: '100%', height: 4, background: '#EAECEE' }}>
            <div style={{ width: progress, height: 4, background: color }} />
          </div>
          <Spacer size='sm' />
          <Paragraph size='sm' color='#9EA0A5'>
            Yearly Goal
          </Paragraph>
        </div>
      )}
    </Container>
  );
};

export default Graph;
