import Testimonials from './components/Testimonials';

export default {
  path: 'testimonials',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Testimonials);
    });
  }
};
