import StaticTables from './components/StaticTables';

export default {
  path: 'static',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, StaticTables);
    });
  }
};
