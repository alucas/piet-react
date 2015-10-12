import 'babel-core/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import App from './js/component/App.react';
import store from './js/store/store';

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './stylesheet/style.scss';

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('pietApp')
);
