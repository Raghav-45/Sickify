import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SearchPage from './SearchPage'
import './index.css'
import ContextProvider from './contexts/ContextApi'
import Layout from './components/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Layout>
        <App />
      </Layout>
    </ContextProvider>
  </React.StrictMode>,
)
