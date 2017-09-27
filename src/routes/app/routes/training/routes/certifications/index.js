import certifications from './components/certifications';

export default {
  path: 'certifications',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, certifications);
    });
  }
};
