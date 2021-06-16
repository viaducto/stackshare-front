import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BiddingTelco from './pages/BiddingTelco/BiddingTelco';
import Buy from './pages/BiddingTelco/Buy';
import BiddingB2B from './pages/BiddingB2B/BiddingB2B';
import { Menu, Body, Navbar } from './components/layout';

function App() {
  return (
    <div className='wrapper'>
      <Menu />
      <Body>
        <Navbar />
        <Switch>
          <Route path='/b2b' exact>
            <BiddingB2B />
          </Route>
          <Route path='/buy'>
            <Buy />
          </Route>
          <Route path='/'>
            <BiddingTelco />
          </Route>
        </Switch>
      </Body>
    </div>
  );
}

export default App;
