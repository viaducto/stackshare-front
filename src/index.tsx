import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from '@jp-olvera/jp-viaducto-components'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
