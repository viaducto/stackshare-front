import { Grid, Row, Column } from '@jp-olvera/jp-viaducto-components';

const BodyHeader = ({ children, ...rest }: BodyHeaderProps) => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'white',
        position: 'sticky',
        top: '0',
        boxShadow: '0 0.125rem 0.313rem -0.125rem rgba(0, 0, 0, 0.2)',
      }}
      {...rest}
    >
      <Grid expanded>
        <Row>
          <Column>{children}</Column>
        </Row>
      </Grid>
    </div>
  );
};

interface BodyHeaderProps {
  children: any;
  style?: any | null | undefined;
}

export default BodyHeader;
