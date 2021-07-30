import React, { useContext, useEffect, useState } from 'react';
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
  ConfigContext,
} from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyMain } from '../../components/layout';
import { dummyData, buyColumns } from './StoryData';
import { Filter, EllypsisVertical, Plus, Grid as GridIcon } from 'react-ikonate';
import Table from '../../components/Table/Table';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import Kebab from '../../components/Kebab/Kebab';
import Tag from '../../components/Tag/Tag';
import { Center } from '../../components/Center';
import Skeleton from 'react-loading-skeleton';
import { SkeletonTable } from './TableContent';

const Buy = () => {
  const [openTable, setOpenTable] = useState(false);
  const [newBid, setNewBid] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [disabledCap, setDisabledCap] = useState(true);
  const [disabledType, setDisabledType] = useState(true);
  const [data, setData] = useState<any>({});
  const { configuration } = useContext(ConfigContext);
  const { dark } = configuration.colors.text;
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  }, []);

  return (
    <BodyContent>
      {/* Header */}
      <HeaderSell
        title='Buy parameters'
        breadcrums={[
          { label: 'Auctions', href: '#', active: false },
          { label: 'Bidding', href: '#', active: true },
        ]}
      >
        {load ? (
          <Container vertical='sm'>
            <Skeleton width='15rem' />
          </Container>
        ) : (
          <GroupTab fontSize='lg' spacing='md' horizontalSpacing='none'>
            <Tab text='Active Bids' active />
            <Tab text='Fullfilled' />
          </GroupTab>
        )}
      </HeaderSell>
      {/* Body */}
      <div style={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
        <BodyMain style={{ overflow: 'auto' }}>
          <div>
            <Container vertical='md' horizontal='md' expandHorizontal>
              <div className='overflow'>
                <Grid gutter={0} expanded>
                  <Row>
                    <Column>
                      <div className='flex' style={{ justifyContent: 'space-between' }}>
                        {load ? (
                          <Skeleton width='5.4rem' height='2rem' />
                        ) : (
                          <Button
                            label='New bid'
                            icon={<Plus />}
                            lead
                            onClick={() => {
                              setData({});
                              setNewBid(true);
                              setOpenTable(true);
                            }}
                            leftSpacing='sm'
                            rightSpacing='md'
                          />
                        )}
                        <div>
                          {load ? (
                            <Skeleton width='2.2rem' height='2rem' />
                          ) : (
                            <Button
                              leftSpacing='sm'
                              iconSpacing='none'
                              rightSpacing='sm'
                              icon={<Filter color={dark} fontSize='1rem' />}
                              type='button'
                              onClick={() => {}}
                              variant='outline'
                              height='2.063rem'
                              size='small'
                            />
                          )}
                          <Spacer direction='horizontal' size='sm' />
                          {load ? (
                            <Skeleton width='2.2rem' height='2rem' />
                          ) : (
                            <Button
                              leftSpacing='sm'
                              iconSpacing='none'
                              rightSpacing='sm'
                              icon={<EllypsisVertical color={dark} fontSize='1rem' />}
                              type='button'
                              onClick={() => {}}
                              variant='outline'
                              height='2.063rem'
                              size='small'
                            />
                          )}
                        </div>
                      </div>
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Container expandHorizontal className='overflow'>
                        {load ? (
                          <Container top='md'>
                            <Skeleton height='3.188rem' />
                            <Spacer size='sm' />
                            <SkeletonTable />
                          </Container>
                        ) : (
                          <WrapperTable
                            fontSize='md'
                            zebra={false}
                            verticalSpacing='md'
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
                                  width: Math.round(window.innerWidth / 8),
                                  minWidth: 200,
                                  Filter: () => null,
                                  Cell: (props: any) => {
                                    return (
                                      <Center
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
                                      </Center>
                                    );
                                  },
                                },
                              ]}
                              dataTable={dummyData}
                              filter={false}
                            />
                          </WrapperTable>
                        )}{' '}
                        <Spacer size='md' />
                      </Container>
                    </Column>
                  </Row>
                </Grid>
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
                    {!newBid && (
                      <Tag
                        label='Pending'
                        backgroundColor='#FFFBE6'
                        color='#FAAD14'
                        borderColor='#FAAD14'
                      />
                    )}
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
                  <Tag
                    label={data.bidding_type?.label || 'red'}
                    backgroundColor={data.bidding_type?.color || 'red'}
                    color={data.bidding_type?.textColor || 'red'}
                    borderColor={data.bidding_type?.textColor || 'red'}
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
                      <div className='form-control'>
                        <Paragraph>Mb/s</Paragraph>
                      </div>
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
                      <Select radius='sm' inputSize='small' disabled={disabledCap}>
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
                          icon={<GridIcon color={dark} />}
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
