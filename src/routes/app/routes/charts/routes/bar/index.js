import Bar from './components/Bar';

export default {
  path: 'bar',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Bar);
    });
  }
};
