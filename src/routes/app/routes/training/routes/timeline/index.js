import Timeline from './components/Timeline';

export default {
  path: 'timeline',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Timeline);
    });
  }
};
