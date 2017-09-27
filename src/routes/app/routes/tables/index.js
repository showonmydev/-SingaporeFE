import data from './routes/data';
import responsive from './routes/responsive';
import staticTable from './routes/static';

export default {
  path: 'table',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        data,
        responsive,
        staticTable,
      ]);
    });
  }
};
