import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './i18n/init' // This imports and initializes i18n from the correct location
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)