import {
  Anchor,
  ConfigContext,
  Container,
  Paragraph,
  Spacer,
  Title,
} from '@jp-olvera/jp-viaducto-components';
import React, { useContext } from 'react';

interface GPI extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
  title: string;
  percent: number;
  link?: { label?: string; href?: string; icon?: any };
  description?: string;
  verticalSpacing?:
    | 'none'
    | 'nano'
    | 'micro'
    | 'tiny'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl';
  textColor?: string;
}

const GraphPercent = ({
  children,
  title,
  link = { label: '', href: '', icon: null },
  percent,
  description,
  verticalSpacing = 'sm',
  textColor,
}: GPI) => {
  const { configuration } = useContext(ConfigContext);
  const { colors } = configuration;
  const color =
    textColor ||
    colors.text[textColor ? textColor : Math.sign(percent) === 1 ? 'success' : 'danger'];

  return (
    <Container style={{ overflow: 'auto', minHeight: 225 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Paragraph lineHeight='1.75rem' size='lg' weight='500'>
          {title}
        </Paragraph>
        {link.label && (
          <Anchor
            label={link.label}
            href={link.href}
            icon={link.icon}
            color={colors.text.primary}
          />
        )}
      </div>

      <Spacer size={verticalSpacing} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {children}
        <Spacer direction='horizontal' size='xl' />
        <div
          style={{
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Title level='D2' color={color}>
            {`${Math.sign(percent) === 1 ? '+' : ''}${percent}`}%
          </Title>
          {description && (
            <Paragraph color={colors.text.dark} size='sm' lineHeight='1.125rem' weight='500'>
              {description}
            </Paragraph>
          )}
        </div>
      </div>
    </Container>
  );
};

export default GraphPercent;
