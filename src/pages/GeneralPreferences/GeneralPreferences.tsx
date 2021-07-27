import React from 'react';
import {
  Card,
  Column,
  Container,
  Grid,
  GroupTab,
  Row,
  Spacer,
  Tab,
} from '@jp-olvera/jp-viaducto-components';
import { BodyContent, BodyMain } from '../../components/layout';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import { VerticalSteps } from '../../components/VerticalSteps';
import { useState } from 'react';
import Overview from './Overview';
import Security from './Security';
import BrandLocalization from './BrandLocalization';

const GeneralPreferences = () => {
  const [tab, setTab] = useState<number>(0);
  return (
    <BodyContent>
      <HeaderSell
        title='General Preferences'
        breadcrums={[
          { label: 'Home', href: '#', active: false },
          { label: 'Organization Settings', href: '#', active: false },
          { label: 'Organization', href: '#', active: true },
        ]}
      >
        <GroupTab fontSize='lg' spacing='md' horizontalSpacing='none' base={14}>
          <Tab text='Overview' onFocus={() => setTab(0)} />
          <Tab text='Security' onFocus={() => setTab(1)} />
          <Tab text='Brand Localization' onFocus={() => setTab(2)} />
        </GroupTab>
      </HeaderSell>
      <div style={{ height: '75vh', overflow: 'auto' }}>
        <Grid expanded style={{ background: 'transparent' }}>
          <Row>
            <Column lg={tab === 1 ? 6 : 8} md={12} sm={12} xs={12}>
              <BodyMain horizontal='none' style={{ overflow: 'auto' }} expandVertical>
                <Container vertical='md' style={{ overflow: 'hidden' }}>
                  {tab === 0 && <Overview />}
                  {tab === 1 && <Security />}
                  {tab === 2 && <BrandLocalization />}
                </Container>
              </BodyMain>
            </Column>
            <Column lg={4} md={12} sm={12}>
              <Spacer size='xxl' />
              <Container horizontal='md' className='flotant'>
                <Card style={{ height: 'auto' }} elevation={1}>
                  <Container
                    vertical='md'
                    horizontal='md'
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <VerticalSteps title='Setup your organization.' />
                  </Container>
                </Card>
              </Container>
            </Column>
          </Row>
        </Grid>
        <Spacer size='lg' />
      </div>
    </BodyContent>
  );
};
export default GeneralPreferences;
