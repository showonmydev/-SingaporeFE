import SignUp from './components/SignUp';

export default {
  path: 'sign-up',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, SignUp);
    });
  }
};
