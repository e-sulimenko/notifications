import { useCallback, useContext } from 'react';

import { ADD } from '../constants';
import { ReducerContext } from '../context';

export const useNotify = () => {
  const [, dispatch] = useContext(ReducerContext);

  return useCallback(
    (data) => {
      const payload = {
        id: Date.now(),
        text: '',
        type: 'default',
      };

      if (typeof data === 'object') {
        payload.text = data.text;
        payload.type = data.type;
      } else {
        payload.text = data;
      }
      dispatch({ type: ADD, payload });
    },
    [dispatch],
  );
};
