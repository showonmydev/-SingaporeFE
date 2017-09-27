import About from './components/About';

export default {
  path: 'about',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, About);
    });
  }
};
