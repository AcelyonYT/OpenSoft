import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../scss/stylesheet.scss'
const RootDiv = document.getElementById('root');
ReactDOM.createRoot(RootDiv as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);