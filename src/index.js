import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NotificationProvider } from './Notifications';

import CustomNotification from './CustomNotification';
import './index.css';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <NotificationProvider
    limit={3}
    duration={3000}
    CustomComponent={CustomNotification}
  >
    <App />
  </NotificationProvider>,
  document.getElementById('root'),
);
