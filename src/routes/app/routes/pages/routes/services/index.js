import Services from './components/Services';

export default {
  path: 'services',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Services);
    });
  }
};
