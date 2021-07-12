import React from 'react';
import { Card, Container, Spacer, Tab } from '@jp-olvera/jp-viaducto-components';
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
    <BodyContent
      style={{
        boxSizing: 'border-box',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <HeaderSell
        title='General Preferences'
        breadcrums={[
          { label: 'Home', href: '#', active: false },
          { label: 'Organization Settings', href: '#', active: false },
          { label: 'Organization', href: '#', active: true },
        ]}
        tabs={[
          <Tab text='Overview' active={tab === 0} onClick={() => setTab(0)} />,
          <Tab text='Security' active={tab === 1} onClick={() => setTab(1)} />,
          <Tab text='Brand Localization' active={tab === 2} onClick={() => setTab(2)} />,
        ]}
      />
      <div style={{ display: 'flex', height: '77vh', overflow: 'hidden' }}>
        <BodyMain horizontal='md' style={{ flexBasis: '100%' }} expandVertical>
          <Container
            vertical='md'
            horizontal='md'
            style={{ backgroundColor: 'white', height: '95%', overflow: 'auto' }}
          >
            {tab === 0 && <Overview />}
            {tab === 1 && <Security />}
            {tab === 2 && <BrandLocalization />}
          </Container>
        </BodyMain>
        <BodyMain horizontal='xl' expandVertical style={{ flexBasis: 600 }}>
          <Spacer size='xxl' />
          <div className='flotant'>
            <Card style={{ height: '68%' }} elevation={1}>
              <Container
                vertical='md'
                horizontal='md'
                expandVertical
                style={{ backgroundColor: 'white' }}
              >
                <VerticalSteps title='Setup your organization.' />
              </Container>
            </Card>
          </div>
        </BodyMain>
      </div>
    </BodyContent>
  );
};
export default GeneralPreferences;
