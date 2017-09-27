import Line from './components/Line';

export default {
  path: 'line',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Line);
    });
  }
};
