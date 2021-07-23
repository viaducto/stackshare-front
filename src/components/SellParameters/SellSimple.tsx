import React from 'react';
import {
  Paragraph,
  Spacer,
  Select,
  Input,
  Grid,
  Row,
  Column,
} from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';
import Graph from '../../pages/BiddingTelco/Graph';
import { Button } from '@jp-olvera/jp-viaducto-components';
import { Plus } from 'react-ikonate';

const WrapperSelect = styled.div<any>`
  width: 16rem;
  & > select {
    box-shadow: 0 0 0.25rem rgba(24, 144, 255, 0.5);
  }
`;

const SellSimple = ({ handleOpen, b2b = false }: { handleOpen: Function; b2b: boolean }) => {
  return (
    <Grid expanded>
      <Row>
        <Column>
          <div>
            <Paragraph lineHeight='1.375rem' weight='600'>
              {!b2b ? 'Default Mb price' : 'Minimum ask per Mb/s'}
            </Paragraph>
            <Spacer direction='vertical' size='xs' />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 0,
                gap: '.2rem',
              }}
            >
              <Paragraph color='#595959' weight='600'>
                $
              </Paragraph>
              <Spacer direction='horizontal' size='sm' />
              <Input type='number' inputSize='small' border='outside' id='askMB' min={0} />
            </div>
            <Spacer direction='vertical' size='md' />
            <Paragraph lineHeight='1.375rem' weight='600'>
              Infractrusture bandwith cap
            </Paragraph>
            <Spacer direction='vertical' size='xs' />
            <div style={{ width: '34rem' }}>
              <Paragraph lineHeight='1.375rem' color='#8C8C8C'>
                This percentage will define the stop line, in which Stackshare will stop allocating
                bids inside your infrastructure. <b>Can’t be setted at more than 95%</b>
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
                inputSize='small'
                border='outside'
                id='bandwith'
                max={95}
                min={0}
                defaultValue={95}
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
                  <Select inputSize='small' radius='sm' name='a' id='a'>
                    <option value='Bussiness Hours'>Bussiness Hours</option>
                    <option value='Option'>Option</option>
                    <option value='Another option'>Another option</option>
                  </Select>
                </WrapperSelect>
                <Spacer direction='vertical' size='md' />
                <Button
                  label='Add New Time Preset'
                  lead
                  variant='ghost'
                  onClick={(ev) => {
                    handleOpen(ev);
                  }}
                  icon={<Plus />}
                  data-testid='hrefDrawer'
                />
              </div>
            )}
          </div>
        </Column>
        <Column>
          {!b2b && (
            <div>
              <Paragraph lineHeight='1.375rem' weight='600'>
                Potential earnings with current config
              </Paragraph>
              <Spacer direction='vertical' size='xs' />

              <Paragraph lineHeight='1.375rem' color='#595959'>
                These are stimated by the prices and maximum bandwith usage and the uptime selected.
              </Paragraph>

              <Spacer direction='vertical' size='xs' />
              <Grid>
                <Row>
                  <Column>
                    <Graph title='Earnings' percent='+11.3%' data='$13,893' profit='Total Profit' />
                  </Column>
                  <Column>
                    <Graph title='Broadband Usage' percent='+11.3%' data='659Gb' />
                  </Column>
                </Row>
              </Grid>
            </div>
          )}
        </Column>
      </Row>
    </Grid>
  );
};

export default SellSimple;
