import 'babel-core/polyfill';

import React from 'react';
import PietApp from './component/PietApp.react';

React.render(
  <PietApp />,
  document.getElementById('pietApp')
);
