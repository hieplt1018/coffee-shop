import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './store';
import { positions, transitions, Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './coffee-shop.css';

const options = {
  timeout: 2000,
  positions: positions.TOP_RIGHT,
  transitions: transitions.SCALE
}

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store} >
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>
);
