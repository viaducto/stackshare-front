import React from 'react';
import {
  Button,
  WrapperTable,
  Container,
  Paragraph,
  Spacer,
  Anchor,
  Drawer,
  Pill,
  Tab,
  Tooltip,
  Select,
  Radio,
  Input,
  Grid,
  Row,
  Column,
} from '@jp-olvera/jp-viaducto-components';
import { Film, ListAlt, Info, Dolar } from 'react-ikonate';
import Table from '../../components/Table/Table';
import { appsData } from './AppsData';
import { colsTabOne, colsTabZero } from './Columns';
import AccumulatedBilling from '../../components/AccumulatedBilling/AccumulatedBilling';
import { Search } from 'react-ikonate';
import { useState } from 'react';

export const StoreTab = ({
  setAppName,
  setOpenshop,
}: {
  setAppName: Function;
  setOpenshop: Function;
}) => {
  return (
    <Container style={{ backgroundColor: 'white', height: '100%' }} horizontal='lg'>
      <Container top='md' horizontal='sm' expandHorizontal style={{ overflow: 'auto' }}>
        <WrapperTable
          fontSize='md'
          zebra={false}
          verticalSpacing='md'
          border='horizontal'
          borderColor='#E8E8E8'
          horizontalSpacing='sm'
        >
          <Table
            dataTable={appsData}
            cols={[
              ...colsTabZero,
              {
                Header: 'Action',
                accessor: 'action',
                width: 200,
                minWidth: 100,
                maxWidth: 300,
                sortable: true,
                Filter: () => null,
                Cell: (props: any) => {
                  const installed = [1, 3, 5];
                  return (
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
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
  );
};

export const StoreTabDrawer = ({
  openshop,
  setOpenshop,
  appName,
}: {
  openshop: boolean;
  setOpenshop: Function;
  appName: string;
}) => {
  return (
    <Drawer active={openshop} onClose={() => setOpenshop(false)}>
      <Grid className='border-bottom'>
        <Row>
          <Column>
            <Container
              expandVertical
              vertical='md'
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
                label=''
                background='transparent'
                color='#000'
                handleAction={() => setOpenshop(false)}
              />
            </Container>
          </Column>
        </Row>
      </Grid>
      <Grid>
        <Row>
          <Column>
            <Container
              top='md'
              style={{ display: 'flex', justifyContent: 'space-evenly', height: '87vh' }}
              expandVertical
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
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(22, 101, 216, .1)',
                  }}
                >
                  <ListAlt color='#1665D8' fontSize='3rem' />
                </div>
                <Spacer direction='vertical' size='md' />
                <Paragraph
                  align='center'
                  size='lg'
                  color='#3E3F42'
                  lineHeight='1.75rem'
                  weight='500'
                >
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
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(22, 101, 216, .1)',
                  }}
                >
                  <Film color='#1665D8' fontSize='3rem' />
                </div>
                <Spacer direction='vertical' size='md' />
                <Paragraph
                  align='center'
                  size='lg'
                  color='#3E3F42'
                  lineHeight='1.75rem'
                  weight='500'
                >
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
          </Column>
        </Row>
      </Grid>
      <Container style={{ height: '4rem', boxShadow: ' 0px -4px 12px rgba(0, 0, 0, 0.05)' }}>
        <Container
          expandVertical
          horizontal='md'
          style={{
            height: '100%',
            position: 'sticky',
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Paragraph color='#000000'>Monthly price calculated at market value</Paragraph>
          <Button label='Add app' onClick={() => setOpenshop(false)} />
        </Container>
      </Container>
    </Drawer>
  );
};

export const MyAppsOrganizationTab = ({
  tab,
  setAppName,
  setOpenTable,
}: {
  tab: number;
  setAppName: Function;
  setOpenTable: Function;
}) => {
  const addColumn = [
    tab === 2
      ? {
          Header: 'User Group',
          accessor: 'user_group',
          Filter: () => null,
          width: 150,
          minWidth: 120,
          maxWidth: 300,
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
    <Container style={{ backgroundColor: 'white', height: '50%', overflow: 'auto' }} top='md'>
      <Container
        top='none'
        horizontal='xl'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          minHeight: '72vh',
          flexWrap: 'wrap',
        }}
      >
        <WrapperTable
          fontSize='md'
          verticalSpacing='md'
          hover
          zebra={false}
          hoverColor='#D1D5DA'
          border='horizontal'
          borderColor='#E8E8E8'
          horizontalSpacing='sm'
        >
          <Table
            dataTable={appsData}
            cols={[
              ...colsTabOne,
              ...addColumn,
              {
                Header: 'Action',
                accessor: 'action',
                width: 150,
                minWidth: 120,
                maxWidth: 300,
                Filter: () => null,
                Cell: (props: any) => {
                  return (
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
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
  );
};

export const MyAppsOrganizationDrawer = ({
  openTable,
  setOpenTable,
  appName,
  tab,
  setTabDrawer,
  tabDrawer,
  activeTooltip,
  setActiveTooltip,
  configuration,
  setConfiguration,
  setOpenConfig,
}: {
  openTable: boolean;
  setOpenTable: Function;
  appName: string;
  tab: number;
  setTabDrawer: Function;
  tabDrawer: number;
  activeTooltip: boolean;
  setActiveTooltip: Function;
  configuration: number;
  setConfiguration: Function;
  setOpenConfig: Function;
}) => {
  const [dataUsage, setDataUsage] = useState<boolean>(true);
  const [uptime, setUptime] = useState<boolean>(true);
  const [time, setTime] = useState<boolean>(true);
  return (
    <Drawer active={openTable} onClose={() => setOpenTable(false)}>
      <Grid expanded className='border-bottom'>
        <Row>
          <Column>
            <Container vertical='md' style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                label=''
              />
            </Container>
          </Column>
        </Row>
      </Grid>

      {tab === 2 && (
        <Container horizontal='md' vertical='sm'>
          <Tab
            horizontalSpacing='sm'
            icon={null}
            iconSpacing='none'
            onClick={() => setTabDrawer(0)}
            text='Preferences'
            transition='ease'
            tabType='tab'
            verticalSpacing='sm'
            id='personal'
            active={tabDrawer === 0}
          />
          <Spacer direction='horizontal' size='md' />
          <Tab
            horizontalSpacing='sm'
            icon={null}
            iconSpacing='none'
            onClick={() => setTabDrawer(1)}
            text='Group Access'
            transition='ease'
            tabType='tab'
            verticalSpacing='sm'
            id='group'
            active={tabDrawer === 1}
          />
        </Container>
      )}

      {tabDrawer === 0 && (
        <Grid expanded className='border-bottom'>
          <Row>
            <Column size={12}>
              <Container top='md'>
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
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Info fontSize='1rem' color='white' style={{ filter: 'invert(1)' }} />
                    </div>
                  </Tooltip>
                </div>
                <Spacer size='xs' direction='vertical' />
              </Container>
            </Column>
            <Column xs={11} md={7}>
              <Spacer size='xs' direction='vertical' />
              <Container bottom='md'>
                <Select
                  inputSize='sm'
                  radius='sm'
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
            </Column>
          </Row>
        </Grid>
      )}

      {configuration === 0 && tabDrawer === 0 && (
        <>
          <Grid>
            <Row>
              <Column>
                <Container vertical='lg'>
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
                      defaultChecked
                      onChange={() => setDataUsage(true)}
                    />
                    <Spacer direction='vertical' size='md' />
                    <Radio
                      color='#1890FF'
                      label='Specified limits'
                      name='uptime'
                      spacing='xs'
                      onChange={() => setDataUsage(false)}
                    />
                    <Spacer direction='vertical' size='md' />
                    <>
                      <Paragraph lineHeight='1.5rem'>Upload limit</Paragraph>
                      <Container right='sm' style={{ display: 'flex' }}>
                        <div style={{ width: '70%' }}>
                          <Input
                            type='number'
                            borderColor='#d9d9d9'
                            disabled={dataUsage}
                            defaultValue={500}
                            inputSize='small'
                            border='outside'
                          />
                        </div>
                        <Spacer direction='horizontal' size='xs' />
                        <Select
                          radius='sm'
                          border={{
                            top: '0.063rem solid #d9d9d9',
                            right: '0.063rem solid #d9d9d9',
                            bottom: '0.063rem solid #d9d9d9',
                            left: '0.063rem solid #d9d9d9',
                          }}
                          disabled={dataUsage}
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
                            disabled={dataUsage}
                            defaultValue={500}
                            inputSize='small'
                            border='outside'
                          />
                        </div>
                        <Spacer direction='horizontal' size='xs' />
                        <Select
                          radius='sm'
                          border={{
                            top: '0.063rem solid #d9d9d9',
                            right: '0.063rem solid #d9d9d9',
                            bottom: '0.063rem solid #d9d9d9',
                            left: '0.063rem solid #d9d9d9',
                          }}
                          disabled={dataUsage}
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
                        defaultValue={500}
                        inputSize='small'
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
                      onChange={() => setUptime(true)}
                      defaultChecked
                    />
                    <Spacer direction='vertical' size='xs' />
                    <Radio
                      color='#1890FF'
                      label='Other'
                      name='warranted'
                      spacing='sm'
                      onChange={() => setUptime(false)}
                    />
                    <Spacer direction='vertical' size='xs' />
                    <Container horizontal='lg' style={{ display: 'flex', width: '45%' }}>
                      <Input
                        type='number'
                        borderColor='#d9d9d9'
                        disabled={uptime}
                        defaultValue={500}
                        inputSize='small'
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
                      defaultChecked
                      onChange={() => setTime(true)}
                    />
                    <Spacer direction='vertical' size='xs' />
                    <div>
                      <Radio
                        color='#1890FF'
                        label='Specific time windows'
                        name='time'
                        spacing='sm'
                        onChange={() => setTime(false)}
                      />
                      <Spacer direction='horizontal' size='xs' />
                      <Button
                        label='Configure'
                        variant='ghost'
                        disabled={time}
                        onClick={() => {
                          setOpenTable(false);
                          setOpenConfig(true);
                        }}
                      />
                    </div>
                  </>
                </Container>
              </Column>
            </Row>
            <Row>
              <Column></Column>
            </Row>
          </Grid>

          <Container
            left='md'
            style={{ height: '6rem', boxShadow: ' 0px -4px 12px rgba(0, 0, 0, 0.05)' }}
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
          <Grid>
            <Row>
              <Column xs={12} md={7}>
                <Container vertical='md' expandHorizontal>
                  <Paragraph lineHeight='1.375rem' weight='600' color='dark'>
                    Monthly budget
                  </Paragraph>
                  <Spacer direction='vertical' size='xs' />
                  <Input
                    icon={<Dolar />}
                    type='number'
                    borderColor='#d9d9d9'
                    defaultValue='1000'
                    inputSize='small'
                    border='outside'
                  />
                  <Spacer direction='vertical' size='xs' />
                </Container>
              </Column>
            </Row>
            <Row>
              <Column>
                <Container vertical='md' expandVertical expandHorizontal>
                  <Container
                    vertical='sm'
                    horizontal='md'
                    style={{ backgroundColor: '#E6F7FF', display: 'flex', height: 104 }}
                  >
                    <div
                      style={{
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div>
                        <Spacer size='xs' direction='vertical' />
                        <Info fontSize='1.313rem' color='#1890FF' />
                      </div>
                    </div>
                    <Spacer size='md' direction='horizontal' />
                    <div>
                      <Paragraph size='lg'>Estimated Bandwith: 100 Mb/s</Paragraph>
                      <div style={{ width: '81%' }}>
                        <Paragraph color='#595959'>
                          Shown price stimated at market value as June 4th, 2021, 19:39:00
                        </Paragraph>
                      </div>
                    </div>
                  </Container>
                </Container>
              </Column>
            </Row>
            <Row>
              <Column>
                <Container>
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
                    <div>
                      <Paragraph color='#000000' lineHeight='1.375rem' weight='600'>
                        $100
                      </Paragraph>
                      <Paragraph color='#8C8C8C' size='sm' lineHeight='1.25rem'>
                        Ammount billed at end of billing period
                      </Paragraph>
                    </div>
                    <Button label='Add app' onClick={() => setOpenTable(false)} />
                  </div>
                </Container>
              </Column>
            </Row>
          </Grid>
        </>
      )}

      {tabDrawer === 1 && (
        <>
          <Container right='lg' left='md' bottom='sm' style={{ height: '80%' }}>
            {/* <ButtonDatalist
                onClick={() => {}}
                options={['Supergroup', '8th Graders', 'Teachers', 'Blink 182']}
              /> */}
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
              <ButtonDatalistFake />
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
            style={{ height: '5rem', boxShadow: ' 0px -4px 12px rgba(0, 0, 0, 0.05)' }}
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
    </Drawer>
  );
};

export const GroupAccessUser = ({ apps, groups }: { apps: string; groups: string }) => (
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

const ButtonDatalistFake = () => (
  <div
    style={{
      border: '0.063rem solid #d9d9d9',
      width: '80%',
      minHeight: '14.938rem',
    }}
  >
    <Container vertical='sm' horizontal='sm' className='border-bottom'>
      <Paragraph lineHeight='1.375rem' color='#595959'>
        Access Groups
      </Paragraph>
    </Container>
    <Container top='md' bottom='sm' horizontal='xs'>
      <Input
        label='Search here'
        borderColor='#d9d9d9'
        inputSize='small'
        border='outside'
        icon={<Search />}
      />
    </Container>
    <Container bottom='md' left='xs' right='sm' className='border-bottom'>
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
);
