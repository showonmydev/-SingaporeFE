import Fullscreen from './components/Fullscreen';

export default {
  path: 'fullscreen',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Fullscreen);
    });
  }
};
