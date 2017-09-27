import Buttons from './components/Buttons';

export default {
  path: 'buttons',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Buttons);
    });
  }
};
