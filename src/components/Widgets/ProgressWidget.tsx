import {
  ConfigContext,
  Container,
  Paragraph,
  Spacer,
  Title,
} from '@jp-olvera/jp-viaducto-components';
import React, { useContext } from 'react';

interface PWI extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
  title: string;
  percent: number;
  profit?: string;
  textColor?: string;
  data: string;
}

const ProgressWidget = ({ title, profit, data, percent, children, textColor }: PWI) => {
  const { configuration } = useContext(ConfigContext);
  const { colors, border } = configuration;
  const color =
    textColor ||
    colors.text[
      textColor
        ? textColor
        : percent
        ? Math.sign(percent) === 1
          ? 'success'
          : 'danger'
        : 'success'
    ];

  return (
    <Container
      style={{ border, width: '100%', maxWidth: 255, overflow: 'auto' }}
      top='md'
      horizontal='lg'
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Paragraph size='lg' lineHeight='1.5rem' weight='500'>
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
        <Title level='3' lineHeight='2.75rem'>
          {data}
        </Title>
        <Paragraph color={color} lineHeight='1.375rem' weight='400'>
          {`${Math.sign(percent) === 1 ? '+' : ''}${percent}`}%
        </Paragraph>
      </div>
      <Spacer size='md' />
      {children}
    </Container>
  );
};

export default ProgressWidget;
