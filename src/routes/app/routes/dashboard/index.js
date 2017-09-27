import Dashboard from './components/Dashboard';

export default {
  path: 'dashboard',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Dashboard);
    });
  }
};
