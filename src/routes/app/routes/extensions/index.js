import Services from '../pages/routes/services/components/Services';

export default {
  path: 'extensions',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Services);
    });
  }
};
