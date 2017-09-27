import ENV_DEV from '../../.env';
import ENV_PROD from '../../.env.prod';

const ENV = process.env.NODE_ENV !== 'production' ? ENV_DEV : ENV_PROD;

process.env = {
  ...process.env,
  ...(ENV),
};

export const apiBaseRoute = process.env.API_BASE_URL;

export default {
  //---------------------------------------------------------------------------------

  // /api/auth/signin
  signin: () =>
    `${apiBaseRoute}/auth/signin`,

  // /api/auth/signup
  signup: () =>
    `${apiBaseRoute}/auth/signup`,

  // /api/auth/signup-verify
  signupVerify: () =>
    `${apiBaseRoute}/auth/signup-verify`,

  // /api/auth/send-reset-password-link
  sendResetPasswordLink: () =>
    `${apiBaseRoute}/auth/send-reset-password-link`,

  // /api/auth/reset-password
  resetPassword: () =>
    `${apiBaseRoute}/auth/reset-password`
};
