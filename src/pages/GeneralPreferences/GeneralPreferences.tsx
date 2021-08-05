import React from 'react';
import {
  Card,
  Column,
  ConfigContext,
  Container,
  Grid,
  GroupTab,
  Hideable,
  Row,
  Spacer,
  Tab,
} from '@jp-olvera/jp-viaducto-components';
import { BodyContent } from '../../components/layout';
import HeaderSell from '../../components/SellParameters/HeaderSell';
import { VerticalSteps } from '../../components/VerticalSteps';
import { useState } from 'react';
import Overview from './Overview';
import Security from './Security';
import BrandLocalization from './BrandLocalization';
import { useLoading } from '../../hooks/useLoading';
import { useContext } from 'react';

const GeneralPreferences = () => {
  const [tab, setTab] = useState<number>(0);
  const { load, setLoad } = useLoading();
  const {
    configuration: { colors },
  } = useContext(ConfigContext);
  return (
    <BodyContent>
      <HeaderSell
        title='General Preferences'
        breadcrums={[
          { label: 'Home', href: '/', active: false },
          { label: 'Organization Settings', href: '#', active: false },
          { label: 'Organization', href: '#', active: true },
        ]}
      >
        <GroupTab fontSize='lg' spacing='md' horizontalSpacing='none'>
          <Tab
            text='Overview'
            onFocus={() => {
              setLoad(true);
              setTab(0);
              setTimeout(() => {
                setLoad(false);
              }, 1500);
            }}
          />
          <Tab
            text='Security'
            onFocus={() => {
              setLoad(true);
              setTab(1);
              setTimeout(() => {
                setLoad(false);
              }, 1500);
            }}
          />
          <Tab
            text='Brand Localization'
            onFocus={() => {
              setLoad(true);
              setTab(2);
              setTimeout(() => {
                setLoad(false);
              }, 1500);
            }}
          />
        </GroupTab>
      </HeaderSell>

      <Container top='md' style={{ height: '75vh', overflow: 'auto' }}>
        <Grid expanded style={{ background: 'transparent' }}>
          <Row>
            <Column lg={tab === 1 ? 6 : 8} md={12} sm={12} xs={12}>
              <Container
                horizontal='none'
                className='overflow'
                expandVertical
                style={{ backgroundColor: colors.background }}
              >
                <Container vertical='md' style={{ overflow: 'hidden' }}>
                  {tab === 0 && <Overview load={load} />}
                  {tab === 1 && <Security load={load} />}
                  {tab === 2 && <BrandLocalization load={load} />}
                </Container>
              </Container>
            </Column>
            <Column lg={4} md={12} sm={12}>
              <Hideable visibleOn='sm'>
                <Spacer size='lg' />
              </Hideable>
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
      </Container>
    </BodyContent>
  );
};
export default GeneralPreferences;
