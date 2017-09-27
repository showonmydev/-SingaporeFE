import Login from './components/Login';

export default {
  path: 'login',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Login);
    });
  }
};
