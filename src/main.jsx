import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
// Supports weights 300-800
import '@fontsource-variable/open-sans';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
