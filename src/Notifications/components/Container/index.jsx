import React, { memo, useReducer } from 'react';
import { createPortal } from 'react-dom';

import { reducer, initialState } from '../../reducer';

import './index.css';

const Container = () => {
  const [state] = useReducer(reducer, initialState);

  return (createPortal(
    <div className="notification-container">
      {
        state.notifications.map((item) => (
          <div>
            {item}
          </div>
        ))
      }
    </div>,
    document.body,
  ));
};

export default memo(Container);
