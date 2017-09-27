import Radar from './components/Radar';

export default {
  path: 'radar',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Radar);
    });
  }
};
