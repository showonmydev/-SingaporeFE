import upload from './routes/upload';
import timeline from './routes/timeline';
import certifications from './routes/certifications';

export default {
  path: 'training',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
		timeline,
        upload,
		certifications,
      ]);
    });
  }
};
