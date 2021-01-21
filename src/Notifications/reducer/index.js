import { ADD } from '../constants';

export const initialState = { notifications: [] };

const HANDLERS = {
  [ADD]: (state, payload) => ({
    notifications: [...state.notifications, payload],
  }),
};

export const reducer = (state, action) => {
  console.info(`REDUCER::${action.type}::${action.payload}`);
  return HANDLERS[action.type](state, action.payload);
};
