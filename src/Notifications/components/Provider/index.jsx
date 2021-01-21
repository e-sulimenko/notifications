import React, {
  useReducer,
  useMemo,
  memo,
} from 'react';
import PropTypes from 'prop-types';

import { reducer, initialState } from '../../reducer';
import Container from '../Container';
import { ReducerContext } from '../../context';

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(
    () => [state, dispatch],
    [state, dispatch],
  );

  return (
    <ReducerContext.Provider value={value}>
      {children}
      <Container />
    </ReducerContext.Provider>
  );
};

NotificationProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default memo(NotificationProvider);
