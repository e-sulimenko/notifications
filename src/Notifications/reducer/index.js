import { ADD, REMOVE } from '../constants';

export const initialState = { notifications: [], limit: 0, buffer: [] };

const HANDLERS = {
  [ADD]: (state, payload) => {
    const {
      limit,
      notifications,
      buffer,
    } = state;
    const newBuffer = [...buffer];
    const newNotifications = [...notifications];
    if (limit > 0 && notifications.length >= limit) {
      newBuffer.push(payload);
    } else {
      newNotifications.push(payload);
    }

    return ({
      ...state,
      notifications: newNotifications,
      buffer: newBuffer,
    });
  },
  [REMOVE]: (state, payload) => {
    const {
      notifications,
      buffer,
    } = state;
    const newNotifications = notifications.filter(({ id }) => id !== payload);
    const newBuffer = [...buffer];
    if (newBuffer.length !== 0) {
      newNotifications.push(newBuffer[0]);
      newBuffer.splice(0, 1);
    }
    return ({
      ...state,
      notifications: newNotifications,
      buffer: newBuffer,
    });
  },
};

export const reducer = (state, action) => {
  console.info(`REDUCER::${action.type}::${JSON.stringify(action.payload)}`);
  return HANDLERS[action.type](state, action.payload);
};
