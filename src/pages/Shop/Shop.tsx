import React, { useState } from 'react';
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
  Tooltip,
  Breadcrums,
  Anchor,
} from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyHeader, BodyMain } from '../../components/layout';
import { Container } from '../../components/Container';
import { appsData } from './AppsData';
import styled from 'styled-components';

const details = {
  default: 'transparent',
  hover: 'transparent',
  click: 'transparent',
  text: '#1890FF',
};

const Styled = styled.div`
  & div > div {
    width: 100%;
  }
  table {
    width: 100% !important;
  }
  thead {
    width: 100%;
    tr {
      width: 100% !important;
    }
    th {
      width: 100% !important;
    }
  }
  tr {
    width: 100% !important;
  }
  td {
    width: 100% !important;
  }
`;

const Shop = () => {
  const [openTable, setOpenTable] = useState(false);
  const [openshop, setOpenshop] = useState(false);
  const [openConfig, setOpenConfig] = useState(false);
  const [tab, setTab] = useState(0);
  const [tabDrawer, setTabDrawer] = useState(0);
  const [configuration, setConfiguration] = useState(0);
  const [activeTooltip, setActiveTooltip] = useState(false);
  const [appName, setAppName] = useState('App name');
  const WrapTable = styled.div`
    table {
      min-width: ${tab === 2 ? '63vw' : '60vw'};
      thead,
      tbody {
        min-width: ${tab === 2 ? '63vw' : '60vw'};
      }
      tbody > tr {
        max-width: ${tab === 2 ? '63vw' : '60vw'} !important;
      }
    }
  `;

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
              { label: 'Home', href: '#' },
              { label: 'Documents', href: '#' },
              { label: 'Invoices', href: '#', active: true },
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
            text='Store'
            transition='ease'
            type='tab'
            verticalSpacing='sm'
            id='store'
          />
          <Tab
            horizontalSpacing='sm'
            icon={null}
            iconSpacing='none'
            onClick={() => setTab(1)}
            text='My apps'
            transition='ease'
            type='tab'
            verticalSpacing='sm'
            id='apps'
          />
          <Tab
            horizontalSpacing='sm'
            icon={null}
            iconSpacing='none'
            onClick={() => setTab(2)}
            text='Organization Apps'
            transition='ease'
            type='tab'
            verticalSpacing='sm'
            id='org_apps'
          />
        </Container>
      </BodyHeader>
      <BodyMain style={{ width: '100%' }}>
        {tab === 0 && (
          <Styled style={{ backgroundColor: 'white', height: '100%' }}>
            <Container top='none' horizontal='lg' expandHorizontal>
              <Table
                border='horizontal'
                borderColor='#E8E8E8'
                buttonVariantColor='info'
                colorSelected='#ffd37c'
                columns={[
                  {
                    Header: 'App name',
                    accessor: 'app_name',
                    Filter: () => null,
                  },
                  {
                    Header: 'Type',
                    accessor: 'type',
                    Filter: () => null,
                  },
                  {
                    Header: 'Action',
                    accessor: 'action',
                    Filter: () => null,
                    Cell: (props: any) => {
                      const installed = [1, 3, 5];
                      return (
                        <div style={{ display: 'inline-flex', justifyContent: 'space-between' }}>
                          {!installed.includes(props.row.index) ? (
                            <Button
                              label='Install'
                              colors={details}
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
                data={appsData}
                fontSize='md'
                headerColor='#FAFAFA'
                headerElevation={0}
                headerFixed={false}
                headerPadding='1.125rem'
                minHeight='2.5rem'
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
          </Styled>
        )}
        {tab === 1 && (
          <div style={{ backgroundColor: 'white', height: '100%' }}>
            <Container
              top='none'
              horizontal='xl'
              style={{ display: 'flex', justifiContent: 'space-between', backgroundColor: 'white' }}
            >
              <WrapTable>
                <Table
                  align='center'
                  border='horizontal'
                  borderColor='#E8E8E8'
                  buttonVariantColor='info'
                  colorSelected='#ffd37c'
                  columns={[
                    {
                      Header: 'App name',
                      accessor: 'app_name',
                      Filter: () => null,
                    },
                    {
                      Header: 'Type',
                      accessor: 'type',
                      Filter: () => null,
                    },
                    {
                      Header: 'Installed by',
                      accessor: 'installed_by',
                      Filter: () => null,
                    },
                    {
                      Header: 'Expense period',
                      accessor: 'expense_period',
                      prefix: '$',
                      Filter: () => null,
                    },
                    {
                      Header: 'Action',
                      accessor: 'action',
                      Filter: () => null,
                      Cell: (props: any) => {
                        return (
                          <div style={{ display: 'inline-flex', justifyContent: 'space-between' }}>
                            <Button
                              label='Edit'
                              colors={details}
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
                  data={appsData}
                  fontSize='md'
                  headerColor='#FAFAFA'
                  headerElevation={0}
                  headerFixed={false}
                  headerPadding='1.125rem 0'
                  minHeight='2.5rem'
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
              </WrapTable>
              <Container horizontal='lg' vertical='lg' style={{ backgroundColor: 'white' }}>
                <Container
                  horizontal='md'
                  style={{
                    width: '23rem',
                    border: '0.063rem solid #BFBFBF',
                    borderRadius: 4,
                    textAlign: 'center',
                    overflow: 'auto',
                    backgroundColor: 'white',
                    maxHeight: '57%',
                  }}
                >
                  <div style={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
                    <div
                      style={{
                        borderBottom: '0.063rem solid #d9d9d9',
                        overflow: 'auto',
                        paddingTop: '0.482rem',
                      }}
                    >
                      <Paragraph weight='600' size='lg' lineHeight='1.5rem'>
                        Accumulated billing
                      </Paragraph>
                      <Paragraph weight='400' size='md' lineHeight='1.25rem' color='#8C8C8C'>
                        To be billed by June 31, 2021
                      </Paragraph>
                      <Spacer direction='vertical' size='micro' />
                    </div>
                    <Spacer direction='vertical' size='micro' />
                    <div style={{ borderBottom: '0.063rem solid #d9d9d9', overflow: 'auto' }}>
                      <div style={{ display: 'flex' }}>
                        <div style={{ width: '50%', padding: '0 0 0 0.5rem' }}>
                          <Paragraph lineHeight='1.25rem' color='#595959' size='sm'>
                            App
                          </Paragraph>
                        </div>
                        <div style={{ width: '50%' }}>
                          <Paragraph lineHeight='1.25rem' color='#595959' size='sm'>
                            Expense
                          </Paragraph>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Spacer direction='vertical' size='micro' />
                  <AppsAccumulated app='Atlassian' />
                  <AppsAccumulated app='Twitter' />
                  <AppsAccumulated app='Facebook' />
                  <AppsAccumulated app='Zoom' />
                  <AppsAccumulated app='YouTube' />
                  <AppsAccumulated app='YouTube' />
                  <AppsAccumulated app='Atlassian' />
                  <AppsAccumulated app='Google Drive' />
                  <AppsAccumulated app='Dropbox' />
                  <AppsAccumulated app='Box' />
                  <AppsAccumulated app='RainforestQA' />
                  <AppsAccumulated app='Shopify' />
                  <AppsAccumulated app='Gorgias' />
                  <AppsAccumulated app='Wikipedia' />
                  <AppsAccumulated app='Facebook' />
                  <AppsAccumulated app='Zoom' />
                  <AppsAccumulated app='YouTube' />
                  <AppsAccumulated app='YouTube' />
                  <AppsAccumulated app='Box' />
                  <AppsAccumulated app='RainforestQA' />
                  <AppsAccumulated app='Shopify' />
                  <AppsAccumulated app='Gorgias' />
                  <div
                    style={{
                      position: 'sticky',
                      bottom: 0,
                      backgroundColor: 'white',
                      zIndex: 1,
                      display: 'flex',
                      padding: '0.482rem 0',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Paragraph lineHeight='1.5rem' size='lg' weight='400'>
                      Total
                    </Paragraph>
                    <Paragraph lineHeight='1.5rem' size='lg' weight='600'>
                      $16,000.00
                    </Paragraph>
                  </div>
                </Container>
              </Container>
            </Container>
          </div>
        )}
        {tab === 2 && (
          <div style={{ backgroundColor: 'white', height: '100%' }}>
            <Container
              top='none'
              horizontal='xl'
              style={{ display: 'flex', justifiContent: 'space-between', backgroundColor: 'white' }}
            >
              <WrapTable>
                <Table
                  align='center'
                  border='horizontal'
                  borderColor='#E8E8E8'
                  buttonVariantColor='info'
                  colorSelected='#ffd37c'
                  columns={[
                    {
                      Header: 'App name',
                      accessor: 'app_name',
                      Filter: () => null,
                    },
                    {
                      Header: 'Type',
                      accessor: 'type',
                      Filter: () => null,
                    },
                    {
                      Header: 'Installed by',
                      accessor: 'installed_by',
                      Filter: () => null,
                    },
                    {
                      Header: 'User Group',
                      accessor: 'user_group',
                      Filter: () => null,
                    },
                    {
                      Header: 'Expense period',
                      accessor: 'expense_period',
                      prefix: '$',
                      Filter: () => null,
                    },
                    {
                      Header: 'Action',
                      accessor: 'action',
                      Filter: () => null,
                      Cell: (props: any) => {
                        return (
                          <div style={{ display: 'inline-flex', justifyContent: 'space-between' }}>
                            <Button
                              label='Edit'
                              colors={details}
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
                  data={appsData}
                  fontSize='md'
                  headerColor='#FAFAFA'
                  headerElevation={0}
                  headerFixed={false}
                  headerPadding='1.125rem 0'
                  minHeight='2.5rem'
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
              </WrapTable>
              <Container horizontal='lg' vertical='lg' style={{ backgroundColor: 'white' }}>
                <Container
                  horizontal='md'
                  style={{
                    width: '20rem',
                    border: '0.063rem solid #BFBFBF',
                    borderRadius: 4,
                    textAlign: 'center',
                    overflow: 'auto',
                    backgroundColor: 'white',
                    maxHeight: '57%',
                  }}
                >
                  <div style={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
                    <div
                      style={{
                        borderBottom: '0.063rem solid #d9d9d9',
                        overflow: 'auto',
                        paddingTop: '0.482rem',
                      }}
                    >
                      <Paragraph weight='600' size='lg' lineHeight='1.5rem'>
                        Accumulated billing
                      </Paragraph>
                      <Paragraph weight='400' size='md' lineHeight='1.25rem' color='#8C8C8C'>
                        To be billed by June 31, 2021
                      </Paragraph>
                      <Spacer direction='vertical' size='micro' />
                    </div>
                    <Spacer direction='vertical' size='micro' />
                    <div style={{ borderBottom: '0.063rem solid #d9d9d9', overflow: 'auto' }}>
                      <div style={{ display: 'flex' }}>
                        <div style={{ width: '50%', padding: '0 0 0 0.5rem' }}>
                          <Paragraph lineHeight='1.25rem' color='#595959' size='sm'>
                            App
                          </Paragraph>
                        </div>
                        <div style={{ width: '50%' }}>
                          <Paragraph lineHeight='1.25rem' color='#595959' size='sm'>
                            Expense
                          </Paragraph>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Spacer direction='vertical' size='micro' />
                  <AppsAccumulated app='Atlassian' />
                  <AppsAccumulated app='Twitter' />
                  <AppsAccumulated app='Facebook' />
                  <AppsAccumulated app='Zoom' />
                  <AppsAccumulated app='YouTube' />
                  <AppsAccumulated app='YouTube' />
                  <AppsAccumulated app='Atlassian' />
                  <AppsAccumulated app='Google Drive' />
                  <AppsAccumulated app='Dropbox' />
                  <AppsAccumulated app='Box' />
                  <AppsAccumulated app='RainforestQA' />
                  <AppsAccumulated app='Shopify' />
                  <AppsAccumulated app='Gorgias' />
                  <AppsAccumulated app='Wikipedia' />
                  <AppsAccumulated app='Facebook' />
                  <AppsAccumulated app='Zoom' />
                  <AppsAccumulated app='YouTube' />
                  <AppsAccumulated app='YouTube' />
                  <AppsAccumulated app='Box' />
                  <AppsAccumulated app='RainforestQA' />
                  <AppsAccumulated app='Shopify' />
                  <AppsAccumulated app='Gorgias' />
                  <div
                    style={{
                      position: 'sticky',
                      bottom: 0,
                      backgroundColor: 'white',
                      zIndex: 1,
                      display: 'flex',
                      padding: '0.482rem 0',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Paragraph lineHeight='1.5rem' size='lg' weight='400'>
                      Total
                    </Paragraph>
                    <Paragraph lineHeight='1.5rem' size='lg' weight='600'>
                      $16,000.00
                    </Paragraph>
                  </div>
                </Container>
              </Container>
            </Container>
          </div>
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
          <Container horizontal='md' vertical='sm'>
            <Tab
              horizontalSpacing='sm'
              icon={null}
              iconSpacing='none'
              onClick={() => setTabDrawer(0)}
              text='Preferences'
              transition='ease'
              type='tab'
              verticalSpacing='sm'
              id='personal'
            />
            <Tab
              horizontalSpacing='sm'
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

          {tabDrawer === 0 && (
            <div style={{ borderBottom: '0.063rem solid #d9d9d9' }}>
              <Container vertical='md' left='md' right='md'>
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
                        <Input type='number' borderColor='#d9d9d9' disabled={false} value='500' />
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
                        <Input type='number' borderColor='#d9d9d9' disabled={false} value='500' />
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
                    <Input type='number' borderColor='#d9d9d9' disabled={false} value='500' />
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
                    <Input type='number' borderColor='#d9d9d9' disabled={false} value='100' />
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
                  <Button
                    label='Add app'
                    colors={{
                      default: '#096DD9',
                      hover: '#0254ac',
                      click: '#096dd9bc',
                      text: '#fff',
                    }}
                    onClick={() => setOpenTable(false)}
                  />
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
                  <Input type='text' borderColor='#d9d9d9' value='$1000' />
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
                    <Input label='Search here' icon='search' borderColor='#d9d9d9' />
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
                  <Button
                    label='Add app'
                    colors={{
                      default: '#096DD9',
                      hover: '#0254ac',
                      click: '#096dd9bc',
                      text: '#fff',
                    }}
                    onClick={() => setOpenTable(false)}
                  />
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
              <Button
                label='Add app'
                colors={{
                  default: '#096DD9',
                  hover: '#0254ac',
                  click: '#096dd9bc',
                  text: '#fff',
                }}
                onClick={() => setOpenshop(false)}
              />
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
        <div style={{ backgroundColor: 'white', height: '100%' }}>
          <div style={{ borderBottom: '0.063rem solid #d9d9d9' }}>
            <Container
              vertical='md'
              left='md'
              right='md'
              style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
            >
              <Button
                icon='<'
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
            <div style={{ backgroundColor: 'gray', height: 603, width: 733 }} />
          </Container>
          <Container
            style={{
              position: 'sticky',
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
            horizontal='lg'
          >
            <Button
              label='Save times'
              colors={{
                default: '#096DD9',
                hover: '#0254ac',
                click: '#096dd9bc',
                text: '#fff',
              }}
              onClick={() => {
                setOpenTable(true);
                setOpenConfig(false);
              }}
            />
          </Container>
        </div>
      </Drawer>
    </BodyContent>
  );
};

export default Shop;

const AppsAccumulated = ({ app }: any) => {
  return (
    <>
      <Spacer direction='vertical' size='md' />
      <div style={{ display: 'flex' }}>
        <div
          style={{
            width: '65%',
            padding: '0 0 0 0.5rem',
            display: 'flex',
            gap: '0.563rem',
            alignItems: 'center',
          }}
        >
          <img src='https://i.pravatar.cc/32' alt='avatar' style={{ borderRadius: '50%' }} />
          <Paragraph lineHeight='1.375rem' color='#595959'>
            {app}
          </Paragraph>
        </div>
        <div style={{ width: '35%' }}>
          <Paragraph lineHeight='1.375rem' color='#262626'>
            $400
          </Paragraph>
        </div>
      </div>
    </>
  );
};

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
