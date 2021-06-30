import React, { useState, useEffect } from 'react';
import {
  Paragraph,
  Spacer,
  Input,
  Pill,
  Button,
  Drawer,
  Container,
} from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyMain } from '../../components/layout';
import { MONDAY, TUESDAY } from '../../dummy_data/pricingtable';
import { PricingTable } from '../../components/PricingTable';

import SellParameters from '../../components/SellParameters/SellParameters';
import HeaderSell from '../../components/SellParameters/HeaderSell';

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
      <HeaderSell
        title='Sell parameters'
        breadcrums={[
          { label: 'Auctions', href: '#', active: false },
          { label: 'Bidding', href: '#', active: true },
        ]}
      />

      {/* Body */}
      <BodyMain>
        <div style={{ backgroundColor: 'white', height: '100%' }}>
          <SellParameters
            handleOpen={handleOpen}
            setSimple={setSimple}
            simple={simple}
            b2b={false}
          />
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
              <Spacer size='md' />
              <div style={{ width: '16rem' }}>
                <Input label='Medium input' size='small' border='outside' />
              </div>
              <Spacer size='md' />
              <Paragraph lineHeight='1.35rem'>Select uptimes</Paragraph>
              <Spacer size='md' />
              <div className='blurred-border'>
                <div style={{ width: 750, overflow: 'auto' }}>
                  <PricingTable
                    sun={TUESDAY}
                    mon={MONDAY}
                    tues={TUESDAY}
                    wed={MONDAY}
                    thu={TUESDAY}
                    sat={TUESDAY}
                  />
                </div>
              </div>
            </Container>
          </div>
          <div>
            <Container
              horizontal='md'
              vertical='md'
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Button label='Save' onClick={handleOpen} />
            </Container>
          </div>
        </div>
      </Drawer>
    </BodyContent>
  );
};

export default BiddingTelco;
