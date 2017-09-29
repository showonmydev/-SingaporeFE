import Pros from './components/pros';

export default {
  path: 'pros',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Pros);
    });
  }
};
