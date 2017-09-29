import Packs from './components/packs';

export default {
  path: 'packs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Packs);
    });
  }
};
