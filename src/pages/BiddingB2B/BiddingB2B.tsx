import React, { useState, useEffect } from 'react';
import { BodyContent, BodyMain } from '../../components/layout';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import SellParameters from '../../components/SellParameters/SellParameters';

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
            b2b={true}
          />
        </div>
      </BodyMain>
    </BodyContent>
  );
};

export default BiddingB2B;
