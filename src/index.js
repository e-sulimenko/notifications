import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NotificationProvider } from './Notifications';

import './index.css';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <NotificationProvider>
    <App />
  </NotificationProvider>,
  document.getElementById('root'),
);
