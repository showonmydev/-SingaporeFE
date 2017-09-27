import Scatter from './components/Scatter';

export default {
  path: 'Scatter',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Scatter);
    });
  }
};
