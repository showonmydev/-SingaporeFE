import Feed from './components/Feed';

export default {
  path: 'feed',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Feed);
    });
  }
};
