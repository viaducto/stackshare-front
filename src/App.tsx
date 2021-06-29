import React, { useContext, useEffect } from 'react';
import { ConfigContext } from '@jp-olvera/jp-viaducto-components';
import { Switch, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BiddingTelco from './pages/BiddingTelco/BiddingTelco';
import Buy from './pages/BiddingTelco/Buy';
import Shop from './pages/Shop/Shop';
import GraphsPage from './pages/GraphsPage/GraphsPage';
import BiddingB2B from './pages/BiddingB2B/BiddingB2B';
import { Menu, Body, Navbar } from './components/layout';
import { AppProvider } from './providers';

function App() {
  const { updateConfig, configuration } = useContext(ConfigContext);

  const myConfig = {
    controlHeight: {
      xsmall: '1.2rem',
      small: '2.074rem',
      default: '2rem',
      large: '2.986rem',
    },
    colors: {
      ...configuration.colors,
      primary: {
        default: '#096DD9',
        hover: '#0254ac',
        click: '#096dd9bc',
        text: '#fff',
        shadow: 'rgba(9, 109, 217, 0.53)',
      },
    },
  };
  useEffect(() => {
    updateConfig(myConfig);
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
              <Route path='/' exact>
                <BiddingTelco />
              </Route>
            </Switch>
          </Body>
        </div>
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;
