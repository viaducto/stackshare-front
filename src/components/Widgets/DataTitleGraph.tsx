import {
  ConfigContext,
  Container,
  Paragraph,
  Spacer,
  Title,
} from '@jp-olvera/jp-viaducto-components';
import React, { useContext } from 'react';

interface DTGI extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
  title: string;
  data: any;
  percent: number;
  icon?: any;
  textColor?: string;
  verticalSpacing?: string;
}

const DataTitleGraph = ({
  children,
  title,
  data,
  percent,
  icon,
  textColor,
  verticalSpacing = 'sm',
}: DTGI) => {
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
      vertical='lg'
      horizontal='md'
      style={{
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        border: border,
        justifyContent: 'space-around',
        width: 255,
      }}
    >
      <Paragraph
        weight='bold'
        size='sm'
        color={colors.text.dark}
        lineHeight='1.125rem'
        align='center'
      >
        {title.toUpperCase()}
      </Paragraph>
      <Spacer size={verticalSpacing} />
      <Title level='1' lineHeight='3.125rem' align='center'>
        {data}
      </Title>
      <Spacer size={verticalSpacing} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paragraph color={color}>{`${Math.sign(percent) === 1 ? '+' : ''}${percent}`}</Paragraph>
        <Spacer direction='horizontal' size='xs' />
        <div
          style={{
            border: `0.125rem solid ${color}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
          }}
        >
          {icon}
        </div>
      </div>
      <Spacer size={verticalSpacing} />
      {children}
    </Container>
  );
};

export default DataTitleGraph;
