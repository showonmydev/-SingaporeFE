import Error404 from './components/404';

export default {
  path: '404',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Error404);
    });
  }
};
