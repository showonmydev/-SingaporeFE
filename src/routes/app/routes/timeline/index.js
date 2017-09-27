import Timeline from './components/Timeline';

export default {
  path: '/app/training/timeline',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Timeline);
    });
  }
};
