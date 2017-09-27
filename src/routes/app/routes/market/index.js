import Market from './components/Market';

export default {
  path: 'market',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Market);
    });
  }
};
