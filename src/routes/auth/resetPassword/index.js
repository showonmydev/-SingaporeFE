import ResetPassword from './components/ResetPassword';

export default {
  path: 'reset-password/:token',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ResetPassword);
    });
  }
};
