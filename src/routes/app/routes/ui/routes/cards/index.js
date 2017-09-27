import Cards from './components/Cards';

export default {
  path: 'cards',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Cards);
    });
  }
};
