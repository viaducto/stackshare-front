import { useState } from 'react';
import { Spacer } from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyMain } from '../../components/layout';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import SellParameters from '../../components/SellParameters/SellParameters';

const BiddingB2B = () => {
  const [open, setOpen] = useState(false);
  const [simple, setSimple] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
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
      <div style={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
        <BodyMain className='overflow' style={{ width: '100%' }}>
          <div style={{ height: '100%' }}>
            <SellParameters
              handleOpen={handleOpen}
              setSimple={setSimple}
              simple={simple}
              b2b={true}
            />
          </div>
        </BodyMain>
      </div>
    </BodyContent>
  );
};

export default BiddingB2B;
