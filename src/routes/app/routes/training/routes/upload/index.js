import Upload from './components/upload';

export default {
  path: 'upload',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Upload);
    });
  }
};
