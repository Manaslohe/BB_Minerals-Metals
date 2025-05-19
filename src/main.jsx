import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initGA } from './utils/analytics.js'

// Initialize Google Analytics - Replace with your GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; 
window.gaId = GA_MEASUREMENT_ID;

// Only initialize in production or when not in development
if (import.meta.env.PROD) {
  initGA(GA_MEASUREMENT_ID);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
