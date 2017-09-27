import More from './components/More';

export default {
  path: 'more',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, More);
    });
  }
};
