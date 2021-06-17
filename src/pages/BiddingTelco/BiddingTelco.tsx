import React, { useState, useEffect } from 'react';
import {
  Paragraph,
  Spacer,
  Radio,
  Input,
  Select,
  Anchor,
  Pill,
  Button,
  Breadcrums,
  Drawer,
} from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyHeader, BodyMain } from '../../components/layout';
import { Container } from '../../components/Container';
import styled from 'styled-components';

const WrapperSelect = styled.div<any>`
  width: 16rem;
  & > select {
    box-shadow: 0 0 0.25rem rgba(24, 144, 255, 0.5);
  }
`;

const BiddingTelco = () => {
  const [open, setOpen] = useState(false);
  const [simple, setSimple] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    document.querySelectorAll('input')[0].checked = true;
  }, []);
  return (
    <BodyContent
      style={{
        boxSizing: 'border-box',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      {/* Header */}
      <BodyHeader>
        <Container vertical='sm' horizontal='md'>
          <Breadcrums
            options={[
              { href: '#', label: 'Auctions' },
              { href: '#', label: 'Bidding', active: true },
            ]}
          />
          <Paragraph size='lg' color='#262626' weight='600' lineHeight='1.75rem'>
            Sell parameters
          </Paragraph>
        </Container>
      </BodyHeader>

      {/* Body */}
      <BodyMain>
        <div style={{ backgroundColor: 'white', height: '100%' }}>
          <div style={{ borderBottom: '0.063rem solid #D9D9D9' }}>
            <Container vertical='md' horizontal='lg' expandHorizontal expandVertical>
              <Paragraph lineHeight='1.375rem' weight='600'>
                Pricing definition
              </Paragraph>
              <Spacer direction='vertical' size='sm' />
              <div>
                <Radio
                  radioSize='sm'
                  name='princig'
                  label='Simple'
                  spacing='sm'
                  color='#1890FF'
                  checked={simple}
                  onChange={() => setSimple(true)}
                />
                <Spacer direction='horizontal' size='xl' />
                <Radio
                  checked={!simple}
                  radioSize='sm'
                  name='princig'
                  label='Advanced'
                  spacing='sm'
                  color='#1890FF'
                  onChange={() => setSimple(false)}
                />
              </div>
            </Container>
          </div>
          <div>
            <Container vertical='md' horizontal='lg' expandHorizontal expandVertical>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  gap: '5rem',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <Paragraph lineHeight='1.375rem' weight='600'>
                    Minimum ask per Mb/s
                  </Paragraph>
                  <Spacer direction='vertical' size='xs' />
                  <div
                    style={{
                      width: '6.625rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.438rem',
                    }}
                  >
                    <Paragraph color='#595959' weight='600'>
                      $
                    </Paragraph>
                    <Input type='number' size='default' borderColor='#d9d9d9' />
                  </div>
                  {!simple && (
                    <>
                      <Spacer direction='vertical' size='lg' />
                      <Paragraph lineHeight='1.375rem' weight='600'>
                        Prices and availiability
                      </Paragraph>
                      <Spacer direction='vertical' size='xs' />
                      <Paragraph lineHeight='1.375rem' color='#8C8C8C'>
                        Blank spaces will be assigned to the default Mb price
                      </Paragraph>

                      <div
                        style={{ height: '35.8rem', backgroundColor: 'gray', width: '36.438rem' }}
                      />
                    </>
                  )}
                  <Spacer direction='vertical' size='md' />
                  <Paragraph lineHeight='1.375rem' weight='600'>
                    Infractrusture bandwith cap
                  </Paragraph>
                  <Spacer direction='vertical' size='xs' />
                  <div style={{ width: '34rem' }}>
                    <Paragraph lineHeight='1.375rem' color='#8C8C8C'>
                      This percentage will define the stop line, in which Stackshare will stop
                      allocating bids inside your infrastructure.{' '}
                      <b>Can’t be setted at more than 95%</b>
                    </Paragraph>
                  </div>
                  <Spacer direction='vertical' size='xs' />
                  <div
                    style={{
                      width: '6.625rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.438rem',
                    }}
                  >
                    <Input type='number' size='default' borderColor='#d9d9d9' value='95' />
                    <Paragraph color='#595959' weight='600'>
                      %
                    </Paragraph>
                  </div>
                  {simple && (
                    <>
                      <Spacer direction='vertical' size='lg' />
                      <Paragraph lineHeight='1.375rem' weight='600'>
                        Time Presets
                      </Paragraph>
                      <Spacer direction='vertical' size='xs' />
                      <WrapperSelect>
                        <Select
                          size='sm'
                          radius={0.125}
                          name='a'
                          id='a'
                          border={{
                            top: '0.063rem solid #40A9FF',
                            right: '0.063rem solid #40A9FF',
                            bottom: '0.063rem solid #40A9FF',
                            left: '0.063rem solid #40A9FF',
                          }}
                        >
                          <option value='Bussiness Hours'>Bussiness Hours</option>
                          <option value='Option'>Option</option>
                          <option value='Another option'>Another option</option>
                        </Select>
                      </WrapperSelect>
                      <Spacer direction='vertical' size='md' />
                      <div>
                        <Anchor
                          label='Add New Time Preset'
                          lead
                          href='#'
                          color='#40A9FF'
                          icon='🔵'
                          onClick={handleOpen}
                        />
                      </div>
                    </>
                  )}
                </div>
                <div>
                  <Paragraph lineHeight='1.375rem' weight='600'>
                    Potential earnings with current config
                  </Paragraph>
                  <Spacer direction='vertical' size='xs' />
                  <div style={{ width: '40rem' }}>
                    <Paragraph lineHeight='1.375rem' color='#595959'>
                      These are stimated by the prices and maximum bandwith usage and the uptime
                      selected.
                    </Paragraph>
                  </div>
                  <Spacer direction='vertical' size='xs' />
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    <div style={{ width: '19rem', height: '12rem', backgroundColor: 'gray' }} />
                    <Spacer size='md' direction='horizontal' />
                    <div style={{ width: '19rem', height: '12rem', backgroundColor: 'gray' }} />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </BodyMain>

      <Drawer active={open} onClose={handleOpen}>
        <div style={{ backgroundColor: 'white' }}>
          <div style={{ borderBottom: '0.063rem solid #d9d9d9' }}>
            <Container
              vertical='md'
              left='xl'
              right='md'
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
                Time preset
              </Paragraph>
              <Pill background='transparent' color='dark' handleAction={handleOpen} />
            </Container>
          </div>
          <div style={{ borderBottom: '0.063rem solid #d9d9d9' }}>
            <Container vertical='md' left='xl' right='md'>
              <Paragraph lineHeight='1.35rem'>Name the time preset</Paragraph>
              <div style={{ width: '16rem' }}>
                <Input label='Medium input' />
              </div>
              <Spacer size='md' />
              <Paragraph lineHeight='1.35rem'>Select uptimes</Paragraph>
              <Spacer size='md' />
              <div style={{ width: '40rem', backgroundColor: 'gray', height: '72vh' }} />
            </Container>
          </div>
          <div>
            <Container
              horizontal='md'
              vertical='md'
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Button
                label='Save'
                colors={{
                  default: '#096DD9',
                  hover: '#0254ac',
                  click: '#096dd9bc',
                  text: '#fff',
                }}
                onClick={handleOpen}
              />
            </Container>
          </div>
        </div>
      </Drawer>
    </BodyContent>
  );
};

export default BiddingTelco;
