import React from 'react';
import {
  AvatarWithText,
  ConfigContext,
  Container,
  Paragraph,
  Spacer,
} from '@jp-olvera/jp-viaducto-components';
import { useContext } from 'react';

const AccumulatedBilling = () => {
  const { configuration } = useContext(ConfigContext);
  const { background } = configuration.colors;
  return (
    <Container
      horizontal='md'
      style={{
        width: '100%',
        border: '0.063rem solid #BFBFBF',
        borderRadius: 4,
        textAlign: 'center',
        overflow: 'auto',
        maxHeight: '100%',
      }}
    >
      <div style={{ position: 'sticky', top: 0, backgroundColor: background }}>
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

        <Container vertical='tiny' style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Paragraph lineHeight='1.25rem' color='gray' size='sm'>
            App
          </Paragraph>

          <Paragraph lineHeight='1.25rem' color='gray' size='sm'>
            Expense
          </Paragraph>
        </Container>
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
      <Container
        vertical='sm'
        style={{
          position: 'sticky',
          bottom: 0,
          backgroundColor: background,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Paragraph lineHeight='1.5rem' size='lg' weight='400'>
          Total
        </Paragraph>
        <Paragraph lineHeight='1.5rem' size='lg' weight='600'>
          $16,000.00
        </Paragraph>
      </Container>
    </Container>
  );
};

export default AccumulatedBilling;

const AppsAccumulated = ({ app }: any) => {
  return (
    <>
      <Spacer direction='vertical' size='md' />
      <Container
        horizontal='sm'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <AvatarWithText
          avatar={{ src: 'https://i.pravatar.cc/32', alt: 'avatar', width: '32', height: '32' }}
        >
          <Paragraph lineHeight='1.375rem'>{app}</Paragraph>
        </AvatarWithText>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Spacer direction='horizontal' size='md' />
          <Paragraph lineHeight='1.375rem'>$400</Paragraph>
        </div>
      </Container>
    </>
  );
};
