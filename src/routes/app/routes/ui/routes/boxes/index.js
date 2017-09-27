import Boxes from './components/Boxes';

export default {
  path: 'boxes',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Boxes);
    });
  }
};
