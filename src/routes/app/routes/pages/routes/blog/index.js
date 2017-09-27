import Page from './components/Blog';

export default {
  path: 'blog',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Page);
    });
  }
};
