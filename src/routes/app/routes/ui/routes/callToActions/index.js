import CallToActions from './components/CallToActions';

export default {
  path: 'call-to-actions',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, CallToActions);
    });
  }
};
