import { Switch, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BiddingTelco from './pages/BiddingTelco/BiddingTelco';
import Buy from './pages/BiddingTelco/Buy';
import Shop from './pages/Shop/Shop';
import GraphsPage from './pages/GraphsPage/GraphsPage';
import BiddingB2B from './pages/BiddingB2B/BiddingB2B';
import UserList from './pages/UserList/UserList';
import { Menu, Body, Navbar, MobileNavbar } from './components/layout';
import { AppProvider } from './providers';
import UserManagement from './pages/UserManagement/UserManagement';
import GeneralPreferences from './pages/GeneralPreferences/GeneralPreferences';
import PermissionManagement from './pages/PermissionManagement/PermissionManagement';
import Infrastructure from './pages/Infrastructure/Infrastructure';
import LocationManagement from './pages/LocationManagement/LocationManagement';
import Generic from './pages/Generic/Generic';
import BillingSubscriptions from './pages/BillingSubscriptions/BillingSubscriptions';
import { Hideable } from '@jp-olvera/jp-viaducto-components';

function App() {
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100vh',
          }}
        >
          <div
            style={{
              width: '100%',
              height: 'calc(100% - 50px)',
              position: 'relative',
              flexGrow: 1,
              flexBasis: 'calc(100% - 50px)',
            }}
          >
            <Menu />

            <Body>
              <Hideable visibleOn='sm' after={true}>
                <Navbar />
              </Hideable>
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
                <Route path='/profile/billing' exact>
                  <BillingSubscriptions />
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
          <Hideable visibleOn='sm' after={false}>
            <MobileNavbar />
          </Hideable>
        </div>
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;
