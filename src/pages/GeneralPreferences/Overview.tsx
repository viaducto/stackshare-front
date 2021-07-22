import React from 'react';
import {
  AvatarWithText,
  Button,
  Checkbox,
  Column,
  Container,
  Grid,
  Hideable,
  Input,
  Paragraph,
  Row,
  Select,
  Spacer,
  Title,
} from '@jp-olvera/jp-viaducto-components';
import { Add } from 'react-ikonate';

const Overview = () => {
  return (
    <div style={{ height: '100%' }}>
      <Grid>
        <Row>
          <Column>
            <Title level='6' weight='600' lineHeight='1.5rem'>
              Company Details
            </Title>
          </Column>
        </Row>
      </Grid>
      <Spacer size='md' />
      <Grid>
        <Row>
          <Column>
            <div className='form-control'>
              <Input
                inputSize='small'
                defaultValue='StackShare Tech Inc.'
                label='Legal Company Name'
              />
            </div>
          </Column>
          <Column>
            <div className='form-control'>
              <Input inputSize='small' defaultValue='StackShare' label='Doing Business As:' />
            </div>
          </Column>
        </Row>
        <Row>
          <Column>
            <div className='form-control'>
              <Input inputSize='small' defaultValue='123-23B3-123' label='EIN:' />
            </div>
          </Column>
        </Row>
      </Grid>
      <Spacer size='lg' />
      <Grid>
        <Row>
          <Column>
            <Title level='6' weight='600' lineHeight='1.5rem'>
              Legal Company Address
            </Title>
          </Column>
        </Row>
      </Grid>
      <Spacer size='sm' />
      <Grid>
        <Row>
          <Column>
            <Paragraph lineHeight='1.375rem'>Country</Paragraph>
            <Select border='all'>
              <option value='USA'>USA</option>
            </Select>
          </Column>
          <Column>
            <Paragraph lineHeight='1.375rem'>State</Paragraph>
            <Select border='all'>
              <option value='USA'>USA</option>
            </Select>
          </Column>
        </Row>
        <Spacer size='sm' />
        <Row>
          <Column size={12}>
            <div className='form-control'>
              <Input inputSize='small' defaultValue='Example Address, 123456' label='Address' />
            </div>
          </Column>
        </Row>
        <Spacer size='sm' />
        <Row>
          <Column size={12}>
            <div className='form-control'>
              <Input inputSize='small' defaultValue='Example Address, 123456' label='Address2' />
            </div>
          </Column>
        </Row>
      </Grid>
      <Spacer size='lg' />
      <Grid>
        <Row>
          <Column>
            <Title level='6' weight='600' lineHeight='1.5rem'>
              Contact Information
            </Title>
          </Column>
        </Row>
      </Grid>
      <Spacer size='sm' />
      <Grid expanded>
        <Row>
          <Column xl={3} md={6} sm={12}>
            <Spacer size='md' />
            <Container
              horizontal='sm'
              className='border-bottom'
              style={{
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
                  defaultChecked
                  color='#096DD9'
                />
                <Spacer size='sm' />
              </div>
            </Container>
          </Column>
          <Column size={12}>
            <Spacer size='md' />
            <div className='form-control'>
              <Input inputSize='small' label='Phone Number' defaultValue='Example Phone, 123456' />
            </div>
          </Column>
        </Row>
      </Grid>
      <Spacer size='lg' />
      <Grid>
        <Row>
          <Column>
            <Title level='6' weight='600' lineHeight='1.5rem'>
              Organization Owner
            </Title>
            <Spacer size='md' />
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <AvatarWithText
                avatar={{
                  src: 'https://i.pravatar.cc/32',
                  alt: 'overview',
                  width: '32',
                  height: '32',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Paragraph lineHeight='1.375rem'>Ted Russell</Paragraph>
                  <Hideable visibleOn='sm'>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <Paragraph lineHeight='1.375rem'>ted.russell@stackshare.io</Paragraph>
                      <Spacer direction='horizontal' size='sm' />
                      <Paragraph lineHeight='1.375rem'>+1 745 989 89898</Paragraph>
                    </div>
                  </Hideable>
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
            <Spacer size='xxxl' />
            <Button
              label='Update Company Details'
              size='large'
              leftSpacing='md'
              rightSpacing='md'
            />
          </Column>
        </Row>
      </Grid>
      <Spacer size='xxl' />
    </div>
  );
};

export default Overview;
