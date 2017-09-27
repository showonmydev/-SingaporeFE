import Steppers from './components/Steppers';

export default {
  path: 'steppers',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Steppers);
    });
  }
};
