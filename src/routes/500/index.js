import Error500 from './components/500';

module.exports = {
  path: '500',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Error500);
    });
  }
};
