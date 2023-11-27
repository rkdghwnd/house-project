import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reduxToolkitStore from '../reduxToolkitStore.js';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={reduxToolkitStore}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
