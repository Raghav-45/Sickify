import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ContextProvider from './contexts/ContextApi'
// import ContextProvider from 'contexts/ContextApi'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
