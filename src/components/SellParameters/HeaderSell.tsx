import React from 'react';
import {
  Paragraph,
  Breadcrums,
  Breadcrum,
  Container,
  Tab,
  Spacer,
} from '@jp-olvera/jp-viaducto-components';

import { BodyHeader } from '../layout';

const HeaderSell = ({
  breadcrums,
  title,
  tabs,
}: {
  breadcrums: { label: string; href: string; active: boolean }[];
  title: string;
  tabs?: typeof Tab[];
}) => (
  <BodyHeader>
    <Container horizontal='md' vertical='sm'>
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
      <Paragraph size='lg' color='#262626' weight='600' lineHeight='1.75rem'>
        {title}
      </Paragraph>
      {tabs && <Spacer size='md' direction='vertical' />}
      {tabs &&
        tabs.map((tab: typeof Tab, index: number) => (
          <React.Fragment key={index.toString()}>
            {tab}
            {index !== tabs.length - 1 && <Spacer direction='horizontal' size='lg' />}
          </React.Fragment>
        ))}
    </Container>
  </BodyHeader>
);

export default HeaderSell;
