import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from '@jp-olvera/jp-viaducto-components'
import App from './App'
import { GlobalStyle } from './utils/global'

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <GlobalStyle />
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
