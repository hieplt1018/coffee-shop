import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { Provider } from 'react-redux'
import store from './store';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
  <Provider store={store} >
    <App />

  </Provider>
);
