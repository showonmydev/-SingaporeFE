import Mentors from './components/Mentors';

export default {
  path: 'mentors',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Mentors);
    });
  }
};
