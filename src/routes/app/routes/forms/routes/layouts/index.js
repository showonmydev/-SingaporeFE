import Layouts from './components/Layouts';

export default {
  path: 'layouts',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Layouts);
    });
  }
};
