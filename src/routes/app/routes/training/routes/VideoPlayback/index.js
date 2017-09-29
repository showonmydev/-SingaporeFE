import VideoPlayback from './components/VideoPlayback';

export default {
  path: 'VideoPlayback',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, VideoPlayback);
    });
  }
};
