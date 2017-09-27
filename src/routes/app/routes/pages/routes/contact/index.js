import Contact from './components/Contact';

export default {
  path: 'contact',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Contact);
    });
  }
};
