import { fromJS } from 'immutable';
import generateHandleActions from 'redux/state-handler';
import {
  SIGNIN,
  SIGNOUT,
  SIGNUP,
  SIGNUP_VERIFY,
  SEND_RESET_PASSWORD_LINK,
  RESET_PASSWORD,
} from 'redux/constants';

const apiStates = [
  { type: SIGNIN, name: 'user' },
  { type: SIGNUP, name: 'user' },
  { type: SIGNUP_VERIFY, name: 'user' },
  { type: SEND_RESET_PASSWORD_LINK, name: 'reset-password' },
  { type: RESET_PASSWORD, name: 'user' },
];
const instantStates = [
  { type: SIGNOUT, name: 'user', kind: 'object' },
];
const storage = {
  user: 'AuthInfo'
};

export default generateHandleActions({ apiStates, instantStates, storage });
