import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import '@isfco/evercheck-ui/lib/styles.css';
import './index.css';

import { App } from './containers';

const { REACT_APP_URL_BASE = '/' } = process.env;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={REACT_APP_URL_BASE}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
