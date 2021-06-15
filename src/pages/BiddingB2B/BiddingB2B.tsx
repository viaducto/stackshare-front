import React, { useState } from 'react';
import { Paragraph, Radio, Spacer, Input } from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyHeader, BodyMain } from '../../components/layout';
import { Container } from '../../components/Container';
import { Drawer } from '../../components/Drawer';

const BiddingB2B = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
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
        <div style={{ display: 'flex', gap: '.4rem' }}>
          <Paragraph size='sm' color='#8C8C8C' lineHeight='1.375rem'>
            Auctions
          </Paragraph>
          <Paragraph size='sm' color='#8C8C8C' lineHeight='1.375rem'>
            /
          </Paragraph>
          <Paragraph size='sm' color='#595959' lineHeight='1.375rem'>
            Bidding
          </Paragraph>
        </div>
        <Paragraph size='lg' color='#262626' weight='600' lineHeight='1.75rem'>
          Sell parameters
        </Paragraph>
      </BodyHeader>

      {/* Body */}
      <BodyMain>
        <div style={{ backgroundColor: 'white' }}>
          <div style={{ borderBottom: '0.063rem solid #D9D9D9' }}>
            <Container vertical='md' horizontal='lg' expandHorizontal expandVertical>
              <Paragraph lineHeight='1.375rem' weight='600'>
                Pricing definition
              </Paragraph>
              <Spacer direction='vertical' size='sm' />
              <div>
                <Radio radioSize='sm' name='princig' label='Simple' spacing='sm' color='#1890FF' />
                <Spacer direction='horizontal' size='xl' />
                <Radio
                  radioSize='sm'
                  name='princig'
                  label='Advanced'
                  spacing='sm'
                  color='#1890FF'
                />
              </div>
            </Container>
          </div>
          <div>
            <Container vertical='md' horizontal='lg' expandHorizontal expandVertical>
              <Paragraph lineHeight='1.375rem' weight='600'>
                Default Mb price
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
              <Spacer direction='vertical' size='lg' />
              <Paragraph lineHeight='1.375rem' weight='600'>
                Prices and availiability
              </Paragraph>
              <Spacer direction='vertical' size='xs' />
              <Paragraph lineHeight='1.375rem' color='#8C8C8C'>
                Blank spaces will be assigned to the default Mb price
              </Paragraph>
              {/* Calendario */}
              <div style={{ height: '35.8rem', backgroundColor: 'gray', width: '36.438rem' }} />
              {/* Calendario */}
              <Spacer direction='vertical' size='md' />
              <Paragraph lineHeight='1.375rem' weight='600'>
                Infractrusture bandwith cap
              </Paragraph>
              <Spacer direction='vertical' size='xs' />
              <div style={{ width: '33.5rem' }}>
                <Paragraph lineHeight='1.375rem' color='#8C8C8C'>
                  This percentage will define the stop line, in which Stackshare will stop
                  allocating bids inside your infrastructure. Can’t be setted at more than 95%
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
            </Container>
          </div>
        </div>
      </BodyMain>

      {/* No se pela */}
      <Drawer active={open} onClose={handleOpen}>
        <div style={{ backgroundColor: 'white' }}>Stackshare</div>
      </Drawer>
    </BodyContent>
  );
};

export default BiddingB2B;
