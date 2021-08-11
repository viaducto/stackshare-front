import { Anchor, ConfigContext, Paragraph, Spacer, Title } from '@jp-olvera/jp-viaducto-components';
import React, { useContext } from 'react';

interface CTI extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
  title: string;
  data: any;
  textColor?: string;
  link?: { label?: string; href?: string; icon?: any };
  description?: string;
  additional?: any;
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
  horizontalSpacing?:
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
}

const CircularTable = ({
  children,
  textColor,
  title,
  link = { label: '', href: '', icon: null },
  data,
  description,
  additional,
  verticalSpacing = 'md',
  horizontalSpacing = 'md',
}: CTI) => {
  const { configuration } = useContext(ConfigContext);
  const { colors } = configuration;
  const color = textColor || colors.text[textColor ? textColor : 'dark'];

  return (
    <>
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
          <Anchor href={link.href} label={link.label} icon={link.icon} color={color} />
        )}
      </div>
      <Spacer size={verticalSpacing} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>{children}</div>
        <Spacer direction='horizontal' size={horizontalSpacing} />
        <div>
          <Title level='D4' lineHeight='3.75rem' align='right'>
            {data}
          </Title>
          {description && (
            <Paragraph align='right' size='sm' color={color} lineHeight='1.125rem'>
              {description.toUpperCase()}
            </Paragraph>
          )}
          {additional && (
            <>
              <Spacer size='sm' />
              <hr />
              <Spacer size='sm' />
            </>
          )}
          {additional}
        </div>
      </div>
    </>
  );
};

export default CircularTable;
