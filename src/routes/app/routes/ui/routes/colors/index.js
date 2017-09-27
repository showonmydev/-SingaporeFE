import Colors from './components/Colors';

export default {
  path: 'colors',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Colors);
    });
  }
};
