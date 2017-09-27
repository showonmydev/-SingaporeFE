import Team from './components/Team';

export default {
  path: 'team',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Team);
    });
  }
};
