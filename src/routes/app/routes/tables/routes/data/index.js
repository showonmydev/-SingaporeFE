import DataTables from './components/DataTables';

export default {
  path: 'data',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, DataTables);
    });
  }
};
