import React from 'react';
import {
  Badge,
  Button,
  Column,
  Container,
  Grid,
  Hideable,
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
import Skeleton from 'react-loading-skeleton';

const BrandLocalization = ({ load }: { load: boolean }) => {
  return (
    <div>
      <Grid>
        <Row>
          <Column>
            <Title level='6' weight='600' lineHeight='1.5rem'>
              Logotype
            </Title>
          </Column>
        </Row>
      </Grid>
      <Spacer size='md' />
      <Grid>
        <Row>
          <Column lg={5} md={12} xs={12}>
            {load ? (
              <Skeleton width='30%' />
            ) : (
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
            )}
            <Spacer size='md' />
            {!load && (
              <Button
                size='default'
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
            )}
            <Spacer size='md' />
            {!load && (
              <Paragraph color='#820014' size='sm' lineHeight='1.25rem'>
                *Images must be at least 100px wide and in PNG, JPG Format.
              </Paragraph>
            )}
          </Column>
          <Column>
            <Hideable visibleOn='lg' after={false}>
              <Spacer size='md' />
            </Hideable>
            {load ? (
              <Skeleton height='200px' />
            ) : (
              <div
                style={{
                  background: `url(${preview})`,
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
                      color='#262626'
                      size={{ width: '4.313rem', height: '1.688rem' }}
                    />
                  </Container>
                </Container>
              </div>
            )}
          </Column>
        </Row>
      </Grid>
      <Spacer size='lg' />
      <Grid>
        <Row>
          <Grid>
            <Title level='6' weight='600' lineHeight='1.5rem'>
              Favicon
            </Title>
          </Grid>
        </Row>
      </Grid>
      <Spacer size='md' />
      <Grid>
        <Row>
          <Column lg={5} md={12} xs={12}>
            {load ? (
              <Skeleton width='30%' />
            ) : (
              <Container
                style={{
                  border: '0.063rem solid #000',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 45,
                }}
                vertical='md'
                horizontal='sm'
              >
                <Logo title={false} />
              </Container>
            )}
            <Spacer size='md' />
            {!load && (
              <Button
                size='default'
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
            )}
            <Spacer size='md' />
            {!load && (
              <Paragraph color='#820014' size='sm' lineHeight='1.25rem'>
                *Images must be at least 40px wide and in PNG, JPG Format.
              </Paragraph>
            )}
          </Column>
          <Column>
            {load ? (
              <Skeleton height='200px' />
            ) : (
              <div
                style={{
                  background: `url(${preview})`,
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
                      color='#262626'
                      size={{ width: '4.313rem', height: '1.688rem' }}
                    />
                  </Container>
                </Container>
              </div>
            )}
          </Column>
        </Row>
      </Grid>
      <Spacer size='lg' />
      <Grid>
        <Row>
          <Column>
            <Title level='6' weight='600' lineHeight='1.5rem'>
              Color Palette
            </Title>
          </Column>
        </Row>
      </Grid>
      <Spacer size='md' />
      <Grid>
        <Row>
          <Column>
            {load ? (
              <Skeleton />
            ) : (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ flexBasis: '100%', height: 45, display: 'flex' }}>
                  <Palette main='#F79F1A' secondary='#34AA44' terciary='#73D13D' />
                </div>
                <Spacer direction='horizontal' size='md' />
                <Radio color='#1890FF' name='colorPalette' radioSize='sm' defaultChecked />
              </div>
            )}
          </Column>
        </Row>
        <Spacer size='sm' />
        <Row>
          <Column>
            {load ? (
              <Skeleton />
            ) : (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ flexBasis: '100%', height: 45, display: 'flex' }}>
                  <Palette main='#6758F3' secondary='#139AD6' terciary='#FF5F01' />
                </div>
                <Spacer direction='horizontal' size='md' />
                <Radio color='#1890FF' name='colorPalette' radioSize='sm' />
              </div>
            )}
          </Column>
        </Row>
        <Spacer size='sm' />
        <Row>
          <Column>
            {load ? (
              <Skeleton />
            ) : (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ flexBasis: '100%', height: 45, display: 'flex' }}>
                  <Palette main='#FF4D4F' secondary='#FACF55' terciary='#FF7875' />
                </div>
                <Spacer direction='horizontal' size='md' />
                <Radio color='#1890FF' name='colorPalette' radioSize='sm' />
              </div>
            )}
          </Column>
        </Row>
      </Grid>
      <Spacer size='lg' />
      <Grid>
        <Row>
          <Column>
            <Title level='6' weight='600' lineHeight='1.5rem'>
              Location
            </Title>
          </Column>
        </Row>
      </Grid>
      <Spacer size='md' />
      <Grid>
        <Row>
          <Column size={12}>
            <Paragraph lineHeight='1.375rem'>Preferred Language</Paragraph>
          </Column>
          <Column lg={8}>
            {load ? (
              <Skeleton />
            ) : (
              <Select inputSize='small'>
                <option value='EN-US'>English - USA</option>
                <option value='ES-MX'>Espa??ol - Mexico</option>
              </Select>
            )}
          </Column>
        </Row>
      </Grid>
      <Spacer size='sm' />
      <Grid>
        <Row>
          <Column size={12}>
            <Paragraph lineHeight='1.375rem'>Reporting Time</Paragraph>
          </Column>
          <Column lg={8}>
            {load ? (
              <Skeleton />
            ) : (
              <Select inputSize='small'>
                <option value='GTM8'>Pacific Time (Los Angeles, Seattle) GMT - 8</option>
                <option value='GTM8'>Pacific Time (Los Angeles, Seattle) GMT - 8</option>
              </Select>
            )}
          </Column>
        </Row>
      </Grid>
    </div>
  );
};
export default BrandLocalization;
