import Menus from './components/Menus';

export default {
  path: 'menus',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Menus);
    });
  }
};
