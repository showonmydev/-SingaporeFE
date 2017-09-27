import FeatureCallouts from './components/FeatureCallouts';

export default {
  path: 'feature-callouts',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, FeatureCallouts);
    });
  }
};
