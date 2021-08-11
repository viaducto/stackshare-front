import React from 'react';
import { Container } from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.secondaryBackground} !important;
  width: 100%;
  overflow-y: auto;
  height: 80vh;
`;
const Div = styled.div`
  background-color: ${(p) => p.theme.mainBackground};
`;
const BodyMain = ({
  children,
  horizontal = 'none',
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
  horizontal?:
    | null
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
  expandVertical?: boolean;
}
export default BodyMain;
