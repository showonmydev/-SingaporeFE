import components from './routes/components';
import layouts from './routes/layouts';
import steppers from './routes/steppers';

export default {
  path: 'form',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        components,
        layouts,
        steppers,
      ]);
    });
  }
};
