// imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../scss-css/stylesheet.scss"
// Grabs the root div
const RootDiv = document.getElementById('root');
// Creates a new instance of the application
const app = new App();
/**
 * creates the Dom using the RootDiv
 * renders the app using StrictMode
 */
ReactDOM.createRoot(RootDiv as HTMLElement).render(
  <React.StrictMode>
    <app.render />
  </React.StrictMode>,
);