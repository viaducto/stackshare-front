import React, { useContext, useEffect } from 'react';
import { ConfigContext } from '@jp-olvera/jp-viaducto-components';
import { Switch, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BiddingTelco from './pages/BiddingTelco/BiddingTelco';
import Buy from './pages/BiddingTelco/Buy';
import Shop from './pages/Shop/Shop';
import GraphsPage from './pages/GraphsPage/GraphsPage';
import BiddingB2B from './pages/BiddingB2B/BiddingB2B';
import UserList from './pages/UserList/UserList';
import { Menu, Body, Navbar } from './components/layout';
import { AppProvider } from './providers';
import UserManagement from './pages/UserManagement/UserManagement';
import GeneralPreferences from './pages/GeneralPreferences/GeneralPreferences';
import PermissionManagement from './pages/PermissionManagement/PermissionManagement';
import Infrastructure from './pages/Infrastructure/Infrastructure';
import LocationManagement from './pages/LocationManagement/LocationManagement';
import Generic from './pages/Generic/Generic';

function App() {
  const { updateConfig, configuration } = useContext(ConfigContext);

  useEffect(() => {
    const myConfig = {
      colors: {
        ...configuration.colors,
        primary: {
          default: '#1890FF',
          hover: '#40A9FF',
          click: '#096DD9',
          text: '#fff',
          shadow: 'rgba(24, 144, 255, 0.3)',
        },
        success: {
          default: '#52C41A',
          hover: '#73D13D',
          click: '#B7EB8F',
          text: '#fff',
          shadow: 'rgba(82, 196, 26, 0.3)',
        },
        warning: {
          default: '#FAAD14',
          hover: '#FFC53D',
          click: '#FFE58F',
          text: '#fff',
          shadow: 'rgba(250, 173, 20, 0.3)',
        },
        danger: {
          default: '#F5222D',
          hover: '#FF4D4F',
          click: '#FFA39E',
          text: '#fff',
          shadow: 'rgba(245, 34, 45, 0.3)',
        },
      },
      drawerSizes: {
        sm: '28.563rem',
        md: '53rem',
        lg: '64rem',
      },
    };
    if (updateConfig !== undefined) {
      updateConfig(myConfig);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HelmetProvider>
      <AppProvider>
        <Helmet>
          <title>Stackshare</title>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <link
            href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap'
            rel='stylesheet'
          />
        </Helmet>
        <div className='wrapper'>
          <Menu />
          <Body>
            <Navbar />
            <Switch>
              <Route path='/b2b' exact>
                <BiddingB2B />
              </Route>
              <Route path='/buy' exact>
                <Buy />
              </Route>
              <Route path='/shop' exact>
                <Shop />
              </Route>
              <Route path='/graphs' exact>
                <GraphsPage />
              </Route>
              <Route path='/user-list' exact>
                <UserList />
              </Route>
              <Route path='/organization/:id/manage' exact>
                <GeneralPreferences />
              </Route>
              <Route path='/organization/:id/permissions' exact>
                <PermissionManagement />
              </Route>
              <Route path='/organization/:id/infrastructure' exact>
                <Infrastructure />
              </Route>
              <Route path='/organization/:id/user-management' exact>
                <UserManagement />
              </Route>
              <Route path='/location-management' exact>
                <LocationManagement />
              </Route>
              <Route path='/sell' exact>
                <BiddingTelco />
              </Route>
              <Route path='/'>
                <Generic />
              </Route>
            </Switch>
          </Body>
        </div>
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;
