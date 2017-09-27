import endpoints from 'redux/apiEndpoints';
import { get, post } from 'redux/fetch';

export const signin = payload => post(endpoints.signin(), { requestBody: payload });

export const signup = payload => post(endpoints.signup(), { requestBody: payload });

export const signupVerify = token => post(endpoints.signupVerify(), { requestBody: { token } });

export const sendResetPasswordLink = email => post(endpoints.sendResetPasswordLink(), { requestBody: { email } });

export const resetPassword = payload => post(endpoints.resetPassword(), { requestBody: payload });
