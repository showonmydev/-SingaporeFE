import Lists from './components/Lists';

export default {
  path: 'lists',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Lists);
    });
  }
};
