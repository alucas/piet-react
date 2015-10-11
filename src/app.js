import 'babel-core/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import App from './js/component/App.react';
import store from './js/store/store';

import './stylesheet/style.css';

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('pietApp')
);
