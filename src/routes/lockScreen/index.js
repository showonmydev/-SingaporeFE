import LockScreen from './components/LockScreen';

export default {
  path: 'lock-screen',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, LockScreen);
    });
  }
};
