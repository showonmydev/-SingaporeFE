import Icons from './components/Icons';

export default {
  path: 'icons',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Icons);
    });
  }
};
