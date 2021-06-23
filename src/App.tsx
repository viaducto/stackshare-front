import React, { useContext, useEffect } from 'react';
import { ConfigContext } from '@jp-olvera/jp-viaducto-components';
import { Switch, Route } from 'react-router-dom';
import BiddingTelco from './pages/BiddingTelco/BiddingTelco';
import Buy from './pages/BiddingTelco/Buy';
import Shop from './pages/Shop/Shop';
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
    <AppProvider>
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
            <Route path='/' exact>
              <BiddingTelco />
            </Route>
          </Switch>
        </Body>
      </div>
    </AppProvider>
  );
}

export default App;
