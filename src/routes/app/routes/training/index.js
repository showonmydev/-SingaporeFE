import upload from './routes/upload';
import timeline from './routes/timeline';
import certifications from './routes/certifications';
import packs from './routes/packs';
import singles from './routes/singles';
import vendors from './routes/vendors';
import pros from './routes/pros';
import VideoPlayback from './routes/VideoPlayback';

export default {
  path: 'training',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
		timeline,
        upload,
		certifications,
		packs,
		singles,
		vendors,
		pros,
		VideoPlayback
      ]);
    });
  }
};
