import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components';
import './index.css';

const { REACT_APP_URL_BASE = '/' } = process.env;

ReactDOM.render(
  <BrowserRouter basename={REACT_APP_URL_BASE}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
