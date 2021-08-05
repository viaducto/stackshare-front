import {
  Column,
  AvatarWithText,
  Paragraph,
  Container,
  Switch,
  Grid,
  Row,
  Spacer,
} from '@jp-olvera/jp-viaducto-components';
import Skeleton from 'react-loading-skeleton';

const BillingManager = ({ load }: { load: boolean }) => {
  return (
    <>
      <Column xs={12} md={4}>
        <Container vertical='md'>
          {load ? (
            <Container>
              <div style={{ display: 'flex' }}>
                <Skeleton width='3rem' height='3rem' circle />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Spacer direction='horizontal' size='md' />
                  <div>
                    <Skeleton width='5rem' />
                    <Spacer size='micro' />
                    <Skeleton width='7rem' />
                  </div>
                </div>
              </div>
            </Container>
          ) : (
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
          )}
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
                {load ? (
                  <Skeleton width='7rem' />
                ) : (
                  <Paragraph color='gray'>Upgrade plan</Paragraph>
                )}
              </Column>
              <Column>
                {load ? (
                  <Skeleton width='2rem' />
                ) : (
                  <label htmlFor='permission_UpgradePlan'>
                    <Switch
                      id='permission_UpgradePlan'
                      inputSize='xsmall'
                      circular={false}
                      defaultChecked
                      color='#1890FF'
                    />
                  </label>
                )}
              </Column>
            </Row>
            <Row>
              <Column>
                {load ? (
                  <Skeleton width='7rem' />
                ) : (
                  <Paragraph color='gray'>Downgrade plan</Paragraph>
                )}
              </Column>
              <Column>
                {load ? (
                  <Skeleton width='2rem' />
                ) : (
                  <label htmlFor='permission_DowngradePlan'>
                    <Switch
                      id='permission_DowngradePlan'
                      inputSize='xsmall'
                      circular={false}
                      defaultChecked
                      color='#1890FF'
                    />
                  </label>
                )}
              </Column>
            </Row>
            <Row>
              <Column>
                {load ? (
                  <Skeleton width='7rem' />
                ) : (
                  <Paragraph color='gray'>Change Billing Information</Paragraph>
                )}
              </Column>
              <Column>
                {load ? (
                  <Skeleton width='2rem' />
                ) : (
                  <label htmlFor='permission_Billing'>
                    <Switch
                      id='permission_Billing'
                      inputSize='xsmall'
                      circular={false}
                      defaultChecked
                      color='#1890FF'
                    />
                  </label>
                )}
              </Column>
            </Row>
            <Row>
              <Column>
                {load ? (
                  <Skeleton width='7rem' />
                ) : (
                  <Paragraph color='gray'>Download Invoices</Paragraph>
                )}
              </Column>
              <Column>
                {load ? (
                  <Skeleton width='2rem' />
                ) : (
                  <label htmlFor='permission_Invoices'>
                    <Switch
                      id='permission_Invoices'
                      inputSize='xsmall'
                      circular={false}
                      defaultChecked
                      color='#1890FF'
                    />
                  </label>
                )}
              </Column>
            </Row>
            <Row>
              <Column>
                {load ? <Skeleton width='7rem' /> : <Paragraph color='gray'>Permissions</Paragraph>}
              </Column>
              <Column>
                {load ? (
                  <Skeleton width='2rem' />
                ) : (
                  <label htmlFor='permissions'>
                    <Switch
                      id='permissions'
                      inputSize='xsmall'
                      circular={false}
                      defaultChecked
                      color='#1890FF'
                    />
                  </label>
                )}
              </Column>
            </Row>
          </Grid>
        </Container>
      </Column>
    </>
  );
};

export default BillingManager;
