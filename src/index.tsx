import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from '@jp-olvera/jp-viaducto-components';
import App from './App';
import { GlobalStyle } from './utils/global';
import { StackShareThemeProvider } from './providers';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <StackShareThemeProvider>
        <GlobalStyle />
        <Router>
          <App />
        </Router>
      </StackShareThemeProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
