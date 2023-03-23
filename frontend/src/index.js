import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './store';
import { ToastContainer } from 'react-toastify';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './coffee-shop.css';
import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store} >
    <App />
    <ToastContainer />
  </Provider>
);
