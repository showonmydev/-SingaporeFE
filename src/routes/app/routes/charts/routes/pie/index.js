import Pie from './components/Pie';

export default {
  path: 'pie',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Pie);
    });
  }
};
