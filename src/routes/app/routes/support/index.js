import Support from '../pages/routes/contact/components/Contact';

export default {
  path: 'support',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Support);
    });
  }
};
