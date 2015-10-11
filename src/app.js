import 'babel-core/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import App from './js/component/App.react';
import store from './js/store/store';

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('pietApp')
);
