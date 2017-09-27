import HorizontalProducts from './components/HorizontalProducts';

export default {
  path: 'horizontal-products',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, HorizontalProducts);
    });
  }
};
