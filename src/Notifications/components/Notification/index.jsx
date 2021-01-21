import React, { memo, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const Notification = (props) => {
  const {
    text,
    onRemove,
    id,
  } = props;

  const onClick = useCallback(
    () => onRemove(id),
    [id, onRemove],
  );

  return (
    <div
      aria-hidden="true"
      className="notification-item"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default memo(Notification);
