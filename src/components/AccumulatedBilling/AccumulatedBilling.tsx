import React from 'react';
import { Container, Paragraph, Spacer } from '@jp-olvera/jp-viaducto-components';

const AccumulatedBilling = () => (
  <Container
    horizontal='md'
    style={{
      width: '23rem',
      border: '0.063rem solid #BFBFBF',
      borderRadius: 4,
      textAlign: 'center',
      overflow: 'auto',
      backgroundColor: 'white',
      maxHeight: '100%',
    }}
  >
    <div style={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
      <div
        style={{
          borderBottom: '0.063rem solid #d9d9d9',
          overflow: 'auto',
          paddingTop: '0.482rem',
        }}
      >
        <Paragraph weight='600' size='lg' lineHeight='1.5rem'>
          Accumulated billing
        </Paragraph>
        <Paragraph weight='400' size='md' lineHeight='1.25rem' color='#8C8C8C'>
          To be billed by June 31, 2021
        </Paragraph>
        <Spacer direction='vertical' size='micro' />
      </div>
      <Spacer direction='vertical' size='micro' />
      <div style={{ borderBottom: '0.063rem solid #d9d9d9', overflow: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ padding: '0 0 0 0.5rem' }}>
            <Paragraph lineHeight='1.25rem' color='#595959' size='sm'>
              App
            </Paragraph>
          </div>
          <div style={{}}>
            <Paragraph lineHeight='1.25rem' color='#595959' size='sm'>
              Expense
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
    <Spacer direction='vertical' size='micro' />
    <AppsAccumulated app='Atlassian' />
    <AppsAccumulated app='Twitter' />
    <AppsAccumulated app='Facebook' />
    <AppsAccumulated app='Zoom' />
    <AppsAccumulated app='YouTube' />
    <AppsAccumulated app='YouTube' />
    <AppsAccumulated app='Atlassian' />
    <AppsAccumulated app='Google Drive' />
    <AppsAccumulated app='Dropbox' />
    <AppsAccumulated app='Box' />
    <AppsAccumulated app='RainforestQA' />
    <AppsAccumulated app='Shopify' />
    <AppsAccumulated app='Gorgias' />
    <AppsAccumulated app='Wikipedia' />
    <AppsAccumulated app='Facebook' />
    <AppsAccumulated app='Zoom' />
    <AppsAccumulated app='YouTube' />
    <AppsAccumulated app='YouTube' />
    <AppsAccumulated app='Box' />
    <AppsAccumulated app='RainforestQA' />
    <AppsAccumulated app='Shopify' />
    <AppsAccumulated app='Gorgias' />
    <div
      style={{
        position: 'sticky',
        bottom: 0,
        backgroundColor: 'white',
        zIndex: 1,
        display: 'flex',
        padding: '0.482rem 0',
        justifyContent: 'space-between',
        height: '2.438rem',
      }}
    >
      <Paragraph lineHeight='1.5rem' size='lg' weight='400'>
        Total
      </Paragraph>
      <Paragraph lineHeight='1.5rem' size='lg' weight='600'>
        $16,000.00
      </Paragraph>
    </div>
  </Container>
);

export default AccumulatedBilling;

const AppsAccumulated = ({ app }: any) => {
  return (
    <>
      <Spacer direction='vertical' size='md' />
      <div style={{ display: 'flex' }}>
        <div
          style={{
            width: '65%',
            padding: '0 0 0 0.5rem',
            display: 'flex',
            gap: '0.563rem',
            alignItems: 'center',
          }}
        >
          <img src='https://i.pravatar.cc/32' alt='avatar' style={{ borderRadius: '50%' }} />
          <Paragraph lineHeight='1.375rem' color='#595959'>
            {app}
          </Paragraph>
        </div>
        <div style={{ width: '35%' }}>
          <Paragraph lineHeight='1.375rem'>$400</Paragraph>
        </div>
      </div>
    </>
  );
};
