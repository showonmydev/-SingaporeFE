import horizontalProducts from './routes/horizontalProducts';
import products from './routes/products';
import invoice from './routes/invoice';

export default {
  path: 'ecommerce',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        horizontalProducts,
        products,
        invoice,
      ]);
    });
  }
};
