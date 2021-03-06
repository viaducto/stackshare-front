import React, { useState } from 'react';
import {
  Paragraph,
  Spacer,
  Button,
  Tab,
  Drawer,
  Container,
  GroupTab,
  Hideable,
} from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyMain } from '../../components/layout';
import { PricingTable } from '../../components/PricingTable';
import { MONDAY } from '../../dummy_data/pricingtable';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import {
  MyAppsOrganizationTab,
  StoreTab,
  StoreTabDrawer,
  MyAppsOrganizationDrawer,
} from './TabShop';
import Skeleton from 'react-loading-skeleton';
import { SkeletonTable } from '../BiddingTelco/TableContent';
import TableContentSkeleton, { TableContentSkeletonBidding } from './TableContentSkeleton';
import { useLoading } from '../../hooks/useLoading';
import CloseButton from '../../components/CloseButton/CloseButton';
const Shop = () => {
  const [openTable, setOpenTable] = useState(false);
  const [openshop, setOpenshop] = useState(false);
  const [openConfig, setOpenConfig] = useState(false);
  const [tab, setTab] = useState(0);
  const [tabDrawer, setTabDrawer] = useState(0);
  const [configuration, setConfiguration] = useState(0);
  const [activeTooltip, setActiveTooltip] = useState(false);
  const [appName, setAppName] = useState('App name');
  const { load, setLoad } = useLoading();

  return (
    <BodyContent>
      {/* Header */}
      <HeaderSell
        title='Bytebroker shop'
        breadcrums={[
          { label: 'Home', href: '/', active: false },
          { label: 'Documents', href: '#', active: false },
          { label: 'Invoices', href: '#', active: true },
        ]}
      >
        <GroupTab fontSize='lg' spacing='md' horizontalSpacing='none'>
          <Tab
            onFocus={() => {
              setLoad(true);
              setTab(0);
              setTimeout(() => {
                setLoad(false);
              }, 1500);
            }}
            text='Store'
            id='store'
            active={tab === 0}
          />
          <Tab
            onFocus={() => {
              setLoad(true);
              setTab(1);
              setTimeout(() => {
                setLoad(false);
              }, 1500);
            }}
            text='My apps'
            id='apps'
            active={tab === 1}
          />
          <Tab
            onFocus={() => {
              setLoad(true);
              setTab(2);
              setTimeout(() => {
                setLoad(false);
              }, 1500);
            }}
            text='Organization Apps'
            id='org_apps'
            active={tab === 2}
          />
        </GroupTab>
      </HeaderSell>
      {/* Body */}
      <BodyMain>
        {load && tab === 0 ? (
          <Container style={{ height: '100%' }} horizontal='md' vertical='md' expandVertical>
            <Skeleton width='12rem' />
            <Spacer size='sm' direction='horizontal' />
            <Skeleton width='2rem' />
            <Spacer size='lg' />
            <Skeleton height='3.188rem' />
            <Spacer size='sm' />
            <SkeletonTable columns3 withCircular />
          </Container>
        ) : (
          tab === 0 && <StoreTab setAppName={setAppName} setOpenshop={setOpenshop} />
        )}
        {load && tab !== 0 ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              height: '100%',
            }}
          >
            <Container style={{ width: '70%' }} horizontal='md' vertical='md'>
              <Skeleton width='12rem' />
              <Spacer size='sm' direction='horizontal' />
              <Skeleton width='2rem' />
              <Spacer size='lg' />
              <Skeleton height='3.188rem' width='100%' />
              <Spacer size='sm' />
              <TableContentSkeleton />
            </Container>
            <Container horizontal='md' vertical='md'>
              <Spacer size='lg' />
              <Hideable visibleOn='sm'>
                <Spacer size='xs' />
                <Spacer size='sm' />
              </Hideable>
              <Skeleton height='2.5rem' width='100%' />
              <Spacer size='sm' />
              <TableContentSkeletonBidding />
            </Container>
          </div>
        ) : (
          (tab === 1 || tab === 2) && (
            <MyAppsOrganizationTab setAppName={setAppName} setOpenTable={setOpenTable} tab={tab} />
          )
        )}
      </BodyMain>

      <StoreTabDrawer appName={appName} setOpenshop={setOpenshop} openshop={openshop} />

      <MyAppsOrganizationDrawer
        configuration={configuration}
        setActiveTooltip={setActiveTooltip}
        setConfiguration={setConfiguration}
        setOpenConfig={setOpenConfig}
        setOpenTable={setOpenTable}
        setTabDrawer={setTabDrawer}
        tab={tab}
        tabDrawer={tabDrawer}
        activeTooltip={activeTooltip}
        appName={appName}
        openTable={openTable}
      />

      <Drawer
        active={openConfig}
        onClose={() => {
          setOpenConfig(false);
          setOpenTable(true);
        }}
        size='md'
      >
        <div style={{ overflow: 'auto', height: '100%' }}>
          <Container
            vertical='md'
            left='md'
            right='md'
            expandHorizontal
            className='border-bottom'
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Paragraph weight='600' size='lg' lineHeight='1.75rem'>
              Configure time window
            </Paragraph>
            <CloseButton
              onClick={() => {
                setOpenConfig(false);
                setOpenTable(true);
              }}
            />
          </Container>

          <Container top='md' left='sm' right='lg' style={{ width: '100%', overflow: 'auto' }}>
            <PricingTable sun={MONDAY} tues={MONDAY} />
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
