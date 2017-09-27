import PricingTables from './components/PricingTables';

export default {
  path: 'pricing-tables',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, PricingTables);
    });
  }
};
