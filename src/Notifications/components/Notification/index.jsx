import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Notification = ({ text, onRemove }) => {
  return (
    <div
      aria-hidden="true"
      className="notification-item"
      onClick={onRemove}
    >
      {text}
    </div>
  );
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default memo(Notification);
