import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <HashRouter basename="/">
      <ScrollToTop/>
      <App />
    </HashRouter>
  </React.StrictMode>
);


reportWebVitals();
