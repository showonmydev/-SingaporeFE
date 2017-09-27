import centered from './routes/centered';
import fullWidth from './routes/fullWidth';

export default {
  path: 'pglayout',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        centered,
        fullWidth,
      ]);
    });
  }
};
