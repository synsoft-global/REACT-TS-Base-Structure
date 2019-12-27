/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

