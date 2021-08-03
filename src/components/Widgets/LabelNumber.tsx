import React, { useContext } from 'react';
import {
  ConfigContext,
  Container,
  Paragraph,
  Spacer,
  Title,
} from '@jp-olvera/jp-viaducto-components';

interface LabelI extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  spacing?: string;
  number?: number;
  shapeColor?: string;
  backgroundColor?: string;
}

const LabelNumber = ({
  title,
  description,
  spacing = 'sm',
  number,
  shapeColor,
  backgroundColor,
}: LabelI) => {
  const { configuration } = useContext(ConfigContext);
  const { colors } = configuration;

  const backColor =
    backgroundColor ||
    colors[
      shapeColor
        ? shapeColor
        : number
        ? Math.sign(number) === 1
          ? 'success'
          : 'danger'
        : 'success'
    ].default;
  return (
    <Container style={{ minWidth: 160 }} vertical='sm' horizontal='sm'>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level='3' lineHeight='2.375rem'>
          {title}
        </Title>
        {number && (
          <>
            <Spacer direction='horizontal' size={spacing} />
            <Container
              vertical='nano'
              horizontal='sm'
              style={{
                backgroundColor: backColor,
                minWidth: 28,
                textAlign: 'center',
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
              }}
            >
              <Paragraph color='white' size='sm' lineHeight='1.125rem' align='center'>
                {`${Math.sign(number) === 1 ? '+' : ''}${number}`}
              </Paragraph>
            </Container>
          </>
        )}
      </div>
      {description && (
        <Paragraph color={colors.text.dark} size='sm' lineHeight='1.125rem'>
          {description}
        </Paragraph>
      )}
    </Container>
  );
};

export default LabelNumber;
