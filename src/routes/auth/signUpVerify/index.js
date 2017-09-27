import SignUpVerify from './components/SignUpVerify';

export default {
  path: 'sign-up/verify-email/:token',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, SignUpVerify);
    });
  }
};
