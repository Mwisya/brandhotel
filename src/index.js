import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { RoomsProvider } from './contextApi/roomsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <HashRouter basename="/">
      <ScrollToTop/>
        <RoomsProvider>
          <App />
        </RoomsProvider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
