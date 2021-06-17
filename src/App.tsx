import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BiddingTelco from './pages/BiddingTelco/BiddingTelco';
import Buy from './pages/BiddingTelco/Buy';
import Shop from './pages/Shop/Shop';
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
  );
}

export default App;
