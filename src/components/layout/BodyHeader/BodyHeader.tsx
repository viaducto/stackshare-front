import { Grid, Row, Column } from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  background-color: ${(p) => p.theme.mainBackground};
  position: sticky;
  top: 0;
  box-shadow: 0 0.125rem 0.313rem -0.125rem rgba(0, 0, 0, 0.2);
  z-index: 1;
  overflow: hidden;
`;
const BodyHeader = ({ children, ...rest }: BodyHeaderProps) => {
  return (
    <Div {...rest}>
      <Grid expanded>
        <Row>
          <Column>{children}</Column>
        </Row>
      </Grid>
    </Div>
  );
};

interface BodyHeaderProps {
  children: any;
  style?: any | null | undefined;
}

export default BodyHeader;
