import Careers from './components/Careers';

export default {
  path: 'careers',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Careers);
    });
  }
};
