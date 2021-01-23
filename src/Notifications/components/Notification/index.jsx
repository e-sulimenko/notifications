import React, {
  memo,
  useEffect,
  useState,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

import CrossSvg from '../Svg/CrossSvg';
import CheckSvg from '../Svg/CheckSvg';
import InfoSvg from '../Svg/InfoSvg';

import { animateLeftIn } from '../../animations';

import './index.css';

const Notification = (props) => {
  const {
    text,
    onRemove,
    id,
    type,
  } = props;

  const [timerId, setTimerId] = useState(null);

  const notifyRef = useRef(null);

  useEffect(
    () => {
      if (notifyRef && notifyRef.current) {
        animateLeftIn(notifyRef.current);
      }
    },
    [notifyRef],
  );

  const onClick = useCallback(
    () => onRemove(id),
    [id, onRemove],
  );

  const icon = useMemo(
    () => {
      if (type === 'error') return <CrossSvg />;
      if (type === 'success') return <CheckSvg id={id} />;
      return <InfoSvg />;
    },
    [type, id],
  );

  return (
    <div
      aria-hidden="true"
      className={`notification-item notification-item--${type}`}
      ref={notifyRef}
      onClick={onClick}
    >
      <div className="notification-item__icon">
        {icon}
      </div>
      {text}
    </div>
  );
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default memo(Notification);
