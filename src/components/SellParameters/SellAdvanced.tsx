import { useRef } from 'react';
import { Paragraph, Spacer, Input } from '@jp-olvera/jp-viaducto-components';
import { MONDAY, TUESDAY } from '../../dummy_data/pricingtable';
import { PricingTable } from '../PricingTable';
import Overflow from '../Overflow/Overflow';

const SellAdvanced = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div>
      <Paragraph lineHeight='1.375rem' weight='600'>
        Default Mb price
      </Paragraph>
      <div
        style={{
          width: '6.625rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Paragraph color='#595959' weight='600'>
          $
        </Paragraph>
        <Spacer direction='horizontal' size='sm' />
        <Input
          type='number'
          inputSize='small'
          borderColor='#d9d9d9'
          border='outside'
          id='askMB'
          min={0}
          defaultValue={0}
        />
      </div>
      <Spacer direction='vertical' size='md' />
      <Paragraph lineHeight='1.375rem' weight='600'>
        Prices and availiability
      </Paragraph>
      <Spacer direction='vertical' size='xs' />
      <Paragraph lineHeight='1.375rem' color='#8C8C8C'>
        Blank spaces will be assigned to the default Mb price
      </Paragraph>
      <Overflow target={ref}>
        <div className='overflow' ref={ref}>
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
      <Spacer direction='vertical' size='xl' />
      <div style={{ width: '32rem' }}>
        <Paragraph lineHeight='1.375rem' weight='600'>
          Infractrusture bandwith cap
        </Paragraph>
        <Spacer direction='horizontal' size='xs' />
        <Paragraph color='#8C8C8C' lineHeight='1.375rem'>
          This percentage will define the stop line, in which Stackshare will stop allocating bids
          inside your infrastructure. <b>Can’t be setted at more than 95%</b>
        </Paragraph>
        <Spacer direction='horizontal' size='xs' />
        <div
          style={{
            width: '5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Input
            type='number'
            inputSize='small'
            borderColor='#d9d9d9'
            border='outside'
            max={95}
            min={0}
            defaultValue={95}
          />
          <Spacer direction='horizontal' size='sm' />
          <Paragraph color='#595959' weight='400'>
            %
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default SellAdvanced;
