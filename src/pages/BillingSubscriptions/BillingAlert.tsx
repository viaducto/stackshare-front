import {
  Column,
  Switch,
  Paragraph,
  Container,
  Row,
  Grid,
  Title,
} from '@jp-olvera/jp-viaducto-components';

const BillingAlert = () => {
  return (
    <Grid expanded innerGutter={4}>
      <Row>
        <Column xs={12} sm={8} md={9} style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '72px',
              alignItems: 'center',
            }}
          >
            <Title level='3'>Billing Alerts</Title>
          </div>
          <hr />
        </Column>
        <hr />
      </Row>
      <Row>
        <Column xs={12} md={9}>
          <Container vertical='md'>
            <Paragraph size='lg' color='dark'>
              Email Notifications
            </Paragraph>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <Paragraph color='gray' size='lg'>
                Failed transaction
              </Paragraph>
              <Switch inputSize='xsmall' defaultChecked color='#1890FF' />
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <Paragraph color='gray' size='lg'>
                Failed transaction
              </Paragraph>
              <Switch inputSize='xsmall' defaultChecked color='#1890FF' />
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <Paragraph color='gray' size='lg'>
                Failed transaction
              </Paragraph>
              <Switch inputSize='xsmall' defaultChecked color='#1890FF' />
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <Paragraph color='gray' size='lg'>
                Failed transaction
              </Paragraph>
              <Switch inputSize='xsmall' defaultChecked color='#1890FF' />
            </div>
          </Container>
        </Column>
      </Row>
    </Grid>
  );
};

export default BillingAlert;
