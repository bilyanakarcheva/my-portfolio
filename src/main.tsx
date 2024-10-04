import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

import '@fontsource/outfit'
import '@fontsource/roboto'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </BrowserRouter> 
)
