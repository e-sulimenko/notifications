import React, {
  createContext,
  useReducer,
  useMemo,
  memo,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { reducer, initialState } from '../../reducer';
import Container from '../Container';

export const ReducerContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    () => {
      console.info(`REDUCER_STATE::${JSON.stringify(state)}`);
    },
    [state],
  );

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
