import { useState } from 'react';
import {
  AvatarWithText,
  Button,
  Card,
  Column,
  Input,
  Grid,
  GroupTab,
  Spacer,
  Row,
  Tab,
  Title,
  Paragraph,
  Select,
} from '@jp-olvera/jp-viaducto-components';
import { BodyMain } from '../../components/layout';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import BillingAlert from './BillingAlert';
import BillingManager from './BillingManager';
import SubscriptionsTable from './SubscriptionsTable';
import master from './mastercard.svg';

const BillingSubscriptions = () => {
  const [isReadonly, setIsReadonly] = useState(true);
  const handleEnable = () => {
    setIsReadonly(!isReadonly);
  };
  return (
    <>
      <HeaderSell
        title='Billing and Subscriptions'
        breadcrums={[
          { label: 'Organization Management', href: '', active: false },
          { label: 'User Management', href: '', active: false },
        ]}
      >
        <GroupTab fontSize='lg'>
          <Tab text='Summary' />
          <Tab text='Subscription' />
          <Tab text='Payment History' />
          <Tab text='Payment Methods' />
        </GroupTab>
      </HeaderSell>
      <BodyMain style={{ overflow: 'auto', height: '75vh' }}>
        <Spacer size='md' />
        <Grid expanded>
          <Row>
            <Column xs={12} md={6} lg={4}>
              <Card elevation={0} elevationDirection='bottom'>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '20px 24px',
                    minHeight: '116px',
                    justifyContent: 'space-between',
                  }}
                >
                  <Paragraph color='muttedGray' size='sm'>
                    SUBSCRIPTION
                  </Paragraph>
                  <div style={{ alignItems: 'flex-end', display: 'flex' }}>
                    <div className='flex-column'>
                      <Title level='3' lineHeight='2.375rem'>
                        $1857.34
                      </Title>
                      <Paragraph color='muttedGray' size='sm'>
                        15 Seats - Yearly subscription
                      </Paragraph>
                    </div>

                    <Button
                      label='Update'
                      variant='ghost'
                      leftSpacing='nano'
                      rightSpacing='nano'
                      style={{ marginLeft: 'auto' }}
                    />
                  </div>
                </div>
              </Card>
            </Column>
            <Column xs={12} md={6} lg={4}>
              <Card elevation={0} elevationDirection='bottom'>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '20px 24px',
                    minHeight: '116px',
                    justifyContent: 'space-between',
                  }}
                >
                  <Paragraph size='sm' color='muttedGray'>
                    DEFAULT PAYMENT METHOD
                  </Paragraph>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                    }}
                  >
                    <AvatarWithText
                      avatar={{ src: master, width: '25', height: '25', alt: 'card' }}
                      style={{ justifyContent: 'flex-start' }}
                    >
                      <div style={{ flexDirection: 'column' }}>
                        <Paragraph lineHeight='100%'>XXXX-XXXX-XXXX-1345</Paragraph>
                        <Paragraph color='#838383' lineHeight='100%' size='sm'>
                          Master Card - Debit
                        </Paragraph>
                      </div>
                    </AvatarWithText>

                    <Button label='Update' variant='ghost' leftSpacing='nano' rightSpacing='nano' />
                  </div>
                </div>
              </Card>
            </Column>
            <Column xs={12} md={6} lg={4}>
              <Card elevation={0} elevationDirection='bottom'>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '20px 24px',
                    minHeight: '116px',
                    justifyContent: 'space-between',
                  }}
                >
                  <Paragraph size='sm' color='muttedGray'>
                    NEXT PAYMENT CYCLE
                  </Paragraph>
                  <div>
                    <Title level='3' lineHeight='2.375rem'>
                      DECEMBER 21, 2021
                    </Title>
                    <Paragraph size='sm' color='muttedGray'>
                      Overdue
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </Column>
          </Row>
        </Grid>
        <Spacer size='lg' />
        <Grid expanded innerGutter={4}>
          <Row style={{ justifyContent: 'center' }}>
            <Column xs={12} sm={8} md={9} style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  height: '72px',
                  alignItems: 'center',
                }}
              >
                <Title level='3'>Billing Information</Title>
                {isReadonly ? (
                  <Button
                    label='Update'
                    variant='ghost'
                    onClick={handleEnable}
                    leftSpacing='nano'
                    rightSpacing='nano'
                  />
                ) : null}
              </div>
              <hr />
              <Spacer size='lg' />
            </Column>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Column xs={12} sm={8} md={3}>
              <div className='form-control'>
                <Select
                  inputSize='default'
                  radius='sm'
                  name='Country'
                  id='Country'
                  titleProps={{
                    label: 'Country',
                    position: 'outside',
                  }}
                  disabled={isReadonly}
                >
                  <option value='México'>México</option>
                </Select>
              </div>
            </Column>
            <Column xs={12} sm={8} md={3}>
              <div className='form-control'>
                <Input
                  id='Legal Entity Name:'
                  label='Legal Entity Name:'
                  readOnly={isReadonly}
                  border={isReadonly ? 'none' : 'outside'}
                />
              </div>
              <div className='form-control'>
                <Input
                  id='Street Name:'
                  label='Street Name:'
                  readOnly={isReadonly}
                  border={isReadonly ? 'none' : 'outside'}
                />
              </div>
              <div className='form-control'>
                <Input
                  id='Colonia:'
                  label='Colonia:'
                  readOnly={isReadonly}
                  border={isReadonly ? 'none' : 'outside'}
                />
              </div>
              <div className='form-control'>
                <Input
                  id='Estado:'
                  label='Estado:'
                  readOnly={isReadonly}
                  border={isReadonly ? 'none' : 'outside'}
                />
              </div>
            </Column>
            <Column xs={12} sm={8} md={3}>
              <div className='form-control'>
                <Input
                  id='RFC'
                  label='Registro federal de contribuyentes:'
                  readOnly={isReadonly}
                  border={isReadonly ? 'none' : 'outside'}
                />
              </div>
              <div className='form-control'>
                <Input
                  id='RFC2'
                  label='Registro federal de contribuyentes:'
                  readOnly={isReadonly}
                  border={isReadonly ? 'none' : 'outside'}
                />
              </div>
              <div className='form-control'>
                <Input
                  id='RFC3'
                  label='Registro federal de contribuyentes:'
                  readOnly={isReadonly}
                  border={isReadonly ? 'none' : 'outside'}
                />
              </div>
            </Column>
            {isReadonly ? null : (
              <Column xs={12} sm={8} md={9} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button radius='sm' label='Cancel' variant='ghost' onClick={handleEnable} />
                <Spacer direction='horizontal' size='sm' />
                <Button radius='sm' label='Update Changes' onClick={handleEnable} />
              </Column>
            )}
          </Row>
        </Grid>
        <BillingAlert />
        <Grid expanded>
          <Row>
            <Column xs={12} lg={6}>
              <Title level='3'>Billing Manager</Title>
            </Column>
          </Row>
          <Row>
            <BillingManager />
          </Row>
          <Row>
            <Column xs={12} lg={6}>
              <Title level='3'>Subscriptions</Title>
            </Column>
          </Row>
          <Row>
            <SubscriptionsTable />
          </Row>
        </Grid>
      </BodyMain>
    </>
  );
};

export default BillingSubscriptions;
