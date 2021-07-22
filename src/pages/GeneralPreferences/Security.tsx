/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {
  Button,
  Column,
  ConfigContext,
  Container,
  Grid,
  Input,
  Paragraph,
  Spacer,
  Switch,
  Title,
  Row,
  Hideable,
} from '@jp-olvera/jp-viaducto-components';
import { Add } from 'react-ikonate';
import { useContext } from 'react';

const Security = () => {
  const { configuration } = useContext(ConfigContext);
  const { neutral } = configuration.colors;
  return (
    <Grid expanded>
      <Row>
        <Column>
          <Title level='6' weight='600' lineHeight='1.5rem'>
            Organization Wide Security
          </Title>
        </Column>
      </Row>

      <Spacer size='sm' />

      <Row>
        <Column>
          <Paragraph weight='600' lineHeight='1.375rem'>
            Authentication Policy
          </Paragraph>
        </Column>
      </Row>

      <Spacer size='sm' />

      <Row>
        <Column xl={6} md={10} sm={9} xs={12}>
          <Paragraph lineHeight='1.375rem'>Enforce Multi Factor Authentication</Paragraph>
        </Column>
        <Column>
          <Hideable visibleOn='sm' after={false}>
            <Spacer size='sm' />
          </Hideable>
          <Switch color='#1890FF' inputSize='xsmall' defaultChecked />
          <Hideable visibleOn='sm' after={false}>
            <Spacer size='md' />
          </Hideable>
        </Column>
      </Row>
      <Spacer size='md' />

      <Row>
        <Column xl={6} md={10} sm={9} xs={12}>
          <Paragraph lineHeight='1.375rem'>Request confirm for dangerous actions</Paragraph>
        </Column>
        <Column>
          <Hideable visibleOn='sm' after={false}>
            <Spacer size='sm' />
          </Hideable>
          <Switch color='#1890FF' inputSize='xsmall' defaultChecked />
          <Hideable visibleOn='sm' after={false}>
            <Spacer size='md' />
          </Hideable>
        </Column>
      </Row>

      <Spacer size='md' />

      <Row>
        <Column xl={6} md={10} sm={9} xs={12}>
          <Paragraph lineHeight='1.375rem'>Limit Authentication to Specific IP Addresses</Paragraph>
        </Column>
        <Column>
          <Hideable visibleOn='sm' after={false}>
            <Spacer size='sm' />
          </Hideable>
          <Switch color='#1890FF' inputSize='xsmall' defaultChecked />
          <Hideable visibleOn='sm' after={false}>
            <Spacer size='md' />
          </Hideable>
        </Column>
      </Row>

      <Spacer size='lg' />
      <Row>
        <Column xl={7}>
          <Container vertical='sm' horizontal='md' style={{ backgroundColor: neutral.light }}>
            <Paragraph lineHeight='1.375rem'>IP Ranges</Paragraph>
            <div className='form-control'>
              <Input label='EIN:' inputSize='small' defaultValue='123-23B3-123' />
            </div>

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
        </Column>
      </Row>
      <Spacer size='lg' />
      <Row>
        <Column>
          <Paragraph lineHeight='1.375rem' weight='600'>
            SAML and Single Sign On
          </Paragraph>
        </Column>
      </Row>

      <Spacer size='md' />

      <Row>
        <Column xl={6} md={10} sm={9} xs={12}>
          <Paragraph lineHeight='1.375rem'>SAML And SSO Security Off</Paragraph>
        </Column>
        <Column>
          <Hideable visibleOn='sm' after={false}>
            <Spacer size='sm' />
          </Hideable>
          <Switch color='#1890FF' inputSize='xsmall' defaultChecked />
          <Hideable visibleOn='sm' after={false}>
            <Spacer size='md' />
          </Hideable>
        </Column>
      </Row>

      <Spacer size='md' />

      <Row>
        <Column xl={6} md={10} sm={9} xs={12}>
          <Paragraph lineHeight='1.375rem'>SAML And SSO Security Off</Paragraph>
        </Column>
        <Column>
          <Hideable visibleOn='sm' after={false}>
            <Spacer size='sm' />
          </Hideable>
          <Switch color='#1890FF' inputSize='xsmall' defaultChecked />
          <Hideable visibleOn='sm' after={false}>
            <Spacer size='md' />
          </Hideable>
        </Column>
      </Row>

      <Spacer size='lg' />

      <Row>
        <Column xl={7}>
          <Container vertical='sm' horizontal='md' style={{ backgroundColor: neutral.light }}>
            <Paragraph lineHeight='1.375rem'>Request Consulting Services:</Paragraph>
            <Spacer size='sm' />
            <div className='form-control'>
              <Input label='Subject Line' inputSize='small' defaultValue='123-23B3-123' />
            </div>
            <div className='form-control'>
              <Input label='Support Request:' inputSize='small' defaultValue='123-23B3-123' />
            </div>
            <Spacer size='sm' />
            <Button
              label='Request Assistance'
              size='large'
              lead
              leftSpacing='tiny'
              rightSpacing='tiny'
            />
          </Container>
        </Column>
      </Row>
      <Spacer size='xl' />
      <Row>
        <Column>
          <Paragraph lineHeight='1.375rem' weight='600'>
            Password Strength
          </Paragraph>
        </Column>
      </Row>
      <Spacer size='xxl' />
      <Spacer size='xxl' />
    </Grid>
  );
};

export default Security;
