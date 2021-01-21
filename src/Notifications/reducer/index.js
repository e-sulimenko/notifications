import { ADD, REMOVE } from '../constants';

export const initialState = { notifications: [] };

const HANDLERS = {
  [ADD]: (state, payload) => ({
    notifications: [...state.notifications, payload],
  }),
  [REMOVE]: (state, payload) => ({
    notifications: state.notifications.filter(({ id }) => id !== payload),
  }),
};

export const reducer = (state, action) => {
  console.info(`REDUCER::${action.type}::${JSON.stringify(action.payload)}`);
  return HANDLERS[action.type](state, action.payload);
};
