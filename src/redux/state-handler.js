import { fromJS } from 'immutable';
import { handleActions, combineActions } from 'redux-actions';
import { apiTypes } from './redux-api-actions';
import {
  RESET
} from './constants';

const storeMemory = (storage, name, data) => {
  if (storage[name]) {
    memoryDB[storage[name]] = JSON.stringify({ data });
  }
};

const loadMemory = (storage, name, defaultValue) => (
  storage[name] ? (JSON.parse(memoryDB[storage[name]] || '{}').data || defaultValue) : defaultValue
);

const defaultObject = {
  requesting: false,
  error: {},
  data: {}
};

const apiStateHandlers = (states, storage) => {
  let actionHandlers = {};
  let initialState = {};
  states.forEach((state) => {
    const { type, name } = state;
    const types = apiTypes(type);
    actionHandlers = {
      ...actionHandlers,
      [types[0]]: (state) => {
        storeMemory(storage, name, {});
        return state.set(name, fromJS({
          ...defaultObject,
          requesting: true,
        }));
      },
      [types[1]]: (state, action) => {
        storeMemory(storage, name, action.payload);
        return state
          .setIn([name, 'requesting'], false)
          .setIn([name, 'data'], fromJS(action.payload));
      },
      [types[2]]: (state, action) => state
        .setIn([name, 'requesting'], false)
        .setIn([name, 'error'], fromJS(action.payload))
    };
    initialState = {
      ...initialState,
      [name]: {
        ...defaultObject,
        data: loadMemory(storage, name, {})
      }
    };
  });
  actionHandlers[RESET] = (state, { payload: object }) => {
    if (!state.get(object)) return state;
    storeMemory(storage, name, {});
    return state.set(object, fromJS(defaultObject));
  };
  return { actionHandlers, initialState };
};

const instantStateHandlers = (states, storage) => {
  const actionHandlers = {};
  const initialState = {};
  states.forEach((state) => {
    const { type, name, field, kind } = state;
    const defaultValue = kind === 'object' ? { ...defaultObject, data: state.defaultValue || defaultObject.data } : state.defaultValue;
    actionHandlers[type] = (state, action) => {
      const value = (field ? action.payload[field] : action.payload) || defaultValue;
      const memoryValue = kind === 'object' ? value.data : value;
      storeMemory(storage, name, memoryValue);
      if (kind === 'object') {
        return state.set(name, fromJS(value));
      }
      return state.set(name, value);
    };
    const memoryValue = loadMemory(storage, name, defaultValue);
    if (kind === 'object') {
      initialState[name] = {
        ...defaultObject,
        data: memoryValue
      };
    } else {
      initialState[name] = memoryValue;
    }
  });
  return { actionHandlers, initialState };
};

const generateHandleActions = ({ apiStates, instantStates, storage = {} }) => {
  const apiHandlers = apiStateHandlers(apiStates, storage);
  const instantHandlers = instantStateHandlers(instantStates, storage);
  return handleActions({
    ...apiHandlers.actionHandlers,
    ...instantHandlers.actionHandlers,
  }, fromJS({
    ...apiHandlers.initialState,
    ...instantHandlers.initialState,
  }));
};

export default generateHandleActions;
