import IconBoxes from './components/IconBoxes';

export default {
  path: 'icon-boxes',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, IconBoxes);
    });
  }
};
