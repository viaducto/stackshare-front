import {
  Column,
  Switch,
  Paragraph,
  Container,
  Row,
  Grid,
  Title,
  Spacer,
} from '@jp-olvera/jp-viaducto-components';
import Skeleton from 'react-loading-skeleton';

const BillingAlert = ({ load }: { load: boolean }) => {
  return (
    <Container horizontal='sm'>
      <Grid expanded innerGutter={4} gutter={0}>
        <Row>
          <Column xs={12} sm={8} md={9}>
            <Title level='3'>Billing Alerts</Title>
            <Spacer size='sm' />
            <hr />
          </Column>
        </Row>
        <Row>
          <Column>
            <Container vertical='sm'>
              <Paragraph size='lg' color='dark'>
                Email Notifications
              </Paragraph>
              <Grid gutter={0}>
                <Row>
                  <Column>
                    {load ? (
                      <Skeleton width='7rem' />
                    ) : (
                      <Paragraph color='gray'>Failed transaction</Paragraph>
                    )}
                  </Column>
                  <Column>
                    {load ? (
                      <Skeleton width='2rem' />
                    ) : (
                      <Switch inputSize='xsmall' defaultChecked color='#1890FF' />
                    )}
                  </Column>
                </Row>
              </Grid>
              <Grid gutter={0}>
                <Row>
                  <Column>
                    {load ? (
                      <Skeleton width='7rem' />
                    ) : (
                      <Paragraph color='gray'>Failed transaction</Paragraph>
                    )}
                  </Column>
                  <Column>
                    {load ? (
                      <Skeleton width='2rem' />
                    ) : (
                      <Switch inputSize='xsmall' defaultChecked color='#1890FF' />
                    )}
                  </Column>
                </Row>
              </Grid>
            </Container>
          </Column>
        </Row>
      </Grid>
    </Container>
  );
};

export default BillingAlert;
