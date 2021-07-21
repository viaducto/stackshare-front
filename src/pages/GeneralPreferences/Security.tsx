import React from 'react';
import {
  Button,
  ConfigContext,
  Container,
  Input,
  Paragraph,
  Spacer,
  Switch,
  Title,
} from '@jp-olvera/jp-viaducto-components';
import { Add } from 'react-ikonate';
import { useContext } from 'react';

const Security = () => {
  const { configuration } = useContext(ConfigContext);
  const { neutral } = configuration.colors;
  return (
    <div style={{ height: '100%' }}>
      <Title level='6' weight='600' lineHeight='1.5rem'>
        Organization Wide Security
      </Title>
      <Spacer size='sm' />
      <Paragraph weight='600' lineHeight='1.375rem'>
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
        <Paragraph lineHeight='1.375rem'>Enforce Multi Factor Authentication</Paragraph>
        <Switch color='#1890FF' inputSize='md' defaultChecked />
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
        <Paragraph lineHeight='1.375rem'>Request confirm for dangerous actions</Paragraph>
        <Switch color='#1890FF' inputSize='md' defaultChecked />
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
        <Paragraph lineHeight='1.375rem'>Limit Authentication to Specific IP Addresses</Paragraph>
        <Switch color='#1890FF' inputSize='md' defaultChecked />
      </div>
      <Spacer size='lg' />
      <Container
        vertical='sm'
        horizontal='md'
        style={{ backgroundColor: neutral.light, width: 350 }}
      >
        <Paragraph lineHeight='1.375rem'>IP Ranges</Paragraph>
        <div className='form-control'>
          <Input label='EIN:' inputSize='small' defaultValue='123-23B3-123' />
        </div>
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
      <Paragraph lineHeight='1.375rem' weight='600'>
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
        <Paragraph lineHeight='1.375rem'>SAML And SSO Security Off</Paragraph>
        <Switch color='#1890FF' inputSize='md' defaultChecked />
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
        <Paragraph lineHeight='1.375rem'>SAML And SSO Security Off</Paragraph>
        <Switch color='#1890FF' inputSize='md' defaultChecked />
      </div>
      <Spacer size='md' />
      <Container
        vertical='sm'
        horizontal='md'
        style={{ backgroundColor: neutral.light, width: 350 }}
      >
        <Paragraph lineHeight='1.375rem'>Request Consulting Services:</Paragraph>
        <Spacer size='sm' />
        <div className='form-control'>
          <Input label='Subject Line' inputSize='small' defaultValue='123-23B3-123' />
        </div>
        <div className='form-control'>
          <Input label='Support Request:' inputSize='small' defaultValue='123-23B3-123' />
        </div>

        <Button
          label='Request Assistance'
          size='large'
          lead
          leftSpacing='tiny'
          rightSpacing='tiny'
        />
      </Container>
      <Spacer size='xl' />
      <Paragraph lineHeight='1.375rem' weight='600'>
        Password Strength
      </Paragraph>
      <Spacer size='xxl' />
      <Spacer size='xxl' />
    </div>
  );
};

export default Security;
