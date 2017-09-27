import Typography from './components/Typography';

export default {
  path: 'typography',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Typography);
    });
  }
};
