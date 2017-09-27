import Products from './components/Products';

export default {
  path: 'products',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Products);
    });
  }
};
