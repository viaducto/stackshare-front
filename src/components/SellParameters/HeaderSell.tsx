import React from 'react';
import { Paragraph, Breadcrums, Breadcrum, Container } from '@jp-olvera/jp-viaducto-components';

import { BodyHeader } from '../layout';

const HeaderSell = ({
  breadcrums,
  title,
  children,
}: {
  breadcrums: { label: string; href: string; active: boolean }[];
  title: string;
  children?: any;
}) => {
  return (
    <BodyHeader>
      <Container {...(children && { top: 'sm' })} vertical={children ? 'none' : 'sm'}>
        <Breadcrums fontSize='md'>
          {breadcrums.map(
            (option: { label: string; href: string; active: boolean }, index: number) => {
              return (
                <Breadcrum
                  key={option.label + index.toString()}
                  label={option.label}
                  href={option.href}
                  active={option.active}
                  separator={index === breadcrums.length - 1 ? false : true}
                />
              );
            }
          )}
        </Breadcrums>
        <Paragraph size='lg' weight='600' lineHeight='1.75rem'>
          {title}
        </Paragraph>
        <div className='overflow'>{children}</div>
      </Container>
    </BodyHeader>
  );
};

export default HeaderSell;
