import Singles from './components/singles';

export default {
  path: 'singles',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Singles);
    });
  }
};
