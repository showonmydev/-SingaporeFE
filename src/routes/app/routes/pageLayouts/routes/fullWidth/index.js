import FullWidth from './components/FullWidth';

export default {
  path: 'full-width',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, FullWidth);
    });
  }
};
