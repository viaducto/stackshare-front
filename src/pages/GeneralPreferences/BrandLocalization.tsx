import React from 'react';
import {
  Badge,
  Button,
  Column,
  Container,
  Grid,
  Paragraph,
  Radio,
  Row,
  Select,
  Spacer,
  Title,
} from '@jp-olvera/jp-viaducto-components';
import { Palette } from '../../components/Palette';
import Logo from '../../components/Logo/Logo';
import { Upload } from 'react-ikonate';
import preview from './preview.png';

const borders = {
  top: '0.063rem solid #d9d9d9',
  bottom: '0.063rem solid #d9d9d9',
  left: '0.063rem solid #d9d9d9',
  right: '0.063rem solid #d9d9d9',
};

const BrandLocalization = () => {
  return (
    <div style={{ height: '100%' }}>
      <Title level='6' weight='600' lineHeight='1.5rem'>
        Logotype
      </Title>
      <Spacer size='md' />
      <Grid>
        <Row>
          <Column size={4}>
            <Container
              style={{
                border: '0.063rem solid #000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 160,
              }}
              vertical='md'
              left='sm'
            >
              <Logo />
            </Container>
            <Spacer size='md' />
            <Button
              size='large'
              variant='outline'
              colors={{
                default: '#595959',
                click: '#fff',
                hover: '#fff',
                text: '#595959',
              }}
              lead
              leftSpacing='md'
              rightSpacing='md'
              icon={<Upload />}
              label='Upload new logo'
            />
            <Spacer size='md' />
            <Paragraph color='#820014' size='sm' lineHeight='1.25rem'>
              *Images must be at least 100px wide and in PNG, JPG Format.
            </Paragraph>
          </Column>
          <Column>
            <div
              style={{
                background: `url(${preview})`,
                width: 467,
                height: 200,
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                border: '0.063rem solid #000',
              }}
            >
              <Container vertical='sm' horizontal='sm'>
                <Container style={{ border: '0.063rem solid' }}>
                  <Badge
                    content='Preview'
                    background='#FFEFEF'
                    size={{ width: '4.313rem', height: '1.688rem' }}
                  />
                </Container>
              </Container>
            </div>
          </Column>
        </Row>
      </Grid>
      <Spacer size='md' />
      <Title level='6' weight='600' lineHeight='1.5rem' color='dark'>
        Favicon
      </Title>
      <Spacer size='md' />
      <Grid>
        <Row>
          <Column size={4}>
            <Container
              style={{
                border: '0.063rem solid #000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
              }}
              vertical='md'
              horizontal='sm'
            >
              <Logo title={false} />
            </Container>
            <Spacer size='md' />
            <Button
              size='large'
              variant='outline'
              colors={{
                default: '#595959',
                click: '#fff',
                hover: '#fff',
                text: '#595959',
              }}
              lead
              leftSpacing='md'
              rightSpacing='md'
              icon={<Upload />}
              label='Upload new favicon'
            />
            <Spacer size='md' />
            <Paragraph color='#820014' size='sm' lineHeight='1.25rem'>
              *Images must be at least 40px wide and in PNG, JPG Format.
            </Paragraph>
          </Column>
          <Column>
            <div
              style={{
                background: `url(${preview})`,
                width: 467,
                height: 200,
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                border: '0.063rem solid #000',
              }}
            >
              <Container vertical='sm' horizontal='sm'>
                <Container style={{ border: '0.063rem solid' }}>
                  <Badge
                    content='Preview'
                    background='#FFEFEF'
                    size={{ width: '4.313rem', height: '1.688rem' }}
                  />
                </Container>
              </Container>
            </div>
          </Column>
        </Row>
      </Grid>
      <Spacer size='md' />
      <Title level='6' weight='600' lineHeight='1.5rem' color='dark'>
        Color Palette
      </Title>
      <Spacer size='md' />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '95%',
        }}
      >
        <div style={{ flexBasis: '100%', height: 45, display: 'flex' }}>
          <Palette main='#F79F1A' secondary='#34AA44' terciary='#73D13D' />
        </div>
        <Spacer direction='horizontal' size='md' />
        <Radio color='#1890FF' name='colorPalette' radioSize='sm' defaultChecked />
      </div>
      <Spacer size='md' />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '95%',
        }}
      >
        <div style={{ flexBasis: '100%', height: 45, display: 'flex' }}>
          <Palette main='#6758F3' secondary='#139AD6' terciary='#FF5F01' />
        </div>
        <Spacer direction='horizontal' size='md' />
        <Radio color='#1890FF' name='colorPalette' radioSize='sm' />
      </div>
      <Spacer size='md' />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '95%',
        }}
      >
        <div style={{ flexBasis: '100%', height: 45, display: 'flex' }}>
          <Palette main='#FF4D4F' secondary='#FACF55' terciary='#FF7875' />
        </div>
        <Spacer direction='horizontal' size='md' />
        <Radio color='#1890FF' name='colorPalette' radioSize='sm' />
      </div>
      <Spacer size='md' />
      <Title level='6' weight='600' lineHeight='1.5rem' color='dark'>
        Location
      </Title>
      <Spacer size='md' />
      <div
        style={{
          width: 320,
        }}
      >
        <Paragraph lineHeight='1.375rem' color='dark'>
          Preferred Language
        </Paragraph>
        <Select border={borders}>
          <option value='EN-US'>English - USA</option>
          <option value='ES-MX'>Español - Mexico</option>
        </Select>
      </div>
      <Spacer size='md' />
      <div
        style={{
          width: 320,
        }}
      >
        <Paragraph lineHeight='1.375rem' color='dark'>
          Reporting Time
        </Paragraph>
        <Select border={borders}>
          <option value='GTM8'>Pacific Time (Los Angeles, Seattle) GMT - 8</option>
        </Select>
      </div>
      <Spacer size='xxl' />
      <Spacer size='xxl' />
    </div>
  );
};
export default BrandLocalization;
