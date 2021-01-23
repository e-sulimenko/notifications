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

import { animateLeftIn, animateLeftOut } from '../../animations';

import './index.css';

const Notification = (props) => {
  const {
    text,
    onRemove,
    id,
    type,
    duration,
    showProgress,
  } = props;

  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(duration);

  const notifyRef = useRef(null);

  useEffect(
    () => () => {
      if (intervalId != null) clearInterval(intervalId);
    },
    [intervalId],
  );

  const onRemoveNotify = useCallback(
    () => onRemove(id),
    [id, onRemove],
  );

  const startTimer = useCallback(
    () => {
      const intId = setInterval(
        () => setTimeLeft((val) => {
          const next = val - 30;
          if (next <= 0) {
            const animation = animateLeftOut(notifyRef.current);
            animation.onfinish = onRemoveNotify;
            clearInterval(intId);
          }
          return next;
        }),
        30,
      );
      setIntervalId(intId);
    },
    [
      notifyRef,
      onRemoveNotify,
    ],
  );

  const stopTimer = useCallback(
    () => clearInterval(intervalId),
    [intervalId],
  );

  useEffect(
    () => {
      if (notifyRef && notifyRef.current) {
        const animation = animateLeftIn(notifyRef.current);
        animation.onfinish = startTimer;
      }
    },
    [notifyRef, startTimer],
  );

  const icon = useMemo(
    () => {
      if (type === 'error') return <CrossSvg />;
      if (type === 'success') return <CheckSvg id={id} />;
      return <InfoSvg />;
    },
    [type, id],
  );

  const onClickNotify = useCallback(
    () => {
      const animation = animateLeftOut(notifyRef.current);
      animation.onfinish = onRemoveNotify;
      clearInterval(intervalId);
    },
    [
      notifyRef,
      intervalId,
      onRemoveNotify,
    ],
  );

  return (
    <div className="notification-item-container" ref={notifyRef}>
      <div
        aria-hidden="true"
        className={`notification-item notification-item--${type}`}
        onMouseEnter={stopTimer}
        onMouseLeave={startTimer}
        onClick={onClickNotify}
      >
        <div className="notification-item__icon">
          {icon}
        </div>
        {text}
        {
          showProgress && (
            <div
              className="notification-item__progress"
              style={{
                width: `${(timeLeft / duration) * 100}%`,
              }}
            />
          )
        }
      </div>
    </div>
  );
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  showProgress: PropTypes.bool.isRequired,
};

export default memo(Notification);
