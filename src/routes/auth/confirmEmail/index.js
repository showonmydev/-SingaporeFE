import ConfirmEmail from './components/ConfirmEmail';

export default {
  path: 'sign-up/confirm-email',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ConfirmEmail);
    });
  }
};
