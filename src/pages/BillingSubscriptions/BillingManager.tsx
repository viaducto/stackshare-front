import {
  Column,
  AvatarWithText,
  Paragraph,
  Container,
  Switch,
  Grid,
  Row,
} from '@jp-olvera/jp-viaducto-components';

const BillingManager = () => {
  return (
    <>
      <Column xs={12} md={4}>
        <Container vertical='md'>
          <div className='flex'>
            <AvatarWithText
              avatar={{
                src: 'https://i.mdel.net/i/db/2020/4/1332723/1332723-500w.jpg',
                alt: '',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Paragraph color='dark' size='lg'>
                  John Doe
                </Paragraph>
                <Paragraph color='darkGray'>john@ballena.com</Paragraph>
              </div>
            </AvatarWithText>
          </div>
        </Container>
      </Column>
      <Column>
        <Container vertical='md'>
          <Grid gutter={0} expanded>
            <Row>
              <Column>
                <Paragraph size='lg' color='dark'>
                  Permissions
                </Paragraph>
              </Column>
            </Row>
            <Row>
              <Column>
                <Paragraph color='gray'>Upgrade plan</Paragraph>
              </Column>
              <Column>
                <Switch inputSize='xsmall' circular={false} defaultChecked color='#1890FF' />
              </Column>
            </Row>
            <Row>
              <Column>
                <Paragraph color='gray'>Downgrade plan</Paragraph>
              </Column>
              <Column>
                <Switch inputSize='xsmall' circular={false} defaultChecked color='#1890FF' />
              </Column>
            </Row>
            <Row>
              <Column>
                <Paragraph color='gray'>Change Billing Information</Paragraph>
              </Column>
              <Column>
                <Switch inputSize='xsmall' circular={false} defaultChecked color='#1890FF' />
              </Column>
            </Row>
            <Row>
              <Column>
                <Paragraph color='gray'>Download Invoices</Paragraph>
              </Column>
              <Column>
                <Switch inputSize='xsmall' circular={false} defaultChecked color='#1890FF' />
              </Column>
            </Row>
            <Row>
              <Column>
                <Paragraph color='gray'>Permissions</Paragraph>
              </Column>
              <Column>
                <Switch inputSize='xsmall' circular={false} defaultChecked color='#1890FF' />
              </Column>
            </Row>
          </Grid>
        </Container>
      </Column>
    </>
  );
};

export default BillingManager;
