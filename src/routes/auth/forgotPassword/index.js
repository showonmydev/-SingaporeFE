import ForgotPassword from './components/ForgotPassword';

export default {
  path: 'forgot-password',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ForgotPassword);
    });
  }
};
