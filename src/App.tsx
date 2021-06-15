import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BiddingTelco from './pages/BiddingTelco/BiddingTelco';
import BiddingB2B from './pages/BiddingB2B/BiddingB2B';
import { Menu, Body, Navbar } from './components/layout';

function App() {
  return (
    <div className='wrapper'>
      <Menu />
      <Body>
        <Navbar />
        <Router>
          <Switch>
            <Route path='/b2b' exact>
              <BiddingB2B />
            </Route>
            <Route path='/'>
              <BiddingTelco />
            </Route>
          </Switch>
        </Router>
      </Body>
    </div>
  );
}

export default App;
