import React, {
  useReducer,
  useMemo,
  memo,
} from 'react';
import PropTypes from 'prop-types';

import { reducer, initialState } from '../../reducer';
import Container from '../Container';
import { ReducerContext } from '../../context';

export const NotificationProvider = (props) => {
  const {
    children,
    showProgress,
    duration,
    limit,
    CustomComponent,
  } = props;
  const [state, dispatch] = useReducer(reducer, { ...initialState, limit });

  const value = useMemo(
    () => [state, dispatch],
    [state, dispatch],
  );

  return (
    <ReducerContext.Provider value={value}>
      {children}
      <Container
        showProgress={showProgress}
        duration={duration}
        CustomComponent={CustomComponent}
      />
    </ReducerContext.Provider>
  );
};

NotificationProvider.defaultProps = {
  showProgress: true,
  duration: 5000,
  limit: 0,
  CustomComponent: null,
};

NotificationProvider.propTypes = {
  children: PropTypes.element.isRequired,
  showProgress: PropTypes.bool,
  duration: PropTypes.number,
  limit: PropTypes.number,
  CustomComponent: PropTypes.instanceOf(Object),
};

export default memo(NotificationProvider);
