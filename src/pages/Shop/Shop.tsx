import React, { useState } from 'react';
import {
  Paragraph,
  Spacer,
  Input,
  Pill,
  Radio,
  Button,
  Tab,
  WrapperTable,
  Select,
  Drawer,
  Tooltip,
  Breadcrums,
  Breadcrum,
  Anchor,
  Container,
} from '@jp-olvera/jp-viaducto-components';
import { ChevronLeft } from 'react-ikonate';
import { BodyContent, BodyHeader, BodyMain } from '../../components/layout';
import Table from '../../components/Table/Table';
import AccumulatedBilling from '../../components/AccumulatedBilling/AccumulatedBilling';
import { colsTabZero, colsTabOne } from './Columns';
import { appsData } from './AppsData';
import { PricingTable } from '../../components/PricingTable';
import { MONDAY } from '../../dummy_data/pricingtable';

const Shop = () => {
  const [openTable, setOpenTable] = useState(false);
  const [openshop, setOpenshop] = useState(false);
  const [openConfig, setOpenConfig] = useState(false);
  const [tab, setTab] = useState(0);
  const [tabDrawer, setTabDrawer] = useState(0);
  const [configuration, setConfiguration] = useState(0);
  const [activeTooltip, setActiveTooltip] = useState(false);
  const [appName, setAppName] = useState('App name');
  const addColumn = [
    tab === 2
      ? {
          Header: 'User Group',
          accessor: 'user_group',
          Filter: () => null,
        }
      : {
          Header: '',
          accessor: 'hidden',
          Filter: () => null,
          isVisible: false,
          show: false,
        },
  ];
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
          <Breadcrums fontSize='xl'>
            <Breadcrum label='Home' href='' />
            <Breadcrum label='Documents' href='' />
            <Breadcrum label='Invoices' href='' active separator={false} />
          </Breadcrums>
          <Paragraph size='lg' color='#262626' weight='600' lineHeight='1.75rem'>
            Buy parameters
          </Paragraph>
          <Spacer size='md' direction='vertical' />
          <Tab
            horizontalSpacing='none'
            icon={null}
            iconSpacing='none'
            onClick={() => setTab(0)}
            text='Store'
            transition='ease'
            type='tab'
            verticalSpacing='sm'
            id='store'
            active={tab === 0}
          />
          <Spacer direction='horizontal' size='lg' />
          <Tab
            horizontalSpacing='none'
            icon={null}
            iconSpacing='none'
            onClick={() => setTab(1)}
            text='My apps'
            transition='ease'
            type='tab'
            verticalSpacing='sm'
            id='apps'
            active={tab === 1}
          />
          <Spacer direction='horizontal' size='lg' />
          <Tab
            horizontalSpacing='none'
            icon={null}
            iconSpacing='none'
            onClick={() => setTab(2)}
            text='Organization Apps'
            transition='ease'
            type='tab'
            verticalSpacing='sm'
            id='org_apps'
            active={tab === 2}
          />
        </Container>
      </BodyHeader>
      <BodyMain style={{ width: '100%', height: '75vh', overflow: 'auto' }}>
        {tab === 0 && (
          <Container style={{ backgroundColor: 'white', height: '100%' }} horizontal='lg'>
            <Container top='md' horizontal='sm' expandHorizontal style={{ overflow: 'auto' }}>
              <WrapperTable
                fontSize='md'
                headerColor='#FAFAFA'
                textHeaderColor='#000'
                verticalSpacing='md'
                zebra={false}
                zebraHover
                zebreHoverColor='#D1D5DA'
                border='horizontal'
                borderColor='#E8E8E8'
              >
                <Table
                  dataTable={appsData}
                  cols={[
                    ...colsTabZero,
                    {
                      Header: 'Action',
                      accessor: 'action',
                      width: 150,
                      minWidth: 100,
                      maxWidth: 100,
                      sortable: true,
                      Filter: () => null,
                      Cell: (props: any) => {
                        const installed = [1, 3, 5];
                        return (
                          <div>
                            {!installed.includes(props.row.index) ? (
                              <Button
                                label='Install'
                                variant='ghost'
                                onClick={() => {
                                  setAppName(props.data[props.row.index].app_name);
                                  setOpenshop(true);
                                }}
                              />
                            ) : (
                              <Button
                                label='Installed'
                                variant='ghost'
                                disabled
                                style={{ border: 'none' }}
                              />
                            )}
                          </div>
                        );
                      },
                    },
                  ]}
                />
              </WrapperTable>
            </Container>
          </Container>
        )}
        {(tab === 1 || tab === 2) && (
          <Container style={{ backgroundColor: 'white', height: '50%', overflow: 'auto' }} top='md'>
            <Container
              top='none'
              horizontal='xl'
              style={{
                display: 'flex',
                justifiContent: 'space-between',
                backgroundColor: 'white',
                minHeight: '72vh',
                flexWrap: 'wrap',
              }}
            >
              <WrapperTable
                fontSize='md'
                headerColor='#FAFAFA'
                textHeaderColor='#000'
                verticalSpacing='md'
                zebra={false}
                zebraHover
                zebreHoverColor='#D1D5DA'
                border='horizontal'
                borderColor='#E8E8E8'
              >
                <Table
                  dataTable={appsData}
                  cols={[
                    ...colsTabOne,
                    ...addColumn,
                    {
                      Header: 'Action',
                      accessor: 'action',
                      width: 200,
                      minWidth: 100,
                      maxWidth: 300,
                      Filter: () => null,
                      Cell: (props: any) => {
                        return (
                          <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                              label='Edit'
                              variant='ghost'
                              onClick={() => {
                                setAppName(props.data[props.row.index].app_name);
                                setOpenTable(true);
                              }}
                            />
                          </div>
                        );
                      },
                    },
                  ]}
                />
              </WrapperTable>
              <Container
                horizontal='lg'
                vertical='xxl'
                style={{ backgroundColor: 'white', height: '50vh' }}
              >
                <AccumulatedBilling />
              </Container>
            </Container>
          </Container>
        )}
      </BodyMain>

      <Drawer active={openTable} onClose={() => setOpenTable(false)}>
        <div style={{ backgroundColor: 'white', height: '100%' }}>
          <div style={{ borderBottom: '0.063rem solid #d9d9d9' }}>
            <Container
              vertical='md'
              left='md'
              right='md'
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <img src='https://i.pravatar.cc/24' alt='avatar' style={{ borderRadius: '50%' }} />
                <Spacer direction='horizontal' size='xs' />
                <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
                  {appName}
                </Paragraph>
              </div>
              <Pill
                background='transparent'
                color='#000'
                handleAction={() => setOpenTable(false)}
              />
            </Container>
          </div>
          {tab === 2 && (
            <Container horizontal='md' vertical='sm'>
              <Tab
                horizontalSpacing='none'
                icon={null}
                iconSpacing='none'
                onClick={() => setTabDrawer(0)}
                text='Preferences'
                transition='ease'
                type='tab'
                verticalSpacing='sm'
                id='personal'
              />
              <Spacer direction='horizontal' size='md' />
              <Tab
                horizontalSpacing='none'
                icon={null}
                iconSpacing='none'
                onClick={() => setTabDrawer(1)}
                text='Group Access'
                transition='ease'
                type='tab'
                verticalSpacing='sm'
                id='group'
              />
            </Container>
          )}

          {tabDrawer === 0 && (
            <div style={{ borderBottom: '0.063rem solid #d9d9d9' }}>
              <Container vertical='md' left='md' right='xxxl'>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Paragraph>App configuration</Paragraph>
                  <Tooltip
                    active={activeTooltip}
                    position='bottom'
                    color='#262626'
                    textColor='#fff'
                    label={
                      'Choose the type of configurationAdvanced configuration: finetune usages of data and bandwithSmart configuration: Define a budget for unlimited data and calculated bandwith'
                    }
                  >
                    <div
                      onMouseOver={() => setActiveTooltip(true)}
                      onMouseLeave={() => setActiveTooltip(false)}
                      style={{
                        width: 14,
                        height: 14,
                        backgroundColor: 'gray',
                        borderRadius: '50%',
                      }}
                    />
                  </Tooltip>
                </div>
                <Spacer size='xs' direction='vertical' />
                <Container right='lg' style={{ width: '90%' }}>
                  <Select
                    size='sm'
                    radius={0.125}
                    border={{
                      top: '0.063rem solid #d9d9d9',
                      right: '0.063rem solid #d9d9d9',
                      bottom: '0.063rem solid #d9d9d9',
                      left: '0.063rem solid #d9d9d9',
                    }}
                    onChange={(e: any) => {
                      setConfiguration(parseInt(e.target.value));
                    }}
                  >
                    <option value='0'>Advanced configuration</option>
                    <option value='1'>Smart configuration</option>
                  </Select>
                </Container>
              </Container>
            </div>
          )}

          {configuration === 0 && tabDrawer === 0 && (
            <>
              <Container vertical='lg' horizontal='md' style={{ width: '95%' }}>
                <Paragraph lineHeight='1.375rem' weight='600' color='dark'>
                  Data usage
                </Paragraph>
                <Spacer direction='vertical' size='md' />
                <>
                  <Radio
                    color='#1890FF'
                    label='Unlimited'
                    name='uptime'
                    spacing='xs'
                    id='up'
                    onChange={() => {}}
                  />
                  <Spacer direction='vertical' size='md' />
                  <Radio
                    color='#1890FF'
                    label='Specified limits'
                    name='uptime'
                    spacing='xs'
                    onChange={() => {}}
                  />
                  <Spacer direction='vertical' size='md' />
                  <>
                    <Paragraph lineHeight='1.5rem'>Upload limit</Paragraph>
                    <Container right='sm' style={{ display: 'flex' }}>
                      <div style={{ width: '70%' }}>
                        <Input
                          type='number'
                          borderColor='#d9d9d9'
                          disabled={false}
                          value='500'
                          size='small'
                          border='outside'
                        />
                      </div>
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
                        disabled={false}
                      >
                        <option value='GB'>GB</option>
                        <option value='MB'>MB</option>
                      </Select>
                    </Container>
                  </>
                  <Spacer direction='vertical' size='sm' />
                  <>
                    <Paragraph lineHeight='1.5rem'>Download limit</Paragraph>
                    <Container right='sm' style={{ display: 'flex' }}>
                      <div style={{ width: '70%' }}>
                        <Input
                          type='number'
                          borderColor='#d9d9d9'
                          disabled={false}
                          value='500'
                          size='small'
                          border='outside'
                        />
                      </div>
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
                        disabled={false}
                      >
                        <option value='GB'>GB</option>
                        <option value='MB'>MB</option>
                      </Select>
                    </Container>
                  </>
                </>
                <Spacer direction='vertical' size='xl' />
                <Paragraph lineHeight='1.375rem' weight='600' color='dark'>
                  Minimun bandwith
                </Paragraph>
                <div style={{ width: '81%' }}>
                  <Paragraph lineHeight='1.375rem' color='#595959'>
                    For certain apps, there is a lower limit that is not allowed to be overwritten
                    keep that in mind
                  </Paragraph>
                </div>
                <Spacer direction='vertical' size='sm' />
                <Container right='sm' style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '50%' }}>
                    <Input
                      type='number'
                      borderColor='#d9d9d9'
                      disabled={false}
                      value='500'
                      size='small'
                      border='outside'
                    />
                  </div>
                  <Spacer direction='horizontal' size='sm' />
                  <Paragraph>Mb/s</Paragraph>
                </Container>
                <Spacer direction='vertical' size='xl' />
                <Paragraph lineHeight='1.375rem' weight='600' color='dark'>
                  Warrated uptime
                </Paragraph>
                <div style={{ width: '70%' }}>
                  <Paragraph lineHeight='1.375rem' color='#595959'>
                    We can only warranty a percentage of uptime (99%) if you select lower
                    capabilities price might be impacted.
                  </Paragraph>
                </div>
                <Spacer direction='vertical' size='md' />
                <>
                  <Radio
                    color='#1890FF'
                    label='99%'
                    name='warranted'
                    spacing='sm'
                    onChange={() => {}}
                  />
                  <Spacer direction='vertical' size='xs' />
                  <Radio
                    color='#1890FF'
                    label='Other'
                    name='warranted'
                    spacing='sm'
                    onChange={() => {}}
                  />
                  <Spacer direction='vertical' size='xs' />
                  <Container horizontal='lg' style={{ display: 'flex', width: '29%' }}>
                    <Input
                      type='number'
                      borderColor='#d9d9d9'
                      disabled={false}
                      value='100'
                      size='small'
                      border='outside'
                    />
                    <Spacer direction='horizontal' size='xs' />
                    <Paragraph>%</Paragraph>
                  </Container>
                </>
                <Spacer direction='vertical' size='xl' />
                <Paragraph lineHeight='1.375rem' weight='600' color='dark'>
                  Time window
                </Paragraph>
                <div style={{ width: '70%' }}>
                  <Paragraph lineHeight='1.375rem' color='#595959'>
                    Define the times where the parameters need to be met.
                  </Paragraph>
                </div>
                <Spacer direction='vertical' size='md' />
                <>
                  <Radio
                    color='#1890FF'
                    label='24 hrs'
                    name='time'
                    spacing='sm'
                    onChange={() => {}}
                  />
                  <Spacer direction='vertical' size='xs' />
                  <div>
                    <Radio
                      color='#1890FF'
                      label='Specific time windows'
                      name='time'
                      spacing='sm'
                      onChange={() => {}}
                    />
                    <Spacer direction='horizontal' size='xs' />
                    <Anchor
                      label='Configure'
                      color='#1890FF'
                      onClick={() => {
                        setOpenTable(false);
                        setOpenConfig(true);
                      }}
                    />
                  </div>
                </>
              </Container>
              <Container
                left='md'
                style={{ height: '4rem', boxShadow: ' 0px -4px 12px rgba(0, 0, 0, 0.05)' }}
              >
                <div
                  style={{
                    height: '100%',
                    position: 'sticky',
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '95%',
                  }}
                >
                  <Paragraph color='#000000'>Monthly price calculated at market value</Paragraph>
                  <Button label='Add app' onClick={() => setOpenTable(false)} />
                </div>
              </Container>
            </>
          )}

          {configuration === 1 && tabDrawer === 0 && (
            <>
              <Container vertical='md' left='md' right='md'>
                <Paragraph lineHeight='1.375rem' weight='600' color='dark'>
                  Monthly budget
                </Paragraph>
                <Spacer direction='vertical' size='xs' />
                <Container right='lg'>
                  <Input
                    type='text'
                    borderColor='#d9d9d9'
                    value='$1000'
                    size='small'
                    border='outside'
                  />
                </Container>
                <Spacer direction='vertical' size='xs' />
              </Container>
              <Container vertical='md' horizontal='md' style={{ width: '95%' }}>
                <Container
                  vertical='md'
                  horizontal='md'
                  style={{ backgroundColor: '#E6F7FF', display: 'flex', height: 104 }}
                >
                  <div
                    style={{
                      width: 21,
                      height: 21,
                      backgroundColor: 'gray',
                      borderRadius: '50%',
                      marginRight: 10,
                    }}
                  />
                  <div>
                    <Paragraph size='lg'>Estimated Bandwith: 100 Mb/s</Paragraph>
                    <Spacer direction='vertical' size='xs' />
                    <div style={{ width: '81%' }}>
                      <Paragraph color='#595959'>
                        Shown price stimated at market value as June 4th, 2021, 19:39:00
                      </Paragraph>
                    </div>
                  </div>
                </Container>
              </Container>
            </>
          )}

          {tabDrawer === 1 && (
            <>
              <Container right='lg' left='md' bottom='sm' style={{ height: '80%' }}>
                <div
                  style={{
                    border: '0.063rem solid #d9d9d9',
                    width: '25.75rem',
                    minHeight: '14.938rem',
                  }}
                >
                  <Container
                    vertical='sm'
                    horizontal='sm'
                    style={{ borderBottom: '0.063rem solid #d9d9d9' }}
                  >
                    <Paragraph lineHeight='1.375rem' color='#595959'>
                      Access Groups
                    </Paragraph>
                  </Container>
                  <Container top='xs' bottom='sm' horizontal='xs'>
                    <Input
                      label='Search here'
                      icon='search'
                      borderColor='#d9d9d9'
                      size='small'
                      border='outside'
                    />
                  </Container>
                  <Container
                    bottom='md'
                    left='xs'
                    right='sm'
                    style={{ borderBottom: '0.063rem solid #d9d9d9' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Paragraph lineHeight='1.375rem' color='#000000'>
                        Supergroup
                      </Paragraph>
                      <Paragraph lineHeight='1.375rem' color='#9A9494'>
                        14 members
                      </Paragraph>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Paragraph lineHeight='1.375rem' color='#000000'>
                        8th Graders
                      </Paragraph>
                      <Paragraph lineHeight='1.375rem' color='#9A9494'>
                        1,984 members
                      </Paragraph>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Paragraph lineHeight='1.375rem' color='#000000'>
                        Teachers
                      </Paragraph>
                      <Paragraph lineHeight='1.375rem' color='#9A9494'>
                        201 members
                      </Paragraph>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Paragraph lineHeight='1.375rem' color='#000000'>
                        Blink 182
                      </Paragraph>
                      <Paragraph lineHeight='1.375rem' color='#9A9494'>
                        3 members
                      </Paragraph>
                    </div>
                  </Container>
                  <Container
                    vertical='xs'
                    horizontal='xs'
                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                  >
                    <Button
                      label='Button'
                      variant='outline'
                      size='small'
                      colors={{
                        text: '#595959',
                        default: '#595959',
                      }}
                    />
                  </Container>
                </div>
                <Container top='md'>
                  <GroupAccessUser apps='18' groups='Super Group' />
                  <GroupAccessUser apps='28' groups='Teachers, 1 more..' />
                  <GroupAccessUser apps='3' groups='Teachers, 2 more..' />
                  <GroupAccessUser apps='8' groups='Teachers, 1 more..' />
                  <GroupAccessUser apps='82' groups='Teachers, 1 more..' />
                </Container>
              </Container>
              <Container
                right='lg'
                left='md'
                style={{ height: '4rem', boxShadow: ' 0px -4px 12px rgba(0, 0, 0, 0.05)' }}
              >
                <div
                  style={{
                    height: '100%',
                    position: 'sticky',
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Paragraph color='#000000'>Monthly price calculated at market value</Paragraph>
                  <Button label='Add app' onClick={() => setOpenTable(false)} />
                </div>
              </Container>
            </>
          )}
        </div>
      </Drawer>

      <Drawer active={openshop} onClose={() => setOpenshop(false)}>
        <div style={{ backgroundColor: 'white', height: '100%' }}>
          <div style={{ borderBottom: '0.063rem solid #d9d9d9' }}>
            <Container
              vertical='md'
              left='md'
              right='md'
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <img src='https://i.pravatar.cc/24' alt='avatar' style={{ borderRadius: '50%' }} />
                <Spacer direction='horizontal' size='xs' />
                <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
                  {appName}
                </Paragraph>
              </div>
              <Pill background='transparent' color='#000' handleAction={() => setOpenshop(false)} />
            </Container>
          </div>
          <Container
            top='md'
            right='lg'
            left='sm'
            style={{ display: 'flex', justifyContent: 'space-between', height: '87.8%' }}
          >
            <Container
              top='xxl'
              bottom='lg'
              horizontal='sm'
              style={{
                border: '0.063rem solid #EAEDF3',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '26rem',
              }}
            >
              <div
                style={{ backgroundColor: 'gray', width: 100, height: 100, borderRadius: '50%' }}
              />
              <Spacer direction='vertical' size='md' />
              <Paragraph align='center' size='lg' color='#3E3F42' lineHeight='1.75rem' weight='500'>
                Personal Usage
              </Paragraph>
              <Spacer direction='vertical' size='sm' />
              <div style={{ width: '10.563rem', height: '5.5rem' }}>
                <Paragraph align='center' color='#6B6C6F' lineHeight='1.375rem' weight='400'>
                  Applications for personal use. These will be charged against your account
                </Paragraph>
              </div>
              <Spacer direction='vertical' size='lg' />
              <Anchor label='See More' icon='->' color='#1665D8' />
            </Container>
            <Spacer direction='horizontal' size='md' />
            <Container
              top='xxl'
              bottom='lg'
              horizontal='sm'
              style={{
                border: '0.063rem solid #EAEDF3',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '26rem',
              }}
            >
              <div
                style={{ backgroundColor: 'gray', width: 100, height: 100, borderRadius: '50%' }}
              />
              <Spacer direction='vertical' size='md' />
              <Paragraph align='center' size='lg' color='#3E3F42' lineHeight='1.75rem' weight='500'>
                Group Usage
              </Paragraph>
              <Spacer direction='vertical' size='sm' />
              <div style={{ width: '10.563rem', height: '5.5rem' }}>
                <Paragraph align='center' color='#6B6C6F' lineHeight='1.375rem' weight='400'>
                  Applications for a group of users. Access Groups are managed in Organization
                  Settings {'>'} Access Groups
                </Paragraph>
              </div>
              <Spacer direction='vertical' size='lg' />
              <Anchor label='See More' icon='->' color='#1665D8' />
            </Container>
          </Container>
          <Container
            left='md'
            style={{ height: '4rem', boxShadow: ' 0px -4px 12px rgba(0, 0, 0, 0.05)' }}
          >
            <div
              style={{
                height: '100%',
                position: 'sticky',
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '95%',
              }}
            >
              <Paragraph color='#000000'>Monthly price calculated at market value</Paragraph>
              <Button label='Add app' onClick={() => setOpenshop(false)} />
            </div>
          </Container>
        </div>
      </Drawer>

      <Drawer
        active={openConfig}
        onClose={() => {
          setOpenConfig(false);
          setOpenTable(true);
        }}
      >
        <div style={{ backgroundColor: 'white' }}>
          <div style={{ borderBottom: '0.063rem solid #d9d9d9' }}>
            <Container
              vertical='md'
              left='md'
              right='md'
              style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
            >
              <Button
                icon={<ChevronLeft />}
                variant='outline'
                size='small'
                colors={{ text: '#000' }}
                onClick={() => {
                  setOpenConfig(false);
                  setOpenTable(true);
                }}
              />
              <Spacer direction='horizontal' size='xs' />
              <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
                Configure time window
              </Paragraph>
            </Container>
          </div>
          <Container top='md' left='sm' right='lg' style={{ height: '88%' }}>
            <div style={{ maxWidth: 750 }}>
              <PricingTable sun={MONDAY} tues={MONDAY} />
            </div>
          </Container>
          <Spacer direction='vertical' size='md' />
          <Spacer direction='vertical' size='md' />
          <Container
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
            horizontal='lg'
          >
            <Button
              label='Save times'
              onClick={() => {
                setOpenTable(true);
                setOpenConfig(false);
              }}
            />
          </Container>
          <Spacer direction='vertical' size='md' />
        </div>
      </Drawer>
    </BodyContent>
  );
};

export default Shop;

const GroupAccessUser = ({ apps, groups }: { apps: string; groups: string }) => (
  <Container bottom='md'>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Container right='md' style={{ display: 'flex', alignItems: 'center' }}>
        <img src='https://i.pravatar.cc/38' alt='avatar' style={{ borderRadius: '50%' }} />
      </Container>
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Paragraph lineHeight='1.375rem' color='#3E3F42' weight='600'>
              Daniel Padilla
            </Paragraph>
            <Spacer direction='horizontal' size='sm' />
            <Paragraph lineHeight='1.375rem' color='#40A9FF' weight='500'>
              {groups}
            </Paragraph>
          </div>
          <div>
            <Paragraph lineHeight='1.375rem' color='#9A9494' align='right'>
              {apps} apps
            </Paragraph>
          </div>
        </div>
        <div>
          <Anchor label='daniel.padilla@hotmail.com' size='sm' color='#9EA0A5' />
        </div>
      </div>
    </div>
  </Container>
);
