import Hover from './components/Hover';

export default {
  path: 'hover',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Hover);
    });
  }
};
