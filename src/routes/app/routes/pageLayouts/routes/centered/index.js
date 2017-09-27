import Centered from './components/Centered';

export default {
  path: 'centered',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Centered);
    });
  }
};
