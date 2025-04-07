import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';      // ✅ Must match filename and location
import './index.css';
import { FormspreeProvider } from '@formspree/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormspreeProvider project="yourProjectID">
      <App />
    </FormspreeProvider>
  </React.StrictMode>
)
