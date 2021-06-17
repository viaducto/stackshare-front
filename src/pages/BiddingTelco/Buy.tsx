import React, { useEffect, useState } from 'react';
import {
  Paragraph,
  Spacer,
  Input,
  Pill,
  Radio,
  Button,
  Tab,
  Table,
  Select,
  Drawer,
  Breadcrums,
} from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyHeader, BodyMain } from '../../components/layout';
import { Container } from '../../components/Container';
import { dummyData } from './StoryData';
const details = {
    default: 'transparent',
    hover: 'transparent',
    click: 'transparent',
    text: '#1890FF',
  },
  deleteColor = {
    default: 'transparent',
    hover: 'transparent',
    click: 'transparent',
    text: '#A8071A',
  };

const Buy = () => {
  const [openTable, setOpenTable] = useState(false);
  const [newBid, setNewBid] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [data, setData] = useState<any>({});
  const [tab, setTab] = useState(0);
  useEffect(() => {
    const radio: HTMLInputElement | null = document.querySelector('#up');
    if (radio !== null) {
      radio.checked = true;
    }
  }, [newBid]);
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
        <Container horizontal='md' top='sm'>
          <Breadcrums
            fontSize='md'
            options={[
              { label: 'Auctions', href: '#' },
              { label: 'Bidding', href: '#', active: true },
            ]}
          />
          <Paragraph size='lg' color='#262626' weight='600' lineHeight='1.75rem'>
            Buy parameters
          </Paragraph>
          <Spacer size='md' direction='vertical' />
          <Tab
            horizontalSpacing='sm'
            icon={null}
            iconSpacing='none'
            onClick={() => setTab(0)}
            text='Active Bids'
            transition='ease'
            type='tab'
            verticalSpacing='sm'
            id='ActiveBids'
          />
          <Tab
            horizontalSpacing='sm'
            icon={null}
            iconSpacing='none'
            onClick={() => setTab(1)}
            text='Fullfilled'
            transition='ease'
            type='tab'
            verticalSpacing='sm'
            id='Fullfilled'
          />
        </Container>
      </BodyHeader>

      {/* Body */}
      <BodyMain>
        <div style={{ backgroundColor: 'white', height: '100%', width: 'min-content' }}>
          {tab === 0 && (
            <Container vertical='md' horizontal='lg'>
              <Button
                label='New bid'
                icon='+'
                lead
                colors={{
                  default: '#096DD9',
                  hover: '#0254ac',
                  click: '#096dd9bc',
                  text: '#fff',
                }}
                onClick={() => {
                  setData({});
                  setNewBid(true);
                  setOpenTable(true);
                }}
              />
              <Table
                align='center'
                border='horizontal'
                borderColor='#E8E8E8'
                buttonVariantColor='info'
                colorSelected='#ffd37c'
                columns={[
                  {
                    Header: 'Bidding Type',
                    accessor: 'bidding_type',
                    Filter: () => null,
                  },
                  {
                    Header: 'Expires by',
                    accessor: 'expires',
                    Filter: () => null,
                  },
                  {
                    Header: 'Rate per Mb/sec',
                    accessor: 'rate',
                    Filter: () => null,
                    prefix: '$',
                  },
                  {
                    Header: 'Total',
                    accessor: 'total',
                    Filter: () => null,
                    prefix: '$',
                  },
                  {
                    Header: 'Specification',
                    accessor: 'specification',
                    Filter: () => null,
                    Cell: (props: any) => {
                      return (
                        <div style={{ display: 'inline-flex', justifyContent: 'space-between' }}>
                          <Button
                            label='See details'
                            colors={details}
                            onClick={() => {
                              setData(props.data[props.row.index]);
                              setNewBid(false);
                              setOpenTable(true);
                            }}
                          />
                          <Button
                            label='Delete'
                            colors={deleteColor}
                            onClick={() => {
                              setData(props.data[props.row.index]);
                              setNewBid(false);
                              setOpenTable(true);
                            }}
                          />
                        </div>
                      );
                    },
                  },
                ]}
                data={dummyData}
                fontSize='md'
                headerColor='#FAFAFA'
                headerElevation={0}
                headerFixed={false}
                headerPadding='1.125rem'
                // horizontalSpacing='lg'
                minHeight='3.375rem'
                selectBorder={{
                  bottom: '0.063rem solid black',
                  left: '0.063rem solid black',
                  right: '0.063rem solid black',
                  top: '0.063rem solid black',
                }}
                selectSize='md'
                textHeaderColor='#000'
                verticalSpacing='md'
                zebra={false}
                zebraHover
                zebreHoverColor='#D1D5DA'
              />
            </Container>
          )}
          {tab === 1 && 'Fullfilled tab'}
        </div>
      </BodyMain>

      <Drawer active={openTable} onClose={() => setOpenTable(false)}>
        <div style={{ backgroundColor: 'white' }}>
          <Container
            vertical='md'
            left='xl'
            right='md'
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
              {newBid ? 'New bid' : 'Bid details'}
            </Paragraph>
            {!newBid && (
              <div
                style={{
                  alignSelf: 'center',
                  height: '1.375rem',
                  backgroundColor: '#FFFBE6',
                  border: `0.063rem solid #FAAD14`,
                  color: '#FAAD14',
                  borderRadius: 2,
                  width: 'fit-content',
                  boxSizing: 'border-box',
                  padding: '0.1rem 0.5rem',
                  textAlign: 'center',
                  verticalAlign: 'center',
                  fontSize: 12,
                }}
              >
                Pending
              </div>
            )}
            <Pill background='transparent' color='#000' handleAction={() => setOpenTable(false)} />
          </Container>
        </div>

        <Container vertical='md' left='xl' right='md'>
          <Paragraph
            lineHeight='1.375rem'
            weight={newBid ? '600' : '400'}
            color={newBid ? 'dark' : '#595959'}
          >
            Bid type
          </Paragraph>
          <Spacer direction='vertical' size='xs' />
          {newBid ? (
            <Container right='xs'>
              <Select
                size='sm'
                radius={0.125}
                border={{
                  top: '0.063rem solid #d9d9d9',
                  right: '0.063rem solid #d9d9d9',
                  bottom: '0.063rem solid #d9d9d9',
                  left: '0.063rem solid #d9d9d9',
                }}
              >
                <option>Bandwith</option>
                <option>Secure Channel</option>
                <option>Data package</option>
              </Select>
            </Container>
          ) : (
            data.bidding_type
          )}
          <Spacer direction='vertical' size='lg' />
          <Paragraph
            lineHeight='1.375rem'
            weight={newBid ? '600' : '400'}
            color={newBid ? 'dark' : '#595959'}
          >
            Expires by
          </Paragraph>
          <Spacer direction='vertical' size='xs' />
          {newBid ? (
            <Container right='xs'>
              <Input type='date' borderColor='#d9d9d9' />
            </Container>
          ) : (
            <Paragraph lineHeight='1.375rem'>{data.expires}</Paragraph>
          )}
          <Spacer direction='vertical' size='lg' />
          <Paragraph
            lineHeight='1.375rem'
            weight={newBid ? '600' : '400'}
            color={newBid ? 'dark' : '#595959'}
          >
            Wanted bandwith
          </Paragraph>
          <Spacer direction='vertical' size='xs' />
          {newBid ? (
            <div>
              <Container
                right='xs'
                style={{
                  display: 'inline-flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Input type='number' value='500' borderColor='#d9d9d9' />
                <Spacer size='xs' direction='horizontal' />
                <Paragraph>Mb/s</Paragraph>
              </Container>
            </div>
          ) : (
            <Paragraph lineHeight='1.375rem'>{data.wanted_bandwith}</Paragraph>
          )}
          <Spacer direction='vertical' size='lg' />
          <Paragraph
            lineHeight='1.375rem'
            weight={newBid ? '600' : '400'}
            color={newBid ? 'dark' : '#595959'}
          >
            Wanted Uptimes
          </Paragraph>
          <Spacer direction='vertical' size='xs' />
          {newBid ? (
            <>
              <Radio
                color='#1890FF'
                label='24hrs'
                name='uptime'
                spacing='sm'
                id='up'
                onChange={() => setDisabled(true)}
              />
              <Spacer direction='vertical' size='xs' />
              <Radio
                color='#1890FF'
                label='Specific time'
                name='uptime'
                spacing='sm'
                onChange={() => setDisabled(false)}
              />
              <Spacer direction='vertical' size='xs' />
              <Container horizontal='lg'>
                <Input type='time' borderColor='#d9d9d9' disabled={disabled} />
              </Container>
            </>
          ) : (
            <Paragraph lineHeight='1.375rem'>{data.wanted_uptimes}</Paragraph>
          )}
          <Spacer direction='vertical' size='lg' />
          <Paragraph
            lineHeight='1.375rem'
            weight={newBid ? '600' : '400'}
            color={newBid ? 'dark' : '#595959'}
          >
            Timeframe
          </Paragraph>
          <Spacer direction='vertical' size='md' />
          {newBid ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ width: '8rem' }}>
                <Input border='outside' label='from' type='date' />
              </div>
              <Paragraph>To</Paragraph>
              <div style={{ width: '8rem' }}>
                <Input border='outside' label='to' type='date' />
              </div>
            </div>
          ) : (
            <Paragraph lineHeight='1.375rem'>{data.time_frame}</Paragraph>
          )}
          <Spacer direction='vertical' size='lg' />
          <Paragraph
            lineHeight='1.375rem'
            weight={newBid ? '600' : '400'}
            color={newBid ? 'dark' : '#595959'}
          >
            Data cap
          </Paragraph>
          <Spacer direction='vertical' size='xs' />
          {newBid ? (
            <>
              <Radio
                color='#1890FF'
                label='Unlimited'
                name='cap'
                spacing='sm'
                id='up'
                onChange={() => setDisabled(true)}
              />
              <Spacer direction='vertical' size='xs' />
              <Radio
                color='#1890FF'
                label='Specific cap'
                name='cap'
                spacing='sm'
                onChange={() => setDisabled(false)}
              />
              <Spacer direction='vertical' size='xs' />
              <Container horizontal='lg' style={{ display: 'flex' }}>
                <Input type='number' borderColor='#d9d9d9' disabled={disabled} value='500' />
                <Spacer direction='horizontal' size='xs' />
                <Select
                  size='default'
                  radius={0.125}
                  border={{
                    top: '0.063rem solid #d9d9d9',
                    right: '0.063rem solid #d9d9d9',
                    bottom: '0.063rem solid #d9d9d9',
                    left: '0.063rem solid #d9d9d9',
                  }}
                  disabled={disabled}
                >
                  <option value='GB'>GB</option>
                  <option value='MB'>MB</option>
                </Select>
              </Container>
            </>
          ) : (
            <Paragraph lineHeight='1.375rem'>{data.data_cap}</Paragraph>
          )}
          <Spacer direction='vertical' size='lg' />
          <Paragraph
            lineHeight='1.375rem'
            weight={newBid ? '600' : '400'}
            color={newBid ? 'dark' : '#595959'}
          >
            Order type
          </Paragraph>
          <Spacer direction='vertical' size='xs' />
          {newBid ? (
            <>
              <Radio
                color='#1890FF'
                label='Market order'
                name='order'
                spacing='sm'
                id='up'
                onChange={() => setDisabled(true)}
              />
              <Spacer direction='vertical' size='xs' />
              <Radio
                color='#1890FF'
                label='Limit order'
                name='order'
                spacing='sm'
                onChange={() => setDisabled(false)}
              />
              <Spacer direction='vertical' size='xs' />
              <Container horizontal='lg'>
                <Input type='text' icon='grid' borderColor='#d9d9d9' disabled={disabled} />
              </Container>
            </>
          ) : (
            <Paragraph lineHeight='1.375rem'>{data.order_type}</Paragraph>
          )}
          <Spacer direction='vertical' size='lg' />
          <Paragraph
            lineHeight='1.375rem'
            weight={newBid ? '600' : '400'}
            color={newBid ? 'dark' : '#595959'}
          >
            Total
          </Paragraph>
          <Spacer direction='vertical' size='xs' />
          {newBid ? '$500' : <Paragraph lineHeight='1.375rem'>{data.total}</Paragraph>}
          <Spacer direction='vertical' size='lg' />
        </Container>

        <div>
          <Container
            horizontal='md'
            vertical='md'
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            {newBid && (
              <Button
                label='Submit'
                colors={{
                  default: '#096DD9',
                  hover: '#0254ac',
                  click: '#096dd9bc',
                  text: '#fff',
                }}
                onClick={() => setOpenTable(false)}
              />
            )}
          </Container>
        </div>
      </Drawer>
    </BodyContent>
  );
};

export default Buy;
