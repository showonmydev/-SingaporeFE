import Grids from './components/Grids';

export default {
  path: 'grids',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Grids);
    });
  }
};
