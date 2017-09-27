import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import { fromJS } from 'immutable';
import auth from './auth/reducer';
import ui from './ui/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  ui,
});

export default rootReducer;

/*
export default function createReducer() {
  return function applicationReducer(state, action) {
    return rootReducer(state, action);
  };
}
*/
