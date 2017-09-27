import Funnel from './components/Funnel';

export default {
  path: 'funnel',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Funnel);
    });
  }
};
