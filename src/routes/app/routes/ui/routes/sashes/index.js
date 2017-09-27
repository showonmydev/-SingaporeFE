import Sashes from './components/Sashes';

export default {
  path: 'sashes',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Sashes);
    });
  }
};
