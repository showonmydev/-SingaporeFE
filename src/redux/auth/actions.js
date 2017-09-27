import { createAction } from 'redux-actions';
import { createApiAction } from 'redux/redux-api-actions';

import {
  SIGNIN,
  SIGNOUT,
  SIGNUP,
  SIGNUP_VERIFY,
  SEND_RESET_PASSWORD_LINK,
  RESET_PASSWORD,
  RESET,
} from '../constants';
import * as authApi from './api';

export const signin = createApiAction(SIGNIN, authApi.signin);
export const signup = createApiAction(SIGNUP, authApi.signup);
export const signupVerify = createApiAction(SIGNUP_VERIFY, authApi.signupVerify);
export const sendResetPasswordLink = createApiAction(SEND_RESET_PASSWORD_LINK, authApi.sendResetPasswordLink);
export const resetPassword = createApiAction(RESET_PASSWORD, authApi.resetPassword);
export const signout = createAction(SIGNOUT);
export const reset = createAction(RESET);
