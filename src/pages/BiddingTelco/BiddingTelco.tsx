import { useState } from 'react';
import {
  Button,
  Column,
  Container,
  Drawer,
  Grid,
  Input,
  Paragraph,
  Row,
  Spacer,
} from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyMain } from '../../components/layout';
import { MONDAY, TUESDAY } from '../../dummy_data/pricingtable';
import { PricingTable } from '../../components/PricingTable';
import SellParameters from '../../components/SellParameters/SellParameters';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import { useLoading } from '../../hooks/useLoading';
import CloseButton from '../../components/CloseButton/CloseButton';

const BiddingTelco = () => {
  const [open, setOpen] = useState(false);
  const [simple, setSimple] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleSimple = () => {
    setSimple(!simple);
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  };
  const { load, setLoad } = useLoading();

  return (
    <BodyContent>
      {/* Header */}
      <HeaderSell
        title='Sell parameters'
        breadcrums={[
          { label: 'Auctions', href: '#', active: false },
          { label: 'Bidding', href: '#', active: true },
        ]}
      >
        <Spacer size='sm' />
      </HeaderSell>

      {/* Body */}
      <div style={{ width: '100%' }}>
        <BodyMain className='overflow'>
          <Container expandHorizontal style={{ height: '100%' }} className='overflow'>
            <SellParameters
              handleOpen={handleOpen}
              setSimple={handleSimple}
              simple={simple}
              b2b={false}
              load={load}
            />
          </Container>
        </BodyMain>
      </div>

      <Drawer active={open} onClose={handleOpen} size='lg'>
        <div style={{ height: '100%', overflow: 'auto' }}>
          <Grid className='border-bottom' expanded>
            <Row>
              <Column>
                <Container
                  vertical='md'
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
                    Time preset
                  </Paragraph>
                  <CloseButton onClick={handleOpen} />
                </Container>
              </Column>
            </Row>
          </Grid>
          <Grid className='border-bottom' expanded>
            <Row>
              <Column>
                <Container vertical='md'>
                  <Paragraph lineHeight='1.35rem'>Name the time preset</Paragraph>
                  <Spacer size='xs' />
                  <Spacer size='xs' />
                  <Spacer size='xs' />
                  <div style={{ width: '16rem' }}>
                    <Input label='Medium input' inputSize='small' border='outside' />
                  </div>
                  <Spacer size='md' />
                  <Paragraph lineHeight='1.35rem'>Select uptimes</Paragraph>
                  <Spacer size='md' />
                  <div style={{ width: '100%', overflow: 'auto' }}>
                    <PricingTable
                      sun={TUESDAY}
                      mon={MONDAY}
                      tues={TUESDAY}
                      wed={MONDAY}
                      thu={TUESDAY}
                      sat={TUESDAY}
                    />
                  </div>
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
        </div>
      </Drawer>
    </BodyContent>
  );
};

export default BiddingTelco;
