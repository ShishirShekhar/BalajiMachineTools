import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Analytics } from "@vercel/analytics/react";

// Get the root element to render the app
const rootElement = document.getElementById('root');

// Render the app inside a StrictMode component
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);

// Measure and report web vitals (performance metrics)
reportWebVitals(console.log);
