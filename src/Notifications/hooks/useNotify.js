import { useCallback, useContext } from 'react';

import { ADD } from '../constants';
import { ReducerContext } from '../context';

export const useNotify = () => {
  const [, dispatch] = useContext(ReducerContext);

  return useCallback(
    (text) => {
      dispatch({
        type: ADD,
        payload: {
          id: Date.now(),
          text,
        },
      });
    },
    [dispatch],
  );
};
