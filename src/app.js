import 'babel-core/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import App from './component/App.react';
import store from './store/store';

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('pietApp')
);
