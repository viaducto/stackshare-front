import {
  ConfigContext,
  Container,
  Paragraph,
  Spacer,
  Title,
} from '@jp-olvera/jp-viaducto-components';
import React, { useContext } from 'react';

interface COI extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
  title: string;
  icon: any;
  optionsIcon?: any;
  color?: string;
  additional?: any;
  data?: any;
  dataDescription?: string;
  dataAdditional?: any;
}

const CircularOptions = ({
  children,
  icon,
  optionsIcon,
  color,
  title,
  additional,
  data,
  dataDescription,
  dataAdditional,
}: COI) => {
  const { configuration } = useContext(ConfigContext);
  const { colors, border } = configuration;
  const backColor = color || colors.text[color ? color : 'primary'];

  return (
    <div style={{ border, maxWidth: 350, width: '100%', overflow: 'auto' }}>
      <div style={{ borderBottom: border, width: '100%' }}>
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
                background: backColor,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {icon}
            </div>
            <Spacer direction='horizontal' size='md' />
            <div>
              <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
                {title}
              </Paragraph>
              {additional}
            </div>
          </div>
          <div>{optionsIcon}</div>
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
            <div>{children}</div>
            <div>
              <Title level='3' lineHeight='3.75rem' align='right'>
                {data}
              </Title>
              {dataDescription && (
                <Paragraph align='right' size='sm' color={colors.text.dark} lineHeight='1.125rem'>
                  {dataDescription.toUpperCase()}
                </Paragraph>
              )}
              {dataAdditional && (
                <>
                  <Spacer size='sm' />
                  <hr />
                  <Spacer size='sm' />
                  {dataAdditional}
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CircularOptions;
