import Components from './components/Components';

export default {
  path: 'components',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Components);
    });
  }
};
