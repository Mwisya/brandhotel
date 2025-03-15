import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RoomsProvider } from './contextApi/roomsContext';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="brandhotel">
      <RoomsProvider>
        <App/>
      </RoomsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
