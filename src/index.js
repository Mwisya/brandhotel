import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RoomsProvider } from './contextApi/roomsContext';
import { ReactHelmetProvider } from './contextApi/ReactHelmetContext';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/brandhotel">
    <ScrollToTop/>
      <RoomsProvider>
        <ReactHelmetProvider>
          <App/>
        </ReactHelmetProvider>
      </RoomsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
