import React from 'react';
import { Container } from '@jp-olvera/jp-viaducto-components';

const BodyMain = ({
  children,
  horizontal,
  expandVertical,
  ...rest
}: BodyMainProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...rest}>
      <Container
        vertical='md'
        horizontal={horizontal || 'sm'}
        expandHorizontal
        expandVertical={expandVertical || false}
      >
        {children}
      </Container>
    </div>
  );
};
interface BodyMainProps {
  children: any;
  horizontal?: string;
  expandVertical?: boolean;
}
export default BodyMain;
