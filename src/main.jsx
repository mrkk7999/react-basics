import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FuncComponent from './components/func.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FuncComponent />
  </React.StrictMode>,
)
