import TimelinePage from './components/Timeline';

export default {
  path: 'timeline',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, TimelinePage);
    });
  }
};
