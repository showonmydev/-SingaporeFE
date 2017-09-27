import Products from '../ecommerce/routes/products/components/Products';

export default {
  path: 'store',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Products);
    });
  }
};
