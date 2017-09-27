import Terms from './components/Terms';

export default {
  path: 'terms',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Terms);
    });
  }
};
