import React, { useState } from 'react';
import {
  Button,
  Column,
  Container,
  Drawer,
  Input,
  Grid,
  Paragraph,
  Pill,
  Radio,
  Row,
  Spacer,
  Select,
  Tab,
  WrapperTable,
  GroupTab,
} from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyMain } from '../../components/layout';
import { dummyData, buyColumns, DummyBadge } from './StoryData';
import { Filter, EllypsisVertical, Plus, Grid as GridIcon } from 'react-ikonate';
import Table from '../../components/Table/Table';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import Kebab from '../../components/Kebab/Kebab';

const Buy = () => {
  const [openTable, setOpenTable] = useState(false);
  const [newBid, setNewBid] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [disabledCap, setDisabledCap] = useState(true);
  const [disabledType, setDisabledType] = useState(true);
  const [data, setData] = useState<any>({});
  return (
    <BodyContent
      style={{
        boxSizing: 'border-box',
        overflowY: 'auto',
      }}
    >
      {/* Header */}
      <HeaderSell
        title='Buy parameters'
        breadcrums={[
          { label: 'Auctions', href: '#', active: false },
          { label: 'Bidding', href: '#', active: true },
        ]}
      >
        <GroupTab horizontalSpacing='sm' fontSize='lg'>
          <Tab text='Active Bids' active />
          <Tab text='Fullfilled' />
        </GroupTab>
      </HeaderSell>
      {/* Body */}
      <div style={{ display: 'flex', height: '77vh', overflow: 'hidden', width: '100%' }}>
        <BodyMain style={{ overflow: 'auto' }}>
          <div>
            <Container vertical='md' horizontal='lg' expandHorizontal>
              <div className='overflow'>
                <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 1150 }}>
                  <Button
                    label='New bid'
                    icon={<Plus />}
                    lead
                    onClick={() => {
                      setData({});
                      setNewBid(true);
                      setOpenTable(true);
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Button
                      leftSpacing='sm'
                      iconSpacing='none'
                      rightSpacing='sm'
                      icon={<Filter color='#595959' fontSize='1rem' />}
                      type='button'
                      onClick={() => {}}
                      variant='outline'
                      height='2.063rem'
                      size='small'
                    />
                    <Spacer direction='horizontal' size='sm' />
                    <Button
                      leftSpacing='sm'
                      iconSpacing='none'
                      rightSpacing='sm'
                      icon={<EllypsisVertical color='#595959' fontSize='1rem' />}
                      type='button'
                      onClick={() => {}}
                      variant='outline'
                      height='2.063rem'
                      size='small'
                    />
                  </div>
                </div>
                <Container expandHorizontal className='overflow'>
                  <WrapperTable
                    fontSize='md'
                    verticalSpacing='md'
                    hover
                    border='horizontal'
                    borderColor='#E8E8E8'
                    horizontalSpacing='sm'
                  >
                    <Table
                      cols={[
                        ...buyColumns,
                        {
                          Header: 'Specification',
                          accessor: 'specification',
                          width: 230,
                          maxWidth: 200,
                          minWidth: 200,
                          Filter: () => null,
                          Cell: (props: any) => {
                            return (
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  height: '100%',
                                  alignItems: 'center',
                                  width: '100%',
                                }}
                              >
                                <Kebab>
                                  <Button
                                    label='See details'
                                    onClick={() => {
                                      setData(props.data[props.row.index]);
                                      setNewBid(false);
                                      setOpenTable(true);
                                    }}
                                    variant='ghost'
                                    block
                                    radius='none'
                                  />
                                  <Button
                                    label='Delete'
                                    variant='ghost'
                                    shapeColor='danger'
                                    onClick={() => {
                                      setData(props.data[props.row.index]);
                                      setNewBid(false);
                                      setOpenTable(true);
                                    }}
                                    block
                                    radius='none'
                                  />
                                </Kebab>
                              </div>
                            );
                          },
                        },
                      ]}
                      dataTable={dummyData}
                      filter={false}
                    />
                  </WrapperTable>
                </Container>
              </div>
            </Container>
          </div>
        </BodyMain>
      </div>
      <Drawer active={openTable} onClose={() => setOpenTable(false)} size={newBid ? 'md' : 'sm'}>
        <Grid expanded>
          <Row>
            <Column>
              <div style={{ width: '100%' }}>
                <Container
                  vertical='md'
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                  expandHorizontal
                >
                  <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
                    {newBid ? 'New bid' : 'Bid details'}
                  </Paragraph>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    {!newBid && <DummyBadge label='Pending' color='#FFFBE6' textColor='#FAAD14' />}
                    {!newBid && <Spacer direction='horizontal' size='lg' />}
                    <Pill
                      background='transparent'
                      color='#000'
                      handleAction={() => setOpenTable(false)}
                      label=''
                    />
                  </div>
                </Container>
              </div>
            </Column>
          </Row>

          <Row>
            <Column>
              <Container vertical='md'>
                <Paragraph
                  lineHeight='1.375rem'
                  weight={newBid ? '600' : '400'}
                  color={newBid ? 'dark' : '#595959'}
                >
                  Bid type
                </Paragraph>
                <Spacer direction='vertical' size='xs' />
                {newBid ? (
                  <Container right='xxxl'>
                    <Select inputSize='small' radius='sm'>
                      <option value='Bandwith'>Bandwith</option>
                      <option value='Secure Channel'>Secure Channel</option>
                      <option value='Data package'>Data package</option>
                    </Select>
                  </Container>
                ) : (
                  <DummyBadge
                    label={data.bidding_type?.label || 'red'}
                    color={data.bidding_type?.color || 'red'}
                    textColor={data.bidding_type?.textColor || 'red'}
                  />
                )}
                <Spacer direction='vertical' size='sm' />
                {newBid ? (
                  <Container right='xxxl'>
                    <div className='form-control'>
                      <Input type='date' inputSize='small' border='outside' label='Expires by' />
                    </div>
                  </Container>
                ) : (
                  <Paragraph lineHeight='1.375rem'>{data.expires}</Paragraph>
                )}
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
                      <div className='form-control'>
                        <Input
                          type='number'
                          defaultValue={500}
                          inputSize='small'
                          border='outside'
                          label='Wanted bandwith'
                        />
                      </div>
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
                      defaultChecked
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
                    <Container left='lg' right='xxxl'>
                      <Input type='time' disabled={disabled} inputSize='small' border='outside' />
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
                <Spacer direction='vertical' size='xs' />
                {newBid ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      gap: '1.5rem',
                    }}
                  >
                    <div style={{ width: '40%' }}>
                      <Input border='outside' label='from' type='date' inputSize='small' />
                    </div>
                    <Paragraph>To</Paragraph>
                    <div style={{ width: '40%' }}>
                      <Input label='to' type='date' inputSize='small' border='outside' />
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
                      defaultChecked
                      onChange={() => setDisabledCap(true)}
                    />
                    <Spacer direction='vertical' size='xs' />
                    <Radio
                      color='#1890FF'
                      label='Specific cap'
                      name='cap'
                      spacing='sm'
                      onChange={() => setDisabledCap(false)}
                    />
                    <Spacer direction='vertical' size='xs' />
                    <Container left='lg' right='xxxl' style={{ display: 'flex' }}>
                      <div style={{ width: '80%' }}>
                        <Input
                          type='number'
                          disabled={disabledCap}
                          defaultValue={500}
                          inputSize='small'
                          border='outside'
                        />
                      </div>
                      <Spacer direction='horizontal' size='tiny' />
                      <Select radius='sm' disabled={disabledCap}>
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
                      onChange={() => setDisabledType(true)}
                    />
                    <Spacer direction='vertical' size='xs' />
                    <Radio
                      color='#1890FF'
                      label='Limit order'
                      name='order'
                      spacing='sm'
                      onChange={() => setDisabledType(false)}
                    />
                    <Spacer direction='vertical' size='xs' />
                    <Container left='lg' right='xxxl'>
                      <div style={{ width: '80%' }}>
                        <Input
                          type='text'
                          icon={<GridIcon />}
                          disabled={disabledType}
                          inputSize='small'
                          border='outside'
                        />
                      </div>
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
            </Column>
          </Row>
          <Row>
            <Column>
              <Container vertical='md' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {newBid && <Button label='Submit' onClick={() => setOpenTable(false)} />}
              </Container>
            </Column>
          </Row>
        </Grid>
      </Drawer>
    </BodyContent>
  );
};

export default Buy;
