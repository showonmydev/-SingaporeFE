import Invoice from './components/Invoice';

export default {
  path: 'invoice',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Invoice);
    });
  }
};
