import React from 'react';
import {
  AvatarWithText,
  Button,
  Checkbox,
  Column,
  Container,
  Grid,
  Input,
  Paragraph,
  Row,
  Select,
  Spacer,
  Title,
} from '@jp-olvera/jp-viaducto-components';
import { Add } from 'react-ikonate';

const Overview = () => {
  const borders = {
    top: '0.063rem solid #d9d9d9',
    bottom: '0.063rem solid #d9d9d9',
    left: '0.063rem solid #d9d9d9',
    right: '0.063rem solid #d9d9d9',
  };
  return (
    <div style={{ height: '100%' }}>
      <Title level='6' weight='600' lineHeight='1.5rem' color='#262626'>
        Company Details
      </Title>
      <Spacer size='md' />
      <Grid>
        <Row>
          <Column size={5}>
            <Paragraph lineHeight='1.375rem' color='#262626'>
              Legal Company Name
            </Paragraph>
            <Input inputSize='sm' defaultValue='StackShare Tech Inc.' borderColor='#d9d9d9' />
          </Column>
          <Column size={5}>
            <Paragraph lineHeight='1.375rem' color='#262626'>
              Doing Business As:
            </Paragraph>
            <Input inputSize='sm' defaultValue='StackShare' borderColor='#d9d9d9' />
          </Column>
        </Row>
        <Spacer size='sm' />
        <Row>
          <Column size={5}>
            <Paragraph lineHeight='1.375rem' color='#262626'>
              EIN:
            </Paragraph>
            <Input inputSize='sm' defaultValue='123-23B3-123' borderColor='#d9d9d9' />
          </Column>
        </Row>
      </Grid>
      <Spacer size='lg' />
      <Title level='6' weight='600' lineHeight='1.5rem' color='#262626'>
        Legal Company Address
      </Title>
      <Spacer size='sm' />
      <Grid>
        <Row>
          <Column size={5}>
            <Paragraph lineHeight='1.375rem' color='#262626'>
              Country
            </Paragraph>
            <Select border={borders}>
              <option value='USA'>USA</option>
            </Select>
          </Column>
          <Column size={5}>
            <Paragraph lineHeight='1.375rem' color='#262626'>
              State
            </Paragraph>
            <Select border={borders}>
              <option value='USA'>USA</option>
            </Select>
          </Column>
        </Row>
        <Spacer size='sm' />
        <Row>
          <Column size={12}>
            <Paragraph lineHeight='1.375rem' color='#262626'>
              Address
            </Paragraph>
            <Input inputSize='sm' defaultValue='Example Address, 123456' borderColor='#d9d9d9' />
          </Column>
        </Row>
        <Spacer size='sm' />
        <Row>
          <Column size={12}>
            <Paragraph lineHeight='1.375rem' color='#262626'>
              Address
            </Paragraph>
            <Input inputSize='sm' defaultValue='Example Address, 123456' borderColor='#d9d9d9' />
          </Column>
        </Row>
      </Grid>
      <Spacer size='lg' />
      <Title level='6' weight='600' lineHeight='1.5rem' color='#262626'>
        Contact Information
      </Title>
      <Spacer size='sm' />
      <Grid>
        <Row>
          <Column size={3}>
            <Container
              horizontal='sm'
              style={{
                borderBottom: borders.bottom,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div>
                <Checkbox
                  label='Same as Legal Address'
                  checkSize='md'
                  spacing='sm'
                  checked
                  color='#096DD9'
                />
                <Spacer size='sm' />
              </div>
            </Container>
          </Column>
          <Spacer size='md' />
          <Column size={12}>
            <Paragraph lineHeight='1.375rem' color='#262626'>
              Phone Number
            </Paragraph>
            <Input inputSize='sm' defaultValue='Example Phone, 123456' borderColor='#d9d9d9' />
          </Column>
        </Row>
      </Grid>
      <Spacer size='lg' />
      <Title level='6' weight='600' lineHeight='1.5rem' color='#262626'>
        Organization Owner
      </Title>
      <Spacer size='md' />
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <AvatarWithText
          avatar={{ src: 'https://i.pravatar.cc/32', alt: 'overview', width: '32', height: '32' }}
        >
          <div style={{ display: 'flex' }}>
            <Paragraph lineHeight='1.375rem' color='#262626'>
              Ted Russell
            </Paragraph>
            <Spacer direction='horizontal' size='sm' />
            <Paragraph lineHeight='1.375rem' color='#262626'>
              ted.russell@stackshare.io
            </Paragraph>
            <Spacer direction='horizontal' size='sm' />
            <Paragraph lineHeight='1.375rem' color='#262626'>
              +1 745 989 89898
            </Paragraph>
          </div>
        </AvatarWithText>
      </div>
      <Spacer size='lg' />
      <Button
        variant='ghost'
        label='Add new Organization Owner'
        size='large'
        lead
        iconSpacing='xs'
        icon={<Add />}
        leftSpacing='tiny'
        rightSpacing='tiny'
      />
      <Spacer size='xs' />
      <Spacer size='xxxl' />
      <Button label='Update Company Details' size='large' leftSpacing='md' rightSpacing='md' />
      <Spacer size='xxl' />
      <Spacer size='xxxl' />
    </div>
  );
};

export default Overview;
