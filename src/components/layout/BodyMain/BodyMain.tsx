import React from 'react';
import { Container } from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.secondaryBackground};
`;
const Div = styled.div`
  background-color: ${(p) => p.theme.mainBackground};
`;
const BodyMain = ({
  children,
  horizontal,
  expandVertical,
  ...rest
}: BodyMainProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Wrapper {...rest}>
      <Container
        vertical='md'
        horizontal={horizontal || 'sm'}
        expandHorizontal
        expandVertical={expandVertical || false}
      >
        <Div>{children}</Div>
      </Container>
    </Wrapper>
  );
};
interface BodyMainProps {
  children: any;
  horizontal?: string;
  expandVertical?: boolean;
}
export default BodyMain;
