import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './index.css';

const CustomNotification = (props) => {
  const {
    type,
    onRemove,
    progress,
  } = props;

  return (
    <div className={`custom-notification custom-notification--${type}`}>
      Custom Notification Component
      <button
        type="button"
        className="custom-notification__button"
        onClick={onRemove}
      >
        Close
      </button>

      <div
        className="custom-notification__progress"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

CustomNotification.propTypes = {
  type: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
};

export default memo(CustomNotification);
