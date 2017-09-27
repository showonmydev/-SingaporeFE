import ResponsiveTables from './components/ResponsiveTables';

export default {
  path: 'responsive',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ResponsiveTables);
    });
  }
};
