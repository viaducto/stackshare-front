import React from 'react';
import { Paragraph, Spacer, Select, Anchor, Input } from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';
import Graph from '../../pages/BiddingTelco/Graph';

const WrapperSelect = styled.div<any>`
  width: 16rem;
  & > select {
    box-shadow: 0 0 0.25rem rgba(24, 144, 255, 0.5);
  }
`;

const SellSimple = ({ handleOpen, b2b = false }: { handleOpen: Function; b2b: boolean }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      <div>
        <Paragraph lineHeight='1.375rem' weight='600'>
          {!b2b ? 'Default Mb price' : 'Minimum ask per Mb/s'}
        </Paragraph>
        <Spacer direction='vertical' size='xs' />
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
          <Input type='number' size='small' borderColor='#d9d9d9' border='outside' id='askMB' />
        </div>
        <Spacer direction='vertical' size='md' />
        <Paragraph lineHeight='1.375rem' weight='600'>
          Infractrusture bandwith cap
        </Paragraph>
        <Spacer direction='vertical' size='xs' />
        <div style={{ width: '34rem' }}>
          <Paragraph lineHeight='1.375rem' color='#8C8C8C'>
            This percentage will define the stop line, in which Stackshare will stop allocating bids
            inside your infrastructure. <b>Can’t be setted at more than 95%</b>
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
            id='bandwith'
          />
          <Paragraph color='#595959' weight='600'>
            %
          </Paragraph>
        </div>
        <Spacer direction='vertical' size='md' />
        {b2b && (
          <Paragraph lineHeight='1.375rem' weight='600'>
            Market price
          </Paragraph>
        )}
        {!b2b && (
          <div>
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
                  top: '0.063rem solid #d9d9d9',
                  right: '0.063rem solid #d9d9d9',
                  bottom: '0.063rem solid #d9d9d9',
                  left: '0.063rem solid #d9d9d9',
                }}
              >
                <option value='Bussiness Hours'>Bussiness Hours</option>
                <option value='Option'>Option</option>
                <option value='Another option'>Another option</option>
              </Select>
            </WrapperSelect>
            <Spacer direction='vertical' size='md' />
            <Anchor
              label='Add New Time Preset'
              href='#'
              lead
              color='#40A9FF'
              onClick={handleOpen}
              data-testid='hrefDrawer'
            />
          </div>
        )}
      </div>
      {!b2b && <Spacer direction='horizontal' size='xxl' />}
      {!b2b && (
        <div>
          <Paragraph lineHeight='1.375rem' weight='600'>
            Potential earnings with current config
          </Paragraph>
          <Spacer direction='vertical' size='xs' />
          <div style={{ width: '40rem' }}>
            <Paragraph lineHeight='1.375rem' color='#595959'>
              These are stimated by the prices and maximum bandwith usage and the uptime selected.
            </Paragraph>
          </div>
          <Spacer direction='vertical' size='xs' />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <Graph title='Earnings' percent='+11.3%' data='$13,893' profit='Total Profit' />
            <Spacer size='md' direction='horizontal' />
            <Graph title='Broadband Usage' percent='+11.3%' data='659Gb' />
          </div>
        </div>
      )}
    </div>
  );
};

export default SellSimple;
