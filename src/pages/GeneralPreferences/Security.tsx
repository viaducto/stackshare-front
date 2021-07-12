import React from 'react';
import {
  Button,
  Container,
  Input,
  Paragraph,
  Spacer,
  Switch,
  Title,
} from '@jp-olvera/jp-viaducto-components';
import { Add } from 'react-ikonate';

const Security = () => (
  <div style={{ height: '100%' }}>
    <Title level='6' weight='600' lineHeight='1.5rem' color='#262626'>
      Organization Wide Security
    </Title>
    <Spacer size='sm' />
    <Paragraph weight='600' lineHeight='1.375rem' color='#262626'>
      Authentication Policy
    </Paragraph>
    <Spacer size='sm' />
    <div
      style={{
        width: 320,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <Paragraph lineHeight='1.375rem' color='#262626'>
        Enforce Multi Factor Authentication
      </Paragraph>
      <Switch color='#1890FF' inputSize='md' />
    </div>
    <Spacer size='md' />
    <div
      style={{
        width: 320,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <Paragraph lineHeight='1.375rem' color='#262626'>
        Request confirm for dangerous actions
      </Paragraph>
      <Switch color='#1890FF' inputSize='md' />
    </div>
    <Spacer size='md' />
    <div
      style={{
        width: 320,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <Paragraph lineHeight='1.375rem' color='#262626'>
        Limit Authentication to Specific IP Addresses
      </Paragraph>
      <Switch color='#1890FF' inputSize='md' />
    </div>
    <Spacer size='lg' />
    <Container vertical='sm' horizontal='md' style={{ backgroundColor: '#F3F3F3', width: 350 }}>
      <Paragraph lineHeight='1.375rem' color='#262626'>
        IP Ranges
      </Paragraph>
      <Paragraph lineHeight='1.375rem' color='#262626'>
        EIN:
      </Paragraph>
      <Input inputSize='sm' defaultValue='123-23B3-123' borderColor='#d9d9d9' />
      <Spacer size='lg' />
      <Button
        variant='ghost'
        label='Add new IP Range'
        size='large'
        lead
        iconSpacing='xs'
        icon={<Add />}
        leftSpacing='tiny'
        rightSpacing='tiny'
      />
    </Container>
    <Spacer size='lg' />
    <Paragraph lineHeight='1.375rem' color='#262626' weight='600'>
      SAML and Single Sign On
    </Paragraph>
    <Spacer size='md' />
    <div
      style={{
        width: 320,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <Paragraph lineHeight='1.375rem' color='#262626'>
        SAML And SSO Security Off
      </Paragraph>
      <Switch color='#1890FF' inputSize='md' />
    </div>
    <Spacer size='xxl' />
    <div
      style={{
        width: 320,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <Paragraph lineHeight='1.375rem' color='#262626'>
        SAML And SSO Security Off
      </Paragraph>
      <Switch color='#1890FF' inputSize='md' />
    </div>
    <Spacer size='md' />
    <Container vertical='sm' horizontal='md' style={{ backgroundColor: '#F3F3F3', width: 350 }}>
      <Paragraph lineHeight='1.375rem' color='#262626'>
        Request Consulting Services:
      </Paragraph>
      <Spacer size='sm' />
      <Paragraph lineHeight='1.375rem' color='#262626'>
        Subject Line:
      </Paragraph>
      <Input inputSize='sm' defaultValue='123-23B3-123' borderColor='#d9d9d9' />
      <Spacer size='sm' />
      <Paragraph lineHeight='1.375rem' color='#262626'>
        Support Request:
      </Paragraph>
      <Input inputSize='sm' defaultValue='123-23B3-123' borderColor='#d9d9d9' />
      <Spacer size='lg' />
      <Button label='Request Assistance' size='large' lead leftSpacing='tiny' rightSpacing='tiny' />
    </Container>
    <Spacer size='xl' />
    <Paragraph lineHeight='1.375rem' color='#262626' weight='600'>
      Password Strength
    </Paragraph>
    <Spacer size='xxl' />
    <Spacer size='xxl' />
  </div>
);

export default Security;
