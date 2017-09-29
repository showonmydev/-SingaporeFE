import Vendors from './components/vendors';

export default {
  path: 'vendors',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Vendors);
    });
  }
};
