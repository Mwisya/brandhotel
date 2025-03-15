import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RoomsProvider } from './contextApi/roomsContext';
import { HashRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename="/brandhotel">
      <RoomsProvider>
        <App/>
      </RoomsProvider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
