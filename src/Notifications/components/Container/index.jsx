import React, { memo, useContext, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import Notification from '../Notification';
import { REMOVE } from '../../constants';
import { ReducerContext } from '../../context';

import './index.css';

const Container = (props) => {
  const {
    showProgress,
    duration,
  } = props;

  const [state, dispatch] = useContext(ReducerContext);

  const onRemove = useCallback(
    (id) => dispatch({
      type: REMOVE,
      payload: id,
    }),
    [dispatch],
  );

  return (createPortal(
    <div className="notification-container">
      {
        state.notifications.map((item) => (
          <Notification
            key={item.id}
            text={item.text}
            id={item.id}
            type={item.type}
            duration={duration}
            showProgress={showProgress}
            onRemove={onRemove}
          />
        ))
      }
    </div>,
    document.body,
  ));
};

Container.propTypes = {
  showProgress: PropTypes.bool,
  duration: PropTypes.number,
};

export default memo(Container);
