import React, { useState, useRef } from 'react';
import {
  Button,
  Column,
  Container,
  Drawer,
  Grid,
  Input,
  Paragraph,
  Pill,
  Row,
  Spacer,
} from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyMain } from '../../components/layout';
import { MONDAY, TUESDAY } from '../../dummy_data/pricingtable';
import { PricingTable } from '../../components/PricingTable';

import SellParameters from '../../components/SellParameters/SellParameters';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import Overflow from '../../components/Overflow/Overflow';

const BiddingTelco = () => {
  const [open, setOpen] = useState(false);
  const [simple, setSimple] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };

  const ref = useRef<HTMLDivElement>(null);

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

      <Drawer active={open} onClose={handleOpen} size='lg'>
        <Grid className='border-bottom' expanded>
          <Row>
            <Column>
              <Container vertical='md' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
                  Time preset
                </Paragraph>
                <Pill background='transparent' color='dark' handleAction={handleOpen} label='' />
              </Container>
            </Column>
          </Row>
        </Grid>
        <Grid className='border-bottom' expanded>
          <Row>
            <Column size={12}>
              <Container vertical='md'>
                <Paragraph lineHeight='1.35rem'>Name the time preset</Paragraph>
                <Spacer size='md' />
                <div style={{ width: '16rem' }}>
                  <Input label='Medium input' inputSize='small' border='outside' />
                </div>
                <Spacer size='md' />
                <Paragraph lineHeight='1.35rem'>Select uptimes</Paragraph>
                <Spacer size='md' />
                <Overflow target={ref}>
                  <div ref={ref} style={{ width: '100%', overflow: 'auto' }}>
                    <PricingTable
                      sun={TUESDAY}
                      mon={MONDAY}
                      tues={TUESDAY}
                      wed={MONDAY}
                      thu={TUESDAY}
                      sat={TUESDAY}
                    />
                  </div>
                </Overflow>
              </Container>
            </Column>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Column>
              <Container
                horizontal='md'
                vertical='md'
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <Button label='Save' onClick={handleOpen} />
              </Container>
            </Column>
          </Row>
        </Grid>
      </Drawer>
    </BodyContent>
  );
};

export default BiddingTelco;
