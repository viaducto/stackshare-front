import React, { useState, useEffect } from 'react';
import {
  Paragraph,
  Radio,
  Spacer,
  Input,
  Breadcrums,
  Breadcrum,
  Container,
  Drawer,
} from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyHeader, BodyMain } from '../../components/layout';

const BiddingB2B = () => {
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
        <Container horizontal='md' vertical='sm'>
          <Breadcrums fontSize='md'>
            <Breadcrum label='Auctions' href='#' />
            <Breadcrum label='Bidding' href='#' active separator={false} />
          </Breadcrums>
          <Paragraph size='lg' color='#262626' weight='600' lineHeight='1.75rem'>
            Sell parameters
          </Paragraph>
        </Container>
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
                <Input type='number' size='small' borderColor='#d9d9d9' border='outside' />
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

                  <div style={{ height: '35.8rem', backgroundColor: 'gray', width: '36.438rem' }} />
                </>
              )}
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
                <Input
                  type='number'
                  size='small'
                  borderColor='#d9d9d9'
                  value='95'
                  border='outside'
                />
                <Paragraph color='#595959' weight='600'>
                  %
                </Paragraph>
              </div>
              {!simple && (
                <>
                  <Spacer direction='vertical' size='lg' />
                  <Paragraph lineHeight='1.375rem' weight='600'>
                    Market price
                  </Paragraph>
                </>
              )}
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
