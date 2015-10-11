import { createStore } from 'redux';
import appReducer from './appReducer';

const store = createStore(appReducer);

if (module.hot) {
  module.hot.accept('./appReducer', () => {
    store.replaceReducer(require('./appReducer'));
  });
}

export default store;
